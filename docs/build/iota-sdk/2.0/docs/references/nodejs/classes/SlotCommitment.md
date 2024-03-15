# Class: SlotCommitment

Contains a summary of a slot.
It is linked to the commitment of the previous slot, which forms a commitment chain.

## Table of contents

### Constructors

- [constructor](SlotCommitment.md#constructor)

### Properties

- [protocolVersion](SlotCommitment.md#protocolversion)
- [slot](SlotCommitment.md#slot)
- [previousCommitmentId](SlotCommitment.md#previouscommitmentid)
- [rootsId](SlotCommitment.md#rootsid)
- [cumulativeWeight](SlotCommitment.md#cumulativeweight)
- [referenceManaCost](SlotCommitment.md#referencemanacost)

## Constructors

### constructor

• **new SlotCommitment**(`protocolVersion`, `slot`, `previousCommitmentId`, `rootsId`, `cumulativeWeight`, `referenceManaCost`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolVersion` | `number` |
| `slot` | `number` |
| `previousCommitmentId` | `string` |
| `rootsId` | `string` |
| `cumulativeWeight` | `bigint` |
| `referenceManaCost` | `bigint` |

## Properties

### protocolVersion

• `Readonly` **protocolVersion**: `number`

The version of the protocol running.

___

### slot

• `Readonly` **slot**: `number`

The slot index of this commitment.
It is calculated based on genesis timestamp and the duration of a slot.

___

### previousCommitmentId

• `Readonly` **previousCommitmentId**: `string`

The commitment ID of the previous slot.

___

### rootsId

• `Readonly` **rootsId**: `string`

A BLAKE2b-256 hash of concatenating multiple sparse merkle tree roots of a slot.

___

### cumulativeWeight

• `Readonly` **cumulativeWeight**: `bigint`

The sum of previous slot commitment cumulative weight and weight of issuers of accepted blocks within this
slot. It is just an indication of "committed into" this slot, and can not strictly be used for evaluating
the switching of a chain.

___

### referenceManaCost

• `Readonly` **referenceManaCost**: `bigint`

Reference Mana Cost (RMC) to be used in the slot with index at `index + Max Committable Age`.
