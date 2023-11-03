---
description: The ISC Magic Contract allows EVM contracts to access ISC functionality.
image: /img/logo/WASP_logo_dark.png
keywords:
  - configure
  - using
  - EVM
  - magic
  - Ethereum
  - Solidity
  - metamask
  - JSON
  - RPC
---

# Send Assets and Tokens to L1

:::info

Currently, you can only send back a token to L1 if it was originally sent to L2 from L1.

:::

You can decide how much storage deposit to add by defining it in baseTokens:

```solidity
allowance.baseTokens = storageDeposit
```

Ensure the amount is big enough to cover the gas fee, or the call will fail.

Define assets to send, and the actual balance will be deducted after the tokens for the gas fee get subtracted:

```solidity
ISCAssets memory assets;
```

So, if you're sending base tokens, you can define them as:

```solidity
assets.baseTokens
```

However, if you're sending NFTs, you can define them as:

```solidity
assets.nfts = new NFTID[](1);
assets.nfts[0] = id;
```

Finally, call the send method to send the tokens.

```solidity
ISC.sandbox.send()
```
