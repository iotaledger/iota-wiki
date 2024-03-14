# Class: TaggedDataPayload

A Tagged Data payload.

## Hierarchy

- [`Payload`](Payload.md)

  ↳ **`TaggedDataPayload`**

## Table of contents

### Constructors

- [constructor](TaggedDataPayload.md#constructor)

### Properties

- [type](TaggedDataPayload.md#type)
- [tag](TaggedDataPayload.md#tag)
- [data](TaggedDataPayload.md#data)

## Constructors

### constructor

• **new TaggedDataPayload**(`tag`, `data`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | A tag as hex-encoded string. |
| `data` | `string` | Index data as hex-encoded string. |

#### Overrides

[Payload](Payload.md).[constructor](Payload.md#constructor)

## Properties

### type

• `Readonly` **type**: [`PayloadType`](../enums/PayloadType.md)

The type of payload.

#### Inherited from

[Payload](Payload.md).[type](Payload.md#type)

___

### tag

• `Readonly` **tag**: `string`

The tag to use to categorize the data.

___

### data

• `Readonly` **data**: `string`

The index data.
