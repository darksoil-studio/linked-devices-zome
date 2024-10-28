use hdk::prelude::*;
use linked_devices_integrity::{
    AgentToLinkedDevicesLinkTag, LinkTypes, LinkedDevices, LinkedDevicesProof,
};

use crate::utils::{create_link_relaxed, delete_link_relaxed};

fn linking_agents_path() -> Path {
    Path::from("linking_agents")
}

fn secret_from_passcode(passcode: Vec<u8>) -> CapSecret {
    let mut secret: CapSecretBytes = [0; CAP_SECRET_BYTES];

    for i in 0..passcode.len() {
        secret[i] = passcode[i];
    }

    for i in passcode.len()..(CAP_SECRET_BYTES - passcode.len()) {
        secret[i] = 0;
    }

    CapSecret::from(secret)
}

#[hdk_extern]
pub fn prepare_link_devices(my_passcode: Vec<u8>) -> ExternResult<()> {
    let mut functions = BTreeSet::new();
    functions.insert((
        zome_info()?.name,
        FunctionName("receive_init_link_devices".into()),
    ));
    functions.insert((
        zome_info()?.name,
        FunctionName("receive_request_link_devices".into()),
    ));
    let access = CapAccess::Transferable {
        secret: secret_from_passcode(my_passcode),
    };
    let cap_grant_entry: CapGrantEntry = CapGrantEntry::new(
        String::from("link-devices"), // A string by which to later query for saved grants.
        access,
        GrantedFunctions::Listed(functions),
    );

    create(CreateInput::new(
        EntryDefLocation::CapGrant,
        EntryVisibility::Private,
        Entry::CapGrant(cap_grant_entry),
        ChainTopOrdering::Relaxed,
    ))?;

    let linking_agents_path = linking_agents_path();

    create_link_relaxed(
        linking_agents_path.path_entry_hash()?,
        agent_info()?.agent_latest_pubkey,
        LinkTypes::LinkingAgents,
        (),
    )?;

    Ok(())
}

#[hdk_extern]
pub fn get_linking_agents() -> ExternResult<Vec<Link>> {
    let linking_agents_path = linking_agents_path();
    get_links(
        GetLinksInputBuilder::try_new(
            linking_agents_path.path_entry_hash()?,
            LinkTypes::LinkingAgents,
        )?
        .build(),
    )
}

fn query_link_agents_cap_grants() -> ExternResult<Vec<Record>> {
    let filter = ChainQueryFilter::new()
        .entry_type(EntryType::CapGrant)
        .include_entries(true)
        .action_type(ActionType::Create);
    let records = query(filter)?;

    let mut link_agents_cap_grants = Vec::new();

    for record in records {
        let Some(entry) = record.entry().as_option() else {
            continue;
        };
        let Entry::CapGrant(cap_grant) = entry else {
            continue;
        };
        if cap_grant.tag.as_str() == "link-devices" {
            link_agents_cap_grants.push(record)
        }
    }

    Ok(link_agents_cap_grants)
}

#[hdk_extern]
pub fn clear_link_devices() -> ExternResult<()> {
    let link_agent_cap_grants = query_link_agents_cap_grants()?;

    for record in link_agent_cap_grants {
        delete(DeleteInput {
            deletes_action_hash: record.action_address().clone(),
            chain_top_ordering: ChainTopOrdering::Relaxed,
        })?;
    }
    let my_pub_key = agent_info()?.agent_latest_pubkey;

    let links = get_linking_agents(())?;
    for link in links {
        if link.author.eq(&my_pub_key) {
            delete_link_relaxed(link.create_link_hash)?;
        }
    }

    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub struct InitLinkDevicesInput {
    pub recipient: AgentPubKey,
    pub recipient_passcode: Vec<u8>,
}
#[hdk_extern]
pub fn init_link_devices(input: InitLinkDevicesInput) -> ExternResult<()> {
    let response = call_remote(
        input.recipient,
        zome_info()?.name,
        "receive_init_link_devices".into(),
        Some(secret_from_passcode(input.recipient_passcode)),
        (),
    )?;

    match response {
        ZomeCallResponse::Ok(_) => Ok(()),
        _ => Err(wasm_error!(WasmErrorInner::Guest(format!("{response:?}")))),
    }
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
pub enum LinkDevicesSignal {
    LinkDevicesInitialized { requestor: AgentPubKey },
}

#[hdk_extern]
pub fn receive_init_link_devices() -> ExternResult<()> {
    let requestor = call_info()?.provenance;

    emit_signal(LinkDevicesSignal::LinkDevicesInitialized { requestor })?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub struct RequestLinkDevicesInput {
    pub requestor: AgentPubKey,
    pub requestor_passcode: Vec<u8>,
}
// Called by the recipient
#[hdk_extern]
pub fn request_link_devices(input: RequestLinkDevicesInput) -> ExternResult<()> {
    let my_pub_key = agent_info()?.agent_latest_pubkey;

    let linked_devices = LinkedDevices {
        agents: vec![my_pub_key.clone(), input.requestor.clone()],
        timestamp: sys_time()?,
    };

    let my_signature = sign(my_pub_key.clone(), linked_devices.clone())?;
    let incomplete_proof = LinkedDevicesProof {
        linked_devices: linked_devices.clone(),
        signatures: vec![my_signature.clone()],
    };

    let response = call_remote(
        input.requestor.clone(),
        zome_info()?.name,
        "receive_request_link_devices".into(),
        Some(secret_from_passcode(input.requestor_passcode)),
        incomplete_proof,
    )?;

    let ZomeCallResponse::Ok(result) = response else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!("{response:?}"))));
    };

    let signature: Signature = result.decode().map_err(|err| wasm_error!(err))?;

    let proof = LinkedDevicesProof {
        linked_devices,
        signatures: vec![my_signature, signature],
    };

    let tag = AgentToLinkedDevicesLinkTag(vec![proof]);

    let tag_bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;

    create_link_relaxed(
        my_pub_key.clone(),
        input.requestor.clone(),
        LinkTypes::AgentToLinkedDevices,
        tag_bytes.bytes().clone(),
    )?;

    clear_link_devices(())?;

    Ok(())
}

pub const LINKED_DEVICES_PROOF_TTL_US: u64 = 5_000_000; // 5 seconds

#[hdk_extern]
pub fn receive_request_link_devices(
    incomplete_proof: LinkedDevicesProof,
) -> ExternResult<Signature> {
    let linked_devices = incomplete_proof.linked_devices;
    let my_pub_key = agent_info()?.agent_latest_pubkey;
    let caller = call_info()?.provenance;

    if !linked_devices.agents.contains(&caller) {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Caller is not in the LinkedDevicesProof"
        ))));
    }

    // If timestamp too big, error
    let now = sys_time()?;

    if now.as_micros() - linked_devices.timestamp.as_micros() > LINKED_DEVICES_PROOF_TTL_US as i64 {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Timestamp is too old"
        ))));
    }

    let my_signature = sign(my_pub_key.clone(), linked_devices.clone())?;

    let proof = LinkedDevicesProof {
        linked_devices,
        signatures: vec![incomplete_proof.signatures[0].clone(), my_signature.clone()],
    };

    let tag = AgentToLinkedDevicesLinkTag(vec![proof]);

    let tag_bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;

    create_link_relaxed(
        my_pub_key,
        caller,
        LinkTypes::AgentToLinkedDevices,
        tag_bytes.bytes().clone(),
    )?;

    clear_link_devices(())?;

    Ok(my_signature)
}
