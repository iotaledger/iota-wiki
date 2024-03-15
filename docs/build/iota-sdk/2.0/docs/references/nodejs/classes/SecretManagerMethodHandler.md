# Class: SecretManagerMethodHandler

The MethodHandler which sends the commands to the Rust backend.

## Table of contents

### Constructors

- [constructor](SecretManagerMethodHandler.md#constructor)

### Properties

- [methodHandler](SecretManagerMethodHandler.md#methodhandler)

### Methods

- [create](SecretManagerMethodHandler.md#create)
- [callMethod](SecretManagerMethodHandler.md#callmethod)

## Constructors

### constructor

• **new SecretManagerMethodHandler**(`methodHandler`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodHandler` | `any` | The Rust method handler created in `SecretManagerMethodHandler.create()`. |

## Properties

### methodHandler

• **methodHandler**: `any`

## Methods

### create

▸ `Static` **create**(`options`): [`SecretManagerMethodHandler`](SecretManagerMethodHandler.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SecretManagerType`](../api_ref.md#secretmanagertype) | A secret manager type or a secret manager method handler. |

#### Returns

[`SecretManagerMethodHandler`](SecretManagerMethodHandler.md)

___

### callMethod

▸ **callMethod**(`method`): `Promise`\<`string`\>

Call a secret manager method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | [`__SecretManagerMethods__`](../api_ref.md#__secretmanagermethods__) | One of the supported secret manager methods. |

#### Returns

`Promise`\<`string`\>

The JSON response of the method.
