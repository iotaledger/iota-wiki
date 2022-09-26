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

A validator is an IOTA Smart Contracts Node, which verifies the correctness of incoming messages from other nodes. The current node implementation is called Wasp and is written in Go. Each validator contains a copy of the whole chain. This redundancy makes the contract chain also a distributed database.

Each contract chain is run by a fixed committee of validator nodes. For this reason, each contract chain is a distributed and redundant structure - **a distributed processor**.

## The Committee

A committee is a Smart Contracts chain's main element of security. One of the most significant characteristics of a committee is the number of participants, the `quorum` factor.

"Off-chain" smart contracts, like in IOTA Smart Contracts, are executed outside of the core protocol. That means that only a subset of validators, the committee, needs to execute the Smart Contracts and a consensus can be reached outside of the core protocol, which results in a scalable and efficient system.

Each IOTA Smart Contract chain is run under the consensus of its committee, so each chain is a distributed system without a single point of failure.

Only when a supermajority of the validators of a committee reaches consensus, the result gets added to the chain. The amount of the validators to reach a consensus is configurable for each chain.

The committee itself can also be variable in size - from a few nodes up to hundreds of nodes, and each node can be part of many different committees.

## Selection and Rotation of Committees

The process of selecting nodes to form a committee must be approached manually. This flexibility allows for different models suited to different use cases: selection can be based on an open market of nodes, it can be the decision of a consortium of interested parties, or indeed of a single entity.

The committee running the contract chain can be changed (rotated) to a new committee with another set of private keys and another address.

## Further Readings

- You can learn how to set up a Smart Contracts node in the [Build section](/smart-contracts/guide/chains_and_nodes/running-a-node).
- [Learn how to configure a committee](/smart-contracts/guide/chains_and_nodes/wasp-cli#configuration)
- [Participate in the network running a Smart Contracts node](/smart-contracts/guide/chains_and_nodes/running-a-node)
- [Build a network with trusted Smart Contract nodes](/smart-contracts/guide/chains_and_nodes/setting-up-a-chain#trust-setup)

In the next article, you will learn everything about the chain, where you can deploy Smart Contracts.
