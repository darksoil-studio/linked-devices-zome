import { ActionCommittedSignal } from '@darksoil-studio/holochain-utils';
import { AgentPubKey, Signature, Timestamp } from '@holochain/client';

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

export type LinkDevicesSignal =
	| {
			type: 'LinkDevicesInitialized';
			requestor: AgentPubKey;
	  }
	| {
			type: 'AgentDiscovered';
			agent: AgentPubKey;
	  };
