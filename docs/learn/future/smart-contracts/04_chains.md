---
id: smart-contracts-chains
title: Smart Contract Chains
description: In this article you will learn how the IOTA Smart Contract Chains works.
---

## 🏗 Work in Progress

IOTA Smart Contracts is a multi-chain environment, that means, we can run many parallel chains on the IOTA ledger:

- Each having own state, which can be updated in parallel
- Each state anchored on the UTXO ledger, the L1
- Each validated by a set of validators, the committee
- Each can contain multiple smart contracts
- Each smart contract is enabled to transact (exchange assets) with other smart contracts on other chains in a trustless (distributed) manner

![](https://i.imgur.com/WU9cJhI.png)

### State of the chain

The state of the chain consists of:

- Balances of the native IOTA digital assets, colored tokens. The chain acts as a custodian for those funds
- A collection of arbitrary key/value pairs, the data state, which represents use case-specific data stored in the chain by its smart contracts outside of the UTXO ledger.

The state of the chain is append-only (immutable) data structure maintained by the distributed
consensus of its validators.

The chain also contains an on-ledger backlog of yet unprocessed requests.

The data state is stored outside of the ledger, on the distributed database maintained by validators nodes.

### Digital assets on the chain

The native L1 accounts of IOTA UTXO ledger are represented by addresses, each controlled by the entity holding the corresponding private and public key pair. The L1 account is a collection of UTXOs belonging to the address.

Similarly, the chain holds all tokens entrusted to it in one special UTXO, the state output (see
above) which is always located in the address controlled by the chain.
It is similar to how a bank holds all deposits in its vault. This way, the chain (entity controlling the
state output) becomes a custodian for the assets owned by its clients, in the same sense the bank’s client owns the money deposited in the bank.
