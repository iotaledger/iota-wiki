"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71685],{74361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),s=r(44393);const o={title:"How To Generate Addresses"},i=void 0,d={unversionedId:"libraries/java/how_to/generate_addresses",id:"libraries/java/how_to/generate_addresses",title:"How To Generate Addresses",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/java/how_to/generate_addresses.mdx",sourceDirName:"libraries/java/how_to",slug:"/libraries/java/how_to/generate_addresses",permalink:"/iota.rs/develop/libraries/java/how_to/generate_addresses",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/java/how_to/generate_addresses.mdx",tags:[],version:"current",frontMatter:{title:"How To Generate Addresses"},sidebar:"docs",previous:{title:"How To Generate A Mnemonic",permalink:"/iota.rs/develop/libraries/java/how_to/generate_mnemonic"},next:{title:"How To Get An Output",permalink:"/iota.rs/develop/libraries/java/how_to/get_output"}},c={},l=[],p={toc:l};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class GenerateAddresses {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Generate the addresses from the given mnemonic.\n        MnemonicSecretManager secretManager = new MnemonicSecretManager("endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river");\n        String[] addresses = client.generateAddresses(secretManager, new GenerateAddressesOptions().withRange(new Range(0, 5)));\n\n        // Print the addresses.\n        for (String address : addresses) {\n            System.out.println(address);\n        }\n    }\n}'))}g.isMDXComponent=!0}}]);