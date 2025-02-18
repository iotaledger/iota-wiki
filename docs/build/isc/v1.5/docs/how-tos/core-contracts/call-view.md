---
description: With call and callView you can interact with any core contract
image: /img/logo/WASP_logo_dark.png
tags:
  - magic contract
  - core
  - EVM
  - Ethereum
  - Solidity
  - ISC
---

# Interact with any Core contract

## About `call` and `callView`

The magic contract provides you with a solidity interface to the core contracts. Some functions like [`getL2BalanceBaseTokens`](../../reference/magic-contract/ISCAccounts.md#getl2balancebasetokens) are wrapped in the magic contract directly, others you need to call yourself. You can do that with the [`call`](../../reference/magic-contract/ISCSandbox.md#call) and [`callView`](../../reference/magic-contract/ISCSandbox.md#callview) functions.

:::info WASM

You can also use `call` and `callView` to interact with WASM contracts.

:::

## Example Code

1. Get the [`AgentID`](../../explanations/how-accounts-work.md) from the sender by calling ISC.sandbox.getSenderAccount().

```solidity
ISCAgentID memory agentID = ISC.sandbox.getSenderAccount();
```

2. Initialize the parameters for the call by creating a new [`ISCDict`](../../reference/magic-contract/ISCTypes.md#iscdict). As you can see in the docs, [`getl2balancenativetokens`](../../reference/magic-contract/ISCAccounts.md#getl2balancenativetokens) takes two parameters.: the Agent ID and the native token ID. So, you have to create a dictionary with two key-value pairs. The key of the first pair (Agent ID) has to be `a` and the key for the second pair (native token ID) `N`.

```solidity
ISCDict memory params = ISCDict(new ISCDictItem[](2));
params.items[0] = ISCDictItem("a", agentID.data);
params.items[1] = ISCDictItem("N", nativeTokenID);
```

3. Now, you can use [`callView`](../../reference/magic-contract/ISCSandbox.md#callview) to call our contract. The first parameter is the core contract `hname`, which we can get with the helper utility [`hn`](../../reference/magic-contract/ISCUtil.md#hn), and the second parameter is the function we want to call. The last parameter is the dictionary with all function parameters.

```solidity
ISCDict memory result = ISC.sandbox.callView(
    ISC.util.hn("accounts"),
    ISC.util.hn("balanceNativeToken"),
    params
);
```

4. Next, you can either return or emit the result.

```solidity
emit NativeTokenBalance(bytesToUint(result.items[0].value));
```

:::info Return Dictionary

Keep in mind that the call and callView functions will always return a dictionary. The values of this dictionary are always of type byte, so you need to take care of converting it yourself.

:::

### Full Example Code 

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract NativeTokenBalance {
    event NativeTokenBalance(uint balance);

    function getNativeTokenBalance(bytes memory nativeTokenID) public {
        ISCAgentID memory agentID = ISC.sandbox.getSenderAccount();

        ISCDict memory params = ISCDict(new ISCDictItem[](2));
        params.items[0] = ISCDictItem("a", agentID.data);
        params.items[1] = ISCDictItem("N", nativeTokenID);

        ISCDict memory result = ISC.sandbox.callView(
            ISC.util.hn("accounts"),
            ISC.util.hn("balanceNativeToken"),
            params
        );

        emit NativeTokenBalance(bytesToUint(result.items[0].value));
    }

    function bytesToUint(bytes memory b) internal pure virtual returns (uint256) {
        require(b.length <= 32, "Bytes length exceeds 32.");
        return abi.decode(abi.encodePacked(new bytes(32 - b.length), b), (uint256));
    }
}
```
