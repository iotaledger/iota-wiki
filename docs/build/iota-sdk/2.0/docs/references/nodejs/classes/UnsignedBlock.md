# Class: UnsignedBlock

Represent the object that nodes gossip around the network.

## Table of contents

### Constructors

- [constructor](UnsignedBlock.md#constructor)

### Properties

- [protocolVersion](UnsignedBlock.md#protocolversion)
- [networkId](UnsignedBlock.md#networkid)
- [issuingTime](UnsignedBlock.md#issuingtime)
- [slotCommitmentId](UnsignedBlock.md#slotcommitmentid)
- [latestFinalizedSlot](UnsignedBlock.md#latestfinalizedslot)
- [issuerId](UnsignedBlock.md#issuerid)
- [body](UnsignedBlock.md#body)

### Methods

- [isBasic](UnsignedBlock.md#isbasic)
- [asBasic](UnsignedBlock.md#asbasic)
- [isValidation](UnsignedBlock.md#isvalidation)
- [asValidation](UnsignedBlock.md#asvalidation)

## Constructors

### constructor

• **new UnsignedBlock**(`protocolVersion`, `networkId`, `issuingTime`, `slotCommitmentId`, `latestFinalizedSlot`, `issuerId`, `body`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolVersion` | `number` |
| `networkId` | `bigint` |
| `issuingTime` | `bigint` |
| `slotCommitmentId` | `string` |
| `latestFinalizedSlot` | `number` |
| `issuerId` | `string` |
| `body` | [`BlockBody`](BlockBody.md) |

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

___

### body

• `Readonly` **body**: [`BlockBody`](BlockBody.md)

## Methods

### isBasic

▸ **isBasic**(): `boolean`

Checks whether the block body is a `BasicBlockBody`.

#### Returns

`boolean`

true if it is, otherwise false

___

### asBasic

▸ **asBasic**(): [`BasicBlockBody`](BasicBlockBody.md)

Gets the block body as an actual `BasicBlock`.
NOTE: Will throw an error if the block body is not a `BasicBlockBody`.

#### Returns

[`BasicBlockBody`](BasicBlockBody.md)

The BasicBlockBody

___

### isValidation

▸ **isValidation**(): `boolean`

Checks whether the block body is a `ValidationBlockBody`.

#### Returns

`boolean`

true if it is, otherwise false

___

### asValidation

▸ **asValidation**(): [`ValidationBlockBody`](ValidationBlockBody.md)

Gets the block body as an actual `ValidationBlockBody`.
NOTE: Will throw an error if the block body is not a `ValidationBlockBody`.

#### Returns

[`ValidationBlockBody`](ValidationBlockBody.md)

The ValidationBlockBody
