use hdi::prelude::*;
use linked_devices_types::{
    validate_linked_devices_proof, AgentToLinkedDevicesLinkTag, LinkedDevicesProof,
};

fn validate_agents_are_linked(
    agent_1: AgentPubKey,
    agent_2: AgentPubKey,
    proofs: Vec<LinkedDevicesProof>,
) -> ExternResult<ValidateCallbackResult> {
    for proof in proofs {
        if proof.linked_devices.agents.contains(&agent_1)
            && proof.linked_devices.agents.contains(&agent_2)
        {
            return Ok(ValidateCallbackResult::Valid);
        }
    }
    Ok(ValidateCallbackResult::Invalid(format!(
        "Given agents are not proven to be linked with the given LinkedDevicesProofs"
    )))
}

pub fn validate_create_link_agent_to_linked_devices(
    _action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(base_agent) = base_address.clone().into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No AgentPubKey as the base of an AgentToLinkedDevices link",
        )));
    };
    let Some(target_agent) = target_address.clone().into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No AgentPubKey as the target of an AgentToLinkedDevices link",
        )));
    };

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
    let result = validate_agents_are_linked(base_agent, target_agent, tag.0)?;

    let ValidateCallbackResult::Valid = result else {
        return Ok(result);
    };

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
