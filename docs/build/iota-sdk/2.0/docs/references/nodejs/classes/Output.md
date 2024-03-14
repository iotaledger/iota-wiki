# Class: Output

The base class for outputs.

## Hierarchy

- **`Output`**

  ↳ [`CommonOutput`](CommonOutput.md)

  ↳ [`DelegationOutput`](DelegationOutput.md)

## Table of contents

### Constructors

- [constructor](Output.md#constructor)

### Properties

- [amount](Output.md#amount)
- [type](Output.md#type)

### Methods

- [getAmount](Output.md#getamount)
- [parse](Output.md#parse)

## Constructors

### constructor

• **new Output**(`type`, `amount`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`OutputType`](../enums/OutputType.md) | The type of output. |
| `amount` | `string` \| `bigint` | The amount of the output as big-integer or string. |

## Properties

### amount

• `Readonly` **amount**: `string`

___

### type

• `Readonly` **type**: [`OutputType`](../enums/OutputType.md)

The type of output.

## Methods

### getAmount

▸ **getAmount**(): `bigint`

Get the amount of the output.

#### Returns

`bigint`

___

### parse

▸ `Static` **parse**(`data`): [`Output`](Output.md)

Parse an output from a plain JS JSON object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Output`](Output.md)
