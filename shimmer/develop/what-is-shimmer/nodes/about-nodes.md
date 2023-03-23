---
description: Nodes are the core of the Shimmer network. They run the node software that gives them read and write access to the Tangle.
image: /img/participate/banner/banner_about_nodes.png
---

# About Nodes

![About Nodes](/img/participate/banner/banner_about_nodes.png)

:::note tl;dr;

Nodes are the core of the Shimmer network. They run the node software that gives them read and write access to the Tangle. This section covers what nodes do in the Shimmer network.

:::

Nodes are responsible for the following:

- Attaching new transactions to the Tangle
- Synchronizing with the rest of the network
- Deciding which transactions are confirmed
- Keeping a record of the balances on addresses
- Exposing APIs for clients

## Attaching new transactions to the Tangle

When nodes receive a new transaction, they attach it to the Tangle by adding it to their local database. As a result, at any point, all nodes may have different transactions in their local databases. These transactions make up a node's view of the Tangle. To distribute the transactions across the rest of the network, nodes synchronize their local databases with their neighbors.

## Network synchronization

Like any distributed system, nodes in the Shimmer network synchronize their databases with their neighboring nodes to form a single source of truth. No matter where it is in the world, when one node receives a transaction, it will try to gossip about it to all its neighbors. This way, all nodes eventually see all transactions and store them in their local databases.

To synchronize, nodes in the Shimmer networks use milestones. If a node has the history of transactions that a milestone references in its database, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as that of the latest milestone it has received. When a node is synchronized, it has enough information to decide which transactions it considers confirmed.

## Transaction confirmation

All transactions remain pending until the node is sure of its validity. However, even when a transaction is valid, nodes may not immediately be able to confirm a transaction due to conflicts, like in the case of a double spend. When nodes detect conflicting transactions, they must decide which transaction to consider confirmed. Nodes do this by using consensus rules built into their node software.

## Balances on addresses

All nodes keep a record of the balances of addresses, so they can respond to client requests for their balance and verify that transactions do not transfer more Shimmer tokens than are available on the address. Nodes update their record of balances when a transaction is confirmed.

## Exposing APIs for Clients

### HTTP API

The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:

- Get tips
- Attach new transactions to the Tangle
- Do proof of work
- Get transactions from the Tangle

### Events API

The Events API allows clients to poll nodes for new transactions and other events that happen on nodes. This API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses.
