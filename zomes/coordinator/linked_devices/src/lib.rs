use hdk::prelude::*;
use linked_devices_integrity::*;

pub mod agent_to_linked_devices;
pub mod link_devices;
pub mod scheduled;
pub mod utils;

#[hdk_extern]
pub fn init(_: ()) -> ExternResult<InitCallbackResult> {
    Ok(InitCallbackResult::Pass)
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
pub enum Signal {
    LinkCreated {
        action: SignedActionHashed,
        link_type: LinkTypes,
    },
    LinkDeleted {
        action: SignedActionHashed,
        create_link_action: SignedActionHashed,
        link_type: LinkTypes,
    },
}

#[hdk_extern(infallible)]
pub fn post_commit(committed_actions: Vec<SignedActionHashed>) {
    for action in committed_actions {
        if let Err(err) = signal_action(action) {
            error!("Error signaling new action: {:?}", err);
        }
    }
}

fn signal_action(action: SignedActionHashed) -> ExternResult<()> {
    match action.hashed.content.clone() {
        Action::CreateLink(create_link) => {
            if let Ok(Some(link_type)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                emit_signal(Signal::LinkCreated { action, link_type })?;
                if let LinkTypes::AgentToLinkedDevices = link_type {
                    let Some(linked_device) = create_link.target_address.into_agent_pub_key()
                    else {
                        return Err(wasm_error!(WasmErrorInner::Guest(format!(
                            "Unreachable: AgentToLinkedDevices does not target an AgentPubKey"
                        ))));
                    };
                    call_remote(
                        agent_info()?.agent_latest_pubkey,
                        zome_info()?.name,
                        "link_transitive_devices_for_device".into(),
                        None,
                        linked_device,
                    )?;
                }
            }
            Ok(())
        }
        Action::DeleteLink(delete_link) => {
            let record = get(delete_link.link_add_address.clone(), GetOptions::default())?.ok_or(
                wasm_error!(WasmErrorInner::Guest(
                    "Failed to fetch CreateLink action".to_string()
                )),
            )?;
            match record.action() {
                Action::CreateLink(create_link) => {
                    if let Ok(Some(link_type)) =
                        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                    {
                        emit_signal(Signal::LinkDeleted {
                            action,
                            link_type,
                            create_link_action: record.signed_action.clone(),
                        })?;
                    }
                    Ok(())
                }
                _ => Err(wasm_error!(WasmErrorInner::Guest(
                    "Create Link should exist".to_string()
                ))),
            }
        }
        _ => Ok(()),
    }
}
