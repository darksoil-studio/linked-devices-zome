use hdk::prelude::*;
use linked_devices_integrity::*;

use crate::{
    agent_to_linked_devices::{query_my_linked_devices, query_my_linked_devices_agents},
    link_devices::create_link_devices_link,
    utils::retry_until,
};

#[hdk_extern(infallible)]
pub fn link_transitive_devices(_schedule: Option<Schedule>) -> Option<Schedule> {
    if let Err(err) = internal_link_transitive_devices() {
        error!("Error calling internal_link_transitive_devices: {err:?}");
    }

    Some(Schedule::Persisted("*/60 * * * * * *".into()))
}

fn internal_link_transitive_devices() -> ExternResult<()> {
    let my_linked_devices = query_my_linked_devices_agents()?;

    for linked_device in my_linked_devices {
        link_transitive_devices_for_device(linked_device)?;
    }

    Ok(())
}

#[derive(Serialize, Deserialize, Debug)]
pub enum LinkedDevicesRemoteSignal {
    NewDeviceLinked(AgentPubKey),
}

#[hdk_extern]
pub fn recv_remote_signal(signal: LinkedDevicesRemoteSignal) -> ExternResult<()> {
    match signal {
        LinkedDevicesRemoteSignal::NewDeviceLinked(new_linked_device) => {
            let caller = call_info()?.provenance;

            let my_linked_devices_agent = query_my_linked_devices_agents()?;

            if !my_linked_devices_agent.contains(&caller) {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "recv_remote_signal called by an agent which we are not linked to"
                ))));
            }

            let get_links_input =
                GetLinksInputBuilder::try_new(caller.clone(), LinkTypes::AgentToLinkedDevices)?
                    .build();

            retry_until(
                || {
                    let Ok(transitive_linked_devices_links) = get_links(get_links_input.clone())
                    else {
                        return false;
                    };

                    let link_for_new_device = transitive_linked_devices_links
                        .into_iter()
                        .filter_map(|link| link.target.into_agent_pub_key())
                        .find(|agent| agent.eq(&new_linked_device));
                    link_for_new_device.is_some()
                },
                10,
            )?;

            link_transitive_devices_for_device(caller)?;

            Ok(())
        }
    }
}

#[hdk_extern]
pub fn link_transitive_devices_for_device(linked_device: AgentPubKey) -> ExternResult<()> {
    let transitive_linked_devices_links = get_links(
        GetLinksInputBuilder::try_new(linked_device.clone(), LinkTypes::AgentToLinkedDevices)?
            .build(),
    )?;

    let my_linked_devices_links = query_my_linked_devices(())?;
    let my_linked_devices = my_linked_devices_links
        .iter()
        .map(|link| match link.target.clone().into_agent_pub_key() {
            Some(pubkey) => Ok(pubkey),
            None => Err(wasm_error!(WasmErrorInner::Guest(format!(
                "Unreachable: an AgentToLinkedDevices link did not point to an AgentPubKey"
            )))),
        })
        .collect::<ExternResult<Vec<AgentPubKey>>>()?;

    let maybe_my_link_for_this_device = my_linked_devices_links.iter().find(|link| {
        match link.target.clone().into_agent_pub_key() {
            Some(target_agent) => target_agent.eq(&linked_device),
            None => false,
        }
    });

    let Some(my_link_for_this_device) = maybe_my_link_for_this_device else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "I am not linked with the given linked_device yet"
        ))));
    };

    let bytes = SerializedBytes::from(UnsafeBytes::from(
        my_link_for_this_device.tag.clone().into_inner(),
    ));
    let linked_devices_proof_for_this_device =
        AgentToLinkedDevicesLinkTag::try_from(bytes).map_err(|err| wasm_error!(err))?;

    let my_pub_key = agent_info()?.agent_latest_pubkey;

    for transitive_linked_device_link in transitive_linked_devices_links {
        let Some(transitive_linked_device) =
            transitive_linked_device_link.target.into_agent_pub_key()
        else {
            return Err(wasm_error!(WasmErrorInner::Guest(format!(
                "Unreachable: an AgentToLinkedDevices link did not point to an AgentPubKey"
            ))));
        };
        if transitive_linked_device.eq(&my_pub_key) {
            continue;
        }

        if my_linked_devices.contains(&transitive_linked_device) {
            continue;
        }

        let bytes = SerializedBytes::from(UnsafeBytes::from(
            transitive_linked_device_link.tag.into_inner(),
        ));
        let linked_devices_proof_for_transitive_device =
            AgentToLinkedDevicesLinkTag::try_from(bytes).map_err(|err| wasm_error!(err))?;
        let mut all_proofs = linked_devices_proof_for_this_device.0.clone();
        all_proofs.append(&mut linked_devices_proof_for_transitive_device.0.clone());
        let tag = AgentToLinkedDevicesLinkTag(all_proofs);

        create_link_devices_link(transitive_linked_device.clone(), tag)?;
    }

    Ok(())
}
