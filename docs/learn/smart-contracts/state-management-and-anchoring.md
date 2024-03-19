---
description: An overview of state management and anchoring in IOTA Smart Contracts, detailing how blockchain state and digital assets are handled and secured.
image: /img/logo/WASP_logo_dark.png
tags:
  - IOTA Smart Contracts
  - State Management
  - Blockchain Technology
  - Digital Assets
  - Anchoring Process
---

# State Management and Anchoring

## TL;DR;

- [Introduction](#introduction): In IOTA Smart Contracts, 'state' represents the chain's current status, including data
  and digital assets, updated via blockchain blocks.
- [Digital Assets](#digital-assets): Digital assets in IOTA are managed by Layer 1 addresses, with each smart contract
  chain having a unique address to act as a custodian.
- [Data](#data): The data state comprises key/value pairs managed outside the UTXO ledger by validator nodes, ensuring
  data consistency and traceability.
- [Anchoring](#anchoring): The anchoring process embeds the data state hash into the L1 ledger, creating a tamper-proof
  record and ensuring a globally consistent state.

## Introduction

In IOTA Smart Contracts, the 'state' represents the current status of the chain, including its data and digital assets.
This state is updated through blocks that form an immutable blockchain. Each block contains changes or mutations,
leading to a new state.

## Digital Assets

Digital assets in IOTA are controlled by addresses on the Layer 1 (L1) IOTA UTXO ledger. Each smart contract chain has a
unique L1 address acting as a custodian for these assets, which include base tokens, native tokens, and NFTs. These
assets are consolidated within the chain's account, and their movements are tracked as part of the chain's state
changes.

## Data

The data state of an IOTA chain comprises key/value pairs maintained outside the UTXO ledger in a distributed database
managed by validator nodes. This database contains the 'solid state', while the 'virtual state' is an in-memory
collection during smart contract execution. The data state is defined by its hash, timestamp, and index, ensuring
consistency and traceability of changes.

## Anchoring

Anchoring is the process of embedding the hash of the data state into a state UTXO on the L1 ledger, providing a
tamper-proof record. This mechanism ensures that there is global consensus on the chain’s state, which is both immutable
and consistent. The state transition in the chain occurs via a transaction that updates both the chain's assets and the
state hash, represented as a sequence of UTXOs on the L1 ledger.

:::tip Dive Deeper

You can gain a deeper understanding
of [on-chain digital assets](/isc/explanations/states/#digital-assets-on-the-chain), and
the [data state](/isc/explanations/states/#the-data-state) in the [IOTA Smart Contracts](/isc/introduction)
documentation.

:::