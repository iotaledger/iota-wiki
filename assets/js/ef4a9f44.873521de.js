"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={description:"How to interact with the L1 ledger in Solo.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","UTXO","tokens","ledger","l1","how-to"]},s="The L1 Ledger",i={unversionedId:"guide/solo/the-l1-ledger",id:"guide/solo/the-l1-ledger",title:"The L1 Ledger",description:"How to interact with the L1 ledger in Solo.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/the-l1-ledger.md",sourceDirName:"guide/solo",slug:"/guide/solo/the-l1-ledger",permalink:"/smart-contracts/develop/guide/solo/the-l1-ledger",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/the-l1-ledger.md",tags:[],version:"current",frontMatter:{description:"How to interact with the L1 ledger in Solo.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","UTXO","tokens","ledger","l1","how-to"]},sidebar:"tutorialSidebar",previous:{title:"First Example",permalink:"/smart-contracts/develop/guide/solo/first-example"},next:{title:"The L2 Ledger",permalink:"/smart-contracts/develop/guide/solo/the-l2-ledger"}},l={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-l1-ledger"},"The L1 Ledger"),(0,r.kt)("p",null,"IOTA Smart Contracts work as a ",(0,r.kt)("strong",{parentName:"p"},"layer 2")," (",(0,r.kt)("strong",{parentName:"p"},"L2"),") extension of the ",(0,r.kt)("em",{parentName:"p"},"IOTA Multi-Asset Ledger"),", ",(0,r.kt)("strong",{parentName:"p"},"layer 1")," (",(0,r.kt)("strong",{parentName:"p"},"L1"),").\nThe specifics of the ledger is outside the scope of this documentation; for now it is sufficient to know that the ledger\ncontains balances of different kinds of assets (base tokens, native tokens, foundries and NFTs) locked in addresses.\nAssets can only be moved on the ledger by unlocking the corresponding address with its private key."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Address: iota1pr7vescn4nqc9lpvv37unzryqc43vw5wuf2zx8tlq2wud0369hjjugg54mf\n    IOTA: 4012720\n    Native token 0x08fcccc313acc182fc2c647dc98864062b163a8ee254231d7f029dc6be3a2de52e0100000000: 100\n    NFT 0x94cd51b79d9608ed6e38780d48e9fc8c295b893077739b28ce591c45b33dec44\n")),(0,r.kt)("p",null,"In this example, the address owns some base tokens (IOTA), 100 units of a native token with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"0x08fc..."),", and an NFT\nwith ID ",(0,r.kt)("inlineCode",{parentName:"p"},"0x94cd..."),"."),(0,r.kt)("p",null,"You can find more information about the ledger in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md"},"Multi-Asset Ledger TIP"),"."),(0,r.kt)("p",null,"In normal operation, the L2 state is maintained by a committee of Wasp nodes. The L1 ledger is provided and\nmaintained by a network of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/hornet"},"Hornet")," nodes, which is a distributed implementation\nof the IOTA Multi-Asset Ledger."),(0,r.kt)("p",null,"The Solo environment implements a standalone in-memory ledger, simulating the behavior of a real L1 ledger without the\nneed to run a network of Hornet nodes."),(0,r.kt)("p",null,"The following example creates a new wallet (private/public key pair) and requests some base tokens from the faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorialL1(t *testing.T) {\n    env := solo.New(t)\n    _, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(1))\n    t.Logf("address of the user is: %s", userAddress.Bech32(parameters.L1.Protocol.Bech32HRP))\n    numBaseTokens := env.L1BaseTokens(userAddress)\n    t.Logf("balance of the user is: %d base tokens", numBaseTokens)\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount)\n}\n')),(0,r.kt)("p",null,"The output of the test is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"=== RUN   TestTutorialL1\n47:49.136622566 INFO    TestTutorialL1.db   dbmanager/dbmanager.go:64   creating new in-memory database for: CHAIN_REGISTRY\n47:49.136781104 INFO    TestTutorialL1  solo/solo.go:162    Solo environment has been created: logical time: 00:01.001000000, time step: 1ms\n    tutorial_test.go:32: address of the user is: tgl1qp5d8zm9rr9rcae2hq95plx0rquy5gu2mpedurm2kze238neuhh5csjngz0\n    tutorial_test.go:34: balance of the user is: 1000000000 base tokens\n--- PASS: TestTutorialL1 (0.00s)\n")),(0,r.kt)("p",null,"The L1 ledger in Solo can be accessed via the Solo instance called ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),".\nThe ledger is unique for the lifetime of the Solo environment.\nEven if several L2 chains are deployed during the test, all of them will live on the same L1 ledger; this way Solo makes\nit possible to test cross-chain transactions.\n(Note that in the test above we did not deploy any chains: the L1 ledger exists independently of any chains.)"))}p.isMDXComponent=!0}}]);