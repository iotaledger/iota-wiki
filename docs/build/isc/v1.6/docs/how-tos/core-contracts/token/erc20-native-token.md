---
description: How to use the custom functionality of ERC20NativeToken
image: /img/logo/WASP_logo_dark.png
tags:
  - native token
  - erc20
  - EVM
  - how-to
---

# Custom ERC20 Functions

Once you [created your token](./create-native-token.md) it is automatically registered as ERC20 token and you can use it like any other ERC20 token, with functions like
`transfer`, `balanceOf`, etc. But, as the ERC20 token maps the native token on L2, there are some additional ISC features 
you can take advantage of.

## Example Code

### Get Your `nativeTokenID`

You can use the `erc20NativeTokensAddress` function and the Foundry serial number to get the contract address:
 
```solidity
ERC20NativeTokens token = ERC20NativeTokens(
    ISC.sandbox.erc20NativeTokensAddress(_foundrySN)
);
```

* `nativeTokenID` will give you the native token ID of the ERC20 token:

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
