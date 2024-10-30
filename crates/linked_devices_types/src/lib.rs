use hdi::prelude::*;

mod are_agents_linked;
pub use are_agents_linked::are_agents_linked;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct AgentToLinkedDevicesLinkTag(pub Vec<LinkedDevicesProof>);

#[derive(Serialize, Deserialize, Debug, SerializedBytes, Clone)]
pub struct LinkedDevicesProof {
    pub linked_devices: LinkedDevices,
    pub signatures: Vec<Signature>,
}

#[derive(Serialize, Deserialize, Debug, SerializedBytes, Clone)]
pub struct LinkedDevices {
    pub agents: Vec<AgentPubKey>,
    pub timestamp: Timestamp,
}

pub const AGENT_TO_LINKED_DEVICES_LINK_INDEX: u8 = 0;

pub fn validate_agents_have_linked_devices(
    agent_a: &AgentPubKey,
    agent_a_chain_top: &ActionHash,
    agent_b: &AgentPubKey,
    agent_b_chain_top: &ActionHash,
    linked_devices_integrity_zome_name: ZomeName,
) -> ExternResult<ValidateCallbackResult> {
    let dna_info = dna_info()?;

    let Some(linked_devices_integrity_zome_index) = dna_info
        .zome_names
        .into_iter()
        .position(|z| z.eq(&linked_devices_integrity_zome_name))
    else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Unreachable: there is no 'linked_devices' integrity zome in this DNA",
        )));
    };

    validate_agents_have_linked_devices_with_zome_index(
        agent_a,
        agent_a_chain_top,
        agent_b,
        agent_b_chain_top,
        ZomeIndex::new(linked_devices_integrity_zome_index as u8),
    )
}

pub fn validate_agents_have_linked_devices_with_zome_index(
    agent_a: &AgentPubKey,
    agent_a_chain_top: &ActionHash,
    agent_b: &AgentPubKey,
    agent_b_chain_top: &ActionHash,
    linked_devices_integrity_zome_index: ZomeIndex,
) -> ExternResult<ValidateCallbackResult> {
    let agent_a_has_linked_agent_b = has_linked_device(
        agent_a.clone(),
        agent_a_chain_top.clone(),
        agent_b.clone(),
        linked_devices_integrity_zome_index,
    )?;
    if agent_a_has_linked_agent_b {
        return Ok(ValidateCallbackResult::Valid);
    }
    let agent_b_has_linked_agent_a = has_linked_device(
        agent_b.clone(),
        agent_b_chain_top.clone(),
        agent_a.clone(),
        linked_devices_integrity_zome_index,
    )?;

    if agent_b_has_linked_agent_a {
        return Ok(ValidateCallbackResult::Valid);
    }

    Ok(ValidateCallbackResult::Invalid(format!(
        "Agents have not linked devices at this chain top"
    )))
}

pub fn validate_agent_has_linked_device(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    linked_device: &AgentPubKey,
    linked_devices_integrity_zome_name: ZomeName,
) -> ExternResult<ValidateCallbackResult> {
    let dna_info = dna_info()?;

    let Some(linked_devices_integrity_zome_index) = dna_info
        .zome_names
        .into_iter()
        .position(|z| z.eq(&linked_devices_integrity_zome_name))
    else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Unreachable: there is no 'linked_devices' integrity zome in this DNA",
        )));
    };

    validate_agent_has_linked_device_with_zome_index(
        agent,
        chain_top,
        linked_device,
        ZomeIndex::new(linked_devices_integrity_zome_index as u8),
    )
}

pub fn validate_agent_has_linked_device_with_zome_index(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    linked_device: &AgentPubKey,
    linked_devices_integrity_zome_index: ZomeIndex,
) -> ExternResult<ValidateCallbackResult> {
    let linked = has_linked_device(
        agent.clone(),
        chain_top.clone(),
        linked_device.clone(),
        linked_devices_integrity_zome_index,
    )?;
    match linked {
        true => Ok(ValidateCallbackResult::Valid),
        false => Ok(ValidateCallbackResult::Invalid(format!(
            "Agent has not linked the given device at the given chain top"
        ))),
    }
}

fn has_linked_device(
    agent: AgentPubKey,
    chain_top: ActionHash,
    linked_device: AgentPubKey,
    linked_devices_integrity_zome_index: ZomeIndex,
) -> ExternResult<bool> {
    let activity = must_get_agent_activity(agent.clone(), ChainFilter::new(chain_top))?;
    let agent_to_linked_devices_tags: Vec<AgentToLinkedDevicesLinkTag> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::CreateLink(create_link) => Some(create_link.clone()),
            _ => None,
        })
        .filter(|create_link| {
            create_link.zome_index == linked_devices_integrity_zome_index
                && create_link.link_type.0 == AGENT_TO_LINKED_DEVICES_LINK_INDEX
        })
        .map(|create_link| {
            let bytes =
                SerializedBytes::from(UnsafeBytes::from(create_link.tag.into_inner().clone()));
            let tag =
                AgentToLinkedDevicesLinkTag::try_from(bytes).map_err(|err| wasm_error!(err))?;
            Ok(tag)
        })
        .collect::<ExternResult<Vec<AgentToLinkedDevicesLinkTag>>>()?;

    let agent_to_linked_device = agent_to_linked_devices_tags
        .into_iter()
        .find(|tag| are_agents_linked(&agent, &linked_device, &tag.0));

    Ok(agent_to_linked_device.is_some())
}
