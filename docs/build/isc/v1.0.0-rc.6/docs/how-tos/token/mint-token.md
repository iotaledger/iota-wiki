---
description: How to mint native token on an L1 foundry.
image: /img/logo/WASP_logo_dark.png
tags:
  - foundry
  - EVM
  - how-to
  - native tokens
  - mint
---

# Mint Native Tokens

To mint tokens from a foundry, you first need to be aware that only the foundry owner can mint token so you might execute that function 
in the same contract as [creating](./create-foundry.md) the foundry. You can then call the `ISC.accounts.mintNativeTokens` function.

## Example Code

:::info Ownership

You might want to look into making the function ownable with, for example,
[OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable)
so only owners of the contract can call certain functionalities of your contract.

:::

1. First we check if the payed amount to the contract is the same as the [storage deposit](/learn/protocols/stardust/core-concepts/storage-deposit) we want to allow and set the allowance

```solidity
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;
```

:::info Payable

Instead of making the function payable, you could let the contract pay for the storage deposit. 
If so, you will need to change the `require` statement to check if the contract's balance has enough funds.

:::

2. Mint the native token specifying the foundry serial number, the amount to mint and the allowance.
```solidity
        ISC.accounts.mintNativeTokens(_foundrySN, _amount, allowance);
```

## Full Example Code

```solidity
    event MintedNativeTokens(uint32 foundrySN, uint amount);

    function mintNativeTokens(uint32 _foundrySN, uint _amount, uint64 _storageDeposit) public payable {
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;
        ISC.accounts.mintNativeTokens(_foundrySN, _amount, allowance);
        emit MintedNativeTokens(_foundrySN, _amount);
    }
```
