---
id: tangle
title: The Tangle
description: The Tangle is the data structure behind IOTA and it is different from a blockchain.
image: /img/iota-wiki.png
keywords:
- explanation
---

# The Tangle

The Tangle is a structure that holds all necessary information to keep track of token ownership. It is a directed acyclic graph (DAG) of messages, where each newer message is attached to two to eight older ones. The protocol can process these various attachments in parallel.

IOTA nodes reach consensus on the ledger state by validating massages. Anyone can send a message [for free](./why-is-iota-feeless.md). Currently, messages will only be considered valid if they reference a milestone. Milestones are issued by a special network node that is called [Coordinator](./coordinator.md).

## The Tangle Versus Blockchains

The Tangle and blockchains serve the same function of maintaining their ledger states, but the Tangle's different implementation leads to unique benefits.

### Blockchains

In a blockchain, new transactions can only be attached to a single point, a new block. This block is directly linked to the previous block, so the network can work only on a single block at a time. You need to wait until a new block with your transaction is formed, and if there are too many transactions some of them will be postponed until the next block or later. This is called the *blockchain bottleneck* effect.

![An animation of a blockchain where new transactions have to pass through a narrow gap one by one.](/img/learn/blockchain-bottleneck.gif "Click to see the full-sized image.")

*The blockchain bottleneck.*

Transactions in a blockchain can only become part of the ledger if they are included in a newly issued block by the block producer (a miner in Proof of Work blockchains, a staker in Proof of Stake blockchains). In nearly all blockchains, the block producers can decide which new transactions they include in their blocks. They of course favor users willing to pay higher fees for their transactions. Any time there are more transactions that can pass through the blockchain bottleneck, the transaction fees ramp up.

There is more. In blockchains, each block producer works on a potential new block, but only a single producer will become the leader of the blockchain and get its block attached. All other potential blocks will be discarded — and in case of PoW systems, all effort and electricity put into computing them will be wasted. 

Only the blockchain leader collects the reward for producing a block. Only the largest miners and stakers can collect this reward consistently. It promotes a system with fewer but bigger players, which can be perceived as a form of centralization.

### The Tangle

The Tangle is a network of parallel processed transactions. These parallel transactions form the "front" of the Tangle and offer multiple points for newly issued transactions to attach to. There are no block producers, and it is enough to issue your transaction to any node to imprint into the Tangle.

IOTA is a leaderless protocol. Multiple nodes attach multiple transactions to multiple points of the Tangle at the same time. IOTA has no bottlenecks, no middlemen, and no fees.

![An animation of the Tangle where the passage is much wider and allows multiple transactions at a time.](/img/learn/tangle-bottleneck.gif)

*Allowing parallel processing removes congestion.*