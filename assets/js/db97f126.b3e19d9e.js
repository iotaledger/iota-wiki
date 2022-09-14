"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43187],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:e},l),{},{components:n})):r.createElement(h,i({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55267:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={keywords:["Stardust","Shimmer","Upgrades","Security","User Protection","Replay Protection","Inputs Commitment","Protocol Improvements","explanation"],description:"The Stardust protocol prevents transaction replay and client eclipse attacks.",image:"/img/logo/preview.png"},i="Protecting Users",s={unversionedId:"explanations/what_is_stardust/protecting_users",id:"explanations/what_is_stardust/protecting_users",title:"Protecting Users",description:"The Stardust protocol prevents transaction replay and client eclipse attacks.",source:"@site/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/protecting_users.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/protecting_users",permalink:"/introduction/develop/explanations/what_is_stardust/protecting_users",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/protecting_users.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Security","User Protection","Replay Protection","Inputs Commitment","Protocol Improvements","explanation"],description:"The Stardust protocol prevents transaction replay and client eclipse attacks.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Output Features",permalink:"/introduction/develop/explanations/what_is_stardust/output_features"},next:{title:"Offloading Data Processing",permalink:"/introduction/develop/explanations/what_is_stardust/data_processing"}},c={},p=[{value:"Transaction Replay Protection",id:"transaction-replay-protection",level:2},{value:"Transaction Inputs Commitment",id:"transaction-inputs-commitment",level:2}],l={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protecting-users"},"Protecting Users"),(0,o.kt)("p",null,"Two main improvements have been added on protocol level in Stardust to protect users or L2 applications."),(0,o.kt)("h2",{id:"transaction-replay-protection"},"Transaction Replay Protection"),(0,o.kt)("p",null,"Stardust introduces a ",(0,o.kt)("em",{parentName:"p"},"Network Identifier")," field in the signed part of transactions to prevent replaying transactions\nin any other network. Even if a transaction is otherwise correct, a different network than the intended would\nimmediately reject it based on the mismatching network identifier."),(0,o.kt)("p",null,"For more information, browse ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/pull/40"},"TIP-20")," that describes the updated transaction payload."),(0,o.kt)("h2",{id:"transaction-inputs-commitment"},"Transaction Inputs Commitment"),(0,o.kt)("p",null,"In a UTXO-based ledger, transactions reference the inputs they wish to consume by their unique identifiers. Clients\ngather the content of inputs by accessing the inputs' identifiers in the nodes. If you don\u2019t run your own node, your\nwallet probably talks to an explorer or indexer application that in turn fetches data from a network node. Do you fully\ntrust a third party to give you the correct content of the inputs owned by you to construct a transaction? What if\ntheir infrastructure is hacked?"),(0,o.kt)("p",null,"Luckily, with Stardust, you don\u2019t need to trust third parties. Transactions include an ",(0,o.kt)("em",{parentName:"p"},"Inputs Commitment")," field that\n(as the name suggests) is a cryptographic commitment to the content of the inputs of the transaction. If for any reason\nyour wallet was supplied with malicious data and constructed a transaction based on that data, the network will realize\nthat there is a mismatch between what the network thinks your inputs are and what your wallet does."),(0,o.kt)("p",null,"This mechanism protects not only users but also smart contract chains. An attacker might be able to eclipse the\nconnection of L2 validators to L1 nodes and start\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/discussions/51"},"replacing request content to steal user funds"),", but with this\nsecurity mechanism, such malicious transactions would be rejected by the base protocol, causing the chain to realize it\nwas eclipsed because it didn\u2019t produce a valid state update."))}u.isMDXComponent=!0}}]);