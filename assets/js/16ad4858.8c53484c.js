"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38544],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,c(c({ref:e},p),{},{components:a})):n.createElement(h,c({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,c=new Array(o);c[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26312:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/Banner/banner_wasp_core_concepts_smart_contracts.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},c="Smart Contracts",s={unversionedId:"guide/core_concepts/smart-contracts",id:"guide/core_concepts/smart-contracts",title:"Smart Contracts",description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/smart-contracts.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contracts",permalink:"/smart-contracts/develop/guide/core_concepts/smart-contracts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/smart-contracts.md",tags:[],version:"current",frontMatter:{description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/Banner/banner_wasp_core_concepts_smart_contracts.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},sidebar:"tutorialSidebar",previous:{title:"IOTA Smart Contracts",permalink:"/smart-contracts/develop/overview"},next:{title:"ISC Architecture",permalink:"/smart-contracts/develop/guide/core_concepts/isc-architecture"}},i={},l=[{value:"What Are Smart Contracts?",id:"what-are-smart-contracts",level:2},{value:"Applications You Can Trust",id:"applications-you-can-trust",level:3},{value:"Scalable Smart Contracts",id:"scalable-smart-contracts",level:3}],p={toc:l};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wasp Node Smart Contracts",src:a(94462).Z,width:"862",height:"200"})),(0,r.kt)("h2",{id:"what-are-smart-contracts"},"What Are Smart Contracts?"),(0,r.kt)("p",null,"Smart contracts are software applications that run on a distributed network with multiple validators executing and\nvalidating the same code. This ensures the application behaves as expected and that there is no tampering in the\nprogram's execution."),(0,r.kt)("h3",{id:"applications-you-can-trust"},"Applications You Can Trust"),(0,r.kt)("p",null,"As you can be certain that the executed code is always the same (and will not change), this results in\napplications you can trust. This allows you to use smart contracts for applications with a trust issue. The\nsmart contract rules define what the contract can and can not do, making it a decentralized and predictable\ndecision-maker."),(0,r.kt)("p",null,"You can use smart contracts for all kinds of purposes. A recurring reason to use a smart contract is to automate\nspecific\nactions without needing a centralized entity to enforce this specific action. A good example is a smart contract\nthat can exchange a certain amount of IOTA tokens for land ownership. The smart contract will accept\nboth the IOTA tokens and the land ownership, and will predictably exchange them between both parties without the risk of\none of the parties not delivering on their promise. ",(0,r.kt)("strong",{parentName:"p"},"With a smart contract, code is law"),"."),(0,r.kt)("h3",{id:"scalable-smart-contracts"},"Scalable Smart Contracts"),(0,r.kt)("p",null,"Anyone willing to pay the fees for deploying a smart contract on a public blockchain can deploy one. Once your smart\ncontract has been deployed to the chain, you no longer have the option to change it, and you can be sure that your\nsmart contract application will be there as long as that blockchain exists. Smart contracts can communicate with one\nanother, and you can invoke programmed public functions on a smart contract to trigger actions on a smart contract, or\naddress the state of a smart contract."),(0,r.kt)("p",null,"Because smart contracts do not run on a single computer but on many validators, a network of smart contracts can only\nprocess so many smart contracts at once, even if the software has been written optimally. This means smart contracts are\nexpensive to execute, and do not scale well on a single blockchain, often resulting in congested networks and costly\nfees for executing functions on smart contracts. ",(0,r.kt)("strong",{parentName:"p"},"By allowing many blockchains executing smart contracts to run in\nparallel")," and communicate with one another, ",(0,r.kt)("strong",{parentName:"p"},"IOTA Smart Contracts solves this scalability problem.")),(0,r.kt)("p",null,"At the same time, ISC provides advanced means of communication between its chains and preserves the ability to create\ncomplex, composed smart contracts."))}u.isMDXComponent=!0},94462:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/banner_wasp_core_concepts_smart_contracts-9b7268f183de6c60a27309cfcfbe6f16.png"}}]);