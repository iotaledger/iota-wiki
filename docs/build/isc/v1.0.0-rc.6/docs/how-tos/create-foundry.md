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

The Stardust update allows you to create your own native tokens. Native tokens are minted by a [Foundry](/tips/tips/TIP-0018/#foundry-output). The Foundry allows you to specify a maximum supply once and change the circulating supply. This how-to will explain how to create an L1 foundry from L2.

## Example Code

1. First we check if the payed amount to the contract is the same as the storage deposit we want to allow and set the allowance

```solidity
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;
```

:::info Storage Deposit

In IOTA every output on L1 needs a storage deposit, you can read more about it [here](/learn/protocols/stardust/core-concepts/storage-deposit).

:::
:::info  Payable

Instead of making the function payable we could also let the contract pay for the storage deposit. Then we would need to change the require to check the contract balance for enough funds.

:::
:::info Ownership

You might want to look into making the function ownable with for example [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable) depending on your use-case so only owners of the contract can call certain functionality of your contract.

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
        uint foundrySN = ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance);
```

### Full Example Code 

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract CreateFoundry {
    event CreatedFoundry(uint foundrySN);

    function createFoundry(uint _mintedTokens, uint _meltedTokens, uint _maximumSupply, uint64 _storageDeposit) public payable {
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;
        NativeTokenScheme memory nativeTokenScheme = NativeTokenScheme({
            mintedTokens: _mintedTokens,
            meltedTokens: _meltedTokens,
            maximumSupply: _maximumSupply
        });
        uint foundrySN = ISC.accounts.foundryCreateNew(nativeTokenScheme, allowance);
        emit CreatedFoundry(foundrySN);
    }
}
```
