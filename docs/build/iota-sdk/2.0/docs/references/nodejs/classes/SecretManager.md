# Class: SecretManager

The SecretManager to interact with nodes.

## Table of contents

### Constructors

- [constructor](SecretManager.md#constructor)

### Methods

- [create](SecretManager.md#create)
- [generateEd25519Addresses](SecretManager.md#generateed25519addresses)
- [generateEvmAddresses](SecretManager.md#generateevmaddresses)
- [storeMnemonic](SecretManager.md#storemnemonic)
- [signTransaction](SecretManager.md#signtransaction)
- [signBlock](SecretManager.md#signblock)
- [signatureUnlock](SecretManager.md#signatureunlock)
- [signEd25519](SecretManager.md#signed25519)
- [signSecp256k1Ecdsa](SecretManager.md#signsecp256k1ecdsa)
- [getLedgerNanoStatus](SecretManager.md#getledgernanostatus)
- [setStrongholdPassword](SecretManager.md#setstrongholdpassword)
- [changeStrongholdPassword](SecretManager.md#changestrongholdpassword)
- [clearStrongholdPassword](SecretManager.md#clearstrongholdpassword)

## Constructors

### constructor

• **new SecretManager**(`methodHandler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodHandler` | [`SecretManagerMethodHandler`](SecretManagerMethodHandler.md) |

## Methods

### create

▸ `Static` **create**(`options`): [`SecretManager`](SecretManager.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SecretManagerType`](../api_ref.md#secretmanagertype) | The secret manager options. |

#### Returns

[`SecretManager`](SecretManager.md)

___

### generateEd25519Addresses

▸ **generateEd25519Addresses**(`generateAddressesOptions`): `Promise`\<`string`[]\>

Generate Ed25519 addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generateAddressesOptions` | [`IGenerateAddressesOptions`](../interfaces/IGenerateAddressesOptions.md) | Options to generate addresses. |

#### Returns

`Promise`\<`string`[]\>

An array of generated addresses.

___

### generateEvmAddresses

▸ **generateEvmAddresses**(`generateAddressesOptions`): `Promise`\<`string`[]\>

Generate EVM addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generateAddressesOptions` | [`IGenerateAddressesOptions`](../interfaces/IGenerateAddressesOptions.md) | Options to generate addresses. |

#### Returns

`Promise`\<`string`[]\>

An array of generated addresses.

___

### storeMnemonic

▸ **storeMnemonic**(`mnemonic`): `Promise`\<`void`\>

Store a mnemonic in the Stronghold vault.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | The mnemonic to store. |

#### Returns

`Promise`\<`void`\>

___

### signTransaction

▸ **signTransaction**(`preparedTransactionData`): `Promise`\<[`SignedTransactionPayload`](SignedTransactionPayload.md)\>

Sign a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedTransactionData` | [`PreparedTransactionData`](PreparedTransactionData.md) | An instance of `PreparedTransactionData`. |

#### Returns

`Promise`\<[`SignedTransactionPayload`](SignedTransactionPayload.md)\>

The corresponding transaction payload.

___

### signBlock

▸ **signBlock**(`unsignedBlock`, `chain`): `Promise`\<[`Block`](Block.md)\>

Sign a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unsignedBlock` | [`UnsignedBlock`](UnsignedBlock.md) | An unsigned block. |
| `chain` | [`Bip44`](../interfaces/Bip44.md) | A BIP44 chain. |

#### Returns

`Promise`\<[`Block`](Block.md)\>

The signed block.

___

### signatureUnlock

▸ **signatureUnlock**(`transactionSigningHash`, `chain`): `Promise`\<[`Unlock`](Unlock.md)\>

Create a signature unlock using the provided `secretManager`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionSigningHash` | `string` | The signing hash of the transaction. |
| `chain` | [`Bip44`](../interfaces/Bip44.md) | A BIP44 chain. |

#### Returns

`Promise`\<[`Unlock`](Unlock.md)\>

The corresponding unlock.

___

### signEd25519

▸ **signEd25519**(`message`, `chain`): `Promise`\<[`Ed25519Signature`](Ed25519Signature.md)\>

Signs a message with an Ed25519 private key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to sign. |
| `chain` | [`Bip44`](../interfaces/Bip44.md) | A BIP44 chain. |

#### Returns

`Promise`\<[`Ed25519Signature`](Ed25519Signature.md)\>

The corresponding signature.

___

### signSecp256k1Ecdsa

▸ **signSecp256k1Ecdsa**(`message`, `chain`): `Promise`\<[`Secp256k1EcdsaSignature`](../interfaces/Secp256k1EcdsaSignature.md)\>

Signs a message with an Secp256k1Ecdsa private key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to sign. |
| `chain` | [`Bip44`](../interfaces/Bip44.md) | A BIP44 chain. |

#### Returns

`Promise`\<[`Secp256k1EcdsaSignature`](../interfaces/Secp256k1EcdsaSignature.md)\>

The corresponding signature.

___

### getLedgerNanoStatus

▸ **getLedgerNanoStatus**(): `Promise`\<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

Get the status of a Ledger Nano.

#### Returns

`Promise`\<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

___

### setStrongholdPassword

▸ **setStrongholdPassword**(`password`): `Promise`\<`void`\>

Set the Stronghold password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<`void`\>

___

### changeStrongholdPassword

▸ **changeStrongholdPassword**(`password`): `Promise`\<`void`\>

Change the Stronghold password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<`void`\>

___

### clearStrongholdPassword

▸ **clearStrongholdPassword**(): `Promise`\<`void`\>

Clear the Stronghold password.

#### Returns

`Promise`\<`void`\>
