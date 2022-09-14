"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Interface: INodeInfo",l={unversionedId:"references/client/interfaces/INodeInfo",id:"references/client/interfaces/INodeInfo",title:"Interface: INodeInfo",description:"iota.js API reference",source:"@site/content/build/iota.js/develop/documentation/docs/references/client/interfaces/INodeInfo.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/INodeInfo",permalink:"/iotajs/references/client/interfaces/INodeInfo",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/references/client/interfaces/INodeInfo.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: INftUnlock",permalink:"/iotajs/references/client/interfaces/INftUnlock"},next:{title:"Interface: INodeInfoBaseToken",permalink:"/iotajs/references/client/interfaces/INodeInfoBaseToken"}},s={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"name",id:"name",level:3},{value:"version",id:"version",level:3},{value:"status",id:"status",level:3},{value:"metrics",id:"metrics",level:3},{value:"supportedProtocolVersions",id:"supportedprotocolversions",level:3},{value:"protocol",id:"protocol",level:3},{value:"pendingProtocolParameters",id:"pendingprotocolparameters",level:3},{value:"baseToken",id:"basetoken",level:3},{value:"features",id:"features",level:3}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-inodeinfo"},"Interface: INodeInfo"),(0,o.kt)("p",null,"Response from the /info endpoint."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#name"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#version"},"version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#status"},"status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#metrics"},"metrics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#supportedprotocolversions"},"supportedProtocolVersions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#protocol"},"protocol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#pendingprotocolparameters"},"pendingProtocolParameters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#basetoken"},"baseToken")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/INodeInfo#features"},"features"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The name of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The version of node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"status"),": ",(0,o.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/INodeInfoStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoStatus"))),(0,o.kt)("p",null,"The status of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"metrics"),": ",(0,o.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/INodeInfoMetrics"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoMetrics"))),(0,o.kt)("p",null,"The metrics for the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"supportedprotocolversions"},"supportedProtocolVersions"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"supportedProtocolVersions"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,o.kt)("p",null,"The supported protocol versions."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"protocol"},"protocol"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"protocol"),": ",(0,o.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/INodeInfoProtocol"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoProtocol"))),(0,o.kt)("p",null,"The protocol info of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pendingprotocolparameters"},"pendingProtocolParameters"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"pendingProtocolParameters"),": ",(0,o.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/INodeInfoProtocolParamsMilestoneOpt"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoProtocolParamsMilestoneOpt")),"[]"),(0,o.kt)("p",null,"Pending protocol parameters."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"basetoken"},"baseToken"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"baseToken"),": ",(0,o.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/INodeInfoBaseToken"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoBaseToken"))),(0,o.kt)("p",null,"The base token info of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"features"},"features"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"features"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Features supported by the node."))}f.isMDXComponent=!0}}]);