# Interface: VersionSignalingParameters

The version signaling parameters.

## Table of contents

### Properties

- [windowSize](VersionSignalingParameters.md#windowsize)
- [windowTargetRatio](VersionSignalingParameters.md#windowtargetratio)
- [activationOffset](VersionSignalingParameters.md#activationoffset)

## Properties

### windowSize

• **windowSize**: `number`

The size of the window in epochs to find which version of protocol parameters was most signaled, from currentEpoch - windowSize to currentEpoch.

___

### windowTargetRatio

• **windowTargetRatio**: `number`

The target number of supporters for a version to win in a windowSize.

___

### activationOffset

• **activationOffset**: `number`

The offset in epochs to activate the new version of protocol parameters.
