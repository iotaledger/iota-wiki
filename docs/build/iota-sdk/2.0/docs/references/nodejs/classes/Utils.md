# Class: Utils

Utils class for utils.

## Table of contents

### Constructors

- [constructor](Utils.md#constructor)

### Methods

- [generateMnemonic](Utils.md#generatemnemonic)
- [mnemonicToHexSeed](Utils.md#mnemonictohexseed)
- [computeAccountId](Utils.md#computeaccountid)
- [computeFoundryId](Utils.md#computefoundryid)
- [computeNftId](Utils.md#computenftid)
- [computeOutputId](Utils.md#computeoutputid)
- [transactionIdFromOutputId](Utils.md#transactionidfromoutputid)
- [outputIndexFromOutputId](Utils.md#outputindexfromoutputid)
- [computeMinimumOutputAmount](Utils.md#computeminimumoutputamount)
- [computeTokenId](Utils.md#computetokenid)
- [parseBech32Address](Utils.md#parsebech32address)
- [blockId](Utils.md#blockid)
- [transactionId](Utils.md#transactionid)
- [bech32ToHex](Utils.md#bech32tohex)
- [hexToBech32](Utils.md#hextobech32)
- [accountIdToBech32](Utils.md#accountidtobech32)
- [anchorIdToBech32](Utils.md#anchoridtobech32)
- [nftIdToBech32](Utils.md#nftidtobech32)
- [hexPublicKeyToBech32Address](Utils.md#hexpublickeytobech32address)
- [isAddressValid](Utils.md#isaddressvalid)
- [protocolParametersHash](Utils.md#protocolparametershash)
- [transactionSigningHash](Utils.md#transactionsigninghash)
- [verifyEd25519Signature](Utils.md#verifyed25519signature)
- [verifySecp256k1EcdsaSignature](Utils.md#verifysecp256k1ecdsasignature)
- [verifyMnemonic](Utils.md#verifymnemonic)
- [computeSlotIndex](Utils.md#computeslotindex)
- [computeSlotCommitmentId](Utils.md#computeslotcommitmentid)
- [outputHexBytes](Utils.md#outputhexbytes)
- [verifyTransactionSemantic](Utils.md#verifytransactionsemantic)
- [manaWithDecay](Utils.md#manawithdecay)
- [generateManaWithDecay](Utils.md#generatemanawithdecay)
- [outputManaWithDecay](Utils.md#outputmanawithdecay)
- [verifyTransactionSyntax](Utils.md#verifytransactionsyntax)
- [blockBytes](Utils.md#blockbytes)

## Constructors

### constructor

• **new Utils**()

## Methods

### generateMnemonic

▸ `Static` **generateMnemonic**(): `string`

Generate a new mnemonic.

#### Returns

`string`

___

### mnemonicToHexSeed

▸ `Static` **mnemonicToHexSeed**(`mnemonic`): `string`

Convert a mnemonic to a hex encoded seed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | A mnemonic string. |

#### Returns

`string`

The seed as hex-encoded string.

___

### computeAccountId

▸ `Static` **computeAccountId**(`outputId`): `string`

Compute the account ID from a given account output ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | The output ID as hex-encoded string. |

#### Returns

`string`

The account ID.

___

### computeFoundryId

▸ `Static` **computeFoundryId**(`accountId`, `serialNumber`, `tokenSchemeType`): `string`

Compute the Foundry ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The account ID associated with the Foundry. |
| `serialNumber` | `number` | The serial number of the Foundry. |
| `tokenSchemeType` | `number` | The Token scheme type. Currently only a simple scheme is supported. |

#### Returns

`string`

The Foundry ID.

___

### computeNftId

▸ `Static` **computeNftId**(`outputId`): `string`

Compute the NFT ID from the given NFT output ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | The output ID as hex-encoded string. |

#### Returns

`string`

The NFT ID.

___

### computeOutputId

▸ `Static` **computeOutputId**(`id`, `index`): `string`

Compute the output ID from transaction ID and output index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `index` | `number` |

#### Returns

`string`

The output ID.

___

### transactionIdFromOutputId

▸ `Static` **transactionIdFromOutputId**(`outputId`): `string`

Compute the transaction ID from an output ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | The output ID. |

#### Returns

`string`

The transaction ID of the transaction which created the output.

___

### outputIndexFromOutputId

▸ `Static` **outputIndexFromOutputId**(`outputId`): `number`

Compute the output index from an output ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | The output ID. |

#### Returns

`number`

The output index.

___

### computeMinimumOutputAmount

▸ `Static` **computeMinimumOutputAmount**(`output`, `storageScoreParameters`): `bigint`

Compute the required storage deposit of an output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [`Output`](Output.md) | The output. |
| `storageScoreParameters` | [`StorageScoreParameters`](../interfaces/StorageScoreParameters.md) | Storage score of objects which take node resources. |

#### Returns

`bigint`

The required storage deposit.

___

### computeTokenId

▸ `Static` **computeTokenId**(`accountId`, `serialNumber`, `tokenSchemeType`): `string`

Computes a tokenId from the account ID, serial number and token scheme type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The account that controls the foundry. |
| `serialNumber` | `number` | The serial number of the foundry. |
| `tokenSchemeType` | [`Simple`](../enums/TokenSchemeType.md#simple) | The tokenSchemeType of the foundry. |

#### Returns

`string`

The tokenId.

___

### parseBech32Address

▸ `Static` **parseBech32Address**(`address`): [`Address`](Address.md)

Parse a Bech32 address from a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | A Bech32 address as string. |

#### Returns

[`Address`](Address.md)

A Bech32 address.

___

### blockId

▸ `Static` **blockId**(`block`, `protocolParameters`): `string`

Compute the block ID (Blake2b256 hash of the block bytes) of a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | [`Block`](Block.md) | A block. |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | The network protocol parameters. |

#### Returns

`string`

The corresponding block ID.

___

### transactionId

▸ `Static` **transactionId**(`payload`): `string`

Compute the transaction ID (Blake2b256 hash of the provided transaction payload) of a transaction payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | [`SignedTransactionPayload`](SignedTransactionPayload.md) | A transaction payload. |

#### Returns

`string`

The transaction ID.

___

### bech32ToHex

▸ `Static` **bech32ToHex**(`bech32`): `string`

Convert a Bech32 address to a hex-encoded string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bech32` | `string` | A Bech32 address. |

#### Returns

`string`

The hex-encoded string.

___

### hexToBech32

▸ `Static` **hexToBech32**(`hex`, `bech32Hrp`): `string`

Convert a hex-encoded address string to a Bech32-encoded address string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | A hex-encoded address string. |
| `bech32Hrp` | `string` | The Bech32 HRP (human readable part) to use. |

#### Returns

`string`

The Bech32-encoded address string.

___

### accountIdToBech32

▸ `Static` **accountIdToBech32**(`accountId`, `bech32Hrp`): `string`

Transforms an account id to a bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | An account ID. |
| `bech32Hrp` | `string` | The Bech32 HRP (human readable part) to use. |

#### Returns

`string`

The Bech32-encoded address string.

___

### anchorIdToBech32

▸ `Static` **anchorIdToBech32**(`anchorId`, `bech32Hrp`): `string`

Transforms an anchor id to a bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorId` | `string` | An anchor ID. |
| `bech32Hrp` | `string` | The Bech32 HRP (human readable part) to use. |

#### Returns

`string`

The Bech32-encoded address string.

___

### nftIdToBech32

▸ `Static` **nftIdToBech32**(`nftId`, `bech32Hrp`): `string`

Convert an NFT ID to a Bech32-encoded address string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftId` | `string` | An NFT ID. |
| `bech32Hrp` | `string` | The Bech32 HRP (human readable part) to use. |

#### Returns

`string`

The Bech32-encoded address string.

___

### hexPublicKeyToBech32Address

▸ `Static` **hexPublicKeyToBech32Address**(`hex`, `bech32Hrp`): `string`

Convert a hex-encoded public key to a Bech32-encoded address string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | A hex-encoded public key. |
| `bech32Hrp` | `string` | The Bech32 HRP (human readable part) to use. |

#### Returns

`string`

The Bech32-encoded address string.

___

### isAddressValid

▸ `Static` **isAddressValid**(`address`): `boolean`

Checks whether an address string is a valid Bech32-encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | An address string. |

#### Returns

`boolean`

___

### protocolParametersHash

▸ `Static` **protocolParametersHash**(`protocolParameters`): `string`

Compute the hash of an instance of ProtocolParameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | A ProtocolParameters instance. |

#### Returns

`string`

The hash of the protocol parameters as a hex-encoded string.

___

### transactionSigningHash

▸ `Static` **transactionSigningHash**(`transaction`): `string`

Compute the signing hash of a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](Transaction.md) | A transaction. |

#### Returns

`string`

The signing hash of the transaction as a hex-encoded string.

___

### verifyEd25519Signature

▸ `Static` **verifyEd25519Signature**(`signature`, `message`): `boolean`

Verify an Ed25519 signature against a message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | [`Ed25519Signature`](Ed25519Signature.md) | An Ed25519 signature. |
| `message` | `string` | A hex-encoded message. |

#### Returns

`boolean`

___

### verifySecp256k1EcdsaSignature

▸ `Static` **verifySecp256k1EcdsaSignature**(`publicKey`, `signature`, `message`): `boolean`

Verify a Secp256k1Ecdsa signature against a message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | A hex-encoded public key. |
| `signature` | `string` | A hex-encoded signature. |
| `message` | `string` | A hex-encoded message. |

#### Returns

`boolean`

___

### verifyMnemonic

▸ `Static` **verifyMnemonic**(`mnemonic`): `void`

Verify if a mnemonic is a valid BIP39 mnemonic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | A mnemonic string. |

#### Returns

`void`

___

### computeSlotIndex

▸ `Static` **computeSlotIndex**(`id`): `number`

Computes a slotIndex from a block, transaction or slotCommitment Id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The block, transaction or slotCommitment Id. |

#### Returns

`number`

The slotIndex.

___

### computeSlotCommitmentId

▸ `Static` **computeSlotCommitmentId**(`slotCommitment`): `string`

Derives the `SlotCommitmentId` of the `SlotCommitment`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slotCommitment` | [`SlotCommitment`](SlotCommitment.md) |

#### Returns

`string`

___

### outputHexBytes

▸ `Static` **outputHexBytes**(`output`): `string`

Returns the hex representation of the serialized output bytes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [`Output`](Output.md) | The output. |

#### Returns

`string`

The hex representation of the serialized output bytes.

___

### verifyTransactionSemantic

▸ `Static` **verifyTransactionSemantic**(`transaction`, `inputs`, `protocolParameters`, `unlocks?`, `manaRewards?`): `string`

Verifies the semantic of a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`SignedTransactionPayload`](SignedTransactionPayload.md) | The transaction payload. |
| `inputs` | [`InputSigningData`](InputSigningData.md)[] | The inputs data. |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | The protocol parameters. |
| `unlocks?` | [`Unlock`](Unlock.md)[] | The unlocks. |
| `manaRewards?` | `Object` | The total mana rewards claimed in the transaction. |

#### Returns

`string`

The conflict reason.

___

### manaWithDecay

▸ `Static` **manaWithDecay**(`mana`, `slotIndexCreated`, `slotIndexTarget`, `protocolParameters`): `bigint`

Applies mana decay to the given mana.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mana` | `bigint` | The mana to decay. |
| `slotIndexCreated` | `number` | The slot index at which the provided mana starts to decay. |
| `slotIndexTarget` | `number` | The slot index at which the provided mana stops to decay. |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | The ProtocolParameters. |

#### Returns

`bigint`

The decayed mana.

___

### generateManaWithDecay

▸ `Static` **generateManaWithDecay**(`amount`, `slotIndexCreated`, `slotIndexTarget`, `protocolParameters`): `bigint`

Calculates the potential mana that is generated by holding `amount` tokens from `slotIndexCreated` to
`slotIndexTarget` and applies the decay to the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount that generates mana. |
| `slotIndexCreated` | `number` | The slot index at which the provided amount starts to generate mana. |
| `slotIndexTarget` | `number` | The slot index at which the provided mana stops to generate mana. |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | The ProtocolParameters. |

#### Returns

`bigint`

The decayed potential mana.

___

### outputManaWithDecay

▸ `Static` **outputManaWithDecay**(`output`, `slotIndexCreated`, `slotIndexTarget`, `protocolParameters`): [`DecayedMana`](../interfaces/DecayedMana.md)

Applies mana decay to the output mana and calculates the potential mana that is generated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [`Output`](Output.md) | The output. |
| `slotIndexCreated` | `number` | The slot index at which the provided output was created. |
| `slotIndexTarget` | `number` | The slot index for which to calculate the mana values. |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | The ProtocolParameters. |

#### Returns

[`DecayedMana`](../interfaces/DecayedMana.md)

The decayed stored and potential mana.

___

### verifyTransactionSyntax

▸ `Static` **verifyTransactionSyntax**(`transaction`, `protocolParameters`): `void`

Verifies the syntax of a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`SignedTransactionPayload`](SignedTransactionPayload.md) | The transaction payload. |
| `protocolParameters` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) | The protocol parameters used for the validation. |

#### Returns

`void`

void.

___

### blockBytes

▸ `Static` **blockBytes**(`block`): `Uint8Array`

Returns the serialized bytes of a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | [`Block`](Block.md) | The block. |

#### Returns

`Uint8Array`

The block bytes.
