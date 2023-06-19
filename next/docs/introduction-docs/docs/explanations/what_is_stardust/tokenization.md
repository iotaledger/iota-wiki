---
keywords:
- Stardust
- Shimmer
- Upgrades
- Token
- Tokenization
- Native token
- NFT
- Protocol Improvements
- explanation
description: Stardust introduces layer 1 tokenization such as native tokens and NFTs.
image: /img/logo/preview.png
---

# Tokenization

## Native Tokens

Stardust introduces custom, user-defined tokens. Fungible tokens, called **native tokens**, are minted and melted in token
foundries. One does not need to convert base currency into native tokens, they are injected into the ledger out of thin
air. Anyone is free to issue their own tokens, but keep in mind that holding native tokens in one's wallet increases the
required storage deposit in the base currency. We will elaborate on storage deposits [here](./storage_deposit.md).

## Non-fungible Tokens (NFTs)

Non-fungible tokens, so-called **NFTs**, are different from native tokens because each token must be unique and must have
some immutable data attached to them. As a consequence, NFTs are supported on base protocol level via NFT outputs.

Minting and NFT doesn't require expensive gas fees, all that needs to be in place is the right amount of storage deposit
tokens that are 100% refunded after the NFT is destroyed. The issuer's identity may also be immutable attached to the NFT
next to arbitrary data, making it possible to detect counterfeits. [TIP-27](https://github.com/iotaledger/tips/pull/65)
explains the recommended way of structuring NFT metadata for future verification and dApp interoperability.
