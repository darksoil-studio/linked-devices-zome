var yo=Object.defineProperty;var bo=(t,e,o)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var Jt=(t,e,o)=>bo(t,typeof e!="symbol"?e+"":e,o);import{S as $e,d as ne,e as Ot}from"./linked-devices-client.DVv9Vanq.js";import{i as U,r as fe,x as L,T as yt,E as Ue,a as ze,u as wo,b as ke}from"./static.DUZ9MXPw.js";import{a as y,b as je,c as _o,l as xo,t as We}from"./context.DydGRr3S.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Co(t){class e extends t{constructor(){super(...arguments);Jt(this,"__dispose");Jt(this,"w",new $e.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const r=this.__dispose,s=new $e.Computed(()=>{super.performUpdate()});this.w.watch(s),this.__dispose=()=>{this.w.unwatch(s)},s.get(),r==null||r()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.__dispose)==null||r.call(this)}}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},me=t=>(...e)=>({_$litDirective$:t,values:e});let ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};function zr(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:e=>e&&e.length>0&&ne(e),toAttribute:e=>e&&Ot(e)},reflect:!0}}function Ao(t){return`data:image/svg+xml;utf8,${Eo(t)}`}function Eo(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var $o="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",zo="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";function ko(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function So(t,e="primary",o=zo,i=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:i,innerHTML:`
        <sl-icon src="${Ao(o)}" slot="icon"></sl-icon>
        ${ko(t)}
      `});return document.body.append(r),r.toast()}function te(t){return So(t,"danger",$o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct(t){return y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t,e){return(o,i,r)=>{const s=u=>{var p;return((p=u.renderRoot)==null?void 0:p.querySelector(t))??null};return To(o,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=t=>typeof t!="string"&&"strTag"in t,Lo=(t,e,o)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[r-1],i+=t[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=t=>Po(t)?Lo(t.strings,t.values):t;let ht=Oo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ro=class{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Se,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Se,this.__litLocalizeEventHandler)}};const Io=t=>t.addController(new Ro(t)),Do=Io;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=()=>(t,e)=>(t.addInitializer(Do),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mo{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vo=new Mo;Vo.resolve();var Fo=U`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,ae="";function Te(t){ae=t}function No(t=""){if(!ae){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Te(o.getAttribute("data-shoelace"));else{const i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";i&&(r=i.getAttribute("src")),Te(r.split("/").slice(0,-1).join("/"))}}return ae.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ho={name:"default",resolver:t=>No(`assets/icons/${t}.svg`)},Uo=Ho,Pe={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},jo={name:"system",resolver:t=>t in Pe?`data:image/svg+xml,${encodeURIComponent(Pe[t])}`:""},Wo=jo,Ko=[Uo,Wo],le=[];function qo(t){le.push(t)}function Yo(t){le=le.filter(e=>e!==t)}function Le(t){return Ko.find(e=>e.name===t)}var Qo=U`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ke=Object.defineProperty,Xo=Object.defineProperties,Go=Object.getOwnPropertyDescriptor,Zo=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,Jo=Object.prototype.hasOwnProperty,ti=Object.prototype.propertyIsEnumerable,Re=(t,e,o)=>e in t?Ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,mt=(t,e)=>{for(var o in e||(e={}))Jo.call(e,o)&&Re(t,o,e[o]);if(Oe)for(var o of Oe(e))ti.call(e,o)&&Re(t,o,e[o]);return t},Qt=(t,e)=>Xo(t,Zo(e)),m=(t,e,o,i)=>{for(var r=i>1?void 0:i?Go(e,o):e,s=t.length-1,u;s>=0;s--)(u=t[s])&&(r=(i?u(e,o,r):u(r))||r);return i&&r&&Ke(e,o,r),r},qe=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},ei=(t,e,o)=>(qe(t,e,"read from private field"),e.get(t)),oi=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},ii=(t,e,o,i)=>(qe(t,e,"write to private field"),e.set(t,o),o);function Q(t,e){const o=mt({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:s}=i,u=Array.isArray(t)?t:[t];i.update=function(p){u.forEach(l=>{const a=l;if(p.has(a)){const f=p.get(a),n=this[a];f!==n&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](f,n)}}),s.call(this,p)}}}var rt=U`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Vt,j=class extends fe{constructor(){super(),oi(this,Vt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,mt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,o){ei(this,Vt)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),ii(this,Vt,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};Vt=new WeakMap;j.version="2.18.0";j.dependencies={};m([y()],j.prototype,"dir",2);m([y()],j.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ri=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,si=t=>t.strings===void 0,ni={},ai=(t,e=ni)=>t._$AH=e;var St=Symbol(),Dt=Symbol(),ee,oe=new Map,X=class extends j{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return this.svg=L`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?St:Dt}catch{return Dt}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())!=="svg")return St;ee||(ee=new DOMParser);const p=ee.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return p?(p.part.add("svg"),document.adoptNode(p)):St}catch{return St}}connectedCallback(){super.connectedCallback(),qo(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yo(this)}getIconSource(){const t=Le(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?Le(this.library):void 0;if(!e){this.svg=null;return}let r=oe.get(e);if(r||(r=this.resolveIcon(e,i),oe.set(e,r)),!this.initialRender)return;const s=await r;if(s===Dt&&oe.delete(e),e===this.getIconSource().url){if(ri(s)){if(this.svg=s,i){await this.updateComplete;const u=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&u&&i.mutator(u)}return}switch(s){case Dt:case St:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};X.styles=[rt,Qo];m([Ct()],X.prototype,"svg",2);m([y({reflect:!0})],X.prototype,"name",2);m([y()],X.prototype,"src",2);m([y()],X.prototype,"label",2);m([y({reflect:!0})],X.prototype,"library",2);m([Q("label")],X.prototype,"handleLabelChange",1);m([Q(["name","src","library"])],X.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=me(class extends ge{constructor(t){var e;if(super(t),t.type!==at.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const o=t.element.classList;for(const s of this.st)s in e||(o.remove(s),this.st.delete(s));for(const s in e){const u=!!e[s];u===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(u?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return yt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=t=>t??Ue;var F=class extends j{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?ze`a`:ze`button`;return wo`
      <${e}
        part="base"
        class=${et({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${P(t?void 0:this.disabled)}
        type=${P(t?void 0:"button")}
        href=${P(t?this.href:void 0)}
        target=${P(t?this.target:void 0)}
        download=${P(t?this.download:void 0)}
        rel=${P(t&&this.target?"noreferrer noopener":void 0)}
        role=${P(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${P(this.name)}
          library=${P(this.library)}
          src=${P(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};F.styles=[rt,Fo];F.dependencies={"sl-icon":X};m([V(".icon-button")],F.prototype,"button",2);m([Ct()],F.prototype,"hasFocus",2);m([y()],F.prototype,"name",2);m([y()],F.prototype,"library",2);m([y()],F.prototype,"src",2);m([y()],F.prototype,"href",2);m([y()],F.prototype,"target",2);m([y()],F.prototype,"download",2);m([y()],F.prototype,"label",2);m([y({type:Boolean,reflect:!0})],F.prototype,"disabled",2);var Ye=new Map,li=new WeakMap;function ci(t){return t??{keyframes:[],options:{duration:0}}}function Ie(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function At(t,e){Ye.set(t,ci(e))}function _t(t,e,o){const i=li.get(t);if(i!=null&&i[e])return Ie(i[e],o.dir);const r=Ye.get(e);return r?Ie(r,o.dir):{keyframes:[],options:{duration:0}}}function Nt(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function Ht(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Qt(mt({},o),{duration:ui()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function De(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function ui(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ut(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}const ce=new Set,bt=new Map;let dt,ve="ltr",ye="en";const Qe=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Qe){const t=new MutationObserver(Ge);ve=document.documentElement.dir||"ltr",ye=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Xe(...t){t.map(e=>{const o=e.$code.toLowerCase();bt.has(o)?bt.set(o,Object.assign(Object.assign({},bt.get(o)),e)):bt.set(o,e),dt||(dt=e)}),Ge()}function Ge(){Qe&&(ve=document.documentElement.dir||"ltr",ye=document.documentElement.lang||navigator.language),[...ce.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let hi=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ce.add(this.host)}hostDisconnected(){ce.delete(this.host)}dir(){return`${this.host.dir||ve}`.toLowerCase()}lang(){return`${this.host.lang||ye}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),u=(i=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",p=bt.get(`${s}-${u}`),l=bt.get(s);return{locale:r,language:s,region:u,primary:p,secondary:l}}exists(e,o){var i;const{primary:r,secondary:s}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||s&&s[e]||o.includeFallback&&dt&&dt[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(dt&&dt[e])s=dt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var Ze={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Xe(Ze);var di=Ze,Et=class extends hi{};Xe(di);var Je=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},pi=U`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,vt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),W=class extends j{constructor(){super(...arguments),this.hasSlotController=new Je(this,"icon","suffix"),this.localize=new Et(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",o="0";this.countdownAnimation=t.animate([{width:e},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ut(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=_t(this,"alert.show",{dir:this.localize.dir()});await Ht(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Ut(this.base);const{keyframes:t,options:e}=_t(this,"alert.hide",{dir:this.localize.dir()});await Ht(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Nt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Nt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),vt.parentElement===null&&document.body.append(vt),vt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{vt.removeChild(this),t(),vt.querySelector("sl-alert")===null&&vt.remove()},{once:!0})})}render(){return L`
      <div
        part="base"
        class=${et({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?L`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?L`
              <div
                class=${et({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};W.styles=[rt,pi];W.dependencies={"sl-icon-button":F};m([V('[part~="base"]')],W.prototype,"base",2);m([V(".alert__countdown-elapsed")],W.prototype,"countdownElement",2);m([y({type:Boolean,reflect:!0})],W.prototype,"open",2);m([y({type:Boolean,reflect:!0})],W.prototype,"closable",2);m([y({reflect:!0})],W.prototype,"variant",2);m([y({type:Number})],W.prototype,"duration",2);m([y({type:String,reflect:!0})],W.prototype,"countdown",2);m([Ct()],W.prototype,"remainingTime",2);m([Q("open",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpenChange",1);m([Q("duration")],W.prototype,"handleDurationChange",1);At("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});At("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});W.define("sl-alert");function fi(){return Math.floor(Math.random()*10)}function Tr(t){const e=[];for(let o=0;o<t;o++)e.push(fi());return e}var mi=U`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,gi=U`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const lt=Math.min,N=Math.max,jt=Math.round,Bt=Math.floor,tt=t=>({x:t,y:t}),vi={left:"right",right:"left",bottom:"top",top:"bottom"},yi={start:"end",end:"start"};function ue(t,e,o){return N(t,lt(e,o))}function $t(t,e){return typeof t=="function"?t(e):t}function ct(t){return t.split("-")[0]}function zt(t){return t.split("-")[1]}function to(t){return t==="x"?"y":"x"}function be(t){return t==="y"?"height":"width"}function pt(t){return["top","bottom"].includes(ct(t))?"y":"x"}function we(t){return to(pt(t))}function bi(t,e,o){o===void 0&&(o=!1);const i=zt(t),r=we(t),s=be(r);let u=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(u=Wt(u)),[u,Wt(u)]}function wi(t){const e=Wt(t);return[he(t),e,he(e)]}function he(t){return t.replace(/start|end/g,e=>yi[e])}function _i(t,e,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],u=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?s:u;default:return[]}}function xi(t,e,o,i){const r=zt(t);let s=_i(ct(t),o==="start",i);return r&&(s=s.map(u=>u+"-"+r),e&&(s=s.concat(s.map(he)))),s}function Wt(t){return t.replace(/left|right|bottom|top/g,e=>vi[e])}function Ci(t){return{top:0,right:0,bottom:0,left:0,...t}}function eo(t){return typeof t!="number"?Ci(t):{top:t,right:t,bottom:t,left:t}}function Kt(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function Be(t,e,o){let{reference:i,floating:r}=t;const s=pt(e),u=we(e),p=be(u),l=ct(e),a=s==="y",f=i.x+i.width/2-r.width/2,n=i.y+i.height/2-r.height/2,c=i[p]/2-r[p]/2;let h;switch(l){case"top":h={x:f,y:i.y-r.height};break;case"bottom":h={x:f,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:n};break;case"left":h={x:i.x-r.width,y:n};break;default:h={x:i.x,y:i.y}}switch(zt(e)){case"start":h[u]-=c*(o&&a?-1:1);break;case"end":h[u]+=c*(o&&a?-1:1);break}return h}const Ai=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:u}=o,p=s.filter(Boolean),l=await(u.isRTL==null?void 0:u.isRTL(e));let a=await u.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:n}=Be(a,i,l),c=i,h={},d=0;for(let g=0;g<p.length;g++){const{name:x,fn:C}=p[g],{x:w,y:_,data:v,reset:b}=await C({x:f,y:n,initialPlacement:i,placement:c,strategy:r,middlewareData:h,rects:a,platform:u,elements:{reference:t,floating:e}});f=w??f,n=_??n,h={...h,[x]:{...h[x],...v}},b&&d<=50&&(d++,typeof b=="object"&&(b.placement&&(c=b.placement),b.rects&&(a=b.rects===!0?await u.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:f,y:n}=Be(a,c,l)),g=-1)}return{x:f,y:n,placement:c,strategy:r,middlewareData:h}};async function _e(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:u,elements:p,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:n="floating",altBoundary:c=!1,padding:h=0}=$t(e,t),d=eo(h),x=p[c?n==="floating"?"reference":"floating":n],C=Kt(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(x)))==null||o?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(p.floating)),boundary:a,rootBoundary:f,strategy:l})),w=n==="floating"?{x:i,y:r,width:u.floating.width,height:u.floating.height}:u.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(p.floating)),v=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},b=Kt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:w,offsetParent:_,strategy:l}):w);return{top:(C.top-b.top+d.top)/v.y,bottom:(b.bottom-C.bottom+d.bottom)/v.y,left:(C.left-b.left+d.left)/v.x,right:(b.right-C.right+d.right)/v.x}}const Ei=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:s,platform:u,elements:p,middlewareData:l}=e,{element:a,padding:f=0}=$t(t,e)||{};if(a==null)return{};const n=eo(f),c={x:o,y:i},h=we(r),d=be(h),g=await u.getDimensions(a),x=h==="y",C=x?"top":"left",w=x?"bottom":"right",_=x?"clientHeight":"clientWidth",v=s.reference[d]+s.reference[h]-c[h]-s.floating[d],b=c[h]-s.reference[h],E=await(u.getOffsetParent==null?void 0:u.getOffsetParent(a));let k=E?E[_]:0;(!k||!await(u.isElement==null?void 0:u.isElement(E)))&&(k=p.floating[_]||s.floating[d]);const S=v/2-b/2,$=k/2-g[d]/2-1,A=lt(n[C],$),I=lt(n[w],$),O=A,M=k-g[d]-I,R=k/2-g[d]/2+S,K=ue(O,R,M),Z=!l.arrow&&zt(r)!=null&&R!==K&&s.reference[d]/2-(R<O?A:I)-g[d]/2<0,J=Z?R<O?R-O:R-M:0;return{[h]:c[h]+J,data:{[h]:K,centerOffset:R-K-J,...Z&&{alignmentOffset:J}},reset:Z}}}),$i=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:s,rects:u,initialPlacement:p,platform:l,elements:a}=e,{mainAxis:f=!0,crossAxis:n=!0,fallbackPlacements:c,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:g=!0,...x}=$t(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const C=ct(r),w=pt(p),_=ct(p)===p,v=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=c||(_||!g?[Wt(p)]:wi(p)),E=d!=="none";!c&&E&&b.push(...xi(p,g,d,v));const k=[p,...b],S=await _e(e,x),$=[];let A=((i=s.flip)==null?void 0:i.overflows)||[];if(f&&$.push(S[C]),n){const R=bi(r,u,v);$.push(S[R[0]],S[R[1]])}if(A=[...A,{placement:r,overflows:$}],!$.every(R=>R<=0)){var I,O;const R=(((I=s.flip)==null?void 0:I.index)||0)+1,K=k[R];if(K)return{data:{index:R,overflows:A},reset:{placement:K}};let Z=(O=A.filter(J=>J.overflows[0]<=0).sort((J,st)=>J.overflows[1]-st.overflows[1])[0])==null?void 0:O.placement;if(!Z)switch(h){case"bestFit":{var M;const J=(M=A.filter(st=>{if(E){const nt=pt(st.placement);return nt===w||nt==="y"}return!0}).map(st=>[st.placement,st.overflows.filter(nt=>nt>0).reduce((nt,vo)=>nt+vo,0)]).sort((st,nt)=>st[1]-nt[1])[0])==null?void 0:M[0];J&&(Z=J);break}case"initialPlacement":Z=p;break}if(r!==Z)return{reset:{placement:Z}}}return{}}}};async function zi(t,e){const{placement:o,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),u=ct(o),p=zt(o),l=pt(o)==="y",a=["left","top"].includes(u)?-1:1,f=s&&l?-1:1,n=$t(e,t);let{mainAxis:c,crossAxis:h,alignmentAxis:d}=typeof n=="number"?{mainAxis:n,crossAxis:0,alignmentAxis:null}:{mainAxis:n.mainAxis||0,crossAxis:n.crossAxis||0,alignmentAxis:n.alignmentAxis};return p&&typeof d=="number"&&(h=p==="end"?d*-1:d),l?{x:h*f,y:c*a}:{x:c*a,y:h*f}}const ki=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:s,placement:u,middlewareData:p}=e,l=await zi(e,t);return u===((o=p.offset)==null?void 0:o.placement)&&(i=p.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:u}}}}},Si=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:u=!1,limiter:p={fn:x=>{let{x:C,y:w}=x;return{x:C,y:w}}},...l}=$t(t,e),a={x:o,y:i},f=await _e(e,l),n=pt(ct(r)),c=to(n);let h=a[c],d=a[n];if(s){const x=c==="y"?"top":"left",C=c==="y"?"bottom":"right",w=h+f[x],_=h-f[C];h=ue(w,h,_)}if(u){const x=n==="y"?"top":"left",C=n==="y"?"bottom":"right",w=d+f[x],_=d-f[C];d=ue(w,d,_)}const g=p.fn({...e,[c]:h,[n]:d});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[c]:s,[n]:u}}}}}},Ti=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:s,platform:u,elements:p}=e,{apply:l=()=>{},...a}=$t(t,e),f=await _e(e,a),n=ct(r),c=zt(r),h=pt(r)==="y",{width:d,height:g}=s.floating;let x,C;n==="top"||n==="bottom"?(x=n,C=c===(await(u.isRTL==null?void 0:u.isRTL(p.floating))?"start":"end")?"left":"right"):(C=n,x=c==="end"?"top":"bottom");const w=g-f.top-f.bottom,_=d-f.left-f.right,v=lt(g-f[x],w),b=lt(d-f[C],_),E=!e.middlewareData.shift;let k=v,S=b;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(S=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(k=w),E&&!c){const A=N(f.left,0),I=N(f.right,0),O=N(f.top,0),M=N(f.bottom,0);h?S=d-2*(A!==0||I!==0?A+I:N(f.left,f.right)):k=g-2*(O!==0||M!==0?O+M:N(f.top,f.bottom))}await l({...e,availableWidth:S,availableHeight:k});const $=await u.getDimensions(p.floating);return d!==$.width||g!==$.height?{reset:{rects:!0}}:{}}}};function Xt(){return typeof window<"u"}function kt(t){return oo(t)?(t.nodeName||"").toLowerCase():"#document"}function H(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function it(t){var e;return(e=(oo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function oo(t){return Xt()?t instanceof Node||t instanceof H(t).Node:!1}function q(t){return Xt()?t instanceof Element||t instanceof H(t).Element:!1}function ot(t){return Xt()?t instanceof HTMLElement||t instanceof H(t).HTMLElement:!1}function Me(t){return!Xt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof H(t).ShadowRoot}function It(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=Y(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function Pi(t){return["table","td","th"].includes(kt(t))}function Gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function xe(t){const e=Ce(),o=q(t)?Y(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Li(t){let e=ut(t);for(;ot(e)&&!xt(e);){if(xe(e))return e;if(Gt(e))return null;e=ut(e)}return null}function Ce(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function xt(t){return["html","body","#document"].includes(kt(t))}function Y(t){return H(t).getComputedStyle(t)}function Zt(t){return q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ut(t){if(kt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Me(t)&&t.host||it(t);return Me(e)?e.host:e}function io(t){const e=ut(t);return xt(e)?t.ownerDocument?t.ownerDocument.body:t.body:ot(e)&&It(e)?e:io(e)}function Rt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=io(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),u=H(r);if(s){const p=de(u);return e.concat(u,u.visualViewport||[],It(r)?r:[],p&&o?Rt(p):[])}return e.concat(r,Rt(r,[],o))}function de(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ro(t){const e=Y(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=ot(t),s=r?t.offsetWidth:o,u=r?t.offsetHeight:i,p=jt(o)!==s||jt(i)!==u;return p&&(o=s,i=u),{width:o,height:i,$:p}}function Ae(t){return q(t)?t:t.contextElement}function wt(t){const e=Ae(t);if(!ot(e))return tt(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:s}=ro(e);let u=(s?jt(o.width):o.width)/i,p=(s?jt(o.height):o.height)/r;return(!u||!Number.isFinite(u))&&(u=1),(!p||!Number.isFinite(p))&&(p=1),{x:u,y:p}}const Oi=tt(0);function so(t){const e=H(t);return!Ce()||!e.visualViewport?Oi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ri(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==H(t)?!1:e}function ft(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=Ae(t);let u=tt(1);e&&(i?q(i)&&(u=wt(i)):u=wt(t));const p=Ri(s,o,i)?so(s):tt(0);let l=(r.left+p.x)/u.x,a=(r.top+p.y)/u.y,f=r.width/u.x,n=r.height/u.y;if(s){const c=H(s),h=i&&q(i)?H(i):i;let d=c,g=de(d);for(;g&&i&&h!==d;){const x=wt(g),C=g.getBoundingClientRect(),w=Y(g),_=C.left+(g.clientLeft+parseFloat(w.paddingLeft))*x.x,v=C.top+(g.clientTop+parseFloat(w.paddingTop))*x.y;l*=x.x,a*=x.y,f*=x.x,n*=x.y,l+=_,a+=v,d=H(g),g=de(d)}}return Kt({width:f,height:n,x:l,y:a})}function Ee(t,e){const o=Zt(t).scrollLeft;return e?e.left+o:ft(it(t)).left+o}function no(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(o?0:Ee(t,i)),s=i.top+e.scrollTop;return{x:r,y:s}}function Ii(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const s=r==="fixed",u=it(i),p=e?Gt(e.floating):!1;if(i===u||p&&s)return o;let l={scrollLeft:0,scrollTop:0},a=tt(1);const f=tt(0),n=ot(i);if((n||!n&&!s)&&((kt(i)!=="body"||It(u))&&(l=Zt(i)),ot(i))){const h=ft(i);a=wt(i),f.x=h.x+i.clientLeft,f.y=h.y+i.clientTop}const c=u&&!n&&!s?no(u,l,!0):tt(0);return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+f.x+c.x,y:o.y*a.y-l.scrollTop*a.y+f.y+c.y}}function Di(t){return Array.from(t.getClientRects())}function Bi(t){const e=it(t),o=Zt(t),i=t.ownerDocument.body,r=N(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=N(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let u=-o.scrollLeft+Ee(t);const p=-o.scrollTop;return Y(i).direction==="rtl"&&(u+=N(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:u,y:p}}function Mi(t,e){const o=H(t),i=it(t),r=o.visualViewport;let s=i.clientWidth,u=i.clientHeight,p=0,l=0;if(r){s=r.width,u=r.height;const a=Ce();(!a||a&&e==="fixed")&&(p=r.offsetLeft,l=r.offsetTop)}return{width:s,height:u,x:p,y:l}}function Vi(t,e){const o=ft(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,s=ot(t)?wt(t):tt(1),u=t.clientWidth*s.x,p=t.clientHeight*s.y,l=r*s.x,a=i*s.y;return{width:u,height:p,x:l,y:a}}function Ve(t,e,o){let i;if(e==="viewport")i=Mi(t,o);else if(e==="document")i=Bi(it(t));else if(q(e))i=Vi(e,o);else{const r=so(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Kt(i)}function ao(t,e){const o=ut(t);return o===e||!q(o)||xt(o)?!1:Y(o).position==="fixed"||ao(o,e)}function Fi(t,e){const o=e.get(t);if(o)return o;let i=Rt(t,[],!1).filter(p=>q(p)&&kt(p)!=="body"),r=null;const s=Y(t).position==="fixed";let u=s?ut(t):t;for(;q(u)&&!xt(u);){const p=Y(u),l=xe(u);!l&&p.position==="fixed"&&(r=null),(s?!l&&!r:!l&&p.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||It(u)&&!l&&ao(t,u))?i=i.filter(f=>f!==u):r=p,u=ut(u)}return e.set(t,i),i}function Ni(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const u=[...o==="clippingAncestors"?Gt(e)?[]:Fi(e,this._c):[].concat(o),i],p=u[0],l=u.reduce((a,f)=>{const n=Ve(e,f,r);return a.top=N(n.top,a.top),a.right=lt(n.right,a.right),a.bottom=lt(n.bottom,a.bottom),a.left=N(n.left,a.left),a},Ve(e,p,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Hi(t){const{width:e,height:o}=ro(t);return{width:e,height:o}}function Ui(t,e,o){const i=ot(e),r=it(e),s=o==="fixed",u=ft(t,!0,s,e);let p={scrollLeft:0,scrollTop:0};const l=tt(0);if(i||!i&&!s)if((kt(e)!=="body"||It(r))&&(p=Zt(e)),i){const c=ft(e,!0,s,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else r&&(l.x=Ee(r));const a=r&&!i&&!s?no(r,p):tt(0),f=u.left+p.scrollLeft-l.x-a.x,n=u.top+p.scrollTop-l.y-a.y;return{x:f,y:n,width:u.width,height:u.height}}function ie(t){return Y(t).position==="static"}function Fe(t,e){if(!ot(t)||Y(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return it(t)===o&&(o=o.ownerDocument.body),o}function lo(t,e){const o=H(t);if(Gt(t))return o;if(!ot(t)){let r=ut(t);for(;r&&!xt(r);){if(q(r)&&!ie(r))return r;r=ut(r)}return o}let i=Fe(t,e);for(;i&&Pi(i)&&ie(i);)i=Fe(i,e);return i&&xt(i)&&ie(i)&&!xe(i)?o:i||Li(t)||o}const ji=async function(t){const e=this.getOffsetParent||lo,o=this.getDimensions,i=await o(t.floating);return{reference:Ui(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Wi(t){return Y(t).direction==="rtl"}const Ft={convertOffsetParentRelativeRectToViewportRelativeRect:Ii,getDocumentElement:it,getClippingRect:Ni,getOffsetParent:lo,getElementRects:ji,getClientRects:Di,getDimensions:Hi,getScale:wt,isElement:q,isRTL:Wi};function Ki(t,e){let o=null,i;const r=it(t);function s(){var p;clearTimeout(i),(p=o)==null||p.disconnect(),o=null}function u(p,l){p===void 0&&(p=!1),l===void 0&&(l=1),s();const{left:a,top:f,width:n,height:c}=t.getBoundingClientRect();if(p||e(),!n||!c)return;const h=Bt(f),d=Bt(r.clientWidth-(a+n)),g=Bt(r.clientHeight-(f+c)),x=Bt(a),w={rootMargin:-h+"px "+-d+"px "+-g+"px "+-x+"px",threshold:N(0,lt(1,l))||1};let _=!0;function v(b){const E=b[0].intersectionRatio;if(E!==l){if(!_)return u();E?u(!1,E):i=setTimeout(()=>{u(!1,1e-7)},1e3)}_=!1}try{o=new IntersectionObserver(v,{...w,root:r.ownerDocument})}catch{o=new IntersectionObserver(v,w)}o.observe(t)}return u(!0),s}function qi(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,a=Ae(t),f=r||s?[...a?Rt(a):[],...Rt(e)]:[];f.forEach(C=>{r&&C.addEventListener("scroll",o,{passive:!0}),s&&C.addEventListener("resize",o)});const n=a&&p?Ki(a,o):null;let c=-1,h=null;u&&(h=new ResizeObserver(C=>{let[w]=C;w&&w.target===a&&h&&(h.unobserve(e),cancelAnimationFrame(c),c=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(e)})),o()}),a&&!l&&h.observe(a),h.observe(e));let d,g=l?ft(t):null;l&&x();function x(){const C=ft(t);g&&(C.x!==g.x||C.y!==g.y||C.width!==g.width||C.height!==g.height)&&o(),g=C,d=requestAnimationFrame(x)}return o(),()=>{var C;f.forEach(w=>{r&&w.removeEventListener("scroll",o),s&&w.removeEventListener("resize",o)}),n==null||n(),(C=h)==null||C.disconnect(),h=null,l&&cancelAnimationFrame(d)}}const Yi=ki,Qi=Si,Xi=$i,Ne=Ti,Gi=Ei,Zi=(t,e,o)=>{const i=new Map,r={platform:Ft,...o},s={...r.platform,_c:i};return Ai(t,e,{...r,platform:s})};function Ji(t){return tr(t)}function re(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function tr(t){for(let e=t;e;e=re(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=re(t);e;e=re(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function er(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var T=class extends j{constructor(){super(...arguments),this.localize=new Et(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,u=0,p=0,l=0,a=0,f=0;o?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,u=t.bottom,p=e.left,l=e.top,a=e.right,f=e.top):(i=e.left,r=e.bottom,s=e.right,u=e.bottom,p=t.left,l=t.top,a=t.right,f=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,u=e.top,p=t.right,l=t.bottom,a=e.left,f=e.bottom):(i=e.right,r=e.top,s=t.left,u=t.top,p=e.right,l=e.bottom,a=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||er(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=qi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Yi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ne({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Xi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Qi({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ne({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Gi({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Ft.getOffsetParent(o,Ji):Ft.getOffsetParent;Zi(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Qt(mt({},Ft),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:s})=>{const u=this.localize.dir()==="rtl",p={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,a=r.arrow.y;let f="",n="",c="",h="";if(this.arrowPlacement==="start"){const d=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",n=u?d:"",h=u?"":d}else if(this.arrowPlacement==="end"){const d=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n=u?"":d,h=u?d:"",c=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",f=typeof a=="number"?`${a}px`:"");Object.assign(this.arrowEl.style,{top:f,right:n,bottom:c,left:h,[p]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return L`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${et({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${et({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?L`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};T.styles=[rt,gi];m([V(".popup")],T.prototype,"popup",2);m([V(".popup__arrow")],T.prototype,"arrowEl",2);m([y()],T.prototype,"anchor",2);m([y({type:Boolean,reflect:!0})],T.prototype,"active",2);m([y({reflect:!0})],T.prototype,"placement",2);m([y({reflect:!0})],T.prototype,"strategy",2);m([y({type:Number})],T.prototype,"distance",2);m([y({type:Number})],T.prototype,"skidding",2);m([y({type:Boolean})],T.prototype,"arrow",2);m([y({attribute:"arrow-placement"})],T.prototype,"arrowPlacement",2);m([y({attribute:"arrow-padding",type:Number})],T.prototype,"arrowPadding",2);m([y({type:Boolean})],T.prototype,"flip",2);m([y({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],T.prototype,"flipFallbackPlacements",2);m([y({attribute:"flip-fallback-strategy"})],T.prototype,"flipFallbackStrategy",2);m([y({type:Object})],T.prototype,"flipBoundary",2);m([y({attribute:"flip-padding",type:Number})],T.prototype,"flipPadding",2);m([y({type:Boolean})],T.prototype,"shift",2);m([y({type:Object})],T.prototype,"shiftBoundary",2);m([y({attribute:"shift-padding",type:Number})],T.prototype,"shiftPadding",2);m([y({attribute:"auto-size"})],T.prototype,"autoSize",2);m([y()],T.prototype,"sync",2);m([y({type:Object})],T.prototype,"autoSizeBoundary",2);m([y({attribute:"auto-size-padding",type:Number})],T.prototype,"autoSizePadding",2);m([y({attribute:"hover-bridge",type:Boolean})],T.prototype,"hoverBridge",2);var B=class extends j{constructor(){super(),this.localize=new Et(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=De(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=De(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ut(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=_t(this,"tooltip.show",{dir:this.localize.dir()});await Ht(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ut(this.body);const{keyframes:o,options:i}=_t(this,"tooltip.hide",{dir:this.localize.dir()});await Ht(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Nt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Nt(this,"sl-after-hide")}render(){return L`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${et({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};B.styles=[rt,mi];B.dependencies={"sl-popup":T};m([V("slot:not([name])")],B.prototype,"defaultSlot",2);m([V(".tooltip__body")],B.prototype,"body",2);m([V("sl-popup")],B.prototype,"popup",2);m([y()],B.prototype,"content",2);m([y()],B.prototype,"placement",2);m([y({type:Boolean,reflect:!0})],B.prototype,"disabled",2);m([y({type:Number})],B.prototype,"distance",2);m([y({type:Boolean,reflect:!0})],B.prototype,"open",2);m([y({type:Number})],B.prototype,"skidding",2);m([y()],B.prototype,"trigger",2);m([y({type:Boolean})],B.prototype,"hoist",2);m([Q("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);m([Q(["content","distance","hoist","placement","skidding"])],B.prototype,"handleOptionsChange",1);m([Q("disabled")],B.prototype,"handleDisabledChange",1);At("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});At("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var or=U`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,D=class extends j{constructor(){super(...arguments),this.localize=new Et(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),o=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,s="";o?[r,s]=this.from.trim().split("."):i&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));const u="getElementById"in e?e.getElementById(r):null;u?i?t=u.getAttribute(s)||"":o?t=u[s]||"":t=u.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,s=_t(this,"copy.in",{dir:"ltr"}),u=_t(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?o:i,await this.copyIcon.animate(u.keyframes,u.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await r.animate(u.keyframes,u.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return L`
      <sl-tooltip
        class=${et({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};D.styles=[rt,or];D.dependencies={"sl-icon":X,"sl-tooltip":B};m([V('slot[name="copy-icon"]')],D.prototype,"copyIcon",2);m([V('slot[name="success-icon"]')],D.prototype,"successIcon",2);m([V('slot[name="error-icon"]')],D.prototype,"errorIcon",2);m([V("sl-tooltip")],D.prototype,"tooltip",2);m([Ct()],D.prototype,"isCopying",2);m([Ct()],D.prototype,"status",2);m([y()],D.prototype,"value",2);m([y()],D.prototype,"from",2);m([y({type:Boolean,reflect:!0})],D.prototype,"disabled",2);m([y({attribute:"copy-label"})],D.prototype,"copyLabel",2);m([y({attribute:"success-label"})],D.prototype,"successLabel",2);m([y({attribute:"error-label"})],D.prototype,"errorLabel",2);m([y({attribute:"feedback-duration",type:Number})],D.prototype,"feedbackDuration",2);m([y({attribute:"tooltip-placement"})],D.prototype,"tooltipPlacement",2);m([y({type:Boolean})],D.prototype,"hoist",2);At("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});At("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});D.define("sl-copy-button");var ir=U`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,rr=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,u,p){var l;const a=i.getPropertyOptions(t),f=typeof a.attribute=="string"?a.attribute:t;if(s===f){const n=a.converter||ke,h=(typeof n=="function"?n:(l=n==null?void 0:n.fromAttribute)!=null?l:ke.fromAttribute)(p,a.type);this[t]!==h&&(this[o]=h)}r.call(this,s,u,p)}},sr=U`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Tt=new WeakMap,Pt=new WeakMap,Lt=new WeakMap,se=new WeakSet,Mt=new WeakMap,nr=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),u=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!u&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(p=>{o.formData.append(r,p.toString())}):o.formData.append(r,s.toString()))},this.handleFormSubmit=o=>{var i;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Tt.get(this.form))==null||i.forEach(u=>{this.setUserInteracted(u,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Mt.set(this.host,[])},this.handleInteraction=o=>{const i=Mt.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=mt({form:o=>{const i=o.form;if(i){const s=o.getRootNode().querySelector(`#${i}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Mt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Mt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Tt.has(this.form)?Tt.get(this.form).add(this.host):Tt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Pt.has(this.form)||(Pt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Lt.has(this.form)||(Lt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Tt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Pt.has(this.form)&&(this.form.reportValidity=Pt.get(this.form),Pt.delete(this.form)),Lt.has(this.form)&&(this.form.checkValidity=Lt.get(this.form),Lt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?se.add(t):se.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!se.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},co=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Qt(mt({},co),{valid:!1,valueMissing:!0}));Object.freeze(Qt(mt({},co),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=me(class extends ge{constructor(t){if(super(t),t.type!==at.PROPERTY&&t.type!==at.ATTRIBUTE&&t.type!==at.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!si(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===yt||e===Ue)return e;const o=t.element,i=t.name;if(t.type===at.PROPERTY){if(e===o[i])return yt}else if(t.type===at.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return yt}else if(t.type===at.ATTRIBUTE&&o.getAttribute(i)===e+"")return yt;return ai(t),e}});var z=class extends j{constructor(){super(...arguments),this.formControlController=new nr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Je(this,"help-text","label"),this.localize=new Et(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const r=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return L`
      <div
        part="form-control"
        class=${et({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${et({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${P(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${P(this.placeholder)}
              minlength=${P(this.minlength)}
              maxlength=${P(this.maxlength)}
              min=${P(this.min)}
              max=${P(this.max)}
              step=${P(this.step)}
              .value=${ar(this.value)}
              autocapitalize=${P(this.autocapitalize)}
              autocomplete=${P(this.autocomplete)}
              autocorrect=${P(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${P(this.pattern)}
              enterkeyhint=${P(this.enterkeyhint)}
              inputmode=${P(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?L`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?L`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?L`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:L`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z.styles=[rt,sr,ir];z.dependencies={"sl-icon":X};m([V(".input__control")],z.prototype,"input",2);m([Ct()],z.prototype,"hasFocus",2);m([y()],z.prototype,"title",2);m([y({reflect:!0})],z.prototype,"type",2);m([y()],z.prototype,"name",2);m([y()],z.prototype,"value",2);m([rr()],z.prototype,"defaultValue",2);m([y({reflect:!0})],z.prototype,"size",2);m([y({type:Boolean,reflect:!0})],z.prototype,"filled",2);m([y({type:Boolean,reflect:!0})],z.prototype,"pill",2);m([y()],z.prototype,"label",2);m([y({attribute:"help-text"})],z.prototype,"helpText",2);m([y({type:Boolean})],z.prototype,"clearable",2);m([y({type:Boolean,reflect:!0})],z.prototype,"disabled",2);m([y()],z.prototype,"placeholder",2);m([y({type:Boolean,reflect:!0})],z.prototype,"readonly",2);m([y({attribute:"password-toggle",type:Boolean})],z.prototype,"passwordToggle",2);m([y({attribute:"password-visible",type:Boolean})],z.prototype,"passwordVisible",2);m([y({attribute:"no-spin-buttons",type:Boolean})],z.prototype,"noSpinButtons",2);m([y({reflect:!0})],z.prototype,"form",2);m([y({type:Boolean,reflect:!0})],z.prototype,"required",2);m([y()],z.prototype,"pattern",2);m([y({type:Number})],z.prototype,"minlength",2);m([y({type:Number})],z.prototype,"maxlength",2);m([y()],z.prototype,"min",2);m([y()],z.prototype,"max",2);m([y()],z.prototype,"step",2);m([y()],z.prototype,"autocapitalize",2);m([y()],z.prototype,"autocorrect",2);m([y()],z.prototype,"autocomplete",2);m([y({type:Boolean})],z.prototype,"autofocus",2);m([y()],z.prototype,"enterkeyhint",2);m([y({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],z.prototype,"spellcheck",2);m([y()],z.prototype,"inputmode",2);m([Q("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);m([Q("step",{waitUntilFirstUpdate:!0})],z.prototype,"handleStepChange",1);m([Q("value",{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1);z.define("sl-input");var lr=U`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo="important",cr=" !"+uo,ur=me(class extends ge{constructor(t){var e;if(super(t),t.type!==at.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const i=t[o];return i==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?o.removeProperty(i):o[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(cr);i.includes("-")||s?o.setProperty(i,s?r.slice(0,-11):r,s?uo:""):o[i]=r}}return yt}});let ho=null;class po{}po.render=function(t,e){ho(t,e)};self.QrCreator=po;(function(t){function e(p,l,a,f){var n={},c=t(a,l);c.u(p),c.J(),f=f||0;var h=c.h(),d=c.h()+2*f;return n.text=p,n.level=l,n.version=a,n.O=d,n.a=function(g,x){return g-=f,x-=f,0>g||g>=h||0>x||x>=h?!1:c.a(g,x)},n}function o(p,l,a,f,n,c,h,d,g,x){function C(w,_,v,b,E,k,S){w?(p.lineTo(_+k,v+S),p.arcTo(_,v,b,E,c)):p.lineTo(_,v)}h?p.moveTo(l+c,a):p.moveTo(l,a),C(d,f,a,f,n,-c,0),C(g,f,n,l,n,0,-c),C(x,l,n,l,a,c,0),C(h,l,a,f,a,0,c)}function i(p,l,a,f,n,c,h,d,g,x){function C(w,_,v,b){p.moveTo(w+v,_),p.lineTo(w,_),p.lineTo(w,_+b),p.arcTo(w,_,w+v,_,c)}h&&C(l,a,c,c),d&&C(f,a,-c,c),g&&C(f,n,-c,-c),x&&C(l,n,c,-c)}function r(p,l){var a=l.fill;if(typeof a=="string")p.fillStyle=a;else{var f=a.type,n=a.colorStops;if(a=a.position.map(h=>Math.round(h*l.size)),f==="linear-gradient")var c=p.createLinearGradient.apply(p,a);else if(f==="radial-gradient")c=p.createRadialGradient.apply(p,a);else throw Error("Unsupported fill");n.forEach(([h,d])=>{c.addColorStop(h,d)}),p.fillStyle=c}}function s(p,l){t:{var a=l.text,f=l.v,n=l.N,c=l.K,h=l.P;for(n=Math.max(1,n||1),c=Math.min(40,c||40);n<=c;n+=1)try{var d=e(a,f,n,h);break t}catch{}d=void 0}if(!d)return null;for(a=p.getContext("2d"),l.background&&(a.fillStyle=l.background,a.fillRect(l.left,l.top,l.size,l.size)),f=d.O,c=l.size/f,a.beginPath(),h=0;h<f;h+=1)for(n=0;n<f;n+=1){var g=a,x=l.left+n*c,C=l.top+h*c,w=h,_=n,v=d.a,b=x+c,E=C+c,k=w-1,S=w+1,$=_-1,A=_+1,I=Math.floor(Math.min(.5,Math.max(0,l.R))*c),O=v(w,_),M=v(k,$),R=v(k,_);k=v(k,A);var K=v(w,A);A=v(S,A),_=v(S,_),S=v(S,$),w=v(w,$),x=Math.round(x),C=Math.round(C),b=Math.round(b),E=Math.round(E),O?o(g,x,C,b,E,I,!R&&!w,!R&&!K,!_&&!K,!_&&!w):i(g,x,C,b,E,I,R&&w&&M,R&&K&&k,_&&K&&A,_&&w&&S)}return r(a,l),a.fill(),p}var u={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};ho=function(p,l){var a={};Object.assign(a,u,p),a.N=a.minVersion,a.K=a.maxVersion,a.v=a.ecLevel,a.left=a.left,a.top=a.top,a.size=a.size,a.fill=a.fill,a.background=a.background,a.text=a.text,a.R=a.radius,a.P=a.quiet,l instanceof HTMLCanvasElement?((l.width!==a.size||l.height!==a.size)&&(l.width=a.size,l.height=a.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,a)):(p=document.createElement("canvas"),p.width=a.size,p.height=a.size,a=s(p,a),l.appendChild(a))}})(function(){function t(l){var a=o.s(l);return{S:function(){return 4},b:function(){return a.length},write:function(f){for(var n=0;n<a.length;n+=1)f.put(a[n],8)}}}function e(){var l=[],a=0,f={B:function(){return l},c:function(n){return(l[Math.floor(n/8)]>>>7-n%8&1)==1},put:function(n,c){for(var h=0;h<c;h+=1)f.m((n>>>c-h-1&1)==1)},f:function(){return a},m:function(n){var c=Math.floor(a/8);l.length<=c&&l.push(0),n&&(l[c]|=128>>>a%8),a+=1}};return f}function o(l,a){function f(w,_){for(var v=-1;7>=v;v+=1)if(!(-1>=w+v||d<=w+v))for(var b=-1;7>=b;b+=1)-1>=_+b||d<=_+b||(h[w+v][_+b]=0<=v&&6>=v&&(b==0||b==6)||0<=b&&6>=b&&(v==0||v==6)||2<=v&&4>=v&&2<=b&&4>=b)}function n(w,_){for(var v=d=4*l+17,b=Array(v),E=0;E<v;E+=1){b[E]=Array(v);for(var k=0;k<v;k+=1)b[E][k]=null}for(h=b,f(0,0),f(d-7,0),f(0,d-7),v=s.G(l),b=0;b<v.length;b+=1)for(E=0;E<v.length;E+=1){k=v[b];var S=v[E];if(h[k][S]==null)for(var $=-2;2>=$;$+=1)for(var A=-2;2>=A;A+=1)h[k+$][S+A]=$==-2||$==2||A==-2||A==2||$==0&&A==0}for(v=8;v<d-8;v+=1)h[v][6]==null&&(h[v][6]=v%2==0);for(v=8;v<d-8;v+=1)h[6][v]==null&&(h[6][v]=v%2==0);for(v=s.w(c<<3|_),b=0;15>b;b+=1)E=!w&&(v>>b&1)==1,h[6>b?b:8>b?b+1:d-15+b][8]=E,h[8][8>b?d-b-1:9>b?15-b:14-b]=E;if(h[d-8][8]=!w,7<=l){for(v=s.A(l),b=0;18>b;b+=1)E=!w&&(v>>b&1)==1,h[Math.floor(b/3)][b%3+d-8-3]=E;for(b=0;18>b;b+=1)E=!w&&(v>>b&1)==1,h[b%3+d-8-3][Math.floor(b/3)]=E}if(g==null){for(w=p.I(l,c),v=e(),b=0;b<x.length;b+=1)E=x[b],v.put(4,4),v.put(E.b(),s.f(4,l)),E.write(v);for(b=E=0;b<w.length;b+=1)E+=w[b].j;if(v.f()>8*E)throw Error("code length overflow. ("+v.f()+">"+8*E+")");for(v.f()+4<=8*E&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*E)&&(v.put(236,8),!(v.f()>=8*E));)v.put(17,8);var I=0;for(E=b=0,k=Array(w.length),S=Array(w.length),$=0;$<w.length;$+=1){var O=w[$].j,M=w[$].o-O;for(b=Math.max(b,O),E=Math.max(E,M),k[$]=Array(O),A=0;A<k[$].length;A+=1)k[$][A]=255&v.B()[A+I];for(I+=O,A=s.C(M),O=i(k[$],A.b()-1).l(A),S[$]=Array(A.b()-1),A=0;A<S[$].length;A+=1)M=A+O.b()-S[$].length,S[$][A]=0<=M?O.c(M):0}for(A=v=0;A<w.length;A+=1)v+=w[A].o;for(v=Array(v),A=I=0;A<b;A+=1)for($=0;$<w.length;$+=1)A<k[$].length&&(v[I]=k[$][A],I+=1);for(A=0;A<E;A+=1)for($=0;$<w.length;$+=1)A<S[$].length&&(v[I]=S[$][A],I+=1);g=v}for(w=g,v=-1,b=d-1,E=7,k=0,_=s.F(_),S=d-1;0<S;S-=2)for(S==6&&--S;;){for($=0;2>$;$+=1)h[b][S-$]==null&&(A=!1,k<w.length&&(A=(w[k]>>>E&1)==1),_(b,S-$)&&(A=!A),h[b][S-$]=A,--E,E==-1&&(k+=1,E=7));if(b+=v,0>b||d<=b){b-=v,v=-v;break}}}var c=r[a],h=null,d=0,g=null,x=[],C={u:function(w){w=t(w),x.push(w),g=null},a:function(w,_){if(0>w||d<=w||0>_||d<=_)throw Error(w+","+_);return h[w][_]},h:function(){return d},J:function(){for(var w=0,_=0,v=0;8>v;v+=1){n(!0,v);var b=s.D(C);(v==0||w>b)&&(w=b,_=v)}n(!1,_)}};return C}function i(l,a){if(typeof l.length>"u")throw Error(l.length+"/"+a);var f=function(){for(var c=0;c<l.length&&l[c]==0;)c+=1;for(var h=Array(l.length-c+a),d=0;d<l.length-c;d+=1)h[d]=l[d+c];return h}(),n={c:function(c){return f[c]},b:function(){return f.length},multiply:function(c){for(var h=Array(n.b()+c.b()-1),d=0;d<n.b();d+=1)for(var g=0;g<c.b();g+=1)h[d+g]^=u.i(u.g(n.c(d))+u.g(c.c(g)));return i(h,0)},l:function(c){if(0>n.b()-c.b())return n;for(var h=u.g(n.c(0))-u.g(c.c(0)),d=Array(n.b()),g=0;g<n.b();g+=1)d[g]=n.c(g);for(g=0;g<c.b();g+=1)d[g]^=u.i(u.g(c.c(g))+h);return i(d,0).l(c)}};return n}o.s=function(l){for(var a=[],f=0;f<l.length;f++){var n=l.charCodeAt(f);128>n?a.push(n):2048>n?a.push(192|n>>6,128|n&63):55296>n||57344<=n?a.push(224|n>>12,128|n>>6&63,128|n&63):(f++,n=65536+((n&1023)<<10|l.charCodeAt(f)&1023),a.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63))}return a};var r={L:1,M:0,Q:3,H:2},s=function(){function l(n){for(var c=0;n!=0;)c+=1,n>>>=1;return c}var a=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(n){for(var c=n<<10;0<=l(c)-l(1335);)c^=1335<<l(c)-l(1335);return(n<<10|c)^21522},A:function(n){for(var c=n<<12;0<=l(c)-l(7973);)c^=7973<<l(c)-l(7973);return n<<12|c},G:function(n){return a[n-1]},F:function(n){switch(n){case 0:return function(c,h){return(c+h)%2==0};case 1:return function(c){return c%2==0};case 2:return function(c,h){return h%3==0};case 3:return function(c,h){return(c+h)%3==0};case 4:return function(c,h){return(Math.floor(c/2)+Math.floor(h/3))%2==0};case 5:return function(c,h){return c*h%2+c*h%3==0};case 6:return function(c,h){return(c*h%2+c*h%3)%2==0};case 7:return function(c,h){return(c*h%3+(c+h)%2)%2==0};default:throw Error("bad maskPattern:"+n)}},C:function(n){for(var c=i([1],0),h=0;h<n;h+=1)c=c.multiply(i([1,u.i(h)],0));return c},f:function(n,c){if(n!=4||1>c||40<c)throw Error("mode: "+n+"; type: "+c);return 10>c?8:16},D:function(n){for(var c=n.h(),h=0,d=0;d<c;d+=1)for(var g=0;g<c;g+=1){for(var x=0,C=n.a(d,g),w=-1;1>=w;w+=1)if(!(0>d+w||c<=d+w))for(var _=-1;1>=_;_+=1)0>g+_||c<=g+_||(w!=0||_!=0)&&C==n.a(d+w,g+_)&&(x+=1);5<x&&(h+=3+x-5)}for(d=0;d<c-1;d+=1)for(g=0;g<c-1;g+=1)x=0,n.a(d,g)&&(x+=1),n.a(d+1,g)&&(x+=1),n.a(d,g+1)&&(x+=1),n.a(d+1,g+1)&&(x+=1),(x==0||x==4)&&(h+=3);for(d=0;d<c;d+=1)for(g=0;g<c-6;g+=1)n.a(d,g)&&!n.a(d,g+1)&&n.a(d,g+2)&&n.a(d,g+3)&&n.a(d,g+4)&&!n.a(d,g+5)&&n.a(d,g+6)&&(h+=40);for(g=0;g<c;g+=1)for(d=0;d<c-6;d+=1)n.a(d,g)&&!n.a(d+1,g)&&n.a(d+2,g)&&n.a(d+3,g)&&n.a(d+4,g)&&!n.a(d+5,g)&&n.a(d+6,g)&&(h+=40);for(g=x=0;g<c;g+=1)for(d=0;d<c;d+=1)n.a(d,g)&&(x+=1);return h+=Math.abs(100*x/c/c-50)/5*10}};return f}(),u=function(){for(var l=Array(256),a=Array(256),f=0;8>f;f+=1)l[f]=1<<f;for(f=8;256>f;f+=1)l[f]=l[f-4]^l[f-5]^l[f-6]^l[f-8];for(f=0;255>f;f+=1)a[l[f]]=f;return{g:function(n){if(1>n)throw Error("glog("+n+")");return a[n]},i:function(n){for(;0>n;)n+=255;for(;256<=n;)n-=255;return l[n]}}}(),p=function(){function l(n,c){switch(c){case r.L:return a[4*(n-1)];case r.M:return a[4*(n-1)+1];case r.Q:return a[4*(n-1)+2];case r.H:return a[4*(n-1)+3]}}var a=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(n,c){var h=l(n,c);if(typeof h>"u")throw Error("bad rs block @ typeNumber:"+n+"/errorCorrectLevel:"+c);n=h.length/3,c=[];for(var d=0;d<n;d+=1)for(var g=h[3*d],x=h[3*d+1],C=h[3*d+2],w=0;w<g;w+=1){var _=C,v={};v.o=x,v.j=_,c.push(v)}return c}};return f}();return o}());const hr=QrCreator;var G=class extends j{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&hr.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return L`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${ur({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};G.styles=[rt,lr];m([V("canvas")],G.prototype,"canvas",2);m([y()],G.prototype,"value",2);m([y()],G.prototype,"label",2);m([y({type:Number})],G.prototype,"size",2);m([y()],G.prototype,"fill",2);m([y()],G.prototype,"background",2);m([y({type:Number})],G.prototype,"radius",2);m([y({attribute:"error-correction"})],G.prototype,"errorCorrection",2);m([Q(["background","errorCorrection","fill","radius","size","value"])],G.prototype,"generate",1);G.define("sl-qr-code");var dr=U`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,gt=class extends j{constructor(){super(...arguments),this.localize=new Et(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return L`
      <span
        part="base"
        class=${et({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?L`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};gt.styles=[rt,dr];gt.dependencies={"sl-icon-button":F};m([y({reflect:!0})],gt.prototype,"variant",2);m([y({reflect:!0})],gt.prototype,"size",2);m([y({type:Boolean,reflect:!0})],gt.prototype,"pill",2);m([y({type:Boolean})],gt.prototype,"removable",2);gt.define("sl-tag");async function pr(t){return fo(`plugin:${t}|request_permissions`)}async function fo(t,e={},o){return window.__TAURI_INTERNALS__.invoke(t,e,o)}var pe;(function(t){t.QRCode="QR_CODE",t.UPC_A="UPC_A",t.UPC_E="UPC_E",t.EAN8="EAN_8",t.EAN13="EAN_13",t.Code39="CODE_39",t.Code93="CODE_93",t.Code128="CODE_128",t.Codabar="CODABAR",t.ITF="ITF",t.Aztec="AZTEC",t.DataMatrix="DATA_MATRIX",t.PDF417="PDF_417"})(pe||(pe={}));async function fr(t){return await fo("plugin:barcode-scanner|scan",{...t})}async function mr(){return await pr("barcode-scanner").then(t=>t.camera)}var gr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,mo=(t,e,o,i)=>{for(var r=i>1?void 0:i?vr(e,o):e,s=t.length-1,u;s>=0;s--)(u=t[s])&&(r=(i?u(e,o,r):u(r))||r);return i&&r&&gr(e,o,r),r};function He(){return!!window.__TAURI_INTERNALS__}const yr=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);async function br(){return await mr(),(await fr({windowed:!1,formats:[pe.QRCode]})).content}let qt=class extends Co(fe){async attemptDiscoverAgent(t){try{await this.store.client.attemptDiscoverAgent(t),this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:t}}))}catch(e){throw te(ht("Error discovering agent.")),e}}async scanAndDiscover(){const t=ne(await br());try{await this.attemptDiscoverAgent(t)}catch(e){console.error(e),await this.scanAndDiscover()}}async firstUpdated(){if(await this.store.client.prepareDiscoverAgent(),this.store.client.onSignal(t=>{t.type==="AgentDiscovered"&&this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:t.agent}}))}),He()&&yr)try{await this.scanAndDiscover()}catch{te(ht("Error discovering agent. Please try again.")),this.dispatchEvent(new CustomEvent("link-devices-cancelled",{bubbles:!0,composed:!0}))}}renderQrcode(){return L`
			<div class="column" style="gap: 8px; flex: 1;">
				<span style="align-self: center"
					>${ht("Scan this code with your other device.")}
				</span>
				<sl-qr-code
					value="${Ot(this.store.client.client.myPubKey)}"
					style="align-self: center"
					size="240"
				>
				</sl-qr-code>
			</div>

			<span style="align-self: center">${ht("OR")} </span>
		`}render(){return L`
			<div class="column" style="gap: 32px; flex: 1;">
				${He()?this.renderQrcode():L``}
				<div class="column" style="gap: 16px">
					<div class="column" style="gap: 8px">
						<span>${ht("Send this code to your other device...")} </span>
						<div class="row" style="align-items: center; gap: 8px">
							<sl-tag style="flex: 1"
								>${Ot(this.store.client.client.myPubKey)}
							</sl-tag>
							<sl-copy-button
								value="${Ot(this.store.client.client.myPubKey)}"
							></sl-copy-button>
						</div>
					</div>

					<div class="column" style=" gap: 8px">
						<span style="word-break: break-word;"
							>${ht("... and enter here the code from your other device.")}
						</span>

						<sl-input
							@sl-input=${async t=>{const e=t.target;if(Ot(this.store.client.client.myPubKey)===e.value){te(ht("Please enter the code from your other device.")),e.value="";return}const o=ne(e.value);try{await this.attemptDiscoverAgent(o)}catch{e.value=""}}}
						>
						</sl-input>
					</div>
				</div>
			</div>
		`}};qt.styles=[...je,U`
			sl-tag::part(base) {
				font-size: 12px;
			}
		`];mo([_o({context:xo,subscribe:!0}),y()],qt.prototype,"store",2);qt=mo([Bo(),We("discover-agent")],qt);var wr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,go=(t,e,o,i)=>{for(var r=i>1?void 0:i?_r(e,o):e,s=t.length-1,u;s>=0;s--)(u=t[s])&&(r=(i?u(e,o,r):u(r))||r);return i&&r&&wr(e,o,r),r};let Yt=class extends fe{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))==null||t.focus()})}get passcode(){const t=Array.from(this.shadowRoot.querySelectorAll("sl-input")),e=Array.from(Array(this.passcodeLength)).map(()=>{});for(let o=0;o<t.length;o++){if(t[o].value==="")return;const i=parseInt(t[o].value,10);if(i>9)return;e[o]=i}return e}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(e=>e.value=""),setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))==null||e.focus()})}maybeDispatchEvent(){const t=this.passcode;t&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:t}}))}render(){return L`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((t,e)=>L`<sl-input
							id="input-${e}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${o=>{if(o.key==="Backspace"){if(o.target.value===""){const r=this.shadowRoot.getElementById(`input-${e-1}`);r&&(r.value=""),setTimeout(()=>{const s=this.shadowRoot.getElementById(`input-${e-1}`);s&&s.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${o=>{const i=o.target;if(!i.value.match(/^[0-9]$/g)){i.value="";return}const r=this.shadowRoot.getElementById(`input-${e+1}`);r&&r.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};Yt.styles=[je,U`
			sl-input::part(input) {
				text-align: center;
			}
		`];go([y()],Yt.prototype,"passcodeLength",2);Yt=go([We("passcode-input")],Yt);export{Co as S,te as a,Ct as b,zr as h,ht as m,So as n,Tr as r};
