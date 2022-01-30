---
id: role-of-iota
title: Role of the IOTA Token
description: Introduction to the emerging permissionless Smart Contracts network
keywords:
  - smart contracts
  - permissionless
  - ASMB
---

With the introduction of [Assembly](./assembly) it's important to understand the role of the IOTA token. Assembly is build on top of the Tangle, it will need the Tangle for anchored state updates, interoperability between chains, for Native Assets and general access to a congested network. There are two main usages of the IOTA token in Assembly and everyting build on top of IOTA.

## The new dust protection

With the new [dust protection](https://github.com/iotaledger/tips/pull/39), all data stored on the Tangle needs to be backed by IOTA tokens. For example, every NFT, SC chain state anchor or Native Asset requires a deposit of IOTA tokens in order to be stored on L1. You can read more about the new dust protection in this [community blog post](https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36) or in [this Wiki article](./dust-protection#new-tokenisation-framework) about the history of the dust protection in IOTA.

## Mana

Assembly nodes have to anchor the chain state often, even if the Tangle is congested. To get a fair share of the Tangle throughput in the [next version](https://v2.iota.org) of the IOTA protocol, you will need [Mana](/IOTA-2.0-Research-Specifications/5.3Mana), and Mana is derived directly from the IOTA token. Assembly nodes will have to hold IOTA tokens, which will increase demand even more.
