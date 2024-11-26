# `<link-device-recipient>`

## Usage

0. If you haven't already, [go through the setup for the module](/documentation/setup).

1. Import the `<link-device-recipient>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/linked-devices-zome/dist/elements/link-device-recipient.js'
```

2. Use it in the html side of your web-app like this:

::: code-group
```html [Lit]
<link-device-recipient>
</link-device-recipient>
```

```html [React]
<link-device-recipient>
</link-device-recipient>
```

```html [Angular]
<link-device-recipient>
</link-device-recipient>
```

```html [Vue]
<link-device-recipient>
</link-device-recipient>
```

```html [Svelte]
<link-device-recipient>
</link-device-recipient>
```
:::

> [!WARNING]
> Like all the elements in this module, `<link-device-recipient>` needs to be placed inside an initialized `<linked-devices-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { decodeHashFromBase64, encodeHashToBase64, fakeActionHash, fakeAgentPubKey } from '@holochain/client';
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

import { LinkedDevicesZomeMock } from "../../../ui/src/mocks.ts";
import { LinkedDevicesStore } from "../../../ui/src/linked-devices-store.ts";
import { LinkedDevicesClient } from "../../../ui/src/linked-devices-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  if (!customElements.get('linked-devices-context')) await import('../../../ui/src/elements/linked-devices-context.ts');
  if (!customElements.get('link-device-recipient')) await import('../../../ui/src/elements/link-device-recipient.ts');

  const mock = new LinkedDevicesZomeMock();
  const client = new LinkedDevicesClient(mock, "linked_devices_test");

  const store = new LinkedDevicesStore(client);

  render(html`
    <linked-devices-context .store=${store}>
      <api-demo src="custom-elements.json" only="link-device-recipient" exclude-knobs="store">
        <template data-element="link-device-recipient" data-target="host">
          <link-device-recipient></link-device-recipient>
        </template>
      </api-demo>
    </linked-devices-context>
  `, document.querySelector('element-demo'));
});
</script>

## API Reference

`<link-device-recipient>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="link-device-recipient">
</api-docs>
