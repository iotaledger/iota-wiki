---
id: value-transfer
title: Value Transfer
description: Learn how the IOTA Cryptocurrency Protocol transfers the native IOTA Tokens.
---

# IOTA Value Transactions

This page explains how IOTA tokens are sent and received in the IOTA network with references to more detailed content.

## Simple Example

To explain how IOTA tokens are transferred from one address to another, this topic follows three characters: Alice, Bob, and Charlie.

### The Goal

Charlie wants to transfer 10i to Bob.

### Choosing Where to Attach Messages

To transfer 10i to Bob, Charlie must attach a value message to the Tangle. For that, he needs between one and eight tip messages that he can attach to his own message.

To get these tip messages, Charlie requests them from a node.

The node selects these messages by using an algorithm called **Uniform Random Tip Selection** (URTS). This algorithm selects between one and eight valid tip messages that lead to a valid ledger state.

- The ledger state is a record of all the value messages that have transferred IOTA tokens in the Tangle, including the state of all balances on addresses. This state must always be balanced: the total number of IOTA tokens must always add up to the total supply.

By using the tip messages that the node gave him, Charlie lets the network know that he is also approving them and their history. If any of those messages turn out to be invalid, Charlie's messages will also be treated as invalid and other nodes will not select Charlie's messages during tip selection.

- Nodes ignore invalid parts of the Tangle during tip selection. The term for these is an **invalid subtangle**.

### Signing the Messages

To prove to nodes that he is indeed the owner of the IOTA tokens in his address, Charlie signs an input message with his private key. This input message withdraws 10i from his address.

Charlie then creates an output message to deposit that 10i into Bob's address. This message does not need a signature because it is not withdrawing IOTA tokens.

Then Charlie puts all the messages in a UTXO and sends them to a node on an IOTA network.

### Waiting for the Messages to be Confirmed

Anyone is free to send messages to a node at any time. As a result, it is not always a simple matter of selecting valid tip messages. The milestone, however, determines which messages are included and confirmed based on deterministic ordering.

For example, what if Charlie actually attached two messages to the Tangle: one that transferred 10i to Bob, and one that transferred 10i to Alice? Together, these messages would be called a **double-spend** because they try to transfer the same IOTA tokens to different addresses.

Both of Alice's messages could not be part of the ledger state because it would result in a negative balance for Alice’s address: minus 10i.

Messages in the Tangle are confirmed by special messages called **milestones**. Milestones are issued by a special node called Coordinator, which is operated by the IOTA Foundation and is therefore still a centralized part of the Consensus.

After Charlie's message is confirmed by a milestone, the nodes update his and Bob's balances to reflect the transfer of 10i to Bob's address. Bob can now spend his new IOTA tokens.

We can go a bit more into detail and observe the single steps taken by the participants.

## Clients

Everything starts with a client. A client is a software that initiates and creates IOTA transactions for a user (whether human, machine, or device). Most clients for users will come in the form of a wallet software like the [IOTA Firefly Wallet](https://firefly.iota.org/).

Simple command-line tools for professional users, like the [CLI Wallet](https://github.com/iotaledger/cli-wallet/), are also available.

Machines, sensors, and devices, etc. will use the code of the IOTA wallet libraries to create and execute the transactions autonomously.

To send a value transaction into the IOTA network, a client creates an IOTA message that includes a **signed transaction payload**. In this payload, all the data is specified to tell the IOTA network how many tokens from address A (owned by the issuer of the message) should be transferred to address B and makes it possible to upgrade the state of the IOTA Ledger accordingly.

The signed transaction payload must contain a digital signature that guarantees that the sender of the transaction is the owner of the address where those funds are currently stored. This is guaranteed through signing the transaction with the private key of that address. A public key, which is also part of the message, is used to validate the ownership of the funds. 

The next step is that the client connects to a node in the IOTA network and asks this node for valid tips to include in the message. After the tips (between one and eight previous messages of the Tangle) are known to the client, they can be included in the message and therefore create a reference path for this message in the Tangle. Finally, the client submits this message (that includes the transaction payload) for validation and processing to the node.

## Nodes

Nodes are the bookkeepers, decision-makers, and validators of all information in the IOTA network. Every node in the IOTA network knows the exact status and containing value of all existing addresses in the IOTA network at any given time. This is called **the ledger state**.

A node is also the entry point for clients into the network. The clients submit messages to the node over a specified port in the node. The node collects all arriving traffic of this entry port in its inbox and first checks if the message is correctly formatted and can be processed.

If all bits of the message are readable for the node and the node detects the signed transaction payload included in the message, a validation process starts.

Firstly, the node verifies if the address that tries to send these funds has the needed balance to do this. So it checks its current knowledge of that address (its ledger state) to see whether the address has enough funds. It also checks whether the transaction is semantically correct give the constraints defined in the to-be consumed funds. The node also checks that no conflicts are known in the network that would make it possible to spend more funds than are currently located on the address (in other words, a double spend). So if there is another message currently present and known for the node that wants to spend the same funds of the address, a conflict is detected and both messages will be processed into conflict resolution; you will read more about this process later.

If no conflicts are detected, the next step for a node is to submit the requested update of the ledger state: "remove amount Funds x from address A and add those amount to address B". Submitting happens via the so-called **gossip protocol**.

The node sends its updated ledger state to all its directly connected neighboring nodes. Every node is connected to several other nodes. Those nodes receive the updated ledger state from their neighbors. Every node compares the request to its currently known version of the ledger and checks again for conflicts. If no conflicts are found, the node updates his ledger state and sends the updated state to his neighbors again.

This leads to a fast propagation of ledger updates through the network and in a few seconds, it has reached every node in the network and is therefore accepted and confirmed. In this stage, the message has reached full confirmation and is considered solid. It will now be added to the tip pool of every node and can be used as a reference by new messages.
