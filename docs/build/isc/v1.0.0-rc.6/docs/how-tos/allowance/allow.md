---
description: How to allow native assets and base token
image: /img/logo/WASP_logo_dark.png
tags:
  - allow
  - allowance
  - EVM
  - magic
  - solidity
---

# Allow

The allowance concept is well known from the EVM contracts like ERC20. 
In ISC, we have a similar concept for our native assets. You might want to use this, for example, to [send native assets to L1](../send-assets-to-l1.mdx) (which includes sending tokens to other L1 chain accounts).

## Example Code

### 1. Create the `allow` Function

Create a function which allows an address or contract to access a specific ID of your account:
 
```solidity
function allow(address _address, bytes32 _allowanceNFTID) public {
```

### 2. Create the `ISCAssets` object

Create an `ISCAssets` object to pass as allowance:

```solidity
NFTID[] memory nftIDs = new NFTID[](1);
nftIDs[0] = NFTID.wrap(_allowanceNFTID);
ISCAssets memory assets;
assets.nfts = nftIDs;
```

### 3. Use the Assets as Allowance

With that asset, you can call `allow` to allow address to take our NFT:

```solidity
ISC.sandbox.allow(_address, assets);
```

## Full Example Code

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract Allowance {
    function allow(address _address, bytes32 _allowanceNFTID) public {
        NFTID[] memory nftIDs = new NFTID[](1);
        nftIDs[0] = NFTID.wrap(_allowanceNFTID);
        ISCAssets memory assets;
        assets.nfts = nftIDs;
        ISC.sandbox.allow(_address, assets);
    }
}
```
