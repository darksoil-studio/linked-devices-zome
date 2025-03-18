import { ActionHash, Record, encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { toPromise } from '@tnesh-stack/signals';
import { assert, test } from 'vitest';

import { linkDevices, setup, waitUntil } from './setup.js';

test('link devices transitively', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol, dave } = await setup(scenario);

		// Bob gets the links, should be empty
		let linksOutput = await toPromise(bob.store.myLinkedDevices);
		assert.equal(linksOutput.length, 0);

		await linkDevices(alice.store, bob.store);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		// Bob gets the links again
		linksOutput = await toPromise(bob.store.myLinkedDevices);
		assert.equal(linksOutput.length, 1);
		assert.deepEqual(
			encodeHashToBase64(alice.player.agentPubKey),
			encodeHashToBase64(linksOutput[0]),
		);

		// Alice gets the links again
		linksOutput = await toPromise(alice.store.myLinkedDevices);
		assert.equal(linksOutput.length, 1);
		assert.deepEqual(
			encodeHashToBase64(bob.player.agentPubKey),
			encodeHashToBase64(linksOutput[0]),
		);

		await linkDevices(carol.store, dave.store);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player, dave.player],
			alice.player.cells[0].cell_id[0],
		);
		await dave.player.conductor.shutDown();

		await linkDevices(bob.store, carol.store);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		await pause(1_000); // Time for the post_commit hook to be run

		// Bob is now linked with Alice, Dave and Carol
		linksOutput = await toPromise(bob.store.myLinkedDevices);
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
		linksOutput = await toPromise(carol.store.myLinkedDevices);
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
		linksOutput = await toPromise(alice.store.myLinkedDevices);
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

		await waitUntil(
			async () => (await toPromise(dave.store.myLinkedDevices)).length === 3,
			120_000,
		);

		// Dave is now linked with Alice, Bob and Carol
		linksOutput = await toPromise(dave.store.myLinkedDevices);
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
