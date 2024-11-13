import{e as p,c as d,H as u,T as v,x as h,i as y,r as m}from"./linked-devices-client.BfeCTcfl.js";import{S as k,n as L,m as c,r as f,a as g,s as b,c as D,b as R}from"./link-device-recipient.BJ8uOp_S.js";import{n as P,l as q,t as w}from"./context.lQPfKMVH.js";var A=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(e,i,n,t)=>{for(var s=t>1?void 0:t?T(i,n):i,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(t?a(i,n,s):a(s))||s);return t&&s&&A(i,n,s),s};let r=class extends k(m){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))==null||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||p(d(e.action.hashed.content.target_address,u.AGENT))===p(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),L(c("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const n=(await this.store.client.getLinkingAgents()).map(t=>d(t.target,u.AGENT));for(const t of n)try{await this.store.client.initLinkDevices(t,e),this.requestorpasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},v),this.successfulRecipient=t}catch(s){console.error(s),s.toString().includes("Unauthorized")||(g(c("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(g(c("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return h`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${c("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():h`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${c("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}};r.styles=[b,y`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];l([D({context:q,subscribe:!0}),P()],r.prototype,"store",2);l([R()],r.prototype,"successfulRecipient",2);r=l([w("link-device-requestor")],r);export{r as LinkDevicesRequestor};
