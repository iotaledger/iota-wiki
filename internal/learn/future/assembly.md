---
id: assembly
title: Assembly
description: Introduction to the emerging permissionless Smart Contracts network
keywords:
  - smart contracts
  - permissionless
  - ASMB
---

![Assembly](/img/learn/future/assembly.png 'Click to see the full-size image.')

In December 2021, IOTA Foundation [introduced](https://blog.assembly.sc/announcing-assembly-and-the-asmb-token/) Assembly, a permissionless Smart Contracts network. Assembly will function as an intermediate layer for permissionless and interoperable Smart Contracts, and will have its own token called [ASMB](https://assembly.sc/token).
For more information, check the official [Website](https://assembly.sc) or the [Assembly Wiki](https://wiki.assembly.sc).

# The role of the IOTA Token

Assembly is build on top of the Tangle, it will need the Tangle for anchored state updates, interoperability between chains, for Native Assets and general access to a congested network. There are two main usages of the IOTA Token in Assembly.

## The new dust protection

With the new [dust protection](https://github.com/iotaledger/tips/pull/39), every data stored on the Tangle needs to be backed by IOTA Tokens. So every NFT, SC state update, Native Asset requires IOTA Tokens so that it can be stored on L1. You can read more about the new dust protection in this [community blog post](https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36).

## Mana

Assembly nodes have to anchor the chain state often, even if the Tangle is congested. To get a fair share of the Tangle throughput in the [next version](https://v2.iota.org) of the IOTA protocol, you will need [Mana](/IOTA-2.0-Research-Specifications/5.3Mana), and Mana is derived directly from the IOTA Token. Assembly nodes will have to hold IOTA tokens, which will create even more demand.
