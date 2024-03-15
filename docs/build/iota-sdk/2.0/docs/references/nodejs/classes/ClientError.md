# Class: ClientError

## Hierarchy

- [`ErrorBase`](ErrorBase.md)\<[`ClientErrorName`](../api_ref.md#clienterrorname)\>

  ↳ **`ClientError`**

## Table of contents

### Constructors

- [constructor](ClientError.md#constructor)

### Properties

- [name](ClientError.md#name)
- [message](ClientError.md#message)
- [cause](ClientError.md#cause)
- [prepareStackTrace](ClientError.md#preparestacktrace)
- [stackTraceLimit](ClientError.md#stacktracelimit)
- [stack](ClientError.md#stack)

### Methods

- [captureStackTrace](ClientError.md#capturestacktrace)

## Constructors

### constructor

• **new ClientError**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | [`ClientErrorName`](../api_ref.md#clienterrorname) |
| › `message` | `string` |
| › `cause?` | `any` |

#### Inherited from

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

## Properties

### name

• **name**: [`ClientErrorName`](../api_ref.md#clienterrorname)

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
