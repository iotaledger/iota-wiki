---
description: INX-POI enables you to generate and verify Proof-of-Inclusion of blocks in the Tangle.
image: /img/Banner/banner_hornet.png
keywords:
- IOTA Node
- Hornet Node
- INX
- POI
- Proof-Of-Inclusion
- Proof
- Inclusion
- IOTA
- Shimmer
- Node Software
- Welcome
- explanation
---

# Welcome to INX-POI

INX-POI enables you to generate and verify Proof-of-Inclusion of blocks in the Tangle.
Given a piece of data or transaction and the proof, you can verify whether it was included in the Tangle at any given time.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-poi).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The extension will connect to your local HORNET instance by default.

You can find all the configuration options in the [configuration section](configuration.md).

## API

The extension exposes a custom set of REST APIs that you can use to generate or validate proofs.

You can find more information about the API in the [API reference section](api_reference.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-poi).