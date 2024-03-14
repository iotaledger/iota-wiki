# Interface: CongestionControlParameters

Congestion Control Parameters defines the parameters used to calculate the Reference Mana Cost (RMC).

## Table of contents

### Properties

- [minReferenceManaCost](CongestionControlParameters.md#minreferencemanacost)
- [increase](CongestionControlParameters.md#increase)
- [decrease](CongestionControlParameters.md#decrease)
- [increaseThreshold](CongestionControlParameters.md#increasethreshold)
- [decreaseThreshold](CongestionControlParameters.md#decreasethreshold)
- [schedulerRate](CongestionControlParameters.md#schedulerrate)
- [maxBufferSize](CongestionControlParameters.md#maxbuffersize)
- [maxValidationBufferSize](CongestionControlParameters.md#maxvalidationbuffersize)

## Properties

### minReferenceManaCost

• **minReferenceManaCost**: `bigint`

The minimum value of the reference Mana cost.

___

### increase

• **increase**: `bigint`

The increase step size of the reference Mana cost.

___

### decrease

• **decrease**: `bigint`

The decrease step size of the reference Mana cost.

___

### increaseThreshold

• **increaseThreshold**: `number`

The threshold for increasing the reference Mana cost.

___

### decreaseThreshold

• **decreaseThreshold**: `number`

The threshold for decreasing the reference Mana cost.

___

### schedulerRate

• **schedulerRate**: `number`

The rate at which the scheduler runs in workscore units per second.

___

### maxBufferSize

• **maxBufferSize**: `number`

The maximum size of the buffer.

___

### maxValidationBufferSize

• **maxValidationBufferSize**: `number`

The maximum number of blocks in the validation buffer.
