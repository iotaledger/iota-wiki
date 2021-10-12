---
id: smart-contracts-VM-and-languages
title: Smart Contract VM & Languages
description: This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins.
keywords:
  - Virtual Machines
  - VM
  - Smart Contracts
  - wasp
  - iscp
  - Wasm
  - EVM
  - Rust
  - Go
  - Solidity
---

This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins.

You will learn:

- What is a Virtual Machine and what are plugins?
- Differences between WASM-VM and EVM plugins
- Which programming languages are supported?

## The Virtual Machine

In IOTA Smart Contracts we distinguish two things:

- The Virtual Machine (VM) itself
- VM plugins: processors, smart contracts which dynamically extend the VM.

The VM itself is a deterministic executable, a "black box".

The VM can be extended dynamically by adding VM plugins, the VM processors which run deterministic smart contract programs.

In IOTA Smart Contracts, an abstraction is a collection of generic interfaces which makes the whole architecture of IOTA Smart Contracts and the Wasp node agnostic about what exact kind of deterministic computation machinery is used to run smart contract programs.

Currently, there are two VM plugins available, the [WASM VM](https://wiki.iota.org/wasp/guide/rust_wasm/introduction) and the [Ethereum VM (EVM)](https://wiki.iota.org/wasp/guide/evm/introduction/).

## WASM VM

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Any high-level language can be used to write an IOTA Smart Contract to be compiled into Wasm. The WASM VM currently supports the Go and Rust programming languages.

### Why We Choose Rust

We use Rust as a high-level language to write Smart Contracts(SC) programs for several reasons:

- The Wasm tooling is very advanced, so Rust programs can easily be compiled into Wasm binaries.
- The flexibility and memory management model of Rust allows minimum runtime overhead in the Wasm binary.
- Wasm binaries generated from Rust are very small, just a few kilobytes
- Rust is becoming a popular language of choice for SC development with good support and a wide developer community.

### Why We Choose Go

It's also possible to write an IOTA Smart Contract in the Go programming language. Using Go has the following advantages:```

- The [Wasp Node](https://github.com/iotaledger/wasp) is programmed in Go, as is the [Test Framework Solo](https://wiki.iota.org/wasp/guide/solo/what-is-solo/).
- Go is easy to understand and learn.
- Go is a very popular language within the community.

## Ethereum VM (EVM)

The [Ethereum Virtual Machine (EVM)](https://ethereum.org/en/developers/docs/evm/) is the runtime environment in Ethereum that allows the development of Smart Contracts with the [Solidity](https://docs.soliditylang.org/en/v0.8.9/) programming language.

Solidity is an object-oriented programming language specially developed to write smart contracts.

The [IOTA Smart Contract EVM Plugin](https://wiki.iota.org/wasp/guide/evm/introduction/) leverages the current development of Solidity Smart Contracts and allows Blockchain developers to stay in their comfort zone.

In the next article, you will learn everything about the IOTA Smart Contract validators.
