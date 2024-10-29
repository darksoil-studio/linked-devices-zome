use hdk::prelude::*;
use linked_devices_integrity::*;

// #[derive(Serialize, Deserialize, Debug)]
// pub struct AddLinkedDeviceInput {
//     pub linked_device: AgentPubKey,
//     pub proof: LinkedDevicesProof,
// }

// #[hdk_extern]
// pub fn add_linked_device(input: AddLinkedDeviceInput) -> ExternResult<()> {
//     let my_agent = agent_info()?.agent_latest_pubkey;

//     let tag = AgentToLinkedDevicesLinkTag(vec![input.proof]);
//     let tag_bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;

//     create_link(
//         my_agent.clone(),
//         input.linked_device.clone(),
//         LinkTypes::AgentToLinkedDevices,
//         tag_bytes.bytes().to_vec(),
//     )?;
//     Ok(())
// }

#[hdk_extern]
pub fn get_linked_devices_for_agent(agent: AgentPubKey) -> ExternResult<Vec<Link>> {
    get_links(GetLinksInputBuilder::try_new(agent, LinkTypes::AgentToLinkedDevices)?.build())
}

#[hdk_extern]
pub fn query_my_linked_devices() -> ExternResult<Vec<Link>> {
    let filter = ChainQueryFilter::new().action_type(ActionType::CreateLink);
    let records = query(filter)?;

    let links = records
        .into_iter()
        .map(|record| match record.action() {
            Action::CreateLink(create_link) => Ok(create_link_to_link(
                record.action_address().clone(),
                create_link.clone(),
            )),
            _ => Err(wasm_error!(WasmErrorInner::Guest(format!(
                "Unreachable: CreateLink query filter returned records that are not CreateLinks"
            )))),
        })
        .collect::<ExternResult<Vec<Link>>>()?;

    Ok(links)
}

fn create_link_to_link(action_hash: ActionHash, create_link: CreateLink) -> Link {
    Link {
        author: create_link.author,
        base: create_link.base_address,
        target: create_link.target_address,
        tag: create_link.tag,
        timestamp: create_link.timestamp,
        zome_index: create_link.zome_index,
        link_type: create_link.link_type,

        create_link_hash: action_hash,
    }
}
