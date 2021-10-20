---
id: smart-contracts-validators
title: Validators
description: In this article you will learn how the IOTA Smart Contract validators works.
keywords:
  - Validator
  - Smart Contracts
  - wasp
  - ISCP
  - Node
---

# Validators

In this article, you will learn how the IOTA Smart Contract validators work.

A validator is a IOTA Smart Contracts Node, which validates incoming messages from other nodes for their correctness. The current node implementation is called Wasp and is written in the programming language Go.

Each chain is run by a committee of validator nodes.
For this reason, the smart contract is a distributed and redundant structure - _a distributed processor_.

## The Committee

The committee of the chain is the main element of security of a smart contract on the chain. The significant characteristics of a committee are the number of participants, the `quorum` factor.

"Off-chain" smart contracts, like in IOTA Smart Contracts, are executed outside of the core protocol. That means, only a subset of validators, the committee, needs to execute the Smart Contracts and a consensus can be reached outside of the core protocol, which results in a scalable and efficiency system.

Each IOTA Smart Contract chain is run under the consensus of its committee, so each chain is a distributed system without a single point of failure.

Only when a supermajority of the validators of a committee reaches consensus the result gets added to the chain. The amount of the validators to reach a consensus is configurable for each chain.

## Further Readings

- You can learn how to set up a Smart Contracts node [here in the Build section](/wasp/guide/chains_and_nodes/running-a-node).
- [Learn here](/wasp/guide/chains_and_nodes/wasp-cli#configuration) how to configurate the committee in the IOTA Smart Contract Node.

In the next article, you will learn everything about the chain, where you can deploy Smart Contracts.
