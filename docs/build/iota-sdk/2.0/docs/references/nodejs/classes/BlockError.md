# Class: BlockError

## Hierarchy

- [`ErrorBase`](ErrorBase.md)\<``"block"``\>

  ↳ **`BlockError`**

## Table of contents

### Constructors

- [constructor](BlockError.md#constructor)

### Properties

- [name](BlockError.md#name)
- [message](BlockError.md#message)
- [cause](BlockError.md#cause)
- [prepareStackTrace](BlockError.md#preparestacktrace)
- [stackTraceLimit](BlockError.md#stacktracelimit)
- [stack](BlockError.md#stack)

### Methods

- [captureStackTrace](BlockError.md#capturestacktrace)

## Constructors

### constructor

• **new BlockError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

[ErrorBase](ErrorBase.md).[constructor](ErrorBase.md#constructor)

## Properties

### name

• **name**: ``"block"``

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
