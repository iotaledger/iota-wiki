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

1. Create the allowance.
2. Register the native tokens specifying the foundry serial number, a name, a symbol, it's decimals and the allowance.

```solidity
    function registerERC20NativeToken(uint32 _foundrySN, string calldata _name, string calldata _symbol, uint8 _decimals) public {
        ISCAssets memory allowance = ISCAssets({
            baseTokens: 500_000,
            nativeTokens: new NativeToken[](0),
            nfts: new NFTID[](0)
        });
        ISC.sandbox.registerERC20NativeToken(_foundrySN, _name, _symbol, _decimals, allowance);
    }
```
