---
image: '/img/banner/client_lib_overview.png'
description: 'Learn about the IOTA SDK, its main modules (client and wallet), available programming languages (Rust, Node.js, Python, and Wasm), secure secret management using Stronghold, and how to join the discussion and get support.'
keywords:
  - IOTA SDK
  - Rust
  - client
  - wallet
  - Node.js
  - Python
  - Wasm
  - Stronghold
  - secret management
  - IOTA network
  - discussion
  - support
---

# About the IOTA SDK

![IOTA SDK Overview](/img/banner/client_lib_overview.png)

The IOTA SDK provides a convenient and efficient way to interact with nodes in the Shimmer
and IOTA networks running the [Stardust protocol](https://wiki.iota.org/shimmer/develop/explanations/what-is-stardust).
It consists of two main modules: `client` and `wallet`.

The `wallet` uses high-level functions that simplify everyday operation with a standardized interface for developers to
build applications involving value transactions. Unlike the `client` module, it maintains a state. It can optionally
interact
with [IOTA Stronghold](https://github.com/iotaledger/stronghold.rs/) for seed handling, storage, and state backup.

The `client` provide more flexibility and access to low-level functions, which are usually kept "under the hood" by the
`wallet` module. It aims to allow you to customize in depth how you interact with the network, at the cost of some
additional
complexity.

You can use this documentation to get your `wallet` or `client` up and running in
the [programming language of your choice](#available-programming-languages), [connect to the testnet](explanations/testnet-and-test-tokens.md#connect-to-the-testnet-api), [explore the network](explanations/testnet-and-test-tokens.md#explore-the-network),
and [get test tokens](explanations/testnet-and-test-tokens.md#get-test-tokens) to develop your application.

## Available Programming Languages

The IOTA SDK is written in [Rust](getting-started/rust.mdx) and also has convenient bindings
in [Node.js](getting-started/nodejs.mdx), [Python](getting-started/python.mdx) and [Wasm](getting-started/wasm.mdx).

Each of these languages has specific set up instructions you will need to follow to use IOTA SDK in your project. Every
binding is adjusted for the language's conventions and best practices. For example, Python developers avoid the Builder
programming pattern, so our Python binding uses named constructor arguments. 

## Your Application In the IOTA Network

Your application communicates directly with the IOTA SDK in Rust or through one of the language bindings. The IOTA SDK turns
your requests into REST API calls and sends them to a node. The node, in turn, interacts with the
rest of an IOTA network, which could be
the [main operational network (mainnet)](https://wiki.iota.org/shimmer/develop/explanations/what-is-shimmer/networks/#shimmer-mainnet)
or
a [network for testing purposes (testnet)](https://wiki.iota.org/shimmer/develop/explanations/what-is-shimmer/networks/#public-testnet). !["An overview of the IOTA SDK layers."](/img/layered_overview.svg 'An overview of the IOTA SDK layers.')

## Secure Secret Management

You can use [Stronghold](https://wiki.iota.org/shimmer/stronghold.rs/welcome) for secure secret management. Stronghold
can store the encrypted seed at rest. It is not possible to extract the seed from Stronghold for security purposes.
Stronghold uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots
are further secured with a password.

## Join the Discussion

If you want to get involved in discussions about this library, or you're looking for support, go to the `#iota-sdk`
channel
on [Discord](https://discord.iota.org).
