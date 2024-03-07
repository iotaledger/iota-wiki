---
description: An in-depth exploration of smart contract execution in blockchain technology, detailing their structure, invocation, and associated fees.
image: /img/logo/WASP_logo_dark.png
keywords:
- Smart Contracts
- Blockchain Technology
- Validators
- User Requests
- Gas Fees
---

# Smart Contract Execution

## TL;DR;

- [Introduction](#introduction): Smart contracts are programs run by [validators](chain-owners-validators-and-access-nodes.md#validator-nodes) upon requests.
- [Structure of a Smart Contract](#structure-of-a-smart-contract): Comprising functions within a decentralized framework, smart contracts have a unique state and accounts, managed by validator node consensus.
- [View Entry Points](#view-entry-points): Read-only operations in smart contracts that do not modify data or incur execution fees.
- [Full Entry Points](#full-entry-points): Functions that can alter a contract's state and typically require execution fees.
- [Invoking a Smart Contract](#invoking-a-smart-contract): Activation of smart contracts through requests, which can be off-ledger or on-ledger, with associated gas fees for computational resources.

## Introduction

Smart contracts are essentially programs run by a network of nodes upon requests. Network nodes, also known as 
[Validators](chain-owners-validators-and-access-nodes.md) activate these contracts in response to specific [user requests](#invoking-a-smart-contract). 

## Structure of a Smart Contract

At it's core a smart contract is a collection of functions, much like a traditional computer program. However, they operate
within the blockchain’s decentralized framework, meaning that a network of [validator nodes](chain-owners-validators-and-access-nodes.md) run the exact
same code and come to a [consensus](consensus.md) on the next [state](accounts-addresses-and-fees.md) update. 

Every smart contract has its unique state, which is essentially a collection of data stored as key-value pairs. This
state is only modifiable by the contract's functions, ensuring secure and controlled interactions. Additionally, smart
contracts possess their own accounts within the blockchain, representing their token balances. This structure allows
them to interact with and manage digital assets autonomously.

### View Entry Points

View entry points, or functions, are read-only operations that do not alter the contract's data; therefore, they do not incur
any execution fees.

### Full Entry Points

Full entry points, or functions, can modify the contract's state and typically require fees to execute.
These fees compensate for the computational resources used in processing the functions.

## Invoking a Smart Contract

To activate or 'invoke' a smart contract, users, or other contracts, send requests to the chain. These requests are 
calls to the contract’s functions and must be cryptographically signed to ensure security and authenticity. 
The type of request determines how it is processed:

### Off-Ledger Requests

Off-ledger requests are directly sent to the blockchain's validator nodes, bypassing the main ledger. This type of
request is faster as it avoids the additional processing time of the main ledger but is typically used when the
necessary assets are already within the blockchain’s ecosystem.

### On-Ledger Requests

On-ledger requests, on the other hand, pass through the blockchain's main ledger. While slower due to the ledger’s
processing, these requests are essential for transactions that involve transferring assets across different chains or
accounts. The blockchain’s ledger, like the Tangle in IOTA's case, acts as a mediator in these transactions, ensuring
validity and security.

### Fees and Gas

Running a request on a blockchain involves computational resources, for which users must compensate. This compensation,
known as 'gas', varies depending on the complexity and size of the request. Users specify a `GasBudget`


:::tip Dive Deeper

You can gain a deeper understanding
of [ISC Architecture](/isc/introduction#isc-architecture) and [smart contract invocation](/isc/explanations/invocation/)
in the [IOTA Smart Contracts](/isc/introduction) documentation.

:::