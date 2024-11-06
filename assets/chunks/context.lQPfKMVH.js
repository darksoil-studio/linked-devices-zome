import{g as l,h as d}from"./linked-devices-client.BfeCTcfl.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends Event{constructor(s,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=e=>(s,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,s)}):customElements.define(e,s)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:d},p=(e=u,s,t)=>{const{kind:r,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(t.name,e),r==="accessor"){const{name:n}=t;return{set(c){const a=s.get.call(this);s.set.call(this,c),this.requestUpdate(n,a,e)},init(c){return c!==void 0&&this.P(n,void 0,e),c}}}if(r==="setter"){const{name:n}=t;return function(c){const a=this[n];s.call(this,c),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+r)};function v(e){return(s,t)=>typeof t=="object"?p(e,s,t):((r,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,s,t)}const g="linked_devices/store";export{g as l,v as n,b as s,m as t};
