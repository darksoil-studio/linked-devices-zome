import { toPromise } from '@holochain-open-dev/signals';
import { EntryRecord } from '@holochain-open-dev/utils';
import { ActionHash, Record, encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { assert, test } from 'vitest';

import { setup } from './setup.js';

test('link devices transitively', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol, dave } = await setup(scenario);

		// Bob gets the links, should be empty
		let linksOutput = await toPromise(
			bob.store.linkedDevicesForAgent.get(bob.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 0);

		const alicePasscode = [1, 3, 7, 2];
		let bobPasscode = [9, 3, 8, 4];

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
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

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

		let carolPasscode = [8, 9, 3, 1];
		let davePasscode = [7, 6, 5, 1];

		await carol.store.client.prepareLinkDevices(carolPasscode);
		await dave.store.client.prepareLinkDevices(davePasscode);

		await carol.store.client.initLinkDevices(
			dave.player.agentPubKey,
			davePasscode,
		);
		await dave.store.client.requestLinkDevices(
			carol.player.agentPubKey,
			carolPasscode,
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player, dave.player],
			alice.player.cells[0].cell_id[0],
		);
		await dave.player.conductor.shutDown();

		bobPasscode = [7, 6, 5, 1];
		carolPasscode = [8, 9, 3, 2];

		await bob.store.client.prepareLinkDevices(bobPasscode);
		await carol.store.client.prepareLinkDevices(carolPasscode);

		await bob.store.client.initLinkDevices(
			carol.player.agentPubKey,
			carolPasscode,
		);
		await carol.store.client.requestLinkDevices(
			bob.player.agentPubKey,
			bobPasscode,
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		await pause(1_000); // Time for the post_commit hook to be run

		// Bob is now linked with Alice, Dave and Carol
		linksOutput = await toPromise(
			bob.store.linkedDevicesForAgent.get(bob.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 3);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) ===
					encodeHashToBase64(carol.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) ===
					encodeHashToBase64(alice.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) === encodeHashToBase64(dave.player.agentPubKey),
			),
		);

		// Carol is now linked with Alice, Bob and Dave
		linksOutput = await toPromise(
			carol.store.linkedDevicesForAgent.get(carol.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 3);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) === encodeHashToBase64(bob.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) ===
					encodeHashToBase64(alice.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) === encodeHashToBase64(dave.player.agentPubKey),
			),
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		// Alice is now linked with Bob, Carol and Dave
		linksOutput = await toPromise(
			alice.store.linkedDevicesForAgent.get(alice.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 3);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) ===
					encodeHashToBase64(carol.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) === encodeHashToBase64(bob.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) === encodeHashToBase64(dave.player.agentPubKey),
			),
		);

		await dave.startUp();
		await pause(80_000);

		// Dave is now linked with Alice, Bob and Carol
		linksOutput = await toPromise(
			dave.store.linkedDevicesForAgent.get(dave.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 3);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) ===
					encodeHashToBase64(carol.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) === encodeHashToBase64(bob.player.agentPubKey),
			),
		);
		assert.ok(
			linksOutput.find(
				l =>
					encodeHashToBase64(l) ===
					encodeHashToBase64(alice.player.agentPubKey),
			),
		);
	});
});
