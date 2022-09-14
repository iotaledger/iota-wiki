"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49866],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53500:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={description:"Getting started with the official IOTA Client Library Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables","how to"]},o="Getting Started With Rust",l={unversionedId:"getting_started/rust",id:"getting_started/rust",title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Library Rust library.",source:"@site/content/build/iota.rs/production/documentation/docs/getting_started/rust.md",sourceDirName:"getting_started",slug:"/getting_started/rust",permalink:"/iota.rs/getting_started/rust",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/getting_started/rust.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables","how to"]},sidebar:"docs",previous:{title:"Getting Started with IOTA Client Python Binding",permalink:"/iota.rs/getting_started/python"},next:{title:"Getting Started with Wasm",permalink:"/iota.rs/getting_started/wasm"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Using the Library",id:"using-the-library",level:2},{value:"Initialisation",id:"initialisation",level:3}],c={toc:u};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-rust"},"Getting Started With Rust"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the library, you should update ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"Rust to the latest stable version"),".\nYou can update your Rust installation by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update stable\n")),(0,i.kt)("p",null,"The nightly version should also be fine, but some changes might not be compatible."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"no_std")," is not currently supported.  We are working on it in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"Bee"),", and will provide\nit as feature once the new implementation is ready."),(0,i.kt)("h2",{id:"using-the-library"},"Using the Library"),(0,i.kt)("p",null,"To use the iota.rs library, you will simply need to add it as dependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[dependencies]\niota-client = { git = "https://github.com/iotaledger/iota.rs", branch = "production" }\n# asynchronous runtime\ntokio = { version = "1.12.0", features = ["full"] }\n')),(0,i.kt)("p",null,"After you have added it, you can use the library in your code with ",(0,i.kt)("inlineCode",{parentName:"p"},"use iota_client;"),"."),(0,i.kt)("h3",{id:"initialisation"},"Initialisation"),(0,i.kt)("p",null,"You can use the following example to initialize the library and fetch node information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_client::Client;\n\n#[tokio::main]\nasync fn main() {\n    let iota = Client::builder() // Crate a client instance builder\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")\n        .unwrap()\n        .finish()\n        .await\n        .unwrap();\n\n    let info = iota.get_info().await.unwrap();\n    println!("Nodeinfo: {:?}", info);\n}\n')))}p.isMDXComponent=!0}}]);