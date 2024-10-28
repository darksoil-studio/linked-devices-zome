use hdi::prelude::*;

pub fn validate_create_link_agent_to_linked_devices(
    _action: CreateLink,
    _base_address: AnyLinkableHash,
    _target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(base_agent) = base_address.clone().into_agent_pubkey() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No AgentPubKey at the base of",
        )));
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
