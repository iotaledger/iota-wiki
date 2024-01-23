---
description: 'The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing
limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.'
image: /img/logo/WASP_logo_dark.png
keywords:

  - EVM
  - Solidity
  - smart contracts
  - Ethereum
  - explanation

---

# Introduction

:::caution

Smart Contracts are currently only compatible with the [Stardust protocol](/learn/protocols/stardust/introduction) and
therefore only compatible with the [Shimmer](/build/networks-endpoints/#shimmer) and
[Public Testnet networks](/build/networks-endpoints/#public-testnet).

:::

Smart contracts are deterministic applications that run on distributed network with multiple
[validators](explanations/validators.md) that execute and validate the same code.
Their deterministic and distributed nature makes them predictable, stable and trustworthy.

## Scalable Smart Contracts

Due to the distributed nature of smart contracts, i.e. they run on a network of validators instead of a single computer,
they usually have a limited throughput as a validator can only process a limited amount smart contracts at once.
This can lead to relatively high [fees](#gas) for smart contract execution, as well as scalability issues when running on 
a single blockchain. However, the IOTA Smart Contract Protocol allows **many blockchains that execute smart contracts to
run in parallel** and communicate with one another, therefore solving the scalability problem.

At the same time, ISC provides advanced means of communication between its chains and preserves the ability to create
complex, composed smart contracts.

## ISC Architecture

IOTA Smart Contracts (ISC) function as a Layer 2 extension to the IOTA Multi-Asset Ledger. ISC chains, each with their
state and smart contracts, update their state collectively and interact with Layer 1 and other L2 chains, offering a
sophisticated [multi-chain architecture](explanations/isc-architecture.md).

![IOTA Smart Contacts multichain architecture](/img/multichain.png 'Click to see the full-size image.')

_IOTA Smart Contacts multichain architecture._

[Explore the comprehensive overview of IOTA Smart Contracts in the ISC white paper](https://files.iota.org/papers/ISC_WP_Nov_10_2021.pdf).

## Supported VMs

The IOTA Smart Contracts currently
supports [EVM/Solidity](getting-started/languages-and-vms.md#evmsolidity-based-smart-contracts)
smart contracts, as well as an **experimental** [Wasm VM](getting-started/languages-and-vms.md#wasm-vm-for-isc).

## Sandbox Interface

Smart contracts access data via the deterministic [Sandbox interface](explanations/sandbox.md), ensuring
security and predictability. This interface restricts contracts to their own state and provides various utilities like cryptographic functions and
event dispatching.

![Sandbox](/img/sandbox.png)

## Calling a Smart Contract

### Entry Points and Requests

Smart contracts are activated through entry points, similar to function calls. Entry points can be view-only or allow state
modifications. They are triggered by requests, signed by senders. Smart contracts on the same chain can
synchronously invoke each other, ensuring deterministic results. However, requests between chains are asynchronous and
may involve delays.

### Gas

Running a request consumes 'gas', that is the cost of executing an on-chain request. You can specify a `GasBudget` 
for each request, with costs charged to your on-chain account. 

## On-Ledger vs Off-Ledger Requests

Requests can be on-ledger, that is, processed through 
the Tangle, or off-ledger, directly sent to validators for faster processing.
