# Class: PreparedTransactionProgress

A 'prepared transaction' progress.

## Hierarchy

- [`TransactionProgress`](TransactionProgress.md)

  ↳ **`PreparedTransactionProgress`**

## Table of contents

### Constructors

- [constructor](PreparedTransactionProgress.md#constructor)

### Properties

- [type](PreparedTransactionProgress.md#type)
- [transaction](PreparedTransactionProgress.md#transaction)
- [inputsData](PreparedTransactionProgress.md#inputsdata)
- [remainders](PreparedTransactionProgress.md#remainders)

## Constructors

### constructor

• **new PreparedTransactionProgress**(`transaction`, `inputsData`, `remainders?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](Transaction.md) | The prepared transaction. |
| `inputsData` | [`InputSigningData`](InputSigningData.md)[] | Input signing parameters. |
| `remainders?` | [`Remainder`](Remainder.md)[] | Remainder outputs parameters. |

#### Overrides

[TransactionProgress](TransactionProgress.md).[constructor](TransactionProgress.md#constructor)

## Properties

### type

• **type**: [`TransactionProgressType`](../enums/TransactionProgressType.md)

#### Inherited from

[TransactionProgress](TransactionProgress.md).[type](TransactionProgress.md#type)

___

### transaction

• **transaction**: [`Transaction`](Transaction.md)

___

### inputsData

• **inputsData**: [`InputSigningData`](InputSigningData.md)[]

___

### remainders

• `Optional` **remainders**: [`Remainder`](Remainder.md)[]
