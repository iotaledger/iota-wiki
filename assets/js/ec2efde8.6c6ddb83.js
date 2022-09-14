"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={title:"Termination",sidebar_label:"Termination"},o=void 0,l={unversionedId:"specs/didcomm/protocols/termination",id:"specs/didcomm/protocols/termination",title:"Termination",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/specs/didcomm/protocols/termination.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/termination",permalink:"/identity.rs/specs/didcomm/protocols/termination",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/specs/didcomm/protocols/termination.md",tags:[],version:"current",frontMatter:{title:"Termination",sidebar_label:"Termination"},sidebar:"docs",previous:{title:"Post",permalink:"/identity.rs/specs/didcomm/protocols/post"},next:{title:"CredentialInfo",permalink:"/identity.rs/specs/didcomm/resources/credential-info"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. termination",id:"termination",level:3},{value:"Structure",id:"structure",level:4},{value:"2. termination-response",id:"termination-response",level:3},{value:"Structure",id:"structure-1",level:4},{value:"Considerations",id:"considerations",level:2},{value:"Related Work",id:"related-work",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Indicates the graceful termination of a connection. It is expected that no reconnection attempt will be made on any of the message thread/s in this connection following termination. This provides a chance for the receiver to clean up or archive any resources allocated to the connection."),(0,r.kt)("h3",{id:"relationships"},"Relationships"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./connection"},"Connection"),": this protocol terminates a communication initiated by the ",(0,r.kt)("a",{parentName:"li",href:"./connection"},"connection protocol"),".")),(0,r.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A verifier terminates the connection following a successful presentation from a holder."),(0,r.kt)("li",{parentName:"ul"},"One participant experiences an error and terminates the connection gracefully after sending a problem-report.")),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sender: initiates the connection termination."),(0,r.kt)("li",{parentName:"ul"},"Receiver: is notified of the termination.")),(0,r.kt)("h3",{id:"interaction"},"Interaction"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TerminationDiagram",src:n(27990).Z,width:"843",height:"633"})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("sub",null,"For guidance on diagrams see the ",(0,r.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"termination"},"1. termination"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/termination/0.1/termination")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"sender"))),(0,r.kt)("p",null,"Used to inform the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"receiver")," that the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"sender")," wishes to terminate the established connection. "),(0,r.kt)("h4",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("h3",{id:"termination-response"},"2. termination-response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/termination/0.1/termination-response")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"receiver"))),(0,r.kt)("p",null,"Response from the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"receiver")," that the request to terminate the connection was acknowledged. MUST be sent if the field ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#acks"},(0,r.kt)("inlineCode",{parentName:"a"},"please_ack"))," is present in the ",(0,r.kt)("a",{parentName:"p",href:"#termination"},"termination")," message. "),(0,r.kt)("h4",{id:"structure-1"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"This section is non-normative."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which party terminates a connection depends on the application but is usually the same as the one that initiated it following a successful interaction to achieve."),(0,r.kt)("li",{parentName:"ul"},"Any party may terminate a connection at any time, even during a protocol."),(0,r.kt)("li",{parentName:"ul"},"A termination message indicates a graceful end to a connection but the underlying transport layer connection could terminate without this message. Implementors should implement reasonable timeouts and reconnection capabilities.")),(0,r.kt)("h2",{id:"related-work"},"Related Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0030-sync-connection/abandon-connection-protocol/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0030-sync-connection/abandon-connection-protocol/README.md"))))}m.isMDXComponent=!0},27990:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/termination.drawio-75add80a40ad53af97b7908983269c61.svg"}}]);