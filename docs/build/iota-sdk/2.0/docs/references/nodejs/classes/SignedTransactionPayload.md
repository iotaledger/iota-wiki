# Class: SignedTransactionPayload

Signed transaction payload.

## Hierarchy

- [`Payload`](Payload.md)

  ↳ **`SignedTransactionPayload`**

## Table of contents

### Constructors

- [constructor](SignedTransactionPayload.md#constructor)

### Properties

- [type](SignedTransactionPayload.md#type)
- [transaction](SignedTransactionPayload.md#transaction)
- [unlocks](SignedTransactionPayload.md#unlocks)

## Constructors

### constructor

• **new SignedTransactionPayload**(`transaction`, `unlocks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](Transaction.md) | The transaction. |
| `unlocks` | [`Unlock`](Unlock.md)[] | The unlocks of the transaction. |

#### Overrides

[Payload](Payload.md).[constructor](Payload.md#constructor)

## Properties

### type

• `Readonly` **type**: [`PayloadType`](../enums/PayloadType.md)

The type of payload.

#### Inherited from

[Payload](Payload.md).[type](Payload.md#type)

___

### transaction

• `Readonly` **transaction**: [`Transaction`](Transaction.md)

The transaction.

___

### unlocks

• `Readonly` **unlocks**: [`Unlock`](Unlock.md)[]

The unlocks.
