import { assert, test } from "vitest";

import { toPromise } from "@holochain-open-dev/signals";
import { EntryRecord } from "@holochain-open-dev/utils";
import { ActionHash, Record } from "@holochain/client";
import { dhtSync, runScenario } from "@holochain/tryorama";
import { decode } from "@msgpack/msgpack";

import { setup } from "./setup.js";

test("link a Agent to a LinkedDevice", async () => {
  await runScenario(async scenario => {
    const { alice, bob } = await setup(scenario);

    const baseAddress = alice.player.agentPubKey;
    const targetAddress = alice.player.agentPubKey;

    // Bob gets the links, should be empty
    let linksOutput = await toPromise(bob.store.linkedDevicesForAgent.get(baseAddress));
    assert.equal(linksOutput.length, 0);

    // Alice creates a link from Agent to LinkedDevice
    await alice.store.client.addLinkedDeviceForAgent(baseAddress, targetAddress);

    // Wait for the created entry to be propagated to the other node.
    await dhtSync(
      [alice.player, bob.player],
      alice.player.cells[0].cell_id[0],
    );

    // Bob gets the links again
    linksOutput = await toPromise(bob.store.linkedDevicesForAgent.get(baseAddress));
    assert.equal(linksOutput.length, 1);
    assert.deepEqual(targetAddress, linksOutput[0]);
  });
});
