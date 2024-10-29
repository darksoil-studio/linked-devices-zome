use hdk::prelude::*;

pub fn create_link_relaxed<T, E>(
    base_address: impl Into<AnyLinkableHash>,
    target_address: impl Into<AnyLinkableHash>,
    link_type: T,
    tag: impl Into<LinkTag>,
) -> ExternResult<()>
where
    ScopedLinkType: TryFrom<T, Error = E>,
    WasmError: From<E>,
{
    let ScopedLinkType {
        zome_index,
        zome_type: link_type,
    } = link_type.try_into()?;
    HDK.with(|h| {
        h.borrow().create_link(CreateLinkInput::new(
            base_address.into(),
            target_address.into(),
            zome_index,
            link_type,
            tag.into(),
            ChainTopOrdering::Relaxed,
        ))
    })?;

    Ok(())
}

pub fn delete_link_relaxed(address: ActionHash) -> ExternResult<()> {
    HDK.with(|h| {
        h.borrow()
            .delete_link(DeleteLinkInput::new(address, ChainTopOrdering::Relaxed))
    })?;

    Ok(())
}

pub fn retry_until<F>(task: F, max_retries: u64) -> ExternResult<()>
where
    F: Fn() -> bool,
{
    let mut retry_count = 0;
    while retry_count < max_retries {
        let result = task();
        if result {
            return Ok(());
        }
        retry_count += 1;
        sleep(1_000)?;
    }
    Ok(())
}

// Forgive me CPU, let's hope holochain implements `sleep()` soon
pub fn sleep(ms: u64) -> ExternResult<()> {
    let start = sys_time()?;
    while sys_time()?.as_millis() - start.as_millis() < ms as i64 {}
    Ok(())
}
