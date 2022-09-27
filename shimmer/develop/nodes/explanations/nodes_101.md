---
description: Introducing nodes and what they can do in the Shimmer network (Tangle). 
image: /img/iota-wiki.png
keywords:
- Shimmer Node 
- Hornet Node
- blocks
- syncing
- synchronizing
- UTXO
- explanation

---

# Nodes 101

![Node 101](/img/Banner/banner_nodes_101.svg)

The Shimmer network is a distributed type of network called Tangle. The network is distributed among several servers
called nodes which are the backbone of the Shimmer network.

Nodes are responsible for:

- Providing an API to interact with the Tangle/Shimmer network.
- Validating blocks and ledger mutations for consistency.
- Providing data for other nodes to synchronize to the latest state of the network.

## Attaching New Blocks to the Tangle

A _block_ is a data structure that is actually being broadcast in the Shimmer network and represents a vertex in the
Tangle graph. When nodes receive a new block, they attach it to the Tangle by adding the blocks to their local database.

As a result, at any point in time, all nodes may have different blocks in their local databases. These blocks make up a node's view of the Tangle.

To distribute the blocks across the rest of the network, nodes synchronize their local databases with their neighbors.

## Synchronizing With the Rest of the Network

Like any distributed system, nodes in the Shimmer network synchronize their databases with other nodes called neighbors to form a
single source of truth.

When one node, no matter where it is in the world, receives a block, it will try to _gossip_ it to all its neighbors. This way, all of the nodes will eventually see all the blocks, and store them in their local databases.

To synchronize, nodes in Shimmer networks use milestones. If the node has the history of blocks that a milestone references, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received.

When a node is synchronized, it then has enough information to decide which transactions it considers confirmed.

## Deciding Which Blocks Are Confirmed

Blocks remain pending until the node is sure of their validity.

Even when a block is valid, there are situations in which nodes may not be able to make a decision, like in the case of a double spend.

When nodes detect double spends, they must decide which block to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software using a network protocol.

## Keeping a Record of the Balances on Addresses Via `UTXO`

All nodes keep a record of the [Unspent Transaction Outputs (UTXO)](/introduction/explanations/what_is_stardust/rethink_utxo) so they can:

* Check that a transaction is not transferring more Shimmer tokens than are available on the address.
* Respond to clients' requests for their balance.
* Once the node has confirmed a transaction with the Tangle, update the node's record of balances. 

## Exposing APIs for Clients

Nodes come with two sets of low-level APIs:

* HTTP(rest) API.
* Event API.

:::note

Developers do not need to communicate with nodes using a mentioned low-level API. Developers can leverage the [iota client libraries](/iota.rs/develop/libraries/overview) that provide a high-level abstraction to all features IOTA nodes provide, either on HTTP API level or Event API level.

:::

### HTTP Rest API

The HTTP API allows clients to interact with the Tangle and ask nodes to:

* Get tips.
* Attach new block to the Tangle.
* Do proof of work (POW).
* Get blocks from the Tangle.

### Event API

The Event API allows clients to poll nodes for new blocks and other events that happen on nodes. This type of API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses.
