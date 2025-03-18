import { AgentPubKey } from '@holochain/client';
import { liveLinksSignal, mapCompleted, uniquify } from '@tnesh-stack/signals';
import { HashType, MemoHoloHashMap, retype } from '@tnesh-stack/utils';

import { LinkedDevicesConfig, defaultLinkedDevicesConfig } from './config.js';
import { LinkedDevicesClient } from './linked-devices-client.js';

export class LinkedDevicesStore {
	constructor(
		public client: LinkedDevicesClient,
		public config: LinkedDevicesConfig = defaultLinkedDevicesConfig,
	) {
		// At startup, clear all the cap grants that might have been left over from an unfinished link agent process
		this.client.clearLinkDevicesCapGrants();
		// At startup, link all the devices that other devices might have linked with
		this.client.linkTransitiveDevices();
	}

	/** Linked Devices for Agent */

	linkedDevicesForAgent = new MemoHoloHashMap((agent: AgentPubKey) =>
		mapCompleted(
			liveLinksSignal(
				this.client,
				agent,
				() => this.client.getLinkedDevicesForAgent(agent),
				'AgentToLinkedDevices',
			),
			links => uniquify(links.map(l => retype(l.target, HashType.AGENT))),
		),
	);

	myLinkedDevices = mapCompleted(
		liveLinksSignal(
			this.client,
			this.client.client.myPubKey,
			() => this.client.queryMyLinkedDevices(),
			'AgentToLinkedDevices',
		),
		links => uniquify(links.map(l => retype(l.target, HashType.AGENT))),
	);
}
