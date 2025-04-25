use hdk::prelude::*;
use linked_devices_integrity::{
    AgentToLinkedDevicesLinkTag, LinkTypes, LinkedDevices, LinkedDevicesProof,
};

use crate::{utils::create_link_relaxed, Signal};

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
pub fn prepare_discover_agent() -> ExternResult<()> {
    let mut functions = BTreeSet::new();
    functions.insert((
        zome_info()?.name,
        FunctionName("receive_discover_agent".into()),
    ));
    let access = CapAccess::Unrestricted;
    let now = sys_time()?;
    let cap_grant_entry: CapGrantEntry = CapGrantEntry::new(
        format!("link-devices-{}", now), // A string by which to later query for saved grants.
        access,
        GrantedFunctions::Listed(functions),
    );

    create(CreateInput::new(
        EntryDefLocation::CapGrant,
        EntryVisibility::Private,
        Entry::CapGrant(cap_grant_entry),
        ChainTopOrdering::Relaxed,
    ))?;
    Ok(())
}

#[hdk_extern]
pub fn attempt_discover_agent(agent: AgentPubKey) -> ExternResult<()> {
    let response = call_remote(
        agent,
        zome_info()?.name,
        "receive_discover_agent".into(),
        None,
        (),
    )?;

    match response {
        ZomeCallResponse::Ok(_) => Ok(()),
        _ => Err(wasm_error!(WasmErrorInner::Guest(format!("{response:?}")))),
    }
}

