"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={description:"Getting started with the official IOTA Client Library C binding.",image:"/img/logo/iota_mark_light.png",keywords:["C","cmake","std","how-to"]},l="Getting Started with C",s={unversionedId:"getting_started/c_getting_started",id:"getting_started/c_getting_started",title:"Getting Started with C",description:"Getting started with the official IOTA Client Library C binding.",source:"@site/content/build/streams/develop/documentation/docs/getting_started/c_getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/c_getting_started",permalink:"/streams/getting_started/c_getting_started",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/getting_started/c_getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library C binding.",image:"/img/logo/iota_mark_light.png",keywords:["C","cmake","std","how-to"]},sidebar:"docs",previous:{title:"Getting Started with Wasm",permalink:"/streams/getting_started/wasm_getting_started"},next:{title:"Examples",permalink:"/streams/how_tos/rust_how_tos"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build the Library",id:"build-the-library",level:2},{value:"Options for CMakeLlists.txt",id:"options-for-cmakelliststxt",level:3},{value:"Starting a Channel",id:"starting-a-channel",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-c"},"Getting Started with C"),(0,i.kt)("p",null,"The C bindings allow for you to build a Streams API which can be pulled into other languages.\nThe streams instance underlying the bindings is built with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sync-client")," flag to\nensure a compatible client interface using the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs iota-client")," crate. "),(0,i.kt)("p",null,"You can build a Streams API that is pulled into other languages using the C bindings. The streams instance used for the bindings is built with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sync-client")," flag to ensure a compatible client interface using the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs iota-client")," crate."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before building anything, make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"cmake"))," installed on your machine."),(0,i.kt)("h2",{id:"build-the-library"},"Build the Library"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After you have cloned the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/streams/"},"repository"),", move into the C directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd bindings/c\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("a",{parentName:"li",href:"#options-for-cmakelliststxt"},"flags")," in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/streams/blob/develop/bindings/c/CMakeLists.txt"},(0,i.kt)("inlineCode",{parentName:"a"},"CMakeLists.txt")," file")," and run the following command to prepare the installation files:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cmake .\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Build the library by running the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,i.kt)("p",null,"This will generate a binary library you can include in a project. This can be either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iota_streams_c_static"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iota_streams_c.so")," (Unix)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iota_streams_c.dll")," (Windows).")),(0,i.kt)("p",null,"An example of the header file can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/streams/blob/develop/bindings/c/include/iota_streams/channels.h"},"include/iota_streams/channels.h"),"."),(0,i.kt)("h3",{id:"options-for-cmakelliststxt"},"Options for CMakeLlists.txt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NO_STD"),": Enable no_std build without the iota_client. When ON, ",(0,i.kt)("inlineCode",{parentName:"li"},"SYNC_CLIENT")," is not supported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYNC_CLIENT"),": Enable sync transport via the iota_client. When OFF, it will be Bucket which you can only use for tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STATIC"),": Build a static library when ON. When OFF, build a dynamic library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RELEASE"),": Build in release or debug mode. When ON, builds release; when OFF, build in debug mode.")),(0,i.kt)("p",null,"To build the library, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,i.kt)("p",null,"This generates a binary library that you can include in your projects. This can be either: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iota_streams_c_static")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iota_streams_c.so")," (Unix)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iota_streams_c.dll")," (Windows)")),(0,i.kt)("p",null,"An example of the header file can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"include/channels.h"),"."),(0,i.kt)("h2",{id:"starting-a-channel"},"Starting a Channel"),(0,i.kt)("p",null,"Once you have ",(0,i.kt)("a",{parentName:"p",href:"#build-the-library"},"built")," the package, you can pull it into a script file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include "iota_streams/channels.h"\n#include <stdio.h>\n\nint main()\n{\n uint8_t multi_branching = 0;\n char seed[] = "Some unique seed";\n char const encoding[] = "utf-8";\n const size_t size = 1024;\n char const *url = "https://chrysalis-nodes.iota.org";\n \n transport_t *tsp = tsp_client_new_from_url(url);\n // Author constructor requires: (seed, encoding, payload size, multi branching, transport client)\n author_t *auth = auth_new(seed, encoding, size, multi_branching, tsp);\n address_t const *ann_link = auth_send_announce(auth);\n printf("Announcement message sent");\n \n char const *ann_address_inst_str = get_address_inst_str(ann_link);\n char const *ann_address_id_str = get_address_id_str(ann_link);\n // Link used by subscribers to attach to instance\n printf("Link: %s:%s\\n", ann_address_inst_str, ann_address_id_str);\n \n // Clean up\n drop_str(ann_address_inst_str);\n drop_str(ann_address_id_str);\n drop_address(ann_link);\n auth_drop(auth);\n tsp_drop(tsp);\n}\n')))}u.isMDXComponent=!0}}]);