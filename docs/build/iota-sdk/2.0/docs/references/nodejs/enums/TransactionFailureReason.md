# Enumeration: TransactionFailureReason

Reason for transaction failure.

## Table of contents

### Enumeration Members

- [None](TransactionFailureReason.md#none)
- [ConflictRejected](TransactionFailureReason.md#conflictrejected)
- [InputAlreadySpent](TransactionFailureReason.md#inputalreadyspent)
- [InputCreationAfterTxCreation](TransactionFailureReason.md#inputcreationaftertxcreation)
- [UnlockSignatureInvalid](TransactionFailureReason.md#unlocksignatureinvalid)
- [ChainAddressUnlockInvalid](TransactionFailureReason.md#chainaddressunlockinvalid)
- [DirectUnlockableAddressUnlockInvalid](TransactionFailureReason.md#directunlockableaddressunlockinvalid)
- [MultiAddressUnlockInvalid](TransactionFailureReason.md#multiaddressunlockinvalid)
- [CommitmentInputReferenceInvalid](TransactionFailureReason.md#commitmentinputreferenceinvalid)
- [BicInputReferenceInvalid](TransactionFailureReason.md#bicinputreferenceinvalid)
- [RewardInputReferenceInvalid](TransactionFailureReason.md#rewardinputreferenceinvalid)
- [StakingRewardCalculationFailure](TransactionFailureReason.md#stakingrewardcalculationfailure)
- [DelegationRewardCalculationFailure](TransactionFailureReason.md#delegationrewardcalculationfailure)
- [InputOutputBaseTokenMismatch](TransactionFailureReason.md#inputoutputbasetokenmismatch)
- [ManaOverflow](TransactionFailureReason.md#manaoverflow)
- [InputOutputManaMismatch](TransactionFailureReason.md#inputoutputmanamismatch)
- [ManaDecayCreationIndexExceedsTargetIndex](TransactionFailureReason.md#manadecaycreationindexexceedstargetindex)
- [NativeTokenSumUnbalanced](TransactionFailureReason.md#nativetokensumunbalanced)
- [SimpleTokenSchemeMintedMeltedTokenDecrease](TransactionFailureReason.md#simpletokenschememintedmeltedtokendecrease)
- [SimpleTokenSchemeMintingInvalid](TransactionFailureReason.md#simpletokenschememintinginvalid)
- [SimpleTokenSchemeMeltingInvalid](TransactionFailureReason.md#simpletokenschememeltinginvalid)
- [SimpleTokenSchemeMaximumSupplyChanged](TransactionFailureReason.md#simpletokenschememaximumsupplychanged)
- [SimpleTokenSchemeGenesisInvalid](TransactionFailureReason.md#simpletokenschemegenesisinvalid)
- [MultiAddressLengthUnlockLengthMismatch](TransactionFailureReason.md#multiaddresslengthunlocklengthmismatch)
- [MultiAddressUnlockThresholdNotReached](TransactionFailureReason.md#multiaddressunlockthresholdnotreached)
- [SenderFeatureNotUnlocked](TransactionFailureReason.md#senderfeaturenotunlocked)
- [IssuerFeatureNotUnlocked](TransactionFailureReason.md#issuerfeaturenotunlocked)
- [StakingRewardInputMissing](TransactionFailureReason.md#stakingrewardinputmissing)
- [StakingBlockIssuerFeatureMissing](TransactionFailureReason.md#stakingblockissuerfeaturemissing)
- [StakingCommitmentInputMissing](TransactionFailureReason.md#stakingcommitmentinputmissing)
- [StakingRewardClaimingInvalid](TransactionFailureReason.md#stakingrewardclaiminginvalid)
- [StakingFeatureRemovedBeforeUnbonding](TransactionFailureReason.md#stakingfeatureremovedbeforeunbonding)
- [StakingFeatureModifiedBeforeUnbonding](TransactionFailureReason.md#stakingfeaturemodifiedbeforeunbonding)
- [StakingStartEpochInvalid](TransactionFailureReason.md#stakingstartepochinvalid)
- [StakingEndEpochTooEarly](TransactionFailureReason.md#stakingendepochtooearly)
- [BlockIssuerCommitmentInputMissing](TransactionFailureReason.md#blockissuercommitmentinputmissing)
- [BlockIssuanceCreditInputMissing](TransactionFailureReason.md#blockissuancecreditinputmissing)
- [BlockIssuerNotExpired](TransactionFailureReason.md#blockissuernotexpired)
- [BlockIssuerExpiryTooEarly](TransactionFailureReason.md#blockissuerexpirytooearly)
- [ManaMovedOffBlockIssuerAccount](TransactionFailureReason.md#manamovedoffblockissueraccount)
- [AccountLocked](TransactionFailureReason.md#accountlocked)
- [TimelockCommitmentInputMissing](TransactionFailureReason.md#timelockcommitmentinputmissing)
- [TimelockNotExpired](TransactionFailureReason.md#timelocknotexpired)
- [ExpirationCommitmentInputMissing](TransactionFailureReason.md#expirationcommitmentinputmissing)
- [ExpirationNotUnlockable](TransactionFailureReason.md#expirationnotunlockable)
- [ReturnAmountNotFulFilled](TransactionFailureReason.md#returnamountnotfulfilled)
- [NewChainOutputHasNonZeroedId](TransactionFailureReason.md#newchainoutputhasnonzeroedid)
- [ChainOutputImmutableFeaturesChanged](TransactionFailureReason.md#chainoutputimmutablefeatureschanged)
- [ImplicitAccountDestructionDisallowed](TransactionFailureReason.md#implicitaccountdestructiondisallowed)
- [MultipleImplicitAccountCreationAddresses](TransactionFailureReason.md#multipleimplicitaccountcreationaddresses)
- [AccountInvalidFoundryCounter](TransactionFailureReason.md#accountinvalidfoundrycounter)
- [AnchorInvalidStateTransition](TransactionFailureReason.md#anchorinvalidstatetransition)
- [AnchorInvalidGovernanceTransition](TransactionFailureReason.md#anchorinvalidgovernancetransition)
- [FoundryTransitionWithoutAccount](TransactionFailureReason.md#foundrytransitionwithoutaccount)
- [FoundrySerialInvalid](TransactionFailureReason.md#foundryserialinvalid)
- [DelegationCommitmentInputMissing](TransactionFailureReason.md#delegationcommitmentinputmissing)
- [DelegationRewardInputMissing](TransactionFailureReason.md#delegationrewardinputmissing)
- [DelegationRewardsClaimingInvalid](TransactionFailureReason.md#delegationrewardsclaiminginvalid)
- [DelegationOutputTransitionedTwice](TransactionFailureReason.md#delegationoutputtransitionedtwice)
- [DelegationModified](TransactionFailureReason.md#delegationmodified)
- [DelegationStartEpochInvalid](TransactionFailureReason.md#delegationstartepochinvalid)
- [DelegationAmountMismatch](TransactionFailureReason.md#delegationamountmismatch)
- [DelegationEndEpochNotZero](TransactionFailureReason.md#delegationendepochnotzero)
- [DelegationEndEpochInvalid](TransactionFailureReason.md#delegationendepochinvalid)
- [CapabilitiesNativeTokenBurningNotAllowed](TransactionFailureReason.md#capabilitiesnativetokenburningnotallowed)
- [CapabilitiesManaBurningNotAllowed](TransactionFailureReason.md#capabilitiesmanaburningnotallowed)
- [CapabilitiesAccountDestructionNotAllowed](TransactionFailureReason.md#capabilitiesaccountdestructionnotallowed)
- [CapabilitiesAnchorDestructionNotAllowed](TransactionFailureReason.md#capabilitiesanchordestructionnotallowed)
- [CapabilitiesFoundryDestructionNotAllowed](TransactionFailureReason.md#capabilitiesfoundrydestructionnotallowed)
- [CapabilitiesNftDestructionNotAllowed](TransactionFailureReason.md#capabilitiesnftdestructionnotallowed)
- [SemanticValidationFailed](TransactionFailureReason.md#semanticvalidationfailed)

## Enumeration Members

### None

• **None** = ``0``

___

### ConflictRejected

• **ConflictRejected** = ``1``

___

### InputAlreadySpent

• **InputAlreadySpent** = ``2``

___

### InputCreationAfterTxCreation

• **InputCreationAfterTxCreation** = ``3``

___

### UnlockSignatureInvalid

• **UnlockSignatureInvalid** = ``4``

___

### ChainAddressUnlockInvalid

• **ChainAddressUnlockInvalid** = ``5``

___

### DirectUnlockableAddressUnlockInvalid

• **DirectUnlockableAddressUnlockInvalid** = ``6``

___

### MultiAddressUnlockInvalid

• **MultiAddressUnlockInvalid** = ``7``

___

### CommitmentInputReferenceInvalid

• **CommitmentInputReferenceInvalid** = ``8``

___

### BicInputReferenceInvalid

• **BicInputReferenceInvalid** = ``9``

___

### RewardInputReferenceInvalid

• **RewardInputReferenceInvalid** = ``10``

___

### StakingRewardCalculationFailure

• **StakingRewardCalculationFailure** = ``11``

___

### DelegationRewardCalculationFailure

• **DelegationRewardCalculationFailure** = ``12``

___

### InputOutputBaseTokenMismatch

• **InputOutputBaseTokenMismatch** = ``13``

___

### ManaOverflow

• **ManaOverflow** = ``14``

___

### InputOutputManaMismatch

• **InputOutputManaMismatch** = ``15``

___

### ManaDecayCreationIndexExceedsTargetIndex

• **ManaDecayCreationIndexExceedsTargetIndex** = ``16``

___

### NativeTokenSumUnbalanced

• **NativeTokenSumUnbalanced** = ``17``

___

### SimpleTokenSchemeMintedMeltedTokenDecrease

• **SimpleTokenSchemeMintedMeltedTokenDecrease** = ``18``

___

### SimpleTokenSchemeMintingInvalid

• **SimpleTokenSchemeMintingInvalid** = ``19``

___

### SimpleTokenSchemeMeltingInvalid

• **SimpleTokenSchemeMeltingInvalid** = ``20``

___

### SimpleTokenSchemeMaximumSupplyChanged

• **SimpleTokenSchemeMaximumSupplyChanged** = ``21``

___

### SimpleTokenSchemeGenesisInvalid

• **SimpleTokenSchemeGenesisInvalid** = ``22``

___

### MultiAddressLengthUnlockLengthMismatch

• **MultiAddressLengthUnlockLengthMismatch** = ``23``

___

### MultiAddressUnlockThresholdNotReached

• **MultiAddressUnlockThresholdNotReached** = ``24``

___

### SenderFeatureNotUnlocked

• **SenderFeatureNotUnlocked** = ``25``

___

### IssuerFeatureNotUnlocked

• **IssuerFeatureNotUnlocked** = ``26``

___

### StakingRewardInputMissing

• **StakingRewardInputMissing** = ``27``

___

### StakingBlockIssuerFeatureMissing

• **StakingBlockIssuerFeatureMissing** = ``28``

___

### StakingCommitmentInputMissing

• **StakingCommitmentInputMissing** = ``29``

___

### StakingRewardClaimingInvalid

• **StakingRewardClaimingInvalid** = ``30``

___

### StakingFeatureRemovedBeforeUnbonding

• **StakingFeatureRemovedBeforeUnbonding** = ``31``

___

### StakingFeatureModifiedBeforeUnbonding

• **StakingFeatureModifiedBeforeUnbonding** = ``32``

___

### StakingStartEpochInvalid

• **StakingStartEpochInvalid** = ``33``

___

### StakingEndEpochTooEarly

• **StakingEndEpochTooEarly** = ``34``

___

### BlockIssuerCommitmentInputMissing

• **BlockIssuerCommitmentInputMissing** = ``35``

___

### BlockIssuanceCreditInputMissing

• **BlockIssuanceCreditInputMissing** = ``36``

___

### BlockIssuerNotExpired

• **BlockIssuerNotExpired** = ``37``

___

### BlockIssuerExpiryTooEarly

• **BlockIssuerExpiryTooEarly** = ``38``

___

### ManaMovedOffBlockIssuerAccount

• **ManaMovedOffBlockIssuerAccount** = ``39``

___

### AccountLocked

• **AccountLocked** = ``40``

___

### TimelockCommitmentInputMissing

• **TimelockCommitmentInputMissing** = ``41``

___

### TimelockNotExpired

• **TimelockNotExpired** = ``42``

___

### ExpirationCommitmentInputMissing

• **ExpirationCommitmentInputMissing** = ``43``

___

### ExpirationNotUnlockable

• **ExpirationNotUnlockable** = ``44``

___

### ReturnAmountNotFulFilled

• **ReturnAmountNotFulFilled** = ``45``

___

### NewChainOutputHasNonZeroedId

• **NewChainOutputHasNonZeroedId** = ``46``

___

### ChainOutputImmutableFeaturesChanged

• **ChainOutputImmutableFeaturesChanged** = ``47``

___

### ImplicitAccountDestructionDisallowed

• **ImplicitAccountDestructionDisallowed** = ``48``

___

### MultipleImplicitAccountCreationAddresses

• **MultipleImplicitAccountCreationAddresses** = ``49``

___

### AccountInvalidFoundryCounter

• **AccountInvalidFoundryCounter** = ``50``

___

### AnchorInvalidStateTransition

• **AnchorInvalidStateTransition** = ``51``

___

### AnchorInvalidGovernanceTransition

• **AnchorInvalidGovernanceTransition** = ``52``

___

### FoundryTransitionWithoutAccount

• **FoundryTransitionWithoutAccount** = ``53``

___

### FoundrySerialInvalid

• **FoundrySerialInvalid** = ``54``

___

### DelegationCommitmentInputMissing

• **DelegationCommitmentInputMissing** = ``55``

___

### DelegationRewardInputMissing

• **DelegationRewardInputMissing** = ``56``

___

### DelegationRewardsClaimingInvalid

• **DelegationRewardsClaimingInvalid** = ``57``

___

### DelegationOutputTransitionedTwice

• **DelegationOutputTransitionedTwice** = ``58``

___

### DelegationModified

• **DelegationModified** = ``59``

___

### DelegationStartEpochInvalid

• **DelegationStartEpochInvalid** = ``60``

___

### DelegationAmountMismatch

• **DelegationAmountMismatch** = ``61``

___

### DelegationEndEpochNotZero

• **DelegationEndEpochNotZero** = ``62``

___

### DelegationEndEpochInvalid

• **DelegationEndEpochInvalid** = ``63``

___

### CapabilitiesNativeTokenBurningNotAllowed

• **CapabilitiesNativeTokenBurningNotAllowed** = ``64``

___

### CapabilitiesManaBurningNotAllowed

• **CapabilitiesManaBurningNotAllowed** = ``65``

___

### CapabilitiesAccountDestructionNotAllowed

• **CapabilitiesAccountDestructionNotAllowed** = ``66``

___

### CapabilitiesAnchorDestructionNotAllowed

• **CapabilitiesAnchorDestructionNotAllowed** = ``67``

___

### CapabilitiesFoundryDestructionNotAllowed

• **CapabilitiesFoundryDestructionNotAllowed** = ``68``

___

### CapabilitiesNftDestructionNotAllowed

• **CapabilitiesNftDestructionNotAllowed** = ``69``

___

### SemanticValidationFailed

• **SemanticValidationFailed** = ``255``
