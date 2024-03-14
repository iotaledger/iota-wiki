# Class: UnpackError

## Hierarchy

- [`ErrorBase`](ErrorBase.md)\<``"unpack"``\>

  ↳ **`UnpackError`**

## Table of contents

### Constructors

- [constructor](UnpackError.md#constructor)

### Properties

- [name](UnpackError.md#name)
- [message](UnpackError.md#message)
- [cause](UnpackError.md#cause)
- [prepareStackTrace](UnpackError.md#preparestacktrace)
- [stackTraceLimit](UnpackError.md#stacktracelimit)
- [stack](UnpackError.md#stack)

### Methods

- [captureStackTrace](UnpackError.md#capturestacktrace)

## Constructors

### constructor

• **new UnpackError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

## Properties

### name

• **name**: ``"unpack"``

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
