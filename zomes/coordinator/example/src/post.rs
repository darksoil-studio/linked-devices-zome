use hdk::prelude::*;
use example_integrity::*;

#[hdk_extern]
pub fn create_post(post: Post) -> ExternResult<Record> {
    let post_hash = create_entry(&EntryTypes::Post(post.clone()))?;
    let record = get(post_hash.clone(), GetOptions::default())?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest("Could not find the newly created Post"
                .to_string())
            ),
        )?;
    let path = Path::from("all_posts");
    create_link(path.path_entry_hash()?, post_hash.clone(), LinkTypes::AllPosts, ())?;
    Ok(record)
}

#[hdk_extern]
pub fn get_original_post(
    original_post_hash: ActionHash,
) -> ExternResult<Option<Record>> {
    let Some(details) = get_details(original_post_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Record(details) => Ok(Some(details.record)),
        _ => {
            Err(
                wasm_error!(
                    WasmErrorInner::Guest("Malformed get details response".to_string())
                ),
            )
        }
    }
}

#[hdk_extern]
pub fn get_latest_post(original_post_hash: ActionHash) -> ExternResult<Option<Record>> {
    let Some(details) = get_details(original_post_hash, GetOptions::default())? else {
        return Ok(None);
    };
    let record_details = match details {
        Details::Entry(_) => {
            Err(wasm_error!(WasmErrorInner::Guest("Malformed details".into())))
        }
        Details::Record(record_details) => Ok(record_details),
    }?;
    match record_details.updates.last() {
        Some(update) => get_latest_post(update.action_address().clone()),
        None => Ok(Some(record_details.record)),
    }
}

#[hdk_extern]
pub fn get_all_revisions_for_post(
    original_post_hash: ActionHash,
) -> ExternResult<Vec<Record>> {
    let Some(Details::Record(details)) = get_details(
        original_post_hash,
        GetOptions::default(),
    )? else {
        return Ok(vec![]);
    };
    let mut records = vec![details.record];
    for update in details.updates {
        let mut update_records = get_all_revisions_for_post(
            update.action_address().clone(),
        )?;
        records.append(&mut update_records);
    }
    Ok(records)
}

#[derive(Serialize, Deserialize, Debug)]
pub struct UpdatePostInput {
    pub previous_post_hash: ActionHash,
    pub updated_post: Post,
}

#[hdk_extern]
pub fn update_post(input: UpdatePostInput) -> ExternResult<Record> {
    let updated_post_hash = update_entry(input.previous_post_hash, &input.updated_post)?;
    let record = get(updated_post_hash.clone(), GetOptions::default())?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest("Could not find the newly updated Post"
                .to_string())
            ),
        )?;
    Ok(record)
}

#[hdk_extern]
pub fn delete_post(original_post_hash: ActionHash) -> ExternResult<ActionHash> {
    let path = Path::from("all_posts");
    let links = get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::AllPosts)?
            .build(),
    )?;
    for link in links {
        if let Some(hash) = link.target.into_action_hash() {
            if hash == original_post_hash {
                delete_link(link.create_link_hash)?;
            }
        }
    }
    delete_entry(original_post_hash)
}

#[hdk_extern]
pub fn get_all_deletes_for_post(
    original_post_hash: ActionHash,
) -> ExternResult<Option<Vec<SignedActionHashed>>> {
    let Some(details) = get_details(original_post_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Entry(_) => {
            Err(wasm_error!(WasmErrorInner::Guest("Malformed details".into())))
        }
        Details::Record(record_details) => Ok(Some(record_details.deletes)),
    }
}

#[hdk_extern]
pub fn get_oldest_delete_for_post(
    original_post_hash: ActionHash,
) -> ExternResult<Option<SignedActionHashed>> {
    let Some(mut deletes) = get_all_deletes_for_post(original_post_hash)? else {
        return Ok(None);
    };
    deletes
        .sort_by(|delete_a, delete_b| {
            delete_a.action().timestamp().cmp(&delete_b.action().timestamp())
        });
    Ok(deletes.first().cloned())
}
