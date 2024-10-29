use std::collections::BTreeMap;

use hdi::prelude::*;

use crate::{LinkedDevices, LinkedDevicesProof};

pub fn are_agents_linked(
    agent_1: &AgentPubKey,
    agent_2: &AgentPubKey,
    proofs: &Vec<LinkedDevicesProof>,
) -> bool {
    for proof in proofs {
        if proof.linked_devices.agents.contains(agent_1)
            && proof.linked_devices.agents.contains(agent_2)
        {
            return true;
        }
    }

    let all_linked_devices: Vec<LinkedDevices> =
        proofs.iter().map(|p| p.linked_devices.clone()).collect();

    let mut all_links: BTreeMap<AgentPubKey, HashSet<AgentPubKey>> = BTreeMap::new();

    for linked_devices in all_linked_devices {
        for agent_a in &linked_devices.agents {
            for agent_b in &linked_devices.agents {
                if agent_a.ne(&agent_b) {
                    all_links
                        .entry(agent_a.clone())
                        .or_insert(HashSet::new())
                        .insert(agent_b.clone());
                    all_links
                        .entry(agent_b.clone())
                        .or_insert(HashSet::new())
                        .insert(agent_a.clone());
                }
            }
        }
    }

    if !all_links.contains_key(&agent_1) || !all_links.contains_key(&agent_2) {
        return false;
    }

    let mut current_node = agent_1.clone();
    let mut current_path: Vec<AgentPubKey> = vec![agent_1.clone()];
    let mut visited: HashSet<AgentPubKey> = HashSet::new();
    visited.insert(current_node.clone());
    let mut all_paths_explored = false;

    while !all_paths_explored {
        if current_node.eq(agent_2) {
            return true;
        }

        let neighbors = all_links
            .get(&current_node)
            .expect("Unreachable: we just added all neighbors the map");

        let next_node = neighbors
            .iter()
            .find(|neighbor| !visited.contains(&neighbor));

        match next_node {
            Some(next_node) => {
                current_node = next_node.clone();
                visited.insert(next_node.clone());
                current_path.push(next_node.clone());
            }
            None => {
                current_path.pop();
                match current_path.last() {
                    Some(node) => {
                        current_node = node.clone();
                    }
                    None => {
                        all_paths_explored = true;
                    }
                }
            }
        }
    }

    false
}

#[cfg(test)]
mod tests {
    use fixt::fixt;
    use hdi::prelude::fixt::AgentPubKeyFixturator;
    use hdi::prelude::Timestamp;

    use super::are_agents_linked;
    use crate::{LinkedDevices, LinkedDevicesProof};

    #[test]
    fn basic_linked_test() {
        let alice = fixt!(AgentPubKey);
        let bob = fixt!(AgentPubKey);

        let linked_devices = LinkedDevices {
            agents: vec![alice.clone(), bob.clone()],
            timestamp: Timestamp::max(),
        };
        let proof = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        assert!(are_agents_linked(&alice, &bob, &vec![proof]));
    }

    #[test]
    fn unlinked_test() {
        let alice = fixt!(AgentPubKey);
        let bob = fixt!(AgentPubKey);
        let carol = fixt!(AgentPubKey);
        let dave = fixt!(AgentPubKey);

        let linked_devices = LinkedDevices {
            agents: vec![alice.clone(), bob.clone()],
            timestamp: Timestamp::max(),
        };
        let proof_1 = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        let linked_devices = LinkedDevices {
            agents: vec![carol.clone(), dave.clone()],
            timestamp: Timestamp::max(),
        };
        let proof_2 = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        assert!(!are_agents_linked(&alice, &dave, &vec![proof_1, proof_2]));
    }

    #[test]
    fn transitive_linked_test() {
        let alice = fixt!(AgentPubKey);
        let bob = fixt!(AgentPubKey);
        let carol = fixt!(AgentPubKey);
        let dave = fixt!(AgentPubKey);
        let edward = fixt!(AgentPubKey);

        let linked_devices = LinkedDevices {
            agents: vec![alice.clone(), bob.clone()],
            timestamp: Timestamp::max(),
        };
        let proof_1 = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        let linked_devices = LinkedDevices {
            agents: vec![bob.clone(), carol.clone()],
            timestamp: Timestamp::max(),
        };
        let proof_2 = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        let linked_devices = LinkedDevices {
            agents: vec![carol.clone(), dave.clone()],
            timestamp: Timestamp::max(),
        };
        let proof_3 = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        let linked_devices = LinkedDevices {
            agents: vec![dave.clone(), edward.clone()],
            timestamp: Timestamp::max(),
        };
        let proof_4 = LinkedDevicesProof {
            linked_devices,
            signatures: vec![],
        };

        assert!(are_agents_linked(
            &alice,
            &edward,
            &vec![proof_1, proof_2, proof_3, proof_4]
        ));
    }
}
