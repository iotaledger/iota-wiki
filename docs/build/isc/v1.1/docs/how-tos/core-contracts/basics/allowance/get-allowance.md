---
description: How to get the allowance of native assets and base token
image: /img/logo/WASP_logo_dark.png
tags:
  - allowance
  - EVM
  - magic
  - solidity
---

# Get Allowance

## Example Code

There are multiple ways to check for an allowance.

### `getAllowanceFrom()`

`getAllowanceFrom()` fetches the funds currently allowed by the given address to the caller:

```soliditiy
function getAllowanceFrom(address _address) public {
    ISCAssets assets = ISC.sandbox.getAllowanceFrom(_address);
    emit AllowanceFrom(assets)
}
```

### `getAllowanceTo()`

`getAllowanceTo()` fetches the funds currently allowed by the caller to the given address:

```soliditiy
function getAllowanceTo(address _target) public {
    ISCAssets assets = ISC.sandbox.getAllowanceTo(_target);
    emit AllowanceTo(assets)
}
```

### `getAllowance()`

`getAllowance()` gets the funds currently allowed between the given addresses:

```soliditiy
function getAllowance(address _from, address _to) public {
    ISCAssets assets = ISC.sandbox.getAllowance(_from, _to);
    emit Allowance(assets)
}
```

## Full Example Code

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract allowance {
    event AllowanceFrom(ISCAssets assets)
    event AllowanceTo(ISCAssets assets)
    event Allowance(ISCAssets assets)

    function getAllowanceFrom(address _address) public {
        ISCAssets assets = ISC.sandbox.getAllowanceFrom(_address);
        emit AllowanceFrom(assets)
    }

    function getAllowanceTo(address _target) public {
        ISCAssets assets = ISC.sandbox.getAllowanceTo(_target);
        emit AllowanceTo(assets)
    }

    function getAllowance(address _from, address _to) public {
        ISCAssets assets = ISC.sandbox.getAllowance(_from, _to);
        emit Allowance(assets)
    }
}
```
