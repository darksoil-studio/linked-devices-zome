import { AsyncSignal, Signal } from '@darksoil-studio/holochain-signals';
import { Scenario, dhtSync, pause } from '@holochain/tryorama';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { LinkedDevicesClient } from '../../ui/src/linked-devices-client.js';
import { LinkedDevicesStore } from '../../ui/src/linked-devices-store.js';
import { randomPasscode } from '../../ui/src/utils.js';

export async function setup(scenario: Scenario, playerAmount = 2) {
	const testHappUrl =
		dirname(fileURLToPath(import.meta.url)) +
		'/../../workdir/linked-devices_test.happ';

	// Add 2 players with the test hApp to the Scenario. The returned players
	// can be destructured.
	const players = await scenario.addPlayersWithSameApp(
		{
			appBundleSource: {
				type: 'path',
				value: testHappUrl,
			},
		},
		playerAmount,
	);

	for (const player of players) {
		await player.conductor
			.adminWs()
			.authorizeSigningCredentials(player.cells[0].cell_id);
	}

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	const playersWithStores = players.map(player => {
		const store = new LinkedDevicesStore(
			new LinkedDevicesClient(
				player.appWs as any,
				'linked_devices_test',
				'linked_devices',
			),
		);
		return {
			player,
			store,
			startUp: async () => {
				await player.conductor.startUp();
				const port = await player.conductor.attachAppInterface();
				const issued = await player.conductor
					.adminWs()
					.issueAppAuthenticationToken({
						installed_app_id: player.appId,
					});
				const appWs = await player.conductor.connectAppWs(issued.token, port);
				store.client = new LinkedDevicesClient(appWs, 'linked_devices_test');
			},
		};
	});

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	// Prevent race condition when two zome calls are made instantly at the beginning of the lifecycle that cause a ChainHeadMoved error because they trigger 2 parallel init workflows
	for (const pws of playersWithStores) {
		await pws.store.client.clearLinkDevicesCapGrants();
	}

	await dhtSync(players, players[0].cells[0].cell_id[0], 1000, 120_000);

	console.log('Setup completed!');

	return playersWithStores;
}

export async function waitUntil(
	condition: () => Promise<boolean>,
	timeout: number,
) {
	const start = Date.now();
	const isDone = await condition();
	if (isDone) return;
	if (timeout <= 0) throw new Error('timeout');
	await pause(1000);
	return waitUntil(condition, timeout - (Date.now() - start));
}

export async function linkDevices(
	store1: LinkedDevicesStore,
	store2: LinkedDevicesStore,
) {
	const store1Passcode = randomPasscode(4);
	const store2Passcode = randomPasscode(4);

	await store1.client.prepareLinkDevicesRequestor(
		store2.client.client.myPubKey,
		store1Passcode,
	);
	await store2.client.prepareLinkDevicesRecipient(
		store1.client.client.myPubKey,
		store2Passcode,
	);

	await store1.client.requestLinkDevices(
		store2.client.client.myPubKey,
		store2Passcode,
	);
	await store2.client.acceptLinkDevices(
		store1.client.client.myPubKey,
		store1Passcode,
	);
}

export async function eventually<T>(
	signal: AsyncSignal<T>,
	check: (v: T) => void,
	timeoutMs = 240_000,
) {
	const timeoutError = new Error('Timeout');
	return new Promise((resolve, reject) => {
		let error;
		setTimeout(() => {
			reject(error ? error : timeoutError);
		}, timeoutMs);
		effect(() => {
			const value = signal.get();
			if (value.status === 'pending') return;
			if (value.status === 'error') {
				error = new Error(value.error.toString());
				return;
			}

			try {
				check(value.value);
				resolve(undefined);
			} catch (e) {}
		});
	});
}

let needsEnqueue = true;

const w = new Signal.subtle.Watcher(() => {
	if (needsEnqueue) {
		needsEnqueue = false;
		queueMicrotask(processPending);
	}
});

function processPending() {
	needsEnqueue = true;

	for (const s of w.getPending()) {
		s.get();
	}

	w.watch();
}

export function effect(callback) {
	let cleanup;

	const computed = new Signal.Computed(() => {
		typeof cleanup === 'function' && cleanup();
		cleanup = callback();
	});

	w.watch(computed);
	computed.get();

	return () => {
		w.unwatch(computed);
		typeof cleanup === 'function' && cleanup();
		cleanup = undefined;
	};
}
