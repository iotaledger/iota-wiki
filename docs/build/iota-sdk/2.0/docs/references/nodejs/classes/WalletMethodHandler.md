# Class: WalletMethodHandler

## Table of contents

### Constructors

- [constructor](WalletMethodHandler.md#constructor)

### Properties

- [methodHandler](WalletMethodHandler.md#methodhandler)

### Methods

- [create](WalletMethodHandler.md#create)
- [callMethod](WalletMethodHandler.md#callmethod)
- [listen](WalletMethodHandler.md#listen)
- [destroy](WalletMethodHandler.md#destroy)
- [getClient](WalletMethodHandler.md#getclient)
- [getSecretManager](WalletMethodHandler.md#getsecretmanager)

## Constructors

### constructor

• **new WalletMethodHandler**(`methodHandler`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodHandler` | `any` | The Rust method handler created in `WalletMethodHandler.create()`. |

## Properties

### methodHandler

• **methodHandler**: `any`

## Methods

### create

▸ `Static` **create**(`options`): `Promise`\<[`WalletMethodHandler`](WalletMethodHandler.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WalletOptions`](../interfaces/WalletOptions.md) | The wallet options. |

#### Returns

`Promise`\<[`WalletMethodHandler`](WalletMethodHandler.md)\>

___

### callMethod

▸ **callMethod**(`method`): `Promise`\<`string`\>

Call a wallet method on the Rust backend.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | [`__WalletMethod__`](../api_ref.md#__walletmethod__) | The wallet method to call. |

#### Returns

`Promise`\<`string`\>

A promise that resolves to a JSON string response holding the result of the wallet method.

___

### listen

▸ **listen**(`eventTypes`, `callback`): `Promise`\<`void`\>

Listen to wallet events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventTypes` | [`WalletEventType`](../enums/WalletEventType.md)[] | The wallet event types to listen for. |
| `callback` | (`error`: `Error`, `event`: [`WalletEvent`](WalletEvent.md)) => `void` | The callback function to call when an event is received. |

#### Returns

`Promise`\<`void`\>

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### getClient

▸ **getClient**(): `Promise`\<[`Client`](Client.md)\>

#### Returns

`Promise`\<[`Client`](Client.md)\>

___

### getSecretManager

▸ **getSecretManager**(): `Promise`\<[`SecretManager`](SecretManager.md)\>

Get the secret manager associated with the wallet.

#### Returns

`Promise`\<[`SecretManager`](SecretManager.md)\>
