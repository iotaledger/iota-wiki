---
title: DevNet
description: My document description from SEO
---

# Developer Networks

There are two main Developer Networks in the IOTA Eco-System to support the live network (Chrysalis 1.5) and the future network (GoShimmer 2.0). Both developer networks have various supporting documents and developer tools relative to its implementation.

## Devnet 1.5 (Chrysalis)

Since the Chrysalis update, the `testnet` is now called `devnet`. We recommend you use the `devnet` to develop and test your application.

### Public Infrastructure[#](https://wiki.iota.org/chrysalis-docs/devnet/#public-infrastructure)

The IOTA Foundation provides the following load-balanced public devNet endpoint:

- <https://api.lb-0.h.chrysalis-devnet.iota.cafe/>
- <https://api.lb-1.h.chrysalis-devnet.iota.cafe/>

### Info

We recommend using the load balancer for most scenarios.

Single node endpoints that expose native [MQTT](https://mqtt.org/), in case you need them, are:

- [mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883](https://wiki.iota.org/chrysalis-docs/mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883)
- [mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883](https://wiki.iota.org/chrysalis-docs/mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883)

These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this [specification](https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml)) over TLS.

### Developer tools[#](https://wiki.iota.org/chrysalis-docs/devnet/#developer-tools)

- Explorer - <https://explorer.iota.org/devnet>
- Online Faucet - <https://faucet.chrysalis-devnet.iota.cafe/>
- cli-wallet - <https://github.com/iotaledger/cli-wallet>
- Faucet Code (nodejs + svelte) - <https://github.com/iotaledger/chrysalis-faucet>

## Devnet 2.0 (GoShimmer)

This is the implementation of the upcoming fully decentralized IOTA 2.0 Protocol. The network here does not use or need a coordinator anymore, and utilizes Testnet Iota tokens without value to fine-tune, test, and optimize the upcoming development stage of the IOTA Protocol together with the IOTA community.

This network is composed of Goshimmer nodes and while many nodes in the 2.0 Devnet are run and maintained by the Iota Foundation, anyone can contribute by running their own nodes. Having a larger network is beneficial for testing newly researched and developed concepts and ideas, catching bugs, and ironing out finished components.

### Devnet 2.0 Features

**Decentralized, secure & permissionless**Based on a leaderless consensus protocol, IOTA 2.0 is the most decentralized distributed ledger protocol able to handle more than just payments.

**Finality within seconds**Transactions reach finality in seconds without having to wait for confirmations by centralized entities, and regardless of the amount of network participants.

**Lightweight and modular**Low-power devices do not have issues running a node as message creation and validation are not expensive operations. Our modular approach enables countless extensions of the base protocol through additional modules.

**Feeless transactions**IOTA 2.0 enables the secure transfer of data and value between humans and machines, opening up new business models based on micro-payments.

### Developer Tools

- API - <https://nodes.nectar.iota.cafe/>
- Explorer - <https://v2.iota.org/explorer>
- Visualiser - <https://v2.iota.org/visualizer>
- Token Registry - <https://v2.iota.org/coin-registry>
- DevNet 2.0 Wallet - <https://github.com/iotaledger/IOTA-2.0-DevNet-wallet/releases/tag/v0.7.0>
