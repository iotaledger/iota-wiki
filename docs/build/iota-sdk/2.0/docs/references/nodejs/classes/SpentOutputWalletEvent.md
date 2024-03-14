# Class: SpentOutputWalletEvent

A 'spent output' wallet event.

## Hierarchy

- [`WalletEvent`](WalletEvent.md)

  ↳ **`SpentOutputWalletEvent`**

## Table of contents

### Constructors

- [constructor](SpentOutputWalletEvent.md#constructor)

### Properties

- [type](SpentOutputWalletEvent.md#type)
- [output](SpentOutputWalletEvent.md#output)

## Constructors

### constructor

• **new SpentOutputWalletEvent**(`output`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [`OutputData`](OutputData.md) | The spent output. |

#### Overrides

[WalletEvent](WalletEvent.md).[constructor](WalletEvent.md#constructor)

## Properties

### type

• **type**: [`WalletEventType`](../enums/WalletEventType.md)

#### Inherited from

[WalletEvent](WalletEvent.md).[type](WalletEvent.md#type)

___

### output

• **output**: [`OutputData`](OutputData.md)
