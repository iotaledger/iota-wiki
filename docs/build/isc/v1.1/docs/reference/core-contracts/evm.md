---
description: 'The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute
EVM code.'
image: /img/logo/WASP_logo_dark.png
tags:

- smart contracts
- core
- root
- initialization
- entry points
- fees
- ownership
- views
- reference
---

# The `evm` Contract

The `evm` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts chain.

The `evm` core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.
It also includes the implementation of the [ISC Magic contract](../../how-tos/core-contracts/introduction.md).

:::note

For more information about how ISC supports EVM contracts, refer to the [EVM](../../getting-started/languages-and-vms.md#evmsolidity-based-smart-contracts) section.

:::

---

## Entry Points

Most entry points of the `evm` core contract are meant to be accessed through the JSON-RPC service provided
automatically by the Wasp node so that the end users can use standard EVM tools like [MetaMask](https://metamask.io/).
We only list the entry points not exposed through the JSON-RPC interface in this document.

### `init()`

Called automatically when the ISC is deployed.

Some parameters of the `evm` contract can be specified by passing them to the
[`root` contract `init` entry point](root.md#init):

- `evmg` (optional [`GenesisAlloc`](#genesisalloc)): The genesis allocation. The balance of all accounts must be 0.
- `evmbk` (optional `int32` - default: keep all): Amount of EVM blocks to keep in the state.
- `evmchid` (optional `uint16` - default: 1074): EVM chain iD

  :::caution

  Re-using an existing Chain ID is not recommended and can be a security risk. For serious usage, register a unique
  Chain ID on [Chainlist](https://chainlist.org/) and use that instead of the default. **It is not possible to change
  the EVM chain ID after deployment.**

  :::

- `evmw` (optional [`GasRatio`](#gasratio) - default: `1:1`): The ISC to EVM gas ratio.

### `registerERC20NativeToken`

Registers an ERC20 contract to act as a proxy for the native tokens, at address
`0x107402xxxxxxxx00000000000000000000000000`, where `xxxxxxxx` is the
little-endian encoding of the foundry serial number.

Only the foundry owner can call this endpoint.

#### Parameters

- `fs` (`uint32`): The foundry serial number
- `n` (`string`): The token name
- `t` (`string`): The ticker symbol
- `d` (`uint8`): The token decimals

You can call this endpoint with the `wasp-cli register-erc20-native-token` command. See
`wasp-cli chain register-erc20-native-token -h` for instructions on how to use the command.

### `registerERC20NativeTokenOnRemoteChain`

Registers an ERC20 contract to act as a proxy for the native tokens **on another
chain**.

The foundry must be controlled by this chain. Only the foundry owner can call
this endpoint.

This endpoint is intended to be used in case the foundry is controlled by chain
A, and the owner of the foundry wishes to register the ERC20 contract on chain
B. In that case, the owner must call this endpoint on chain A with `target =
chain B`. The request to chain B is then sent as an on-ledger request.
After a few minutes, call
[`getERC20ExternalNativeTokenAddress`](#geterc20externalnativetokenaddress)
on chain B to find out the address of the ERC20 contract.

#### Parameters

- `fs` (`uint32`): The foundry serial number
- `n` (`string`): The token name
- `t` (`string`): The ticker symbol
- `d` (`uint8`): The token decimals
- `A` (`uint8`): The target chain address, where the ERC20 contract will be
  registered.

You can call this endpoint with the `wasp-cli register-erc20-native-token-on-remote-chain` command. See
`wasp-cli chain register-erc20-native-token-on-remote-chain -h` for instructions on how to use the command.

### `registerERC20ExternalNativeToken`

Registers an ERC20 contract to act as a proxy for the native tokens.

Only an alias address can call this endpoint.

If the foundry is controlled by another ISC chain, the foundry owner can call
[`registerERC20NativeTokenOnRemoteChain`](#registererc20nativetokenonchain)
on that chain, which will automatically call this endpoint on the chain set as
target.

#### Parameters

- `fs` (`uint32`): The foundry serial number
- `n` (`string`): The token name
- `t` (`string`): The ticker symbol
- `d` (`uint8`): The token decimals
- `T` (`TokenScheme`): The native token scheme

### `registerERC721NFTCollection`

Registers an ERC721 contract to act as a proxy for an NFT collection, at address
`0x107404xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`, where `xxx...` is the first 17
bytes of the collection ID.

The call will fail if the address is taken by another collection with the same prefix.

#### Parameters

- `C` (`NTFID`): The collection ID

---

## Views

### `getERC20ExternalNativeTokenAddress`

Returns the address of an ERC20 contract registered with
[`registerERC20NativeTokenOnRemoteChain`](#registererc20nativetokenonchain).

Only the foundry owner can call this endpoint.

#### Parameters

- `N` (`NativeTokenID`): The native token ID

---

## Schemas

### `GenesisAlloc`

`GenesisAlloc` is encoded as the concatenation of:

- Amount of accounts `n` (`uint32`).
- `n` times:
  - Ethereum address (`[]byte` prefixed with `uint32` size).
  - Account code (`[]byte` prefixed with `uint32` size).
  - Amount of storage key/value pairs `m`(`uint32`).
  - `m` times:
    - Key (`[]byte` prefixed with `uint32` size).
    - Value(`[]byte` prefixed with `uint32` size).
  - Account balance (must be 0)(`[]byte` prefixed with `uint32` size).
  - Account nonce (`uint64`).
  - Account private key (may be used for tests)(`uint64`).
