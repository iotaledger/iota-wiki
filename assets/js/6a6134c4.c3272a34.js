"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74740],{13902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Interface: IBlock",p={unversionedId:"references/client/interfaces/IBlock",id:"references/client/interfaces/IBlock",title:"Interface: IBlock",description:"iota.js API reference",source:"@site/content/build/iota.js/develop/documentation/docs/references/client/interfaces/IBlock.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IBlock",permalink:"/iotajs/references/client/interfaces/IBlock",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/references/client/interfaces/IBlock.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IBip44GeneratorState",permalink:"/iotajs/references/client/interfaces/IBip44GeneratorState"},next:{title:"Interface: IBlockIdResponse",permalink:"/iotajs/references/client/interfaces/IBlockIdResponse"}},s={},f=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"protocolVersion",id:"protocolversion",level:3},{value:"parents",id:"parents",level:3},{value:"payload",id:"payload",level:3},{value:"nonce",id:"nonce",level:3}],u={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iblock"},"Interface: IBlock"),(0,a.kt)("p",null,"Block layout."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IBlock#protocolversion"},"protocolVersion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IBlock#parents"},"parents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IBlock#payload"},"payload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IBlock#nonce"},"nonce"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"protocolversion"},"protocolVersion"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"protocolVersion"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The protocol version under which this block operates."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parents"},"parents"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"parents"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"The parent block ids."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"payload"},"payload"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"payload"),": ",(0,a.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/ITransactionPayload"},(0,a.kt)("inlineCode",{parentName:"a"},"ITransactionPayload"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/IMilestonePayload"},(0,a.kt)("inlineCode",{parentName:"a"},"IMilestonePayload"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/ITaggedDataPayload"},(0,a.kt)("inlineCode",{parentName:"a"},"ITaggedDataPayload"))),(0,a.kt)("p",null,"The payload contents."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nonce"},"nonce"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"nonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The nonce for the block."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);