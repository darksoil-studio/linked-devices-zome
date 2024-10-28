use hdk::prelude::*;
use linked_devices_integrity::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct AddLinkedDeviceForAgentInput {
    pub base_agent: AgentPubKey,
    pub target_linked_device: AgentPubKey,
}

#[hdk_extern]
pub fn add_linked_device(input: AddLinkedDeviceForAgentInput) -> ExternResult<()> {
    create_link(
        input.base_agent.clone(),
        input.target_linked_device.clone(),
        LinkTypes::AgentToLinkedDevices,
        (),
    )?;
    Ok(())
}

#[hdk_extern]
pub fn get_linked_devices_for_agent(agent: AgentPubKey) -> ExternResult<Vec<Link>> {
    get_links(GetLinksInputBuilder::try_new(agent, LinkTypes::AgentToLinkedDevices)?.build())
}
