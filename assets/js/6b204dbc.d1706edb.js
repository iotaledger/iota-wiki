"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9241],{38951:e=>{e.exports=JSON.parse('{"pluginId":"stronghold-rs","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mySidebar":[{"type":"link","label":"Welcome","href":"/stronghold.rs/welcome","docId":"welcome"},{"type":"link","label":"Getting Started","href":"/stronghold.rs/getting_started","docId":"getting_started"},{"type":"category","label":"Explanations","items":[{"type":"link","label":"Non-contiguous Data Types","href":"/stronghold.rs/explanations/non-contiguous-data-types","docId":"explanations/non-contiguous-data-types"},{"type":"link","label":"Cryptographic Procedures","href":"/stronghold.rs/explanations/procedures","docId":"explanations/procedures"},{"type":"link","label":"Runtime Extensions","href":"/stronghold.rs/explanations/runtime-extensions","docId":"explanations/runtime-extensions"},{"type":"link","label":"Concurrency in Stronghold","href":"/stronghold.rs/explanations/concurrency","docId":"explanations/concurrency"},{"type":"link","label":"Retrospective","href":"/stronghold.rs/explanations/retrospective","docId":"explanations/retrospective"}],"collapsed":true,"collapsible":true},{"type":"category","label":"How Tos","items":[{"type":"category","label":"Command Line Interface (CLI)","items":[{"type":"link","label":"Running Examples","href":"/stronghold.rs/how_tos/cli/running_examples","docId":"how_tos/cli/running_examples"},{"type":"link","label":"Generate an Ed25519 Key Pair","href":"/stronghold.rs/how_tos/cli/generate_key_pair","docId":"how_tos/cli/generate_key_pair"},{"type":"link","label":"Write To and Read From the Vault","href":"/stronghold.rs/how_tos/cli/store_read_write","docId":"how_tos/cli/store_read_write"},{"type":"link","label":"Generate a BIP39 Seed and Mnemonic","href":"/stronghold.rs/how_tos/cli/generate_bip39","docId":"how_tos/cli/generate_bip39"},{"type":"link","label":"Generate a SLIP10 Master Key","href":"/stronghold.rs/how_tos/cli/generate_slip_10","docId":"how_tos/cli/generate_slip_10"},{"type":"link","label":"Derive a SLIP10 Private Public Keypair","href":"/stronghold.rs/how_tos/cli/derive_slip_10","docId":"how_tos/cli/derive_slip_10"},{"type":"link","label":"Create a Snapshot","href":"/stronghold.rs/how_tos/cli/create_snapshot","docId":"how_tos/cli/create_snapshot"},{"type":"link","label":"Read a Snapshot From Filesystem","href":"/stronghold.rs/how_tos/cli/read_snapshot","docId":"how_tos/cli/read_snapshot"},{"type":"link","label":"Recover a BIP39 Seed with a Mnemonic and Optional Passphrase","href":"/stronghold.rs/how_tos/cli/recover_seed_with_mnemonic","docId":"how_tos/cli/recover_seed_with_mnemonic"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Reference","items":[{"type":"link","label":"Overview","href":"/stronghold.rs/reference/overview","docId":"reference/overview"},{"type":"category","label":"Structure","items":[{"type":"link","label":"Overview","href":"/stronghold.rs/reference/structure/overview","docId":"reference/structure/overview"},{"type":"link","label":"Client","href":"/stronghold.rs/reference/structure/client","docId":"reference/structure/client"},{"type":"category","label":"Engine","items":[{"type":"link","label":"Overview","href":"/stronghold.rs/reference/structure/engine/overview","docId":"reference/structure/engine/overview"},{"type":"link","label":"Snapshot","href":"/stronghold.rs/reference/structure/engine/snapshot","docId":"reference/structure/engine/snapshot"},{"type":"link","label":"Vault","href":"/stronghold.rs/reference/structure/engine/vault","docId":"reference/structure/engine/vault"},{"type":"link","label":"Store","href":"/stronghold.rs/reference/structure/engine/store","docId":"reference/structure/engine/store"},{"type":"link","label":"Runtime","href":"/stronghold.rs/reference/structure/engine/runtime","docId":"reference/structure/engine/runtime"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Derive","href":"/stronghold.rs/reference/structure/derive","docId":"reference/structure/derive"},{"type":"link","label":"Utils","href":"/stronghold.rs/reference/structure/utils","docId":"reference/structure/utils"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Specification","items":[{"type":"link","label":"Overview","href":"/stronghold.rs/reference/specs/overview","docId":"reference/specs/overview"},{"type":"link","label":"Scope","href":"/stronghold.rs/reference/specs/scope","docId":"reference/specs/scope"},{"type":"link","label":"Engineering","href":"/stronghold.rs/reference/specs/engineering","docId":"reference/specs/engineering"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"link","label":"Contribute","href":"/stronghold.rs/contribute","docId":"contribute"},{"type":"link","href":"https://github.com/iotaledger/stronghold.rs","label":"GitHub"}]},"docs":{"contribute":{"id":"contribute","title":"Contribute to the project","description":"Contribute to Stronghold by joining the IOTA Stronghold Initiative, reporting a bug or suggesting a new feature in the GitHub repository, or sharing your knowledge on Discord.","sidebar":"mySidebar"},"explanations/concurrency":{"id":"explanations/concurrency","title":"Concurrency in Stronghold","description":"Learn about Stronghold as a concurrent software, the actor model STM with TL2 and RLU.","sidebar":"mySidebar"},"explanations/non-contiguous-data-types":{"id":"explanations/non-contiguous-data-types","title":"Non-Contiguous Data Types and Handling Secrets at Runtime","description":"Handling secrets at runtime with non-contigouos data types.","sidebar":"mySidebar"},"explanations/procedures":{"id":"explanations/procedures","title":"Cryptographic Procedures","description":"Cryptographic procedures","sidebar":"mySidebar"},"explanations/retrospective":{"id":"explanations/retrospective","title":"Stronghold Engine Retrospective Document","description":"History behind the development of the Stronghold Engine library that reflects upon previous revisions and the lessons learnt.","sidebar":"mySidebar"},"explanations/runtime-extensions":{"id":"explanations/runtime-extensions","title":"Runtime Extensions","description":"Runtime extensions","sidebar":"mySidebar"},"getting_started":{"id":"getting_started","title":"Getting Started","description":"Get started with Stronghold. Prerequisites, how to build and use the library.","sidebar":"mySidebar"},"how_tos/cli/create_snapshot":{"id":"how_tos/cli/create_snapshot","title":"Create a Snapshot","description":"Create a new snapshot on the file system, and generate and store a new Ed25519 key inside the desired location","sidebar":"mySidebar"},"how_tos/cli/derive_slip_10":{"id":"how_tos/cli/derive_slip_10","title":"Derive a SLIP10 Private Public Keypair","description":"Derive a new SLIP10 master key with optional size and derive a private/public key pair","sidebar":"mySidebar"},"how_tos/cli/generate_bip39":{"id":"how_tos/cli/generate_bip39","title":"Generate a BIP39 Seed and Mnemonic","description":"Create a new BIP39 seed with an associated mnemonic phrase in the available languages.","sidebar":"mySidebar"},"how_tos/cli/generate_key_pair":{"id":"how_tos/cli/generate_key_pair","title":"Generate an Ed25519 Key Pair","description":"Generate an example ED25519 Key Pair inside an ephemeral vault","sidebar":"mySidebar"},"how_tos/cli/generate_slip_10":{"id":"how_tos/cli/generate_slip_10","title":"Generate a SLIP10 Master Key","description":"Generate a new SLIP10 master key with optional size.","sidebar":"mySidebar"},"how_tos/cli/read_snapshot":{"id":"how_tos/cli/read_snapshot","title":"Read a Snapshot From Filesystem","description":"Read a snapshot from the file system and retrieve the public key from the stored secret Ed25519 key","sidebar":"mySidebar"},"how_tos/cli/recover_seed_with_mnemonic":{"id":"how_tos/cli/recover_seed_with_mnemonic","title":"Recover a BIP39 Seed with a Mnemonic and Optional Passphrase","description":"Recover a BIP39 seed with an associated mnemonic phrase in the available languages.","sidebar":"mySidebar"},"how_tos/cli/running_examples":{"id":"how_tos/cli/running_examples","title":"Running Examples","description":"You can run Stronghold examples using the command line interface from within the client crate.","sidebar":"mySidebar"},"how_tos/cli/store_read_write":{"id":"how_tos/cli/store_read_write","title":"Write To and Read From the Vault","description":"Write a value associated to a key to the vault store, and read it afterwards.","sidebar":"mySidebar"},"reference/overview":{"id":"reference/overview","title":"Overview","description":"IOTA Stronghold is a secure software implementation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks.","sidebar":"mySidebar"},"reference/specs/engineering":{"id":"reference/specs/engineering","title":"Stronghold Engineering Specification","description":"This document introduces the high-level specification of Stronghold.","sidebar":"mySidebar"},"reference/specs/overview":{"id":"reference/specs/overview","title":"Specifications","description":"This section describes the scope of the project and includes working documents on engineering and requirements specifications.","sidebar":"mySidebar"},"reference/specs/requirements":{"id":"reference/specs/requirements","title":"Specification: REQUIREMENTS","description":"[requirements]: #requirements"},"reference/specs/scope":{"id":"reference/specs/scope","title":"Specification: SCOPE","description":"Stronghold is a secure software implementation with the sole purpose of isolating the seed, private keys, personally identifiable information (PII) and policy records from exposure to the genuinely hostile environment of user devices.","sidebar":"mySidebar"},"reference/structure/client":{"id":"reference/structure/client","title":"Structure: Client","description":"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold\'s internal actor system.","sidebar":"mySidebar"},"reference/structure/derive":{"id":"reference/structure/derive","title":"Structure: Derive","description":"The Derive crate contains procedural macros for Stronghold.","sidebar":"mySidebar"},"reference/structure/engine/overview":{"id":"reference/structure/engine/overview","title":"Structure: Engine","description":"Engine is the platform-agnostic collection of low-level modules with which application architects can build higher-level implementations of Strongholds for a variety of purposes.","sidebar":"mySidebar"},"reference/structure/engine/runtime":{"id":"reference/structure/engine/runtime","title":"Structure: Runtime","description":"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.","sidebar":"mySidebar"},"reference/structure/engine/snapshot":{"id":"reference/structure/engine/snapshot","title":"Structure: Engine::Snapshot","description":"The snapshot crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem.","sidebar":"mySidebar"},"reference/structure/engine/store":{"id":"reference/structure/engine/store","title":"Structure: Engine::Store","description":"Store contains a key-value cache for the Stronghold Engine.","sidebar":"mySidebar"},"reference/structure/engine/vault":{"id":"reference/structure/engine/vault","title":"Structure: Engine::Vault","description":"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.","sidebar":"mySidebar"},"reference/structure/overview":{"id":"reference/structure/overview","title":"IOTA Stronghold Structure","description":"In this section we describe individual crates and components of Stronghold.","sidebar":"mySidebar"},"reference/structure/utils":{"id":"reference/structure/utils","title":"Structure: Utils","description":"The Utils crate contains common utilities for the stronghold libraries.","sidebar":"mySidebar"},"welcome":{"id":"welcome","title":"Welcome","description":"Stronghold is an open-source software library which can be used to protect any digital secret. It is a secure database for working with cryptography, which ensures that secrets are never revealed - but can be used according to best practices.","sidebar":"mySidebar"}}}')}}]);