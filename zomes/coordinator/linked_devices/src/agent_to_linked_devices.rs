use hdk::prelude::*;
use linked_devices_integrity::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct AddLinkedDeviceInput {
    pub linked_device: AgentPubKey,
    pub proof: LinkedDevicesProof,
}

#[hdk_extern]
pub fn add_linked_device(input: AddLinkedDeviceInput) -> ExternResult<()> {
    let my_agent = agent_info()?.agent_latest_pubkey;

    let tag = AgentToLinkedDevicesLinkTag(vec![input.proof]);
    let tag_bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;

    create_link(
        my_agent.clone(),
        input.linked_device.clone(),
        LinkTypes::AgentToLinkedDevices,
        tag_bytes.bytes().to_vec(),
    )?;
    Ok(())
}

#[hdk_extern]
pub fn get_linked_devices_for_agent(agent: AgentPubKey) -> ExternResult<Vec<Link>> {
    get_links(GetLinksInputBuilder::try_new(agent, LinkTypes::AgentToLinkedDevices)?.build())
}
