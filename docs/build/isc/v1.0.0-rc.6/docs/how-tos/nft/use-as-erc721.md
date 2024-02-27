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

The `ERC721NFTs` contract is a harcoded contract at address `0x1074030000000000000000000000000000000000`. Every <!-- TODO Confirm --> L1 NFT owned by the chain can be accessed through it. In this example we will show you how to use it by taking `transferFrom`  as an example.

## Example Code

1. ERC721 uses `tokenID` for almost all interactions with it. So we first convert our `NFTID` to a `tokenID`:

```solidity
uint256 tokenID = uint256(NFTID.unwrap(nftID));
```

:::info Token ID to NFT ID

To go the other way around and convert a Token ID to an NFT ID, you can use the ISCTypes.asNFTID() function, by either using (`using ISCTypes for uint256;`) it on token ID like `tokenID.asNFTID();` or passing it to function like `ISCTypes.asNFTID(tokenID)`.

:::

2. Transfer the token with ID `tokenID`, by using the `ERC20NFTs` contract, which is exposed in the library as `ISC.nfts`, and calling the standard `transferFrom` function

```solidity
ISC.nfts.transferFrom(msg.sender, _destination, tokenID);
```
