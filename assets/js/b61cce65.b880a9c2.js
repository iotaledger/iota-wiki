"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95529],{98982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),o=n(54411),r=n(43305),l=n(44393);const s={title:"Create a DID on a Private Tangle",sidebar_label:"Create a DID on a Private Tangle",description:"Create a DID on a Private Tangle using the IOTA Identity Rust Library or its WASM bindings",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},c=void 0,u={unversionedId:"concepts/decentralized_identifiers/private_tangle",id:"concepts/decentralized_identifiers/private_tangle",title:"Create a DID on a Private Tangle",description:"Create a DID on a Private Tangle using the IOTA Identity Rust Library or its WASM bindings",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/private_tangle.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/private_tangle",permalink:"/identity.rs/concepts/decentralized_identifiers/private_tangle",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/private_tangle.mdx",tags:[],version:"current",frontMatter:{title:"Create a DID on a Private Tangle",sidebar_label:"Create a DID on a Private Tangle",description:"Create a DID on a Private Tangle using the IOTA Identity Rust Library or its WASM bindings",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},sidebar:"docs",previous:{title:"Resolve",permalink:"/identity.rs/concepts/decentralized_identifiers/resolve"},next:{title:"Overview",permalink:"/identity.rs/concepts/verifiable_credentials/overview"}},d={},p=[{value:"Example",id:"example",level:2},{value:"Account Module (Recommended)",id:"account-module-recommended",level:3},{value:"Low-level API",id:"low-level-api",level:3}],h={toc:p};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This example shows how you can create a DID on a private tangle. You can run it together with a local ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/welcome"},"Hornet node"),"."),(0,i.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,i.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_config\n\nuse identity_iota::account::Account;\nuse identity_iota::account::AccountBuilder;\nuse identity_iota::account::AutoSave;\nuse identity_iota::account::IdentitySetup;\nuse identity_iota::account::Result;\nuse identity_iota::account_storage::MemStore;\nuse identity_iota::client::ClientBuilder;\nuse identity_iota::client::ExplorerUrl;\nuse identity_iota::iota_core::IotaDID;\nuse identity_iota::iota_core::Network;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Set-up for a private Tangle\n  // You can use https://github.com/iotaledger/one-click-tangle for a local setup.\n  // The `network_name` needs to match the id of the network or a part of it.\n  // As an example we are treating the devnet as a private tangle, so we use `dev`.\n  // When running the local setup, we can use `tangle` since the id of the one-click\n  // private tangle is `private-tangle`, but we can only use 6 characters.\n  // Keep in mind, there are easier ways to change to devnet via `Network::Devnet`\n  let network_name = "dev";\n  let network = Network::try_from_name(network_name)?;\n\n  // If you deployed an explorer locally this would usually be `http://127.0.0.1:8082`\n  let explorer = ExplorerUrl::parse("https://explorer.iota.org/devnet")?;\n\n  // In a locally running one-click tangle, this would usually be `http://127.0.0.1:14265`\n  let private_node_url = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n  // Create a new Account with explicit configuration\n  let mut builder: AccountBuilder = Account::builder()\n    .autosave(AutoSave::Never) // never auto-save. rely on the drop save\n    .autosave(AutoSave::Every) // save immediately after every action\n    .autosave(AutoSave::Batch(10)) // save after every 10 actions\n    .autopublish(true) // publish to the tangle automatically on every update\n    .storage(MemStore::new()) // use the default in-memory storage\n    .client_builder(\n      // Configure a client for the private network\n      ClientBuilder::new()\n        .network(network.clone())\n        .primary_node(private_node_url, None, None)?,\n      // set a permanode for the same network\n      // .permanode(<permanode_url>, None, None)?\n    );\n\n  // Create an identity and publish it.\n  // The created DID will use the network name configured for the client.\n  let identity: Account = match builder.create_identity(IdentitySetup::default()).await {\n    Ok(identity) => identity,\n    Err(err) => {\n      eprintln!("[Example] Error: {:?}", err);\n      eprintln!("[Example] Is your Tangle node listening on {}?", private_node_url);\n      return Ok(());\n    }\n  };\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let iota_did: &IotaDID = identity.did();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n'),(0,i.kt)("h3",{id:"low-level-api"},"Low-level API"),(0,i.kt)(o.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates and publishes a DID Document\n//! to a private tangle.\n//! It can be run together with a local hornet node.\n//! Refer to https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net\n//! for setup instructions.\n//!\n//! cargo run --example private_tangle\n\nuse identity_iota::client::ClientBuilder;\nuse identity_iota::client::DIDMessageEncoding;\nuse identity_iota::client::ExplorerUrl;\nuse identity_iota::client::Receipt;\nuse identity_iota::crypto::KeyType;\nuse identity_iota::iota_core::Network;\nuse identity_iota::prelude::*;\n\n#[tokio::main]\npub async fn main() -> Result<()> {\n  // Set-up for private Tangle\n  // You can use https://github.com/iotaledger/one-click-tangle for a local setup.\n  // The `network_name` needs to match the id of the network or a part of it.\n  // As an example we are treating the devnet as a private tangle, so we use `dev`.\n  // When running the local setup, we can use `tangle` since the id of the one-click\n  // private tangle is `private-tangle`, but we can only use 6 characters.\n  // Keep in mind, there are easier ways to change to devnet via `Network::Devnet`\n  let network_name = "dev";\n  let network = Network::try_from_name(network_name)?;\n\n  // If you deployed an explorer locally this would usually be `http://127.0.0.1:8082`\n  let explorer = ExplorerUrl::parse("https://explorer.iota.org/devnet")?;\n\n  // In a locally running one-click tangle, this would usually be `http://127.0.0.1:14265`\n  let private_node_url = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n  // Use DIDMessageEncoding::Json instead to publish plaintext messages to the Tangle for debugging.\n  let encoding = DIDMessageEncoding::JsonBrotli;\n\n  let client: Client = ClientBuilder::new()\n    .network(network.clone())\n    .encoding(encoding)\n    .primary_node(private_node_url, None, None)?\n    .build()\n    .await?;\n\n  // Generate a new Ed25519 public/private key pair.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n\n  // Create a DID with the network set explicitly.\n  let mut document: IotaDocument = IotaDocument::new_with_options(&keypair, Some(client.network().name()), None)?;\n\n  // Sign the DID Document with the default signing method.\n  document.sign_self(keypair.private(), document.default_signing_method()?.id().clone())?;\n\n  // Publish the DID Document to the Tangle.\n  let receipt: Receipt = match client.publish_document(&document).await {\n    Ok(receipt) => receipt,\n    Err(err) => {\n      eprintln!("Error > {:?}", err);\n      eprintln!("Is your private Tangle node listening on {}?", private_node_url);\n      return Ok(());\n    }\n  };\n\n  println!("Publish Receipt > {:#?}", receipt);\n\n  // Prints the Identity Resolver Explorer URL, the entire history can be observed on this page by "Loading History".\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(document.id())?\n  );\n\n  Ok(())\n}\n')),(0,i.kt)(r.Z,{value:"nodejs",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, DIDMessageEncoding, Document, ExplorerUrl, KeyPair, KeyType, Network} from \'@iota/identity-wasm\';\n\n/**\n This example shows how a DID document can be created on a private tangle.\n It can be run together with a local hornet node.\n Refer to https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net\n for setup instructions.\n **/\nasync function privateTangle(restURL, networkName) {\n    // This name needs to match the id of the network or part of it.\n    // Since the id of the one-click private tangle is `private-tangle`\n    // but we can only use 6 characters, we use just `tangle`.\n    const network = Network.tryFromName(networkName || "tangle");\n\n    // Optionally point to a locally-deployed Tangle explorer.\n    const explorer = ExplorerUrl.parse("http://127.0.0.1:8082/");\n\n    // Create a client instance with a custom configuration to publish messages to our private Tangle.\n    const client = await Client.fromConfig({\n        network: network,\n        // This URL points to the REST API of the locally running hornet node.\n        primaryNode: {url: restURL || "http://127.0.0.1:14265/"},\n        // Use DIDMessageEncoding.Json instead to publish plaintext messages to the Tangle for debugging.\n        encoding: DIDMessageEncoding.JsonBrotli,\n    });\n\n    // Generate a new ed25519 public/private key pair.\n    const key = new KeyPair(KeyType.Ed25519);\n\n    // Create a DID with the network set explicitly.\n    // This will result in a DID prefixed by `did:iota:tangle`.\n    const doc = new Document(key, network.name());\n\n    // Sign the DID Document with the generated key.\n    doc.signSelf(key, doc.defaultSigningMethod().id());\n\n    // Publish the Identity to the IOTA Network, this may take a few seconds to complete Proof-of-Work.\n    const receipt = await client.publishDocument(doc);\n\n    // Make sure the DID can be resolved on the private tangle\n    const resolved = await client.resolve(doc.id());\n\n    console.log(`Published the DID document to the private tangle:`);\n    console.log(resolved);\n    console.log(`Explore the DID Document: ${explorer.resolverUrl(doc.id())}`);\n\n    // Return the results.\n    return {key, resolved, receipt};\n}\n\nexport {privateTangle};\n'))))}g.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const o="tabItem__kUE";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),i=n(67294),o=n(86010),r=n(51048),l=n(33609),s=n(1943),c=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function p(e){var t,n;const{lazy:r,block:p,defaultValue:h,values:g,groupId:m,className:v}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=g?g:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(w,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===h?h:null!=(t=null!=h?h:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!w.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:_}=(0,s.U)(),[D,I]=(0,i.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=m){const e=f[m];null!=e&&e!==D&&w.some((t=>t.value===e))&&I(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=w[n].value;a!==D&&(x(t),I(a),null!=m&&_(m,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var i;const t=T.indexOf(e.currentTarget)-1;n=null!=(i=T[t])?i:T[T.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>T.push(e),onKeyDown:N,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(y.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function h(e){const t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);