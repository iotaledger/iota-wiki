# Class: ErrorBase\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Hierarchy

- `Error`

  ↳ **`ErrorBase`**

  ↳↳ [`ClientError`](ClientError.md)

  ↳↳ [`WalletError`](WalletError.md)

  ↳↳ [`BlockError`](BlockError.md)

  ↳↳ [`PrefixHexError`](PrefixHexError.md)

  ↳↳ [`SerdeJsonError`](SerdeJsonError.md)

  ↳↳ [`UnpackError`](UnpackError.md)

## Table of contents

### Constructors

- [constructor](ErrorBase.md#constructor)

### Properties

- [name](ErrorBase.md#name)
- [message](ErrorBase.md#message)
- [cause](ErrorBase.md#cause)
- [prepareStackTrace](ErrorBase.md#preparestacktrace)
- [stackTraceLimit](ErrorBase.md#stacktracelimit)
- [stack](ErrorBase.md#stack)

### Methods

- [captureStackTrace](ErrorBase.md#capturestacktrace)

## Constructors

### constructor

• **new ErrorBase**\<`T`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `T` |
| › `message` | `string` |
| › `cause?` | `any` |

#### Overrides

Error.constructor

## Properties

### name

• **name**: `T`

#### Overrides

Error.name

___

### message

• **message**: `string`

#### Overrides

Error.message

___

### cause

• `Optional` **cause**: `any`

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

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.captureStackTrace
