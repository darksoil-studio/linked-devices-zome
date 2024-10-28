import {
  allRevisionsOfEntrySignal,
  AsyncComputed,
  collectionSignal,
  deletedLinksSignal,
  deletesForEntrySignal,
  immutableEntrySignal,
  latestVersionOfEntrySignal,
  liveLinksSignal,
  pipe,
} from "@holochain-open-dev/signals";
import { EntryRecord, HashType, LazyHoloHashMap, retype, slice } from "@holochain-open-dev/utils";
import { ActionHash, AgentPubKey, EntryHash, NewEntryAction, Record } from "@holochain/client";

import { LinkedDevicesClient } from "./linked-devices-client.js";

export class LinkedDevicesStore {
  constructor(public client: LinkedDevicesClient) {}
}
