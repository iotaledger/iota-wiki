# Interface: StorageScoreParameters

Defines the parameters of storage score calculations on objects which take node resources.

## Table of contents

### Properties

- [storageCost](StorageScoreParameters.md#storagecost)
- [factorData](StorageScoreParameters.md#factordata)
- [offsetOutputOverhead](StorageScoreParameters.md#offsetoutputoverhead)
- [offsetEd25519BlockIssuerKey](StorageScoreParameters.md#offseted25519blockissuerkey)
- [offsetStakingFeature](StorageScoreParameters.md#offsetstakingfeature)
- [offsetDelegation](StorageScoreParameters.md#offsetdelegation)

## Properties

### storageCost

• **storageCost**: `bigint`

Defines the number of IOTA tokens required per unit of storage score.

___

### factorData

• **factorData**: `number`

Defines the factor to be used for data only fields.

___

### offsetOutputOverhead

• **offsetOutputOverhead**: `bigint`

Defines the offset to be applied to all outputs for the overhead of handling them in storage.

___

### offsetEd25519BlockIssuerKey

• **offsetEd25519BlockIssuerKey**: `bigint`

Defines the offset to be used for block issuer feature public keys.

___

### offsetStakingFeature

• **offsetStakingFeature**: `bigint`

Defines the offset to be used for staking feature.

___

### offsetDelegation

• **offsetDelegation**: `bigint`

Defines the offset to be used for delegation output.
