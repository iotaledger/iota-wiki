"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49093],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),u=a,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51672:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},o="Interface: IPreparedTransactionData",s={unversionedId:"libraries/nodejs/references/interfaces/IPreparedTransactionData",id:"libraries/nodejs/references/interfaces/IPreparedTransactionData",title:"Interface: IPreparedTransactionData",description:"Helper struct for offline signing",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/IPreparedTransactionData.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/IPreparedTransactionData",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IPreparedTransactionData",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/IPreparedTransactionData.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: INodeInfoWrapper",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/INodeInfoWrapper"},next:{title:"Interface: IRange",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IRange"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"essence",id:"essence",level:3},{value:"inputsData",id:"inputsdata",level:3},{value:"remainder",id:"remainder",level:3}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-ipreparedtransactiondata"},"Interface: IPreparedTransactionData"),(0,a.kt)("p",null,"Helper struct for offline signing"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IPreparedTransactionData#essence"},"essence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IPreparedTransactionData#inputsdata"},"inputsData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IPreparedTransactionData#remainder"},"remainder"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"essence"},"essence"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"essence"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ITransactionEssence")),(0,a.kt)("p",null,"Transaction essence"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputsdata"},"inputsData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputsData"),": ",(0,a.kt)("a",{parentName:"p",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData"},(0,a.kt)("inlineCode",{parentName:"a"},"IInputSigningData")),"[]"),(0,a.kt)("p",null,"Required address information for signing"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remainder"},"remainder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"remainder"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IRemainder")),(0,a.kt)("p",null,"Optional remainder output information"))}d.isMDXComponent=!0}}]);