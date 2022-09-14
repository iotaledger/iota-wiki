"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1004],{53805:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=o(87462),i=(o(67294),o(3905)),a=o(44393),r=o(28870);const p={title:"How To Build An Output"},s=void 0,u={unversionedId:"libraries/python/how_to/build_output",id:"libraries/python/how_to/build_output",title:"How To Build An Output",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/1_build_output.mdx",sourceDirName:"libraries/python/how_to",slug:"/libraries/python/how_to/build_output",permalink:"/iota.rs/develop/libraries/python/how_to/build_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/1_build_output.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How To Build An Output"},sidebar:"docs",previous:{title:"How To Get Node Info",permalink:"/iota.rs/develop/libraries/python/how_to/get_node_info"},next:{title:"How To Get An Output",permalink:"/iota.rs/develop/libraries/python/how_to/get_output"}},l={},d=[],c={toc:d};function m(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({\'nodes\': [\'https://api.testnet.shimmer.network\']})\n\nbasic_output = client.build_basic_output(\n    unlock_conditions=[\n        {\n            "type": 0,\n            "address": {\n                "type": 0,\n                "pubKeyHash": client.bech32_to_hex("rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46"),\n            },\n        },\n    ],\n    amount=\'1000000\',\n)\nprint(f\'{basic_output}\')\n'),(0,i.kt)(r.ZP,{mdxType:"MoreExamples"}))}m.isMDXComponent=!0},28870:(t,e,o)=>{o.d(e,{ZP:()=>r});var n=o(87462),i=(o(67294),o(3905));const a={toc:[]};function r(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},a,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/native/examples"},"examples")," folder."))}r.isMDXComponent=!0}}]);