---
description: An overview of the ISC Protocol, detailing the function and interaction of smart contracts, virtual machines, validators, state, and blockchains in IOTA.
image: /img/logo/WASP_logo_dark.png
tags:
  - ISC Protocol
  - IOTA Smart Contracts
  - Virtual Machines
  - Validators
  - Blockchain Technology
---

# ISC Protocol Overview

## TL;DR;

- [Smart Contracts](#smart-contracts): Digital programs on a blockchain, written in various programming languages,
  compiled into bytecode and executed by virtual machines.
- [Virtual Machines](#virtual-machines): Essential engines that run smart contracts, process inputs, and enforce rules,
  with IOTA supporting EVM and WASM VM.
- [Validators](#validators): Key network components operating virtual machines, managing blockchain state and history,
  and facilitating smart contract execution.
- [State](#state): The dynamic data interacted with and altered by smart contracts, forming the blockchain's historical
  record.
- [Blockchains](#blockchains): Structures of linked blocks containing state updates, representing the chain’s history
  and enabling parallel smart contract execution.

## Smart Contracts

Smart contracts are like digital programs on a blockchain, consisting of functions that either view or update the
blockchain's state based on given inputs. They are versatile, written in languages like Solidity, Rust, or Go, and are
compiled into bytecode. This bytecode is then executed by a [virtual machine](#virtual-machines), acting as the
blockchain's engine to process these contracts.

## Virtual Machines

Virtual machines, operated by [Validators](#validators), are the execution engines of smart contracts that understand smart contract bytecode and are able compute state changes. They take the
current [state](#state) of the [blockchain](#blockchains) and the inputs from users, execute the smart contract's
bytecode, and produce a new state. These machines also set rules and restrictions for smart contracts, ensuring secure
and orderly operation. The IOTA architecture currently supports two types of virtual machines:

* The production-ready EVM (Ethereum Virtual Machine)
* The **experimental** WASM VM (WebAssembly Virtual Machine).

## Validators

Validators are critical components in a blockchain network. They operate the virtual machines and are responsible for
storing the [state](accounts-addresses-and-fees.md) and history of the blockchain. Validators process requests to run
smart contracts,
achieve consensus on state updates, and create a blockchain that represents the history of said state updates.

## State

The state in a [blockchain](#blockchains) is a key-value store that smart contracts interact with and modify. It's a result of smart contract execution, committed in blocks, forming a blockchain representing the history of state updates leading to the current state.

## Blockchains

Blockchains in IOTA are structures composed of blocks linked cryptographically, containing [state](#state) updates. They
chronicle the history of all updates leading to the current state. Chain owners own these blockchains which are produced
by validators. These blockchains are anchored in the IOTA ledger, allowing for parallel anchoring of chains and enabling
simultaneous execution of smart contracts across different chains.

:::tip Dive Deeper

You can gain a deeper understanding
of [validators](/isc/explanations/validators#validators) and [access nodes](/isc/explanations/validators#access-nodes)
in the [IOTA Smart Contracts](/isc/introduction) documentation.

:::