# Class: TransactionProgress

The base class for transaction progresses.

## Hierarchy

- **`TransactionProgress`**

  ↳ [`SelectingInputsProgress`](SelectingInputsProgress.md)

  ↳ [`GeneratingRemainderDepositAddressProgress`](GeneratingRemainderDepositAddressProgress.md)

  ↳ [`PreparedTransactionProgress`](PreparedTransactionProgress.md)

  ↳ [`PreparedTransactionSigningHashProgress`](PreparedTransactionSigningHashProgress.md)

  ↳ [`SigningTransactionProgress`](SigningTransactionProgress.md)

  ↳ [`BroadcastingProgress`](BroadcastingProgress.md)

## Table of contents

### Constructors

- [constructor](TransactionProgress.md#constructor)

### Properties

- [type](TransactionProgress.md#type)

## Constructors

### constructor

• **new TransactionProgress**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`TransactionProgressType`](../enums/TransactionProgressType.md) | The type of transaction progress. |

## Properties

### type

• **type**: [`TransactionProgressType`](../enums/TransactionProgressType.md)
