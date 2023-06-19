---
description: Solidity smart contract example.
image: /img/logo/WASP_logo_dark.png
keywords:

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
pragma solidity ^0.8.6;
// No SafeMath needed for Solidity 0.8+

contract Counter { 
   
    uint256 private _count;
        
    function current() public view returns (uint256) {
        return _count;
    }   

    function increment() public {
        _count += 1;
    }   

    function decrement() public {
        _count -= 1;
    }   
}
```

For more information, please visit the [official Solidity documentation](https://docs.soliditylang.org/).

