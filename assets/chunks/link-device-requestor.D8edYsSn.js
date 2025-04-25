import{b as f,c as y,a as v,l as g,t as m}from"./context.DmR20SpJ.js";import{S as P,n as k,m as r,r as d,a as h,b as D,h as b}from"./passcode-input.I5LcLRAS.js";import{e as u,r as L,H as q,T as _}from"./linked-devices-client.Brl7L1ZM.js";import{x as l,i as w,r as x}from"./static.DUZ9MXPw.js";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,a=(e,t,c,n)=>{for(var s=n>1?void 0:n?E(t,c):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(s=(n?p(t,c,s):p(s))||s);return n&&s&&C(t,c,s),s};let i=class extends P(x){constructor(){super(...arguments),this.initialized=!1}async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))==null||e.focus()}),this.store.client.onSignal(e=>{this.recipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||u(L(e.action.hashed.content.target_address,q.AGENT))===u(this.recipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.recipient}})),k(r("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),this.interval&&clearInterval(this.interval),this.store.client.clearLinkDevicesCapGrants()}async prepareLinkDevices(e){this.requestorPasscode=d(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.requestorPasscode=d(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevicesCapGrants(),await this.store.client.prepareLinkDevicesRequestor(e,this.requestorPasscode)},_),await this.store.client.prepareLinkDevicesRequestor(e,this.requestorPasscode)}renderNumber(){return l`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${r("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorPasscode.join("")}</span>
		</div>`}render(){return this.recipient?this.initialized?this.renderNumber():l`
				<div
					class="column"
					style="gap: 12px; align-items: center; justify-content: center; flex: 1"
				>
					<span>${r("Enter the pass code from your other device:")} </span>
					<passcode-input
						.passcodeLength=${this.store.config.linkDevicePasscodeLength}
						@passcode-change=${async e=>{try{await this.store.client.requestLinkDevices(this.recipient,e.detail.passcode),this.initialized=!0}catch(t){console.error(t),h(r("Error linking devices. Please try again")),this.recipient=void 0}}}
					>
					</passcode-input>
				</div>
			`:l`
				<discover-agent
					@agent-discovered=${async e=>{this.recipient=e.detail.agentPubKey;try{await this.prepareLinkDevices(this.recipient)}catch(t){h(r("Error linking devices. Please try again.")),console.error(t),this.recipient=void 0,this.initialized=!1}}}
				>
				</discover-agent>
			`}};i.styles=[f,w`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];a([y({context:g,subscribe:!0}),v()],i.prototype,"store",2);a([v(b("recipient"))],i.prototype,"recipient",2);a([D()],i.prototype,"initialized",2);i=a([m("link-device-requestor")],i);export{i as LinkDevicesRequestor};
