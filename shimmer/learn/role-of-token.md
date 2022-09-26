---
id: role-of-token
title: Role of the Shimmer Token
description: Introduction to the emerging permissionless Smart Contracts network
keywords:
  - smart contracts
  - permissionless
---

With the introduction of ISC(IOTA Smart Contracts) it's important to understand the role of the base token. ISC is build on top of the Tangle, it will need the Tangle for anchored state updates, interoperability between chains, for Native Assets and general access to a congested network. There are two main usages of the base token in ISC and everyting build on top of Shimmer.

## Storage Deposits

With the new [storage deposit](https://github.com/iotaledger/tips/pull/39), all data stored on the Tangle needs to be backed by Shimmer tokens. For example, every NFT, SC chain state anchor or Native Asset requires a deposit of Shimmer tokens in order to be stored on L1. You can read more about the new storage deposit functionality in this [community blog post](https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36) or in [this Wiki article](./dust-protection#new-tokenisation-framework) about the history of the dust protection in IOTA.

## Mana

ISC nodes(Wasp) have to anchor the chain state often, even if the Tangle is congested. To get a fair share of the Tangle throughput in the [next version](https://v2.iota.org) of the IOTA protocol, you will need [Mana](/IOTA-2.0-Research-Specifications/5.3Mana), and Mana is derived directly from the base token. ISC will have to hold base tokens, which will increase demand even more.
