---
description: How to create a L1 foundry
image: /img/logo/WASP_logo_dark.png
tags:
  - foundry
  - EVM
  - how-to
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Minting Tokens

To mint tokens from a foundry, you first need to be aware that only the foundry owner can mint token so you might execute that function 
in the same contract as [creating](./create-foundry.md) the foundry. You can then call the `ISC.accounts.mintNativeTokens` function.

## Example Code

1. Create the allowance
2. Mint the native token specifying the foundry serial number, the amount to mint and the allowance.

```solidity
    function mintNativeTokens(uint32 _foundrySN, uint _amount) public payable{
        ISCAssets memory allowance = ISCAssets({
            baseTokens: 500_000,
            nativeTokens: new NativeToken[](0),
            nfts: new NFTID[](0)
        });
        ISC.accounts.mintNativeTokens(_foundrySN, _amount, allowance);
        emit MintedNativeTokens(_foundrySN, _amount);
    }
```
