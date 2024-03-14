# Class: NewOutputWalletEvent

A 'new output' wallet event.

## Hierarchy

- [`WalletEvent`](WalletEvent.md)

  ↳ **`NewOutputWalletEvent`**

## Table of contents

### Constructors

- [constructor](NewOutputWalletEvent.md#constructor)

### Properties

- [type](NewOutputWalletEvent.md#type)
- [output](NewOutputWalletEvent.md#output)
- [transaction](NewOutputWalletEvent.md#transaction)
- [transactionInputs](NewOutputWalletEvent.md#transactioninputs)

## Constructors

### constructor

• **new NewOutputWalletEvent**(`output`, `transaction?`, `transactionInputs?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [`OutputData`](OutputData.md) | The new output. |
| `transaction?` | [`SignedTransactionPayload`](SignedTransactionPayload.md) | The transaction that created the output. Might be pruned and not available. |
| `transactionInputs?` | [`OutputResponse`](OutputResponse.md)[] | The inputs for the transaction that created the output. Might be pruned and not available. |

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

___

### transaction

• `Optional` **transaction**: [`SignedTransactionPayload`](SignedTransactionPayload.md)

___

### transactionInputs

• `Optional` **transactionInputs**: [`OutputResponse`](OutputResponse.md)[]
