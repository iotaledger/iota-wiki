---
description: How to use a native NFT like an ERC721 NFT
image: /img/logo/WASP_logo_dark.png
tags:
  - NFT
  - EVM
  - how-to
---

# Use as ERC721
## About the `ERC721NFTs` contract

The `ERC721NFTs` contract is a hardcoded contract at address `0x1074030000000000000000000000000000000000`. Every L1 NFT owned by the chain can be accessed through it. In this example, we will show you how to use it by using `transferFrom`.

## Example Code

1. ERC721 uses the `tokenID` for almost all interactions with it. So first, you should convert the `NFTID` to a `tokenID`:

```solidity
uint256 tokenID = uint256(NFTID.unwrap(nftID));
```

:::info Token ID to NFT ID

You can use the ISCTypes.asNFTID() function to convert a Token ID to an NFT ID, by either using it on a token ID `tokenID.asNFTID();` or passing it to function `ISCTypes.asNFTID(tokenID)`.

:::

2. Transfer the token with ID `tokenID`, by using the `ERC20NFTs` contract, which is exposed in the library as `ISC.nfts`, and calling the standard `transferFrom` function:

```solidity
ISC.nfts.transferFrom(msg.sender, _destination, tokenID);
```
