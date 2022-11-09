"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||d;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=t.length,s=new Array(d);s[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<d;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},40721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const d={description:"You can use the rand-address and rand-seed tools to generate random seeds and addresses through a simple command.",keywords:["address","seed","public key","private key","generate","generation"]},s="Rand Seed and Rand Address",o={unversionedId:"tooling/rand_seed_and_rand_address",id:"tooling/rand_seed_and_rand_address",title:"Rand Seed and Rand Address",description:"You can use the rand-address and rand-seed tools to generate random seeds and addresses through a simple command.",source:"@site/next/external/goshimmer/documentation/docs/tooling/rand_seed_and_rand_address.md",sourceDirName:"tooling",slug:"/tooling/rand_seed_and_rand_address",permalink:"/next/goshimmer/tooling/rand_seed_and_rand_address",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/tooling/rand_seed_and_rand_address.md",tags:[],version:"current",frontMatter:{description:"You can use the rand-address and rand-seed tools to generate random seeds and addresses through a simple command.",keywords:["address","seed","public key","private key","generate","generation"]},sidebar:"docs",previous:{title:"Evil spammer",permalink:"/next/goshimmer/tooling/evil_spammer"},next:{title:"How to Do a Release",permalink:"/next/goshimmer/teamresources/release"}},i={},l=[{value:"Rand Address",id:"rand-address",level:2},{value:"Expected Output",id:"expected-output",level:3},{value:"Rand Seed",id:"rand-seed",level:2},{value:"Expected Output",id:"expected-output-1",level:3}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rand-seed-and-rand-address"},"Rand Seed and Rand Address"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"#rand-address"},(0,a.kt)("inlineCode",{parentName:"a"},"rand-address"))," and ",(0,a.kt)("a",{parentName:"p",href:"#rand-seed"},(0,a.kt)("inlineCode",{parentName:"a"},"rand-seed"))," tools to generate addresses and seeds in a single command."),(0,a.kt)("h2",{id:"rand-address"},"Rand Address"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rand-address")," tool to generate a random address by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"tools/rand-address")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd tools/rand-address\ngo run main.go\n")),(0,a.kt)("h3",{id:"expected-output"},"Expected Output"),(0,a.kt)("p",null,"The script will output a Base58 string representing the newly generated address, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"13n6HnqiLQVaE2sp8BExM51C2z1BLw7SrFjNAUK439YCC\n")),(0,a.kt)("h2",{id:"rand-seed"},"Rand Seed"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rand-address")," tool to generate a text file with the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"../tutorials/send_transaction#seed"},"seed"),", represented in Base64 and Base58."),(0,a.kt)("li",{parentName:"ul"},"The seed's relative identity, as a Base58 string. "),(0,a.kt)("li",{parentName:"ul"},"The relative identity's public, key in Base58.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd tools/rand-seed\ngo run main.go\n")),(0,a.kt)("h3",{id:"expected-output-1"},"Expected Output"),(0,a.kt)("p",null,"The script will generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"random-seed.txt")," file in the current working directory, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"base64:ri9C8oAT3IPsus2j+IllMbW2B3nOqe4uC56zfr344zY=\nbase58:CiwjnjMRwEbCGiATWjNsrVptBTNH13AHrVNmG31KK9cy\nIdentity - base58:BCUnRc6c\nIdentity - base58:BCUnRc6cv4YVnB3Rw5DDfdsFuVVUW97MyLEBzWxHqfQj\nPublic Key - base58:Ht9VR8qAgmruDPzsQbak3AJvXcJY6q6Mxyaz4pDicDEw\n")))}u.isMDXComponent=!0}}]);