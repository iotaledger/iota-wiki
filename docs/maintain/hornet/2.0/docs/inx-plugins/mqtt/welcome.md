---
description: INX-MQTT provides an event-based real-time streaming node API.
image: /img/banner/banner_hornet.png
tags:
  - IOTA Node
  - Hornet Node
  - INX
  - MQTT
  - IOTA
  - Shimmer
  - Node Software
  - Welcome
  - explanation
---

# Welcome to INX-MQTT

INX-MQTT provides an event-based real-time streaming node API.
The built-in MQTT broker offers a list of topics clients can subscribe to, to receive the latest blocks and outputs attached on the tangle.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-mqtt).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The MQTT broker is configured by default to connect to your HORNET instance.

You can find all the configuration options in the [configuration section](configuration.md).

## API

The MQTT broker exposes a custom set of topics that can be used by wallets and applications to receive events from nodes.

You can find more information about the API in the [API reference section](api_reference.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-mqtt).
