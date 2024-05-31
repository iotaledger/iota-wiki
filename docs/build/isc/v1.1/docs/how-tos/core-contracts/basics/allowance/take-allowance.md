---
description: How to take the allowance of native assets and base token
image: /img/logo/WASP_logo_dark.png
tags:
  - allowance
  - EVM
  - magic
  - solidity
---

# Take allowed Funds

After having [allowed](./allow.md) native assets, you can take the ones you need.

## Example Code

The following example will take the NFT which was allowed in the [allow how-to guide](./allow.md).

### Create the `ISCAssets`

First, you need to recreate the `ISCAssets` with the NFTID.

```solidity
NFTID[] memory nftIDs = new NFTID[](1);
nftIDs[0] = NFTID.wrap(_allowanceNFTID);
ISCAssets memory assets;
assets.nfts = nftIDs;
```

### Call `takeAllowedFunds()`

After that, you can call `takeAllowedFunds()` to take the allowance of the specified address/contract
 
```solidity
ISC.sandbox.takeAllowedFunds(_address, NFTID);
```

## Full Example Code

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract allowance {
  function takeAllowedFunds(address _address, bytes32 NFTID) {
    NFTID[] memory nftIDs = new NFTID[](1);
    nftIDs[0] = NFTID.wrap(_allowanceNFTID);
    ISCAssets memory assets;
    assets.nfts = nftIDs;
    ISC.sandbox.takeAllowedFunds(_address, NFTID);
  }
}
```
