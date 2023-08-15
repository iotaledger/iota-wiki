---
description: This article provides a detailed exploration of the IOTA network, focusing on nodes, network synchronization, node identity, peer neighbors, finding neighbors, and auto peering.
keywords:
  [
    'IOTA network',
    'nodes',
    'network synchronization',
    'node identity',
    'peer neighbors',
    'multiaddr',
    'auto peering',
  ]
---

# Networking and Peering

The IOTA network, based on the innovative [Tangle](data-structures.md#the-tangle), comprises many nodes that work
together to maintain network integrity and facilitate transactions.

## Nodes

Nodes run the software that provides read and write access to the Tangle and are responsible for the following
activities:

- Attaching new [blocks](data-structures.md#blocks) to the Tangle.
- Synchronizing with the rest of the network.
- Deciding which transactions are confirmed.
- Keeping a record of the balances on addresses.
- Exposing APIs for clients.

When nodes receive or create a new block, they attach it to the Tangle by adding it to their local database or ledger.
Nodes synchronize their local databases with neighbors to distribute the blocks across the network.

### Node Identity

Each node can be uniquely identified by a `peer identity` (or `PeerId`), represented by a public and private key pair.
The `PeerId` is automatically generated when an IOTA 2.0 node is first started and remains consistent across restarts.
It is an essential part of the `multiaddr` configuring neighbors.

## Network Synchronization

In the IOTA 2.0 network, nodes synchronize their databases with neighboring nodes to form a single source of truth.
To participate in a network,
each node establishes a secure connection to its peer neighbors and mutually exchange messages on the
protocol's [communication layer](communication.md).

## Addressing Peer Neighbors

IOTA 2.0 uses the `MultiAddresses` (or `multiaddr`) format to communicate with peer neighbors.
It is a future-proof convention that encodes multiple layers of addressing information into a single path structure.
The `multiaddr` includes the network protocol and the `PeerId`.

## Adding Node Peers

Once a node's `multiaddr` has been determined, it can be exchanged with other node owners to establish a mutual peer
connection.
At least eight peer neighbors are recommended for some degree of redundancy.

## Finding Neighbors

The IOTA Foundation hosts the [`#nodesharing`](https://discord.com/channels/397872799483428865/398600007378272256)
channel on its official IOTA Discord server for node maintainers to find
peering neighbors.
You should exchange your node's `multiaddr` in direct messages.

## Auto-peering

IOTA 2.0 supports the automatic discovery of peers through the `autopeering` module.
An `autopeering` module will use the specified entry nodes under `p2p.autopeering.entryNodes` to find peers, connect to them and initiate a gossip protocol with them.

:::warning

The `autopeering` plugin will disclose the public IP address of a node to possibly all nodes and entry points.
It should only be enabled if a node maintainer is willing to disclose their node's address to the public.

:::

Auto-peering also uses watermark points for connection management.
When the number of connections reaches the `highWatermark`,
the connection manager will start trimming away connections until it reaches the `lowWatermark`.
These watermarks provide a buffer for connected peers, not necessarily targeted by the gossip protocol.
