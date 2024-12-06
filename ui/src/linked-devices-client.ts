import {
	AgentPubKey,
	AppCallZomeRequest,
	AppClient,
	Link,
} from '@holochain/client';
import { ZomeClient } from '@tnesh-stack/utils';

import { LinkedDevicesProof, LinkedDevicesSignal } from './types.js';

export class LinkedDevicesClient extends ZomeClient<LinkedDevicesSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'linked_devices',
	) {
		super(client, roleName, zomeName);
	}

	async linkTransitiveDevices(): Promise<void> {
		return this.callZome('link_transitive_devices', undefined);
	}

	/** Linked Devices for Agent */

	async getLinkedDevicesForAgent(agent: AgentPubKey): Promise<Array<Link>> {
		return this.callZome('get_linked_devices_for_agent', agent);
	}

	async queryMyLinkedDevices(): Promise<Array<Link>> {
		return this.callZome('query_my_linked_devices', undefined);
	}

	/** Link Devices process */

	async prepareDiscoverAgent(): Promise<void> {
		return this.callZome('prepare_discover_agent', undefined);
	}
	async attemptDiscoverAgent(agent: AgentPubKey): Promise<void> {
		return this.callZome('attempt_discover_agent', agent);
	}
	async prepareLinkDevicesRequestor(
		recipient: AgentPubKey,
		myPasscode: number[],
	) {
		await this.callZome('prepare_link_devices_requestor', {
			my_passcode: myPasscode,
			recipient,
		});
	}
	async prepareLinkDevicesRecipient(
		requestor: AgentPubKey,
		myPasscode: number[],
	) {
		await this.callZome('prepare_link_devices_recipient', {
			my_passcode: myPasscode,
			requestor,
		});
	}
	async requestLinkDevices(
		recipient: AgentPubKey,
		recipient_passcode: number[],
	) {
		await this.callZome('request_link_devices', {
			recipient,
			recipient_passcode,
		});
	}

	async acceptLinkDevices(
		requestor: AgentPubKey,
		requestor_passcode: number[],
	) {
		await this.callZome('accept_link_devices', {
			requestor,
			requestor_passcode,
		});
	}

	async clearLinkDevicesCapGrants() {
		await this.callZome('clear_link_devices_cap_grants', null);
	}
}
