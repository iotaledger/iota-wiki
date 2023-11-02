---
description: A public testnet for developers to try out smart contracts
image: /img/logo/WASP_logo_dark.png
keywords:
  - Smart Contracts
  - TestNet
---

# Testnet

The testnet is deployed for the community to use for testing and interacting with smart contracts.

:::caution unscheduled network resets
While we are in active development we might update and reset this chain at any time without prior notice; Keep this in mind while testing.
:::

## Introduction

This testnet is deployed on the Shimmer Beta Network (testnet). Multiple committee nodes do the work for
the chain and multiple access nodes are exposed via the endpoints listed below. We do throttle the endpoints to prevent
overloading the testnet because we are looking for functionality testing more than stress testing.

## Endpoints

You can access the testnet via the following endpoints:

- https://json-rpc.evm.testnet.shimmer.network/
  - The URL to interact with the Ethereum Virtual Machine on our testnet
- https://evm-faucet.testnet.shimmer.network/
  - The faucet for the Shimmer Beta network
- https://explorer.evm.testnet.shimmer.network/
  - EVM explorer to view transactions and contracts

## Interact with EVM

We have deployed an experimental EVM chain that you can interact with. To begin, add a custom network to Metamask with
the following configuration:

| Key      | Value                                        |
| -------- | -------------------------------------------- |
| RPC URL  | https://json-rpc.evm.testnet.shimmer.network |
| Chain ID | 1073                                         |

:::note

The other values (network name and currency symbol) can be whatever value you like.

:::

We have a faucet for you to use directly with your EVM address which can be found on https://toolkit.sc.testnet.shimmer.network/
We also have a withdrawal interface to get any native assets deposited to a EVM chain back into your L1 address on the same link.
