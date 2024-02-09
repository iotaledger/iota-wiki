---
tags:
  - Stardust
  - Shimmer
  - Upgrades
  - Token
  - Tokenization
  - Native token
  - NFT
  - Protocol Improvements
  - explanation
description: Stardust introduces layer 1 tokenization, such as native tokens and NFTs.
image: /img/logo/preview.png
---

# Multi Asset Ledger

Stardust transforms IOTA into a multi-asset ledger that allows you to mint Native Tokens, NFTs, and more.

## Native Tokens

Stardust introduces custom, user-defined tokens. Fungible tokens, called **native tokens**, are minted and melted in
token
foundries. One does not need to convert base currency into native tokens. They are injected into the ledger out of thin
air. Anyone is free to issue their own tokens, but keep in mind that holding native tokens in one's wallet increases the
required storage deposit in the base currency. We will elaborate on storage deposits [here](storage-deposit.md).

## Non-fungible Tokens (NFTs)

Non-fungible tokens, so-called **NFTs**, are different from native tokens because each token must be unique and must
have
some immutable data attached to them. Consequently, NFTs are supported on the base protocol level via _NFT outputs_.

Minting an NFT doesn't require expensive gas fees; all that needs to be in place is the right amount of storage deposit
tokens that are 100% refunded after the NFT is destroyed. The issuer's identity may also be immutably attached to the NFT next to arbitrary data, making it possible to detect
counterfeits. [TIP-27](/tips/tips/TIP-0027)
explains the recommended way of structuring NFT metadata for future verification and dApp interoperability.

### Asset Wrapping

As mentioned in
the [IOTA tokenization framework specifications](https://blog.iota.org/iota-tokenization-framework-specifications/#asset-wrapping),
since smart contract chains can issue their own native assets that are traceable to a specific smart contract on a specific chain, a smart contract that handles Layer 2 tokens can use the core contract to wrap its tokens into a native
asset. It can also unwrap [Native Assets (Layer 1)](#digital-native-assets) tokens into a Layer 2 representation of said
token. This means you can send assets across both Layer 1 and Layer 2 chains. However, if you want to send Layer 2
you will first need to wrap assets to another chain as a native Layer 1 asset.

:::tip Learn More

You can learn more about the [tokenization](/tips/tips/TIP-0018),
[NFTs](/tips/tips/TIP-0027) and [Native Tokens](/tips/tips/TIP-0030/) in
the [TIPS section](../tips.md).

:::
