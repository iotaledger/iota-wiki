---
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Introduction

This section documents the magic contract and all it's interfaces:

<DocCardList />

<!-- TODO: Remove -->
## Call a Native Contract

You can call native contracts using [`ISC.sandbox.call`](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCSandbox.sol#L56):

```solidity
pragma solidity >=0.8.5;

import "@iota/iscmagic/ISC.sol";

contract MyEVMContract {
    event EntropyEvent(bytes32 entropy);

    function callInccounter() public {
        ISCDict memory params = ISCDict(new ISCDictItem[](1));
        bytes memory int64Encoded42 = hex"2A00000000000000";
        params.items[0] = ISCDictItem("counter", int64Encoded42);
        ISCAssets memory allowance;
        ISC.sandbox.call(ISC.util.hn("inccounter"), ISC.util.hn("incCounter"), params, allowance);
    }
}
```

`ISC.util.hn` is used to get the `hname` of the `inccounter` contract and the
`incCounter` entry point. You can also call view entry points using
[ISC.sandbox.callView](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCSandbox.sol#L59).
