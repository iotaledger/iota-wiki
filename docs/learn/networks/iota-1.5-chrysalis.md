---
title: IOTA 1.5 Chrysalis
description: The current Mainnet implementation where all IOTA transactions and
  use cases happen.
---

# IOTA 1.5 Chrysalis

## Vision

The IOTA Foundation is well on the way to realizing its core goal of a decentralized IOTA mainnet. Considerable progress has been made in basic research on removing the coordinator: this is referred to as "Coordicide". Some Coordicide modules have already been added to the IOTA mainnet, including autopeering and object storage. Before the Coordicide can be completed, the IOTA mainnet had to be further optimized to provide a business-compatible solution for the ecosystem.

This intermediate update ran under the project name "Chrysalis". A chrysalis is a shape that a caterpillar takes before it emerges from its cocoon as a fully developed moth or butterfly. In the context of IOTA, Chrysalis stands for the transformation of the mainnet into a mature form to bring IOTA to production readiness.

To describe the status of the network more concisely, it is also marked as IOTA 1.5. Anyone can start building projects on the Tangle without worrying about the need for major refactoring regarding the final network migration. There will be no significant changes on the way to IOTA 2.0 (Coordicide), as the majority of the code base including tools, libraries, and APIs is already available.

## Launch

Chrysalis is the most significant update in IOTA's history; it covers all aspects of the protocol, libraries, wallets, and software implementations developed by the IOTA Foundation. The update of the Tangle fixes technical problems and inefficiencies and implements further improvements in terms of performance and security. Exotic aspects of the protocol have been replaced by established standards and a wealth of new tools have been made available to developers, businesses, and exchanges.

The first major milestone was achieved with the deployment of Chrysalis Phase One in August 2020. This update included a set of components improving the reliability, performance, and usability of the IOTA network.

The first phase of Chrysalis resulted in:

- Transaction confirmation times of around 10 seconds
- Reduction of the need to reattach transactions to the Tangle
- A significant increase in TPS (transactions per second)
- Performance and reliability improvements for the nodes

Since April 2021 the complete Chrysalis Network is finally live. It is supposed to give the Tangle a noticeable performance boost and it simplifies handling for developers and interested companies enormously. All users should be able to benefit from several new features through the new version. In addition to the improved performance of the Tangle, a lot has changed, especially in the area of account management.

The second phase of Chrysalis consisted of:

- Reusable addresses and support for standard cryptography (EdDSA)
- A simplified transaction layout and a reduction in transaction size, which leads to an increase in performance and efficiency
- Significant improvements in the usability and reliability of IOTA
- A change from the account model to a UTXO-based model

## Migration

The legacy network is still operational to guarantee the migration of IOTA tokens at any time before Coordicide. It is no longer possible to transfer funds in the old network.

Please refer to [this blog post](https://blog.iota.org/chrysalis-migration-process/) for more details about the migration of IOTA tokens. Tokens held on exchanges will be migrated by the respective exchanges on behalf of their customers.

All users maintaining a node in the new or the legacy network can upgrade their systems using the latest releases on GitHub:

- [**Chrysalis Hornet**](https://github.com/gohornet/hornet)
- [**Chrysalis Bee**](https://github.com/iotaledger/bee)
- [**Legacy Hornet**](https://github.com/gohornet/hornet/releases/tag/v0.5.8)

---


## Useful Links

- [**chrysalis.iota.org**](https://chrysalis.iota.org/) - Official Chrysalis Status Page
- [**blog.iota.org/iota-chrysalis-a-new-dawn**](https://blog.iota.org/iota-chrysalis-a-new-dawn/) - Blog post Announcement to Chrysalis
