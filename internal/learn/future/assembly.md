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
This introduction should only give you a brief overview of Assembly. For more information, check the official [Website](https://assembly.sc) or the [Assembly Wiki](https://wiki.assembly.com).

## What is Assembly?

Assembly is basically a permissionless ISCP network build on top of IOTA. It fully leverages and depends on the features of its IOTA base layer. All Smart Contract chains can directly communicate with each other over Assembly and also share Native Assets over the IOTA network.

## Permissionless Smart Contracts

Assembly is IOTAs approach to permissionless Smart Contracts. For that, the root chain got introduced. The root chain is basically the backbone of Assembly. It distributes validators to the different chains and slashes staked funds in case of misbehavior. You as a chain creator can choose your validators based on different criteria. Those validators can then join your chain if they want to.

## The role of the IOTA Token

So you maybe asked yourself what the role of IOTA is in this Assembly network. As already briefly explained above, Assembly is build on top of IOTA. It will need the IOTA Token for interoperability between chains, for Native Assets and general access to a congested network. So there are basically two main usages of the IOTA Token in Assembly.

### The new dust protection

With the new [dust protection](https://github.com/muXxer/protocol-rfcs/blob/master/text/0032-dust-protection/0032-dust-protection.md), every data stored on the Tangle needs to be backed by IOTA Tokens. So every NFT, SC state update, Native Asset requires IOTA Tokens so that it can be stored on L1. You can also read more about the new dust protection in this [community blog post](https://medium.com/@wernerderchamp/dust-protection-on-the-iota-network-an-eli12-d8ca567a2d36).

### Mana

In the future, Mana will be used to give every node a fair share of the Tangle throughput. Mana is directly derived from IOTA Tokens.
So the IOTA Nodes which anchor the Smart Contract state on L1 will need to have Mana (and therefore IOTA tokens) if the network is congested.
