---
description: You can use the ISC Magic Contract in EVM contracts to access ISC functionality, such as randomness.
image: /img/logo/WASP_logo_dark.png
tags:
  - magic contract
  - randomness
  - EVM
  - Ethereum
  - Solidity
  - ISC
---

# Get Randomness on L2

ISC introduces a feature not found on many other smart contract protocols: randomness.

In the ISC protocol, for each state update, each validator proposes a batch of smart contract requests that they would like to process next. They commit to their proposals with a signature, after which a common subset of requests is found, and a combined signature is produced.

This combined signature is unpredictable, and not only serves as protection against MEV by pseudo-randomly ordering requests, but also provides a source of verifiable entropy for randomness on L2.

This guide will show you how you can use this entropy to generate random values in your contracts.

:::info A note about entropy

While entropy is random for each smart contract request, entropy is constant within a request. This means multiple calls to get entropy within the same request will return the same value.

:::

## Explanation

When you want to generate multiple random values within a single request, you need to take into account that entropy is constant within a request. In this contract we use an increasing nonce in addition to the entropy, to make sure we are generating unique values:

```solidity
uint256 private _nonce;

function getNonce() internal returns (bytes32) {
    return bytes32(_nonce++);
}
```

### Generating Integers

To then generate a random integer, you can take the entropy and a unique nonce and hash them together:

```solidity
bytes32 entropy = ISC.sandbox.getEntropy();
bytes32 nonce = getNonce();
bytes32 digest = keccak256(bytes.concat(entropy, nonce));
```

And then cast the digest to an integer:

```solidity
uint256 value = uint256(digest);
```

### Generating bytes

Similarly to generating a random integer, you can generate any sequence of random bytes by taking the entropy and a unique nonce and hash them together:

```solidity
bytes32 entropy = ISC.sandbox.getEntropy();
bytes32 nonce = getNonce();
bytes32 digest = keccak256(bytes.concat(entropy, nonce));
```

And then repeatidly hash the digest and copy it in a sequence of bytes until you reach the required length.

```solidity
bytes memory value = new bytes(length);
for (uint i = 0; i < length; i += 32) {
  digest = keccak256(bytes.concat(digest));
  for (uint j = 0; j < 32 && i + j < length; j++) {
      value[i + j] = digest[j];
  }
}
```

## Full Example Code

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract Random {
    event Int(uint256);
    event Bytes(bytes);

    uint256 private _nonce;

    function getNonce() internal returns (bytes32) {
        return bytes32(_nonce++);
    }

    function getInt() public returns (uint256) {
        bytes32 entropy = ISC.sandbox.getEntropy();
        bytes32 nonce = getNonce();
        bytes32 digest = keccak256(bytes.concat(entropy, nonce));

        uint256 value = uint256(digest);

        emit Int(value);
        return value;
    }

    function getBytes(uint length) public returns (bytes memory) {
        bytes32 entropy = ISC.sandbox.getEntropy();
        bytes32 nonce = getNonce();
        bytes32 digest = keccak256(bytes.concat(entropy, nonce));

        bytes memory value = new bytes(length);
        for (uint i = 0; i < length; i += 32) {
            digest = keccak256(bytes.concat(digest));
            for (uint j = 0; j < 32 && i + j < length; j++) {
                value[i + j] = digest[j];
            }
        }

        emit Bytes(value);
        return value;
    }
}

```