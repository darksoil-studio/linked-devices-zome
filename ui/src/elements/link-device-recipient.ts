import { AgentPubKey, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import { SlInput } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import { notify, notifyError, sharedStyles } from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { TTL_CAP_GRANT } from '../config.js';
import { linkedDevicesStoreContext } from '../context.js';
import { LinkedDevicesStore } from '../linked-devices-store.js';
import { LinkDevicesSignal, LinkedDevicesSignal } from '../types.js';
import './passcode-input.js';
import { PasscodeInput } from './passcode-input.js';

function randomDigit(): number {
	return Math.floor(Math.random() * 10);
}

export function randomPasscode(length: number) {
	const passcode: number[] = [];

	for (let i = 0; i < length; i++) {
		passcode.push(randomDigit());
	}
	return passcode;
}

@customElement('link-device-recipient')
export class LinkDevicesRecipient extends SignalWatcher(LitElement) {
	/**
	 * LinkedDevicesStore for this element, not required if you embed this element inside a <linked-devices-context>
	 */
	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	@property()
	store!: LinkedDevicesStore;

	/**
	 * @internal
	 */
	@state()
	recipientPasscode: number[] = [];

	/**
	 * @internal
	 */
	@state()
	initializedLinkDevicesByRequestor: AgentPubKey | undefined;

	/**
	 * @internal
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	interval: any;

	async firstUpdated() {
		this.recipientPasscode = randomPasscode(
			this.store.config.linkDevicePasscodeLength,
		);
		this.interval = setInterval(async () => {
			this.recipientPasscode = randomPasscode(
				this.store.config.linkDevicePasscodeLength,
			);
			await this.store.client.clearLinkDevices();
			await this.store.client.prepareLinkDevices(this.recipientPasscode);
		}, TTL_CAP_GRANT);
		await this.store.client.prepareLinkDevices(this.recipientPasscode);

		this.store.client.onSignal(signal => {
			if (
				!(
					'type' in signal &&
					(signal as LinkDevicesSignal).type === 'LinkDevicesInitialized'
				)
			)
				return;
			this.initializedLinkDevicesByRequestor = (
				signal as LinkDevicesSignal
			).requestor;
		});
	}
	disconnectedCallback(): void {
		super.disconnectedCallback();
		clearInterval(this.interval);
		this.store.client.clearLinkDevices();
	}

	private async attemptLinkAgent(
		requestor: AgentPubKey,
		inputtedRequestorPasscode: Array<number>,
	) {
		// if (
		// 	!areEqual(
		// 		requestLinkAgentSignal.requestor_passcode,
		// 		inputtedRequestorPasscode,
		// 	)
		// ) {
		// 	notifyError(msg('Incorrect pass code'));
		// 	(
		// 		this.shadowRoot!.querySelector('passcode-input') as PasscodeInput
		// 	).clearPasscode();
		// 	return;
		// }
		try {
			await this.store.client.requestLinkDevices(
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
			notifyError(msg(`Incorrect passcode`));
		}
		(
			this.shadowRoot!.querySelector('passcode-input') as PasscodeInput
		).clearPasscode();
	}

	private renderRequestLinkAgent(
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
		if (this.initializedLinkDevicesByRequestor)
			return this.renderRequestLinkAgent(
				this.initializedLinkDevicesByRequestor,
			);

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

function areEqual(passcode1: Array<number>, passcode2: Array<number>) {
	if (passcode1.length !== passcode2.length) return false;
	for (let i = 0; i < passcode1.length; i++) {
		if (passcode1[i] !== passcode2[i]) return false;
	}

	return true;
}
