---
title: Node Software
description:
  The Shimmer networks consist of interconnected nodes that run the same
  node software. We introduce the different available types and provide guides
  that will help in setting those nodes up.
image: /img/participate/banner/banner_node_software.png
---

# Node Software

![Node Software](/img/participate/banner/banner_node_software.png)

**The Shimmer networks consist of interconnected nodes that run a node software. This software gives nodes read and write access to the Tangle, allows them to validate transactions, and allows them to store transactions in their local ledgers.**

## Hornet

Hornet is a powerful, Shimmer node software written in Go. It is easy to install and runs on low-end devices like the Raspberry Pi 4. Hornet is being built and maintained by the IOTA Foundation. Hornet is a full-fledged software providing full node capabilities including full support of the Stardust network update. The Hornet software will be further developed to run in the upcoming decentralized IOTA 2.0 network.

By running your own node you have the following benefits:

- Direct access to the Shimmer network instead of having to connect to and trust someone else's node
- You help the Shimmer network to become more distributed and more resilient by validating messages and value transactions in the Shimmer network

The full documentation and the source code for Hornet can be found here:

- [Hornet Documentation](/hornet/welcome)
- [Hornet GitHub](https://github.com/gohornet/hornet)
- [Hornet Installation guide](/hornet/how_tos/using_docker)

### Hornet Community Tutorials

Guides and easy one line installation scripts created by IOTA community members:

- [SWARM Hornet](https://github.com/tanglebay/swarm-releases)

## INX Plugins

INX plugins are Node extensions (IOTA Node Extension interface) which communicate to the Node over [gRPC](https://grpc.io). They can track ledger updates, check the node status and more.

- [INX Github](https://github.com/iotaledger/inx)

## Bee

The Shimmer version of Bee is in maintenance mode and may not always be up-to-date.

The full documentation and the source code for Bee can be found here:

- [Bee GitHub](https://github.com/iotaledger/bee)

## GoShimmer

GoShimmer is a prototype node software exploring the implementation of IOTA 2.0. It is a research and engineering project from the IOTA Foundation seeking to evaluate Coordicide concepts by implementing them in a node software.

Due to the prototypical nature of the project, things written today may reflect how things are tomorrow.

The software is written in Go and is currently the software used in the IOTA 2.0 DevNet where the upcoming IOTA 2.0 version without a coordinator node is tested and optimized in collaboration with a huge amount of community contributors. GoShimmer allows testing and analyzing all upcoming features of IOTA and is therefore an essential part of the ongoing IOTA Research.

GoShimmer will not be developed as an upcoming Mainnet node Software.

The full documentation and the source code for GoShimmer can be found here:

- [GoShimmer Documentation](/goshimmer/welcome)
- [GoShimmer GitHub](https://github.com/iotaledger/goshimmer)
- [GoShimmer Installation guide](/goshimmer/tutorials/setup)

### GoShimmer Community Tutorials

- [SWARM GoShimmer](https://github.com/tanglebay/swarm)
- [Nuriels GoShimmer Playbook](https://github.com/nuriel77/goshimmer-playbook)
- [DeMichelle Shell Script](https://github.com/demichele/install-goshimmer)
