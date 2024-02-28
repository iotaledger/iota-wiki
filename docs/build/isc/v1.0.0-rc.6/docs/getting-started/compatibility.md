---
description: Compatibility between the ISC EVM layer and existing Ethereum smart contracts and tooling.
image: /img/logo/WASP_logo_dark.png
tags:
  - smart contracts
  - EVM
  - Ethereum
  - Solidity
  - limitations
  - compatibility
  - fees
  - reference
---

# EVM Compatibility in IOTA Smart Contracts

The [`evm`](../reference/core-contracts/evm.md) [core contract](../reference/core-contracts/overview.md)
provides EVM support in IOTA Smart Contracts. It stores the EVM state (account balances, state, code,
etc.) and provides a way to execute EVM code to manipulate the state.

The EVM core contract runs on top of the ISC layer, which provides the rest of the machinery needed to run smart
contracts, such as signed requests, blocks, state, proofs, etc.

However, the ISC EVM layer is also designed to be as compatible as possible with existing Ethereum tools
like [MetaMask](https://metamask.io/), which assume that the EVM code runs on an Ethereum blockchain composed of
Ethereum blocks containing Ethereum transactions. Since ISC works in a fundamentally different way,
providing 100% compatibility is not possible. We do our best to emulate the behavior of an Ethereum node, so the
Ethereum tools think they are interfacing with an actual Ethereum node, but some differences in behavior are inevitable.

## Properties and Limitations

Here are some of the most important properties and limitations of EVM support in IOTA Smart Contracts:

### No Enforced Block Time

There is no guaranteed _block time_. A new EVM "block" will be created only when an ISC block is created, and ISC does
not enforce an average block time. This means that block times are variable; a new block will be created as soon as needed. 
The average block time on [ShimmerEVM](/build/networks-endpoints#shimmerevm) is 2.8 seconds.

### The Magic Contract

A [dedicated Ethereum contract](../how-tos/core-contracts/introduction.md) exists to manage Layer 1 tokens and ISC
functionalities, introducing commands like `isc.send(...)` for token transfers.

### Gas Fees

Gas fees are set by the chain.
