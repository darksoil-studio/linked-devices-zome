import{T as y,e as d}from"./linked-devices-client.UHpnba5E.js";import{b as g,c as m,a as u,l as P,t as k}from"./context.DydGRr3S.js";import{S as L,r as h,n as D,m as r,a as v,b as f,h as b}from"./passcode-input.Bb1GyLeh.js";import{x as l,i as x,r as w}from"./static.DUZ9MXPw.js";var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,a=(t,e,n,c)=>{for(var i=c>1?void 0:c?z(e,n):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(i=(c?p(e,n,i):p(i))||i);return c&&i&&q(e,n,i),i};let s=class extends L(w){constructor(){super(...arguments),this.recipientPasscode=[],this.initialized=!1}async prepareLinkDevices(t){this.recipientPasscode=h(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.recipientPasscode=h(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevicesCapGrants(),await this.store.client.prepareLinkDevicesRecipient(t,this.recipientPasscode)},y),await this.store.client.prepareLinkDevicesRecipient(t,this.recipientPasscode),this.store.client.onSignal(e=>{"type"in e&&e.type==="LinkDevicesInitialized"&&d(t)===d(e.requestor)&&(this.initialized=!0)})}disconnectedCallback(){super.disconnectedCallback(),this.interval&&clearInterval(this.interval),this.store.client.clearLinkDevicesCapGrants()}async attemptLinkAgent(t,e){try{await this.store.client.acceptLinkDevices(t,e),this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:t}})),D(r("Device linked successfully"))}catch(n){console.error(n),v(r("Error linking devices. Please try again.")),this.requestor=void 0,this.initialized=!1}this.shadowRoot.querySelector("passcode-input").clearPasscode()}renderAcceptLinkAgent(t){return l`
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
					@agent-discovered=${async t=>{this.requestor=t.detail.agentPubKey;try{await this.prepareLinkDevices(this.requestor)}catch(e){v(r("Error linking devices. Please try again.")),console.error(e),this.requestor=void 0,this.initialized=!1}}}
				>
				</discover-agent>
			`}};s.styles=[g,x`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];a([m({context:P,subscribe:!0}),u()],s.prototype,"store",2);a([u(b("requestor"))],s.prototype,"requestor",2);a([f()],s.prototype,"recipientPasscode",2);a([f()],s.prototype,"initialized",2);s=a([k("link-device-recipient")],s);export{s as LinkDevicesRecipient};
