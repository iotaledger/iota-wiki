---
id: maintenance
description: What it actually takes to run the Shimmer network.
image: /img/iota-wiki.png
keywords:
  - explanation
  - shimmer
  - proof of work
  - node incentives
  - storage deposit
---

# Maintaining Shimmer

At its core, Shimmer needs few resources to run. To make a transaction, you need to cryptographically sign a short data sequence and send it to a node to turn it into a block and propagate the block through the network. When another node receives that block, it runs it through a series of simple checks, like verifying the signatures and checking what blocks it refers to and adds a new entry to its database of blocks. An [average personal computer](https://wiki.iota.org/hornet/getting_started#recommended-requirements) is enough to run a Shimmer node.

## Incentives

Fundamentally, Shimmer regulates only the communication between its nodes, not the nodes and the end users, and a random node has no incentives to take your transaction into work. Public nodes process strangers' transactions out of good spirit, but they can always go offline or put your transaction to the very end of the queue. If you need a reliable connection to the Tangle, the only way to get it is to run your own Shimmer node.

If you are a casual user and make one or two daily transactions, this would not be enough to convince you: if your transaction does not come through, you can wait for another few seconds or try a different node. But suppose you run a local business that accepts payments in $SMR tokens, a cryptocurrency exchange, or a smart contract chain. In that case, you need your Shimmer connection as reliable as possible, and you will run your own node.

You can read more about incentives in this [blog post](https://blog.iota.org/incentives-to-run-an-iota-node/).

## Deterrents

Even though Shimmer is lightweight, malicious actors could still possibly misuse its resources to cause the network slowdown or denial of the service. For that, Shimmer has to introduce additional limitations on its usage to keep it fair for everyone.

### Storage Deposit

Each unspent output has to be stored on every node's hardware. For example, a basic output would store the number of tokens and their owner's address. Without limitations, someone could split his tokens into millions of outputs or create an NFT output with extremely long metadata. To solve this issue, the available data storage is allocated in proportion to the $SMR tokens tied to the output. This is called _storage deposit_, and if a newly created output has too few $SMR tokens to cover the output's size, its containing block will be rejected by the network's nodes. These measures keep the ledger's database size under XXX GB.

### Proof of Work

A node could start issuing so many blocks that it would clog the network. To prevent this, the Shimmer network requires the issuing node to perform some empty work. It affects only a single node and not the rest of the network, and it distributes the throughput of the network fairly between all its nodes.
