---
id: smart-contracts-chains
title: Chains
description: In this article you will learn how the IOTA Smart Contract Chains works.
keywords:
  - Chains
  - Smart Contracts
  - wasp
  - ISCP
  - Multi-Chain
image: /img/learn/multichain.png
---

IOTA Smart Contracts is a **multi-chain** environment, that means, you can run many **parallel chains** on the IOTA Tangle:

- Each chain has its own state, which can be updated in parallel, on Layer Two (L2).
- Each chain state is anchored on the IOTA Tangle (UTXO Ledger), on Layer One (L1).
- Each chain is validated by a set of validators, the committee.
- Each chain can contain multiple smart contracts.
- Each smart contract can exchange assets with other smart contracts on other chains in a trustless and distributed manner.

![Multi-Chain environment](/img/learn/multichain.png)

IOTA Smart Contracts are defined as immutable state machines:

- **State machine**: Each smart contract has a state, which is attached to the Tangle. The state contains data such as account balances, input conditions, and consequences over time. Each state update represents a state transition on the Tangle.

- **Immutable**: The state and the smart contract program code are both immutable because they are stored on the Tangle. The state can be incrementally updated by attaching new transactions to the Tangle.

The Tangle provides a verifiable audit trail of the state transitions. It allows us to trust that the state transitions are valid and they cannot be corrupted by malicious or erroneous nodes.

## State of the Chain

The state of the chain consists of:

- **Balances of the native IOTA digital assets, or colored tokens**: The chain acts as a custodian for those assets.
- **A collection of arbitrary key/value pairs, the data state**: Represents use case-specific data stored in the chain by its smart contracts outside of the UTXO ledger.

The state of the chain is append-only (immutable) data structure maintained by the distributed
consensus of its validators.

The chain also contains an on-ledger backlog of unprocessed requests.

The data state is stored outside of the ledger, on the distributed database maintained by validators nodes.

## Digital Assets on the Chain

The native L1 accounts of the IOTA UTXO ledger are represented by addresses, each controlled by the entity holding the corresponding private and public key pair. The L1 account is a collection of UTXOs belonging to the address.

Similarly, the chain holds all tokens entrusted to it in one special UTXO, the state output which is always located in the address controlled by the chain.
It is similar to how a bank holds all deposits in its vault. This way, the chain (entity controlling the
state output) becomes a custodian for the assets owned by its clients, in the same sense the bank’s client owns the money deposited in the bank.

## Further Readings

- Learn more about [State, Transitions, and State Anchoring](/smart-contracts/guide/core_concepts/states).
- Participate on [the public Testnet](/smart-contracts/guide/chains_and_nodes/testnet).
- Build [a chain on your committee](/smart-contracts/guide/chains_and_nodes/setting-up-a-chain).
