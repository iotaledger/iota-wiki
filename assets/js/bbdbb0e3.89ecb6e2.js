"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5339],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>p});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(o),p=n,m=c["".concat(s,".").concat(p)]||c[p]||y[p]||r;return o?i.createElement(m,a(a({ref:t},u),{},{components:o})):i.createElement(m,a({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var l=2;l<r;l++)a[l]=o[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}c.displayName="MDXCreateElement"},14784:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=o(87462),n=(o(67294),o(3905));const r={title:"Frequently Asked Questions",sidebar_label:"FAQ",description:"Frequently Asked Question regarding IOTA Identity.",image:"/img/Identity_icon.png",keywords:["FAQ","Frequently Asked Question","Troubleshooting","IOTA Identity"]},a=void 0,d={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Frequently Asked Question regarding IOTA Identity.",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/identity.rs/faq",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/faq.md",tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions",sidebar_label:"FAQ",description:"Frequently Asked Question regarding IOTA Identity.",image:"/img/Identity_icon.png",keywords:["FAQ","Frequently Asked Question","Troubleshooting","IOTA Identity"]},sidebar:"docs",previous:{title:"Contact",permalink:"/identity.rs/contact"}},s={},l=[{value:"What programming languages are supported by the IOTA Identity framework?",id:"what-programming-languages-are-supported-by-the-iota-identity-framework",level:3},{value:"Do I need to have IOTA tokens to start building with IOTA Identity?",id:"do-i-need-to-have-iota-tokens-to-start-building-with-iota-identity",level:3},{value:"How do I prove control over my DID?",id:"how-do-i-prove-control-over-my-did",level:3},{value:"How do I store my private keys?",id:"how-do-i-store-my-private-keys",level:3},{value:"Do I need a Permanode to use IOTA Identity?",id:"do-i-need-a-permanode-to-use-iota-identity",level:3},{value:"Can I use IOTA Identity on Android or iOS?",id:"can-i-use-iota-identity-on-android-or-ios",level:3},{value:"Can I use IOTA Identity on embedded devices?",id:"can-i-use-iota-identity-on-embedded-devices",level:3},{value:"What should I do if my private key is compromised?",id:"what-should-i-do-if-my-private-key-is-compromised",level:3},{value:"Are verifiable credentials stored on the Tangle?",id:"are-verifiable-credentials-stored-on-the-tangle",level:3},{value:"Do I need to hide my DID? Will people be able to identify me by my DID?",id:"do-i-need-to-hide-my-did-will-people-be-able-to-identify-me-by-my-did",level:3}],u={toc:l};function y(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page contains frequently asked questions regarding the Identity Library and Self Sovereign Identity in general."),(0,n.kt)("h3",{id:"what-programming-languages-are-supported-by-the-iota-identity-framework"},"What programming languages are supported by the IOTA Identity framework?"),(0,n.kt)("p",null,'We currently provide a Rust library and a JavaScript library for both the browser and Node.js via WebAssembly (Wasm) bindings. See the "Programming Languages" section for more information.'),(0,n.kt)("h3",{id:"do-i-need-to-have-iota-tokens-to-start-building-with-iota-identity"},"Do I need to have IOTA tokens to start building with IOTA Identity?"),(0,n.kt)("p",null,"At the moment you don't need IOTA tokens to create and manage identities, although we are exploring opportunities to utilize the token in the future. "),(0,n.kt)("h3",{id:"how-do-i-prove-control-over-my-did"},"How do I prove control over my DID?"),(0,n.kt)("p",null,"Control over an identity is ultimately tied to the control over cryptographic key material (something you have)."),(0,n.kt)("h3",{id:"how-do-i-store-my-private-keys"},"How do I store my private keys?"),(0,n.kt)("p",null,"Theoretically you can store the keys however you like. We provide a secure default using IOTA Stronghold where possible, which is a secure software implementation for isolating digital secrets with encrypted storage. For even better guarantees you could look into hardware based key storage."),(0,n.kt)("h3",{id:"do-i-need-a-permanode-to-use-iota-identity"},"Do I need a Permanode to use IOTA Identity?"),(0,n.kt)("p",null,"You can get started without one but currently you do require access to a Permanode (a node which stores the entire history of the Tangle) to reliably resolve identities in production. The trustworthiness of this node is very important, since a malicious node could respond with outdated identities, so ideally you should run one yourself or ensure the party supplying the node is trustworthy."),(0,n.kt)("h3",{id:"can-i-use-iota-identity-on-android-or-ios"},"Can I use IOTA Identity on Android or iOS?"),(0,n.kt)("p",null,"We currently do not supply dedicated bindings for Kotlin or Swift. There has been some success running the Wasm bindings on mobile, however."),(0,n.kt)("h3",{id:"can-i-use-iota-identity-on-embedded-devices"},"Can I use IOTA Identity on embedded devices?"),(0,n.kt)("p",null,"We currently do not supply dedicated bindings catering to embedded devices with restricted capabilities. You can try to compile the Rust library for your target platform or use a gateway in front of the devices to handle IOTA Identity interactions."),(0,n.kt)("h3",{id:"what-should-i-do-if-my-private-key-is-compromised"},"What should I do if my private key is compromised?"),(0,n.kt)("p",null,"If you still have control over your identity, rotate the key material ASAP! If an attacker has locked you out of your identity, there is not much you can do. Notify contacts that your identity has been compromised and start fresh with a new one. It is for this reason that we suggest using different keys for day-to-day signing and authentication operations, and instead store private keys capable of performing updates to your DID Document securely and separately."),(0,n.kt)("h3",{id:"are-verifiable-credentials-stored-on-the-tangle"},"Are verifiable credentials stored on the Tangle?"),(0,n.kt)("p",null,"Verifiable credentials, particularly those with personal identifiable information, are supposed to be stored securely off-Tangle on user devices or systems. As a user, you are in charge of storing your credentials securely and sharing them with other parties on a need-to-know basis."),(0,n.kt)("h3",{id:"do-i-need-to-hide-my-did-will-people-be-able-to-identify-me-by-my-did"},"Do I need to hide my DID? Will people be able to identify me by my DID?"),(0,n.kt)("p",null,"A DID Document should not contain any information linking back to you as a person. However, there is the chance of entities correlating information about you from your DID if used across multiple issuers and verifiers. To minimize this risk, it is advisable to use different DIDs for different use-cases."))}y.isMDXComponent=!0}}]);