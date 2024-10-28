import {
	collectionSignal,
	liveLinksSignal,
	pipe,
} from '@holochain-open-dev/signals';
import { HashType, LazyHoloHashMap, retype } from '@holochain-open-dev/utils';
import { AgentPubKey } from '@holochain/client';

import { LinkedDevicesClient } from './linked-devices-client.js';

export class LinkedDevicesStore {
	constructor(public client: LinkedDevicesClient) {
		// At startup, clear all the cap grants that might have been left over from an unfinished link agent process
		this.client.clearLinkAgent();
	}

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

	/** Link agents */
	linkingAgents = collectionSignal(
		this.client,
		() => this.client.getLinkingAgents(),
		'LinkingAgents',
		1000,
	);
}
