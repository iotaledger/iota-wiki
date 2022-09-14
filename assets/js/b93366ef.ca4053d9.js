"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15659],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),v=o,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79350:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","channels","author","subscriber","value transactions"]},i="Channels Protocol Overview",s={unversionedId:"explanations/channels_protocol/overview",id:"explanations/channels_protocol/overview",title:"Channels Protocol Overview",description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",source:"@site/content/build/streams/develop/documentation/docs/explanations/channels_protocol/overview.md",sourceDirName:"explanations/channels_protocol",slug:"/explanations/channels_protocol/overview",permalink:"/streams/explanations/channels_protocol/overview",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/explanations/channels_protocol/overview.md",tags:[],version:"current",frontMatter:{description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","channels","author","subscriber","value transactions"]},sidebar:"docs",previous:{title:"Examples",permalink:"/streams/how_tos/wasm_how_tos"},next:{title:"Authors",permalink:"/streams/explanations/channels_protocol/authors"}},l={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"channels-protocol-overview"},"Channels Protocol Overview"),(0,o.kt)("p",null,"The IOTA Streams framework is intended to be a secure message verification and protection protocol\nfor sending data over a given transport layer. "),(0,o.kt)("p",null,"The Channels protocol is designed as a replacement for the previously used MAM library for sending\ndata using the Tangle as the primary transportation mechanism. The channels themselves can be\nstructured in a number of ways with any arbitrary combination of publishers and subscribers (although\neach channel can only be hosted by a single author instance)"),(0,o.kt)("p",null,"The Channels protocol provides the high level API tools necessary for authors and subscribers to be\ngenerated and interact with the Tangle."))}u.isMDXComponent=!0}}]);