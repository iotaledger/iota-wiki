---
description: ‘Introduction to IOTA's data structure, The Tangle, and its associated elements, including blocks, slots, payloads, and comparison with traditional blockchains.’
keywords:
  [
    'IOTA',
    'Tangle',
    'Blockchain',
    'Data Structures',
    'Distributed Ledger',
    'UTXO',
  ]
---

# Data Structures

## The Tangle

The Tangle is a unique data structure replicated across a decentralized network of computers, also known as
[nodes](networking.md#nodes).
This robust foundation for tracking token ownership forms a directed acyclic graph (DAG) of blocks, known as a block-DAG
architecture. Its distributed nature ensures data immutability and a resilient, tamper-proof environment for data
integrity.

### The Tangle Versus Blockchains

While both the Tangle and blockchains aim to maintain ledger states, the Tangle offers more efficient and scalable
distributed ledger solutions.
It succeeds the blockchain as the next evolutionary step by enabling parallel validation of transactions without total
ordering, eliminating intermediary miners and validators.

## Blocks

In the IOTA 2.0 protocol, the basic unit of information is a block, serving as a container for data stored on the
network. Blocks are gossiped between nodes to communicate payloads and opinions about those payloads. They form a
directed acyclic graph (DAG), replacing the linear structure of a blockchain.

### Validation Blocks

Validation blocks are a new type of block that is as lightweight as possible.
These blocks are privileged in the Congestion Control module,
ensuring the fair part of the throughput to selected [validators](validators.md).

## Payloads

Payloads can be part of a block and are specified as either a Tagged Data payload, holding a tag and associated data, or
a Transaction Payload using the Unspent Transaction Output (UTXO) model for ledger accounting. A UTXO transaction
consumes unspent outputs from previous transactions and generates new outputs.

### Transaction Payload

IOTA 2.0 uses the Unspent Transaction Output (UTXO) model for ledger accounting, a method prevalent in cryptocurrencies
like Bitcoin, Cardano, and IOTA. Each transaction in this model consumes unspent outputs from previous transactions and
generates new outputs. Therefore, when users wish to transfer tokens, they create a transaction specifying which
existing UTXOs are consumed and which new UTXOs are created.

### Tagged Data Payload

The tagged Data payload holds a tag and associated data.

## Slots

The system's timeline is partitioned into slots, each associated with a unique slot index represented as a `uint64` data
type.
The slot index of a given timestamp is calculated using the `genesisTimestamp` (the starting point of the
timeline) and the `duration` of each slot.

### Slot Commitments

Slot commitments summarize a slot and link to the commitment of the previous slot, forming a commitment chain.
This helps maintain a common perception among the nodes by showing the divergences between local versions of the Tangle
and the ledger of each node.

## Signatures

IOTA 2.0 uses Ed25519 signatures to strengthen the security of transactions, making them safe and reliable.
