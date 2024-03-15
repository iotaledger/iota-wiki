# Class: TransactionProgressWalletEvent

A 'transaction progress' wallet event.

## Hierarchy

- [`WalletEvent`](WalletEvent.md)

  ↳ **`TransactionProgressWalletEvent`**

## Table of contents

### Constructors

- [constructor](TransactionProgressWalletEvent.md#constructor)

### Properties

- [type](TransactionProgressWalletEvent.md#type)
- [progress](TransactionProgressWalletEvent.md#progress)

## Constructors

### constructor

• **new TransactionProgressWalletEvent**(`progress`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `progress` | [`TransactionProgress`](TransactionProgress.md) | The progress of the transaction. |

#### Overrides

[WalletEvent](WalletEvent.md).[constructor](WalletEvent.md#constructor)

## Properties

### type

• **type**: [`WalletEventType`](../enums/WalletEventType.md)

#### Inherited from

[WalletEvent](WalletEvent.md).[type](WalletEvent.md#type)

___

### progress

• **progress**: [`TransactionProgress`](TransactionProgress.md)
