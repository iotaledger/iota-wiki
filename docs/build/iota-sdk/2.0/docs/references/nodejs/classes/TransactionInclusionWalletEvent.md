# Class: TransactionInclusionWalletEvent

A 'transaction inclusion' wallet event.

## Hierarchy

- [`WalletEvent`](WalletEvent.md)

  ↳ **`TransactionInclusionWalletEvent`**

## Table of contents

### Constructors

- [constructor](TransactionInclusionWalletEvent.md#constructor)

### Properties

- [type](TransactionInclusionWalletEvent.md#type)
- [transactionId](TransactionInclusionWalletEvent.md#transactionid)
- [inclusionState](TransactionInclusionWalletEvent.md#inclusionstate)

## Constructors

### constructor

• **new TransactionInclusionWalletEvent**(`transactionId`, `inclusionState`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The transaction ID. |
| `inclusionState` | [`InclusionState`](../enums/InclusionState.md) | The inclusion state of the transaction. |

#### Overrides

[WalletEvent](WalletEvent.md).[constructor](WalletEvent.md#constructor)

## Properties

### type

• **type**: [`WalletEventType`](../enums/WalletEventType.md)

#### Inherited from

[WalletEvent](WalletEvent.md).[type](WalletEvent.md#type)

___

### transactionId

• **transactionId**: `string`

___

### inclusionState

• **inclusionState**: [`InclusionState`](../enums/InclusionState.md)
