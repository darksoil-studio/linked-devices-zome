import { ZomeClient } from '@holochain-open-dev/utils';
import { AgentPubKey, AppClient, Link } from '@holochain/client';

import { LinkedDevicesSignal } from './types.js';

export class LinkedDevicesClient extends ZomeClient<LinkedDevicesSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'linked_devices',
	) {
		super(client, roleName, zomeName);
	}

	/** Linked Devices for Agent */

	async getLinkedDevicesForAgent(agent: AgentPubKey): Promise<Array<Link>> {
		return this.callZome('get_linked_devices_for_agent', agent);
	}

	addLinkedDeviceForAgent(
		agent: AgentPubKey,
		linkedDevice: AgentPubKey,
	): Promise<void> {
		return this.callZome('add_linked_device_for_agent', {
			base_agent: agent,
			target_linked_device: linkedDevice,
		});
	}
}
