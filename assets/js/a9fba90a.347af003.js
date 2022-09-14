"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29376],{43736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(44393);const i={title:"Examples",description:"Official IOTA Wallet Library Software Rust examples.",image:"/img/logo/wallet_light.png",keywords:["account","event","Rust","transfer","backup"]},s=void 0,o={unversionedId:"libraries/rust/examples",id:"libraries/rust/examples",title:"Examples",description:"Official IOTA Wallet Library Software Rust examples.",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/rust/examples.mdx",sourceDirName:"libraries/rust",slug:"/libraries/rust/examples",permalink:"/wallet.rs/develop/libraries/rust/examples",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/rust/examples.mdx",tags:[],version:"current",frontMatter:{title:"Examples",description:"Official IOTA Wallet Library Software Rust examples.",image:"/img/logo/wallet_light.png",keywords:["account","event","Rust","transfer","backup"]},sidebar:"docs",previous:{title:"Getting Started with Rust",permalink:"/wallet.rs/develop/libraries/rust/getting_started"},next:{title:"API Reference",permalink:"/wallet.rs/develop/libraries/rust/api_reference"}},c={},p=[{value:"Create Wallet Example:",id:"create-wallet-example",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can see the examples in the library's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/examples"},"examples directory"),".\nYou can list all available examples by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example # lists the available examples\n")),(0,l.kt)("p",null,"To run an example, you can use the following command, replacing ",(0,l.kt)("em",{parentName:"p"},"01_create_wallet")," with the desired example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example 01_create_wallet # execute the `01_create_wallet` example\n")),(0,l.kt)("h2",{id:"create-wallet-example"},"Create Wallet Example:"),(0,l.kt)("p",null,"Use the following example to generate a wallet with one account."),(0,l.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 01_create_wallet --release\n// In this example we will create a new wallet\n// Rename `.env.example` to `.env` first\n\nuse std::{env, path::PathBuf};\n\nuse dotenv::dotenv;\nuse iota_wallet::{\n    account_manager::AccountManager,\n    iota_client::constants::SHIMMER_COIN_TYPE,\n    secret::{stronghold::StrongholdSecretManager, SecretManager},\n    ClientOptions, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Setup Stronghold secret_manager\n    let mut secret_manager = StrongholdSecretManager::builder()\n        .password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .build(PathBuf::from("wallet.stronghold"))?;\n\n    // Only required the first time, can also be generated with `manager.generate_mnemonic()?`\n    let mnemonic = env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC").unwrap();\n\n    // The mnemonic only needs to be stored the first time\n    secret_manager.store_mnemonic(mnemonic).await?;\n\n    // Create the account manager with the secret_manager and client options\n    let client_options = ClientOptions::new()\n        .with_node(&env::var("NODE_URL").unwrap())?\n        .with_node_sync_disabled();\n\n    let manager = AccountManager::builder()\n        .with_secret_manager(SecretManager::Stronghold(secret_manager))\n        .with_client_options(client_options)\n        .with_coin_type(SHIMMER_COIN_TYPE)\n        .finish()\n        .await?;\n\n    // Create a new account\n    let _account = manager\n        .create_account()\n        .with_alias("Alice".to_string())\n        .finish()\n        .await?;\n\n    println!("Generated a new account");\n\n    Ok(())\n}\n'))}u.isMDXComponent=!0}}]);