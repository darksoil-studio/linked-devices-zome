import{e as p,c as d,H as u,T as v,x as h,i as y,r as m}from"./linked-devices-client.Bf3Shkr7.js";import{b as k,c as L,a as b,l as D,t as R}from"./context.Bez_fePK.js";import{S as q,n as P,m as r,r as f,a as g,b as w}from"./link-device-recipient.DLxblQ8z.js";var A=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(e,i,n,t)=>{for(var s=t>1?void 0:t?T(i,n):i,a=e.length-1,o;a>=0;a--)(o=e[a])&&(s=(t?o(i,n,s):o(s))||s);return t&&s&&A(i,n,s),s};let c=class extends q(m){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))==null||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||p(d(e.action.hashed.content.target_address,u.AGENT))===p(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),P(r("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const n=(await this.store.client.getLinkingAgents()).map(t=>d(t.target,u.AGENT));for(const t of n)try{await this.store.client.requestLinkDevices(t,e),this.requestorpasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},v),this.successfulRecipient=t}catch(s){console.error(s),s.toString().includes("Unauthorized")||(g(r("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(g(r("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return h`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${r("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():h`
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
		`}};c.styles=[k,y`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];l([L({context:D,subscribe:!0}),b()],c.prototype,"store",2);l([w()],c.prototype,"successfulRecipient",2);c=l([R("link-device-requestor")],c);export{c as LinkDevicesRequestor};
