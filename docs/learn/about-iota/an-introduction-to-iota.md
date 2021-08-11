---
id: an-introduction-to-iota
title: An Introduction to IOTA
description: A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it.
---


# Introduction to IOTA

**This topic describes some main differences between the Tangle and a blockchain.**

Blockchains and the Tangle both fall under the same category of distributed ledger technology (DLT).

The two main differences between blockchains and the Tangle are the following:

* - The Tangle has no message fees
* - IOTA networks have no miners

To explain these points, you need to understand the differences between the data structures and the consensus mechanisms in these DLTs.

## **The blockchain data structure**

The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages.
As a result, you can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck.

**Blockchain bottleneck**

![blockchain-bottleneck](/img/learn/blockchain-bottleneck.gif)




## **The Tangle data structure**

The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones.
Rather than being limited to a single place for attaching new messages, you can attach messages anywhere in the Tangle, which removes the limit on confirmation times.

**Tangle bottleneck**

![tangle-bottleneck](/img/learn/tangle-bottleneck.gif)



## **Consensus in a blockchain**

In blockchains, the network is split into miners and users. Miners consume large amounts of computing power to complete the proof of work (PoW) required to chain the blocks together.
Miners are incentivized to validate messages and do PoW because of the following:
The fees that users are willing to pay to have their messages included in a block
The reward that the network gives them for mining the block before other miners
The only way to reverse messages in a blockchain is to mine a new blockchain in the time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW known as hash power.
As a result, requiring PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is.

## **Consensus in the Tangle**

In the Tangle, messages require no fees because the network has no miners.
In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages.
To reach a consensus, all IOTA nodes validate messages and use different functions alongside messages in their confirmation.
Currently messages will only be considered valid if they have a reference to a milestone. These milestones are issued by a special network node - the Coordinator.

## **The coordinator**

**The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed.**

 - The Coordinator is temporary. We will transition into removing the Coordinator: Coordicide in the upcoming IOTA 2.0 network. Below is how the Coordinator is currently employed within IOTA.

Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that has been validated by nodes.

To allow them to recognize milestones, all nodes in the same IOTA network are configured with the Merkle root address of a Coordinator that they trust to confirm messages. Using this address, nodes can validate the signatures in milestones to verify whether they are signed by their trusted Coordinator.

To make sure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones at regular intervals. This way, nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.

![coordinator](/img/learn/milestones.gif)
