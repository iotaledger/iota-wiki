---
description: How to create a L1 foundry
image: /img/logo/WASP_logo_dark.png
tags:
  - foundry
  - EVM
  - how-to
---
# Create a Foundry
## About Foundries

The Stardust update allows you to create your own native tokens. Native tokens are minted by a [Foundry](/tips/tips/TIP-0018/#foundry-output). 
The Foundry allows you to specify your native token's maximum supply **once** and change the circulating supply. 
This guide will show you how to create an L1 foundry using a L2 smart contract.

## Example Code

:::info Ownership

You might want to look into making the function ownable with, for example,
[OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable)
so only owners of the contract can call certain functionalities of your contract.

:::

1. Check if the amount paid to the contract is the same as the required [storage deposit](/learn/protocols/stardust/core-concepts/storage-deposit) 
   and set the allowance.
    
    ```solidity
            require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
            ISCAssets memory allowance;
            allowance.baseTokens = _storageDeposit;
    ```

:::info  Payable

Instead of making the function payable, you could let the contract pay for the storage deposit. 
If so, you will need to change the `require` statement to check if the contract's balance has enough funds.

:::

2. Define the `NativeTokenScheme`:

```solidity
        NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
            mintedTokens: _mintedTokens,
            meltedTokens: _meltedTokens,
            maximumSupply: _maximumSupply
        });
```

3. Create the foundry by calling the `ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance)` function:

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
