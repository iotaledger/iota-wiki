---
description: INX-Faucet is a faucet application for test and development networks as well as for private networks.
image: /img/banner/banner_hornet.png
tags:
  - IOTA Node
  - Hornet Node
  - INX
  - Faucet
  - IOTA
  - Shimmer
  - Node Software
  - Welcome
  - explanation
---

# Welcome to INX-Faucet

INX-Faucet is a faucet application for test and development networks as well as for private networks.
Faucets are useful in test and private networks to distribute test tokens to developers.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-faucet).

To run your own faucet you need to provide a private key containing funds to the faucet. To do this you start `inx-faucet` by passing a `FAUCET_PRV_KEY` environment variable containing the private key.

The faucet includes a generic web UI that will be reachable at `http://localhost:8091` by default.

## Configuration

The faucet is configured by default to connect to your HORNET instance.

You can find all the configuration options in the [configuration section](configuration.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-faucet).
