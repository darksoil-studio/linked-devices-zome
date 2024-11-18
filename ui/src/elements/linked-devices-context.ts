import { AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { appClientContext } from '@tnesh-stack/elements';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { linkedDevicesStoreContext } from '../context.js';
import { LinkedDevicesClient } from '../linked-devices-client.js';
import { LinkedDevicesStore } from '../linked-devices-store.js';

@customElement('linked-devices-context')
export class LinkedDevicesContext extends LitElement {
	@consume({ context: appClientContext })
	client!: AppClient;

	@provide({ context: linkedDevicesStoreContext })
	@property({ type: Object })
	store!: LinkedDevicesStore;

	@property()
	role!: string;

	@property()
	zome = 'linked_devices';

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<linked-devices-context> must have a role="YOUR_DNA_ROLE" property, eg: <linked-devices-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(
				`<linked-devices-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <linked-devices-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <linked-devices-context .store=\${store}>)`,
			);
		}
		this.store = new LinkedDevicesStore(
			new LinkedDevicesClient(this.client, this.role, this.zome),
		);
	}

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
