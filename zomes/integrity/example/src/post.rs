use hdi::prelude::*;
use linked_devices_types::validate_agents_have_linked_devices;

#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct Post {
    pub title: String,
    pub content: String,
}

pub fn validate_create_post(
    _action: EntryCreationAction,
    _post: Post,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_update_post(
    action_hash: ActionHash,
    action: Update,
    _post: Post,
    original_action: EntryCreationAction,
    _original_post: Post,
) -> ExternResult<ValidateCallbackResult> {
    validate_agents_have_linked_devices(
        &action.author,
        &action_hash,
        original_action.author(),
        &action.original_action_address,
        "linked_devices_integrity".into(),
    )
}

pub fn validate_delete_post(
    action_hash: ActionHash,
    action: Delete,
    original_action: EntryCreationAction,
    _original_post: Post,
) -> ExternResult<ValidateCallbackResult> {
    validate_agents_have_linked_devices(
        &action.author,
        &action_hash,
        original_action.author(),
        &action.deletes_address,
        "linked_devices_integrity".into(),
    )
}

pub fn validate_create_link_all_posts(
    _action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let action_hash =
        target_address
            .into_action_hash()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;
    let record = must_get_valid_record(action_hash)?;
    let _post: crate::Post = record
        .entry()
        .to_app_option()
        .map_err(|e| wasm_error!(e))?
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "Linked action must reference an entry".to_string()
        )))?;
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_all_posts(
    action_hash: ActionHash,
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    validate_agents_have_linked_devices(
        &action.author,
        &action_hash,
        &original_action.author,
        &action.link_add_address,
        "linked_devices_integrity".into(),
    )
}
