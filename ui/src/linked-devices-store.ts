import { liveLinksSignal, pipe } from '@holochain-open-dev/signals';
import {
	EntryRecord,
	HashType,
	LazyHoloHashMap,
	retype,
	slice,
} from '@holochain-open-dev/utils';
import {
	ActionHash,
	AgentPubKey,
	EntryHash,
	NewEntryAction,
	Record,
} from '@holochain/client';

import { LinkedDevicesClient } from './linked-devices-client.js';

export class LinkedDevicesStore {
	constructor(public client: LinkedDevicesClient) {}

	/** Linked Devices for Agent */

	linkedDevicesForAgent = new LazyHoloHashMap((agent: AgentPubKey) =>
		pipe(
			liveLinksSignal(
				this.client,
				agent,
				() => this.client.getLinkedDevicesForAgent(agent),
				'AgentToLinkedDevices',
			),
			links => links.map(l => retype(l.target, HashType.AGENT)),
		),
	);
}
