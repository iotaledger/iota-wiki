# @iota/sdk

## Table of contents

### Enumerations

- [AddressType](enums/AddressType.md)
- [ContextInputType](enums/ContextInputType.md)
- [BlockBodyType](enums/BlockBodyType.md)
- [InputType](enums/InputType.md)
- [BlockIssuerKeyType](enums/BlockIssuerKeyType.md)
- [FeatureType](enums/FeatureType.md)
- [OutputType](enums/OutputType.md)
- [TokenSchemeType](enums/TokenSchemeType.md)
- [UnlockConditionType](enums/UnlockConditionType.md)
- [PayloadType](enums/PayloadType.md)
- [UnlockType](enums/UnlockType.md)
- [SignatureType](enums/SignatureType.md)
- [CoinType](enums/CoinType.md)
- [LedgerDeviceType](enums/LedgerDeviceType.md)
- [Network](enums/Network.md)
- [TransactionFailureReason](enums/TransactionFailureReason.md)
- [WalletEventType](enums/WalletEventType.md)
- [TransactionProgressType](enums/TransactionProgressType.md)
- [ReturnStrategy](enums/ReturnStrategy.md)
- [OutputsToClaim](enums/OutputsToClaim.md)
- [EventStatus](enums/EventStatus.md)
- [ParticipationEventType](enums/ParticipationEventType.md)
- [InclusionState](enums/InclusionState.md)

### Classes

- [ClientMethodHandler](classes/ClientMethodHandler.md)
- [Client](classes/Client.md)
- [SecretManagerMethodHandler](classes/SecretManagerMethodHandler.md)
- [SecretManager](classes/SecretManager.md)
- [Address](classes/Address.md)
- [Ed25519Address](classes/Ed25519Address.md)
- [AccountAddress](classes/AccountAddress.md)
- [NftAddress](classes/NftAddress.md)
- [AnchorAddress](classes/AnchorAddress.md)
- [ImplicitAccountCreationAddress](classes/ImplicitAccountCreationAddress.md)
- [RestrictedAddress](classes/RestrictedAddress.md)
- [WeightedAddress](classes/WeightedAddress.md)
- [MultiAddress](classes/MultiAddress.md)
- [ContextInput](classes/ContextInput.md)
- [CommitmentContextInput](classes/CommitmentContextInput.md)
- [BlockIssuanceCreditContextInput](classes/BlockIssuanceCreditContextInput.md)
- [RewardContextInput](classes/RewardContextInput.md)
- [BasicBlockBody](classes/BasicBlockBody.md)
- [BlockBody](classes/BlockBody.md)
- [BlockHeader](classes/BlockHeader.md)
- [Block](classes/Block.md)
- [UnsignedBlock](classes/UnsignedBlock.md)
- [ValidationBlockBody](classes/ValidationBlockBody.md)
- [Input](classes/Input.md)
- [UTXOInput](classes/UTXOInput.md)
- [ManaAllotment](classes/ManaAllotment.md)
- [BlockIssuerKey](classes/BlockIssuerKey.md)
- [Ed25519PublicKeyHashBlockIssuerKey](classes/Ed25519PublicKeyHashBlockIssuerKey.md)
- [Feature](classes/Feature.md)
- [SenderFeature](classes/SenderFeature.md)
- [IssuerFeature](classes/IssuerFeature.md)
- [MetadataFeature](classes/MetadataFeature.md)
- [StateMetadataFeature](classes/StateMetadataFeature.md)
- [TagFeature](classes/TagFeature.md)
- [NativeTokenFeature](classes/NativeTokenFeature.md)
- [BlockIssuerFeature](classes/BlockIssuerFeature.md)
- [StakingFeature](classes/StakingFeature.md)
- [Irc27Metadata](classes/Irc27Metadata.md)
- [Attribute](classes/Attribute.md)
- [Irc30Metadata](classes/Irc30Metadata.md)
- [Output](classes/Output.md)
- [CommonOutput](classes/CommonOutput.md)
- [BasicOutput](classes/BasicOutput.md)
- [AccountOutput](classes/AccountOutput.md)
- [AnchorOutput](classes/AnchorOutput.md)
- [FoundryOutput](classes/FoundryOutput.md)
- [NftOutput](classes/NftOutput.md)
- [DelegationOutput](classes/DelegationOutput.md)
- [TokenScheme](classes/TokenScheme.md)
- [SimpleTokenScheme](classes/SimpleTokenScheme.md)
- [UnlockCondition](classes/UnlockCondition.md)
- [AddressUnlockCondition](classes/AddressUnlockCondition.md)
- [StorageDepositReturnUnlockCondition](classes/StorageDepositReturnUnlockCondition.md)
- [TimelockUnlockCondition](classes/TimelockUnlockCondition.md)
- [ExpirationUnlockCondition](classes/ExpirationUnlockCondition.md)
- [StateControllerAddressUnlockCondition](classes/StateControllerAddressUnlockCondition.md)
- [GovernorAddressUnlockCondition](classes/GovernorAddressUnlockCondition.md)
- [ImmutableAccountAddressUnlockCondition](classes/ImmutableAccountAddressUnlockCondition.md)
- [CandidacyAnnouncementPayload](classes/CandidacyAnnouncementPayload.md)
- [Payload](classes/Payload.md)
- [SignedTransactionPayload](classes/SignedTransactionPayload.md)
- [Transaction](classes/Transaction.md)
- [Unlock](classes/Unlock.md)
- [SignatureUnlock](classes/SignatureUnlock.md)
- [ReferenceUnlock](classes/ReferenceUnlock.md)
- [AccountUnlock](classes/AccountUnlock.md)
- [AnchorUnlock](classes/AnchorUnlock.md)
- [NftUnlock](classes/NftUnlock.md)
- [EmptyUnlock](classes/EmptyUnlock.md)
- [MultiUnlock](classes/MultiUnlock.md)
- [TaggedDataPayload](classes/TaggedDataPayload.md)
- [Signature](classes/Signature.md)
- [Ed25519Signature](classes/Ed25519Signature.md)
- [SlotCommitment](classes/SlotCommitment.md)
- [PreparedTransactionData](classes/PreparedTransactionData.md)
- [InputSigningData](classes/InputSigningData.md)
- [Remainder](classes/Remainder.md)
- [ErrorBase](classes/ErrorBase.md)
- [ClientError](classes/ClientError.md)
- [WalletError](classes/WalletError.md)
- [BlockError](classes/BlockError.md)
- [PrefixHexError](classes/PrefixHexError.md)
- [SerdeJsonError](classes/SerdeJsonError.md)
- [UnpackError](classes/UnpackError.md)
- [CongestionResponse](classes/CongestionResponse.md)
- [ManaRewardsResponse](classes/ManaRewardsResponse.md)
- [OutputResponse](classes/OutputResponse.md)
- [UtxoChangesResponse](classes/UtxoChangesResponse.md)
- [OutputWithId](classes/OutputWithId.md)
- [UtxoChangesFullResponse](classes/UtxoChangesFullResponse.md)
- [NativeToken](classes/NativeToken.md)
- [PreparedCreateDelegationTransaction](classes/PreparedCreateDelegationTransaction.md)
- [PreparedCreateDelegationTransactionData](classes/PreparedCreateDelegationTransactionData.md)
- [CreateDelegationTransaction](classes/CreateDelegationTransaction.md)
- [WalletEvent](classes/WalletEvent.md)
- [LedgerAddressGenerationWalletEvent](classes/LedgerAddressGenerationWalletEvent.md)
- [NewOutputWalletEvent](classes/NewOutputWalletEvent.md)
- [SpentOutputWalletEvent](classes/SpentOutputWalletEvent.md)
- [TransactionInclusionWalletEvent](classes/TransactionInclusionWalletEvent.md)
- [TransactionProgressWalletEvent](classes/TransactionProgressWalletEvent.md)
- [TransactionProgress](classes/TransactionProgress.md)
- [SelectingInputsProgress](classes/SelectingInputsProgress.md)
- [GeneratingRemainderDepositAddressProgress](classes/GeneratingRemainderDepositAddressProgress.md)
- [PreparedTransactionProgress](classes/PreparedTransactionProgress.md)
- [PreparedTransactionSigningHashProgress](classes/PreparedTransactionSigningHashProgress.md)
- [SigningTransactionProgress](classes/SigningTransactionProgress.md)
- [BroadcastingProgress](classes/BroadcastingProgress.md)
- [OutputData](classes/OutputData.md)
- [PreparedCreateNativeTokenTransaction](classes/PreparedCreateNativeTokenTransaction.md)
- [PreparedCreateNativeTokenTransactionData](classes/PreparedCreateNativeTokenTransactionData.md)
- [CreateNativeTokenTransaction](classes/CreateNativeTokenTransaction.md)
- [PreparedTransaction](classes/PreparedTransaction.md)
- [SignedTransactionData](classes/SignedTransactionData.md)
- [TransactionWithMetadata](classes/TransactionWithMetadata.md)
- [UnitsHelper](classes/UnitsHelper.md)
- [Utils](classes/Utils.md)
- [WalletMethodHandler](classes/WalletMethodHandler.md)
- [Wallet](classes/Wallet.md)

