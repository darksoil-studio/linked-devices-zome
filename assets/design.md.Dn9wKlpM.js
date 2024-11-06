import{_ as e,c as i,a2 as n,o as a}from"./chunks/framework.D8eVpqUt.js";const h=JSON.parse('{"title":"Link Devices process","description":"","frontmatter":{},"headers":[],"relativePath":"design.md","filePath":"design.md"}'),t={name:"design.md"};function p(l,s,c,r,k,E){return a(),i("div",null,s[0]||(s[0]=[n(`<h1 id="link-devices-process" tabindex="-1">Link Devices process <a class="header-anchor" href="#link-devices-process" aria-label="Permalink to &quot;Link Devices process&quot;">​</a></h1><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequenceDiagram</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;Recipient: select &quot;Link Devices&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;Recipient: create random passcode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;DHT: create &quot;LinkingAgent&quot; link to my own pubkey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;Recipient: create transferrable CapGrant with my passcode as the secret</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;Recipient: show recipient passcode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;Recipient: select &quot;Link Devices&quot; as a requestor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Requestor--&gt;&gt;Requestor: create random passcode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Requestor--&gt;&gt;Requestor: show passcode input</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Requestor-&gt;&gt;DHT: get_linking_agents()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DHT--&gt;&gt;Requestor: linking_agents</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Requestor--&gt;&gt;Requestor: enter recipient passcode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loop for agent in linking_agents</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Requestor-&gt;&gt;Recipient: initiate_link_devices</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Recipient--&gt;&gt;Requestor: ack</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Requestor--&gt;&gt;Requestor: show requestor passcode </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Recipient--&gt;&gt;Recipient: show passcode input</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Recipient-&gt;&gt;Recipient: enter requestor passcode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Recipient--&gt;&gt;Recipient: generate LinkedDevicesProof</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Recipient-&gt;&gt;Requestor: request_sign_linked_devices_proof(proof)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Requestor--&gt;&gt;Requestor: sign LinkedDevicesProof and create AgentToLinkedDevices link</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Requestor--&gt;&gt;Recipient: signature</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Recipient--&gt;&gt;Recipient: create AgentToLinkedDevices link</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Recipient--&gt;&gt;Recipient: clearLinkDeviceCapGrants()</span></span></code></pre></div>`,2)]))}const o=e(t,[["render",p]]);export{h as __pageData,o as default};
