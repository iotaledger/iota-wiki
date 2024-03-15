# Class: WalletEvent

The base class for wallet events.

## Hierarchy

- **`WalletEvent`**

  ↳ [`LedgerAddressGenerationWalletEvent`](LedgerAddressGenerationWalletEvent.md)

  ↳ [`NewOutputWalletEvent`](NewOutputWalletEvent.md)

  ↳ [`SpentOutputWalletEvent`](SpentOutputWalletEvent.md)

  ↳ [`TransactionInclusionWalletEvent`](TransactionInclusionWalletEvent.md)

  ↳ [`TransactionProgressWalletEvent`](TransactionProgressWalletEvent.md)

## Table of contents

### Constructors

- [constructor](WalletEvent.md#constructor)

### Properties

- [type](WalletEvent.md#type)

## Constructors

### constructor

• **new WalletEvent**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`WalletEventType`](../enums/WalletEventType.md) | The type of wallet event. |

## Properties

### type

• **type**: [`WalletEventType`](../enums/WalletEventType.md)
