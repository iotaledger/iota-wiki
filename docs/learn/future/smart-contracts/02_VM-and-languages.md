---
id: smart-contracts-VM-and-languages
title: Smart Contract VM & Languages
description: This article explains the underlaying technologies of IOTA Smart Contracts - the Virtual Machine and it's plugins.
---

This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine and it's plugins.

You will learn:

- What is a Virtual Machine and plugins?
- Differences between WASM-VM and EVM plugins?
- Which programming languages are supported?

## The Virtual machine

In IOTA Smart Contracts we distinguish two things:

- The VM (Virtual Machine) itself
- and VM plugins (processors, smart contracts), a pluggable part of the VM.

The VM itself is a deterministic executable, a "black box".

The VM can be extended dynamically by adding VM plugins, the VM processors which run deterministic smart contract programs.

By VM abstraction in IOTA Smart Contracts we understand a collection of generic interfaces which makes the whole architecture of IOTA Smart Contracts and the Wasp node agnostic about what exact kind of deterministic computation machinery is used to run smart contract programs.

Currently, there are two VM plugins available, the WASM VM and the Ethereum VM (EVM).

## WASM VM

Theoretically any high level language can be used to write a IOTA Smart Contract to be compiled into Wasm. WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. The WASM VM supports for now the programming languages Go and Rust.

### Why we choose Rust

We use Rust as a high level language to write SC programs for several reasons:

- The Wasm tooling is very advanced so Rust programs can easily be compiled into Wasm binaries
- The flexibility and memory management model of Rust allows minimum runtime overhead in the Wasm binary
- Wasm binaries generated from Rust can be very small, just a few kilobytes
- Rust is becoming a popular language of choice for SC development with good support and a wide developer community.

### Why we choose Go

It's also possible to write an IOTA Smart Contract in the Go programming language.  Using Go has the following advantages:```

- The [Wasp Node](https://wiki.iota.org/wasp/overview) is programmed in Go, as is the Test Framework Solo.
- Go is easy to understand and learn.
- Go is a very popular language within the community.

## Ethereum VM (EVM)

The Ethereum Virtual Machine (EVM) is the runtime environment in Ethereum and allows the development of Smart Contracts with the programming language Solidity.

Solidity is an object-oriented programming language specially developed to write smart contracts.

The [IOTA Smart Contract EVM Plugin](https://wiki.iota.org/wasp/guide/evm/introduction/) leverages the current development of Solidity Smart Contracts and allows Blockchain developers to stay in their comfort zone.

On the next chapter, you will learn everything about the IOTA Smart Contract validators.
