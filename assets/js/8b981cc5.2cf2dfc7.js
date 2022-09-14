"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return t?o.createElement(g,i(i({ref:n},u),{},{components:t})):o.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const r={description:"How to run a node. Requirements, configuration parameters, dashboard configuration, and tests.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Running a node","Go-lang","Hornet","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},i="Running a Node",s={unversionedId:"guide/chains_and_nodes/running-a-node",id:"guide/chains_and_nodes/running-a-node",title:"Running a Node",description:"How to run a node. Requirements, configuration parameters, dashboard configuration, and tests.",source:"@site/content/build/wasp/production/documentation/docs/guide/chains_and_nodes/running-a-node.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/running-a-node",permalink:"/smart-contracts/guide/chains_and_nodes/running-a-node",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/chains_and_nodes/running-a-node.md",tags:[],version:"current",frontMatter:{description:"How to run a node. Requirements, configuration parameters, dashboard configuration, and tests.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Running a node","Go-lang","Hornet","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},sidebar:"tutorialSidebar",previous:{title:"Install Wasp",permalink:"/smart-contracts/guide/chains_and_nodes/installing-wasp"},next:{title:"Node Configuration",permalink:"/smart-contracts/guide/chains_and_nodes/node-config"}},d={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Hornet",id:"hornet",level:3},{value:"Hornet Connection Settings",id:"hornet-connection-settings",level:3},{value:"Running the Node",id:"running-the-node",level:2},{value:"Accessing Your Node From a Remote Machine",id:"accessing-your-node-from-a-remote-machine",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli")," binaries ",(0,a.kt)("a",{parentName:"p",href:"./installing-wasp"},"installed")," in $PATH."),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cores"),": At least 2 cores (most modern processors will suffice)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RAM"),": 4GB")),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access to a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet"},"Hornet")," node (with mqtt enabled) for\nproduction operation.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can configure your node/s using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/config.json"},(0,a.kt)("inlineCode",{parentName:"a"},"config.json")),".\nThe minimum needed configuration to run a wasp node is a L1 connection. For more advanced configuration\nsee ",(0,a.kt)("a",{parentName:"p",href:"./node-config"},"Node Configuration"),"."),(0,a.kt)("p",null,"You can set L1 access of the node following the instructions below."),(0,a.kt)("h3",{id:"hornet"},"Hornet"),(0,a.kt)("p",null,"Wasp requires a Hornet node to communicate with the L1 Tangle."),(0,a.kt)("p",null,"You can use any ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/guide/chains_and_nodes/testnet"},"publicly available node"),",\nor ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/getting_started"},"set up your own node"),",\nor ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/how_tos/private_tangle"},"create a private tangle"),"."),(0,a.kt)("h3",{id:"hornet-connection-settings"},"Hornet Connection Settings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"l1.apiAddress")," specifies the Hornet API address (default port: ",(0,a.kt)("inlineCode",{parentName:"p"},"14265"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"li.faucetAddress")," specifies the Hornet faucet address (default port: ",(0,a.kt)("inlineCode",{parentName:"p"},"8091"),")"),(0,a.kt)("h2",{id:"running-the-node"},"Running the Node"),(0,a.kt)("p",null,"After you have tweaked ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," to your liking, you can start a Wasp node by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp")," in the same directory\nas shown in the following snippet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir wasp-node\ncp config.json wasp-node\ncd wasp-node\n#<edit config.json as desired>\nwasp\n")),(0,a.kt)("p",null,"You can verify that your node is running by opening the dashboard with a web browser\nat ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:7000"},(0,a.kt)("inlineCode",{parentName:"a"},"127.0.0.1:7000"))," (default URL)."),(0,a.kt)("p",null,"Repeat this process to launch as many nodes as you want for your committee."),(0,a.kt)("h3",{id:"accessing-your-node-from-a-remote-machine"},"Accessing Your Node From a Remote Machine"),(0,a.kt)("p",null,"To access the Wasp node from outside its local network, you must add your public IP to the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpi.adminWhitelist"),". You\ncan add it to your config file or run the node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"webapi.adminWhitelist")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wasp --webapi.adminWhitelist=127.0.0.1,YOUR_IP\n")),(0,a.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eV2AoV3QPC4",title:"Wasp Node Setup",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0}}]);