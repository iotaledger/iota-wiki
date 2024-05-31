---
description: 'The `accounts` contract keeps the ledger of on-chain accounts.'
image: /img/logo/WASP_logo_dark.png
tags:
  - core contracts
  - accounts
  - deposit
  - withdraw
  - assets
  - balance
  - reference
---

# The `accounts` Contract

The `accounts` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts
chain.

This contract keeps a consistent ledger of on-chain accounts in its state,
i.e. [the L2 ledger](../../explanations/how-accounts-work.md).

---

## Entry Points

The `accounts` contract provides functions to deposit and withdraw tokens, information about the assets deposited on the
chain, and the functionality to create and use foundries.

### `deposit()`

A no-op that has the side effect of crediting any transferred tokens to the sender's account.

:::note Gas Fees

As with every call, the gas fee is debited from the L2 account right after executing the request.

:::

### `withdraw()`

Moves tokens from the caller's on-chain account to the caller's L1 address. The number of
tokens to be withdrawn must be specified via the allowance of the request.

:::note Contract Account

Because contracts does not have a corresponding L1 address it does not make sense to
have them call this function. It will fail with an error.

:::

:::note Storage Deposit

A call to withdraw means that a L1 output will be created. Because of this, the withdrawn
amount must be able to cover the L1 storage deposit. Otherwise, it will fail.

:::

### `transferAllowanceTo(a AgentID)`

Transfers the specified allowance from the sender's L2 account to the given L2 account on
the chain.

:::note

When a transfer is made into an EVM account, an EVM tx will be created on the EVM side from the zero address (0x0000...) to the target account.
Information about what is being transferred will be encoded in the transaction's data using the following format:

```
<Sender_AgentID bytes> + <Assets bytes>
```

