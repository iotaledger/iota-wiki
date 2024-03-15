# Interface: ProtocolParameters

The Protocol Parameters.

## Table of contents

### Properties

- [type](ProtocolParameters.md#type)
- [version](ProtocolParameters.md#version)
- [networkName](ProtocolParameters.md#networkname)
- [bech32Hrp](ProtocolParameters.md#bech32hrp)
- [storageScoreParameters](ProtocolParameters.md#storagescoreparameters)
- [workScoreParameters](ProtocolParameters.md#workscoreparameters)
- [manaParameters](ProtocolParameters.md#manaparameters)
- [tokenSupply](ProtocolParameters.md#tokensupply)
- [genesisSlot](ProtocolParameters.md#genesisslot)
- [genesisUnixTimestamp](ProtocolParameters.md#genesisunixtimestamp)
- [slotDurationInSeconds](ProtocolParameters.md#slotdurationinseconds)
- [slotsPerEpochExponent](ProtocolParameters.md#slotsperepochexponent)
- [stakingUnbondingPeriod](ProtocolParameters.md#stakingunbondingperiod)
- [validationBlocksPerSlot](ProtocolParameters.md#validationblocksperslot)
- [punishmentEpochs](ProtocolParameters.md#punishmentepochs)
- [livenessThresholdLowerBound](ProtocolParameters.md#livenessthresholdlowerbound)
- [livenessThresholdUpperBound](ProtocolParameters.md#livenessthresholdupperbound)
- [minCommittableAge](ProtocolParameters.md#mincommittableage)
- [maxCommittableAge](ProtocolParameters.md#maxcommittableage)
- [epochNearingThreshold](ProtocolParameters.md#epochnearingthreshold)
- [congestionControlParameters](ProtocolParameters.md#congestioncontrolparameters)
- [versionSignalingParameters](ProtocolParameters.md#versionsignalingparameters)
- [rewardsParameters](ProtocolParameters.md#rewardsparameters)
- [targetCommitteeSize](ProtocolParameters.md#targetcommitteesize)
- [chainSwitchingThreshold](ProtocolParameters.md#chainswitchingthreshold)

## Properties

### type

• **type**: `number`

Set to value 0 to denote a IOTA 2.0 protocol parameter.

___

### version

• **version**: `number`

Protocol version used by the network.

___

### networkName

• **networkName**: `string`

The human friendly name of the network on which the node operates on.

___

### bech32Hrp

• **bech32Hrp**: `string`

Tells whether the node supports mainnet or testnet addresses. Value `iota` indicates that the node supports mainnet addresses. Value `atoi` indicates that the node supports testnet addresses.

___

### storageScoreParameters

• **storageScoreParameters**: [`StorageScoreParameters`](StorageScoreParameters.md)

The storage score parameters used by given node/network.

___

### workScoreParameters

• **workScoreParameters**: [`WorkScoreParameters`](WorkScoreParameters.md)

Work Score Parameters lists the work score of each type, it is used to denote the computation costs of processing an object.

___

### manaParameters

• **manaParameters**: [`ManaParameters`](ManaParameters.md)

The parameters used by mana calculation.

___

### tokenSupply

• **tokenSupply**: `bigint`

Current supply of base token.

___

### genesisSlot

• **genesisSlot**: `number`

Genesis Slot defines the slot of the genesis.

___

### genesisUnixTimestamp

• **genesisUnixTimestamp**: `bigint`

The genesis timestamp at which the slots start to count.

___

### slotDurationInSeconds

• **slotDurationInSeconds**: `number`

The duration of a slot, in seconds.

___

### slotsPerEpochExponent

• **slotsPerEpochExponent**: `number`

The number of slots in an epoch expressed as an exponent of 2.

___

### stakingUnbondingPeriod

• **stakingUnbondingPeriod**: `number`

The unbonding period in epochs before an account can stop staking.

___

### validationBlocksPerSlot

• **validationBlocksPerSlot**: `number`

The number of validation blocks that each validator should issue each slot.

___

### punishmentEpochs

• **punishmentEpochs**: `number`

The number of epochs worth of Mana that a node is punished with for each additional validation block it issues.

___

### livenessThresholdLowerBound

• **livenessThresholdLowerBound**: `number`

Liveness Threshold Lower Bound is used by tip-selection to determine if a block is eligible by evaluating issuingTimes.

___

### livenessThresholdUpperBound

• **livenessThresholdUpperBound**: `number`

Liveness Threshold Upper Bound is used by tip-selection to determine if a block is eligible by evaluating issuingTimes.

___

### minCommittableAge

• **minCommittableAge**: `number`

MinCommittableAge is the minimum age relative to the accepted tangle time slot index that a slot can be committed.

___

### maxCommittableAge

• **maxCommittableAge**: `number`

MaxCommittableAge is the maximum age for a slot commitment to be included in a block relative to the slot index of the block issuing time.

___

### epochNearingThreshold

• **epochNearingThreshold**: `number`

Determine the slot that should trigger a new committee selection for the next and upcoming epoch.

___

### congestionControlParameters

• **congestionControlParameters**: [`CongestionControlParameters`](CongestionControlParameters.md)

Congestion Control Parameters defines the parameters used to calculate the Reference Mana Cost (RMC).

___

### versionSignalingParameters

• **versionSignalingParameters**: [`VersionSignalingParameters`](VersionSignalingParameters.md)

The parameters used by signaling protocol parameters upgrade.

___

### rewardsParameters

• **rewardsParameters**: [`RewardsParameters`](RewardsParameters.md)

Rewards Parameters defines the parameters that are used to calculate Mana rewards.

___

### targetCommitteeSize

• **targetCommitteeSize**: `number`

Target Committee Size defines the target size of the committee. If there's fewer candidates the actual committee size could be smaller in a given epoch.

___

### chainSwitchingThreshold

• **chainSwitchingThreshold**: `number`

Defines the number of heavier slots that a chain needs to be ahead of the current chain to be considered for
switching.
