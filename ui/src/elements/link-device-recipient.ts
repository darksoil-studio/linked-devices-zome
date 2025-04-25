import {
	hashProperty,
	notify,
	notifyError,
	sharedStyles,
} from '@darksoil-studio/holochain-elements';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { AgentPubKey, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { TTL_CAP_GRANT } from '../config.js';
import { linkedDevicesStoreContext } from '../context.js';
import { LinkedDevicesStore } from '../linked-devices-store.js';
import { randomPasscode } from '../utils.js';
import './discover-agent.js';
import './passcode-input.js';
import { PasscodeInput } from './passcode-input.js';

@customElement('link-device-recipient')
export class LinkDevicesRecipient extends SignalWatcher(LitElement) {
	/**
	 * LinkedDevicesStore for this element, not required if you embed this element inside a <linked-devices-context>
	 */
	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	@property()
	store!: LinkedDevicesStore;

	/**
	 * (Optional) Requestor agent to link devices with
	 * If this is not set an agent discovery process will try to discover the requestor
	 */
	@property(hashProperty('requestor'))
	requestor: AgentPubKey | undefined;

	@state()
	private recipientPasscode: number[] = [];

	@state()
	private initialized: boolean = false;

	private interval: number | undefined;

	private async prepareLinkDevices(requestor: AgentPubKey) {
		this.recipientPasscode = randomPasscode(
			this.store.config.linkDevicePasscodeLength,
		);
		this.interval = setInterval(async () => {
			this.recipientPasscode = randomPasscode(
				this.store.config.linkDevicePasscodeLength,
			);
			await this.store.client.clearLinkDevicesCapGrants();
			await this.store.client.prepareLinkDevicesRecipient(
				requestor,
				this.recipientPasscode,
			);
		}, TTL_CAP_GRANT);
		await this.store.client.prepareLinkDevicesRecipient(
			requestor,
			this.recipientPasscode,
		);

		this.store.client.onSignal(signal => {
			if (!('type' in signal && signal.type === 'LinkDevicesInitialized'))
				return;

			if (
				encodeHashToBase64(requestor) === encodeHashToBase64(signal.requestor)
			) {
				this.initialized = true;
			}
		});
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		if (this.interval) clearInterval(this.interval);
		this.store.client.clearLinkDevicesCapGrants();
	}

	private async attemptLinkAgent(
		requestor: AgentPubKey,
		inputtedRequestorPasscode: Array<number>,
	) {
		try {
			await this.store.client.acceptLinkDevices(
				requestor,
				inputtedRequestorPasscode,
			);
			this.dispatchEvent(
				new CustomEvent('device-linked', {
					bubbles: true,
					composed: true,
					detail: {
						agentPubKey: requestor,
					},
				}),
			);
			notify(msg('Device linked successfully'));
		} catch (e) {
			console.error(e);
			notifyError(msg(`Error linking devices. Please try again.`));
			this.requestor = undefined;
			this.initialized = false;
		}
		(
			this.shadowRoot!.querySelector('passcode-input') as PasscodeInput
		).clearPasscode();
	}

	private renderAcceptLinkAgent(
		initializedLinkDevicesByRequestor: AgentPubKey,
	) {
		return html`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span class="title">${msg('Device link request received')} </span>
				<span>${msg('Enter the pass code from your other device:')} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${(e: CustomEvent) =>
						this.attemptLinkAgent(
							initializedLinkDevicesByRequestor,
							e.detail.passcode,
						)}
				>
				</passcode-input>
			</div>
		`;
	}

	render() {
		if (!this.requestor) {
			return html`
				<discover-agent
					@agent-discovered=${async (e: CustomEvent) => {
						this.requestor = e.detail.agentPubKey;
						try {
							await this.prepareLinkDevices(this.requestor!);
						} catch (e) {
							notifyError(msg('Error linking devices. Please try again.'));
							console.error(e);
							this.requestor = undefined;
							this.initialized = false;
						}
					}}
				>
				</discover-agent>
			`;
		}

		if (!this.initialized)
			return html`<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span
					>${msg(
						'Enter this pass code in your other device (valid for one minute):',
					)}
				</span>
				<span class="passcode">${this.recipientPasscode.join('')}</span>
			</div>`;

		return this.renderAcceptLinkAgent(this.requestor);
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`,
	];
}
