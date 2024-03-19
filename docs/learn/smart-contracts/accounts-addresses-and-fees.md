---
description: An overview of account types, gas costs, and fees in IOTA Smart Contracts for efficient transaction management.
image: /img/logo/WASP_logo_dark.png
tags:
  - IOTA Smart Contracts
  - Accounts and Addresses
  - Gas and Fees
  - Blockchain
  - Digital Assets
---

# Accounts, Addresses, and Fees

## TL;DR;

- [Types of Accounts](#types-of-accounts): IOTA Smart Contracts feature Layer 1 and Layer 2 accounts, each serving
  different roles and facilitating asset transfers across the blockchain.
- [Gas](#gas): Running requests in IOTA Smart Contracts incurs a 'gas' cost, with users setting a `GasBudget` to manage
  their spending.
- [Gas Budget](#gas-budget): The `GasBudget` allows users to define a spending limit for their requests, aligning with
  the chain’s fee policy.
- [Allowance](#allowance): The `Allowance` system controls the fund usage in smart contracts, ensuring only authorized
  transactions are processed.

## Types of Accounts

In the world of IOTA Smart Contracts, accounts play a pivotal role. These accounts exist on two levels: Layer 1 (L1) and
Layer 2 (L2). L1 addresses control assets on the IOTA ledger, and each smart contract chain has a unique L1 address,
acting as a custodian for L1 assets. On the L2 ledger, accounts can be owned by various entities, each identified by a
unique Agent ID. An L2 account can belong to a standard L1 address, a specific smart contract, or even an Ethereum
address, enabling trustless asset transfers between different entities on the same or different chains.

## Gas

In the IOTA Smart Contract ecosystem, running a request in a chain incurs a cost known as 'gas'. Each operation within a
smart contract, like arithmetic calculations or data storage, has an associated gas cost.

### Gas Budget

Users define a `GasBudget` for their requests, which represents the maximum cost they are willing to pay. This fee is
charged based on the chain’s fee policy and is deducted from the user's on-chain account.

### Allowance

Additionally, the concept of `Allowance` is crucial as it defines the funds a smart contract can use on behalf of the
caller. This mechanism ensures that only an authorized amount of funds can be utilized in transactions.

:::tip Dive Deeper

You can gain a deeper understanding
of [accounts](/isc/explanations/how-accounts-work), [gas](/isc/explanations/invocation#gas)
and [allowance](/isc/explanations/invocation#allowance) in the [IOTA Smart Contracts](/isc/introduction) documentation.

:::