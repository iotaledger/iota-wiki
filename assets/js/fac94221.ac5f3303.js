"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18916],{17625:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(87462),i=(o(67294),o(3905)),r=o(44393),a=o(28870);const s={title:"How To Generate A Mnemonic"},m=void 0,l={unversionedId:"libraries/python/how_to/generate_mnemonic",id:"libraries/python/how_to/generate_mnemonic",title:"How To Generate A Mnemonic",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/3_generate_mnemonic.mdx",sourceDirName:"libraries/python/how_to",slug:"/libraries/python/how_to/generate_mnemonic",permalink:"/iota.rs/develop/libraries/python/how_to/generate_mnemonic",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/3_generate_mnemonic.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How To Generate A Mnemonic"},sidebar:"docs",previous:{title:"How To Get An Output",permalink:"/iota.rs/develop/libraries/python/how_to/get_output"},next:{title:"How To Generate Addresses",permalink:"/iota.rs/develop/libraries/python/how_to/generate_addresses"}},p={},c=[],d={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'offline': True})\n\n# Generate a random BIP39 mnemonic\nmnemonic = client.generate_mnemonic()\nprint(f'Mnemonic: {mnemonic}')\n"),(0,i.kt)(a.ZP,{mdxType:"MoreExamples"}))}u.isMDXComponent=!0},28870:(e,t,o)=>{o.d(t,{ZP:()=>a});var n=o(87462),i=(o(67294),o(3905));const r={toc:[]};function a(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/native/examples"},"examples")," folder."))}a.isMDXComponent=!0}}]);