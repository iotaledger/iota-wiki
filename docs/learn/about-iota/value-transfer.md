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
Machines, sensors and devices etc will use the pure code in the IOTA Libraries to create and execute the transactions autonomously.

To send a value transaction into the IOTA network, a client creates an IOTA message that includes a "signed transaction payload". In this payload, all the data is specified to tell the IOTA network how many tokens from address A (owned by the issuer of the message) should be transferred to address B and makes it possible to upgrade the state of the IOTA Ledger accordingly.

This signed transaction payload must contain a digital signature that guarantees that the sender of the transaction is the owner of the private keys of the address where those funds are stored at the moment. A public key that is also part of this message will be used to validate and guarantees ownership over those funds. Read more about how private and public keys work together to guarantee this here:

The next step now will be that the client connects to a node in the IOTA network and submits this message (that includes the transaction payload) for validation and processing.


## Nodes

Nodes are the bookkeepers and validators of all information in the IOTA network. Every node in the IOTA network knows the exact status and value of all existing addresses in the iota network at a given time. This is called the Ledger State. It is a fully up to date on all balances of the ledger.
A Node is an entry point for clients. The clients submit messages to the node over a specified port. The node collects all arriving traffic of this entry port in his inbox and does firstly check if the message is correctly formatted and can be processed.

If all information of the message is readable for the node and the node detects the signed transaction payload included in the message a validation process starts.

Firstly, the node verifies if the address that tries to send these funds has the needed balance to do this. Also, the node checks that no conflicts are known in the network that would make it possible to spend more funds than are currently located on the address (double spend).

In the next step the node submitts the requested update of the ledger state - "remove amount Funds X from address A and add those amount to address B". Submitting happens via the so-called gossip protocol. 

The node sends his updated Ledger State to all its directly connected neighboring nodes. Every node is connected to several other nodes. Those nodes receive the updated ledger state from their neighbors. Every node compares the request to its currently known version of the Ledger and checks again for conflicts. If no conflicts are found, the node updates his own ledger state and sends the updated state to his own neighbors again...

This leads to an extremely fast propagation of ledger updates through the network and in a few seconds it has reached every node in the network and is therefore accepted and confirmed.
