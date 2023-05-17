---
title: Data and Value Transfer
description: Learn how the Shimmer Protocol transfers the native Shimmer Tokens.
image: /img/iota-wiki.png
keywords:
  - explanation
  - data transfer
  - value transfer
  - transactions
  - outputs
  - blocks
---

# Shimmer Value Transactions

![Shimmer Value Transactions](/img/Banner/banner_value_transfer.svg)

This page explains how Shimmer tokens are sent and received in the Shimmer network with references to more detailed content.

## Simple Example

To explain how Shimmer tokens are transferred from one address to another, this topic follows three characters: Alice, Bob, and Charlie.

### The Goal

Charlie wants to transfer 10 SMR to Bob.

### Choosing Where to Attach Messages

To transfer 10 SMR to Bob, Charlie must attach a value block to the Tangle. For that, he needs between one and eight tip blocks that he can attach to his block.

To get these tip blocks, Charlie requests them from a node.

The node selects these blocks by using an algorithm called **Uniform Random Tip Selection** [URTS](/tips/tips/TIP-0003). This algorithm selects between one and eight valid tips that lead to a valid ledger state.

- The ledger state is a record of all the value blocks that have transferred Shimmer tokens in the Tangle, including the state of all balances on addresses. This state must always be balanced: the total number of Shimmer tokens must always add to the total supply.

:::tip Send Data

The Stardust protocol allows you to attach [metadata](outputs.md#metadata) to any transaction.

:::

### Signing the Messages

Charlie signs an input block with his private key to prove to nodes that he is indeed the owner of the Shimmer tokens in his address. This input block withdraws 10 SMR from his address.

Charlie then creates an output block to deposit that 10 SMR into Bob's address. This block does not need a signature because it is not withdrawing Shimmer tokens.

Then Charlie puts all the blocks in a [UTXO](/introduction/explanations/what_is_stardust/rethink_utxo) and sends them to a node on a Shimmer network.

### Waiting for the Messages to be Confirmed

Anyone is free to send blocks to a node at any time. As a result, selecting valid tip blocks is not always a simple matter. The milestone, however, determines which blocks are included and confirmed based on deterministic ordering.

For example, what if Charlie actually attached two blocks to the Tangle: one that transferred 10 SMR to Bob, and one that transferred 10 SMR to Alice? Together, these blocks would be called a **double-spend** because they try to transfer the same Shimmer tokens to different addresses.

Messages in the Tangle are confirmed by special blocks called **milestones**. Milestones are issued by a special node called Coordinator, which is operated by the Shimmer Foundation and is therefore still a centralized part of the Consensus.

After Charlie's block is confirmed by a milestone, the nodes update his and Bob's balances to reflect the transfer of 10 SMR to Bob's address. Bob can now spend his new Shimmer tokens.

We can go a bit more into detail and observe the single steps taken by the participants.

## Clients

Everything starts with a client. A client is software that initiates and creates Shimmer transactions for a user (whether human, machine or device). Most clients for users will come in the form of wallet software like the [Firefly Wallet](https://firefly.Shimmer.org/).

Simple command-line tools for professional users, like the [CLI Wallet](https://github.com/iotaledger/cli-wallet/), are also available.

Machines, sensors, devices, etc. will use the code of the Shimmer wallet libraries to create and execute the transactions autonomously.

To send a value transaction into the Shimmer network, a client creates a Shimmer block that includes a **signed transaction payload**. In this payload, all the data is specified to tell the Shimmer network how many tokens from address A (owned by the issuer of the block) should be transferred to address B and makes it possible to upgrade the state of the Shimmer Ledger accordingly.

The signed transaction payload must contain a digital signature that guarantees that the transaction's sender is the owner of the address where those funds are currently stored. This is guaranteed through signing the transaction with the private key of that address. A public key, which is also part of the block, is used to validate the ownership of the funds.

The next step is that the client connects to a node in the Shimmer network and asks this node for valid tips to include in the block. After the tips (between one and eight previous blocks of the Tangle) are known to the client, they can be included in the block and create a reference path for this block in the Tangle. Finally, the client submits this block that includes the transaction payload for validation and processing to the node.

## Nodes

Nodes are the bookkeepers, decision-makers, and validators of all information in the Shimmer network. Every node in the Shimmer network knows the exact status and value of all existing addresses in the Shimmer network at any given time. This is called **the ledger state**.

A node is also the entry point for clients into the network. The clients submit blocks to the node over a specified port in the node. The node collects all arriving traffic of this entry port in its inbox and first checks if the block is correctly formatted and can be processed.

If all bits of the block are readable for the node and the node detects the signed transaction payload included in the block, a validation process starts.

Firstly, the node verifies if the address that tries to send these funds has the needed balance to do so. So it checks its current knowledge of that address (ledger state) to see whether the address has enough funds. It also checks whether the transaction is semantically correct, given the constraints defined in the to-be consumed funds. The node also checks that no conflicts are known in the network that would make it possible to spend more funds than are currently located on the address (in other words, a double spend). So if there is another block currently present and known for the node that wants to spend the same funds of the address, a conflict is detected and both blocks will be processed into conflict resolution; you will read more about this process later.

If no conflicts are detected, the next step for a node is to submit the requested update of the ledger state: "remove amount Funds x from address A and add those amount to address B". Submitting happens via the so-called **gossip protocol**.

The node sends its updated ledger state to all its directly connected neighboring nodes. Every node is connected to several other nodes. Those nodes receive the updated ledger state from their neighbors. Every node compares the request to its currently known version of the ledger and checks again for conflicts. If no conflicts are found, the node updates his ledger state and sends the updated state to his neighbors again.

This leads to a fast propagation of ledger updates through the network, and in a few seconds, it has reached every node in the network and is therefore accepted and confirmed. In this stage, the block has reached full confirmation and is considered solid. It will now be added to the tip pool of every node and can be used as a reference by new blocks.

:::tip More Transaction Types

You can find more detailed descriptions
of [simple](/introduction/explanations/ledger/simple_transfers)
, [alias](/introduction/explanations/ledger/alias),
[native tokens and foundry](/introduction/explanations/ledger/foundry),
and [NFT](/introduction/explanations/ledger/nft) transactions
the [Stardust Protocol docs](/introduction/welcome).

:::
