---
description: How to use the custom functionality of ERC20NativeToken
image: /img/logo/WASP_logo_dark.png
tags:
  - native token
  - erc20
  - EVM
  - how-to
---

# Custom ERC20 functions

Once you [registered your native token as ERC20](./erc20-native-token.md) you can basically use it like any other ERC20 token, with functions like `transfer`, `balanceOf` and so on. But as the ERC20 token maps the native token on L2 there are some additional fetures.

## Example Code

1. Get your `ERC20NativeTokens` instance (In this case we will use `erc20NativeTokensAddress` and the Foundry serial number to get the contract address)
```solidity
ERC20NativeTokens token = ERC20NativeTokens(
    ISC.sandbox.erc20NativeTokensAddress(_foundrySN)
);
```

* `nativeTokenID` will give you the native token ID of the ERC20 token
```solidity
NativeTokenID memory id =token.nativeTokenID();
```


### Full Example Code

```solidity
function nativeTokenID(uint32 _foundrySN) public view returns (bytes memory) {
    ERC20NativeTokens token = ERC20NativeTokens(
        ISC.sandbox.erc20NativeTokensAddress(_foundrySN)
    );
    NativeTokenID memory id =token.nativeTokenID();
    return id.data;
}
```
