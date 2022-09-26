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

In this article, you will learn how the IOTA Smart Contract Consensus works.

IOTA Smart Contracts is a sharded smart contract network, where each smart contract chain is limited by its own scalability and is not hindered by the rest of the network.

The committee is of fixed size, thus we use a Byzantine Fault Tolerant (BFT) Algorithm, which guarantees consistency and byzantine fault tolerance if less than ⅓ of nodes are malicious. So the verification process runs on Nodes within a chain committee.

## Distributed Processor

Verification means re-running the program yourself whenever you need to determine if you trust the state of the smart contract. Instead, to make the state transition trustworthy, the processor which runs the SC Program needs to be trustworthy.

This is the reason smart contracts are run by a distributed processor. The term “distributed processor” refers to many processors performing the same calculations and coming to a consensus on the result of these computations. This consensus is reflected in the next block which updates the state of the chain.

In the case of Ethereum, the whole network is that distributed processor.
IOTA Smart Contracts use a quorum majority voting in the `BFT` setting to determine the consensus arrived at by the committee of different processors.

It should only be possible to produce valid signatures of inputs of
the anchor transaction by reaching the quorum in the committee of nodes. In this case, a confirmed anchor transaction
becomes a cryptographical proof of consensus in the committee.

## BLS Threshold Signatures

IOTA Smart Contracts use BLS cryptography and threshold signatures in combination with
polynomial (Shamir) secret sharing to achieve the requirement above.
In short, IOTA Smart Contracts use BLS addresses as state addresses (controlling addresses) of the chain account
where the state of the chain is locked. The secret sharing and threshold signatures allow for
control of the address by any T out of N secret keys (partial private keys), where N is the size of
the committee and T is a quorum factor.

The “control of the address” means the ability to produce a valid signature of the transaction to
the corresponding address. In threshold signatures the valid (master) signature can be
reconstructed from any T out of N partial signatures. There is no need for all N of them and
there is no need to know the master private key in order to reconstruct a valid signature. Each
partial signature is a signature by one out of N of secret keys, while each of those secret keys is
known only to the corresponding committee node.

IOTA Smart Contracts use the Dedis Kyber library in the implementation of Wasp. Goshimmer has BLS addresses implemented at its core. This means that BLS addresses are conventional addresses and BLS
signatures in transactions can be validated by the IOTA node just like any other type of
signature.

---

- Learn more about consensus in the [IOTA Smart Contracts Architecture description](https://github.com/iotaledger/wasp/blob/master/documentation/ISC_WP_Nov_10_2021.pdf).
- Participate and use the [preconfigured development Docker setup](/smart-contracts/guide/development_tools/docker_preconfigured).
- Build a decentralized application with the [Schema Tool](/smart-contracts/guide/schema).
