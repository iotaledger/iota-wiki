---
id: tangle
title: The Tangle
description: The Tangle is the data structure behind Shimmer that contains all information about token ownership.
image: /img/iota-wiki.png
keywords:
  - explanation
  - shimmer
---

# The Tangle

The Tangle is a data structure that is replicated across a network of computers (also called 'nodes') that contains all the information necessary to track token ownership. It forms a directed acyclic graph of blocks (a block-DAG), where each newer block is attached to multiple older ones.

Shimmer nodes currently reach consensus on the ledger state with the help of milestone blocks (also called 'milestones'). Milestones are issued by a central node called the [Coordinator](./coordinator.md). The Coordinator represents a temporary solution and will be eliminated as part of Shimmer's decentralization efforts.

## The Tangle Versus Blockchains

While the Tangle and blockchains have the same function of maintaining their ledger state, the Tangle overcomes the difficulties blockchains face.
The Tangle naturally succeeds the blockchain as its next evolutionary step as it offers features suited to establish more efficient and scalable distributed ledger solutions.

This section refers to the most recent "Tangle" research findings:

- [Tangle 2.0 Leaderless Nakamoto Consensus on the Heaviest DAG](https://arxiv.org/abs/2205.02177)
- [Reality-Based UTXO Ledger](https://arxiv.org/abs/2205.01345)
- [Robustness Of The Tangle 2.0 Consensus](https://arxiv.org/abs/2208.08254)

### Blockchains

A blockchain consists of a growing list of records also called blocks that are linked together using cryptography.
Transactions can only become part of the ledger if they are included in a newly issued block.
In the case that not all new transactions fit into one block, some of them have to be postponed to the next block or later.
Also, typically, block producers favor to include transactions from users willing to pay higher fees.
Accelerating block creation and/or increasing block sizes doesn't solve the issues, as it is well known that this would compromise safety. In other words, to guarantee the security of the system, the throughput of the system must be artificially suppressed so that each block propagates fully before the next block is created.

![An animation of a blockchain where new transactions have to pass through a narrow gap one by one.](/img/learn/blockchain-bottleneck.gif 'Click to see the full-sized image.')

_The blockchain bottleneck._

The fact that only one block producer can advance the ledger state does not only create a bottleneck with well-known performance limitations, but also causes other block candidates that do not win the race to be discarded - and in the case of PoW systems, all the effort and electricity put into their calculation might be wasted.

Blockchains further face several problems with the intermediary miners or validators e.g. mining races, centralisation, miner extractable value, and negative externalities.

### The Tangle

The Tangle describes a novel leaderless, probabilistic consensus protocol that enables parallel validation of transactions without requiring total ordering. It also enables the elimination of intermediary miners and validators.
The parallelization, the absence of intermediaries, the capability to work in an asynchronous setting and the leaderless approach offers a highly performant consensus and ledger solution.

![An animation of the Tangle where the passage is much wider and allows multiple transactions at a time.](/img/learn/tangle-bottleneck.gif)

_Allowing parallel processing removes congestion._