#[hdk_extern]
pub fn receive_discover_agent() -> ExternResult<()> {
    let agent = call_info()?;
    emit_signal(Signal::AgentDiscovered {
        agent: agent.provenance,
    })?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PrepareLinkDevicesRequestorInput {
    pub recipient: AgentPubKey,
    pub my_passcode: Vec<u8>,
}
#[hdk_extern]
pub fn prepare_link_devices_requestor(input: PrepareLinkDevicesRequestorInput) -> ExternResult<()> {
    let mut functions = BTreeSet::new();
    functions.insert((
        zome_info()?.name,
        FunctionName("receive_accept_link_devices".into()),
    ));
    let access = CapAccess::Assigned {
        secret: secret_from_passcode(input.my_passcode),
        assignees: vec![input.recipient].into_iter().collect(),
    };
    let now = sys_time()?;
    let cap_grant_entry: CapGrantEntry = CapGrantEntry::new(
        format!("link-devices-{}", now), // A string by which to later query for saved grants.
        access,
        GrantedFunctions::Listed(functions),
    );

    create(CreateInput::new(
        EntryDefLocation::CapGrant,
        EntryVisibility::Private,
        Entry::CapGrant(cap_grant_entry),
        ChainTopOrdering::Relaxed,
    ))?;

    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PrepareLinkDevicesRecipientInput {
    pub requestor: AgentPubKey,
    pub my_passcode: Vec<u8>,
}
#[hdk_extern]
pub fn prepare_link_devices_recipient(input: PrepareLinkDevicesRecipientInput) -> ExternResult<()> {
    let mut functions = BTreeSet::new();
    functions.insert((
        zome_info()?.name,
        FunctionName("receive_request_link_devices".into()),
    ));
    let access = CapAccess::Assigned {
        secret: secret_from_passcode(input.my_passcode),
        assignees: vec![input.requestor].into_iter().collect(),
    };
    let now = sys_time()?;
    let cap_grant_entry: CapGrantEntry = CapGrantEntry::new(
        format!("link-devices-{}", now), // A string by which to later query for saved grants.
        access,
        GrantedFunctions::Listed(functions),
    );

    create(CreateInput::new(
        EntryDefLocation::CapGrant,
        EntryVisibility::Private,
        Entry::CapGrant(cap_grant_entry),
        ChainTopOrdering::Relaxed,
    ))?;

    Ok(())
}

fn query_link_devices_cap_grants() -> ExternResult<Vec<Record>> {
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
        if cap_grant.tag.as_str().starts_with("link-devices-") {
            link_agents_cap_grants.push(record)
        }
    }

    Ok(link_agents_cap_grants)
}

#[hdk_extern]
pub fn clear_link_devices_cap_grants() -> ExternResult<()> {
    let link_agent_cap_grants = query_link_devices_cap_grants()?;

    for record in link_agent_cap_grants {
        delete(DeleteInput {
            deletes_action_hash: record.action_address().clone(),
            chain_top_ordering: ChainTopOrdering::Relaxed,
        })?;
    }

    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub struct RequestLinkDevicesInput {
    pub recipient: AgentPubKey,
    pub recipient_passcode: Vec<u8>,
}
#[hdk_extern]
pub fn request_link_devices(input: RequestLinkDevicesInput) -> ExternResult<()> {
    let response = call_remote(
        input.recipient,
        zome_info()?.name,
        "receive_request_link_devices".into(),
        Some(secret_from_passcode(input.recipient_passcode)),
        (),
    )?;

    match response {
        ZomeCallResponse::Ok(_) => Ok(()),
        _ => Err(wasm_error!(WasmErrorInner::Guest(format!("{response:?}")))),
    }
}

#[hdk_extern]
pub fn receive_request_link_devices() -> ExternResult<()> {
    let requestor = call_info()?.provenance;

    emit_signal(Signal::LinkDevicesInitialized { requestor })?;
    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub struct AcceptLinkDevicesInput {
    pub requestor: AgentPubKey,
    pub requestor_passcode: Vec<u8>,
}
// Called by the recipient
#[hdk_extern]
pub fn accept_link_devices(input: AcceptLinkDevicesInput) -> ExternResult<()> {
    let my_pub_key = agent_info()?.agent_initial_pubkey;

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
        "receive_accept_link_devices".into(),
        Some(secret_from_passcode(input.requestor_passcode)),
        incomplete_proof,
    )?;

    let ZomeCallResponse::Ok(result) = response else {
        clear_link_devices_cap_grants(())?;
        return Err(wasm_error!(WasmErrorInner::Guest(format!("{response:?}"))));
    };

    let signature: Signature = result.decode().map_err(|err| wasm_error!(err))?;

    let proof = LinkedDevicesProof {
        linked_devices,
        signatures: vec![my_signature, signature],
    };

    let tag = AgentToLinkedDevicesLinkTag(vec![proof]);

    create_link_devices_link(input.requestor, tag)?;

    clear_link_devices_cap_grants(())?;

    Ok(())
}

pub const LINKED_DEVICES_PROOF_TTL_US: u64 = 5_000_000; // 5 seconds

const TTL_LIVE_AGENTS_CAP_GRANTS: i64 = 1000 * 1000 * 60; // 1 minute

#[hdk_extern]
pub fn receive_accept_link_devices(
    incomplete_proof: LinkedDevicesProof,
) -> ExternResult<Signature> {
    let linked_devices = incomplete_proof.linked_devices;
    let my_pub_key = agent_info()?.agent_initial_pubkey;
    let call_info = call_info()?;
    let caller = call_info.provenance;

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

    let link_agents_cap_grants = query_link_devices_cap_grants()?;
    let now = sys_time()?;

    let recent_enough_cap_grant = link_agents_cap_grants.iter().find(|r| {
        now.as_micros() - r.action().timestamp().as_micros() < TTL_LIVE_AGENTS_CAP_GRANTS
    });

    let Some(_) = recent_enough_cap_grant else {
        clear_link_devices_cap_grants(())?;
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Timed out cap grant"
        ))));
    };

    let my_signature = sign(my_pub_key.clone(), linked_devices.clone())?;

    let proof = LinkedDevicesProof {
        linked_devices,
        signatures: vec![incomplete_proof.signatures[0].clone(), my_signature.clone()],
    };

    let tag = AgentToLinkedDevicesLinkTag(vec![proof]);

    create_link_devices_link(caller, tag)?;

    clear_link_devices_cap_grants(())?;

    Ok(my_signature)
}

pub fn create_link_devices_link(
    target_linked_device: AgentPubKey,
    tag: AgentToLinkedDevicesLinkTag,
) -> ExternResult<()> {
    let my_pub_key = agent_info()?.agent_initial_pubkey;

    let tag_bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;

    create_link_relaxed(
        my_pub_key,
        target_linked_device.clone(),
        LinkTypes::AgentToLinkedDevices,
        tag_bytes.bytes().clone(),
    )?;

    Ok(())
}
