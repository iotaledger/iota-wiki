---
description: Basic smart contract example.
image: /img/logo/WASP_logo_dark.png
tags:
  - smart contracts
  - how to
  - basic contract
---
import DeployAdmonition from '../_admonitions/_deploy_a_smart_contract.md';

# Basic Smart Contract Example

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

This contract simply updates a `count` variable. It has
three [entry points](../explanations/smart-contract-anatomy.md#entry-points):

* `increment` and `decrement`: Two full entry points that can alter
  the [state](../explanations/smart-contract-anatomy.md#state), i.e. the `count variable`. 
* `getCount`: A view only entry point, which simply renders the current `count` state.

For more information, please visit the [official Solidity documentation](https://docs.soliditylang.org/).

<DeployAdmonition />