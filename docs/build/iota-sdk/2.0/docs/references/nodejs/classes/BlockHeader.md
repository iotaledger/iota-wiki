# Class: BlockHeader

The block header.

## Table of contents

### Constructors

- [constructor](BlockHeader.md#constructor)

### Properties

- [protocolVersion](BlockHeader.md#protocolversion)
- [networkId](BlockHeader.md#networkid)
- [issuingTime](BlockHeader.md#issuingtime)
- [slotCommitmentId](BlockHeader.md#slotcommitmentid)
- [latestFinalizedSlot](BlockHeader.md#latestfinalizedslot)
- [issuerId](BlockHeader.md#issuerid)

## Constructors

### constructor

• **new BlockHeader**(`protocolVersion`, `networkId`, `issuingTime`, `slotCommitmentId`, `latestFinalizedSlot`, `issuerId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolVersion` | `number` |
| `networkId` | `bigint` |
| `issuingTime` | `bigint` |
| `slotCommitmentId` | `string` |
| `latestFinalizedSlot` | `number` |
| `issuerId` | `string` |

## Properties

### protocolVersion

• `Readonly` **protocolVersion**: `number`

Protocol version of the block.

___

### networkId

• `Readonly` **networkId**: `bigint`

Network identifier.

___

### issuingTime

• `Readonly` **issuingTime**: `bigint`

The time at which the block was issued. It is a Unix timestamp in nanoseconds.

___

### slotCommitmentId

• `Readonly` **slotCommitmentId**: `string`

The identifier of the slot to which this block commits.

___

### latestFinalizedSlot

• `Readonly` **latestFinalizedSlot**: `number`

The slot index of the latest finalized slot.

___

### issuerId

• `Readonly` **issuerId**: `string`

The identifier of the account that issued this block.
