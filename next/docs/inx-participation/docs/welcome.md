---
description: INX-Participation is an extension for nodes to enable on-tangle voting.
image: /img/Banner/banner_hornet.png
keywords:
- IOTA Node
- Hornet Node
- INX
- Participation
- IOTA
- Shimmer
- Node Software
- Welcome
- explanation
---

# Welcome to INX-Participation

INX-Participation is an extension for nodes to enable on-tangle voting. 
The extensions maintains its own database separate from that of the node and provides means to track events and votes.

You can find more information on how participation events work in the [HORNET Participation Plugin](https://github.com/iota-community/treasury/blob/main/specifications/hornet-participation-plugin.md) specification.


## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-participation).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The participation extension is configured by default to connect to your HORNET instance.

You can find all the configuration options in the [configuration section](configuration.md).

## Dashboard

If you are using the [INX-Dashboard](https://github.com/iotaledger/inx-dashboard) on your node, you can manage events directly from your browser.

## API

The extension exposes a custom set of REST APIs that can be used by wallets and applications to find active, past and upcoming participation events and query event results.

You can find more information about the API in the [API reference section](api_reference.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-participation).