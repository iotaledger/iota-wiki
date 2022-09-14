"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",image:"/img/logo/WASP_logo_dark.png",keywords:["validators","validator nodes","access nodes","consensus","state update","explanation"]},s="Validators",i={unversionedId:"guide/core_concepts/validators",id:"guide/core_concepts/validators",title:"Validators",description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/validators.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/validators",permalink:"/smart-contracts/guide/core_concepts/validators",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/validators.md",tags:[],version:"current",frontMatter:{description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",image:"/img/logo/WASP_logo_dark.png",keywords:["validators","validator nodes","access nodes","consensus","state update","explanation"]},sidebar:"tutorialSidebar",previous:{title:"ISC Architecture",permalink:"/smart-contracts/guide/core_concepts/isc-architecture"},next:{title:"Consensus",permalink:"/smart-contracts/guide/core_concepts/consensus"}},c={},l=[{value:"Access Nodes",id:"access-nodes",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validators"},"Validators"),(0,o.kt)("p",null,"Each chain is run by that chain's ",(0,o.kt)("em",{parentName:"p"},"committee of validators"),". This committee owns a key that is split between all of its\nvalidators. Each key share is useless on its own, but a collective signature gives validators complete control over the\nchain."),(0,o.kt)("p",null,"The committee of validators is responsible for executing the smart contracts in the chain and thus calculating a ",(0,o.kt)("em",{parentName:"p"},"state\nupdate"),".\nAll validators execute exactly the same code and reach a consensus on the state update.\nOnce the next state is computed and validated, it is committed to each validator's database, a new ",(0,o.kt)("em",{parentName:"p"},"block")," is added to\nthe chain (containing the state mutations), and the ",(0,o.kt)("em",{parentName:"p"},"state hash")," is saved in the L1 ledger."),(0,o.kt)("p",null,"Depending on the governance model, chain owners can rotate the committee of validators.\nBy rotating the committee of validators, validators can be deleted, added, or replaced."),(0,o.kt)("p",null,"ISC does not define how to select validators to form a committee: it could be a solitary choice of the chain's owner, or\nit could be a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.assembly.sc/learn/introduction/"},"public competition")," between candidates.\nISC does not define how validators are rewarded either."),(0,o.kt)("h2",{id:"access-nodes"},"Access Nodes"),(0,o.kt)("p",null,"It is possible to have some nodes act as ",(0,o.kt)("em",{parentName:"p"},"access nodes")," to the chain without being part of the committee of\nvalidators.\nAll nodes in the subnet (validators and non-validators) are connected through statically assigned trust\nrelationships and each node is also connected to the IOTA L1 node to receive updates on the chain\u2019s L1\naccount."),(0,o.kt)("p",null,"Any node can optionally provide access to smart contracts for external callers, allowing them to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query the state of the chain (i.e., ",(0,o.kt)("em",{parentName:"li"},"view calls"),")"),(0,o.kt)("li",{parentName:"ul"},"Send off-ledger requests directly to the node (instead of sending an on-ledger request as a L1 transaction)")),(0,o.kt)("p",null,"It is common for validator nodes to be part of a private subnet and have only a group of access nodes exposed to the\noutside world, protecting the committee from external attacks."),(0,o.kt)("p",null,"The management of validator and access nodes is done through\nthe ",(0,o.kt)("a",{parentName:"p",href:"./core_contracts/governance"},(0,o.kt)("inlineCode",{parentName:"a"},"governance")," core contract"),"."))}u.isMDXComponent=!0}}]);