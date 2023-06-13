# Class: SecretManager

The SecretManager to interact with nodes.

## Table of contents

### Methods

- [generateEd25519Addresses](SecretManager.md#generateed25519addresses)
- [generateEvmAddresses](SecretManager.md#generateevmaddresses)
- [storeMnemonic](SecretManager.md#storemnemonic)
- [signTransaction](SecretManager.md#signtransaction)
- [signatureUnlock](SecretManager.md#signatureunlock)
- [signEd25519](SecretManager.md#signed25519)
- [getLedgerNanoStatus](SecretManager.md#getledgernanostatus)

## Methods

### generateEd25519Addresses

▸ **generateEd25519Addresses**(`generateAddressesOptions`): `Promise`<`string`[]\>

Generate ed25519 addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `generateAddressesOptions` | [`IGenerateAddressesOptions`](../interfaces/IGenerateAddressesOptions.md) |

#### Returns

`Promise`<`string`[]\>

___

### generateEvmAddresses

▸ **generateEvmAddresses**(`generateAddressesOptions`): `Promise`<`string`[]\>

Generate EVM addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `generateAddressesOptions` | [`IGenerateAddressesOptions`](../interfaces/IGenerateAddressesOptions.md) |

#### Returns

`Promise`<`string`[]\>

___

### storeMnemonic

▸ **storeMnemonic**(`mnemonic`): `Promise`<`void`\>

Store a mnemonic in the Stronghold vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`Promise`<`void`\>

___

### signTransaction

▸ **signTransaction**(`preparedTransactionData`): `Promise`<`PayloadTypes`\>

Sign a transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `preparedTransactionData` | [`IPreparedTransactionData`](../interfaces/IPreparedTransactionData.md) |

#### Returns

`Promise`<`PayloadTypes`\>

___

### signatureUnlock

▸ **signatureUnlock**(`transactionEssenceHash`, `chain`): `Promise`<`UnlockTypes`\>

Create a signature unlock using the provided `secretManager`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionEssenceHash` | `string` |
| `chain` | [`IBip32Chain`](../api_ref.md#ibip32chain) |

#### Returns

`Promise`<`UnlockTypes`\>

___

### signEd25519

▸ **signEd25519**(`message`, `chain`): `Promise`<`IEd25519Signature`\>

Signs a message with an Ed25519 private key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `chain` | [`IBip32Chain`](../api_ref.md#ibip32chain) |

#### Returns

`Promise`<`IEd25519Signature`\>

___

### getLedgerNanoStatus

▸ **getLedgerNanoStatus**(): `Promise`<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

Get the status of a Ledger Nano

#### Returns

`Promise`<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>
