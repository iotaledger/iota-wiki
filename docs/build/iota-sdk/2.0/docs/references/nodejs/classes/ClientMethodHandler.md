# Class: ClientMethodHandler

The MethodHandler which sends the commands to the Rust side.

## Table of contents

### Constructors

- [constructor](ClientMethodHandler.md#constructor)

### Properties

- [methodHandler](ClientMethodHandler.md#methodhandler)

### Methods

- [create](ClientMethodHandler.md#create)
- [destroy](ClientMethodHandler.md#destroy)
- [callMethod](ClientMethodHandler.md#callmethod)
- [listenMqtt](ClientMethodHandler.md#listenmqtt)

## Constructors

### constructor

• **new ClientMethodHandler**(`methodHandler`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodHandler` | `any` | The Rust method handler created in `ClientMethodHandler.create()`. |

## Properties

### methodHandler

• **methodHandler**: `any`

## Methods

### create

▸ `Static` **create**(`options`): `Promise`\<[`ClientMethodHandler`](ClientMethodHandler.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IClientOptions`](../interfaces/IClientOptions.md) | The client options. |

#### Returns

`Promise`\<[`ClientMethodHandler`](ClientMethodHandler.md)\>

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### callMethod

▸ **callMethod**(`method`): `Promise`\<`string`\>

Call a client method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | [`__ClientMethods__`](../api_ref.md#__clientmethods__) | The client method. |

#### Returns

`Promise`\<`string`\>

A promise that resolves to a JSON string response holding the result of the client method.

___

### listenMqtt

▸ **listenMqtt**(`topics`, `callback`): `Promise`\<`void`\>

Listen to MQTT events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topics` | `string`[] | The topics to listen to. |
| `callback` | (`error`: `Error`, `result`: `string`) => `void` | The callback to be called when an MQTT event is received. |

#### Returns

`Promise`\<`void`\>
