import { ZomeClient } from '@holochain-open-dev/utils';
import { AgentPubKey, AppClient, Link } from '@holochain/client';

import { LinkedDevicesProof, LinkedDevicesSignal } from './types.js';

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

	addLinkedDevice(
		linkedDevice: AgentPubKey,
		proof: LinkedDevicesProof,
	): Promise<void> {
		return this.callZome('add_linked_device', {
			linked_device: linkedDevice,
			proof,
		});
	}

	async prepareLinkDevices(passcode: number[]) {
		await this.callZome('prepare_link_devices', passcode);
	}
	async getLinkingAgents(): Promise<Array<Link>> {
		return this.callZome('get_linking_agents', null);
	}
	async clearLinkDevices() {
		await this.callZome('clear_link_devices', null);
	}

	async initLinkDevices(recipient: AgentPubKey, recipient_passcode: number[]) {
		await this.callZome('init_link_devices', {
			recipient,
			recipient_passcode,
		});
	}

	async requestLinkDevices(
		requestor: AgentPubKey,
		requestor_passcode: number[],
	) {
		await this.callZome('request_link_devices', {
			requestor,
			requestor_passcode,
		});
	}
}
