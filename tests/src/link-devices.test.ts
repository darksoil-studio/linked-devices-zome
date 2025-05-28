import { toPromise } from '@darksoil-studio/holochain-signals';
import { ActionHash, Record, encodeHashToBase64 } from '@holochain/client';
import { dhtSync, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { assert, test } from 'vitest';

import { eventually, setup } from './setup.js';

test('link devices', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		// Bob gets the links, should be empty
		let linksOutput = await toPromise(
			bob.store.linkedDevicesForAgent.get(bob.player.agentPubKey),
		);
		assert.equal(linksOutput.length, 0);

		const alicePasscode = [1, 3, 7, 2];
		const bobPasscode = [9, 3, 8, 4];

		await alice.store.client.prepareLinkDevicesRequestor(
			bob.player.agentPubKey,
			alicePasscode,
		);
		await bob.store.client.prepareLinkDevicesRecipient(
			alice.player.agentPubKey,
			bobPasscode,
		);

		await alice.store.client.requestLinkDevices(
			bob.player.agentPubKey,
			bobPasscode,
		);
		await bob.store.client.acceptLinkDevices(
			alice.player.agentPubKey,
			alicePasscode,
		);

		// Bob gets the links again
		await eventually(
			bob.store.linkedDevicesForAgent.get(bob.player.agentPubKey),
			linksOutput => {
				assert.equal(linksOutput.length, 1);
				assert.deepEqual(
					encodeHashToBase64(alice.player.agentPubKey),
					encodeHashToBase64(linksOutput[0]),
				);
			},
		);

		// Alice gets the links again
		await eventually(
			alice.store.linkedDevicesForAgent.get(alice.player.agentPubKey),
			linksOutput => {
				assert.equal(linksOutput.length, 1);
				assert.deepEqual(
					encodeHashToBase64(bob.player.agentPubKey),
					encodeHashToBase64(linksOutput[0]),
				);
			},
		);

		// Alice gets the links again
		await eventually(alice.store.myLinkedDevices, linksOutput => {
			assert.equal(linksOutput.length, 1);
			assert.deepEqual(
				encodeHashToBase64(bob.player.agentPubKey),
				encodeHashToBase64(linksOutput[0]),
			);
		});
	});
});
