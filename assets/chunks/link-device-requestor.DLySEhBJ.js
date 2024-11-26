import{e as p,r as d,H as u,T as v}from"./linked-devices-client.S3t1WI0P.js";import{b as y,c as m,a as k,l as L,t as b}from"./context.DydGRr3S.js";import{S as D,n as R,m as r,r as h,a as f,b as q}from"./link-device-recipient.Bdy1ynyh.js";import{x as g,i as P,r as w}from"./static.DUZ9MXPw.js";var A=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(e,i,n,t)=>{for(var s=t>1?void 0:t?T(i,n):i,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(t?a(i,n,s):a(s))||s);return t&&s&&A(i,n,s),s};let c=class extends D(w){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))==null||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||p(d(e.action.hashed.content.target_address,u.AGENT))===p(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),R(r("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const n=(await this.store.client.getLinkingAgents()).map(t=>d(t.target,u.AGENT));for(const t of n)try{await this.store.client.requestLinkDevices(t,e),this.requestorpasscode=h(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=h(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},v),this.successfulRecipient=t}catch(s){console.error(s),s.toString().includes("Unauthorized")||(f(r("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(f(r("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return g`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${r("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():g`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${r("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}};c.styles=[y,P`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];l([m({context:L,subscribe:!0}),k()],c.prototype,"store",2);l([q()],c.prototype,"successfulRecipient",2);c=l([b("link-device-requestor")],c);export{c as LinkDevicesRequestor};
