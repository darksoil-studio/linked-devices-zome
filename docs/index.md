---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "@darksoil-studio/linked-devices-zome"
  text: "Linked Devices zome for holochain apps"
  tagline: Plug-and-play linked devices management for your hApps
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
  - title: Integrity and Coordinator Zomes
    details: Autonomous backend components.
  - title: UI state management
    details: Store and client exports handle the logic of communicating with the zomes from the UI out of the box.
  - title: Reusable UI components
    details: Include these components to let them handle the whole process for you.
---
