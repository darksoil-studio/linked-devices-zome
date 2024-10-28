# `<linked-devices-for-agent>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<linked-devices-for-agent>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/linked-devices/dist/elements/linked-devices-for-agent.js'
```

2. Use it in the html side of your web-app like this:

::: code-group
```html [Lit]
<linked-devices-for-agent .agent=${ agent }>
</linked-devices-for-agent>
```

```html [React]
<linked-devices-for-agent agent={ agent }>
</linked-devices-for-agent>
```

```html [Angular]
<linked-devices-for-agent [agent]="agent">
</linked-devices-for-agent>
```

```html [Vue]
<linked-devices-for-agent :agent="agent">
</linked-devices-for-agent>
```

```html [Svelte]
<linked-devices-for-agent agent={encodeHashToBase64(agent)}>
</linked-devices-for-agent>
```
:::

> [!WARNING]
> Like all the elements in this module, `<linked-devices-for-agent>` needs to be placed inside an initialized `<linked-devices-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@holochain-open-dev/profiles';
import { demoProfiles, ProfilesZomeMock } from '@holochain-open-dev/profiles/dist/mocks.js';
import { decodeHashFromBase64, encodeHashToBase64, fakeActionHash, fakeAgentPubKey } from '@holochain/client';
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

import { LinkedDevicesZomeMock } from "../../ui/src/mocks.ts";
import { LinkedDevicesStore } from "../../ui/src/linked-devices-store.ts";
import { LinkedDevicesClient } from "../../ui/src/linked-devices-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@holochain-open-dev/profiles/dist/elements/profiles-context.js');
  if (!customElements.get('linked-devices-context')) await import('../../ui/src/elements/linked-devices-context.ts');
  if (!customElements.get('linked-devices-for-agent')) await import('../../ui/src/elements/linked-devices-for-agent.ts');

  const profiles = await demoProfiles();
  const myPubKey = Array.from(profiles.keys())[0];

  const profilesMock = new ProfilesZomeMock(profiles, myPubKey);
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "linked_devices_test"));

  const mock = new LinkedDevicesZomeMock();
  const client = new LinkedDevicesClient(mock, "linked_devices_test");

  const fromHash = await fakeAgentPubKey();

  await mock.add_linked_device_for_agent({
    linked_device: myPubKey,
    agent: fromHash
  });

  const store = new LinkedDevicesStore(client);

  render(html`
    <profiles-context .store=${profilesStore}>
      <linked-devices-context .store=${store}>
        <api-demo src="custom-elements.json" only="linked-devices-for-agent" exclude-knobs="store">
          <template data-element="linked-devices-for-agent" data-target="host">
            <linked-devices-for-agent agent="${unsafeStatic(encodeHashToBase64(fromHash))}"></linked-devices-for-agent>
          </template>
        </api-demo>
      </linked-devices-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<linked-devices-for-agent>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="linked-devices-for-agent">
</api-docs>
