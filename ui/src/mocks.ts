import {
	ActionHash,
	AgentPubKey,
	AppClient,
	Delete,
	EntryHash,
	Link,
	NewEntryAction,
	Record,
	SignedActionHashed,
	decodeHashFromBase64,
	fakeActionHash,
	fakeAgentPubKey,
	fakeDnaHash,
	fakeEntryHash,
} from '@holochain/client';
import {
	AgentPubKeyMap,
	HashType,
	HoloHashMap,
	RecordBag,
	ZomeMock,
	decodeEntry,
	entryState,
	fakeCreateAction,
	fakeDeleteEntry,
	fakeEntry,
	fakeRecord,
	fakeUpdateEntry,
	hash,
	pickBy,
} from '@tnesh-stack/utils';

import { LinkedDevicesClient } from './linked-devices-client.js';

export class LinkedDevicesZomeMock extends ZomeMock implements AppClient {
	constructor(myPubKey?: AgentPubKey) {
		super('linked_devices_test', 'linked_devices', myPubKey);
	}

	/** Linked Devices for Agent */
	agentToLinkedDevice = new HoloHashMap<AgentPubKey, Link[]>();

	async get_linked_devices_for_agent(agent: AgentPubKey): Promise<Array<Link>> {
		return this.agentToLinkedDevice.get(agent) || [];
	}

	async add_linked_device_for_agent(input: {
		agent: AgentPubKey;
		linked_device: AgentPubKey;
	}): Promise<void> {
		const existing = this.agentToLinkedDevice.get(input.agent) || [];
		this.agentToLinkedDevice.set(input.agent, [
			...existing,
			{
				base: input.agent,
				target: input.linked_device,
				author: this.myPubKey,
				timestamp: Date.now() * 1000,
				zome_index: 0,
				link_type: 0,
				tag: new Uint8Array(),
				create_link_hash: await fakeActionHash(),
			},
		]);
	}
}
