# Class: UTXOInput

A UTXO transaction input.

## Hierarchy

- [`Input`](Input.md)

  ↳ **`UTXOInput`**

## Table of contents

### Constructors

- [constructor](UTXOInput.md#constructor)

### Properties

- [type](UTXOInput.md#type)
- [transactionId](UTXOInput.md#transactionid)
- [transactionOutputIndex](UTXOInput.md#transactionoutputindex)

### Methods

- [fromOutputId](UTXOInput.md#fromoutputid)

## Constructors

### constructor

• **new UTXOInput**(`transactionId`, `transactionOutputIndex`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction it is an input of. |
| `transactionOutputIndex` | `number` | The index of the input within the transaction. |

#### Overrides

[Input](Input.md).[constructor](Input.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UTXO`](../enums/InputType.md#utxo)

#### Inherited from

[Input](Input.md).[type](Input.md#type)

___

### transactionId

• `Readonly` **transactionId**: `string`

The transaction ID.

___

### transactionOutputIndex

• `Readonly` **transactionOutputIndex**: `number`

The output index.

## Methods

### fromOutputId

▸ `Static` **fromOutputId**(`outputId`): [`UTXOInput`](UTXOInput.md)

Create a `UTXOInput` from a given output ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputId` | `string` |

#### Returns

[`UTXOInput`](UTXOInput.md)
