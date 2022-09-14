"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93130],{65193:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905)),i=t(44393),r=t(59728);const l={title:"How To Get A Block"},s=void 0,c={unversionedId:"libraries/nodejs/how_to/get_block",id:"libraries/nodejs/how_to/get_block",title:"How To Get A Block",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/6_get_block.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/get_block",permalink:"/iota.rs/develop/libraries/nodejs/how_to/get_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/6_get_block.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"How To Get A Block"},sidebar:"docs",previous:{title:"How To Create A Block",permalink:"/iota.rs/develop/libraries/nodejs/how_to/create_block"},next:{title:"How To Prepare And Sign A Transaction",permalink:"/iota.rs/develop/libraries/nodejs/how_to/prepare_sign_transaction"}},d={},p=[],k={toc:p};function b(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/07_get_block_data.js\n\n// In this example we will send a block and get the data and metadata for it\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        // Create block with no payload.\n        const blockIdAndBlock = await client.buildAndPostBlock();\n        console.log('Block:', blockIdAndBlock, '\\n');\n\n        // Get the metadata for the block.\n        const blockMetadata = await client.getBlockMetadata(blockIdAndBlock[0]);\n        console.log('Block metadata: ', blockMetadata, '\\n');\n\n        // Request the block by its id.\n        const blockData = await client.getBlock(blockIdAndBlock[0]);\n        console.log('Block data: ', blockData, '\\n');\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,a.kt)(r.ZP,{mdxType:"MoreExamples"}))}b.isMDXComponent=!0},59728:(e,o,t)=>{t.d(o,{ZP:()=>r});var n=t(87462),a=(t(67294),t(3905));const i={toc:[]};function r(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"More advanced examples can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}r.isMDXComponent=!0}}]);