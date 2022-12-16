---
title: Native Assets
description: This article explains the different types of (native) Assets on IOTA.
keywords:
  - NFT
  - digital native assets
  - non-fungible tokens
  - native token
  - asset wrapping
  - Layer 1
  - Layer 2
---

![tokenized-assets](/img/learn/layer2-tokenized-assets.png)

Layer 1 Assets are also known as "[Native Assets](https://github.com/iotaledger/tips/pull/38)". With the
[IOTA tokenization framework](https://blog.iota.org/tokenization-on-the-tangle-iota-digital-assets-framework/), you can
create NFTs and new Tokens on L1 using the new output types. You can transfer native assets on the Tangle without any fees and between different smart contract chains.

## Native Tokens

In Shimmer, you can create Native out of thin air as long as you fulfill the [storage deposit](/learn/welcome#storage-deposits).  
Native tokens can have different types of metadata.

:::tip Interesting Tangle Improvement Proposals (TIPs)

- [TIP-30: Native Token Metadata Standard](/tips/tips/TIP-0030)
- [TIP-33: IOTA Public Token Registry](https://github.com/Kami-Labs/tips/blob/tip-33/tips/TIP-0033/tip-0033.md)

:::

## NFTs

Ethereum was the first blockchain to support NFTs with its ERC-721 standard. The difference from regular tokens is that the NFT is unique and verifiable and can be used to prove ownership of any digital good.

There are many use cases for NFTs. The most common use case is to link an image to it, which becomes a unique digital art that can be sold on open NFT marketplaces.

Other use cases would be to use NFTs as assets in games, for event tickets, for Decentralized Finance (DeFi), for voting
in decentralized autonomous organizations (DAOs) or for any objects in the Metaverse.

:::tip Interesting Tangle Improvement Proposals (TIPs)

- [TIP-27: IOTA NFT standards](https://github.com/Kami-Labs/tips/blob/main/tips/TIP-0027/tip-0027.md)

:::

## Layer 2 Assets

Layer 2 Assets are created within Smart Contracts and can be minted out of thin air. That means you don't need any base token to mint new NFTs.

- For the Wasm VM, there are ERC721 Standards implemented in
  [Rust, Go, and Typescript](https://github.com/iotaledger/wasp/tree/develop/contracts/wasm/erc721).
- EVM Assets (Ethereum standards like ERC721 or ERC1155) can be used in the IOTA Smart Contract EVM Chain. You can use the Open Source library from [OpenZeppelin Smart Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts).

### Asset Wrapping

As mentioned in the [IOTA tokenization framework specifications](https://blog.iota.org/iota-tokenization-framework-specifications/#asset-wrapping), since smart contract chains can issue their own native assets that are traceable to a specific smart contract on a specific chain, a smart contract that handles Layer 2 tokens can use the core contract to wrap its tokens into a native asset. It can also unwrap [Native Assets (Layer 1)](#digital-native-assets) tokens into a Layer 2 representation of said token. This means you can send assets across both Layer 1 and Layer 2 chains. However, if you want to send Layer 2 assets to another chain, you will first need to wrap it as a native Layer 1 asset.
