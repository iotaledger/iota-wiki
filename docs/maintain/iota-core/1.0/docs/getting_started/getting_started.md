---
description: Getting started with the recommended requirements and installation links.
image: /img/icons/iota/iota_core.png
tags:
  - IOTA Node
  - IOTA-Core Node
  - Linux
  - macOS
  - Windows
  - Docker
  - reference
  - Requirements
---

# Getting Started

Running a node is an efficient way to use IOTA. By doing so, you have direct access to the Tangle instead of connecting
to and trusting someone else's node. Additionally, you help the network to become more distributed and resilient.

## Recommended Requirements

To handle a potentially high rate of blocks per second, nodes need enough computational power to run reliably and
should have the following minimum specs:

- 4 cores or 4 vCPU.
- 8 GB RAM.
- SSD storage.
- A public IP address.

The amount of storage you will need will depend on whether and how often you plan on _pruning_ old data from your local
database.

IOTA-Core exposes different functionality on different ports:

- `15600 TCP` - Gossip protocol port.
- `14265 TCP` - REST HTTP API port (optional).

These ports are essential for flawless node operation. The REST HTTP API port is optional and is only needed if
you want to offer access to your node's API. You can customize all ports using
the [`config.json`](../how_tos/post_installation.md) file.

## Operating System

The IOTA-Core software is written in Go and can be deployed on all major platforms.
The [recommended setup](../how_tos/using_docker.md) uses Docker to run IOTA-Core together with some INX extensions
secured behind a [Traefik](https://traefik.io) SSL reverse proxy.

## Configuration

IOTA-Core uses two JSON configuration files that you can tweak based on your deployment requirements:

- `config.json` - Includes all core configuration parameters.
- `peering.json` - Includes connection details to node neighbors (peers).

You can read more about the configuration in the [post installation](../how_tos/post_installation.md) article.
