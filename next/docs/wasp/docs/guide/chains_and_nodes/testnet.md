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

- https://sc.testnet.shimmer.network **Username**: wasp **Password**: wasp
    - The Wasp dashboard to explore the node configuration and view peering/chain configurations
    - https://api.sc.testnet.shimmer.network
        - The Wasp api to deploy and interact with smart contracts
        - https://api.sc.testnet.shimmer.network/info
            - Information about the Wasp access node
        - https://api.wasp.sc.iota.org/doc
            - API reference for the Wasp API
    - https://api.sc.testnet.shimmer.network/evm/jsonrpc
        - The URL to interact with the Ethereum Virtual Machine on our testnet
- https://api.testnet.shimmer.network
    - The public API exposed by Hornet for the Shimmer Beta network (testnet)
- https://faucet.testnet.shimmer.network
    - The faucet for the Shimmer Beta network
- https://sc.testnet.shimmer.network/metrics
    - System metrics

## Configuring `wasp-cli`

### Initialize `wasp-cli`

You will need to initialize `wasp-cli` to create a seed that will be used to generate addresses.

```shell
wasp-cli init
```

### Configure for the test chain

Next, you should tell `wasp-cli` how to reach our test chain:

```shell
wasp-cli set l1.apiaddress https://api.testnet.shimmer.network
wasp-cli set l1.faucetaddress https://faucet.testnet.shimmer.network
wasp-cli set chains.testchain rms1prr4r7az8e46qhagz5atugjm6x0xrg27d84677e3lurg0s6s76jr59dw4ls
wasp-cli set chain testchain

```

### Request Funds

To deploy a smart contract, you will need some funds. The `wasp-cli` tool makes this easy on our testnet. Run the
following command to request some funds.

```shell
wasp-cli request-funds
```

## Interact with EVM

We have deployed an experimental EVM chain that you can interact with. To begin, add a custom network to Metamask with
the following configuration:

| Key                | Value                                                                                                                     |
|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| RPC URL            | https://api.sc.testnet.shimmer.network/evm/jsonrpc  |
| Chain ID           | 1076                                                                                                                      |


:::note

The other values (network name and currency symbol) can be whatever value you like.

:::

We have a faucet for you to use directly with your EVM address which can be found on https://toolkit.sc.testnet.shimmer.network/
We also have a withdrawal interface to get any native assets deposited to a EVM chain back into your L1 address on the same link.


