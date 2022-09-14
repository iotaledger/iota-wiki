"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"libraries/java/api/MilestonePayload",id:"libraries/java/api/MilestonePayload",title:"MilestonePayload",description:"A payload which defines the inclusion set of other messages in the Tangle.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MilestonePayload.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MilestonePayload",permalink:"/iota.rs/libraries/java/api/MilestonePayload",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MilestonePayload.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"essence(): MilestonePayloadEssence",id:"essence-milestonepayloadessence",level:3},{value:"signatures(): MilestoneSignature[]",id:"signatures-milestonesignature",level:3},{value:"validate(applicable_public_keys, min_threshold): void",id:"validateapplicable_public_keys-min_threshold-void",level:3},{value:"id(): String",id:"id-string",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A payload which defines the inclusion set of other messages in the Tangle."),(0,r.kt)("h3",{id:"essence-milestonepayloadessence"},"essence(): ",(0,r.kt)("a",{parentName:"h3",href:"#milestonepayloadessence"},"MilestonePayloadEssence")),(0,r.kt)("p",null,"Returns the essence of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."),(0,r.kt)("h3",{id:"signatures-milestonesignature"},"signatures(): ",(0,r.kt)("a",{parentName:"h3",href:"#milestonesignature"},"MilestoneSignature[]")),(0,r.kt)("p",null,"Returns the signatures of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."),(0,r.kt)("h3",{id:"validateapplicable_public_keys-min_threshold-void"},"validate(applicable_public_keys, min_threshold): void"),(0,r.kt)("p",null,"Semantically validate a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applicable_public_keys"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The public keys to use to validate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"THe minimum threshold for this to succeed (0...100)")))),(0,r.kt)("h3",{id:"id-string"},"id(): String"),(0,r.kt)("p",null,"Computes the identifier of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."))}d.isMDXComponent=!0}}]);