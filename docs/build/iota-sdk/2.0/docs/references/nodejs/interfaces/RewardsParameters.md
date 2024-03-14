# Interface: RewardsParameters

Rewards Parameters defines the parameters that are used to calculate Mana rewards.

## Table of contents

### Properties

- [profitMarginExponent](RewardsParameters.md#profitmarginexponent)
- [bootstrappingDuration](RewardsParameters.md#bootstrappingduration)
- [rewardToGenerationRatio](RewardsParameters.md#rewardtogenerationratio)
- [initialTargetRewardsRate](RewardsParameters.md#initialtargetrewardsrate)
- [finalTargetRewardsRate](RewardsParameters.md#finaltargetrewardsrate)
- [poolCoefficientExponent](RewardsParameters.md#poolcoefficientexponent)
- [retentionPeriod](RewardsParameters.md#retentionperiod)

## Properties

### profitMarginExponent

• **profitMarginExponent**: `number`

Profit Margin Exponent is used for shift operation for calculation of profit margin.

___

### bootstrappingDuration

• **bootstrappingDuration**: `number`

The length in epochs of the bootstrapping phase.

___

### rewardToGenerationRatio

• **rewardToGenerationRatio**: `number`

The rate of Mana rewards at the start of the bootstrapping phase.

___

### initialTargetRewardsRate

• **initialTargetRewardsRate**: `bigint`

Decay Balancing Constant Exponent is the exponent used for calculation of the initial reward.

___

### finalTargetRewardsRate

• **finalTargetRewardsRate**: `bigint`

The rate of Mana rewards after the bootstrapping phase.

___

### poolCoefficientExponent

• **poolCoefficientExponent**: `number`

Pool Coefficient Exponent is the exponent used for shifting operation
in the pool rewards calculations.

___

### retentionPeriod

• **retentionPeriod**: `number`

The number of epochs for which rewards are retained.
