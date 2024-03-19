---
description: Explore the roles of chain owners, validator nodes, and access nodes in the governance and operation of IOTA Smart Contracts.
image: /img/logo/WASP_logo_dark.png
tags:
  - IOTA Smart Contracts
  - Chain Owners
  - Validator Nodes
  - Access Nodes
  - Blockchain Governance
---

# Chain Owners, Validators, and Access Nodes

## TL;DR;

- [Chain Owners](#chain-owners): As the primary governors of a chain, chain owners control validator committees and
  dictate the chain's governance model.
- [Validator Nodes](#validator-nodes): Validator nodes are crucial for block production and achieving consensus on state
  updates, with their composition managed by chain owners.
- [Access Nodes](#access-nodes): Access nodes, having only read access, are key for querying the chain's state and
  managing external interactions with the blockchain.

## Chain Owners

Chain owners are the primary governing entities of a chain. They hold significant control over the chain,
including the power to manage the committee of validators. They can rotate [validators](#validator-nodes) to ensure the
chain's integrity and efficient operation. Chain owners establish and maintain the governance model of the chain, which
dictates how validators are selected and rewarded.

## Validator Nodes

Validator nodes are the workhorses of a blockchain, possessing write access and thus responsible for producing blocks.
These nodes form a committee that collaboratively runs smart contracts and reaches [consensus](consensus.md) on state
updates. Each validator plays their part in executing code, verifying the results, and committing these updates to the
chain.

This process involves adding new blocks to the chain and updating the state hash in the Layer 1 (L1)
ledger. [Chain owners](#chain-owners) can change the composition of this committee , allowing for flexibility and
adaptability in the network's management.

Often, validator nodes operate within a private subnet for security, with a designated group of access nodes serving as
the
interface with the external world. The management of both validator and access nodes is coordinated through
the [`governance` core contract](/isc/reference/core-contracts/governance/).

## Access Nodes

In contrast to [validator nodes](#validator-nodes), access nodes only have read access to the blockchain. They play a
crucial role in responding to queries about the chain's state and forwarding requests to the committee of validators.
These nodes provide external access to smart contracts, enabling queries
([view calls](smart-contract-execution.md#view-entry-points)) and the sending of
[off-ledger requests](smart-contract-execution.md#off-ledger-requests).

:::tip Dive Deeper

You can gain a deeper understanding
of [validators](/isc/explanations/validators#validators) and [access nodes](/isc/explanations/validators#access-nodes)
in the [IOTA Smart Contracts](/isc/introduction) documentation.

:::