---
description: INX-IRC-Metadata enables you to query the metadata of NFT and native tokens.
image: /img/Banner/banner_hornet.png
keywords:
- IOTA Node
- Hornet Node
- INX
- Metadata
- IRC
- IRC27
- IRC30
- NFT
- Native Token
- IOTA
- Shimmer
- Node Software
- Welcome
- explanation
---

# Welcome to INX-IRC-Metadata

INX-IRC-Metadata enables you to query the metadata of NFT following the [IRC27 - IOTA NFT standards](https://github.com/iotaledger/tips/blob/main/tips/TIP-0027/tip-0027.md) and native tokens following the [IRC30 - Native Token Metadata Standard](https://github.com/iotaledger/tips/blob/main/tips/TIP-0030/tip-0030.md).
Given a piece of data or transaction and the proof, you can verify whether it was included in the Tangle at any given time.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-irc-metadata).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The extension will connect to your local HORNET instance by default.

You can find all the configuration options in the [configuration section](configuration.md).

## API

The extension exposes a custom set of REST APIs that you can use to query the metadata.

You can find more information about the API in the [API reference section](api_reference.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-irc-metadata).