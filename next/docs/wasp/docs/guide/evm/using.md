---
description: How to configure and use EVM support in IOTA Smart Contracts.
image: /img/logo/WASP_logo_dark.png
keywords:

- configure
- using
- EVM
- Ethereum
- Solidity
- deploy
- hardhat
- metamask
- JSON
- RPC
- how to

---

# How to use EVM in IOTA Smart Contracts

## 1. Deploy an IOTA Smart Contracts Chain

When [deploying an IOTA Smart Contracts chain](../chains_and_nodes/setting-up-a-chain.md), EVM support is automatically
added with the default configuration. The `wasp-cli chain deploy` command accepts some EVM-specific options listed
below:

* `--evm-chainid <n>`: EVM chain ID (default: 1074).

  :::caution Register a Unique Chain ID

  Re-using an existing Chain ID is not recommended and can be a security risk. For serious usage, register a unique
  Chain ID on [Chainlist](https://chainlist.org/) and use that instead of the default. **It is not possible to change
  the EVM chain ID after deployment.**

  :::

* `--evm-block-keep-amount <n>`: Amount of blocks to keep in storage. By default, ISC will keep all blocks.

* `--evm-gas-limit <n>`: Block gas limit (15000000 gas units by default).

* `--evm-gas-ratio <a>:<b>`: ISC gas : EVM gas ratio (1:1 by default). You can change the gas ratio after deployment by
  calling the `setGasRatio` function of
  the [`evm`](../core_concepts/core_contracts/evm.md) [core contract](../core_concepts/core_contracts/overview.md).

You can verify that the EVM support is enabled by visiting
the [Wasp dashboard](../chains_and_nodes/node-config#dashboard) and checking the "EVM" section on your ISC chain page.
You should see the EVM chain ID and the JSON-RPC endpoint.

## 2. Fund an Ethereum Account on Your IOTA Smart Contracts Chain

To send EVM transactions, you need to have an Ethereum address that owns tokens on the ISC chain (L2). These tokens will
be used to cover gas fees.

The most intuitive way to do this is using [Metamask](https://metamask.io). In MetaMask, you can create a wallet, it
does not matter what chain it is connected to. Once you have generated a wallet, you will see a wallet address under its
name. You can copy this to your clipboard. This address will receive the total supply of tokens on that chain.

Assuming that you also have an IOTA account with some L1 funds, you can deposit some of those funds into the Ethereum
address' L2 account. As IOTA is the chain’s base token, it will be referenced as `base`:

```shell
wasp-cli chain deposit 0xa1b2c3d4... base:1000000
```

## 3. Connect to the JSON-RPC Service

You can point any Ethereum tool like MetaMask or Hardhat to the JSON-RPC endpoint displayed on the ISC chain dashboard
page (**Wasp dashboard** > **Chains** > **[your chain id]**. Once connected, you should be able to use your tool as if
it was connected to any other EVM based chain.

