use hdk::prelude::*;
use linked_devices_integrity::*;

#[hdk_extern]
pub fn get_linked_devices_for_agent(agent: AgentPubKey) -> ExternResult<Vec<Link>> {
    get_links(GetLinksInputBuilder::try_new(agent, LinkTypes::AgentToLinkedDevices)?.build())
}

pub fn query_my_linked_devices_agents() -> ExternResult<Vec<AgentPubKey>> {
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
    Ok(my_linked_devices)
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

    let linked_devices_links: Vec<Link> = links
        .into_iter()
        .filter(
            |link| match LinkTypes::from_type(link.zome_index, link.link_type) {
                Ok(Some(LinkTypes::AgentToLinkedDevices)) => true,
                _ => false,
            },
        )
        .collect();

    Ok(linked_devices_links)
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
