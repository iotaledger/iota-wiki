---
description: INX-Indexer is a ledger indexing tool to provide structured and queryable data to wallets and other applications.
image: /img/banner/banner_hornet.png
tags:
  - IOTA Node
  - Hornet Node
  - INX
  - Indexer
  - IOTA
  - Shimmer
  - Node Software
  - Welcome
  - explanation
---

# Welcome to INX-Indexer

INX-Indexer is a ledger indexing tool to provide structured and queryable data to wallets and other applications.
The indexer maintains its own database separate from that of the node.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-indexer).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The indexer is configured by default to connect to your HORNET instance.

You can find all the configuration options in the [configuration section](configuration.md).

## API

The indexer exposes a custom set of REST APIs that can be used by wallets and applications to find UTXO in the ledger with a given query.

You can find more information about the API in the [API reference section](api_reference.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-indexer).
