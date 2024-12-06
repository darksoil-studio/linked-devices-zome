import {
	AgentPubKey,
	decodeHashFromBase64,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { decode } from '@msgpack/msgpack';
import '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import {
	Format,
	requestPermissions,
	scan,
} from '@tauri-apps/plugin-barcode-scanner';
import { notifyError, sharedStyles } from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { toUint8Array } from 'js-base64';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { linkedDevicesStoreContext } from '../context.js';
import { LinkedDevicesStore } from '../linked-devices-store.js';
import { isMobile, isTauriEnv } from '../utils.js';

export async function scanQrcode(): Promise<string> {
	await requestPermissions();
	const result = await scan({ windowed: false, formats: [Format.QRCode] });
	return result.content;
}

@localized()
@customElement('discover-agent')
export class DiscoverAgent extends SignalWatcher(LitElement) {
	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	@property()
	store!: LinkedDevicesStore;

	async attemptDiscoverAgent(agentPubKey: AgentPubKey) {
		try {
			await this.store.client.attemptDiscoverAgent(agentPubKey);
			this.dispatchEvent(
				new CustomEvent('agent-discovered', {
					bubbles: true,
					composed: true,
					detail: {
						agentPubKey,
					},
				}),
			);
		} catch (e) {
			notifyError(msg('Error discovering agent.'));
			throw e;
		}
	}

	async scanAndDiscover() {
		const agentPubKey: AgentPubKey = decodeHashFromBase64(await scanQrcode());
		try {
			await this.attemptDiscoverAgent(agentPubKey);
		} catch (e) {
			console.error(e);
			await this.scanAndDiscover();
		}
	}

	async firstUpdated() {
		await this.store.client.prepareDiscoverAgent();

		this.store.client.onSignal(signal => {
			if (signal.type !== 'AgentDiscovered') return;

			this.dispatchEvent(
				new CustomEvent('agent-discovered', {
					bubbles: true,
					composed: true,
					detail: {
						agentPubKey: signal.agent,
					},
				}),
			);
		});

		if (isTauriEnv() && isMobile) {
			try {
				await this.scanAndDiscover();
			} catch (e) {
				notifyError(msg('Error discovering agent. Please try again.'));
				this.dispatchEvent(
					new CustomEvent('link-devices-cancelled', {
						bubbles: true,
						composed: true,
					}),
				);
			}
		}
	}

	renderQrcode() {
		return html`
			<div class="column" style="gap: 8px; flex: 1;">
				<span style="align-self: center"
					>${msg('Scan this code with your other device.')}
				</span>
				<sl-qr-code
					value="${encodeHashToBase64(this.store.client.client.myPubKey)}"
					style="align-self: center"
					size="240"
				>
				</sl-qr-code>
			</div>

			<span style="align-self: center">${msg('OR')} </span>
		`;
	}

	render() {
		return html`
			<div class="column" style="gap: 32px; flex: 1;">
				${isTauriEnv() ? this.renderQrcode() : html``}
				<div class="column" style="gap: 16px">
					<div class="column" style="gap: 8px">
						<span>${msg('Send this code to your other device...')} </span>
						<div class="row" style="align-items: center; gap: 8px">
							<sl-tag style="flex: 1"
								>${encodeHashToBase64(this.store.client.client.myPubKey)}
							</sl-tag>
							<sl-copy-button
								value="${encodeHashToBase64(this.store.client.client.myPubKey)}"
							></sl-copy-button>
						</div>
					</div>

					<div class="column" style=" gap: 8px">
						<span
							>${msg(
								'... and paste here the code you received from your other device.',
							)}
						</span>

						<sl-input
							@sl-input=${async (e: CustomEvent) => {
								const input = e.target as SlInput;
								const pubKey = decodeHashFromBase64(input.value);
								try {
									await this.attemptDiscoverAgent(pubKey);
								} catch (e) {
									input.value = '';
								}
							}}
						>
						</sl-input>
					</div>
				</div>
			</div>
		`;
	}

	static styles = sharedStyles;
}
