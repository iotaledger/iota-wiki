"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={title:"Changelog",sidebar_label:"Changelog"},l=void 0,a={unversionedId:"specs/didcomm/CHANGELOG",id:"specs/didcomm/CHANGELOG",title:"Changelog",description:"All notable changes to this project will be documented in this file.",source:"@site/content/build/identity.rs/develop/documentation/docs/specs/didcomm/CHANGELOG.md",sourceDirName:"specs/didcomm",slug:"/specs/didcomm/CHANGELOG",permalink:"/identity.rs/develop/specs/didcomm/CHANGELOG",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/specs/didcomm/CHANGELOG.md",tags:[],version:"current",frontMatter:{title:"Changelog",sidebar_label:"Changelog"},sidebar:"docs",previous:{title:"Problem Reports",permalink:"/identity.rs/develop/specs/didcomm/resources/problem-reports"},next:{title:"Revocation Bitmap",permalink:"/identity.rs/develop/specs/revocation_bitmap_2022"}},c={},d=[{value:"Unreleased",id:"unreleased",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Removed",id:"removed",level:3},{value:"0.1.0 - 2021-10-29",id:"010---2021-10-29",level:2},{value:"Added",id:"added-1",level:3}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,o.kt)("p",null,"The format is based on ",(0,o.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),"."),(0,o.kt)("h2",{id:"unreleased"},"[Unreleased]"),(0,o.kt)("h3",{id:"added"},"Added"),(0,o.kt)("h3",{id:"changed"},"Changed"),(0,o.kt)("h3",{id:"removed"},"Removed"),(0,o.kt)("h2",{id:"010---2021-10-29"},"[0.1.0]"," - 2021-10-29"),(0,o.kt)("p",null,"Initial version of IOTA DIDComm specification ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/pull/379"},"(#379)"),"."),(0,o.kt)("h3",{id:"added-1"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authentication protocol"),(0,o.kt)("li",{parentName:"ul"},"Connection protocol"),(0,o.kt)("li",{parentName:"ul"},"Issuance protocol"),(0,o.kt)("li",{parentName:"ul"},"Post protocol"),(0,o.kt)("li",{parentName:"ul"},"Presentation protocol"),(0,o.kt)("li",{parentName:"ul"},"Revocation Options protocol"),(0,o.kt)("li",{parentName:"ul"},"Revocation protocol"),(0,o.kt)("li",{parentName:"ul"},"Signing protocol]"),(0,o.kt)("li",{parentName:"ul"},"Termination protocol"),(0,o.kt)("li",{parentName:"ul"},"CredentialInfo resource"),(0,o.kt)("li",{parentName:"ul"},"Problem Reports resource")))}s.isMDXComponent=!0}}]);