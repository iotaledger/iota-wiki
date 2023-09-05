---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Interface: IReceiptMilestoneOption

Receipt milestone option.

## Hierarchy

- [`ITypeBase`](ITypeBase.md)<`0`\>

  ↳ **`IReceiptMilestoneOption`**

## Table of contents

### Properties

- [type](IReceiptMilestoneOption.md#type)
- [migratedAt](IReceiptMilestoneOption.md#migratedat)
- [final](IReceiptMilestoneOption.md#final)
- [funds](IReceiptMilestoneOption.md#funds)
- [transaction](IReceiptMilestoneOption.md#transaction)

## Properties

### type

• **type**: `0`

The type of the object.

#### Inherited from

[ITypeBase](ITypeBase.md).[type](ITypeBase.md#type)

---

### migratedAt

• **migratedAt**: `number`

The milestone index at which the funds were migrated in the legacy network.

---

### final

• **final**: `boolean`

Whether this Receipt is the final one for a given migrated at index.

---

### funds

• **funds**: [`IMigratedFunds`](IMigratedFunds.md)[]

The index data.

---

### transaction

• **transaction**: [`ITreasuryTransactionPayload`](ITreasuryTransactionPayload.md)

The TreasuryTransaction used to fund the funds.
