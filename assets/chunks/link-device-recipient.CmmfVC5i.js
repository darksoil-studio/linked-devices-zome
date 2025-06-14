import{b as y,c as g,a as u,l as m,t as P}from"./context.DmR20SpJ.js";import{S as k,r as d,n as L,m as r,a as h,b as f,h as D}from"./passcode-input.CjS3yYuX.js";import{T as b,e as v}from"./linked-devices-client.Brl7L1ZM.js";import{x as l,i as x,r as w}from"./static.DUZ9MXPw.js";var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,a=(t,e,n,c)=>{for(var i=c>1?void 0:c?z(e,n):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(i=(c?p(e,n,i):p(i))||i);return c&&i&&q(e,n,i),i};let s=class extends k(w){constructor(){super(...arguments),this.recipientPasscode=[],this.initialized=!1}async prepareLinkDevices(t){this.recipientPasscode=d(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.recipientPasscode=d(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevicesCapGrants(),await this.store.client.prepareLinkDevicesRecipient(t,this.recipientPasscode)},b),await this.store.client.prepareLinkDevicesRecipient(t,this.recipientPasscode),this.store.client.onSignal(e=>{"type"in e&&e.type==="LinkDevicesInitialized"&&v(t)===v(e.requestor)&&(this.initialized=!0)})}disconnectedCallback(){super.disconnectedCallback(),this.interval&&clearInterval(this.interval),this.store.client.clearLinkDevicesCapGrants()}async attemptLinkAgent(t,e){try{await this.store.client.acceptLinkDevices(t,e),this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:t}})),L(r("Device linked successfully"))}catch(n){console.error(n),h(r("Error linking devices. Please try again.")),this.requestor=void 0,this.initialized=!1}this.shadowRoot.querySelector("passcode-input").clearPasscode()}renderAcceptLinkAgent(t){return l`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span class="title">${r("Device link request received")} </span>
				<span>${r("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.attemptLinkAgent(t,e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}render(){return this.requestor?this.initialized?this.renderAcceptLinkAgent(this.requestor):l`<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span
					>${r("Enter this pass code in your other device (valid for one minute):")}
				</span>
				<span class="passcode">${this.recipientPasscode.join("")}</span>
			</div>`:l`
				<discover-agent
					@agent-discovered=${async t=>{this.requestor=t.detail.agentPubKey;try{await this.prepareLinkDevices(this.requestor)}catch(e){h(r("Error linking devices. Please try again.")),console.error(e),this.requestor=void 0,this.initialized=!1}}}
				>
				</discover-agent>
			`}};s.styles=[y,x`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];a([g({context:m,subscribe:!0}),u()],s.prototype,"store",2);a([u(D("requestor"))],s.prototype,"requestor",2);a([f()],s.prototype,"recipientPasscode",2);a([f()],s.prototype,"initialized",2);s=a([P("link-device-recipient")],s);export{s as LinkDevicesRecipient};
