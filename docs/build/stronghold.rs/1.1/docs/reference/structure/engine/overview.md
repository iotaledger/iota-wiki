---
description: Engine is the platform-agnostic collection of low-level modules with which application architects can build higher-level implementations of Strongholds for a variety of purposes.
image: /img/logo/Stronghold_icon.png
tags:
  - reference
  - snapshot
  - vault
  - store
  - runtime
---

# Structure: Engine

[![github](https://img.shields.io/badge/github-source-blue.svg)](https://github.com/iotaledger/stronghold.rs/tree/dev/engine) [![github](https://img.shields.io/badge/rust-docs-green.svg)](https://docs.rs/stronghold-engine) [![](https://img.shields.io/crates/v/stronghold-engine.svg)](https://crates.io/crates/stronghold-engine)

## Engine

Engine is the collection of low-level module with which application architects can build higher-level implementations of Strongholds for a variety of purposes. It is platform agnostic, in that it should run anywhere a Rust Compiler will work.

It is composed of 4 primary module:

- snapshot
- vault
- store
- runtime

### Snapshot

The snapshot protocol follows a fairly simple transparent pattern. Each Snapshot file follows a simple structure:

|  **Header**   |
| :-----------: |
|  Magic Bytes  |
| Version Bytes |
|   **Body**    |
| Ephemeral Key |
| xchacha20 tag |
|  Cipher Text  |
