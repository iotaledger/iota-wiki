---
sidebar_position: 1
---

# Introduction

This section documents the magic contract and all it's subcontracts

- [Common type definitions](./ISCTypes.md)
- [ISC library](./ISC.md)
- [ISCSandbox](./ISCSandbox.md)
  interface, available at `ISC.sandbox`
- [ISCAccounts](./ISCAccounts.md)
  interface, available at `ISC.accounts`
- [ISCUtil](./ISCUtil.md)
  interface, available at `ISC.util`
- [ERC20BaseTokens](./ERC20BaseTokens.md)
  contract, available at `ISC.baseTokens`
  (address `0x1074010000000000000000000000000000000000`)
- [ERC20NativeTokens](./ERC20NativeTokens.md)
  contract, available at `ISC.nativeTokens(foundrySN)` after being registered
  by the foundry owner by calling
  [`registerERC20NativeToken`](../core-contracts/evm.md#registerERC20NativeToken)
  (address `0x107402xxxxxxxx00000000000000000000000000` where `xxxxxxxx` is the
  little-endian encoding of the foundry serial number)
- [ERC20ExternalNativeTokens](./ERC20ExternalNativeTokens.md)
  contract, available at a dynamically assigned address after being registered
  by the foundry owner by calling
  [`registerERC20NativeTokenOnRemoteChain`](../core-contracts/evm.md#registerERC20NativeTokenOnRemoteChain)
  on the chain that controls the foundry.
- [ERC721NFTs](./ERC721NFTs.md)
  contract, available at `ISC.nfts`
  (address `0x1074030000000000000000000000000000000000`)
- [ERC721NFTCollection](./ERC721NFTCollection.md)
  contract, available at `ISC.erc721NFTCollection(collectionID)`, after being
  registered by calling [`registerERC721NFTCollection`](../core-contracts/evm.md#registerERC721NFTCollection).

There are some usage examples in
the [ISC How-To Guides](../../how-tos/introduction.md)  and the [ISCTest.sol](https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol) contract (used
internally in unit tests).

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
