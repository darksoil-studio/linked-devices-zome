import { toPromise } from '@darksoil-studio/holochain-signals';
import { ActionHash, Record, encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { assert, test } from 'vitest';

import { eventually, linkDevices, setup, waitUntil } from './setup.js';

test('link devices transitively', async () => {
	await runScenario(async scenario => {
		const [alice, bob, carol, dave] = await setup(scenario, 4);

		// Bob gets the links, should be empty
		let linksOutput = await toPromise(bob.store.myLinkedDevices);
		assert.equal(linksOutput.length, 0);

		await linkDevices(alice.store, bob.store);

		await eventually(bob.store.myLinkedDevices, linksOutput => {
			assert.equal(linksOutput.length, 1);
			assert.deepEqual(
				encodeHashToBase64(alice.player.agentPubKey),
				encodeHashToBase64(linksOutput[0]),
			);
		});

		// Alice gets the links again
		linksOutput = await toPromise(alice.store.myLinkedDevices);
		assert.equal(linksOutput.length, 1);
		assert.equal(
			encodeHashToBase64(bob.player.agentPubKey),
			encodeHashToBase64(linksOutput[0]),
		);

		await linkDevices(carol.store, dave.store);

		await dave.player.conductor.shutDown();

		await linkDevices(bob.store, carol.store);

		// Bob is now linked with Alice, Dave and Carol
		await eventually(bob.store.myLinkedDevices, linksOutput => {
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
						encodeHashToBase64(l) ===
						encodeHashToBase64(dave.player.agentPubKey),
				),
			);
		});

		// Carol is now linked with Alice, Bob and Dave
		await eventually(carol.store.myLinkedDevices, linksOutput => {
			assert.equal(linksOutput.length, 3);
			assert.ok(
				linksOutput.find(
					l =>
						encodeHashToBase64(l) ===
						encodeHashToBase64(bob.player.agentPubKey),
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
						encodeHashToBase64(l) ===
						encodeHashToBase64(dave.player.agentPubKey),
				),
			);
		});

		// Alice is now linked with Bob, Carol and Dave
		await eventually(
			alice.store.myLinkedDevices,
			linksOutput => {
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
							encodeHashToBase64(bob.player.agentPubKey),
					),
				);
				assert.ok(
					linksOutput.find(
						l =>
							encodeHashToBase64(l) ===
							encodeHashToBase64(dave.player.agentPubKey),
					),
				);
			},
			240_000,
		);

		await dave.startUp();

		// Dave is now linked with Alice, Bob and Carol
		await eventually(
			dave.store.myLinkedDevices,
			linksOutput => {
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
							encodeHashToBase64(bob.player.agentPubKey),
					),
				);
				assert.ok(
					linksOutput.find(
						l =>
							encodeHashToBase64(l) ===
							encodeHashToBase64(alice.player.agentPubKey),
					),
				);
			},
			240_000,
		);
	});
});
