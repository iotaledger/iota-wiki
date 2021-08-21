---
id: an-introduction-to-iota
title: An Introduction to IOTA
description: A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it.
---


# Introduction to IOTA

**This topic describes some main differences between the Tangle and a blockchain.**

Blockchains and the Tangle both fall under the same category of distributed ledger technology (DLT).

The main differences between blockchains and the Tangle are the following:

- In a Blockchain, new transactions can only be attached to a single point (a new block) that follows and is connected to the previous block. This leads to a race and competition for transactions to be part of a new Block.
- In the Tangle, every user is free to attach new transactions on different parts of the Tangle. This allows many transactions to be attached and processed in parallel, which dramatically speeds up the processing of transactions
- A Blockchain must always select a single leader to attach a new Block to the Blockchain. This can lead to the well-known "Miner race," where only the Miner with the highest computational processing power, or Stakers with the highest stake, have a reasonable chance of becoming a Block-Producer and are allowed to attach new Block and to write their transactions to the Ledger. This is also seen as a form of centralization in Blockchains, as you need "middlemen" that process your transactions. Regular users are not allowed to write directly to the Ledger
- IOTA, in comparison, is a leaderless protocol. Everyone is free to attach transactions as long as they are following the basic layout design of the protocol. There is no need to elect a leader as the Tangle can implement new transactions in parallel processing. And therefore, IOTA removed the middlemen entirely from the protocol. This is one of the reasons why IOTA can reach a very high transaction throughput and also remains absolutely feeless.

To explain these points, you need to understand the differences between the data structures and the consensus mechanisms in these DLTs.

## **The blockchain data structure**

The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages.
As a result, Validators can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck.

**Blockchain bottleneck**

![blockchain-bottleneck](/img/learn/blockchain-bottleneck.gif)

All transactions in a Blockchain have to wait until they are included in a Block. Due to limitations in Blocksize and Block Production time, this creates congestion and waiting times for transactions.




## **The Tangle data structure**

The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones.
Rather than being limited to a single place for attaching new messages, you can attach messages in different places at the front of the Tangle. The protocol is able to process these various attachments in parallel.

**Tangle bottleneck**

![tangle-bottleneck](/img/learn/tangle-bottleneck.gif)

Allowing parallel processing removes congestion.



## **Consensus in a blockchain**

In blockchains, the network participants are split into validators (Miners, Stackers) and users. 
Miners consume large amounts of computing power to complete the proof of work (PoW) required to chain the blocks together. 
Miners and Stakers are incentivized to validate messages and do PoW because of the following:

The fees that users are willing to pay to have their messages included in a block

The reward that the network gives to Miners for producing the Block faster than other Miners.
The only way to reverse messages in a POW Blockchain is to mine a new blockchain in the same amount of time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW, known as hash power.
As a result, requiring validators to do PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is.

Producing Blocks as a Stacker in Proof of Stake Blockchain usually requires the staker to own vast amounts of staked tokens. Often only a few selected or fixed Validators are granted to be "Block - Producers". These entities are either pre-defined by the creators of the protocol (a form of centralization), or emerge as validators holding the most significant stake of tokens. Proof of Stake Blockchains do not require enormous amounts of energy wasted for PoW, but therefore only allow the wealthiest participants to write to the Ledger and produce new blocks. 

## **Consensus in the Tangle**

In the Tangle, messages require no fees because the network has no miners or stakers.
In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages.
To reach a consensus, all IOTA nodes validate messages and use different functions alongside messages in their confirmation.
Currently, messages will only be considered valid if they have a reference to a milestone. These milestones are issued by a special network node - the Coordinator.

## **The coordinator**

The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed.

 - The Coordinator is temporary. We will transition into removing the Coordinator: Coordicide in the upcoming IOTA 2.0 network. Below is how the Coordinator is currently deployed within IOTA.

Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes recognizing the milestones, all nodes that participate in the same IOTA network are configured with the Merkle root address of a Coordinator that they trust to confirm messages. Using this address, nodes can validate the signatures in milestones to verify whether the trusted Coordinator signs them.

To make sure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones at regular intervals. This way, nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.

![coordinator](/img/learn/milestones.gif)
