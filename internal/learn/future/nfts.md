---
title: Non-fungible Tokens (NFTs)
description: This article explains the different types of NFTs on IOTA.
keywords:
  - NFT
  - digital native assets
  - non-fungible tokens
  - asset wrapping
  - Layer 1
  - Layer 2
  - marketplace
---

## What are Non-fungible Tokens (NFTs)?

Ethereum was the first blockchain to support NFTs with its ERC-721 standard. The difference from normal tokens is that
the NFT is unique and clearly verifiable and can be used to prove ownership of any digital good.

There are many use cases for NFTs. The most common use case is to link an image to it, which becomes a unique digital
art which can be sold on open NFT marketplaces.

Other use cases would be to use NFTs as assets in games, for event tickets, for Decentralized Finance (DeFi), for voting
in decentralized autonomous organizations (DAOs) or for any objects in the Metaverse.

## Different NFT Types on IOTA

![tokenized-assets](/img/learn/layer2-tokenized-assets.png)

### Digital Native Assets

Layer 1 Assets are also known as "[Digital Native Assets](https://github.com/iotaledger/tips/pull/38)". With the
[IOTA tokenization framework](https://blog.iota.org/tokenization-on-the-tangle-iota-digital-assets-framework/), you can
create NFTs on L1 using the NFT output type. Layer 1 NFTs can be transferred on the whole Layer without any fees and
enable you to transfer NFTs between different smart contract chains.

:::tip Interesting Tangle Improvement Proposals (TIPs)

- [TIP-27: IOTA NFT standards](https://github.com/iotaledger/tips/pull/65)
- [TIP-30: Native Token Metadata Standard](https://github.com/iotaledger/tips/pull/68)
- [TIP-33: IOTA Public Token Registry](https://github.com/Kami-Labs/tips/blob/tip-33/tips/TIP-0033/tip-0033.md)

:::

### Layer 2 Assets

Layer 2 Assets are created within Smart Contracts and can be minted out of thin air. That means you don't need any coins
to mint new NFTs.

- For the Wasm VM, there are ERC721 Standards implemented in
  [Rust, Go, and Typescript](https://github.com/iotaledger/wasp/tree/develop/contracts/wasm/erc721).
- EVM Assets (Ethereum standards like ERC721 or ERC1155) can be used in the IOTA Smart Contract EVM Chain. You can use
  the Open Source library from [OpenZeppelin Smart Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts).

### Asset Wrapping

As mentioned in the
[IOTA tokenization framework specifications](https://blog.iota.org/iota-tokenization-framework-specifications/#asset-wrapping),
since smart contract chains can issue their own native assets that are traceable to a specific smart contract on a
specific chain, a smart contract that handles Layer 2 tokens can use the core contract to wrap its tokens into a Layer 1
native asset. It can also unwrap [Digital Native Assets (Layer 1)](#digital-native-assets) tokens into a Layer 2
representation of said token. This means you can send assets across both Layer 1 and Layer 2 chains. However, if you
want to send Layer 2 assets to another chain, you will first need to wrap it as a native Layer 1 asset.

## NFT Marketplaces

The IOTA community developed the first IOTA NFT marketplace and launched it in July 2021 on the IOTA 2.0 DevNet. The
marketplace is a feeless alternative to the expensive and energy-wasting approaches other networks take.

Their tests phase has ended. For the next steps, they implement Smart Contracts and integrate Browser Wallets to make
the NFT trading is secure and accessible.

- [nftiota.org](https://nftiota.org/)

## NFT Projects

The community also creates amazing artworks and already dropping them on the Smart Contract Devnet. Please note - all
these NFTs are on the Devnet, and be careful that some NFT projects might do new drops when the mainnet launches.

Here is a list of community projects. Please feel free to add yours!

- [iota-nft.art](https://iota-nft.art/)
- [iotabots.io](https://iotabots.io/)
- [iotawhales](https://pixeldoggy.com/iotawhales)
