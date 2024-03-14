# Class: WalletError

## Hierarchy

- [`ErrorBase`](ErrorBase.md)\<[`WalletErrorName`](../api_ref.md#walleterrorname)\>

  ↳ **`WalletError`**

## Table of contents

### Constructors

- [constructor](WalletError.md#constructor)

### Properties

- [name](WalletError.md#name)
- [message](WalletError.md#message)
- [cause](WalletError.md#cause)
- [prepareStackTrace](WalletError.md#preparestacktrace)
- [stackTraceLimit](WalletError.md#stacktracelimit)
- [stack](WalletError.md#stack)

### Methods

- [captureStackTrace](WalletError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletError**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | [`WalletErrorName`](../api_ref.md#walleterrorname) |
| › `message` | `string` |
| › `cause?` | `any` |

#### Inherited from

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

## Properties

### name

• **name**: [`WalletErrorName`](../api_ref.md#walleterrorname)

#### Inherited from

[ErrorBase](ErrorBase.md).[name](ErrorBase.md#name)

___

### message

• **message**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[message](ErrorBase.md#message)

___

### cause

• `Optional` **cause**: `any`

#### Inherited from

[ErrorBase](ErrorBase.md).[cause](ErrorBase.md#cause)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[ErrorBase](ErrorBase.md).[prepareStackTrace](ErrorBase.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ErrorBase](ErrorBase.md).[stackTraceLimit](ErrorBase.md#stacktracelimit)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ErrorBase](ErrorBase.md).[stack](ErrorBase.md#stack)

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[ErrorBase](ErrorBase.md).[captureStackTrace](ErrorBase.md#capturestacktrace)
