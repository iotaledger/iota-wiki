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

# Create a Native Token Foundary 

To streamline the process of creating and managing native tokens, the new `createNativeTokenFoundry` method has been introduced. This single method consolidates the functionalities of minting native tokens and registering them as ERC20 tokens, which were previously handled by two separate methods: `mintNativeTokens` and `registerERC20NativeToken`. By using `createNativeTokenFoundry`, you can efficiently mint new tokens and register them for use as ERC20 tokens in one seamless operation, simplifying the overall token management workflow. This method ensures that only the foundry owner can mint tokens, maintaining security and control over the token creation process.

#### Previously, minting native tokens using `mintNativeTokens` method required specifying the foundry serial number, the amount to mint, and the allowance.
 
```solidity
ISC.accounts.mintNativeTokens(_foundrySN, _amount, allowance);
```
#### Additionally, to fully utilize your native tokens, you needed to register them as ERC20 tokens using the `registerERC20NativeToken` function from the ISC magic contract.

```solidity
ISC.sandbox.registerERC20NativeToken(_foundrySN, _name, _symbol, _decimals, allowance);
```
#### Now, the new `createNativeTokenFoundry` method combines these functionalities. This single method streamlines the process of minting native tokens and registering them as ERC20 tokens.

```solidity
ISC.accounts.createNativeTokenFoundry(tokenName, tokenSymbol, tokenDecimals, tokenScheme, allowance);
```



## Example Code

<ExampleCodeIntro/>

### 2. Mint and Register Native Token 

Minting native tokens and registering them as ERC20 tokens using `createNativeTokenFoundry` method

```solidity
ISC.accounts.createNativeTokenFoundry(tokenName, tokenSymbol, tokenDecimals, tokenScheme, allowance);
```

## Full Example Code

```solidity

function createNativeTokenFoundry(
        string memory _tokenName, 
        string memory _tokenSymbol, 
        uint8 _tokenDecimals, 
        NativeTokenScheme memory tokenScheme,
        uint64 _storageDeposit
    ) 
        public payable 
    {
        require(msg.value == _storageDeposit * (10**12), "Please send exact funds to pay for storage deposit");

        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;

        ISC.accounts.createNativeTokenFoundry(
            _tokenName, 
            _tokenSymbol, 
            _tokenDecimals, 
            tokenScheme, 
            allowance
        );
    }

```

### Types

#### NativeTokenScheme

```solidity
struct NativeTokenScheme {
  uint256 mintedTokens;
  uint256 meltedTokens;
  uint256 maximumSupply;
}
```
#### ISCAssets
 
```solidity
struct ISCAssets {
  uint64 baseTokens;
  struct NativeToken[] nativeTokens;
  NFTID[] nfts;
}
```