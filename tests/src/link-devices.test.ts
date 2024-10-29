import { toPromise } from '@holochain-open-dev/signals';
import { EntryRecord } from '@holochain-open-dev/utils';
import { ActionHash, Record, encodeHashToBase64 } from '@holochain/client';
import { dhtSync, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { assert, test } from 'vitest';

import { setup } from './setup.js';

test('link devices', async () => {
	await runScenario(async scenario => {
		const { alice, bob } = await setup(scenario);

		// Bob gets the links, should be empty
		let linksOutput = await toPromise(
			bob.store.linkedDevicesForAgent.get(bob.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 0);

		const alicePasscode = [1, 3, 7, 2];
		const bobPasscode = [9, 3, 8, 4];

		await alice.store.client.prepareLinkDevices(alicePasscode);
		await bob.store.client.prepareLinkDevices(bobPasscode);

		await alice.store.client.initLinkDevices(
			bob.player.agentPubKey,
			bobPasscode,
		);
		await bob.store.client.requestLinkDevices(
			alice.player.agentPubKey,
			alicePasscode,
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob gets the links again
		linksOutput = await toPromise(
			bob.store.linkedDevicesForAgent.get(bob.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 1);
		assert.deepEqual(
			encodeHashToBase64(alice.player.agentPubKey),
			encodeHashToBase64(linksOutput[0]),
		);

		// Alice gets the links again
		linksOutput = await toPromise(
			alice.store.linkedDevicesForAgent.get(alice.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 1);
		assert.deepEqual(
			encodeHashToBase64(bob.player.agentPubKey),
			encodeHashToBase64(linksOutput[0]),
		);
	});
});