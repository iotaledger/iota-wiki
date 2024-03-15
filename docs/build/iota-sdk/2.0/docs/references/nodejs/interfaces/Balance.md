# Interface: Balance

A balance

## Table of contents

### Properties

- [baseCoin](Balance.md#basecoin)
- [mana](Balance.md#mana)
- [requiredStorageDeposit](Balance.md#requiredstoragedeposit)
- [nativeTokens](Balance.md#nativetokens)
- [accounts](Balance.md#accounts)
- [foundries](Balance.md#foundries)
- [nfts](Balance.md#nfts)
- [delegations](Balance.md#delegations)
- [potentiallyLockedOutputs](Balance.md#potentiallylockedoutputs)

## Properties

### baseCoin

• **baseCoin**: [`BaseCoinBalance`](BaseCoinBalance.md)

Total and available amount of the base coin

___

### mana

• **mana**: [`ManaBalance`](ManaBalance.md)

Total and available mana

___

### requiredStorageDeposit

• **requiredStorageDeposit**: [`RequiredStorageDeposit`](RequiredStorageDeposit.md)

The required storage deposit for the outputs

___

### nativeTokens

• **nativeTokens**: `Object`

The balance of the native tokens

#### Index signature

▪ [tokenId: [`TokenId`](../api_ref.md#tokenid)]: [`NativeTokenBalance`](NativeTokenBalance.md)

___

### accounts

• **accounts**: `string`[]

Account outputs

___

### foundries

• **foundries**: `string`[]

Foundry outputs

___

### nfts

• **nfts**: `string`[]

Nft outputs

___

### delegations

• **delegations**: `string`[]

Delegation outputs

___

### potentiallyLockedOutputs

• **potentiallyLockedOutputs**: `Object`

Outputs with multiple unlock conditions and if they can currently be spent or not. If there is a
TimelockUnlockCondition or ExpirationUnlockCondition this can change at any time

#### Index signature

▪ [outputId: [`HexEncodedString`](../api_ref.md#hexencodedstring)]: `boolean`
