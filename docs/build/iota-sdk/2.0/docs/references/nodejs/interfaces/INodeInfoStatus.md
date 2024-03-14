# Interface: INodeInfoStatus

Response from the /info endpoint.

## Table of contents

### Properties

- [isHealthy](INodeInfoStatus.md#ishealthy)
- [acceptedTangleTime](INodeInfoStatus.md#acceptedtangletime)
- [relativeAcceptedTangleTime](INodeInfoStatus.md#relativeacceptedtangletime)
- [confirmedTangleTime](INodeInfoStatus.md#confirmedtangletime)
- [relativeConfirmedTangleTime](INodeInfoStatus.md#relativeconfirmedtangletime)
- [latestCommitmentId](INodeInfoStatus.md#latestcommitmentid)
- [latestFinalizedSlot](INodeInfoStatus.md#latestfinalizedslot)
- [latestAcceptedBlockSlot](INodeInfoStatus.md#latestacceptedblockslot)
- [latestConfirmedBlockSlot](INodeInfoStatus.md#latestconfirmedblockslot)
- [pruningEpoch](INodeInfoStatus.md#pruningepoch)

## Properties

### isHealthy

• **isHealthy**: `boolean`

Tells whether the node is healthy or not.

___

### acceptedTangleTime

• `Optional` **acceptedTangleTime**: `string`

A notion of time that is anchored to the latest accepted block.

___

### relativeAcceptedTangleTime

• `Optional` **relativeAcceptedTangleTime**: `string`

The Accepted Tangle Time after it has advanced with the system clock.

___

### confirmedTangleTime

• `Optional` **confirmedTangleTime**: `string`

A notion of time that is anchored to the latest confirmed block.

___

### relativeConfirmedTangleTime

• `Optional` **relativeConfirmedTangleTime**: `string`

The Confirmed Tangle Time after it has advanced with the system clock.

___

### latestCommitmentId

• **latestCommitmentId**: `string`

The latest slot that the node has committed to.

___

### latestFinalizedSlot

• **latestFinalizedSlot**: `number`

The index of latest finalized slot.

___

### latestAcceptedBlockSlot

• `Optional` **latestAcceptedBlockSlot**: `number`

The slot index of the latest accepted block.

___

### latestConfirmedBlockSlot

• `Optional` **latestConfirmedBlockSlot**: `number`

The slot index of the latest confirmed block.

___

### pruningEpoch

• **pruningEpoch**: `number`

The index of the epoch before which the tangle history is pruned.