### Interfaces

- [Burn](interfaces/Burn.md)
- [IClientOptions](interfaces/IClientOptions.md)
- [IDuration](interfaces/IDuration.md)
- [IGenerateAddressesOptions](interfaces/IGenerateAddressesOptions.md)
- [IGenerateAddressOptions](interfaces/IGenerateAddressOptions.md)
- [LedgerNanoStatus](interfaces/LedgerNanoStatus.md)
- [LedgerApp](interfaces/LedgerApp.md)
- [IAuth](interfaces/IAuth.md)
- [IMqttBrokerOptions](interfaces/IMqttBrokerOptions.md)
- [INode](interfaces/INode.md)
- [INetworkInfo](interfaces/INetworkInfo.md)
- [INodeInfoWrapper](interfaces/INodeInfoWrapper.md)
- [AccountOutputBuilderParams](interfaces/AccountOutputBuilderParams.md)
- [BasicOutputBuilderParams](interfaces/BasicOutputBuilderParams.md)
- [FoundryOutputBuilderParams](interfaces/FoundryOutputBuilderParams.md)
- [NftOutputBuilderParams](interfaces/NftOutputBuilderParams.md)
- [CommonOutputQueryParameters](interfaces/CommonOutputQueryParameters.md)
- [OutputQueryParameters](interfaces/OutputQueryParameters.md)
- [BasicOutputQueryParameters](interfaces/BasicOutputQueryParameters.md)
- [AccountOutputQueryParameters](interfaces/AccountOutputQueryParameters.md)
- [AnchorOutputQueryParameters](interfaces/AnchorOutputQueryParameters.md)
- [DelegationOutputQueryParameters](interfaces/DelegationOutputQueryParameters.md)
- [FoundryOutputQueryParameters](interfaces/FoundryOutputQueryParameters.md)
- [NftOutputQueryParameters](interfaces/NftOutputQueryParameters.md)
- [IRange](interfaces/IRange.md)
- [Response](interfaces/Response.md)
- [ILoggerConfig](interfaces/ILoggerConfig.md)
- [IBlockIdResponse](interfaces/IBlockIdResponse.md)
- [IOutputMetadataResponse](interfaces/IOutputMetadataResponse.md)
- [IOutputInclusionMetadata](interfaces/IOutputInclusionMetadata.md)
- [IOutputConsumptionMetadata](interfaces/IOutputConsumptionMetadata.md)
- [IOutputsResponse](interfaces/IOutputsResponse.md)
- [IResponse](interfaces/IResponse.md)
- [ITipsResponse](interfaces/ITipsResponse.md)
- [ValidatorResponse](interfaces/ValidatorResponse.md)
- [ValidatorsResponse](interfaces/ValidatorsResponse.md)
- [IBlockMetadata](interfaces/IBlockMetadata.md)
- [IBlockWithMetadata](interfaces/IBlockWithMetadata.md)
- [TransactionMetadata](interfaces/TransactionMetadata.md)
- [INodeInfoBaseToken](interfaces/INodeInfoBaseToken.md)
- [INodeInfoMetrics](interfaces/INodeInfoMetrics.md)
- [ProtocolInfo](interfaces/ProtocolInfo.md)
- [ProtocolParameters](interfaces/ProtocolParameters.md)
- [RewardsParameters](interfaces/RewardsParameters.md)
- [WorkScoreParameters](interfaces/WorkScoreParameters.md)
- [ManaParameters](interfaces/ManaParameters.md)
- [CongestionControlParameters](interfaces/CongestionControlParameters.md)
- [VersionSignalingParameters](interfaces/VersionSignalingParameters.md)
- [INodeInfoStatus](interfaces/INodeInfoStatus.md)
- [INodeInfo](interfaces/INodeInfo.md)
- [IRoutesResponse](interfaces/IRoutesResponse.md)
- [StorageScoreParameters](interfaces/StorageScoreParameters.md)
- [LedgerNanoSecretManager](interfaces/LedgerNanoSecretManager.md)
- [MnemonicSecretManager](interfaces/MnemonicSecretManager.md)
- [SeedSecretManager](interfaces/SeedSecretManager.md)
- [StrongholdSecretManager](interfaces/StrongholdSecretManager.md)
- [PrivateKeySecretManager](interfaces/PrivateKeySecretManager.md)
- [Secp256k1EcdsaSignature](interfaces/Secp256k1EcdsaSignature.md)
- [Bip44](interfaces/Bip44.md)
- [DecayedMana](interfaces/DecayedMana.md)
- [Bip44Address](interfaces/Bip44Address.md)
- [SendParams](interfaces/SendParams.md)
- [SendNativeTokenParams](interfaces/SendNativeTokenParams.md)
- [SendNftParams](interfaces/SendNftParams.md)
- [GenerateAddressOptions](interfaces/GenerateAddressOptions.md)
- [ConsolidationParams](interfaces/ConsolidationParams.md)
- [OutputParams](interfaces/OutputParams.md)
- [Assets](interfaces/Assets.md)
- [Features](interfaces/Features.md)
- [Unlocks](interfaces/Unlocks.md)
- [StorageDeposit](interfaces/StorageDeposit.md)
- [Segment](interfaces/Segment.md)
- [ParticipationOverview](interfaces/ParticipationOverview.md)
- [Participations](interfaces/Participations.md)
- [TrackedParticipationOverview](interfaces/TrackedParticipationOverview.md)
- [ParticipationEvent](interfaces/ParticipationEvent.md)
- [ParticipationEventRegistrationOptions](interfaces/ParticipationEventRegistrationOptions.md)
- [ParticipationEventWithNodes](interfaces/ParticipationEventWithNodes.md)
- [ParticipationEventStatus](interfaces/ParticipationEventStatus.md)
- [ParticipationEventData](interfaces/ParticipationEventData.md)
- [VotingEventPayload](interfaces/VotingEventPayload.md)
- [StakingEventPayload](interfaces/StakingEventPayload.md)
- [Question](interfaces/Question.md)
- [Answer](interfaces/Answer.md)
- [QuestionStatus](interfaces/QuestionStatus.md)
- [AnswerStatus](interfaces/AnswerStatus.md)
- [TransactionOptions](interfaces/TransactionOptions.md)
- [CreateNativeTokenParams](interfaces/CreateNativeTokenParams.md)
- [MintNftParams](interfaces/MintNftParams.md)
- [AccountOutputParams](interfaces/AccountOutputParams.md)
- [CreateDelegationParams](interfaces/CreateDelegationParams.md)
- [BeginStakingParams](interfaces/BeginStakingParams.md)
- [WalletOptions](interfaces/WalletOptions.md)
- [Balance](interfaces/Balance.md)
- [BaseCoinBalance](interfaces/BaseCoinBalance.md)
- [ManaBalance](interfaces/ManaBalance.md)
- [RequiredStorageDeposit](interfaces/RequiredStorageDeposit.md)
- [NativeTokenBalance](interfaces/NativeTokenBalance.md)
- [SyncOptions](interfaces/SyncOptions.md)
- [WalletSyncOptions](interfaces/WalletSyncOptions.md)
- [AccountSyncOptions](interfaces/AccountSyncOptions.md)
- [NftSyncOptions](interfaces/NftSyncOptions.md)
- [FilterOptions](interfaces/FilterOptions.md)

