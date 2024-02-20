---
description: How to register a native token as ERC20
image: /img/logo/WASP_logo_dark.png
tags:
  - ERC20
  - EVM
  - how-to
---

# Register Tokens

To properly use your native tokens, you should register them as ERC20 using the `registerERC20NativeToken` function from the ISC magic contract.

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
2. Register the native tokens specifying:
* the foundry serial number
* a name
* a symbol
* it's decimals 
* the allowance.
```solidity
        ISC.sandbox.registerERC20NativeToken(_foundrySN, _name, _symbol, _decimals, allowance);
```

3. Get the ERC20 contract address with `erc20NativeTokensAddress`:
```solidity
        address erc20address = ISC.sandbox.erc20NativeTokensAddress(_foundrySN);
```

### Full Example Code

```solidity
    event ERC20Address(address erc20address);

    function registerERC20NativeToken(uint32 _foundrySN, string calldata _name, string calldata _symbol, uint8 _decimals, uint64 _storageDeposit) public payable {
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;
        ISC.sandbox.registerERC20NativeToken(_foundrySN, _name, _symbol, _decimals, allowance);
        address erc20address = ISC.sandbox.erc20NativeTokensAddress(_foundrySN);
        emit ERC20Address(erc20address);
    }
```
