---
description: 'You can use the IOTA client libraries to handle communications between your node and
your Layer 1 network of choice.'
image: /img/shimmer-wiki.png
---

# IOTA Client Libraries

:::note tl;dr;

You can use the IOTA client libraries to handle communications between your node and
your [Layer 1 network](layer-1-landscape.md) of choice.

The IOTA foundation recommends using [wallet.rs](#walletrs) for value transactions.

:::

:::tip Free and Open-Sourced

All the libraries mentioned in this section are free, open-sourced, and maintained by both
the [IOTA Foundation](https://www.iota.org/) and
the [IOTA Community](https://wiki.iota.org/shimmer/community/the-community/how-to-support/).

:::

## Simple by Default, as Complex as You May Need

IOTA Client libraries handle the communications between your software and
the Shimmer network. They are designed to simplify how you connect and interact with nodes in the network by providing
high-level helper functions which combine multiple atomic REST-API commands under the hood and use sensible defaults.
However, you can still customize your application by overriding the default parameters or combining atomic REST-API
commands to suit your needs.

## High-level Overview

|                                    | [wallet.rs](#walletrs) | [iota.rs](#iotars) | [iota.js](iotajs) |
| ---------------------------------- | ---------------------- | ------------------ | ----------------- |
| Main language                      | Rust                   | Rust               | TypeScript        |
| Java binding                       | Yes                    | Yes                | No                |
| Python binding                     | Yes                    | Yes                | No                |
| NodeJs binding                     | Yes                    | Yes                | No                |
| Stateful                           | Yes                    | No                 | No                |
| Recommended for value transactions | Yes                    | No                 | No                |
| Secured by Stronghold              | Always                 | Optional           | Optional          |
| Latest Features                    | Yes                    | Yes                | Almost            |

## wallet.rs

The [wallet.rs library](https://wiki.iota.org/shimmer/wallet.rs/welcome/) is a **stateful** package that you can use to
build **any application that manages funds** in the Shimmer network, for example, an exchange.

### Secured by Stronghold

The wallet.rs library uses [Stronghold](https://wiki.iota.org/shimmer/stronghold.rs/welcome/) to generate and store
encrypted seeds at rest. By design,
Stronghold uses [non-contiguous data types](https://wiki.iota.org/stronghold.rs/explanations/non-contiguous-data-types/)
and [cryptographic procedures](https://wiki.iota.org/stronghold.rs/explanations/procedures/) to create password
protected snapshots that you can easily back up or share between devices.

### Flexible Account Models

The library supports
both [single-ccount](https://wiki.iota.org/shimmer/wallet.rs/explanations/account_approaches/#single-account-approach)
and [multi-account](https://wiki.iota.org/shimmer/wallet.rs/explanations/account_approaches/#multi-account-approach)
models. You can use the multi-account model if you want to create an individual account for each of your users, or
the
single-account model if you want to control a single account from which you can generate an address for each of your
users.

### Available Languages

The wallet.rs library is written in [Rust](https://wiki.iota.org/shimmer/wallet.rs/getting_started/rust/) and has
bindings in [Java](https://wiki.iota.org/shimmer/wallet.rs/getting_started/java/),
[Node.js](https://wiki.iota.org/shimmer/wallet.rs/getting_started/nodejs/)
and [Python](https://wiki.iota.org/shimmer/wallet.rs/getting_started/python/).

## iota.rs

The [iota.rs library](https://wiki.iota.org/shimmer/iota.rs/welcome/) is a **stateless** package that you can use to
build any application that communicates with the Shimmer network. Its **stateless** approach makes the library easy to
use and understand. It also gives you full control over data management for your application.

:::danger Funds and Sensitive Data

If your application manages funds or sensitive data, please consider using [wallet.rs](#walletrs), which was
designed with that use in mind.

:::

### Available Languages

The iota.rs library is written in [Rust](https://wiki.iota.org/shimmer/iota.rs/getting_started/rust/), and has
bindings in [Java](https://wiki.iota.org/shimmer/iota.rs/getting_started/java/),
[Node.js](https://wiki.iota.org/shimmer/iota.rs/getting_started/nodejs/)
and [Python](https://wiki.iota.org/shimmer/iota.rs/getting_started/python/).

### iota.js

The [iota.js library](https://wiki.iota.org/shimmer/iotajs/welcome/) is based on [iota.rs](#iotars). Since the iota.js
library is written in Typescript, it can strongly type objects it sends to and receives from
a [Hornet Node](nodes/hornet.md) through API calls, and you can use it both browser or Node.js
environments.

Keep in mind that though iota.js is functionally complete, [iota.rs](#iotars) is maintained by more contributors and has
the latest features.
