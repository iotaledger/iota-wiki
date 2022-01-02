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
image: http://blog.iota.org/content/images/size/w1600/2021/10/Group-4947.png
---

In this article, you will learn decentralized applications (dApps) work and how users can interact with them.

## Build dApps on IOTA Smart Contracts

Decentralized applications (dApps) are computer applications that run on a decentralized computing system, like IOTA Smart Contracts.

IOTA Smart Contracts enable you to use your preferred programming language, set a fee model for users, incentives for validators, and committee structure.

There are some exciting aspects of dApps:

- **No downtime**: dApps are based on a peer-to-peer system which ensures the dApps will continue to work even if individual computers, or parts of the network, go offline.
- **Censorship-resistant**: As there is no single point of failure, and it is based on the Tangle, it is impossible to take over the Network.
- **Open-source**: This brings even more trust to dApps. As the source code is publicly available, it can be verified and improved by many developers.

## Architecture

Decentralized applications consist of one or multiple Smart Contracts and a User Interface. The user interface is usually a Website, which interacts with the Smart Contracts.

### Interacting With Smart Contracts

There are two ways to interact with IOTA Smart Contracts:

- [On-ledger](/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests): Requests to the smart contract are transactions on the Tangle.
- [Off-ledger](/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests): The requests are sent using an API call to a Wasp node.

You can [configure your Wasp node's API URL](/smart-contracts/guide/chains_and_nodes/running-a-node#web-api), or use the [public Wasp REST API](https://api.wasp.sc.iota.org/doc).

## Examples

There are several different example applications deployed on the [public test-net](/smart-contracts/guide/chains_and_nodes/testnet) chain.

### Fair Roulette

![Fair Roulette](http://blog.iota.org/content/images/size/w1600/2021/10/Group-4947.png)

The [Fair roulette example](/smart-contracts/guide/example_projects/fair_roulette) is a simple betting game in which players can bet on a number within a certain range.

- Play with the [Live Demo](https://demo.sc.iota.org/).
- Discover the [Code Repository](https://github.com/iotaledger/wasp/tree/roulette_poc/contracts/rust/fairroulette).

More examples for Wasm Smart Contracts written in Rust and Go (TinyGo) can be found in the [Wasp code repository](https://github.com/iotaledger/wasp/tree/master/contracts/wasm).

---

- Learn more about [On-ledger](/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests) and [Off-ledger Requests](/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests).
- Participate on the [public testnet](/smart-contracts/guide/chains_and_nodes/testnet).
- Build your first dApp with the [Schema Tool](/smart-contracts/guide/schema).
