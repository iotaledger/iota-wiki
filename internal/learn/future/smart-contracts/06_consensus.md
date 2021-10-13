---
id: smart-contracts-consensus
title: Consensus
description: In this article you will learn how the IOTA Smart Contract Consensus works.
keywords:
  - Cosensus
  - Smart Contracts
  - wasp
  - ISCP
---

## 🏗 Work in Progress

In this article you will learn how the IOTA Smart Contract Consensus works.

Verification means re-running the program ourselves whenever we need to determine if we trust the state of the smart contract. This is not practical. Instead, to make the state transition trustworthy, we need to make the processor which runs the SC Program trustworthy.

This is the reason smart contracts are run by a distributed processor. The term “distributed processor” refers to many processors performing the same calculations and coming to a consensus on the result of these computations. This consensus is reflected in the next block which updates the state of the chain.

It may be that the whole network is that distributed processor, as is the case in Ethereum.
In IOTA Smart Contractswe are using a quorum majority voting in the ‘BFT’ setting, to determine the consensus arrived at by the committee of different processors.
