use hdi::prelude::*;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct AgentToLinkedDevicesLinkTag(pub Vec<LinkedDevicesProof>);

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct LinkedDevicesProof {
    pub linked_devices: LinkedDevices,
    pub signatures: Vec<Signature>,
}

#[derive(Serialize, Deserialize, Debug, SerializedBytes, Clone)]
pub struct LinkedDevices {
    pub agents: Vec<AgentPubKey>,
    pub timestamp: Timestamp,
}

pub fn validate_linked_devices_proof(
    linked_device_proof: &LinkedDevicesProof,
) -> ExternResult<ValidateCallbackResult> {
    if linked_device_proof
        .linked_devices
        .agents
        .len()
        .ne(&linked_device_proof.signatures.len())
    {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid LinkedDevicesProof: Number of signatures does not equal the number of linked devices"
        )));
    }

    for i in 0..linked_device_proof.linked_devices.agents.len() {
        let agent = linked_device_proof.linked_devices.agents[i].clone();
        let signature = linked_device_proof.signatures[i].clone();
        let valid = verify_signature(
            agent.clone(),
            signature,
            linked_device_proof.linked_devices.clone(),
        )?;
        if !valid {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "Invalid LinkedDevicesProof: signature for agent {agent} is not valid"
            )));
        }
    }
    return Ok(ValidateCallbackResult::Valid);
}
