---
description: The snapshot crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem.
image: /img/logo/Stronghold_icon.png
tags:
  - reference
  - rust
  - crate
  - magic bytes
  - offline storage
---

# Structure: Engine::Snapshot

[![github](https://img.shields.io/badge/github-source-blue.svg)](https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/snapshot) [![github](https://img.shields.io/badge/rust-docs-green.svg)](https://docs.rs/stronghold_engine/latest/engine/snapshot/index.html) [![](https://img.shields.io/crates/v/stronghold-engine.svg)](https://crates.io/crates/stronghold-engine)

## Stronghold Snapshot

This crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem.

The snapshot format follows a fairly simple specification:

|  **Header**   |
| :-----------: |
|  Magic Bytes  |
| Version Bytes |
|   **Body**    |
| Ephemeral Key |
| xchacha20 tag |
|  Cipher Text  |

The format has a header with version and magic bytes to appease applications wishing to provide file-type detection.

The body format has a ephemeral public key followed by the xchacha20 tag and the cipher text.

The data stored within a snapshot is considered opaque and uses 256 bit keys. It provides recommended ways to derive the snapshot encryption key from a user provided password. The format also allows using an authenticated data bytestring to further protect the offline snapshot files (one might consider using a secondary user password strengthened by an HSM).

The current version of the format is using X25519 together with an ephemeral key to derive a shared key for the symmetric XChaCha20 cipher and uses the Poly1305 message authentication algorithm. Future versions, when the demands for larger snapshot sizes and/or random access is desired, might consider encrypting smaller chunks (B-trees?) or similar using per chunk derived ephemeral keys.
