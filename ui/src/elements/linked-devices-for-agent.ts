import { hashProperty, sharedStyles, wrapPathInSvg } from "@holochain-open-dev/elements";
import { SignalWatcher } from "@holochain-open-dev/signals";
import { ActionHash, AgentPubKey, EntryHash, Record } from "@holochain/client";
import { consume } from "@lit/context";
import { localized, msg } from "@lit/localize";
import { mdiInformationOutline } from "@mdi/js";
import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "@holochain-open-dev/elements/dist/elements/display-error.js";
import "@shoelace-style/shoelace/dist/components/spinner/spinner.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";

import "@holochain-open-dev/profiles/dist/elements/agent-avatar.js";

import { linkedDevicesStoreContext } from "../context.js";
import { LinkedDevicesStore } from "../linked-devices-store.js";

/**
 * @element linked-devices-for-agent
 */
@localized()
@customElement("linked-devices-for-agent")
export class LinkedDevicesForAgent extends SignalWatcher(LitElement) {
  /**
   * REQUIRED. The Agent for which the LinkedDevices should be fetched
   */
  @property(hashProperty("agent"))
  agent!: AgentPubKey;

  /**
   * @internal
   */
  @consume({ context: linkedDevicesStoreContext, subscribe: true })
  linkedDevicesStore!: LinkedDevicesStore;

  firstUpdated() {
    if (this.agent === undefined) {
      throw new Error(`The agent property is required for the linked-devices-for-agent element`);
    }
  }

  renderList(hashes: Array<AgentPubKey>) {
    if (hashes.length === 0) {
      return html` <div class="column center-content" style="gap: 16px;">
        <sl-icon
          style="color: grey; height: 64px; width: 64px;"
          .src=${wrapPathInSvg(mdiInformationOutline)}
        ></sl-icon>
        <span class="placeholder">${msg("No linked devices found for this agent")}</span>
      </div>`;
    }

    return html`
      <div class="column" style="gap: 16px;">
        ${hashes.map(hash => html`<agent-avatar .agentPubKey=${hash}></agent-avatar>`)}
      </div>
    `;
  }

  render() {
    const agents = this.linkedDevicesStore.linkedDevicesForAgent.get(this.agent).get();

    switch (agents.status) {
      case "pending":
        return html`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
        >
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>`;
      case "error":
        return html`<display-error
          .headline=${msg("Error fetching the linked devices")}
          .error=${agents.error}
        ></display-error>`;
      case "completed":
        return this.renderList(agents.value);
    }
  }

  static styles = [sharedStyles];
}
