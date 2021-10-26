---
id: smart-contracts-dapps
title: Decentralized Applications
description: In this article you decentralized applications work and how users can interact with it.
keywords:
  - Decentralized Applications
  - dApps
  - Smart Contracts
  - wasp
  - ISCP
  - Schema Tool
  - Wasp API
  - REST API
  - Fair roulette
---

In this article you decentralized applications (dApps) work and how users can interact with it.

## Build dApps on IOTA Smart Contracts

Decentralized applications (dApps) are in general computer applications which runs on a decentralized computing system like IOTA Smart Contracts.

IOTA Smart Contracts enable you to use your preferred programming language, fees model for users, incentives for validators and committee structure.

There are some exciting aspects of dApps:

- **No downtime** - Based on a peer-to-peer system ensures the dApps continue to work even if individual computers or parts of the network go offline.
- **Censorship-resistant** - With no single point of failure and based on the Tangle, it’s impossible to takeover the Network.
- **Open-source** - This brings even more trust to dApps - if the source code is public available and can be proven by many developers.

## Architecture

Decentralized applications consist of one or multiple Smart Contracts and a User Interface. The user interface mostly results in a Website, which is interacting with the Smart Contracts.

### Interacting with Smart Contracts

There are two ways to interact with IOTA Smart Contracts:

- On-ledger: Requests to the smart contract as transactions on the Tangle.
- Off-ledger: Requests by sending an API call to a Wasp node.

The Wasp node API can be found on your wasp node `<api base url>/doc` or on the public [Wasp REST API](https://api.wasp.sc.iota.org/doc).

## Examples

There are several different example applications deployed on the public tesnet chain.

### Fair Roulette

![](http://blog.iota.org/content/images/size/w1600/2021/10/Group-4947.png)

The Fair roulette example is a simple betting game in which players can bet on a number within a certain range.

- Play the [Live Demo](https://demo.sc.iota.org/).
- Discover the [Code Repository](https://github.com/iotaledger/wasp/tree/roulette_poc/contracts/rust/fairroulette).

- Learn more about [On-ledger](/wasp/guide/core_concepts/smartcontract-interaction/on-ledger-requests) and [Off-ledger Requests](/wasp/guide/core_concepts/smartcontract-interaction/off-ledger-requests).
- Participate on the [public testnet](https://wiki.iota.org/wasp/guide/chains_and_nodes/testnet).
- Build your first dApp with the [Schema Tool](https://wiki.iota.org/wasp/guide/schema/schema).
