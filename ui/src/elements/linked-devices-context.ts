import { provide } from "@lit/context";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { linkedDevicesStoreContext } from "../context.js";
import { LinkedDevicesStore } from "../linked-devices-store.js";

@customElement("linked-devices-context")
export class LinkedDevicesContext extends LitElement {
  @provide({ context: linkedDevicesStoreContext })
  @property({ type: Object })
  store!: LinkedDevicesStore;

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}
