use hdi::prelude::*;
use linked_devices_types::{are_agents_linked, AgentToLinkedDevicesLinkTag, LinkedDevicesProof};

use crate::LinkTypes;

fn validate_linked_devices_proof(
    linked_device_proof: &LinkedDevicesProof,
) -> ExternResult<ValidateCallbackResult> {
    if linked_device_proof
        .linked_devices
        .agents
        .len()
        .ne(&linked_device_proof.signatures.len())
    {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid LinkedDevicesProof: Number of signatures does not equal the number of linked devices"
        )));
    }

    for i in 0..linked_device_proof.linked_devices.agents.len() {
        let agent = linked_device_proof.linked_devices.agents[i].clone();
        let signature = linked_device_proof.signatures[i].clone();
        let valid = verify_signature(
            agent.clone(),
            signature,
            linked_device_proof.linked_devices.clone(),
        )?;
        if !valid {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "Invalid LinkedDevicesProof: signature for agent {agent} is not valid"
            )));
        }
    }
    return Ok(ValidateCallbackResult::Valid);
}

pub fn validate_create_link_agent_to_linked_devices(
    action_hash: ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(base_agent) = base_address.clone().into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No AgentPubKey as the base of an AgentToLinkedDevices link",
        )));
    };
    if base_agent.ne(&action.author) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Only agents can author AgentToLinkedDevices links using themselves as the base.",
        )));
    }
    let Some(target_agent) = target_address.clone().into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No AgentPubKey as the target of an AgentToLinkedDevices link",
        )));
    };
    if base_agent.eq(&target_agent) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Agents cannot create AgentToLinkedDevices links targetting themselves",
        )));
    }

    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(tag.into_inner()));

    let Ok(tag) = AgentToLinkedDevicesLinkTag::try_from(tag_bytes) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Invalid tag for an AgentToLinkedDevices link",
        )));
    };

    for proof in &tag.0 {
        let result = validate_linked_devices_proof(proof)?;

        let ValidateCallbackResult::Valid = result else {
            return Ok(result);
        };
    }

    if !are_agents_linked(&base_agent, &target_agent, &tag.0) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Agents are not proven to be linked with the given LinkDevicesProofs",
        )));
    }

    let activity = must_get_agent_activity(action.author, ChainFilter::new(action_hash.clone()))?;

    for action in activity {
        if action.action.hashed.hash.eq(&action_hash) {
            continue;
        }
        let Action::CreateLink(create_link) = &action.action.action() else {
            continue;
        };
        let Ok(Some(LinkTypes::AgentToLinkedDevices)) =
            LinkTypes::from_type(create_link.zome_index, create_link.link_type)
        else {
            continue;
        };

        let Some(prevoius_target_agent) = create_link.target_address.clone().into_agent_pub_key()
        else {
            continue;
        };

        if prevoius_target_agent.eq(&target_agent) {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "This agent was already linked as a LinkedDevice"
            )));
        }
    }

    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_agent_to_linked_devices(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(String::from(
        "AgentToLinkedDevices links cannot be deleted",
    )))
}
