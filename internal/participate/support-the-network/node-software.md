---
title: Node Software
description: IOTA networks consist of interconnected nodes that run the same
  node software. We introduce the different available types and provide guides
  that will help in setting those nodes up.
image: /img/participate/banner/banner_node_software.png
---

# Node Software

![Node Software](/img/participate/banner/banner_node_software.png)

**IOTA networks consist of interconnected nodes that run a node software. This software gives nodes read and write access to the Tangle, allows them to validate transactions, and allows them to store transactions in their local ledgers.**

## Hornet

Hornet is a powerful, community-driven IOTA node software written in Go. It is easy to install and runs on low-end devices like the Raspberry Pi 4. Hornet is being built and maintained by a group of community developers alongside the IOTA Foundation. Hornet is a full-fledged software providing full node capabilities including full support of the Chrysalis network update. The Hornet software will be further developed to run in the upcoming decentralized IOTA 2.0 network.

By running your own node you have the following benefits:

- Direct access to an IOTA network instead of having to connect to and trust someone else's node
- You help the IOTA network to become more distributed and more resilient by validating messages and value transactions in the IOTA network

The full documentation and the source code for Hornet can be found here:

- [Hornet Documentation](/hornet/welcome)
- [Hornet GitHub](https://github.com/gohornet/hornet)
- [Hornet Installation guide](/hornet/getting_started)

### Hornet Community Tutorials

Guides and easy one line installation scripts created by IOTA community members:

- [SWARM Hornet](https://github.com/tanglebay/swarm-releases)
- [Nuriel's playbook](https://github.com/nuriel77/hornet-playbook)
- [DeMicheles one-liner using Nuriels Playbook](https://github.com/demichele/install-hornet-1.5)
- [Install Hornet Mainnet Node using `apt` – Tutorial by Svenger 87 ](https://github.com/svenger87/hornet-alphanet-tutorial)
- [Run Hornet on a Raspberry Pi – Raspihive Hornet](https://docs.raspihive.com/docs/install#45-first-start-of-raspihive-and-installation-of-the-hornet-node)

Step-by-Step guide for Windows users by Phylo:

- [Hornet node Installation guide Part 1](https://phyloiota.medium.com/iota-hornet-node-installation-81747de28338)
- [Hornet node Installation guide Part 2](https://phyloiota.medium.com/iota-hornet-node-installation-2-8f2639e04d1d)

## Bee

The IOTA Foundation aims to allow machines of all performance levels to contribute to the IOTA network, from microcontrollers to phones, web browsers and servers. Therefore, Bee is being developed as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries.

Bee is together with Hornet the second Node software implemented to run on the IOTA Mainnet. Bee will also be further developed to be a reference implementation in the upcoming decentralized IOTA 2.0 Mainnet.

The full documentation and the source code for Bee can be found here:

- [Bee Documentation](/bee/getting_started)
- [Bee GitHub](https://github.com/iotaledger/bee)
- [Bee Installation guide](/bee/setup_a_node)

### Bee Community Tutorials

- [SWARM Bee](https://github.com/tanglebay/swarm-releases)

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

## Chronicle Permanode

Chronicle provides tools for managing and accessing permanode solutions using the IOTA actor framework backstage. With Chronicle, you can:

- Store IOTA messages in real-time, using one or more Scylla clusters
- Explore stored messages using an HTTP API
- Store the data you want by modifying incoming messages
- Filter data to store it how and where you want (work in progress)

The full documentation and the source code for Chronicle can be found here:

- [Chronicle Documentation](/chronicle.rs/welcome)
- [Chronicle GitHub](https://github.com/iotaledger/chronicle.rs)
- [Chronicle Installation guide](/chronicle.rs/getting_started)

## Wasp Smart Contract Node

Wasp is a node software developed by the IOTA Foundation to run the IOTA Smart Contract Protocol (ISCP in short) on top of the IOTA Tangle.

Wasp is still a work in progress and is purely for development and testing purposes. It runs in combination with GoShimmer Nodes on the IOTA 2.0 DevNet.

The full documentation and the source code for Wasp can be found here:

- [Wasp Documentation](/smart-contracts/overview)
- [Wasp GitHub](https://github.com/iotaledger/wasp)

Thanks to the great team of Zignartech, a docker image for a full installation of a wasp node with the corresponding goshimmer node is available, so you will have a super easy setup for your IOTA smartcontract development and tests:

- [Wasp / Goshimmer Docker image](https://hub.docker.com/r/zignartech/wasp)
