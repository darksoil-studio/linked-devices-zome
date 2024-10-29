import { EntryRecord } from '@holochain-open-dev/utils';
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
import { Scenario } from '@holochain/tryorama';
import { encode } from '@msgpack/msgpack';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { LinkedDevicesClient } from '../../ui/src/linked-devices-client.js';
import { LinkedDevicesStore } from '../../ui/src/linked-devices-store.js';

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
	await aliceStore.client.getLinkingAgents();
	await bobStore.client.getLinkingAgents();
	await carolStore.client.getLinkingAgents();
	await daveStore.client.getLinkingAgents();

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
