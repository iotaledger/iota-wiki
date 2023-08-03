---
description: 'Discover the architecture of IOTA 2.0, breaking it down into its network, communication, application layers, and the flow of data.'
keywords: [ "IOTA 2.0", "Network Layer", "Communication Layer", "Application Layer", "Data Flow" ]
---

# Data Flow

## Network Layer

The network layer modules maintain the IOTA 2.0 network. The network is a Peer-to-Peer (P2P) overlay network, running on
top of another network like the internet. All [nodes](networking.md#nodes) in the network have equal roles and 
responsibilities.

This layer consists of two main modules:

1. The peer discovery module, which maintains a list of nodes actively using the network.
2. The neighbor selection module, also known as autopeering, which selects peers in a secure random manner.

The network layer also manages the gossip process.

## Communication Layer

The [communication layer](communication.md) handles the information exchanged over the network layer.
This information is contained in objects called blocks, and builds a Directed Acyclic Graph (DAG) with blocks as
vertices known as The Tangle.

Since nodes have limited capabilities, the network can process only a limited number of [blocks](data-structures.md#blocks). 
To prevent overloading, the rate control and congestion control modules manage when and how many blocks can be gossiped.

## Application Layer

The application layer is built on top of the communication layer. Anyone can develop applications on this layer, and
nodes can choose which applications to run. However, some core applications, including the value transfer applications,
must be run by all nodes.

These core applications maintain the ledger state and a resource called Mana, which is crucial for spam protection and
Sybil attack prevention. All nodes must also run the [consensus](consensus.md) applications, which regulate blocks
timestamps and
resolve potential conflicts.

## Data Life Cycle

The life cycle of a block in the Tangle network is a complex and well-structured process, consisting of the following
steps:

1. **Block Factory:** The node generates a new block using the `IssuePayload` function and signs it. The block contains
   a
   commitment field with the hash of certain older data.
2. **Parser:** Incoming blocks are parsed and checked for various conditions, including timestamp consistency, reference
   [mana](mana.md) cost (RMC), [slot commitment](data-structures.md#slot-commitments), 
   and valid [signature](data-structures.md#signatures). If a block passes all these checks, it gets to the next step.
3. **Storage:** Blocks that have passed the parser are stored along with metadata
   like `receivedTime`, `solidificationTime`,
   and other Boolean flags. The storage also deletes invalid blocks in its cleaning process.
4. **Solidifier:** The node requests missing blocks from its past cone from its neighbors. If all blocks are received,
   the block's `solid` flag is set to `TRUE`. If not, the `invalid` flag is set to `TRUE`.
5. **Booker:** Blocks and transactions are causally ordered, conflicts are identified, and the reality-based ledger is
   created. If a block's parent branches contain conflicting transactions, the block is marked as `invalid` and not
   booked.
6. **Scheduler:** Blocks that have been successfully processed by the above steps are scheduled for gossiping to
   neighbors. During periods of severe congestion, blocks from low-Mana issuers are dropped first.
7. **Tip Manager:** Scheduled blocks are added to the tip set, while their parents are removed from it. The tip manager
   performs uniform random tip selection from a subset of the tip pool to guarantee the good properties of the Tangle.
