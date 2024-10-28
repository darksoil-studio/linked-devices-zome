import { EntryRecord, ZomeClient } from "@holochain-open-dev/utils";
import {
  ActionHash,
  AgentPubKey,
  AppClient,
  CreateLink,
  Delete,
  DeleteLink,
  EntryHash,
  Link,
  Record,
  SignedActionHashed,
} from "@holochain/client";

import { LinkedDevicesSignal } from "./types.js";

export class LinkedDevicesClient extends ZomeClient<LinkedDevicesSignal> {
  constructor(public client: AppClient, public roleName: string, public zomeName = "linked_devices") {
    super(client, roleName, zomeName);
  }
}
