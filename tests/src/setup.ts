import {
	ActionHash,
	AgentPubKey,
	AppBundleSource,
	AppCallZomeRequest,
	AppWebsocket,
	EntryHash,
	NewEntryAction,
	Record,
	encodeHashToBase64,
	fakeActionHash,
	fakeAgentPubKey,
	fakeDnaHash,
	fakeEntryHash,
} from '@holochain/client';
import { Scenario, pause } from '@holochain/tryorama';
import { encode } from '@msgpack/msgpack';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { LinkedDevicesClient } from '../../ui/src/linked-devices-client.js';
import { LinkedDevicesStore } from '../../ui/src/linked-devices-store.js';
import { randomPasscode } from '../../ui/src/utils.js';

export async function setup(scenario: Scenario) {
	const testHappUrl =
		dirname(fileURLToPath(import.meta.url)) +
		'/../../workdir/linked-devices_test.happ';

	// Add 2 players with the test hApp to the Scenario. The returned players
	// can be destructured.
	const [alice, bob, carol, dave] = await scenario.addPlayersWithApps([
		{ appBundleSource: { path: testHappUrl } },
		{ appBundleSource: { path: testHappUrl } },
		{ appBundleSource: { path: testHappUrl } },
		{ appBundleSource: { path: testHappUrl } },
	]);

	await alice.conductor
		.adminWs()
		.authorizeSigningCredentials(alice.cells[0].cell_id);

	await bob.conductor
		.adminWs()
		.authorizeSigningCredentials(bob.cells[0].cell_id);

	await carol.conductor
		.adminWs()
		.authorizeSigningCredentials(carol.cells[0].cell_id);

	await dave.conductor
		.adminWs()
		.authorizeSigningCredentials(dave.cells[0].cell_id);

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	const aliceStore = new LinkedDevicesStore(
		new LinkedDevicesClient(
			alice.appWs as any,
			'linked_devices_test',
			'linked_devices',
		),
	);

	const bobStore = new LinkedDevicesStore(
		new LinkedDevicesClient(
			bob.appWs as any,
			'linked_devices_test',
			'linked_devices',
		),
	);

	const carolStore = new LinkedDevicesStore(
		new LinkedDevicesClient(
			carol.appWs as any,
			'linked_devices_test',
			'linked_devices',
		),
	);

	const daveStore = new LinkedDevicesStore(
		new LinkedDevicesClient(
			dave.appWs as any,
			'linked_devices_test',
			'linked_devices',
		),
	);

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	// Prevent race condition when two zome calls are made instantly at the beginning of the lifecycle that cause a ChainHeadMoved error because they trigger 2 parallel init workflows
	await aliceStore.client.clearLinkDevicesCapGrants();
	await bobStore.client.clearLinkDevicesCapGrants();
	await carolStore.client.clearLinkDevicesCapGrants();
	await daveStore.client.clearLinkDevicesCapGrants();

	return {
		alice: {
			player: alice,
			store: aliceStore,
		},
		bob: {
			player: bob,
			store: bobStore,
		},
		carol: {
			player: carol,
			store: carolStore,
		},
		dave: {
			player: dave,
			store: daveStore,
			startUp: async () => {
				await dave.conductor.startUp();
				const port = await dave.conductor.attachAppInterface();
				const issued = await dave.conductor
					.adminWs()
					.issueAppAuthenticationToken({
						installed_app_id: dave.appId,
					});
				const appWs = await dave.conductor.connectAppWs(issued.token, port);
				daveStore.client = new LinkedDevicesClient(
					appWs,
					'linked_devices_test',
				);
			},
		},
	};
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
