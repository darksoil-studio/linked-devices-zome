import { AgentPubKey, Signature, Timestamp } from '@holochain/client';
import { ActionCommittedSignal } from '@tnesh-stack/utils';

export type LinkedDevicesSignal =
	| ActionCommittedSignal<EntryTypes, LinkTypes>
	| LinkDevicesSignal;

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

export type LinkDevicesSignal = {
	type: 'LinkDevicesInitialized';
	requestor: AgentPubKey;
};
