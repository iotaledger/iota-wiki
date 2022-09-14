"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(f,u(u({ref:t},d),{},{components:a})):r.createElement(f,u({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,u=new Array(o);u[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var s=2;s<o;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},u=void 0,l={unversionedId:"libraries/java/api/SignatureLockedDustAllowanceOutput",id:"libraries/java/api/SignatureLockedDustAllowanceOutput",title:"SignatureLockedDustAllowanceOutput",description:"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/SignatureLockedDustAllowanceOutput.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/SignatureLockedDustAllowanceOutput",permalink:"/iota.rs/libraries/java/api/SignatureLockedDustAllowanceOutput",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/SignatureLockedDustAllowanceOutput.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"from(address, amount): SignatureLockedDustAllowanceOutput",id:"fromaddress-amount-signaturelockeddustallowanceoutput",level:3},{value:"amount(): long",id:"amount-long",level:3},{value:"address(): Address",id:"address-address",level:3}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a\nregular SigLockedSingleOutput."),(0,n.kt)("h3",{id:"fromaddress-amount-signaturelockeddustallowanceoutput"},"from(address, amount): ",(0,n.kt)("a",{parentName:"h3",href:"#signaturelockeddustallowanceoutput"},"SignatureLockedDustAllowanceOutput")),(0,n.kt)("p",null,"Creates a new ",(0,n.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#address"},"Address")),(0,n.kt)("td",{parentName:"tr",align:null},"The address to set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"long"),(0,n.kt)("td",{parentName:"tr",align:null},"The amount to set")))),(0,n.kt)("h3",{id:"amount-long"},"amount(): long"),(0,n.kt)("p",null,"Returns the amount of a ",(0,n.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."),(0,n.kt)("h3",{id:"address-address"},"address(): ",(0,n.kt)("a",{parentName:"h3",href:"#address"},"Address")),(0,n.kt)("p",null,"Returns the address of a ",(0,n.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."))}p.isMDXComponent=!0}}]);