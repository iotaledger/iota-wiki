---
title: About Nodes
description: Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle.
image: /img/participate/banner/banner_about_nodes.png
---

# About Nodes

![About Nodes](/img/participate/banner/banner_about_nodes.png)

**Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle. This section covers what nodes do in an IOTA network.**

Nodes are responsible for the following:

- Attaching new transactions to the Tangle
- Synchronizing with the rest of the network
- Deciding which transactions are confirmed
- Keeping a record of the balances on addresses
- Exposing APIs for clients

## Attaching new transactions to the Tangle

When nodes receive a new transaction, they attach it to the Tangle by adding it to their local database.

As a result, at any point in time, all nodes may have different transactions in their local databases. These transactions make up a node's view of the Tangle.

To distribute the transactions across the rest of the network, nodes synchronize their local databases with their neighbors.

## Synchronizing with the rest of the network

Like any distributed system, nodes in an IOTA network synchronize their databases with others called neighbors to form a single source of truth.

When one node, no matter where it is in the world, receives a transaction, it will try to gossip it to all its neighbors. This way, all nodes eventually see all transactions and store them in their local databases.

To synchronize, nodes in IOTA networks use milestones.
If the node has the history of transactions that a milestone references, that milestone is solid.

Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received.

When a node is synchronized, it then has enough information to decide which transactions it considers confirmed.

## Deciding which transactions are confirmed

All transactions remain in a pending state until the node is sure of its validity. For a definition of a valid transaction, see **Value Transfer**.

However, even when a transaction is valid, nodes may not be able to make a decision like in the case of a double spend.

When nodes detect double spends, they must decide which transaction to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software. See **The Coordinator** for information about the consensus rules in IOTA networks.

## Keeping a record of the balances on addresses

All nodes keep a record of the balances of addresses, so they can do the following:

- Check that a transaction is not transferring more IOTA tokens than are available on the address
- Respond to clients' requests for their balance
- Only when a transaction is confirmed, can nodes update their record of balances.

## Exposing APIs for clients

Nodes come with two APIs:

- HTTP API
- Events API

### HTTP API

The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:

- Get tip transactions
- Attach new transactions to the Tangle
- Do proof of work
- Get transactions from the Tangle

### Events API

The Events API allows clients to poll nodes for new transactions and other events that happen on nodes.

This API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses.
