"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=u(n),f=r,m=g["".concat(i,".").concat(f)]||g[f]||s[f]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,c={unversionedId:"reference/java_api/AccountBalance",id:"reference/java_api/AccountBalance",title:"AccountBalance",description:"Account balance information.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountBalance.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/AccountBalance",permalink:"/wallet.rs/reference/java_api/AccountBalance",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountBalance.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"getTotal(): long",id:"gettotal-long",level:3},{value:"getAvailable(): long",id:"getavailable-long",level:3},{value:"getIncoming(): long",id:"getincoming-long",level:3},{value:"getOutgoing(): long",id:"getoutgoing-long",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Account balance information."),(0,r.kt)("h3",{id:"gettotal-long"},"getTotal(): long"),(0,r.kt)("p",null,"Account's total balance."),(0,r.kt)("h3",{id:"getavailable-long"},"getAvailable(): long"),(0,r.kt)("p",null,"For example, if a user with 50i total account balance has made a message spending 20i,\nthe available balance should be (50i-30i) = 20i."),(0,r.kt)("h3",{id:"getincoming-long"},"getIncoming(): long"),(0,r.kt)("p",null,"Balances from message with ",(0,r.kt)("inlineCode",{parentName:"p"},"incoming: true"),".\nNote that this may not be accurate since the node prunes the messags."),(0,r.kt)("h3",{id:"getoutgoing-long"},"getOutgoing(): long"),(0,r.kt)("p",null,"Balances from message with ",(0,r.kt)("inlineCode",{parentName:"p"},"incoming: false"),".\nNote that this may not be accurate since the node prunes the messags."))}s.isMDXComponent=!0}}]);