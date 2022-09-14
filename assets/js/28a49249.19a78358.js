"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62035],{55105:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(87462),r=(o(67294),o(3905)),i=o(44393),a=o(59728);const s={title:"How To Generate A Mnemonic"},d=void 0,c={unversionedId:"libraries/nodejs/how_to/generate_mnemonic",id:"libraries/nodejs/how_to/generate_mnemonic",title:"How To Generate A Mnemonic",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/3_generate_mnemonic.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/generate_mnemonic",permalink:"/iota.rs/develop/libraries/nodejs/how_to/generate_mnemonic",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/3_generate_mnemonic.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How To Generate A Mnemonic"},sidebar:"docs",previous:{title:"How To Get An Output",permalink:"/iota.rs/develop/libraries/nodejs/how_to/get_output"},next:{title:"How To Generate Addresses",permalink:"/iota.rs/develop/libraries/nodejs/how_to/generate_addresses"}},m={},l=[],p={toc:l};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\n\n// Run with command:\n// node ./dist/01_mnemonic.js\n\n// In this example we will generate a random BIP39 mnemonic\nasync function run() {\n    initLogger();\n\n    const client = new Client({\n        // We don't need a node to generate a mnemonic\n        offline: true,\n    });\n\n    try {\n        const mnemonic = await client.generateMnemonic();\n\n        console.log('Mnemonic: ' + mnemonic);\n        // Example output:\n        // Mnemonic: endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,r.kt)(a.ZP,{mdxType:"MoreExamples"}))}u.isMDXComponent=!0},59728:(e,n,o)=>{o.d(n,{ZP:()=>a});var t=o(87462),r=(o(67294),o(3905));const i={toc:[]};function a(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}a.isMDXComponent=!0}}]);