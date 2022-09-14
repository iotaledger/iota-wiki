"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={keywords:["Stardust","Shimmer","Upgrades","Token","Tokenization","Native token","NFT","Protocol Improvements","explanation"],description:"Stardust introduces layer 1 tokenization such as native tokens and NFTs.",image:"/img/logo/preview.png"},i="Tokenization",s={unversionedId:"explanations/what_is_stardust/tokenization",id:"explanations/what_is_stardust/tokenization",title:"Tokenization",description:"Stardust introduces layer 1 tokenization such as native tokens and NFTs.",source:"@site/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/tokenization.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/tokenization",permalink:"/introduction/develop/explanations/what_is_stardust/tokenization",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/tokenization.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Token","Tokenization","Native token","NFT","Protocol Improvements","explanation"],description:"Stardust introduces layer 1 tokenization such as native tokens and NFTs.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Smart Contract Chain Support",permalink:"/introduction/develop/explanations/what_is_stardust/sc_support"},next:{title:"Storage Deposit System",permalink:"/introduction/develop/explanations/what_is_stardust/storage_deposit"}},l={},u=[{value:"Native Tokens",id:"native-tokens",level:2},{value:"Non-fungible Tokens (NFTs)",id:"non-fungible-tokens-nfts",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tokenization"},"Tokenization"),(0,r.kt)("h2",{id:"native-tokens"},"Native Tokens"),(0,r.kt)("p",null,"Stardust introduces custom, user-defined tokens. Fungible tokens, called ",(0,r.kt)("strong",{parentName:"p"},"native tokens"),", are minted and melted in token\nfoundries. One does not need to convert base currency into native tokens, they are injected into the ledger out of thin\nair. Anyone is free to issue their own tokens, but keep in mind that holding native tokens in one's wallet increases the\nrequired storage deposit in the base currency. We will elaborate on storage deposits ",(0,r.kt)("a",{parentName:"p",href:"/introduction/develop/explanations/what_is_stardust/storage_deposit"},"here"),"."),(0,r.kt)("h2",{id:"non-fungible-tokens-nfts"},"Non-fungible Tokens (NFTs)"),(0,r.kt)("p",null,"Non-fungible tokens, so-called ",(0,r.kt)("strong",{parentName:"p"},"NFTs"),", are different from native tokens because each token must be unique and must have\nsome immutable data attached to them. As a consequence, NFTs are supported on base protocol level via NFT outputs."),(0,r.kt)("p",null,"Minting and NFT doesn't require expensive gas fees, all that needs to be in place is the right amount of storage deposit\ntokens that are 100% refunded after the NFT is destroyed. The issuer's identity may also be immutable attached to the NFT\nnext to arbitrary data, making it possible to detect counterfeits. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/pull/65"},"TIP-27"),"\nexplains the recommended way of structuring NFT metadata for future verification and dApp interoperability."))}p.isMDXComponent=!0}}]);