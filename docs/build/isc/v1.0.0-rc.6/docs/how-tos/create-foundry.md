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

## About Foundry

The stardust update allows you to create your own native tokens. Native tokens are minted by a so-called Foundry. The Foundry allows you to specify a max supply once and change the circulating supply. This how-to will explain how to create a foundry from L2 that you can control from L2.

## Example Code

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract CreateFoundry {
    event CreatedFoundry(uint foundrySN);

    function createFoundry(uint _mintedTokens, uint _meltedTokens, uint _maximumSupply) public payable {
        NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
            mintedTokens: _mintedTokens,
            meltedTokens: _meltedTokens,
            maximumSupply: _maximumSupply
        });
        ISCAssets memory allowance = ISCAssets({
            baseTokens: 500_000,
            nativeTokens: new NativeToken[](0),
            nfts: new NFTID[](0)
        });
        uint foundrySN = ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance);
        emit CreatedFoundry(foundrySN);
    }
}
```
