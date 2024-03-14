# Interface: ParticipationEventStatus

The participation event status.

## Table of contents

### Properties

- [milestoneIndex](ParticipationEventStatus.md#milestoneindex)
- [status](ParticipationEventStatus.md#status)
- [questions](ParticipationEventStatus.md#questions)
- [checksum](ParticipationEventStatus.md#checksum)

## Properties

### milestoneIndex

• **milestoneIndex**: `number`

The milestone index the status was calculated for.

___

### status

• **status**: [`EventStatus`](../enums/EventStatus.md)

The overall status of the event.

___

### questions

• `Optional` **questions**: [`QuestionStatus`](QuestionStatus.md)[]

The answer status of the different questions of the event.

___

### checksum

• **checksum**: `string`

Checksum is the SHA256 checksum of all the question and answer status or the staking amount and rewards calculated for this milestone index.
