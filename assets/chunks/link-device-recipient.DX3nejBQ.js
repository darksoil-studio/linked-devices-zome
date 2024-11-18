var Pt=Object.defineProperty;var Dt=(t,e,i)=>e in t?Pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var j=(t,e,i)=>Dt(t,typeof e!="symbol"?e+"":e,i);import{a,b as vt,t as gt,c as Mt,l as Ot}from"./context.CziiVT4C.js";import{S as st,i as g,r as J,x as h,d as P,E as bt,f as rt,u as Bt,g as ot,T as Rt}from"./linked-devices-client.BfeCTcfl.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ft(t){class e extends t{constructor(){super(...arguments);j(this,"__dispose");j(this,"w",new st.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const r=this.__dispose,o=new st.Computed(()=>{super.performUpdate()});this.w.watch(o),this.__dispose=()=>{this.w.unwatch(o)},o.get(),r==null||r()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.__dispose)==null||r.call(this)}}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yt=t=>(...e)=>({_$litDirective$:t,values:e});class wt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}function Ut(t){return`data:image/svg+xml;utf8,${Ht(t)}`}function Ht(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var qt="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",jt="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";function Nt(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function _t(t,e="primary",i=jt,s=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:s,innerHTML:`
        <sl-icon src="${Ut(i)}" slot="icon"></sl-icon>
        ${Nt(t)}
      `});return document.body.append(r),r.toast()}function Wt(t){return _t(t,"danger",qt)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(t){return a({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(t,e){return(i,s,r)=>{const o=c=>{var d;return((d=c.renderRoot)==null?void 0:d.querySelector(t))??null};return Kt(i,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=t=>typeof t!="string"&&"strTag"in t,Gt=(t,e,i)=>{let s=t[0];for(let r=1;r<t.length;r++)s+=e[r-1],s+=t[r];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=t=>Zt(t)?Gt(t.strings,t.values):t;let S=Yt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xt{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jt=new Xt;Jt.resolve();var Qt=g`
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
`,Z="";function nt(t){Z=t}function te(t=""){if(!Z){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)nt(i.getAttribute("data-shoelace"));else{const s=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";s&&(r=s.getAttribute("src")),nt(r.split("/").slice(0,-1).join("/"))}}return Z.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ee={name:"default",resolver:t=>te(`assets/icons/${t}.svg`)},ie=ee,at={caret:`
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
  `},se={name:"system",resolver:t=>t in at?`data:image/svg+xml,${encodeURIComponent(at[t])}`:""},re=se,oe=[ie,re],G=[];function ne(t){G.push(t)}function ae(t){G=G.filter(e=>e!==t)}function lt(t){return oe.find(e=>e.name===t)}var le=g`
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
`,Ct=Object.defineProperty,ce=Object.defineProperties,ue=Object.getOwnPropertyDescriptor,de=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ut=(t,e,i)=>e in t?Ct(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,L=(t,e)=>{for(var i in e||(e={}))he.call(e,i)&&ut(t,i,e[i]);if(ct)for(var i of ct(e))pe.call(e,i)&&ut(t,i,e[i]);return t},Q=(t,e)=>ce(t,de(e)),n=(t,e,i,s)=>{for(var r=s>1?void 0:s?ue(e,i):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(r=(s?c(e,i,r):c(r))||r);return s&&r&&Ct(e,i,r),r},xt=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},fe=(t,e,i)=>(xt(t,e,"read from private field"),e.get(t)),me=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ve=(t,e,i,s)=>(xt(t,e,"write to private field"),e.set(t,i),i);function x(t,e){const i=L({waitUntilFirstUpdate:!1},e);return(s,r)=>{const{update:o}=s,c=Array.isArray(t)?t:[t];s.update=function(d){c.forEach(k=>{const v=k;if(d.has(v)){const M=d.get(v),y=this[v];M!==y&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](M,y)}}),o.call(this,d)}}}var H=g`
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
`,R,b=class extends J{constructor(){super(),me(this,R,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,L({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",o=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in s&&s.version&&(o=" v"+s.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,i){fe(this,R)||(this.constructor.elementProperties.forEach((s,r)=>{s.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),ve(this,R,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};R=new WeakMap;b.version="2.18.0";b.dependencies={};n([a()],b.prototype,"dir",2);n([a()],b.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,be=t=>t.strings===void 0,ye={},we=(t,e=ye)=>t._$AH=e;var I=Symbol(),O=Symbol(),N,W=new Map,m=class extends b{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e!=null&&e.spriteSheet)return this.svg=h`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?I:O}catch{return O}try{const r=document.createElement("div");r.innerHTML=await s.text();const o=r.firstElementChild;if(((i=o==null?void 0:o.tagName)==null?void 0:i.toLowerCase())!=="svg")return I;N||(N=new DOMParser);const d=N.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):I}catch{return I}}connectedCallback(){super.connectedCallback(),ne(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ae(this)}getIconSource(){const t=lt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?lt(this.library):void 0;if(!e){this.svg=null;return}let r=W.get(e);if(r||(r=this.resolveIcon(e,s),W.set(e,r)),!this.initialRender)return;const o=await r;if(o===O&&W.delete(e),e===this.getIconSource().url){if(ge(o)){if(this.svg=o,s){await this.updateComplete;const c=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&c&&s.mutator(c)}return}switch(o){case O:case I:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=s==null?void 0:s.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};m.styles=[H,le];n([E()],m.prototype,"svg",2);n([a({reflect:!0})],m.prototype,"name",2);n([a()],m.prototype,"src",2);n([a()],m.prototype,"label",2);n([a({reflect:!0})],m.prototype,"library",2);n([x("label")],m.prototype,"handleLabelChange",1);n([x(["name","src","library"])],m.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=yt(class extends wt{constructor(t){var e;if(super(t),t.type!==w.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(e)}const i=t.element.classList;for(const o of this.st)o in e||(i.remove(o),this.st.delete(o));for(const o in e){const c=!!e[o];c===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(c?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return P}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=t=>t??bt;var p=class extends b{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?rt`a`:rt`button`;return Bt`
      <${e}
        part="base"
        class=${D({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${u(t?void 0:this.disabled)}
        type=${u(t?void 0:"button")}
        href=${u(t?this.href:void 0)}
        target=${u(t?this.target:void 0)}
        download=${u(t?this.download:void 0)}
        rel=${u(t&&this.target?"noreferrer noopener":void 0)}
        role=${u(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${u(this.name)}
          library=${u(this.library)}
          src=${u(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};p.styles=[H,Qt];p.dependencies={"sl-icon":m};n([U(".icon-button")],p.prototype,"button",2);n([E()],p.prototype,"hasFocus",2);n([a()],p.prototype,"name",2);n([a()],p.prototype,"library",2);n([a()],p.prototype,"src",2);n([a()],p.prototype,"href",2);n([a()],p.prototype,"target",2);n([a()],p.prototype,"download",2);n([a()],p.prototype,"label",2);n([a({type:Boolean,reflect:!0})],p.prototype,"disabled",2);var kt=new Map,_e=new WeakMap;function Ce(t){return t??{keyframes:[],options:{duration:0}}}function dt(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function $t(t,e){kt.set(t,Ce(e))}function ht(t,e,i){const s=_e.get(t);if(s!=null&&s[e])return dt(s[e],i.dir);const r=kt.get(e);return r?dt(r,i.dir):{keyframes:[],options:{duration:0}}}function pt(t,e){return new Promise(i=>{function s(r){r.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function ft(t,e,i){return new Promise(s=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Q(L({},i),{duration:xe()?0:i.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})})}function xe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function mt(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}const Y=new Set,A=new Map;let _,tt="ltr",et="en";const At=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(At){const t=new MutationObserver(Lt);tt=document.documentElement.dir||"ltr",et=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Et(...t){t.map(e=>{const i=e.$code.toLowerCase();A.has(i)?A.set(i,Object.assign(Object.assign({},A.get(i)),e)):A.set(i,e),_||(_=e)}),Lt()}function Lt(){At&&(tt=document.documentElement.dir||"ltr",et=document.documentElement.lang||navigator.language),[...Y.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let ke=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Y.add(this.host)}hostDisconnected(){Y.delete(this.host)}dir(){return`${this.host.dir||tt}`.toLowerCase()}lang(){return`${this.host.lang||et}`.toLowerCase()}getTranslationData(e){var i,s;const r=new Intl.Locale(e.replace(/_/g,"-")),o=r==null?void 0:r.language.toLowerCase(),c=(s=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",d=A.get(`${o}-${c}`),k=A.get(o);return{locale:r,language:o,region:c,primary:d,secondary:k}}exists(e,i){var s;const{primary:r,secondary:o}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||o&&o[e]||i.includeFallback&&_&&_[e])}term(e,...i){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let o;if(s&&s[e])o=s[e];else if(r&&r[e])o=r[e];else if(_&&_[e])o=_[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...i):o}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var St={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Et(St);var $e=St,It=class extends ke{};Et($e);var zt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Ae=g`
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
`,$=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),f=class extends b{constructor(){super(...arguments),this.hasSlotController=new zt(this,"icon","suffix"),this.localize=new It(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",i="0";this.countdownAnimation=t.animate([{width:e},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await mt(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=ht(this,"alert.show",{dir:this.localize.dir()});await ft(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await mt(this.base);const{keyframes:t,options:e}=ht(this,"alert.hide",{dir:this.localize.dir()});await ft(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),$.parentElement===null&&document.body.append($),$.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{$.removeChild(this),t(),$.querySelector("sl-alert")===null&&$.remove()},{once:!0})})}render(){return h`
      <div
        part="base"
        class=${D({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?h`
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

        ${this.countdown?h`
              <div
                class=${D({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};f.styles=[H,Ae];f.dependencies={"sl-icon-button":p};n([U('[part~="base"]')],f.prototype,"base",2);n([U(".alert__countdown-elapsed")],f.prototype,"countdownElement",2);n([a({type:Boolean,reflect:!0})],f.prototype,"open",2);n([a({type:Boolean,reflect:!0})],f.prototype,"closable",2);n([a({reflect:!0})],f.prototype,"variant",2);n([a({type:Number})],f.prototype,"duration",2);n([a({type:String,reflect:!0})],f.prototype,"countdown",2);n([E()],f.prototype,"remainingTime",2);n([x("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1);n([x("duration")],f.prototype,"handleDurationChange",1);$t("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$t("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});f.define("sl-alert");var Ee=g`
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
`,Le=(t="value")=>(e,i)=>{const s=e.constructor,r=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,c,d){var k;const v=s.getPropertyOptions(t),M=typeof v.attribute=="string"?v.attribute:t;if(o===M){const y=v.converter||ot,it=(typeof y=="function"?y:(k=y==null?void 0:y.fromAttribute)!=null?k:ot.fromAttribute)(d,v.type);this[t]!==it&&(this[i]=it)}r.call(this,o,c,d)}},Se=g`
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
`,z=new WeakMap,T=new WeakMap,V=new WeakMap,K=new WeakSet,B=new WeakMap,Ie=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),c=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!c&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(d=>{i.formData.append(r,d.toString())}):i.formData.append(r,o.toString()))},this.handleFormSubmit=i=>{var s;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=z.get(this.form))==null||s.forEach(c=>{this.setUserInteracted(c,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),B.set(this.host,[])},this.handleInteraction=i=>{const s=B.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=L({form:i=>{const s=i.form;if(s){const o=i.getRootNode().querySelector(`#${s}`);if(o)return o}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),B.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),B.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,z.has(this.form)?z.get(this.form).add(this.host):z.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),T.has(this.form)||(T.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),V.has(this.form)||(V.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=z.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),T.has(this.form)&&(this.form.reportValidity=T.get(this.form),T.delete(this.form)),V.has(this.form)&&(this.form.checkValidity=V.get(this.form),V.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?K.add(t):K.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!K.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Tt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Q(L({},Tt),{valid:!1,valueMissing:!0}));Object.freeze(Q(L({},Tt),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=yt(class extends wt{constructor(t){if(super(t),t.type!==w.PROPERTY&&t.type!==w.ATTRIBUTE&&t.type!==w.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!be(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===P||e===bt)return e;const i=t.element,s=t.name;if(t.type===w.PROPERTY){if(e===i[s])return P}else if(t.type===w.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return P}else if(t.type===w.ATTRIBUTE&&i.getAttribute(s)===e+"")return P;return we(t),e}});var l=class extends b{constructor(){super(...arguments),this.formControlController=new Ie(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new It(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const r=e??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(t,r,o,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return h`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${D({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${u(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${u(this.placeholder)}
              minlength=${u(this.minlength)}
              maxlength=${u(this.maxlength)}
              min=${u(this.min)}
              max=${u(this.max)}
              step=${u(this.step)}
              .value=${ze(this.value)}
              autocapitalize=${u(this.autocapitalize)}
              autocomplete=${u(this.autocomplete)}
              autocorrect=${u(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${u(this.pattern)}
              enterkeyhint=${u(this.enterkeyhint)}
              inputmode=${u(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?h`
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
            ${this.passwordToggle&&!this.disabled?h`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?h`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:h`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};l.styles=[H,Se,Ee];l.dependencies={"sl-icon":m};n([U(".input__control")],l.prototype,"input",2);n([E()],l.prototype,"hasFocus",2);n([a()],l.prototype,"title",2);n([a({reflect:!0})],l.prototype,"type",2);n([a()],l.prototype,"name",2);n([a()],l.prototype,"value",2);n([Le()],l.prototype,"defaultValue",2);n([a({reflect:!0})],l.prototype,"size",2);n([a({type:Boolean,reflect:!0})],l.prototype,"filled",2);n([a({type:Boolean,reflect:!0})],l.prototype,"pill",2);n([a()],l.prototype,"label",2);n([a({attribute:"help-text"})],l.prototype,"helpText",2);n([a({type:Boolean})],l.prototype,"clearable",2);n([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);n([a()],l.prototype,"placeholder",2);n([a({type:Boolean,reflect:!0})],l.prototype,"readonly",2);n([a({attribute:"password-toggle",type:Boolean})],l.prototype,"passwordToggle",2);n([a({attribute:"password-visible",type:Boolean})],l.prototype,"passwordVisible",2);n([a({attribute:"no-spin-buttons",type:Boolean})],l.prototype,"noSpinButtons",2);n([a({reflect:!0})],l.prototype,"form",2);n([a({type:Boolean,reflect:!0})],l.prototype,"required",2);n([a()],l.prototype,"pattern",2);n([a({type:Number})],l.prototype,"minlength",2);n([a({type:Number})],l.prototype,"maxlength",2);n([a()],l.prototype,"min",2);n([a()],l.prototype,"max",2);n([a()],l.prototype,"step",2);n([a()],l.prototype,"autocapitalize",2);n([a()],l.prototype,"autocorrect",2);n([a()],l.prototype,"autocomplete",2);n([a({type:Boolean})],l.prototype,"autofocus",2);n([a()],l.prototype,"enterkeyhint",2);n([a({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],l.prototype,"spellcheck",2);n([a()],l.prototype,"inputmode",2);n([x("disabled",{waitUntilFirstUpdate:!0})],l.prototype,"handleDisabledChange",1);n([x("step",{waitUntilFirstUpdate:!0})],l.prototype,"handleStepChange",1);n([x("value",{waitUntilFirstUpdate:!0})],l.prototype,"handleValueChange",1);l.define("sl-input");var Te=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Vt=(t,e,i,s)=>{for(var r=s>1?void 0:s?Ve(e,i):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(r=(s?c(e,i,r):c(r))||r);return s&&r&&Te(e,i,r),r};let F=class extends J{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))==null||t.focus()})}get passcode(){const t=Array.from(this.shadowRoot.querySelectorAll("sl-input")),e=Array.from(Array(this.passcodeLength)).map(()=>{});for(let i=0;i<t.length;i++){if(t[i].value==="")return;const s=parseInt(t[i].value,10);if(s>9)return;e[i]=s}return e}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(e=>e.value=""),setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))==null||e.focus()})}maybeDispatchEvent(){const t=this.passcode;t&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:t}}))}render(){return h`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((t,e)=>h`<sl-input
							id="input-${e}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${i=>{if(i.key==="Backspace"){if(i.target.value===""){const r=this.shadowRoot.getElementById(`input-${e-1}`);r&&(r.value=""),setTimeout(()=>{const o=this.shadowRoot.getElementById(`input-${e-1}`);o&&o.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${i=>{const s=i.target;if(!s.value.match(/^[0-9]$/g)){s.value="";return}const r=this.shadowRoot.getElementById(`input-${e+1}`);r&&r.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};F.styles=[vt,g`
			sl-input::part(input) {
				text-align: center;
			}
		`];Vt([a()],F.prototype,"passcodeLength",2);F=Vt([gt("passcode-input")],F);var Pe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,q=(t,e,i,s)=>{for(var r=s>1?void 0:s?De(e,i):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(r=(s?c(e,i,r):c(r))||r);return s&&r&&Pe(e,i,r),r};function Me(){return Math.floor(Math.random()*10)}function X(t){const e=[];for(let i=0;i<t;i++)e.push(Me());return e}let C=class extends Ft(J){constructor(){super(...arguments),this.recipientPasscode=[]}async firstUpdated(){this.recipientPasscode=X(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.recipientPasscode=X(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.recipientPasscode)},Rt),await this.store.client.prepareLinkDevices(this.recipientPasscode),this.store.client.onSignal(t=>{"type"in t&&t.type==="LinkDevicesInitialized"&&(this.initializedLinkDevicesByRequestor=t.requestor)})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async attemptLinkAgent(t,e){try{await this.store.client.requestLinkDevices(t,e),this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:t}})),_t(S("Device linked successfully"))}catch(i){console.error(i),Wt(S("Incorrect passcode"))}this.shadowRoot.querySelector("passcode-input").clearPasscode()}renderRequestLinkAgent(t){return h`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span class="title">${S("Device link request received")} </span>
				<span>${S("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.attemptLinkAgent(t,e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}render(){return this.initializedLinkDevicesByRequestor?this.renderRequestLinkAgent(this.initializedLinkDevicesByRequestor):h`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span
				>${S("Enter this pass code in your other device (valid for one minute):")}
			</span>
			<span class="passcode">${this.recipientPasscode.join("")}</span>
		</div>`}};C.styles=[vt,g`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];q([Mt({context:Ot,subscribe:!0}),a()],C.prototype,"store",2);q([E()],C.prototype,"recipientPasscode",2);q([E()],C.prototype,"initializedLinkDevicesByRequestor",2);C=q([gt("link-device-recipient")],C);const He=Object.freeze(Object.defineProperty({__proto__:null,get LinkDevicesRecipient(){return C},randomPasscode:X},Symbol.toStringTag,{value:"Module"}));export{Ft as S,Wt as a,E as b,He as l,S as m,_t as n,X as r};
