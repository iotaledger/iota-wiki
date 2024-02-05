---
description: Solidity smart contract example.
image: /img/logo/WASP_logo_dark.png
tags:
  - smart contracts
  - EVM
  - Solidity
  - how to
---

# Solidity Smart Contract Example

[Solidity](https://docs.soliditylang.org/en/v0.8.16/) smart contracts on IOTA Smart Contracts are compatible with
Solidity smart contracts on any other network. Most smart contracts will work directly without any modification. To get
a rough indication of what a simple Solidity smart contract looks like, see the example below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Counter {
    uint private count;

    constructor() {
        count = 0;
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Count is already zero");
        count -= 1;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}

```

For more information, please visit the [official Solidity documentation](https://docs.soliditylang.org/).
