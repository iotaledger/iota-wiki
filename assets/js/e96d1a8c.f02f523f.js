"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93130],{59747:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return k}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=o(87308),c=o(42526),l=["components"],s={title:"How To Get A Block"},d=void 0,p={unversionedId:"libraries/nodejs/how_to/get_block",id:"libraries/nodejs/how_to/get_block",title:"How To Get A Block",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/6_get_block.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/get_block",permalink:"/iota.rs/develop/libraries/nodejs/how_to/get_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/6_get_block.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"How To Get A Block"},sidebar:"docs",previous:{title:"How To Create A Block",permalink:"/iota.rs/develop/libraries/nodejs/how_to/create_block"},next:{title:"How To Prepare And Sign A Transaction",permalink:"/iota.rs/develop/libraries/nodejs/how_to/prepare_sign_transaction"}},u={},k=[],b={toc:k};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/07_get_block_data.js\n\n// In this example we will send a block and get the data and metadata for it\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        // Create block with no payload.\n        const block = await client.generateBlock();\n        console.log('Block:', block, '\\n');\n\n        // Hash the block to get the block id.\n        const blockId = await client.blockId(block);\n\n        // Get the metadata for the block.\n        const blockMetadata = await client.getBlockMetadata(blockId);\n        console.log('Block metadata: ', blockMetadata, '\\n');\n\n        // Request the block by it's id.\n        const blockData = await client.getBlock(blockId);\n        console.log('Block data: ', blockData, '\\n');\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,r.kt)(c.ZP,{mdxType:"MoreExamples"}))}m.isMDXComponent=!0},42526:function(e,t,o){o.d(t,{ZP:function(){return l}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],c={toc:[]};function l(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}l.isMDXComponent=!0}}]);