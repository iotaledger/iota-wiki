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
For more information, check the official [Website](https://assembly.sc) or the [Assembly Wiki](https://wiki.assembly.com).

# The role of the IOTA Token

So you maybe asked yourself what the role of IOTA is in this Assembly network. Assembly is build on top of the Tangle, it will need the Tangle for anchored state updates, interoperability between chains, for Native Assets and general access to a congested network. So there are basically two main usages of the IOTA Token in Assembly.

## The new dust protection

With the new [dust protection](https://github.com/muXxer/protocol-rfcs/blob/master/text/0032-dust-protection/0032-dust-protection.md), every data stored on the Tangle needs to be backed by IOTA Tokens. So every NFT, SC state update, Native Asset requires IOTA Tokens so that it can be stored on L1. You can also read more about the new dust protection in this [community blog post](https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36).

## Mana

In the future, Mana will be used to give every node a fair share of the Tangle throughput. Mana is directly derived from IOTA Tokens.
So the IOTA Nodes which anchor the Smart Contract state on L1 will need to have Mana (and therefore IOTA tokens) if the network is congested.
