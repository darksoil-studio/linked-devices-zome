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
import { notify, notifyError, sharedStyles } from '@tnesh-stack/elements';
import { Signal, SignalWatcher, toPromise } from '@tnesh-stack/signals';
import { HashType, HoloHashMap, retype } from '@tnesh-stack/utils';
import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { TTL_CAP_GRANT } from '../config.js';
import { linkedDevicesStoreContext } from '../context.js';
import { LinkedDevicesStore } from '../linked-devices-store.js';
import { randomPasscode } from './link-devices-recipient.js';
import './passcode-input.js';
import { PasscodeInput } from './passcode-input.js';

/**
 * @fires device-linked - Fired when the user successfully links another device. Detail will have this shape: { agentPubKey: AgentPubKey }
 */
@customElement('link-devices-requestor')
export class LinkDevicesRequestor extends SignalWatcher(LitElement) {
	/**
	 * LinkedDevicesStore for this element, not required if you embed this element inside a <linked-devices-context>
	 */
	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	@property()
	store!: LinkedDevicesStore;

	// attemptedRecipients = new HoloHashMap<
	// 	AgentPubKey,
	// 	'requesting' | 'unauthorized' | 'error' | 'success'
	// >();

	/**
	 * @internal
	 */
	requestorpasscode!: number[];

	/**
	 * @internal
	 */
	@state()
	successfulRecipient: AgentPubKey | undefined;

	/**
	 * @internal
	 */
	interval: any;

	async firstUpdated() {
		setTimeout(() => {
			this.shadowRoot!.getElementById('input-0')?.focus();
		});

		this.store.client.onSignal(signal => {
			if (!this.successfulRecipient) return;
			if (
				signal.type !== 'LinkCreated' ||
				signal.link_type !== 'AgentToLinkedDevices'
			)
				return;
			if (
				encodeHashToBase64(
					retype(signal.action.hashed.content.target_address, HashType.AGENT),
				) === encodeHashToBase64(this.successfulRecipient)
			) {
				this.dispatchEvent(
					new CustomEvent('device-linked', {
						bubbles: true,
						composed: true,
						detail: {
							agentPubKey: this.successfulRecipient,
						},
					}),
				);
				notify(msg('Device linked successfully'));
			}
		});
	}
	disconnectedCallback(): void {
		super.disconnectedCallback();
		clearInterval(this.interval);
		this.store.client.clearLinkDevices();
	}

	private async maybeRequestLink(passcode: number[]) {
		const linkingAgentsLinks = await this.store.client.getLinkingAgents();

		const linkingAgents = linkingAgentsLinks.map(l =>
			retype(l.target, HashType.AGENT),
		);

		for (const linkingAgent of linkingAgents) {
			// if (!this.attemptedRecipients.has(linkingAgent)) {
			// 	this.attemptedRecipients.set(linkingAgent, 'requesting');
			try {
				await this.store.client.initLinkDevices(linkingAgent, passcode);

				this.requestorpasscode = randomPasscode(
					this.store.config.linkDevicePasscodeLength,
				);
				await this.store.client.prepareLinkDevices(this.requestorpasscode);

				this.interval = setInterval(async () => {
					this.requestorpasscode = randomPasscode(
						this.store.config.linkDevicePasscodeLength,
					);
					await this.store.client.clearLinkDevices();
					await this.store.client.prepareLinkDevices(this.requestorpasscode);
				}, TTL_CAP_GRANT);
				this.successfulRecipient = linkingAgent;
			} catch (e: any) {
				console.error(e);
				if (e.toString().includes('Unauthorized')) {
					// this.attemptedRecipients.set(linkingAgent, 'unauthorized');
					// notifyError(msg(``));
					// Two possibilities: either its the wrong agent, or the user messed up entering the pass code
				} else {
					notifyError(msg('Error linking devices: please try again'));
					// this.attemptedRecipients.set(linkingAgent, 'error');
					(
						this.shadowRoot!.querySelector('passcode-input') as PasscodeInput
					).clearPasscode();
					// }
				}
			}
		}
		if (!this.successfulRecipient) {
			notifyError(msg('Incorrect pass code'));
			(
				this.shadowRoot!.querySelector('passcode-input') as PasscodeInput
			).clearPasscode();
		}
	}

	private renderNumber() {
		return html`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${msg('Enter this pass code in your other device:')} </span>
			<span class="passcode">${this.requestorpasscode.join('')}</span>
		</div>`;
	}

	render() {
		if (this.successfulRecipient) return this.renderNumber();
		return html`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${msg('Enter the pass code from your other device:')} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${(e: CustomEvent) =>
						this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`;
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
