import {
	hashProperty,
	notify,
	notifyError,
	sharedStyles,
} from '@darksoil-studio/holochain-elements';
import {
	Signal,
	SignalWatcher,
	toPromise,
} from '@darksoil-studio/holochain-signals';
import {
	HashType,
	HoloHashMap,
	retype,
} from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	AgentPubKeyB64,
	decodeHashFromBase64,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import { SlInput } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { TTL_CAP_GRANT } from '../config.js';
import { linkedDevicesStoreContext } from '../context.js';
import { LinkedDevicesStore } from '../linked-devices-store.js';
import { randomPasscode } from '../utils.js';
import './discover-agent.js';
import './passcode-input.js';

/**
 * @fires device-linked - Fired when the user successfully links another device. Detail will have this shape: { agentPubKey: AgentPubKey }
 */
@customElement('link-device-requestor')
export class LinkDevicesRequestor extends SignalWatcher(LitElement) {
	/**
	 * LinkedDevicesStore for this element, not required if you embed this element inside a <linked-devices-context>
	 */
	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	@property()
	store!: LinkedDevicesStore;

	/**
	 * (Optional) Recipient agent to link devices with
	 * If this is not set an agent discovery process will try to discover the recipient
	 */
	@property(hashProperty('recipient'))
	recipient: AgentPubKey | undefined;

	private requestorPasscode!: number[];

	@state()
	private initialized = false;

	private interval: number | undefined;

	async firstUpdated() {
		setTimeout(() => {
			this.shadowRoot!.getElementById('input-0')?.focus();
		});

		this.store.client.onSignal(signal => {
			if (!this.recipient) return;
			if (
				signal.type !== 'LinkCreated' ||
				signal.link_type !== 'AgentToLinkedDevices'
			)
				return;
			if (
				encodeHashToBase64(
					retype(signal.action.hashed.content.target_address, HashType.AGENT),
				) === encodeHashToBase64(this.recipient)
			) {
				this.dispatchEvent(
					new CustomEvent('device-linked', {
						bubbles: true,
						composed: true,
						detail: {
							agentPubKey: this.recipient,
						},
					}),
				);
				notify(msg('Device linked successfully'));
			}
		});
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		if (this.interval) clearInterval(this.interval);
		this.store.client.clearLinkDevicesCapGrants();
	}

	async prepareLinkDevices(recipient: AgentPubKey) {
		this.requestorPasscode = randomPasscode(
			this.store.config.linkDevicePasscodeLength,
		);
		this.interval = setInterval(async () => {
			this.requestorPasscode = randomPasscode(
				this.store.config.linkDevicePasscodeLength,
			);
			await this.store.client.clearLinkDevicesCapGrants();
			await this.store.client.prepareLinkDevicesRequestor(
				recipient,
				this.requestorPasscode,
			);
		}, TTL_CAP_GRANT);
		await this.store.client.prepareLinkDevicesRequestor(
			recipient,
			this.requestorPasscode,
		);
	}

	private renderNumber() {
		return html`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${msg('Enter this pass code in your other device:')} </span>
			<span class="passcode">${this.requestorPasscode.join('')}</span>
		</div>`;
	}

	render() {
		if (!this.recipient) {
			return html`
				<discover-agent
					@agent-discovered=${async (e: CustomEvent) => {
						this.recipient = e.detail.agentPubKey;
						try {
							await this.prepareLinkDevices(this.recipient!);
						} catch (e) {
							notifyError(msg('Error linking devices. Please try again.'));
							console.error(e);
							this.recipient = undefined;
							this.initialized = false;
						}
					}}
				>
				</discover-agent>
			`;
		}

		if (!this.initialized)
			return html`
				<div
					class="column"
					style="gap: 12px; align-items: center; justify-content: center; flex: 1"
				>
					<span>${msg('Enter the pass code from your other device:')} </span>
					<passcode-input
						.passcodeLength=${this.store.config.linkDevicePasscodeLength}
						@passcode-change=${async (e: CustomEvent) => {
							try {
								await this.store.client.requestLinkDevices(
									this.recipient!,
									e.detail.passcode,
								);
								this.initialized = true;
							} catch (e) {
								console.error(e);
								notifyError(msg('Error linking devices. Please try again'));
								this.recipient = undefined;
							}
						}}
					>
					</passcode-input>
				</div>
			`;

		return this.renderNumber();
	}

	static styles = [
		sharedStyles,
		css`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`,
	];
}
