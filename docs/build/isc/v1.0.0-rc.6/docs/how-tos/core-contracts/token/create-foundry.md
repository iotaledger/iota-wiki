---
description: How to create a L1 foundry
image: /img/logo/WASP_logo_dark.png
tags:
  - foundry
  - EVM
  - how-to
---
import ExampleCodeIntro from '../../../_partials/how-tos/token/_example_code_intro.md';
import ObsoleteTokenCreation from '../../../_partials/how-tos/token/_obsolete_token_creation.md';

# Create a Foundry

<ObsoleteTokenCreation/>

## About Foundries

The Stardust update allows you to create your own native tokens. Native tokens are minted by a [Foundry](/tips/tips/TIP-0018/#foundry-output). 
The Foundry allows you to specify your native token's maximum supply **once** and change the circulating supply. 
This guide will show you how to create an L1 foundry using a L2 smart contract.

## Example Code

<ExampleCodeIntro/>

### 2. Define the Token Scheme

Define the `NativeTokenScheme` by specifying its `mintedTokens`, `meltedTokens` and `maximumSupply`:

```solidity
NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
    mintedTokens: _mintedTokens,
    meltedTokens: _meltedTokens,
    maximumSupply: _maximumSupply
});
```

### 3. Create the Foundry

Create the foundry by calling the `ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance)` function:

```solidity
uint32 foundrySN = ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance);
```

### Full Example Code 

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract CreateFoundry {
    event CreatedFoundry(uint32 foundrySN);

    function createFoundry(uint _mintedTokens, uint _meltedTokens, uint _maximumSupply, uint64 _storageDeposit) public payable {
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;
        NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
            mintedTokens: _mintedTokens,
            meltedTokens: _meltedTokens,
            maximumSupply: _maximumSupply
        });
        uint32 foundrySN = ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance);
        emit CreatedFoundry(foundrySN);
    }
}
```
