"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={description:"Getting started with the official IOTA Client Library Node.js binding.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security"]},o="Getting Started with Node.js",l={unversionedId:"libraries/nodejs/getting_started",id:"libraries/nodejs/getting_started",title:"Getting Started with Node.js",description:"Getting started with the official IOTA Client Library Node.js binding.",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/getting_started.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/getting_started",permalink:"/iota.rs/develop/libraries/nodejs/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Node.js binding.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/iota.rs/develop/libraries/rust/api_reference"},next:{title:"How To Get Node Info",permalink:"/iota.rs/develop/libraries/nodejs/how_to/get_node_info"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Getting Started",id:"getting-started",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started with Node.js"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using NPM:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @iota/client\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using yarn:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @iota/client\n")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"One of the following Node.js version: '14.x', '16.x', '18.x'"),(0,i.kt)("p",null,"If there is no prebuilt binary available for your system you need ",(0,i.kt)("inlineCode",{parentName:"p"},"Rust")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo"),", to build it yourself. Install them ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"here"),".\nAlso for Linux ",(0,i.kt)("inlineCode",{parentName:"p"},"libudev")," is needed and can be installed with ",(0,i.kt)("inlineCode",{parentName:"p"},"apt install libudev-dev"),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"After you linked the library, you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," instance and interface with it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ClientBuilder } = require('@iota/client')\n\nconst client = new ClientBuilder()\n    .node('https://api.testnet.shimmer.network')\n    .build()\n\nclient.getInfo().then(console.log).catch(console.error)\n")),(0,i.kt)("p",null,"Connecting to a MQTT broker using raw ip doesn't work with TCP. This is a limitation of rustls."))}p.isMDXComponent=!0}}]);