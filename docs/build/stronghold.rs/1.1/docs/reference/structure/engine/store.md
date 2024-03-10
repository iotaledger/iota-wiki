---
description: Store contains a key-value cache for the Stronghold Engine.
image: /img/logo/Stronghold_icon.png
tags:
  - reference
  - rust
  - store
  - key:value
  - data
---

# Structure: Engine::Store

[![github](https://img.shields.io/badge/github-source-blue.svg)](https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/store) [![github](https://img.shields.io/badge/rust-docs-green.svg)](https://docs.rs/stronghold_engine/latest/engine/store/index.html) [![](https://img.shields.io/crates/v/stronghold-engine.svg)](https://crates.io/crates/stronghold-engine)

## Stronghold Store

This crate contains a key/value cache for the Stronghold Engine. Data is stored in key-value pairs and an expiration timestamp can be set. The data is stored in a structured format and can be quickly retrieved at will. Along with the Vault, this crate is used to store general unencrypted data. The data is written into the snapshot like with the vault in an encrypted format.
