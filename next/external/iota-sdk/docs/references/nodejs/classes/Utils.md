# Class: Utils

Utils class for utils.

## Table of contents

### Methods

- [generateMnemonic](Utils.md#generatemnemonic)
- [mnemonicToHexSeed](Utils.md#mnemonictohexseed)
- [computeAliasId](Utils.md#computealiasid)
- [computeNftId](Utils.md#computenftid)
- [computeFoundryId](Utils.md#computefoundryid)
- [parseBech32Address](Utils.md#parsebech32address)
- [blockId](Utils.md#blockid)
- [bech32ToHex](Utils.md#bech32tohex)
- [hexToBech32](Utils.md#hextobech32)
- [aliasIdToBech32](Utils.md#aliasidtobech32)
- [nftIdToBech32](Utils.md#nftidtobech32)
- [hexPublicKeyToBech32Address](Utils.md#hexpublickeytobech32address)
- [isAddressValid](Utils.md#isaddressvalid)
- [hashTransactionEssence](Utils.md#hashtransactionessence)
- [verifyEd25519Signature](Utils.md#verifyed25519signature)
- [verifyMnemonic](Utils.md#verifymnemonic)

## Methods

### generateMnemonic

▸ `Static` **generateMnemonic**(): `string`

Generates a new mnemonic.

#### Returns

`string`

___

### mnemonicToHexSeed

▸ `Static` **mnemonicToHexSeed**(`mnemonic`): `string`

Returns a hex encoded seed for a mnemonic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`string`

___

### computeAliasId

▸ `Static` **computeAliasId**(`outputId`): `string`

Computes the alias id for the given alias output id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputId` | `string` |

#### Returns

`string`

___

### computeNftId

▸ `Static` **computeNftId**(`outputId`): `string`

Computes the NFT id for the given NFT output id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputId` | `string` |

#### Returns

`string`

___

### computeFoundryId

▸ `Static` **computeFoundryId**(`aliasAddress`, `serialNumber`, `tokenSchemeKind`): `string`

Computes the foundry id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `aliasAddress` | `string` |
| `serialNumber` | `number` |
| `tokenSchemeKind` | `number` |

#### Returns

`string`

___

### parseBech32Address

▸ `Static` **parseBech32Address**(`address`): `Address`

Returns a valid Address parsed from a String.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Address`

___

### blockId

▸ `Static` **blockId**(`block`): `string`

Returns a block ID (Blake2b256 hash of the block bytes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `IBlock` |

#### Returns

`string`

___

### bech32ToHex

▸ `Static` **bech32ToHex**(`bech32`): `string`

Transforms bech32 to hex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bech32` | `string` |

#### Returns

`string`

___

### hexToBech32

▸ `Static` **hexToBech32**(`hex`, `bech32Hrp`): `string`

Transforms a hex encoded address to a bech32 encoded address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |
| `bech32Hrp` | `string` |

#### Returns

`string`

___

### aliasIdToBech32

▸ `Static` **aliasIdToBech32**(`aliasId`, `bech32Hrp`): `string`

Transforms an alias id to a bech32 encoded address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `aliasId` | `string` |
| `bech32Hrp` | `string` |

#### Returns

`string`

___

### nftIdToBech32

▸ `Static` **nftIdToBech32**(`nftId`, `bech32Hrp`): `string`

Transforms an nft id to a bech32 encoded address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nftId` | `string` |
| `bech32Hrp` | `string` |

#### Returns

`string`

___

### hexPublicKeyToBech32Address

▸ `Static` **hexPublicKeyToBech32Address**(`hex`, `bech32Hrp`): `string`

Transforms a hex encoded public key to a bech32 encoded address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |
| `bech32Hrp` | `string` |

#### Returns

`string`

___

### isAddressValid

▸ `Static` **isAddressValid**(`address`): `boolean`

Checks if a String is a valid bech32 encoded address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`boolean`

___

### hashTransactionEssence

▸ `Static` **hashTransactionEssence**(`essence`): `string`

Compute the hash of a transaction essence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `essence` | `ITransactionEssence` |

#### Returns

`string`

___

### verifyEd25519Signature

▸ `Static` **verifyEd25519Signature**(`signature`, `message`, `address`): `boolean`

Verifies the Ed25519Signature for a message against an Ed25519Address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `IEd25519Signature` |
| `message` | `string` |
| `address` | [`Ed25519Address`](Ed25519Address.md) |

#### Returns

`boolean`

___

### verifyMnemonic

▸ `Static` **verifyMnemonic**(`mnemonic`): `void`

Verify if a mnemonic is a valid BIP39 mnemonic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`void`
