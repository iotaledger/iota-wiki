# Magic Contract

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
  [`registerERC20NativeToken`](./core-contracts/evm.md#registerERC20NativeToken)
  (address `0x107402xxxxxxxx00000000000000000000000000` where `xxxxxxxx` is the
  little-endian encoding of the foundry serial number)
- [ERC20ExternalNativeTokens](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC20ExternalNativeTokens.sol)
  contract, available at a dynamically assigned address after being registered
  by the foundry owner by calling
  [`registerERC20NativeTokenOnRemoteChain`](./core-contracts/evm.md#registerERC20NativeTokenOnRemoteChain)
  on the chain that controls the foundry.
- [ERC721NFTs](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC721NFTs.sol)
  contract, available at `ISC.nfts`
  (address `0x1074030000000000000000000000000000000000`)
- [ERC721NFTCollection](https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ERC721NFTCollection.sol)
  contract, available at `ISC.erc721NFTCollection(collectionID)`, after being
  registered by calling [`registerERC721NFTCollection`](./core-contracts/evm.md#registerERC721NFTCollection).

There are some usage examples in
the [ISCTest.sol](https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol) contract (used
internally in unit tests).
