# Interface: TrackedParticipationOverview

Holds the information for each tracked participation.

## Table of contents

### Properties

- [amount](TrackedParticipationOverview.md#amount)
- [answers](TrackedParticipationOverview.md#answers)
- [blockId](TrackedParticipationOverview.md#blockid)
- [endMilestoneIndex](TrackedParticipationOverview.md#endmilestoneindex)
- [startMilestoneIndex](TrackedParticipationOverview.md#startmilestoneindex)

## Properties

### amount

• **amount**: `string`

Amount of tokens that were included in the output the participation was made.

___

### answers

• **answers**: `number`[]

IDs of the answers to the questions of a ballot, in the same order.

___

### blockId

• **blockId**: `string`

ID of the block that included the transaction that created the output the participation was made.

___

### endMilestoneIndex

• **endMilestoneIndex**: `number`

Milestone index the participation ended. 0 if the participation is still active.

___

### startMilestoneIndex

• **startMilestoneIndex**: `number`

Milestone index the participation started.