The encoding used for this data can be found on [TIP-51](https://github.com/jorgemmsilva/tips/blob/b46d7bc36a0f7d4c2a1ad32ba25ec2abb4835cb3/tips/TIP-0051/tip-0051.md)

:::

#### Parameters

- `a` (`AgentID`): The target L2 account.

### `transferAccountToChain(g GasReserve)`

Transfers the specified allowance from the sender SC's L2 account on
the target chain to the sender SC's L2 account on the origin chain.

#### Parameters

- `g` (`uint64`): Optional gas amount to reserve in the allowance for
  the internal call to transferAllowanceTo(). Default 100 (MinGasFee).

:::note Important Detailed Information

[Read carefully before using this function.](xfer.md)

:::

### `nativeTokenCreate(t TokenScheme, tn TokenName, ts TokenSymbol, td TokenDecimal) s SerialNumber`

Creates a new foundry and registers it as a ERC20 and IRC30 token.

You can call this end point from the CLI using `wasp-cli chain create-native-token -h`

#### Parameters

- `t` ([`iotago::TokenScheme`](https://github.com/iotaledger/iota.go/blob/develop/token_scheme.go)): The token scheme
  for the new foundry.
- `tn` (`string`): The token name
- `ts` (`string`): The token symbol
- `td` (`uint8`): The token decimals

The storage deposit for the new foundry must be provided via allowance (only the minimum required will be used).

#### Returns

- `s` (`uint32`): The serial number of the newly created foundry

### `nativeTokenModifySupply(s SerialNumber, d SupplyDeltaAbs, y DestroyTokens)`

Mints or destroys tokens for the given foundry, which must be controlled by the caller.

#### Parameters

- `s` (`uint32`): The serial number of the foundry.
- `d` (positive `big.Int`): Amount to mint or destroy.
- `y` (optional `bool` - default: `false`): Whether to destroy tokens (`true`) or not (`false`).

When minting new tokens, the storage deposit for the new output must be provided via an allowance.

When destroying tokens, the tokens to be destroyed must be provided via an allowance.

### `nativeTokenDestroy(s SerialNumber)`

Destroys a given foundry output on L1, reimbursing the storage deposit to the caller. The foundry must be owned by the
caller.

:::warning

This operation cannot be reverted.

:::

#### Parameters

- `s` (`uint32`): The serial number of the foundry.


### `foundryCreateNew(t TokenScheme) s SerialNumber`

:::warning Deprecated

This function is deprecated, please use [`nativeTokenCreate`](#nativetokencreatet-tokenscheme-s-serialnumber) instead

:::

Creates a new foundry with the specified token scheme, and assigns the foundry to the sender.

You can call this end point from the CLI using `wasp-cli chain create-foundry -h`

#### Parameters

- `t` ([`iotago::TokenScheme`](https://github.com/iotaledger/iota.go/blob/develop/token_scheme.go)): The token scheme
  for the new foundry.

The storage deposit for the new foundry must be provided via allowance (only the minimum required will be used).

#### Returns

- `s` (`uint32`): The serial number of the newly created foundry


### `mintNFT(I ImmutableData, a AgentID, C CollectionID, w WithdrawOnMint)`

Mints an NFT with ImmutableData `I` that will be owned by the AgentID `a`.
It's possible to mint as part of a collection `C` (the caller must be the owner of the collection NFT to mint new NFTs as part of said collection).
The mint can be done directly to any L1 address (it is not necessary for the target to have an account on the chain)

#### Parameters

- `I` (`[]byte`): ImmutableData for the NFT.
- `a` (`AgentID`): AgentID that will be the owner of the NFT.
- `C` (optional `NFTID` - default empty): collectionID (NFTID) for the NFT.
- `w` (optional `bool` - default `false`): whether to withdrawal the NFT in the minting step (can only be `true` when the targetAgentID is a L1 address).

#### Returns

- `D` (`MintID`): the internal ID of the NFT at the time of minting that can be used by users/contracts to obtain the resulting NFTID on the next block

---

## Views

### `balance(a AgentID)`

Returns the fungible tokens owned by the given Agent ID on the chain.

#### Parameters

- `a` (`AgentID`): The account Agent ID.

#### Returns

A map of [`TokenID`](#tokenid) => `big.Int`. An empty token ID (a string of zero length) represents the L1 base token.

### `balanceBaseToken(a AgentID)`

Returns the amount of base tokens owned by any AgentID `a` on the chain.

#### Parameters

- `a` (`AgentID`): The account Agent ID.

#### Returns

- `B` (`uint64`): The amount of base tokens in the account.

### `balanceNativeToken(a AgentID, N TokenID)`

Returns the amount of native tokens with Token ID `N` owned by any AgentID `a` on the chain.

#### Parameters

- `a` (`AgentID`): The account Agent ID.
- `N` ([`TokenID`](#tokenid)): The Token ID.

#### Returns

- `B` (`big.Int`): The amount of native tokens in the account.

### `totalAssets()`

Returns the sum of all fungible tokens controlled by the chain.

#### Returns

A map of [`TokenID`](#tokenid) => `big.Int`. An empty token ID (a string of zero length) represents the L1 base token.

### `accounts()`

Returns a list of all agent IDs that own assets on the chain.

#### Returns

A map of `AgentiD` => `0x01`.

### `getNativeTokenIDRegistry()`

Returns a list of all native tokenIDs that are owned by the chain.

#### Returns

A map of [`TokenID`](#tokenid) => `0x01`

### `nativeToken(s FoundrySerialNumber)`

#### Parameters

- `s` ([`FoundrySerialNumber`](#foundryserialnumber)): The Foundry serial number.

#### Returns

- `b`: [`iotago::FoundryOutput`](https://github.com/iotaledger/iota.go/blob/develop/output_foundry.go)

### `accountNFTs(a AgentID)`

Returns the NFT IDs for all NFTs owned by the given account.

#### Parameters

- `a` (`AgentID`): The account Agent ID

#### Returns

- `i` ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go)
  of [`iotago::NFTID`](https://github.com/iotaledger/iota.go/blob/develop/output_nft.go)):
  The NFT IDs owned by the account

### `accountNFTAmount(a AgentID)`

Returns the number of NFTs owned by the given account.

#### Parameters

- `a` (`AgentID`): The account Agent ID

#### Returns

- `A` (`uint32`) Amount of NFTs owned by the account

### `accountNFTsInCollection(a AgentID)`

Returns the NFT IDs for all NFTs in the given collection that are owned by the given account.

#### Parameters

- `a` (`AgentID`): The account Agent ID
- `C` (`NFTID`): The NFT ID of the collection

#### Returns

- `i` ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go)
  of [`iotago::NFTID`](https://github.com/iotaledger/iota.go/blob/develop/output_nft.go)):
  The NFT IDs in the collection owned by the account

### `accountNFTAmountInCollection(a AgentID)`

Returns the number of NFTs in the given collection that are owned by the given account.

#### Parameters

- `a` (`AgentID`): The account Agent ID
- `C` (`NFTID`): The NFT ID of the collection

#### Returns

- `A` (`uint32`) Amount of NFTs in the collection owned by the account

### `accountFoundries(a AgentID)`

Returns all foundries owned by the given account.

#### Parameters

- `a` (`AgentID`): The account Agent ID

#### Returns

A map of [`FoundrySerialNumber`](#foundryserialnumber) => `0x01`

### `nftData(z NFTID)`

Returns the data for a given NFT with ID `z` that is on the chain.

#### Returns

- `e`: [`NFTData`](#nftdata)

### `NFTIDbyMintID(D MintID)`

Returns the NFTID `z` for a given MintID `D`.

#### Parameters

- `D` (`MintID`): MintID producted at the time the NFT was minted

#### Returns

- `z` (`NFTID`): The ID of the NFT

### `getAccountNonce(a AgentID)`

Returns the current account nonce for a give AgentID `a`.
The account nonce is used to issue off-ledger requests.

#### Parameters

- `a` (`AgentID`): The account Agent ID.

#### Returns

- `n` (`uint64`): The account nonce.

## Schemas

### `FoundrySerialNumber`

```
FoundrySerialNumber = uint32
```

### `TokenID`

```
TokenID = [38]byte
```

### `NFTID`

```
NFTID = [32]byte
```

### `MintID`

```
MintID = [6]byte
```

### `NFTData`

`NFTData` is encoded as the concatenation of:

- The issuer ([`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)).
- The NFT metadata: the length (`uint16`) followed by the data bytes.
- The NFT owner (`AgentID`).
