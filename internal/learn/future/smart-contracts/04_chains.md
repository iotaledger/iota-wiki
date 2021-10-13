---
id: smart-contracts-chains
title: Smart Contract Chains
description: In this article you will learn how the IOTA Smart Contract Chains works.
keywords:
  - Chains
  - Smart Contracts
  - wasp
  - ISCP
  - Multi-Chain
---

## 🏗 Work in Progress

IOTA Smart Contracts is a multi-chain environment, that means, we can run many parallel chains on the IOTA ledger:

- Each having own state, which can be updated in parallel
- Each state anchored on the UTXO ledger, the L1
- Each validated by a set of validators, the committee
- Each can contain multiple smart contracts
- Each smart contract is enabled to transact (exchange assets) with other smart contracts on other chains in a trustless (distributed) manner

[![](https://i.imgur.com/WU9cJhI.png)](https://i.imgur.com/WU9cJhI.png)

IOTA Smart Contracts are defined as immutable state machines:

**State machine**: Each smart contract has a state, which is attached to the Tangle. The state contains data such as account balances, input conditions, and consequences over time. Each state update represents a state transition on the Tangle.

- **Immutable**: The state and the smart contract program code are both immutable because they are stored on the Tangle. The state can be incrementally updated by attaching new transactions to the Tangle.
  The Tangle provides a verifiable audit trail of the state transitions. It allows us to trust that the state transitions are valid and they cannot be corrupted by malicious or erroneous nodes.

### State of the Chain

The state of the chain consists of:

- **Balances of the native IOTA digital assets, or colored tokens**: The chain acts as a custodian for those funds
- **A collection of arbitrary key/value pairs, the data state**: Represents use case-specific data stored in the chain by its smart contracts outside of the UTXO ledger.

The state of the chain is append-only (immutable) data structure maintained by the distributed
consensus of its validators.

The chain also contains an on-ledger backlog of unprocessed requests.

The data state is stored outside of the ledger, on the distributed database maintained by validators nodes.

### Digital Assets on the Chain

The native L1 accounts of IOTA UTXO ledger are represented by addresses, each controlled by the entity holding the corresponding private and public key pair. The L1 account is a collection of UTXOs belonging to the address.

Similarly, the chain holds all tokens entrusted to it in one special UTXO, the [state output](#state-of-the-chain)
which is always located in the address controlled by the chain.
It is similar to how a bank holds all deposits in its vault. This way, the chain (entity controlling the
state output) becomes a custodian for the assets owned by its clients, in the same sense the bank’s client owns the money deposited in the bank.
