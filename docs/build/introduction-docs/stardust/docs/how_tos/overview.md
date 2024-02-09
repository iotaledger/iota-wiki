---
description: An overview of the available guides for the Shimmer network that also outlines the changes from IOTA 1.5, aka Chrysalis to Stardust.
image: /img/logo/preview.png
tags:
  - IOTA 1.5
  - stardust
  - changes
  - guides
  - migration
  - developer
  - reference
---

# IOTA Stardust Guides

- [Backup and Security](./backup_security.md).
- [Verify Firefly Shimmer download](./verify_download.md)

## Overall Changes from IOTA 1.5 (Chrysalis) to Stardust in a Nutshell

- Revised output types and extended ledger model that allows tokenization and smart contract anchoring. Read more in
  [TIP-18](https://github.com/iotaledger/tips/pull/38).
- New dust protection mechanism based on virtual byte cost. Read more on [TIP-19](https://github.com/iotaledger/tips/tree/main/tips/TIP-0019).
- Updated transaction structure, furthermore added inputs commitment and network identifier for user protection and security.
  Inputs and outputs of a transaction don't have to be sorted anymore. Read more in [TIP-20](https://github.com/iotaledger/tips/pull/40).
- Tagged Data Payloads replace Indexation Payloads. The former are no longer indexed by the core nodes. Read more in [TIP-23](https://github.com/iotaledger/tips/blob/main/tips/TIP-0023/tip-0023.md).
- Tangle Messages are replaced by Tangle Blocks to align with the terminology of the upcoming IOTA 2.0 protocol. Read more in [TIP-24](https://github.com/iotaledger/tips/pull/55).
- Redesigned Core Node API. Indexing or additional processing logic has been removed and off-loaded to INX applications. Read more in [TIP-25](https://github.com/iotaledger/tips/pull/57).
- Wallets may use the brand new [Indexer API](https://github.com/iotaledger/tips/tree/main/tips/TIP-0026) to query the ledger state.
- Node Event API (MQTT) has been extended to account for the updated ledger models. Read more in [TIP-28](https://github.com/iotaledger/tips/pull/66).
- The Milestone Payload has been redesigned to support fluid protocol and parameter upgrades, Proof-of-Inclusion and much more. Read more in [TIP-29](https://github.com/iotaledger/tips/pull/69)
- Snapshots that hold the copy of the ledger state at a given time have been redesigned. Read more in [TIP-35](https://github.com/iotaledger/tips/pull/76)
- Chronicle has been reimplemented as an INX extension, furthermore it supports the Core Node API [TIP-25](https://github.com/iotaledger/tips/pull/57), but also the
  History API [TIP-36](https://github.com/iotaledger/tips/pull/77)
