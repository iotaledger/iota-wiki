---
description: How to Create a Native Token Foundary.
image: /img/logo/WASP_logo_dark.png
tags:
  - foundry
  - EVM
  - how-to
  - native tokens
  - mint
  - register
---

import ExampleCodeIntro from '../../../_partials/how-tos/token/_example_code_intro.md';

# Create a Native Token

This guide will show you how you can efficiently mint new tokens and register them for use as ERC20 tokens with the `createNativeTokenFoundry` function in one seamless operation. It will create a foundry on L1 and registers it as a ERC20 on L2. This method ensures that only the foundry owner can mint tokens, maintaining security and control over the token creation process.

## About Foundries

The Stardust update allows you to create your own native tokens. Native tokens are minted by a [Foundry](/tips/tips/TIP-0018/#foundry-output). 
The Foundry allows you to specify your native token's maximum supply **once** and change the circulating supply.

## Example Code

<ExampleCodeIntro/>

### 2. Define the Token Scheme

Define the `NativeTokenScheme` by specifying its mintedTokens, meltedTokens and maximumSupply. For simplicity, in this how-to we mint the whole maximum supply at creation.

```solidity
NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
    mintedTokens: _maximumSupply,
    meltedTokens: 0,
    maximumSupply: _maximumSupply
});
```

### 3. Mint and Register Native Token 

Minting native tokens and registering them as ERC20 tokens using `createNativeTokenFoundry` method

```solidity
uint32 foundrySN = ISC.accounts.createNativeTokenFoundry(
    _tokenName, 
    _tokenSymbol, 
    _tokenDecimals, 
    nativeTokenScheme, 
    allowance
);
```

## Full Example Code

```solidity
pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract MyToken {
  event MintedToken(uint32 foundrySN); 

  constructor(
          string memory _tokenName, 
          string memory _tokenSymbol, 
          uint8 _tokenDecimals, 
          uint256 _maximumSupply,
          uint64 _storageDeposit
      ) 
          public payable 
      {
          require(msg.value == _storageDeposit * (10**12), "Please send exact funds to pay for storage deposit");
          ISCAssets memory allowance;
          allowance.baseTokens = _storageDeposit;

          NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
              mintedTokens: _maximumSupply,
              meltedTokens: 0,
              maximumSupply: _maximumSupply
          });

          uint32 foundrySN = ISC.accounts.createNativeTokenFoundry(
              _tokenName, 
              _tokenSymbol, 
              _tokenDecimals, 
              nativeTokenScheme, 
              allowance
          );
          emit MintedToken(foundrySN);
      }
}
```
