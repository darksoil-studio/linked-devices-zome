const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.DuWoO9k1.js","assets/chunks/api-viewer-tabs.B-5vtVZH.js","assets/chunks/api-demo.nwQmRJpA.js","assets/chunks/linked-devices-context.BtqJT8dp.js","assets/chunks/context.CziiVT4C.js","assets/chunks/linked-devices-client.BfeCTcfl.js","assets/chunks/link-device-requestor.CTOC3XBd.js","assets/chunks/link-device-recipient.DX3nejBQ.js"])))=>i.map(i=>d[i]);
import{v as a,V as i,c as l,a2 as n,j as d,o as r}from"./chunks/framework.DhOvnmKX.js";import{L as o,a as p,b as h,B as c,u as k}from"./chunks/linked-devices-client.BfeCTcfl.js";const v=JSON.parse('{"title":"<link-device-requestor>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/link-device-requestor.md","filePath":"elements/link-device-requestor.md"}'),u={name:"elements/link-device-requestor.md"},b=Object.assign(u,{setup(g){return a(async()=>{await i(()=>import("./chunks/api-docs.DuWoO9k1.js"),__vite__mapDeps([0,1])),await i(()=>import("./chunks/api-demo.nwQmRJpA.js"),__vite__mapDeps([2,1])),customElements.get("linked-devices-context")||await i(()=>import("./chunks/linked-devices-context.BtqJT8dp.js"),__vite__mapDeps([3,4,5])),customElements.get("link-device-requestor")||await i(()=>import("./chunks/link-device-requestor.CTOC3XBd.js"),__vite__mapDeps([6,5,4,7]));const s=new o,e=new p(s,"linked_devices_test"),t=new h(e);c(k`
    <linked-devices-context .store=${t}>
      <api-demo src="custom-elements.json" only="link-device-requestor" exclude-knobs="store">
        <template data-element="link-device-requestor" data-target="host">
          <link-device-requestor></link-device-requestor>
        </template>
      </api-demo>
    </linked-devices-context>
  `,document.querySelector("element-demo"))}),(s,e)=>(r(),l("div",null,e[0]||(e[0]=[n(`<h1 id="link-device-requestor" tabindex="-1"><code>&lt;link-device-requestor&gt;</code> <a class="header-anchor" href="#link-device-requestor" aria-label="Permalink to &quot;\`&lt;link-device-requestor&gt;\`&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol start="0"><li><p>If you haven&#39;t already, <a href="/linked-devices-zome/setup.html">go through the setup for the module</a>.</p></li><li><p>Import the <code>&lt;link-device-requestor&gt;</code> element somewhere in the javascript side of your web-app like this:</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@darksoil-studio/linked-devices/dist/elements/link-device-requestor.js&#39;</span></span></code></pre></div><ol start="2"><li>Use it in the html side of your web-app like this:</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-P4bnG" id="tab-P2Bk9mZ" checked><label data-title="Lit" for="tab-P2Bk9mZ">Lit</label><input type="radio" name="group-P4bnG" id="tab-s0zJz5J"><label data-title="React" for="tab-s0zJz5J">React</label><input type="radio" name="group-P4bnG" id="tab-FUp4kHK"><label data-title="Angular" for="tab-FUp4kHK">Angular</label><input type="radio" name="group-P4bnG" id="tab-GMg66MV"><label data-title="Vue" for="tab-GMg66MV">Vue</label><input type="radio" name="group-P4bnG" id="tab-uMwjVyz"><label data-title="Svelte" for="tab-uMwjVyz">Svelte</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link-device-requestor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Like all the elements in this module, <code>&lt;link-device-requestor&gt;</code> needs to be placed inside an initialized <code>&lt;linked-devices-context&gt;</code>.</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><p>Here is an interactive demo of the element:</p><element-demo></element-demo><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p><code>&lt;link-device-requestor&gt;</code> is a <a href="https://web.dev/articles/custom-elements-v1" target="_blank" rel="noreferrer">custom element</a>, which means that it can be used in any web app or website. Here is the reference for its API:</p>`,12),d("api-docs",{src:"custom-elements.json",only:"link-device-requestor"},null,-1)])))}});export{v as __pageData,b as default};