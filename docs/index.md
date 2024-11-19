---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Linked Devices Zome"
  text: ""
  tagline: Plug-and-play multi-devices management for your hApps
  actions:
    - theme: brand
      text: Setup
      link: /setup.md
    - theme: alt
      text: Integrity Zome API
      link: "/backend/doc/linked_devices_integrity/index.html"
      target: "_blank"
    - theme: alt
      text: Coordinator Zome API
      link: "/backend/doc/linked_devices/index.html"
      target: "_blank"
    - theme: alt
      text: Frontend API
      link: "/linked-devices-store.md"

features:
  - title: UI + Integrity + Coordinator Zomes
    details: Following the TNESH stack guidelines
    link: https://darksoil.studio/tnesh-stack
  - title: Enable each user to have multiple devices
    details: Link a computer and a phone together so that they share the same user experience.
  - title: Plug and play UI elements
    details: Include &lt;link-device-requestor&gt; and &lt;link-device-recipient&gt;, they will handle all the process for you.
  - title: Portable across DNAs
    details: Compatible with migration of DNAs and loss of devices.
---
