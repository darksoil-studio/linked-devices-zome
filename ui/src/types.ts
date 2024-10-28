import { ActionCommittedSignal } from '@holochain-open-dev/utils';
import { AgentPubKey, Signature, Timestamp } from '@holochain/client';

export type LinkedDevicesSignal = ActionCommittedSignal<EntryTypes, LinkTypes>;

export type EntryTypes = never;

export type LinkTypes = string;

export interface LinkedDevicesProof {
	linked_devices: LinkedDevices;
	signatures: Array<Signature>;
}

export interface LinkedDevices {
	agents: Array<AgentPubKey>;
	timestamp: Timestamp;
}
