---
id: value-transfer
title: Value Transfer
description: Learn how the IOTA Cryptocurrency Protocol transfers the native IOTA Tokens.
---


# IOTA Value Transactions

This page will explain how IOTA tokens will be sent and received in the IOTA Network in an understandable manner and link to further detailed and high-level content.

## Clients

Everything starts with a client. A client is a software that initiates and creates IOTA transactions for a user (humans/machines/devices).
Most clients for users will come in the form of a wallet software like the [IOTA Firefly Wallet](https:/firefly.iota.org/). But also simple command-line tools for professional users like the [CLI Wallet](https:/https://github.com/iotaledger/cli-wallet/) are available. 
Machines, sensors, and devices, etc will use the pure code in the IOTA Wallet Libraries to create and execute the transactions autonomously.

To send a value transaction into the IOTA network, a client creates an IOTA message that includes a "signed transaction payload". In this payload, all the data is specified to tell the IOTA network how many tokens from address A (owned by the issuer of the message) should be transferred to address B and makes it possible to upgrade the state of the IOTA Ledger accordingly.

This signed transaction payload must contain a digital signature that guarantees that the sender of the transaction is the owner of the address where those funds are stored at the moment. This is guaranteed through signing the transaction with the private key of that address. A public key, that is also part of this message will be used to validate the ownership over those funds. Read more about how private and public keys work together to establish this here:

The next step now will be that the client connects to a node in the IOTA network and submits this message (that includes the transaction payload) for validation and processing.


## Nodes

Nodes are the bookkeepers, decision-makers, and validators of all information in the IOTA network. Every node in the IOTA network knows the exact status and containing the value of all existing addresses in the iota network at a given time. This is called the Ledger State. 

A Node is also the entry point for clients into the network. The clients submit messages to the node over a specified port in the node. The node collects all arriving traffic of this entry port in his inbox and first checks if the message is correctly formatted and can be processed.

If all bits of the message are readable for the node and the node detects the signed transaction payload included in the message a validation process starts.

Firstly, the node verifies if the address that tries to send these funds has the needed balance to do this. So he checks his current knowledge of that address (his ledger state) if the address has enough funds. Also, the node checks that no conflicts are known in the network that would make it possible to spend more funds than are currently located on the address (double spend). So if there is another message currently present and know for the node that wants to spend the same funds of the address, a conflict is detected and both messages will be processed into conflict resolution - more about this process later. 

If no conflicts are detected, the next step for a node is to submit the requested update of the ledger state - "remove amount Funds X from address A and add those amount to address B". Submitting happens via the so-called **gossip protocol**. 

The node sends its updated Ledger State to all its directly connected neighboring nodes. Every node is connected to several other nodes. Those nodes receive the updated ledger state from their neighbors. Every node compares the request to its currently known version of the Ledger and checks again for conflicts. If no conflicts are found, the node updates his ledger state and sends the updated state to his neighbors again...

This leads to an extremely fast propagation of ledger updates through the network and in a few seconds, it has reached every node in the network and is therefore accepted and confirmed. In this stage, the message has reached full confirmation and is considered solid. It will now be added to the tip pool of every node and can be used to be referenced by new messages.

