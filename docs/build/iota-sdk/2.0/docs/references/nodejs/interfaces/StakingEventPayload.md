# Interface: StakingEventPayload

A staking event payload.

## Table of contents

### Properties

- [type](StakingEventPayload.md#type)
- [text](StakingEventPayload.md#text)
- [symbol](StakingEventPayload.md#symbol)
- [numerator](StakingEventPayload.md#numerator)
- [denominator](StakingEventPayload.md#denominator)
- [requiredMinimumRewards](StakingEventPayload.md#requiredminimumrewards)
- [additionalInfo](StakingEventPayload.md#additionalinfo)

## Properties

### type

• **type**: [`Staking`](../enums/ParticipationEventType.md#staking)

The type of the event (statking).

___

### text

• **text**: `string`

The description text of the staking event.

___

### symbol

• **symbol**: `string`

The symbol of the rewarded tokens.

___

### numerator

• **numerator**: `string`

Used in combination with Denominator to calculate the rewards per milestone per staked tokens.

___

### denominator

• **denominator**: `string`

Used in combination with Numerator to calculate the rewards per milestone per staked tokens.

___

### requiredMinimumRewards

• **requiredMinimumRewards**: `string`

The minimum rewards required to be included in the staking results.

___

### additionalInfo

• **additionalInfo**: `string`

Additional description text about the staking event.
