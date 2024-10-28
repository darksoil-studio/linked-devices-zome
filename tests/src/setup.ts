import { EntryRecord } from "@holochain-open-dev/utils";
import {
  ActionHash,
  AgentPubKey,
  AppBundleSource,
  AppCallZomeRequest,
  AppWebsocket,
  encodeHashToBase64,
  EntryHash,
  fakeActionHash,
  fakeAgentPubKey,
  fakeDnaHash,
  fakeEntryHash,
  NewEntryAction,
  Record,
} from "@holochain/client";
import { Scenario } from "@holochain/tryorama";
import { encode } from "@msgpack/msgpack";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { LinkedDevicesClient } from "../../ui/src/linked-devices-client.js";
import { LinkedDevicesStore } from "../../ui/src/linked-devices-store.js";

export async function setup(scenario: Scenario) {
  const testHappUrl = dirname(fileURLToPath(import.meta.url)) + "/../../workdir/linked-devices_test.happ";

  // Add 2 players with the test hApp to the Scenario. The returned players
  // can be destructured.
  const [alice, bob] = await scenario.addPlayersWithApps([
    { appBundleSource: { path: testHappUrl } },
    { appBundleSource: { path: testHappUrl } },
  ]);

  // Shortcut peer discovery through gossip and register all agents in every
  // conductor of the scenario.
  await scenario.shareAllAgents();

  const aliceStore = new LinkedDevicesStore(
    new LinkedDevicesClient(alice.appWs as any, "linked_devices_test", "linked_devices"),
  );

  const bobStore = new LinkedDevicesStore(
    new LinkedDevicesClient(bob.appWs as any, "linked_devices_test", "linked_devices"),
  );

  // Shortcut peer discovery through gossip and register all agents in every
  // conductor of the scenario.
  await scenario.shareAllAgents();

  return {
    alice: {
      player: alice,
      store: aliceStore,
    },
    bob: {
      player: bob,
      store: bobStore,
    },
  };
}
