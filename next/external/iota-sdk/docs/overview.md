---
description: 'The IOTA SDK is designed to simplify how you connect and interact
with nodes in the Tangle.'
keywords:

- layered overview
- high level
- low level
- stronghold
- value transactions
- explanation

---

# Overview

![IOTA SDK Overview](/img/banner/client_lib_overview.png)

The IOTA SDK is designed to simplify how you connect and interact
with [nodes](https://wiki.iota.org/shimmer/introduction/explanations/node_software) in the Tangle. You can use it to generate
addresses, send messages, sign and send transactions, and more.

## Supported Languages

We implemented the IOTA SDK in [Rust] and prepared bindings
for [JavaScript], [Python], and [Java]. Every binding is adjusted for the language's conventions and best
practices. For example, Python developers avoid the Builder programming pattern, so our
Python binding uses named constructor arguments. However, we never change the meaning behind our API, which is equally
powerful no matter which language you choose.

## Your Application In the IOTA Network

Your application communicates with the IOTA SDK either directly in Rust or through one of the language bindings. IOTA SDK turns your requests into REST API calls and sends them to a node through the Internet. The node, in turn,
interacts with the rest of an IOTA network, which could be
the [main operational network (mainnet)](https://wiki.iota.org/introduction/reference/networks/mainnet) or
a [network for testing purposes (devnet)](https://wiki.iota.org/introduction/reference/networks/devnet).

![](/img/iota_layers_overview.svg "An overview of IOTA layers.")

## API Design

TODO