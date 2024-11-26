# `<link-device-requestor>`

## Usage

0. If you haven't already, [go through the setup for the module](/documentation/setup).

1. Import the `<link-device-requestor>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/linked-devices/dist/elements/link-device-requestor.js'
```

2. Use it in the html side of your web-app like this:

::: code-group
```html [Lit]
<link-device-requestor>
</link-device-requestor>
```

```html [React]
<link-device-requestor>
</link-device-requestor>
```

```html [Angular]
<link-device-requestor>
</link-device-requestor>
```

```html [Vue]
<link-device-requestor>
</link-device-requestor>
```

```html [Svelte]
<link-device-requestor>
</link-device-requestor>
```
:::

> [!WARNING]
> Like all the elements in this module, `<link-device-requestor>` needs to be placed inside an initialized `<linked-devices-context>`.

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
  if (!customElements.get('link-device-requestor')) await import('../../../ui/src/elements/link-device-requestor.ts');

  const mock = new LinkedDevicesZomeMock();
  const client = new LinkedDevicesClient(mock, "linked_devices_test");

  const store = new LinkedDevicesStore(client);

  render(html`
    <linked-devices-context .store=${store}>
      <api-demo src="custom-elements.json" only="link-device-requestor" exclude-knobs="store">
        <template data-element="link-device-requestor" data-target="host">
          <link-device-requestor></link-device-requestor>
        </template>
      </api-demo>
    </linked-devices-context>
  `, document.querySelector('element-demo'));
});
</script>

## API Reference

`<link-device-requestor>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="link-device-requestor">
</api-docs>
