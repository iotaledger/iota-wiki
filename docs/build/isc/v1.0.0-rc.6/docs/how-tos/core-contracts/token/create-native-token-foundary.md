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

You can use the new `createNativeTokenFoundry` method to streamline creating and managing native tokens. This single method consolidates the functionalities of minting native tokens and registering them as ERC20 tokens. Two separate methods previously handled this process: 
`mintNativeTokens` and `registerERC20NativeToken`. 
By using `createNativeTokenFoundry`, you can efficiently mint new tokens and register them for use as ERC20 tokens in one seamless operation, simplifying the overall token management workflow. 
This method ensures that only the foundry owner can mint tokens, maintaining security and control over the token creation process.


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
        uint256 _mintedTokens,
        uint256 _meltedTokens,
        uint256 _maximumSupply,
        uint64 _storageDeposit
    ) 
        public payable 
    {
        require(msg.value == _storageDeposit * (10**12), "Please send exact funds to pay for storage deposit");
        
        NativeTokenScheme memory tokenScheme = NativeTokenScheme({
            mintedTokens: _mintedTokens,
            meltedTokens: _meltedTokens,
            maximumSupply: _maximumSupply
        });

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