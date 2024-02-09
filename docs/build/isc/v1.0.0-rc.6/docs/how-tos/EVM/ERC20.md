---
description: Solidity smart contract ERC20.
image: /img/logo/WASP_logo_dark.png
tags:
  - smart contracts
  - EVM
  - Solidity
  - ERC20
  - eip-20
  - token creation
  - mint tokens
  - how to
---

import DeployWithRemix from '../../_admonitions/_deploy_with_remix.md';
import DeployWithHardhat from '../../_admonitions/_deploy_with_hardhat.md';

# Create ERC20 Custom Tokens

## Required Prior Knowledge

This guide assumes you are familiar with the concept
of [tokens](https://en.wikipedia.org/wiki/Cryptocurrency#Crypto_token)
in [blockchain](https://en.wikipedia.org/wiki/Blockchain),
[Ethereum Request for Comments (ERCs)](https://eips.ethereum.org/erc)(also known as Ethereum Improvement Proposals (
EIP))
, [NFTs](learn/protocols/stardust/core-concepts/multi-asset-ledger#non-fungible-tokens-nfts), [Smart Contracts](/learn/smart-contracts/introduction)
and have already tinkered with [Solidity](https://docs.soliditylang.org/en/v0.8.16/).
ERC20 is a standard for fungible tokens and is defined in
the [EIP-20 Token Standard](https://eips.ethereum.org/EIPS/eip-20) by Ethereum.

This guide will use the [Remix IDE](https://remix.ethereum.org/), but you can use this contract with any IDE you are
familiar with.

## About ERC20

With the ERC20 standard, you can create your own tokens and transfer them to the EVM on IOTA Smart Contracts without
fees.

## 1. Create the Smart Contract

Create a new Solidity file, for example, `ERC20.sol` in the contracts folder of
your [Remix IDE](https://remix.ethereum.org/) and add this code snippet:

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleERC20Token is ERC20 {
    constructor() ERC20("ExampleERC20Token", "EET") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

This imports all functions from the [OpenZeppelin ERC20](https://docs.openzeppelin.com/contracts/4.x/erc20) smart
contract and creates a new ERC20 token with your name and Symbol.

:::tip OpenZeppelin

OpenZeppelin provides many audited smart contracts and is a good point to start and learn.

:::

:::note Customize Your Token

You can change the token name `ExampleERC20Token` and the token symbol `EET` for anything you want.

:::

<DeployWithRemix/>

## 2. Add Your Custom Tokens to MetaMask

Once you have deployed your contract, you can add your new custom token to your Metamask account.

1. Open Metamask, and click on the transaction that created the contract. From there, you can simply click
   on `View on block explorer` to visit the transaction details. Alternatively, you can copy the transaction ID and
   visit the [ShimmerEVM Explorer](https://explorer.evm.testnet.shimmer.network/)
   or  [ShimmerEVM Testnet Explorer](https://explorer.evm.testnet.shimmer.network/) and use the search bar to find transaction.

   !['View on block explorer](/img/evm/how-tos/ERC20/metamask-get-transaction-or-go-to-block-explorer.png)

2. Copy the contract address from the transaction details, and import your custom ERC20 tokens into MetaMask.

![Copy contract address](/img/evm/how-tos/ERC20/metamask-import-tokens.png)

## 3. Have some Fun

Now you should see your token in MetaMask. You can send them to your friends without any fees or gas costs.

![Copy contract address](/img/evm/how-tos/ERC20/metamask-erc20-balance.png)

You also can ask in the [Discord Chat Server](https://discord.iota.org) to send them around and discover what the
community is building on IOTA Smart Contracts.