### Type Aliases

- [Result](api_ref.md#result)
- [OkResult](api_ref.md#okresult)
- [ErrorResult](api_ref.md#errorresult)
- [PanicResult](api_ref.md#panicresult)
- [Bech32Address](api_ref.md#bech32address)
- [AccountId](api_ref.md#accountid)
- [AnchorId](api_ref.md#anchorid)
- [NftId](api_ref.md#nftid)
- [BlockId](api_ref.md#blockid)
- [TokenId](api_ref.md#tokenid)
- [TransactionId](api_ref.md#transactionid)
- [FoundryId](api_ref.md#foundryid)
- [DelegationId](api_ref.md#delegationid)
- [PrintableASCII](api_ref.md#printableascii)
- [OutputId](api_ref.md#outputid)
- [Parents](api_ref.md#parents)
- [StrongParents](api_ref.md#strongparents)
- [WeakParents](api_ref.md#weakparents)
- [ShallowLikeParents](api_ref.md#shallowlikeparents)
- [SlotIndex](api_ref.md#slotindex)
- [EpochIndex](api_ref.md#epochindex)
- [SlotCommitmentId](api_ref.md#slotcommitmentid)
- [RootsId](api_ref.md#rootsid)
- [\_\_ClientMethods\_\_](api_ref.md#__clientmethods__)
- [ClientErrorName](api_ref.md#clienterrorname)
- [WalletErrorName](api_ref.md#walleterrorname)
- [Errors](api_ref.md#errors)
- [BlockState](api_ref.md#blockstate)
- [TransactionState](api_ref.md#transactionstate)
- [\_\_SecretManagerMethods\_\_](api_ref.md#__secretmanagermethods__)
- [PlaceholderSecretManager](api_ref.md#placeholdersecretmanager)
- [SecretManagerType](api_ref.md#secretmanagertype)
- [\_\_UtilsMethods\_\_](api_ref.md#__utilsmethods__)
- [HexEncodedString](api_ref.md#hexencodedstring)
- [HexEncodedAmount](api_ref.md#hexencodedamount)
- [NumericString](api_ref.md#numericstring)
- [u16](api_ref.md#u16)
- [u64](api_ref.md#u64)
- [u256](api_ref.md#u256)
- [\_\_WalletMethod\_\_](api_ref.md#__walletmethod__)
- [ParticipationEventId](api_ref.md#participationeventid)
- [ParticipationEventMap](api_ref.md#participationeventmap)
- [ParticipationEventPayload](api_ref.md#participationeventpayload)
- [RemainderValueStrategy](api_ref.md#remaindervaluestrategy)
- [ReuseAddress](api_ref.md#reuseaddress)
- [CustomAddress](api_ref.md#customaddress)
- [Magnitudes](api_ref.md#magnitudes)

### Variables

- [migrateStrongholdSnapshotV2ToV3](api_ref.md#migratestrongholdsnapshotv2tov3)
- [AddressDiscriminator](api_ref.md#addressdiscriminator)
- [ContextInputDiscriminator](api_ref.md#contextinputdiscriminator)
- [BlockBodyDiscriminator](api_ref.md#blockbodydiscriminator)
- [InputDiscriminator](api_ref.md#inputdiscriminator)
- [BlockIssuerKeyDiscriminator](api_ref.md#blockissuerkeydiscriminator)
- [FeatureDiscriminator](api_ref.md#featurediscriminator)
- [OutputDiscriminator](api_ref.md#outputdiscriminator)
- [TokenSchemeDiscriminator](api_ref.md#tokenschemediscriminator)
- [UnlockConditionDiscriminator](api_ref.md#unlockconditiondiscriminator)
- [PayloadDiscriminator](api_ref.md#payloaddiscriminator)
- [UnlockDiscriminator](api_ref.md#unlockdiscriminator)
- [SignatureDiscriminator](api_ref.md#signaturediscriminator)
- [IOTA\_BECH32\_HRP](api_ref.md#iota_bech32_hrp)
- [IOTA\_TESTNET\_BECH32\_HRP](api_ref.md#iota_testnet_bech32_hrp)
- [SHIMMER\_BECH32\_HRP](api_ref.md#shimmer_bech32_hrp)
- [SHIMMER\_TESTNET\_BECH32\_HRP](api_ref.md#shimmer_testnet_bech32_hrp)
- [TRANSACTION\_FAILURE\_REASON\_STRINGS](api_ref.md#transaction_failure_reason_strings)

### Functions

- [errorHandle](api_ref.md#errorhandle)
- [initLogger](api_ref.md#initlogger)
- [parseBlock](api_ref.md#parseblock)
- [parseUnsignedBlock](api_ref.md#parseunsignedblock)
- [parsePayload](api_ref.md#parsepayload)
- [bigIntToHex](api_ref.md#biginttohex)
- [hexToBigInt](api_ref.md#hextobigint)
- [bytesToHex](api_ref.md#bytestohex)
- [hexToBytes](api_ref.md#hextobytes)
- [utf8ToBytes](api_ref.md#utf8tobytes)
- [hexToUtf8](api_ref.md#hextoutf8)
- [utf8ToHex](api_ref.md#utf8tohex)

## Type Aliases

### Result

Ƭ **Result**: [`OkResult`](api_ref.md#okresult) \| [`PanicResult`](api_ref.md#panicresult) \| [`ErrorResult`](api_ref.md#errorresult)

___

### OkResult

Ƭ **OkResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `payload` | \{ `type`: `string` ; `payload`: `string`  } |
| `payload.type` | `string` |
| `payload.payload` | `string` |

___

### ErrorResult

Ƭ **ErrorResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"error"`` |
| `payload` | \{ `type`: `string` ; `error`: \{ `type`: `string` ; `error`: `string`  } \| `string`  } |
| `payload.type` | `string` |
| `payload.error` | \{ `type`: `string` ; `error`: `string`  } \| `string` |

___

### PanicResult

Ƭ **PanicResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"panic"`` |
| `payload` | `string` |

___

### Bech32Address

Ƭ **Bech32Address**: `string`

An address prepended by its network type.

___

### AccountId

Ƭ **AccountId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

An Account ID represented as hex-encoded string.

___

### AnchorId

Ƭ **AnchorId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

An Anchor ID represented as hex-encoded string.

___

### NftId

Ƭ **NftId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

An NFT ID represented as hex-encoded string.

___

### BlockId

Ƭ **BlockId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

A Block ID represented as hex-encoded string.

___

### TokenId

Ƭ **TokenId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

A Token ID represented as hex-encoded string.

___

### TransactionId

Ƭ **TransactionId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

A Transaction ID represented as hex-encoded string.

___

### FoundryId

Ƭ **FoundryId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

A Foundry ID represented as hex-encoded string.

___

### DelegationId

Ƭ **DelegationId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

Unique identifier of the Delegation Output, which is the BLAKE2b-256 hash of the Output ID that created it.

___

### PrintableASCII

Ƭ **PrintableASCII**: `string`

Printable ASCII characters.

___

### OutputId

Ƭ **OutputId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

___

### Parents

Ƭ **Parents**: [`BlockId`](api_ref.md#blockid)[]

___

### StrongParents

Ƭ **StrongParents**: [`Parents`](api_ref.md#parents)

Array of strongly referenced parents.

___

### WeakParents

Ƭ **WeakParents**: [`Parents`](api_ref.md#parents)

Array of weakly referenced parents.

___

### ShallowLikeParents

Ƭ **ShallowLikeParents**: [`Parents`](api_ref.md#parents)

Array of shallowly referenced parents.

___

### SlotIndex

Ƭ **SlotIndex**: `number`

Timeline is divided into slots, and each slot has a corresponding slot index.
To calculate the slot index of a timestamp, `genesisTimestamp` and the duration of a slot are needed.
The slot index of timestamp `ts` is `(ts - genesisTimestamp)/duration + 1`.

___

### EpochIndex

Ƭ **EpochIndex**: `number`

The tangle timeline is divided into epochs, and each epoch has a corresponding epoch index.
Epochs are further subdivided into slots, each with a `SlotIndex.
To calculate the epoch index of a timestamp, `slotsPerEpochExponent` and `slotDurationInSeconds` are needed.
An epoch consists of `2^slotsPerEpochExponent` slots.

___

### SlotCommitmentId

Ƭ **SlotCommitmentId**: [`HexEncodedString`](api_ref.md#hexencodedstring)

Identifier of a slot commitment

___

### RootsId

Ƭ **RootsId**: `string`

A BLAKE2b-256 hash of concatenating multiple sparse merkle tree roots of a slot.

___

### \_\_ClientMethods\_\_

Ƭ **\_\_ClientMethods\_\_**: `__GetInfoMethod__` \| `__GetOutputMethod__` \| `__GetOutputIdsMethod__` \| `__GetBasicOutputIdsMethod__` \| `__GetOutputsMethod__` \| `__PostBlockMethod__` \| `__GetTipsMethod__` \| `__GetNetworkInfoMethod__` \| `__GetAccountCongestionMethod__` \| `__GetRewardsMethod__` \| `__GetValidatorsMethod__` \| `__GetValidatorMethod__` \| `__GetBlockMethod__` \| `__GetBlockMetadataMethod__` \| `__GetBlockWithMetadataMethod__` \| `__FindInputsMethod__` \| `__SignTransactionMethod__` \| `__SignatureUnlockMethod__` \| `__BuildBasicBlockMethod__` \| `__GetNodeMethod__` \| `__GetNetworkIdMethod__` \| `__GetBech32HrpMethod__` \| `__GetProtocolParametersMethod__` \| `__GetHealthMethod__` \| `__GetNodeInfoMethod__` \| `__PostBlockRawMethod__` \| `__GetBlockRawMethod__` \| `__GetIncludedBlockMethod__` \| `__GetIncludedBlockMetadataMethod__` \| `__GetTransactionMetadataMethod__` \| `__GetCommitmentMethod__` \| `__GetUtxoChangesMethod__` \| `__GetUtxoChangesFullMethod__` \| `__GetCommitmentByIndexMethod__` \| `__GetUtxoChangesByIndexMethod__` \| `__GetUtxoChangesFullByIndexMethod__` \| `__HexToBech32Method__` \| `__AccountIdToBech32Method__` \| `__AnchorIdToBech32Method__` \| `__NftIdToBech32Method__` \| `__HexPublicKeyToBech32AddressMethod__` \| `__AccountOutputIdsMethod__` \| `__AccountOutputIdMethod__` \| `__AnchorOutputIdsMethod__` \| `__AnchorOutputIdMethod__` \| `__DelegationOutputIdsMethod__` \| `__DelegationOutputIdMethod__` \| `__FoundryOutputIdsMethod__` \| `__FoundryOutputIdMethod__` \| `__NftOutputIdsMethod__` \| `__NftOutputIdMethod__` \| `__GetOutputsIgnoreErrorsMethod__` \| `__FindBlocksMethod__` \| `__UnhealthyNodesMethod__` \| `__BuildBasicOutputMethod__` \| `__BuildAccountOutputMethod__` \| `__BuildFoundryOutputMethod__` \| `__BuildNftOutputMethod__` \| `__ClearListenersMethod__` \| `__ComputeMinimumOutputAmountMethod__` \| `__RequestFundsFromFaucetMethod__` \| `__CallPluginRouteMethod__` \| `__BlockIdMethod__`

___

### ClientErrorName

Ƭ **ClientErrorName**: ``"bech32HrpMismatch"`` \| ``"blake2b256"`` \| ``"block"`` \| ``"crypto"`` \| ``"inputAddressNotFound"`` \| ``"invalidAmount"`` \| ``"invalidMnemonic"`` \| ``"invalidTransactionLength"`` \| ``"invalidSignedTransactionPayloadLength"`` \| ``"json"`` \| ``"missingParameter"`` \| ``"node"`` \| ``"noOutput"`` \| ``"placeholderSecretManager"`` \| ``"poisonError"`` \| ``"prefixHex"`` \| ``"quorumPoolSizeError"`` \| ``"quorumThresholdError"`` \| ``"secretManagerMismatch"`` \| ``"healthyNodePoolEmpty"`` \| ``"taggedData"`` \| ``"transactionAcceptance"`` \| ``"taskJoin"`` \| ``"timeNotSynced"`` \| ``"transactionSemantic"`` \| ``"unpack"`` \| ``"urlAuth"`` \| ``"url"`` \| ``"urlValidation"`` \| ``"inputSelection"`` \| ``"missingBip32Chain"`` \| ``"unexpectedBlockBodyKind"`` \| ``"missingTransactionPayload"`` \| ``"expirationDeadzone"`` \| ``"participation"`` \| ``"ledger"`` \| ``"mqtt"`` \| ``"stronghold"``

___

### WalletErrorName

Ƭ **WalletErrorName**: ``"backup"`` \| ``"block"`` \| ``"burningOrMeltingFailed"`` \| ``"client"`` \| ``"bipPathMismatch"`` \| ``"crypto"`` \| ``"customInput"`` \| ``"insufficientFunds"`` \| ``"invalidEventType"`` \| ``"invalidMnemonic"`` \| ``"invalidOutputKind"`` \| ``"invalidVotingPower"`` \| ``"io"`` \| ``"json"`` \| ``"migration"`` \| ``"mintingFailed"`` \| ``"missingBipPath"`` \| ``"missingParameter"`` \| ``"nftNotFoundInUnspentOutputs"`` \| ``"noOutputsToConsolidate"`` \| ``"other"`` \| ``"participation"`` \| ``"storage"`` \| ``"storageIsEncrypted"`` \| ``"taskJoin"`` \| ``"transactionNotFound"`` \| ``"voting"`` \| ``"walletAddressMismatch"`` \| ``"nonEd25519Address"`` \| ``"implicitAccountNotFound"`` \| ``"accountNotFound"``

___

### Errors

Ƭ **Errors**: [`BlockError`](classes/BlockError.md) \| [`ClientError`](classes/ClientError.md) \| [`WalletError`](classes/WalletError.md) \| [`PrefixHexError`](classes/PrefixHexError.md) \| [`SerdeJsonError`](classes/SerdeJsonError.md) \| [`UnpackError`](classes/UnpackError.md)

___

### BlockState

Ƭ **BlockState**: ``"pending"`` \| ``"accepted"`` \| ``"confirmed"`` \| ``"finalized"`` \| ``"rejected"`` \| ``"failed"``

The different states of a block.
'pending': stored but not accepted/confirmed.
'accepted': valid block referenced by some validators.
'confirmed': valid block referenced by more than 2/3 of the validators.
'finalized': accepted/confirmed block and the slot was finalized, can no longer be reverted.
'rejected': rejected by the node, and user should reissue payload if it contains one.
'failed': not successfully issued due to failure reason.

___

### TransactionState

Ƭ **TransactionState**: ``"pending"`` \| ``"accepted"`` \| ``"confirmed"`` \| ``"finalized"`` \| ``"failed"``

The different states of a transaction.
'pending': the transaction is not included yet.
'accepted': the transaction is included.
'confirmed': the transaction is included and its included block is confirmed.
'finalized': the transaction is included, its included block is finalized and cannot be reverted anymore.
'failed': the transaction is not successfully issued due to failure reason.

___

### \_\_SecretManagerMethods\_\_

Ƭ **\_\_SecretManagerMethods\_\_**: `__GenerateEd25519AddressesMethod__` \| `__GenerateEvmAddressesMethod__` \| `__GetLedgerNanoStatusMethod__` \| `__SignTransactionMethod__` \| `__SignBlockMethod__` \| `__SignatureUnlockMethod__` \| `__StoreMnemonicMethod__` \| `__SignEd25519Method__` \| `__SignSecp256k1EcdsaMethod__` \| `__SetStrongholdPasswordMethod__` \| `__ChangeStrongholdPasswordMethod__` \| `__ClearStrongholdPasswordMethod__`

___

### PlaceholderSecretManager

Ƭ **PlaceholderSecretManager**: ``"placeholder"``

Placeholder secret manager that can't do anything.

___

### SecretManagerType

Ƭ **SecretManagerType**: [`LedgerNanoSecretManager`](interfaces/LedgerNanoSecretManager.md) \| [`MnemonicSecretManager`](interfaces/MnemonicSecretManager.md) \| [`SeedSecretManager`](interfaces/SeedSecretManager.md) \| [`StrongholdSecretManager`](interfaces/StrongholdSecretManager.md) \| [`PrivateKeySecretManager`](interfaces/PrivateKeySecretManager.md) \| [`PlaceholderSecretManager`](api_ref.md#placeholdersecretmanager)

Supported secret managers

___

### \_\_UtilsMethods\_\_

Ƭ **\_\_UtilsMethods\_\_**: `__GenerateMnemonicMethod__` \| `__MnemonicToHexSeedMethod__` \| `__ComputeAccountIdMethod__` \| `__ComputeNftIdMethod__` \| `__ComputeFoundryIdMethod__` \| `__ComputeOutputIdMethod__` \| `__ComputeTokenIdMethod__` \| `__ComputeMinimumOutputAmountMethod__` \| `__ParseBech32AddressMethod__` \| `__BlockIdMethod__` \| `__TransactionIdMethod__` \| `__Bech32ToHexMethod__` \| `__HexToBech32Method__` \| `__AccountIdToBech32Method__` \| `__AnchorIdToBech32Method__` \| `__NftIdToBech32Method__` \| `__HexPublicKeyToBech32AddressMethod__` \| `__IsAddressValidMethod__` \| `__ProtocolParametersHashMethod__` \| `__TransactionSigningHashMethod__` \| `__VerifyEd25519SignatureMethod__` \| `__VerifySecp256k1EcdsaSignatureMethod__` \| `__VerifyMnemonicMethod__` \| `__FaucetMethod__` \| `__OutputIdToUtxoInput__` \| `__ComputeSlotCommitmentId__` \| `__OutputHexBytes__` \| `__VerifyTransactionSemantic__` \| `__ManaWithDecay__` \| `__GenerateManaWithDecay__` \| `__OutputManaWithDecay__` \| `__VerifyTransactionSyntax__` \| `__BlockBytes__`

___

### HexEncodedString

Ƭ **HexEncodedString**: `string`

Hex encoded bytes.

___

### HexEncodedAmount

Ƭ **HexEncodedAmount**: `string`

Hex encoded U256.

___

### NumericString

Ƭ **NumericString**: `string`

Used for serialised numeric strings

___

### u16

Ƭ **u16**: `number`

___

### u64

Ƭ **u64**: `bigint`

___

### u256

Ƭ **u256**: `bigint`

___

### \_\_WalletMethod\_\_

Ƭ **\_\_WalletMethod\_\_**: `__AnnounceCandidacyMethod__` \| `__PrepareBurnMethod__` \| `__ClaimOutputsMethod__` \| `__PrepareClaimOutputsMethod__` \| `__PrepareConsolidateOutputsMethod__` \| `__PrepareCreateAccountOutputMethod__` \| `__DeregisterParticipationEventMethod__` \| `__GetBalanceMethod__` \| `__GetOutputMethod__` \| `__GetIncomingTransactionMethod__` \| `__GetFoundryOutputMethod__` \| `__ClaimableOutputsMethod__` \| `__GetParticipationEventMethod__` \| `__GetParticipationEventIdsMethod__` \| `__GetParticipationEventsMethod__` \| `__GetParticipationEventStatusMethod__` \| `__GetTransactionMethod__` \| `__OutputsMethod__` \| `__PendingTransactionsMethod__` \| `__ImplicitAccountCreationAddressMethod__` \| `__PrepareImplicitAccountTransitionMethod__` \| `__AccountsMethod__` \| `__ImplicitAccountsMethod__` \| `__IncomingTransactionsMethod__` \| `__TransactionsMethod__` \| `__UnspentOutputsMethod__` \| `__PrepareCreateNativeTokenMethod__` \| `__PrepareMeltNativeTokenMethod__` \| `__PrepareMintNativeTokenMethod__` \| `__PrepareMintNftsMethod__` \| `__PrepareOutputMethod__` \| `__PrepareSendMethod__` \| `__PrepareCreateDelegationMethod__` \| `__PrepareDelayDelegationClaimingMethod__` \| `__PrepareBeginStakingMethod__` \| `__PrepareExtendStakingMethod__` \| `__PrepareEndStakingMethod__` \| `__PrepareTransactionMethod__` \| `__RegisterParticipationEventsMethod__` \| `__WaitForTransactionAcceptanceMethod__` \| `__SendMethod__` \| `__SendWithParamsMethod__` \| `__PrepareSendNativeTokensMethod__` \| `__PrepareSendNftMethod__` \| `__SendOutputsMethod__` \| `__SetAliasMethod__` \| `__SetDefaultSyncOptionsMethod__` \| `__SignTransactionMethod__` \| `__SignAndSubmitTransactionMethod__` \| `__SubmitAndStoreTransactionMethod__` \| `__SyncAccountMethod__` \| `__PrepareVoteMethod__` \| `__PrepareStopParticipatingMethod__` \| `__GetParticipationOverviewMethod__` \| `__PrepareIncreaseVotingPowerMethod__` \| `__PrepareDecreaseVotingPowerMethod__` \| `__BackupMethod__` \| `__ChangeStrongholdPasswordMethod__` \| `__ClearListenersMethod__` \| `__ClearStrongholdPasswordMethod__` \| `__EmitTestEventMethod__` \| `__GenerateMnemonicMethod__` \| `__GetLedgerNanoStatusMethod__` \| `__IsStrongholdPasswordAvailableMethod__` \| `__RestoreBackupMethod__` \| `__SetClientOptionsMethod__` \| `__SetStrongholdPasswordClearIntervalMethod__` \| `__SetStrongholdPasswordMethod__` \| `__StartBackgroundSyncMethod__` \| `__StopBackgroundSyncMethod__` \| `__StoreMnemonicMethod__` \| `__UpdateNodeAuthMethod__` \| `__AddressMethod__`

___

### ParticipationEventId

Ƭ **ParticipationEventId**: `string`

A participation event ID represented as hex-encoded string.

___

### ParticipationEventMap

Ƭ **ParticipationEventMap**: `Object`

Maps participation event IDs to their corresponding event data with nodes.

#### Index signature

▪ [id: [`ParticipationEventId`](api_ref.md#participationeventid)]: [`ParticipationEventWithNodes`](interfaces/ParticipationEventWithNodes.md)

___

### ParticipationEventPayload

Ƭ **ParticipationEventPayload**: [`VotingEventPayload`](interfaces/VotingEventPayload.md) \| [`StakingEventPayload`](interfaces/StakingEventPayload.md)

Possible participation event payloads (voting or staking).

___

### RemainderValueStrategy

Ƭ **RemainderValueStrategy**: [`ReuseAddress`](api_ref.md#reuseaddress) \| [`CustomAddress`](api_ref.md#customaddress)

The possible remainder value strategies.

___

### ReuseAddress

Ƭ **ReuseAddress**: `Object`

Allows to keep the remainder value on the source address.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategy` | ``"ReuseAddress"`` | The name of the strategy. |
| `value` | ``null`` | Only required for `CustomAddress`. |

___

### CustomAddress

Ƭ **CustomAddress**: `Object`

CustomAddress variant of RemainderValueStrategy

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategy` | ``"CustomAddress"`` | The name of the strategy. |
| `value` | [`Address`](classes/Address.md) | - |

___

### Magnitudes

Ƭ **Magnitudes**: ``"P"`` \| ``"T"`` \| ``"G"`` \| ``"M"`` \| ``"K"`` \| ``""``

Magnitudes for the numbers.

## Variables

### migrateStrongholdSnapshotV2ToV3

• **migrateStrongholdSnapshotV2ToV3**: `any`

___

### AddressDiscriminator

• `Const` **AddressDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`Ed25519Address`](classes/Ed25519Address.md) = Ed25519Address; `name`: `any`  } \| \{ `value`: typeof [`AccountAddress`](classes/AccountAddress.md) = AccountAddress; `name`: `any`  } \| \{ `value`: typeof [`NftAddress`](classes/NftAddress.md) = NftAddress; `name`: `any`  } \| \{ `value`: typeof [`AnchorAddress`](classes/AnchorAddress.md) = AnchorAddress; `name`: `any`  } \| \{ `value`: typeof [`ImplicitAccountCreationAddress`](classes/ImplicitAccountCreationAddress.md) = ImplicitAccountCreationAddress; `name`: `any`  } \| \{ `value`: typeof [`MultiAddress`](classes/MultiAddress.md) = MultiAddress; `name`: `any`  } \| \{ `value`: typeof [`RestrictedAddress`](classes/RestrictedAddress.md) = RestrictedAddress; `name`: `any`  })[] |

___

### ContextInputDiscriminator

• `Const` **ContextInputDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`CommitmentContextInput`](classes/CommitmentContextInput.md) = CommitmentContextInput; `name`: `any`  } \| \{ `value`: typeof [`BlockIssuanceCreditContextInput`](classes/BlockIssuanceCreditContextInput.md) = BlockIssuanceCreditContextInput; `name`: `any`  } \| \{ `value`: typeof [`RewardContextInput`](classes/RewardContextInput.md) = RewardContextInput; `name`: `any`  })[] |

___

### BlockBodyDiscriminator

• `Const` **BlockBodyDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`BasicBlockBody`](classes/BasicBlockBody.md) = BasicBlockBody; `name`: `any`  } \| \{ `value`: typeof [`ValidationBlockBody`](classes/ValidationBlockBody.md) = ValidationBlockBody; `name`: `any`  })[] |

___

### InputDiscriminator

• `Const` **InputDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | \{ `value`: typeof [`UTXOInput`](classes/UTXOInput.md) = UTXOInput; `name`: `any`  }[] |

___

### BlockIssuerKeyDiscriminator

• `Const` **BlockIssuerKeyDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | \{ `value`: typeof [`Ed25519PublicKeyHashBlockIssuerKey`](classes/Ed25519PublicKeyHashBlockIssuerKey.md) = Ed25519PublicKeyHashBlockIssuerKey; `name`: `any`  }[] |

___

### FeatureDiscriminator

• `Const` **FeatureDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`SenderFeature`](classes/SenderFeature.md) = SenderFeature; `name`: `any`  } \| \{ `value`: typeof [`MetadataFeature`](classes/MetadataFeature.md) = MetadataFeature; `name`: `any`  } \| \{ `value`: typeof [`TagFeature`](classes/TagFeature.md) = TagFeature; `name`: `any`  } \| \{ `value`: typeof [`NativeTokenFeature`](classes/NativeTokenFeature.md) = NativeTokenFeature; `name`: `any`  } \| \{ `value`: typeof [`BlockIssuerFeature`](classes/BlockIssuerFeature.md) = BlockIssuerFeature; `name`: `any`  } \| \{ `value`: typeof [`StakingFeature`](classes/StakingFeature.md) = StakingFeature; `name`: `any`  })[] |

___

### OutputDiscriminator

• `Const` **OutputDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`BasicOutput`](classes/BasicOutput.md) = BasicOutput; `name`: `any`  } \| \{ `value`: typeof [`AccountOutput`](classes/AccountOutput.md) = AccountOutput; `name`: `any`  } \| \{ `value`: typeof [`AnchorOutput`](classes/AnchorOutput.md) = AnchorOutput; `name`: `any`  } \| \{ `value`: typeof [`FoundryOutput`](classes/FoundryOutput.md) = FoundryOutput; `name`: `any`  } \| \{ `value`: typeof [`NftOutput`](classes/NftOutput.md) = NftOutput; `name`: `any`  } \| \{ `value`: typeof [`DelegationOutput`](classes/DelegationOutput.md) = DelegationOutput; `name`: `any`  })[] |

___

### TokenSchemeDiscriminator

• `Const` **TokenSchemeDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | \{ `value`: typeof [`SimpleTokenScheme`](classes/SimpleTokenScheme.md) = SimpleTokenScheme; `name`: `any`  }[] |

___

### UnlockConditionDiscriminator

• `Const` **UnlockConditionDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`AddressUnlockCondition`](classes/AddressUnlockCondition.md) = AddressUnlockCondition; `name`: `any`  } \| \{ `value`: typeof [`StorageDepositReturnUnlockCondition`](classes/StorageDepositReturnUnlockCondition.md) = StorageDepositReturnUnlockCondition; `name`: `any`  } \| \{ `value`: typeof [`TimelockUnlockCondition`](classes/TimelockUnlockCondition.md) = TimelockUnlockCondition; `name`: `any`  } \| \{ `value`: typeof [`ExpirationUnlockCondition`](classes/ExpirationUnlockCondition.md) = ExpirationUnlockCondition; `name`: `any`  })[] |

___

### PayloadDiscriminator

• `Const` **PayloadDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`TaggedDataPayload`](classes/TaggedDataPayload.md) = TaggedDataPayload; `name`: `any`  } \| \{ `value`: typeof [`SignedTransactionPayload`](classes/SignedTransactionPayload.md) = SignedTransactionPayload; `name`: `any`  } \| \{ `value`: typeof [`CandidacyAnnouncementPayload`](classes/CandidacyAnnouncementPayload.md) = CandidacyAnnouncementPayload; `name`: `any`  })[] |

___

### UnlockDiscriminator

• `Const` **UnlockDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | (\{ `value`: typeof [`SignatureUnlock`](classes/SignatureUnlock.md) = SignatureUnlock; `name`: `any`  } \| \{ `value`: typeof [`ReferenceUnlock`](classes/ReferenceUnlock.md) = ReferenceUnlock; `name`: `any`  } \| \{ `value`: typeof [`MultiUnlock`](classes/MultiUnlock.md) = MultiUnlock; `name`: `any`  } \| \{ `value`: typeof [`EmptyUnlock`](classes/EmptyUnlock.md) = EmptyUnlock; `name`: `any`  })[] |

___

### SignatureDiscriminator

• `Const` **SignatureDiscriminator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `subTypes` | \{ `value`: typeof [`Ed25519Signature`](classes/Ed25519Signature.md) = Ed25519Signature; `name`: `any`  }[] |

___

### IOTA\_BECH32\_HRP

• `Const` **IOTA\_BECH32\_HRP**: ``"iota"``

___

### IOTA\_TESTNET\_BECH32\_HRP

• `Const` **IOTA\_TESTNET\_BECH32\_HRP**: ``"atoi"``

___

### SHIMMER\_BECH32\_HRP

• `Const` **SHIMMER\_BECH32\_HRP**: ``"smr"``

___

### SHIMMER\_TESTNET\_BECH32\_HRP

• `Const` **SHIMMER\_TESTNET\_BECH32\_HRP**: ``"rms"``

___

### TRANSACTION\_FAILURE\_REASON\_STRINGS

• `Const` **TRANSACTION\_FAILURE\_REASON\_STRINGS**: \{ [key in TransactionFailureReason]: string }

Transaction failure reason strings.

## Functions

### errorHandle

▸ **errorHandle**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`Error`

___

### initLogger

▸ **initLogger**(`config?`): `any`

Initialize logger, if no arguments are provided a default config will be used.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`ILoggerConfig`](interfaces/ILoggerConfig.md) | `defaultLoggerConfig` |

#### Returns

`any`

___

### parseBlock

▸ **parseBlock**(`data`): [`Block`](classes/Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Block`](classes/Block.md)

___

### parseUnsignedBlock

▸ **parseUnsignedBlock**(`data`): [`UnsignedBlock`](classes/UnsignedBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UnsignedBlock`](classes/UnsignedBlock.md)

___

### parsePayload

▸ **parsePayload**(`data`): [`Payload`](classes/Payload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Payload`](classes/Payload.md)

___

### bigIntToHex

▸ **bigIntToHex**(`value`): `string`

Converts `bigint` value to hexadecimal string representation prefixed with "0x".

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |

#### Returns

`string`

___

### hexToBigInt

▸ **hexToBigInt**(`value`): `bigint`

Converts hex encoded string to `bigint` value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`bigint`

___

### bytesToHex

▸ **bytesToHex**(`bytes`, `prefix?`): `string`

Converts a byte array to a hexadecimal string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bytes` | `ArrayLike`\<`number`\> | `undefined` | - |
| `prefix?` | `boolean` | `false` | Whether to include the '0x' prefix in the resulting hexadecimal string. |

#### Returns

`string`

The hexadecimal representation of the input byte array.

___

### hexToBytes

▸ **hexToBytes**(`hexString`): `Uint8Array`

Converts a hexadecimal string to a Uint8Array byte array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexString` | `string` | The hexadecimal string to be converted. |

#### Returns

`Uint8Array`

The Uint8Array byte array representation of the input hexadecimal string.

**`Throws`**

Will throw an error if the input string is not a valid hexadecimal string.

___

### utf8ToBytes

▸ **utf8ToBytes**(`utf8`): `number`[]

Convert UTF8 string to an array of bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `utf8` | `string` |

#### Returns

`number`[]

___

### hexToUtf8

▸ **hexToUtf8**(`hex`): `string`

Convert hex encoded string to UTF8 string

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

___

### utf8ToHex

▸ **utf8ToHex**(`utf8`): `string`

Convert UTF8 string to hex encoded string

#### Parameters

| Name | Type |
| :------ | :------ |
| `utf8` | `string` |

#### Returns

`string`
