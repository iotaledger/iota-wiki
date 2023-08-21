---
description: The ISC Magic Contract allows EVM contracts to access ISC functionality.
image: /img/logo/WASP_logo_dark.png
keywords:
  - configure
  - using
  - EVM
  - magic
  - Ethereum
  - Solidity
  - metamask
  - JSON
  - RPC
---

# The ISC Magic Contract

[EVM and ISC are inherently very different platforms](compatibility.md).
Some EVM-specific actions (e.g., manipulating Ethereum tokens) are disabled, and EVM contracts can access ISC-specific
functionality through the _ISC Magic Contract_.

The Magic contract is an EVM contract deployed by default on every ISC chain, in the EVM genesis block, at
address `0x1074000000000000000000000000000000000000`.
The implementation of the Magic contract is baked-in in
the [`evm`](/learn/smart-contracts/core_concepts/core_contracts/evm) [core contract](/learn/smart-contracts/core_concepts/core_contracts/overview));
i.e. it is not a pure-Solidity contract.

The Magic contract has several methods, which are categorized into specialized
interfaces: `ISCSandbox`, `ISCAccounts`, `ISCUtil` and so on.
You can access these interfaces from any Solidity contract by importing
the [ISC library](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol).

The Magic contract also provides proxy ERC20 contracts to manipulate ISC base
tokens and native tokens on L2.

## Examples

### Calling getEntropy()

```solidity
pragma solidity >=0.8.5;

import "@iscmagic/ISC.sol";

contract MyEVMContract {
    event EntropyEvent(bytes32 entropy);

    // this will emit a "random" value taken from the ISC entropy value
    function emitEntropy() public {
        bytes32 e = ISC.sandbox.getEntropy();
        emit EntropyEvent(e);
    }
}
```

In the example above, `ISC.sandbox.getEntropy()` calls the
[`getEntropy`](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCSandbox.sol#L20)
method of the `ISCSandbox` interface, which, in turn,
calls [ISC Sandbox's](/learn/smart-contracts/core_concepts/sandbox) `GetEntropy`.

### Calling a native contract

You can call native contracts using [`ISC.sandbox.call`](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCSandbox.sol#L56):

```solidity
pragma solidity >=0.8.5;

import "@iscmagic/ISC.sol";

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

`ISC.util.hn` is used to get the `hname` of the incounter countract and the
`incCounter` entry point. You can also call view entry points using
[ISC.sandbox.callView](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCSandbox.sol#L59).

## API Reference

- [Common type definitions](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCTypes.sol)
- [ISC library](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol)
- [ISCSandbox](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCSandbox.sol)
  interface, available at `ISC.sandbox`
- [ISCAccounts](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCAccounts.sol)
  interface, available at `ISC.accounts`
- [ISCUtil](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISCUtil.sol)
  interface, available at `ISC.util`
- [ERC20BaseTokens](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC20BaseTokens.sol)
  contract, available at `ISC.baseTokens`
  (address `0x1074010000000000000000000000000000000000`)
- [ERC20NativeTokens](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC20NativeTokens.sol)
  contract, available at `ISC.nativeTokens(foundrySN)` after being registered
  by the foundry owner by calling
  [`registerERC20NativeToken`](/learn/smart-contracts/core_concepts/core_contracts/evm#registerERC20NativeToken)
  (address `0x107402xxxxxxxx00000000000000000000000000` where `xxxxxxxx` is the
  little-endian encoding of the foundry serial number)
- [ERC20ExternalNativeTokens](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC20ExternalNativeTokens.sol)
  contract, available at a dynamically assigned address after being registered
  by the foundry owner by calling
  [`registerERC20NativeTokenOnRemoteChain`](/learn/smart-contracts/core_concepts/core_contracts/evm#registerERC20NativeTokenOnRemoteChain)
  on the chain that controls the foundry.
- [ERC721NFTs](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC721NFTs.sol)
  contract, available at `ISC.nfts`
  (address `0x1074030000000000000000000000000000000000`)
- [ERC721NFTCollection](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC721NFTCollection.sol)
  contract, available at `ISC.erc721NFTCollection(collectionID)`, after being
  registered by calling [`registerERC721NFTCollection`](/learn/smart-contracts/core_concepts/core_contracts/evm#registerERC721NFTCollection).

There are some usage examples in
the [ISCTest.sol](https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol) contract (used
internally in unit tests).
