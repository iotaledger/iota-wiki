---
id: an-introduction-to-iota
title: An Introduction to IOTA
description: A basic introduction to the IOTA DLT Technology. The use-cases and
  the Ecosystem developed around it.
---

# An Introduction to IOTA

**This topic gives a brief overview and describes some of the main differences between IOTA's Tangle and a blockchain.**

Blockchains and the Tangle both fall under the same category of distributed ledger technology (DLT).

The main differences between blockchains and the Tangle are the following:

- In a blockchain, new transactions can only be attached to a single point (a new block). This block follows a previously produced block and is directly cryptographically linked to this previous block. Transactions in a blockchain can only become part of the ledger (the record of balances and accounts) if they are included in a newly issued block by the block producers (miners in PoW blockchains, stakers in PoS blockchains). In nearly all blockchains, the block producers can decide which new transactions they prefer to include and confirm in the blocks they produce. This leads to competition between the freshly issued transactions to become part of a new block. The fee-based incentivized structure of those blockchains favors users willing to pay a higher fee for transactions as they more likely included in the new block than those offering a lower fee.
- In the Tangle, there are no block producers, and therefore every user is free to issue new transactions and attach them to different Tangle parts without an entity acting as a middleman. The Tangle is not a single chain of blocks that follow each other. It is a network of parallel processed transactions (so-called Tips). These parallel transactions form the "front" of the Tangle and offer many different points for newly issued transactions to be attached, which dramatically speeds up the processing of transactions. Every node in the network is free to attach new transactions to the network at any time. No entity is needed to decide when and if those transactions get included. As long as they follow the basic rules of the protocol (valid signatures / no double spending of funds) those transactions will become part of the ledger by just issuing them to a node.
- Opposite that, a blockchain transaction must be included in a block by a block producer. These are entities that collect newly issued transactions, validate them, and include them in the next block. A blockchain must always select a single leader as a block producer to attach a new block to the blockchain. Only this single block producer will earn all the fees of the transactions that are part of the issued block and earn the reward (in the form of newly created tokens) for producing the block. This is also seen as a form of centralization in blockchains, as you need middlemen that process your transactions. Regular users are not allowed to write directly to the ledger. That leads to the well-known "miner race," where only the miner with the highest computational processing power, or stakers with the highest stake, have a reasonable chance of becoming a block producer and are allowed to attach a new block including their processed transactions to the ledger. All the electricity used by the other miners in this race of solving the cryptographic puzzle needed to fulfill the proof-of-work (PoW) requirements while producing the current block has been wasted, as their attempted blocks are never becoming part of the blockchain.
- IOTA, in contrast, is a leaderless protocol. It does not require any middlemen to include transactions into the Tangle. Everyone is free to attach transactions as long as they are following the basic layout design of the protocol. There is no need to elect a leader as the Tangle is capable of implementing new transactions in parallel processing. IOTA is therefore a multi-threaded ledger. This is one of the reasons why IOTA can reach a very high transaction throughput and remains feeless.

To explain these points, you need to understand the differences between the data structures and the consensus mechanisms in these DLTs.

**Blockchain vs. Tangle**

![layer1-tangle](/img/learn/layer1-tangle.png)

## The blockchain data structure

The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages. As a result, Validators can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck.

**Blockchain bottleneck**

![blockchain-bottleneck](/img/learn/blockchain-bottleneck.gif)

All transactions in a blockchain have to wait until they are included in a block. Due to block size and block production time limitations, this creates congestion and waiting times for transactions.

## The Tangle data structure

The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones. Rather than being limited to a single place for attaching new messages, you can attach messages in different places at the front of the Tangle. The protocol can process these various attachments in parallel.

**Tangle bottleneck**

![tangle-bottleneck](/img/learn/tangle-bottleneck.gif)

Allowing parallel processing removes congestion.

## Consensus in a blockchain

In blockchains, the network participants are divided into validators (miners, stakers) and users. Miners consume large amounts of computing power to complete the proof-of-work required to chain the blocks together. Miners and stakers are incentivized to validate messages because of the following:

- The fees that users are willing to pay to have their messages included in a block
- The reward that the network pays out in the form of freshly created tokens to the validators for producing the new block.

The only way to reverse messages in a PoW blockchain is to mine a new blockchain in the same amount of time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW, known as hash power. As a result, requiring validators to do PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is.

Producing blocks in a proof-of-stake (PoS) Blockchain usually requires a staker to own vast amounts of staked tokens. Often only a few selected or fixed Validators are granted the ability to be block producers. These entities are pre-defined by the protocol's creators (a form of centralization) or emerge as validators holding the most significant stake of tokens. PoS blockchains do not require enormous amounts of energy wasted for PoW, but therefore only allow the wealthiest participants to write to the ledger and produce new blocks.

## Consensus in the Tangle

Sending messages requires no fees in the Tangle because the network has no miners or stakers. In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages. All IOTA nodes validate messages and use different functions alongside messages in their confirmation to reach consensus. Currently, messages will only be considered valid if they reference a milestone. These milestones are issued by a special network node – the Coordinator.

## The Coordinator

The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed.

The Coordinator is a temporary solution. IOTA will remove the Coordinator in the upcoming IOTA 2.0 network. The following text describes how the Coordinator is currently deployed within IOTA.

Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes to recognize valid milestones, all nodes that participate in the same IOTA network are configured with the Ed25519 signatures of a coordinator they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them.

To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.

![coordinator](/img/learn/milestones.gif)
