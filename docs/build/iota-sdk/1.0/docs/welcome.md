---
image: '/img/banner/client_lib_overview.png'
description: 'Learn about the IOTA SDK, its main modules (client and wallet), available programming languages (Rust, Node.js, Python, and Wasm), secure secret management using Stronghold, and how to join the discussion and get support.'
tags:
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
and IOTA networks running the [Stardust protocol](/learn/protocols/stardust/introduction).
It consists of two main modules: `client` and `wallet`.

The `wallet` module uses high-level functions that simplify everyday operations with a standardized interface for
developers to build value transaction applications. Unlike the `client` module, the `wallet`
module is stateful. It can optionally interact with [IOTA Stronghold](https://github.com/iotaledger/stronghold.rs/) for seed handling, storage, and state backup.

The `client` module provides more flexibility and access to low-level functions, which are usually kept "under the hood" by the
`wallet` module. It aims to allow you to customize how you interact with the network in depth, at the cost of
additional complexity.

You can use this documentation to get your application up and running in using the
[programming language of your choice](#available-programming-languages),
[connect to the testnet](explanations/testnet-and-test-tokens.md#connect-to-the-testnet-api),
[explore the network](explanations/testnet-and-test-tokens.md#explore-the-network),
and [get test tokens](explanations/testnet-and-test-tokens.md#get-test-tokens) to develop your application.

## Available Programming Languages

The IOTA SDK is written in [Rust](getting-started/rust.mdx) and also has convenient bindings
in [Node.js](getting-started/nodejs.mdx), [Python](getting-started/python.mdx) and [Wasm](getting-started/wasm.mdx).

Each of these languages has specific set-up instructions you will need to follow to use the IOTA SDK in your project. The bindings libraries are individually adjusted for the language's conventions and best practices. For example, Python developers avoid the Builder
programming pattern, so the Python binding uses named constructor arguments.

## Your Application In the IOTA Network

Your application communicates directly with the IOTA SDK in Rust or through one of the language bindings. The IOTA SDK
turns your requests into REST API calls and sends them to a node. The node, in turn, interacts with the rest of an
IOTA network, which could be the
[main operational network (mainnet)](/build/networks-endpoints#shimmer)
or
a [network for testing purposes (testnet)](/build/networks-endpoints#public-testnet).

!["An overview of the IOTA SDK layers."](/img/layered_overview.png 'An overview of the IOTA SDK layers.')

## Secure Secret Management

You can use [Stronghold](/stronghold.rs/welcome) for secure secret management. Stronghold
can store the encrypted seed at rest. It is not possible to extract the seed from Stronghold for security purposes.
Stronghold uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots
are further secured with a password.

## Join the Discussion

If you want to get involved in discussions about this library, or you're looking for support, go to the `#libraries`
channel
on [Discord](https://discord.iota.org).
