---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# @iota/iota.js

## Table of contents

### Classes

- [Ed25519Address](classes/Ed25519Address.md)
- [ClientError](classes/ClientError.md)
- [IndexerPluginClient](classes/IndexerPluginClient.md)
- [SingleNodeClient](classes/SingleNodeClient.md)
- [B1T6](classes/B1T6.md)
- [LocalPowProvider](classes/LocalPowProvider.md)
- [Ed25519Seed](classes/Ed25519Seed.md)
- [Bech32Helper](classes/Bech32Helper.md)
- [PowHelper](classes/PowHelper.md)
- [TransactionHelper](classes/TransactionHelper.md)
- [UnitsHelper](classes/UnitsHelper.md)

### Variables

- [MIN_ADDRESS_LENGTH](api_ref.md#min_address_length)
- [ALIAS_ID_LENGTH](api_ref.md#alias_id_length)
- [MIN_ALIAS_ADDRESS_LENGTH](api_ref.md#min_alias_address_length)
- [MIN_ED25519_ADDRESS_LENGTH](api_ref.md#min_ed25519_address_length)
- [NFT_ID_LENGTH](api_ref.md#nft_id_length)
- [MIN_NFT_ADDRESS_LENGTH](api_ref.md#min_nft_address_length)
- [MAX_BLOCK_LENGTH](api_ref.md#max_block_length)
- [MAX_NUMBER_PARENTS](api_ref.md#max_number_parents)
- [MIN_NUMBER_PARENTS](api_ref.md#min_number_parents)
- [UINT8_SIZE](api_ref.md#uint8_size)
- [UINT16_SIZE](api_ref.md#uint16_size)
- [UINT32_SIZE](api_ref.md#uint32_size)
- [UINT64_SIZE](api_ref.md#uint64_size)
- [UINT256_SIZE](api_ref.md#uint256_size)
- [BLOCK_ID_LENGTH](api_ref.md#block_id_length)
- [TRANSACTION_ID_LENGTH](api_ref.md#transaction_id_length)
- [MERKLE_PROOF_LENGTH](api_ref.md#merkle_proof_length)
- [TYPE_LENGTH](api_ref.md#type_length)
- [SMALL_TYPE_LENGTH](api_ref.md#small_type_length)
- [STRING_LENGTH](api_ref.md#string_length)
- [ARRAY_LENGTH](api_ref.md#array_length)
- [MIN_FEATURES_LENGTH](api_ref.md#min_features_length)
- [MIN_FEATURE_LENGTH](api_ref.md#min_feature_length)
- [MIN_ISSUER_FEATURE_LENGTH](api_ref.md#min_issuer_feature_length)
- [MIN_METADATA_FEATURE_LENGTH](api_ref.md#min_metadata_feature_length)
- [MIN_SENDER_FEATURE_LENGTH](api_ref.md#min_sender_feature_length)
- [MIN_TAG_FEATURE_LENGTH](api_ref.md#min_tag_feature_length)
- [TAIL_HASH_LENGTH](api_ref.md#tail_hash_length)
- [MIN_MIGRATED_FUNDS_LENGTH](api_ref.md#min_migrated_funds_length)
- [MAX_FUNDS_COUNT](api_ref.md#max_funds_count)
- [MIN_INPUT_LENGTH](api_ref.md#min_input_length)
- [MIN_INPUT_COUNT](api_ref.md#min_input_count)
- [MAX_INPUT_COUNT](api_ref.md#max_input_count)
- [MIN_TREASURY_INPUT_LENGTH](api_ref.md#min_treasury_input_length)
- [MIN_UTXO_INPUT_LENGTH](api_ref.md#min_utxo_input_length)
- [MIN_MILESTONE_OPTION_LENGTH](api_ref.md#min_milestone_option_length)
- [MIN_PROTOCOL_PARAMS_MILESTONE_OPTION_LENGTH](api_ref.md#min_protocol_params_milestone_option_length)
- [MIN_RECEIPT_MILESTONE_OPTION_LENGTH](api_ref.md#min_receipt_milestone_option_length)
- [MIN_ALIAS_OUTPUT_LENGTH](api_ref.md#min_alias_output_length)
- [MIN_BASIC_OUTPUT_LENGTH](api_ref.md#min_basic_output_length)
- [MIN_FOUNDRY_OUTPUT_LENGTH](api_ref.md#min_foundry_output_length)
- [MIN_NFT_OUTPUT_LENGTH](api_ref.md#min_nft_output_length)
- [MIN_OUTPUT_LENGTH](api_ref.md#min_output_length)
- [MIN_OUTPUT_COUNT](api_ref.md#min_output_count)
- [MAX_OUTPUT_COUNT](api_ref.md#max_output_count)
- [MIN_TREASURY_OUTPUT_LENGTH](api_ref.md#min_treasury_output_length)
- [MIN_MILESTONE_PAYLOAD_LENGTH](api_ref.md#min_milestone_payload_length)
- [MIN_PAYLOAD_LENGTH](api_ref.md#min_payload_length)
- [MIN_TAGGED_DATA_PAYLOAD_LENGTH](api_ref.md#min_tagged_data_payload_length)
- [MAX_TAG_LENGTH](api_ref.md#max_tag_length)
- [MIN_TRANSACTION_PAYLOAD_LENGTH](api_ref.md#min_transaction_payload_length)
- [MIN_TREASURY_TRANSACTION_PAYLOAD_LENGTH](api_ref.md#min_treasury_transaction_payload_length)
- [MIN_ED25519_SIGNATURE_LENGTH](api_ref.md#min_ed25519_signature_length)
- [MIN_SIGNATURE_LENGTH](api_ref.md#min_signature_length)
- [MIN_SIMPLE_TOKEN_SCHEME_LENGTH](api_ref.md#min_simple_token_scheme_length)
- [MIN_TOKEN_SCHEME_LENGTH](api_ref.md#min_token_scheme_length)
- [MIN_TRANSACTION_ESSENCE_LENGTH](api_ref.md#min_transaction_essence_length)
- [MIN_ADDRESS_UNLOCK_CONDITION_LENGTH](api_ref.md#min_address_unlock_condition_length)
- [MIN_EXPIRATION_UNLOCK_CONDITION_LENGTH](api_ref.md#min_expiration_unlock_condition_length)
- [MIN_GOVERNOR_ADDRESS_UNLOCK_CONDITION_LENGTH](api_ref.md#min_governor_address_unlock_condition_length)
- [MIN_IMMUTABLE_ALIAS_UNLOCK_CONDITION_LENGTH](api_ref.md#min_immutable_alias_unlock_condition_length)
- [MIN_STATE_CONTROLLER_ADDRESS_UNLOCK_CONDITION_LENGTH](api_ref.md#min_state_controller_address_unlock_condition_length)
- [MIN_STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_LENGTH](api_ref.md#min_storage_deposit_return_unlock_condition_length)
- [MIN_TIMELOCK_UNLOCK_CONDITION_LENGTH](api_ref.md#min_timelock_unlock_condition_length)
- [MIN_UNLOCK_CONDITIONS_LENGTH](api_ref.md#min_unlock_conditions_length)
- [MIN_UNLOCK_CONDITION_LENGTH](api_ref.md#min_unlock_condition_length)
- [MIN_ALIAS_UNLOCK_LENGTH](api_ref.md#min_alias_unlock_length)
- [MIN_NFT_UNLOCK_LENGTH](api_ref.md#min_nft_unlock_length)
- [MIN_REFERENCE_UNLOCK_LENGTH](api_ref.md#min_reference_unlock_length)
- [MIN_SIGNATURE_UNLOCK_LENGTH](api_ref.md#min_signature_unlock_length)
- [MIN_UNLOCK_LENGTH](api_ref.md#min_unlock_length)
- [DEFAULT_PROTOCOL_VERSION](api_ref.md#default_protocol_version)
- [TRANSACTION_ESSENCE_TYPE](api_ref.md#transaction_essence_type)
- [INPUTS_COMMITMENT_SIZE](api_ref.md#inputs_commitment_size)
- [ALIAS_ADDRESS_TYPE](api_ref.md#alias_address_type)
- [ED25519_ADDRESS_TYPE](api_ref.md#ed25519_address_type)
- [NFT_ADDRESS_TYPE](api_ref.md#nft_address_type)
- [ISSUER_FEATURE_TYPE](api_ref.md#issuer_feature_type)
- [METADATA_FEATURE_TYPE](api_ref.md#metadata_feature_type)
- [SENDER_FEATURE_TYPE](api_ref.md#sender_feature_type)
- [TAG_FEATURE_TYPE](api_ref.md#tag_feature_type)
- [TREASURY_INPUT_TYPE](api_ref.md#treasury_input_type)
- [UTXO_INPUT_TYPE](api_ref.md#utxo_input_type)
- [PROTOCOL_PARAMETERS_MILESTONE_OPTION_TYPE](api_ref.md#protocol_parameters_milestone_option_type)
- [RECEIPT_MILESTONE_OPTION_TYPE](api_ref.md#receipt_milestone_option_type)
- [ALIAS_OUTPUT_TYPE](api_ref.md#alias_output_type)
- [BASIC_OUTPUT_TYPE](api_ref.md#basic_output_type)
- [FOUNDRY_OUTPUT_TYPE](api_ref.md#foundry_output_type)
- [NFT_OUTPUT_TYPE](api_ref.md#nft_output_type)
- [TREASURY_OUTPUT_TYPE](api_ref.md#treasury_output_type)
- [MILESTONE_PAYLOAD_TYPE](api_ref.md#milestone_payload_type)
- [TAGGED_DATA_PAYLOAD_TYPE](api_ref.md#tagged_data_payload_type)
- [TRANSACTION_PAYLOAD_TYPE](api_ref.md#transaction_payload_type)
- [TREASURY_TRANSACTION_PAYLOAD_TYPE](api_ref.md#treasury_transaction_payload_type)
- [ED25519_SIGNATURE_TYPE](api_ref.md#ed25519_signature_type)
- [SIMPLE_TOKEN_SCHEME_TYPE](api_ref.md#simple_token_scheme_type)
- [ADDRESS_UNLOCK_CONDITION_TYPE](api_ref.md#address_unlock_condition_type)
- [EXPIRATION_UNLOCK_CONDITION_TYPE](api_ref.md#expiration_unlock_condition_type)
- [GOVERNOR_ADDRESS_UNLOCK_CONDITION_TYPE](api_ref.md#governor_address_unlock_condition_type)
- [IMMUTABLE_ALIAS_UNLOCK_CONDITION_TYPE](api_ref.md#immutable_alias_unlock_condition_type)
- [STATE_CONTROLLER_ADDRESS_UNLOCK_CONDITION_TYPE](api_ref.md#state_controller_address_unlock_condition_type)
- [STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_TYPE](api_ref.md#storage_deposit_return_unlock_condition_type)
- [TIMELOCK_UNLOCK_CONDITION_TYPE](api_ref.md#timelock_unlock_condition_type)
- [ALIAS_UNLOCK_TYPE](api_ref.md#alias_unlock_type)
- [NFT_UNLOCK_TYPE](api_ref.md#nft_unlock_type)
- [REFERENCE_UNLOCK_TYPE](api_ref.md#reference_unlock_type)
- [SIGNATURE_UNLOCK_TYPE](api_ref.md#signature_unlock_type)
- [CONFLICT_REASON_STRINGS](api_ref.md#conflict_reason_strings)
- [ED25519_SEED_TYPE](api_ref.md#ed25519_seed_type)

### Functions

- [deserializeAddress](api_ref.md#deserializeaddress)
- [serializeAddress](api_ref.md#serializeaddress)
- [deserializeAliasAddress](api_ref.md#deserializealiasaddress)
- [serializeAliasAddress](api_ref.md#serializealiasaddress)
- [deserializeEd25519Address](api_ref.md#deserializeed25519address)
- [serializeEd25519Address](api_ref.md#serializeed25519address)
- [deserializeNftAddress](api_ref.md#deserializenftaddress)
- [serializeNftAddress](api_ref.md#serializenftaddress)
- [deserializeBlock](api_ref.md#deserializeblock)
- [serializeBlock](api_ref.md#serializeblock)
- [deserializeFeatures](api_ref.md#deserializefeatures)
- [serializeFeatures](api_ref.md#serializefeatures)
- [deserializeFeature](api_ref.md#deserializefeature)
- [serializeFeature](api_ref.md#serializefeature)
- [deserializeIssuerFeature](api_ref.md#deserializeissuerfeature)
- [serializeIssuerFeature](api_ref.md#serializeissuerfeature)
- [deserializeMetadataFeature](api_ref.md#deserializemetadatafeature)
- [serializeMetadataFeature](api_ref.md#serializemetadatafeature)
- [deserializeSenderFeature](api_ref.md#deserializesenderfeature)
- [serializeSenderFeature](api_ref.md#serializesenderfeature)
- [deserializeTagFeature](api_ref.md#deserializetagfeature)
- [serializeTagFeature](api_ref.md#serializetagfeature)
- [deserializeFunds](api_ref.md#deserializefunds)
- [serializeFunds](api_ref.md#serializefunds)
- [deserializeMigratedFunds](api_ref.md#deserializemigratedfunds)
- [serializeMigratedFunds](api_ref.md#serializemigratedfunds)
- [deserializeInputs](api_ref.md#deserializeinputs)
- [serializeInputs](api_ref.md#serializeinputs)
- [deserializeInput](api_ref.md#deserializeinput)
- [serializeInput](api_ref.md#serializeinput)
- [deserializeTreasuryInput](api_ref.md#deserializetreasuryinput)
- [serializeTreasuryInput](api_ref.md#serializetreasuryinput)
- [deserializeUTXOInput](api_ref.md#deserializeutxoinput)
- [serializeUTXOInput](api_ref.md#serializeutxoinput)
- [deserializeMilestoneOptions](api_ref.md#deserializemilestoneoptions)
- [serializeMilestoneOptions](api_ref.md#serializemilestoneoptions)
- [deserializeMilestoneOption](api_ref.md#deserializemilestoneoption)
- [serializeMilestoneOption](api_ref.md#serializemilestoneoption)
- [deserializeProtocolParamsMilestoneOption](api_ref.md#deserializeprotocolparamsmilestoneoption)
- [serializeProtocolParamsMilestoneOption](api_ref.md#serializeprotocolparamsmilestoneoption)
- [deserializeReceiptMilestoneOption](api_ref.md#deserializereceiptmilestoneoption)
- [serializeReceiptMilestoneOption](api_ref.md#serializereceiptmilestoneoption)
- [deserializeAliasOutput](api_ref.md#deserializealiasoutput)
- [serializeAliasOutput](api_ref.md#serializealiasoutput)
- [deserializeBasicOutput](api_ref.md#deserializebasicoutput)
- [serializeBasicOutput](api_ref.md#serializebasicoutput)
- [deserializeFoundryOutput](api_ref.md#deserializefoundryoutput)
- [serializeFoundryOutput](api_ref.md#serializefoundryoutput)
- [deserializeNftOutput](api_ref.md#deserializenftoutput)
- [serializeNftOutput](api_ref.md#serializenftoutput)
- [deserializeOutputs](api_ref.md#deserializeoutputs)
- [serializeOutputs](api_ref.md#serializeoutputs)
- [deserializeOutput](api_ref.md#deserializeoutput)
- [serializeOutput](api_ref.md#serializeoutput)
- [deserializeTreasuryOutput](api_ref.md#deserializetreasuryoutput)
- [serializeTreasuryOutput](api_ref.md#serializetreasuryoutput)
- [deserializeMilestonePayload](api_ref.md#deserializemilestonepayload)
- [serializeMilestonePayload](api_ref.md#serializemilestonepayload)
- [serializeMilestoneEssence](api_ref.md#serializemilestoneessence)
- [deserializePayload](api_ref.md#deserializepayload)
- [serializePayload](api_ref.md#serializepayload)
- [deserializeTaggedDataPayload](api_ref.md#deserializetaggeddatapayload)
- [serializeTaggedDataPayload](api_ref.md#serializetaggeddatapayload)
- [deserializeTransactionPayload](api_ref.md#deserializetransactionpayload)
- [serializeTransactionPayload](api_ref.md#serializetransactionpayload)
- [deserializeTreasuryTransactionPayload](api_ref.md#deserializetreasurytransactionpayload)
- [serializeTreasuryTransactionPayload](api_ref.md#serializetreasurytransactionpayload)
- [deserializeEd25519Signature](api_ref.md#deserializeed25519signature)
- [serializeEd25519Signature](api_ref.md#serializeed25519signature)
- [deserializeSignature](api_ref.md#deserializesignature)
- [serializeSignature](api_ref.md#serializesignature)
- [deserializeSimpleTokenScheme](api_ref.md#deserializesimpletokenscheme)
- [serializeSimpleTokenScheme](api_ref.md#serializesimpletokenscheme)
- [deserializeTokenScheme](api_ref.md#deserializetokenscheme)
- [serializeTokenScheme](api_ref.md#serializetokenscheme)
- [deserializeTransactionEssence](api_ref.md#deserializetransactionessence)
- [serializeTransactionEssence](api_ref.md#serializetransactionessence)
- [deserializeAddressUnlockCondition](api_ref.md#deserializeaddressunlockcondition)
- [serializeAddressUnlockCondition](api_ref.md#serializeaddressunlockcondition)
- [deserializeExpirationUnlockCondition](api_ref.md#deserializeexpirationunlockcondition)
- [serializeExpirationUnlockCondition](api_ref.md#serializeexpirationunlockcondition)
- [deserializeGovernorAddressUnlockCondition](api_ref.md#deserializegovernoraddressunlockcondition)
- [serializeGovernorAddressUnlockCondition](api_ref.md#serializegovernoraddressunlockcondition)
- [deserializeImmutableAliasUnlockCondition](api_ref.md#deserializeimmutablealiasunlockcondition)
- [serializeImmutableAliasUnlockCondition](api_ref.md#serializeimmutablealiasunlockcondition)
- [deserializeStateControllerAddressUnlockCondition](api_ref.md#deserializestatecontrolleraddressunlockcondition)
- [serializeStateControllerAddressUnlockCondition](api_ref.md#serializestatecontrolleraddressunlockcondition)
- [deserializeStorageDepositReturnUnlockCondition](api_ref.md#deserializestoragedepositreturnunlockcondition)
- [serializeStorageDepositReturnUnlockCondition](api_ref.md#serializestoragedepositreturnunlockcondition)
- [deserializeTimelockUnlockCondition](api_ref.md#deserializetimelockunlockcondition)
- [serializeTimelockUnlockCondition](api_ref.md#serializetimelockunlockcondition)
- [deserializeUnlockConditions](api_ref.md#deserializeunlockconditions)
- [serializeUnlockConditions](api_ref.md#serializeunlockconditions)
- [deserializeUnlockCondition](api_ref.md#deserializeunlockcondition)
- [serializeUnlockCondition](api_ref.md#serializeunlockcondition)
- [deserializeAliasUnlock](api_ref.md#deserializealiasunlock)
- [serializeAliasUnlock](api_ref.md#serializealiasunlock)
- [deserializeNftUnlock](api_ref.md#deserializenftunlock)
- [serializeNftUnlock](api_ref.md#serializenftunlock)
- [deserializeReferenceUnlock](api_ref.md#deserializereferenceunlock)
- [serializeReferenceUnlock](api_ref.md#serializereferenceunlock)
- [deserializeSignatureUnlock](api_ref.md#deserializesignatureunlock)
- [serializeSignatureUnlock](api_ref.md#serializesignatureunlock)
- [deserializeUnlocks](api_ref.md#deserializeunlocks)
- [serializeUnlocks](api_ref.md#serializeunlocks)
- [deserializeUnlock](api_ref.md#deserializeunlock)
- [serializeUnlock](api_ref.md#serializeunlock)
- [addressBalance](api_ref.md#addressbalance)
- [generateBip44Path](api_ref.md#generatebip44path)
- [generateBip44Address](api_ref.md#generatebip44address)
- [getBalance](api_ref.md#getbalance)
- [getUnspentAddress](api_ref.md#getunspentaddress)
- [getUnspentAddresses](api_ref.md#getunspentaddresses)
- [getUnspentAddressesWithAddressGenerator](api_ref.md#getunspentaddresseswithaddressgenerator)
- [promote](api_ref.md#promote)
- [reattach](api_ref.md#reattach)
- [retrieveData](api_ref.md#retrievedata)
- [retry](api_ref.md#retry)
- [send](api_ref.md#send)
- [sendEd25519](api_ref.md#sended25519)
- [sendMultiple](api_ref.md#sendmultiple)
- [sendMultipleEd25519](api_ref.md#sendmultipleed25519)
- [sendWithAddressGenerator](api_ref.md#sendwithaddressgenerator)
- [calculateInputs](api_ref.md#calculateinputs)
- [sendAdvanced](api_ref.md#sendadvanced)
- [buildTransactionPayload](api_ref.md#buildtransactionpayload)
- [sendData](api_ref.md#senddata)
- [setLogger](api_ref.md#setlogger)
- [logRoutes](api_ref.md#logroutes)
- [logInfo](api_ref.md#loginfo)
- [logTips](api_ref.md#logtips)
- [logBlock](api_ref.md#logblock)
- [logBlockMetadata](api_ref.md#logblockmetadata)
- [logPayload](api_ref.md#logpayload)
- [logTransactionPayload](api_ref.md#logtransactionpayload)
- [logTaggedDataPayload](api_ref.md#logtaggeddatapayload)
- [logMilestonePayload](api_ref.md#logmilestonepayload)
- [logMilestoneOptions](api_ref.md#logmilestoneoptions)
- [logMilestoneOption](api_ref.md#logmilestoneoption)
- [logReceiptMilestoneOption](api_ref.md#logreceiptmilestoneoption)
- [logProtocolParamsMilestoneOption](api_ref.md#logprotocolparamsmilestoneoption)
- [logTreasuryTransactionPayload](api_ref.md#logtreasurytransactionpayload)
- [logAddress](api_ref.md#logaddress)
- [logSignature](api_ref.md#logsignature)
- [logInput](api_ref.md#loginput)
- [logOutput](api_ref.md#logoutput)
- [logUnlock](api_ref.md#logunlock)
- [logFunds](api_ref.md#logfunds)
- [logNativeTokens](api_ref.md#lognativetokens)
- [logTokenScheme](api_ref.md#logtokenscheme)
- [logFeatures](api_ref.md#logfeatures)
- [logImmutableFeatures](api_ref.md#logimmutablefeatures)
- [logFeature](api_ref.md#logfeature)
- [logUnlockConditions](api_ref.md#logunlockconditions)
- [logUnlockCondition](api_ref.md#logunlockcondition)
- [milestoneIdFromMilestonePayload](api_ref.md#milestoneidfrommilestonepayload)
- [blockIdFromMilestonePayload](api_ref.md#blockidfrommilestonepayload)

### Interfaces

- [SingleNodeClientOptions](interfaces/SingleNodeClientOptions.md)
- [IAddress](interfaces/IAddress.md)
- [IBip44GeneratorState](interfaces/IBip44GeneratorState.md)
- [IBlock](interfaces/IBlock.md)
- [IBlockMetadata](interfaces/IBlockMetadata.md)
- [IClient](interfaces/IClient.md)
- [IGossipHeartbeat](interfaces/IGossipHeartbeat.md)
- [IGossipMetrics](interfaces/IGossipMetrics.md)
- [IKeyPair](interfaces/IKeyPair.md)
- [IMigratedFunds](interfaces/IMigratedFunds.md)
- [INativeToken](interfaces/INativeToken.md)
- [IPeer](interfaces/IPeer.md)
- [IPowProvider](interfaces/IPowProvider.md)
- [IRent](interfaces/IRent.md)
- [ISeed](interfaces/ISeed.md)
- [ITransactionEssence](interfaces/ITransactionEssence.md)
- [ITreasury](interfaces/ITreasury.md)
- [ITypeBase](interfaces/ITypeBase.md)
- [IAliasAddress](interfaces/IAliasAddress.md)
- [IEd25519Address](interfaces/IEd25519Address.md)
- [INftAddress](interfaces/INftAddress.md)
- [IBlockIdResponse](interfaces/IBlockIdResponse.md)
- [IMilestoneUtxoChangesResponse](interfaces/IMilestoneUtxoChangesResponse.md)
- [IOutputMetadataResponse](interfaces/IOutputMetadataResponse.md)
- [IOutputResponse](interfaces/IOutputResponse.md)
- [IReceiptsResponse](interfaces/IReceiptsResponse.md)
- [IResponse](interfaces/IResponse.md)
- [ITipsResponse](interfaces/ITipsResponse.md)
- [IOutputsResponse](interfaces/IOutputsResponse.md)
- [IIssuerFeature](interfaces/IIssuerFeature.md)
- [IMetadataFeature](interfaces/IMetadataFeature.md)
- [ISenderFeature](interfaces/ISenderFeature.md)
- [ITagFeature](interfaces/ITagFeature.md)
- [INodeInfo](interfaces/INodeInfo.md)
- [INodeInfoBaseToken](interfaces/INodeInfoBaseToken.md)
- [INodeInfoMetrics](interfaces/INodeInfoMetrics.md)
- [INodeInfoMilestone](interfaces/INodeInfoMilestone.md)
- [INodeInfoProtocol](interfaces/INodeInfoProtocol.md)
- [INodeInfoProtocolParamsMilestoneOpt](interfaces/INodeInfoProtocolParamsMilestoneOpt.md)
- [INodeInfoStatus](interfaces/INodeInfoStatus.md)
- [IRoutesResponse](interfaces/IRoutesResponse.md)
- [ITreasuryInput](interfaces/ITreasuryInput.md)
- [IUTXOInput](interfaces/IUTXOInput.md)
- [IProtocolParamsMilestoneOption](interfaces/IProtocolParamsMilestoneOption.md)
- [IReceiptMilestoneOption](interfaces/IReceiptMilestoneOption.md)
- [IAliasOutput](interfaces/IAliasOutput.md)
- [IBasicOutput](interfaces/IBasicOutput.md)
- [ICommonOutput](interfaces/ICommonOutput.md)
- [IFoundryOutput](interfaces/IFoundryOutput.md)
- [INftOutput](interfaces/INftOutput.md)
- [ITreasuryOutput](interfaces/ITreasuryOutput.md)
- [IMilestonePayload](interfaces/IMilestonePayload.md)
- [ITaggedDataPayload](interfaces/ITaggedDataPayload.md)
- [ITransactionPayload](interfaces/ITransactionPayload.md)
- [ITreasuryTransactionPayload](interfaces/ITreasuryTransactionPayload.md)
- [IEd25519Signature](interfaces/IEd25519Signature.md)
- [ISimpleTokenScheme](interfaces/ISimpleTokenScheme.md)
- [IAddressUnlockCondition](interfaces/IAddressUnlockCondition.md)
- [IExpirationUnlockCondition](interfaces/IExpirationUnlockCondition.md)
- [IGovernorAddressUnlockCondition](interfaces/IGovernorAddressUnlockCondition.md)
- [IImmutableAliasUnlockCondition](interfaces/IImmutableAliasUnlockCondition.md)
- [IStateControllerAddressUnlockCondition](interfaces/IStateControllerAddressUnlockCondition.md)
- [IStorageDepositReturnUnlockCondition](interfaces/IStorageDepositReturnUnlockCondition.md)
- [ITimelockUnlockCondition](interfaces/ITimelockUnlockCondition.md)
- [IAliasUnlock](interfaces/IAliasUnlock.md)
- [INftUnlock](interfaces/INftUnlock.md)
- [IReferenceUnlock](interfaces/IReferenceUnlock.md)
- [ISignatureUnlock](interfaces/ISignatureUnlock.md)

### Type Aliases

- [AddressTypes](api_ref.md#addresstypes)
- [FeatureTypes](api_ref.md#featuretypes)
- [InputTypes](api_ref.md#inputtypes)
- [LedgerInclusionState](api_ref.md#ledgerinclusionstate)
- [Magnitudes](api_ref.md#magnitudes)
- [MilestoneOptionTypes](api_ref.md#milestoneoptiontypes)
- [OutputTypes](api_ref.md#outputtypes)
- [PayloadTypes](api_ref.md#payloadtypes)
- [SignatureTypes](api_ref.md#signaturetypes)
- [TokenSchemeTypes](api_ref.md#tokenschemetypes)
- [UnlockConditionTypes](api_ref.md#unlockconditiontypes)
- [UnlockTypes](api_ref.md#unlocktypes)

### Enumerations

- [ConflictReason](enums/ConflictReason.md)

## Variables

### MIN_ADDRESS_LENGTH

• `Const` **MIN_ADDRESS_LENGTH**: `number`

The minimum length of an address binary representation.

---

### ALIAS_ID_LENGTH

• `Const` **ALIAS_ID_LENGTH**: `number` = `32`

The length of an alias id.

---

### MIN_ALIAS_ADDRESS_LENGTH

• `Const` **MIN_ALIAS_ADDRESS_LENGTH**: `number`

The minimum length of an alias address binary representation.

---

### MIN_ED25519_ADDRESS_LENGTH

• `Const` **MIN_ED25519_ADDRESS_LENGTH**: `number`

The minimum length of an ed25519 address binary representation.

---

### NFT_ID_LENGTH

• `Const` **NFT_ID_LENGTH**: `number` = `32`

The length of an NFT Id.

---

### MIN_NFT_ADDRESS_LENGTH

• `Const` **MIN_NFT_ADDRESS_LENGTH**: `number`

The minimum length of an nft address binary representation.

---

### MAX_BLOCK_LENGTH

• `Const` **MAX_BLOCK_LENGTH**: `number` = `32768`

The maximum length of a block.

---

### MAX_NUMBER_PARENTS

• `Const` **MAX_NUMBER_PARENTS**: `number` = `8`

The maximum number of parents.

---

### MIN_NUMBER_PARENTS

• `Const` **MIN_NUMBER_PARENTS**: `number` = `1`

The minimum number of parents.

---

### UINT8_SIZE

• `Const` **UINT8_SIZE**: `number` = `1`

Byte length for a uint8 field.

---

### UINT16_SIZE

• `Const` **UINT16_SIZE**: `number` = `2`

Byte length for a uint16 field.

---

### UINT32_SIZE

• `Const` **UINT32_SIZE**: `number` = `4`

Byte length for a uint32 field.

---

### UINT64_SIZE

• `Const` **UINT64_SIZE**: `number` = `8`

Byte length for a uint64 field.

---

### UINT256_SIZE

• `Const` **UINT256_SIZE**: `number` = `32`

Byte length for a uint256 field.

---

### BLOCK_ID_LENGTH

• `Const` **BLOCK_ID_LENGTH**: `number` = `Blake2b.SIZE_256`

Byte length for a block id.

---

### TRANSACTION_ID_LENGTH

• `Const` **TRANSACTION_ID_LENGTH**: `number` = `Blake2b.SIZE_256`

Byte length for a transaction id.

---

### MERKLE_PROOF_LENGTH

• `Const` **MERKLE_PROOF_LENGTH**: `number` = `Blake2b.SIZE_256`

Byte length for a merkle prrof.

---

### TYPE_LENGTH

• `Const` **TYPE_LENGTH**: `number` = `UINT32_SIZE`

Byte length for a type length.

---

### SMALL_TYPE_LENGTH

• `Const` **SMALL_TYPE_LENGTH**: `number` = `UINT8_SIZE`

Byte length for a small type length.

---

### STRING_LENGTH

• `Const` **STRING_LENGTH**: `number` = `UINT16_SIZE`

Byte length for a string length.

---

### ARRAY_LENGTH

• `Const` **ARRAY_LENGTH**: `number` = `UINT16_SIZE`

Byte length for an array length.

---

### MIN_FEATURES_LENGTH

• `Const` **MIN_FEATURES_LENGTH**: `number` = `UINT8_SIZE`

The minimum length of a featurs tokens list.

---

### MIN_FEATURE_LENGTH

• `Const` **MIN_FEATURE_LENGTH**: `number`

The minimum length of a feature binary representation.

---

### MIN_ISSUER_FEATURE_LENGTH

• `Const` **MIN_ISSUER_FEATURE_LENGTH**: `number`

The minimum length of a issuer feature binary representation.

---

### MIN_METADATA_FEATURE_LENGTH

• `Const` **MIN_METADATA_FEATURE_LENGTH**: `number`

The minimum length of a metadata feature block binary representation.

---

### MIN_SENDER_FEATURE_LENGTH

• `Const` **MIN_SENDER_FEATURE_LENGTH**: `number`

The minimum length of a sender feature binary representation.

---

### MIN_TAG_FEATURE_LENGTH

• `Const` **MIN_TAG_FEATURE_LENGTH**: `number`

The minimum length of a tag feature binary representation.

---

### TAIL_HASH_LENGTH

• `Const` **TAIL_HASH_LENGTH**: `number` = `49`

The length of the tail hash length in bytes.

---

### MIN_MIGRATED_FUNDS_LENGTH

• `Const` **MIN_MIGRATED_FUNDS_LENGTH**: `number`

The minimum length of a migrated fund binary representation.

---

### MAX_FUNDS_COUNT

• `Const` **MAX_FUNDS_COUNT**: `number` = `127`

The maximum number of funds.

---

### MIN_INPUT_LENGTH

• `Const` **MIN_INPUT_LENGTH**: `number`

The minimum length of an input binary representation.

---

### MIN_INPUT_COUNT

• `Const` **MIN_INPUT_COUNT**: `number` = `1`

The minimum number of inputs.

---

### MAX_INPUT_COUNT

• `Const` **MAX_INPUT_COUNT**: `number` = `128`

The maximum number of inputs.

---

### MIN_TREASURY_INPUT_LENGTH

• `Const` **MIN_TREASURY_INPUT_LENGTH**: `number`

The minimum length of a treasury input binary representation.

---

### MIN_UTXO_INPUT_LENGTH

• `Const` **MIN_UTXO_INPUT_LENGTH**: `number`

The minimum length of a utxo input binary representation.

---

### MIN_MILESTONE_OPTION_LENGTH

• `Const` **MIN_MILESTONE_OPTION_LENGTH**: `number`

The minimum length of a milestone option binary representation.

---

### MIN_PROTOCOL_PARAMS_MILESTONE_OPTION_LENGTH

• `Const` **MIN_PROTOCOL_PARAMS_MILESTONE_OPTION_LENGTH**: `number`

The minimum length of a protocol params milestone option binary representation.

---

### MIN_RECEIPT_MILESTONE_OPTION_LENGTH

• `Const` **MIN_RECEIPT_MILESTONE_OPTION_LENGTH**: `number`

The minimum length of a receipt milestone option binary representation.

---

### MIN_ALIAS_OUTPUT_LENGTH

• `Const` **MIN_ALIAS_OUTPUT_LENGTH**: `number`

The minimum length of a alias output binary representation.

---

### MIN_BASIC_OUTPUT_LENGTH

• `Const` **MIN_BASIC_OUTPUT_LENGTH**: `number`

The minimum length of a basic output binary representation.

---

### MIN_FOUNDRY_OUTPUT_LENGTH

• `Const` **MIN_FOUNDRY_OUTPUT_LENGTH**: `number`

The minimum length of a foundry output binary representation.

---

### MIN_NFT_OUTPUT_LENGTH

• `Const` **MIN_NFT_OUTPUT_LENGTH**: `number`

The minimum length of a nft output binary representation.

---

### MIN_OUTPUT_LENGTH

• `Const` **MIN_OUTPUT_LENGTH**: `number`

The minimum length of an output binary representation.

---

### MIN_OUTPUT_COUNT

• `Const` **MIN_OUTPUT_COUNT**: `number` = `1`

The minimum number of outputs.

---

### MAX_OUTPUT_COUNT

• `Const` **MAX_OUTPUT_COUNT**: `number` = `128`

The maximum number of outputs.

---

### MIN_TREASURY_OUTPUT_LENGTH

• `Const` **MIN_TREASURY_OUTPUT_LENGTH**: `number`

The minimum length of a treasury output binary representation.

---

### MIN_MILESTONE_PAYLOAD_LENGTH

• `Const` **MIN_MILESTONE_PAYLOAD_LENGTH**: `number`

The minimum length of a milestone payload binary representation.

---

### MIN_PAYLOAD_LENGTH

• `Const` **MIN_PAYLOAD_LENGTH**: `number`

The minimum length of a payload binary representation.

---

### MIN_TAGGED_DATA_PAYLOAD_LENGTH

• `Const` **MIN_TAGGED_DATA_PAYLOAD_LENGTH**: `number`

The minimum length of a tagged data payload binary representation.

---

### MAX_TAG_LENGTH

• `Const` **MAX_TAG_LENGTH**: `number` = `64`

The maximum length of a tag.

---

### MIN_TRANSACTION_PAYLOAD_LENGTH

• `Const` **MIN_TRANSACTION_PAYLOAD_LENGTH**: `number`

The minimum length of a transaction payload binary representation.

---

### MIN_TREASURY_TRANSACTION_PAYLOAD_LENGTH

• `Const` **MIN_TREASURY_TRANSACTION_PAYLOAD_LENGTH**: `number`

The minimum length of a treasury transaction payload binary representation.

---

### MIN_ED25519_SIGNATURE_LENGTH

• `Const` **MIN_ED25519_SIGNATURE_LENGTH**: `number`

The minimum length of an ed25519 signature binary representation.

---

### MIN_SIGNATURE_LENGTH

• `Const` **MIN_SIGNATURE_LENGTH**: `number` = `MIN_ED25519_SIGNATURE_LENGTH`

The minimum length of a signature binary representation.

---

### MIN_SIMPLE_TOKEN_SCHEME_LENGTH

• `Const` **MIN_SIMPLE_TOKEN_SCHEME_LENGTH**: `number`

The minimum length of an simple token scheme binary representation.

---

### MIN_TOKEN_SCHEME_LENGTH

• `Const` **MIN_TOKEN_SCHEME_LENGTH**: `number` = `MIN_SIMPLE_TOKEN_SCHEME_LENGTH`

The minimum length of a simple token scheme binary representation.

---

### MIN_TRANSACTION_ESSENCE_LENGTH

• `Const` **MIN_TRANSACTION_ESSENCE_LENGTH**: `number`

The minimum length of a transaction essence binary representation.

---

### MIN_ADDRESS_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_ADDRESS_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an address unlock condition binary representation.

---

### MIN_EXPIRATION_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_EXPIRATION_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an expiration unlock condition binary representation.

---

### MIN_GOVERNOR_ADDRESS_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_GOVERNOR_ADDRESS_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an governor unlock condition binary representation.

---

### MIN_IMMUTABLE_ALIAS_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_IMMUTABLE_ALIAS_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an immutable alias unlock condition binary representation.

---

### MIN_STATE_CONTROLLER_ADDRESS_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_STATE_CONTROLLER_ADDRESS_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an state controller address unlock condition binary representation.

---

### MIN_STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an storage deposit return unlock condition binary representation.

---

### MIN_TIMELOCK_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_TIMELOCK_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of an timelock unlock condition binary representation.

---

### MIN_UNLOCK_CONDITIONS_LENGTH

• `Const` **MIN_UNLOCK_CONDITIONS_LENGTH**: `number` = `UINT8_SIZE`

The minimum length of a unlock conditions list.

---

### MIN_UNLOCK_CONDITION_LENGTH

• `Const` **MIN_UNLOCK_CONDITION_LENGTH**: `number`

The minimum length of a unlock conditions binary representation.

---

### MIN_ALIAS_UNLOCK_LENGTH

• `Const` **MIN_ALIAS_UNLOCK_LENGTH**: `number`

The minimum length of a alias unlock binary representation.

---

### MIN_NFT_UNLOCK_LENGTH

• `Const` **MIN_NFT_UNLOCK_LENGTH**: `number`

The minimum length of a nft unlock binary representation.

---

### MIN_REFERENCE_UNLOCK_LENGTH

• `Const` **MIN_REFERENCE_UNLOCK_LENGTH**: `number`

The minimum length of a reference unlock binary representation.

---

### MIN_SIGNATURE_UNLOCK_LENGTH

• `Const` **MIN_SIGNATURE_UNLOCK_LENGTH**: `number`

The minimum length of a signature unlock binary representation.

---

### MIN_UNLOCK_LENGTH

• `Const` **MIN_UNLOCK_LENGTH**: `number`

The minimum length of an unlock binary representation.

---

### DEFAULT_PROTOCOL_VERSION

• `Const` **DEFAULT_PROTOCOL_VERSION**: `number` = `2`

The default protocol version.

---

### TRANSACTION_ESSENCE_TYPE

• `Const` **TRANSACTION_ESSENCE_TYPE**: `1`

The global type for the transaction essence.

---

### INPUTS_COMMITMENT_SIZE

• `Const` **INPUTS_COMMITMENT_SIZE**: `number` = `Blake2b.SIZE_256`

Inputs commitment size.

---

### ALIAS_ADDRESS_TYPE

• `Const` **ALIAS_ADDRESS_TYPE**: `8`

The global type for the alias address type.

---

### ED25519_ADDRESS_TYPE

• `Const` **ED25519_ADDRESS_TYPE**: `0`

The global type for the ed25519 address type.

---

### NFT_ADDRESS_TYPE

• `Const` **NFT_ADDRESS_TYPE**: `16`

The global type for the NFT address type.

---

### ISSUER_FEATURE_TYPE

• `Const` **ISSUER_FEATURE_TYPE**: `1`

The global type for the issuer feature.

---

### METADATA_FEATURE_TYPE

• `Const` **METADATA_FEATURE_TYPE**: `2`

The global type for the metadata feature.

---

### SENDER_FEATURE_TYPE

• `Const` **SENDER_FEATURE_TYPE**: `0`

The global type for the sender feature.

---

### TAG_FEATURE_TYPE

• `Const` **TAG_FEATURE_TYPE**: `3`

The global type for the tag feature.

---

### TREASURY_INPUT_TYPE

• `Const` **TREASURY_INPUT_TYPE**: `1`

The global type for the treasury input.

---

### UTXO_INPUT_TYPE

• `Const` **UTXO_INPUT_TYPE**: `0`

The global type for the input.

---

### PROTOCOL_PARAMETERS_MILESTONE_OPTION_TYPE

• `Const` **PROTOCOL_PARAMETERS_MILESTONE_OPTION_TYPE**: `1`

The global type for the option.

---

### RECEIPT_MILESTONE_OPTION_TYPE

• `Const` **RECEIPT_MILESTONE_OPTION_TYPE**: `0`

The global type for the option.

---

### ALIAS_OUTPUT_TYPE

• `Const` **ALIAS_OUTPUT_TYPE**: `4`

The global type for the alias output.

---

### BASIC_OUTPUT_TYPE

• `Const` **BASIC_OUTPUT_TYPE**: `3`

The global type for the basic output.

---

### FOUNDRY_OUTPUT_TYPE

• `Const` **FOUNDRY_OUTPUT_TYPE**: `5`

The global type for the foundry output.

---

### NFT_OUTPUT_TYPE

• `Const` **NFT_OUTPUT_TYPE**: `6`

The global type for the NFT output.

---

### TREASURY_OUTPUT_TYPE

• `Const` **TREASURY_OUTPUT_TYPE**: `2`

The global type for the treasury output.

---

### MILESTONE_PAYLOAD_TYPE

• `Const` **MILESTONE_PAYLOAD_TYPE**: `7`

The global type for the payload.

---

### TAGGED_DATA_PAYLOAD_TYPE

• `Const` **TAGGED_DATA_PAYLOAD_TYPE**: `5`

The global type for the payload.

---

### TRANSACTION_PAYLOAD_TYPE

• `Const` **TRANSACTION_PAYLOAD_TYPE**: `6`

The global type for the payload.

---

### TREASURY_TRANSACTION_PAYLOAD_TYPE

• `Const` **TREASURY_TRANSACTION_PAYLOAD_TYPE**: `4`

The global type for the payload.

---

### ED25519_SIGNATURE_TYPE

• `Const` **ED25519_SIGNATURE_TYPE**: `0`

The global type for the signature type.

---

### SIMPLE_TOKEN_SCHEME_TYPE

• `Const` **SIMPLE_TOKEN_SCHEME_TYPE**: `0`

The global type for the simple token scheme.

---

### ADDRESS_UNLOCK_CONDITION_TYPE

• `Const` **ADDRESS_UNLOCK_CONDITION_TYPE**: `0`

The global type for the address unlock condition.

---

### EXPIRATION_UNLOCK_CONDITION_TYPE

• `Const` **EXPIRATION_UNLOCK_CONDITION_TYPE**: `3`

The global type for the expiration unlock condition.

---

### GOVERNOR_ADDRESS_UNLOCK_CONDITION_TYPE

• `Const` **GOVERNOR_ADDRESS_UNLOCK_CONDITION_TYPE**: `5`

The global type for the governor address unlock condition.

---

### IMMUTABLE_ALIAS_UNLOCK_CONDITION_TYPE

• `Const` **IMMUTABLE_ALIAS_UNLOCK_CONDITION_TYPE**: `6`

The global type for the immutable alias unlock condition.

---

### STATE_CONTROLLER_ADDRESS_UNLOCK_CONDITION_TYPE

• `Const` **STATE_CONTROLLER_ADDRESS_UNLOCK_CONDITION_TYPE**: `4`

The global type for the state controller unlock condition.

---

### STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_TYPE

• `Const` **STORAGE_DEPOSIT_RETURN_UNLOCK_CONDITION_TYPE**: `1`

The global type for the storage deposit return unlock condition.

---

### TIMELOCK_UNLOCK_CONDITION_TYPE

• `Const` **TIMELOCK_UNLOCK_CONDITION_TYPE**: `2`

The global type for the timelock unlock condition.

---

### ALIAS_UNLOCK_TYPE

• `Const` **ALIAS_UNLOCK_TYPE**: `2`

The global type for the alias unlock.

---

### NFT_UNLOCK_TYPE

• `Const` **NFT_UNLOCK_TYPE**: `3`

The global type for the NFT unlock.

---

### REFERENCE_UNLOCK_TYPE

• `Const` **REFERENCE_UNLOCK_TYPE**: `1`

The global type for the reference unlock.

---

### SIGNATURE_UNLOCK_TYPE

• `Const` **SIGNATURE_UNLOCK_TYPE**: `0`

The global type for the unlock.

---

### CONFLICT_REASON_STRINGS

• `Const` **CONFLICT_REASON_STRINGS**: { [key in ConflictReason]: string }

Conflict reason strings.

---

### ED25519_SEED_TYPE

• `Const` **ED25519_SEED_TYPE**: `number` = `1`

The global type for the seed.

## Functions

### deserializeAddress

▸ **deserializeAddress**(`readStream`): [`AddressTypes`](api_ref.md#addresstypes)

Deserialize the address from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`AddressTypes`](api_ref.md#addresstypes)

The deserialized object.

---

### serializeAddress

▸ **serializeAddress**(`writeStream`, `object`): `void`

Serialize the address to binary.

#### Parameters

| Name          | Type                                              | Description                      |
| :------------ | :------------------------------------------------ | :------------------------------- |
| `writeStream` | `WriteStream`                                     | The stream to write the data to. |
| `object`      | [`ITypeBase`](interfaces/ITypeBase.md)<`number`\> | The object to serialize.         |

#### Returns

`void`

---

### deserializeAliasAddress

▸ **deserializeAliasAddress**(`readStream`): [`IAliasAddress`](interfaces/IAliasAddress.md)

Deserialize the alias address from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IAliasAddress`](interfaces/IAliasAddress.md)

The deserialized object.

---

### serializeAliasAddress

▸ **serializeAliasAddress**(`writeStream`, `object`): `void`

Serialize the alias address to binary.

#### Parameters

| Name          | Type                                           | Description                      |
| :------------ | :--------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                  | The stream to write the data to. |
| `object`      | [`IAliasAddress`](interfaces/IAliasAddress.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeEd25519Address

▸ **deserializeEd25519Address**(`readStream`): [`IEd25519Address`](interfaces/IEd25519Address.md)

Deserialize the Ed25519 address from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IEd25519Address`](interfaces/IEd25519Address.md)

The deserialized object.

---

### serializeEd25519Address

▸ **serializeEd25519Address**(`writeStream`, `object`): `void`

Serialize the ed25519 address to binary.

#### Parameters

| Name          | Type                                               | Description                      |
| :------------ | :------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                      | The stream to write the data to. |
| `object`      | [`IEd25519Address`](interfaces/IEd25519Address.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeNftAddress

▸ **deserializeNftAddress**(`readStream`): [`INftAddress`](interfaces/INftAddress.md)

Deserialize the nft address from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`INftAddress`](interfaces/INftAddress.md)

The deserialized object.

---

### serializeNftAddress

▸ **serializeNftAddress**(`writeStream`, `object`): `void`

Serialize the nft address to binary.

#### Parameters

| Name          | Type                                       | Description                      |
| :------------ | :----------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                              | The stream to write the data to. |
| `object`      | [`INftAddress`](interfaces/INftAddress.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeBlock

▸ **deserializeBlock**(`readStream`): [`IBlock`](interfaces/IBlock.md)

Deserialize the block from binary.

#### Parameters

| Name         | Type         | Description               |
| :----------- | :----------- | :------------------------ |
| `readStream` | `ReadStream` | The block to deserialize. |

#### Returns

[`IBlock`](interfaces/IBlock.md)

The deserialized block.

---

### serializeBlock

▸ **serializeBlock**(`writeStream`, `object`): `void`

Serialize the block essence to binary.

#### Parameters

| Name          | Type                             | Description                      |
| :------------ | :------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                    | The stream to write the data to. |
| `object`      | [`IBlock`](interfaces/IBlock.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeFeatures

▸ **deserializeFeatures**(`readStream`): [`FeatureTypes`](api_ref.md#featuretypes)[] \| `undefined`

Deserialize the feature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`FeatureTypes`](api_ref.md#featuretypes)[] \| `undefined`

The deserialized object.

---

### serializeFeatures

▸ **serializeFeatures**(`writeStream`, `objects`): `void`

Serialize the feature to binary.

#### Parameters

| Name          | Type                                                       | Description                      |
| :------------ | :--------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                              | The stream to write the data to. |
| `objects`     | `undefined` \| [`FeatureTypes`](api_ref.md#featuretypes)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeFeature

▸ **deserializeFeature**(`readStream`): [`FeatureTypes`](api_ref.md#featuretypes)

Deserialize the feature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`FeatureTypes`](api_ref.md#featuretypes)

The deserialized object.

---

### serializeFeature

▸ **serializeFeature**(`writeStream`, `object`): `void`

Serialize the feature to binary.

#### Parameters

| Name          | Type                                              | Description                      |
| :------------ | :------------------------------------------------ | :------------------------------- |
| `writeStream` | `WriteStream`                                     | The stream to write the data to. |
| `object`      | [`ITypeBase`](interfaces/ITypeBase.md)<`number`\> | The object to serialize.         |

#### Returns

`void`

---

### deserializeIssuerFeature

▸ **deserializeIssuerFeature**(`readStream`): [`IIssuerFeature`](interfaces/IIssuerFeature.md)

Deserialize the issuer feature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IIssuerFeature`](interfaces/IIssuerFeature.md)

The deserialized object.

---

### serializeIssuerFeature

▸ **serializeIssuerFeature**(`writeStream`, `object`): `void`

Serialize the issuer feature to binary.

#### Parameters

| Name          | Type                                             | Description                      |
| :------------ | :----------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                    | The stream to write the data to. |
| `object`      | [`IIssuerFeature`](interfaces/IIssuerFeature.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeMetadataFeature

▸ **deserializeMetadataFeature**(`readStream`): [`IMetadataFeature`](interfaces/IMetadataFeature.md)

Deserialize the metadata feature block from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IMetadataFeature`](interfaces/IMetadataFeature.md)

The deserialized object.

---

### serializeMetadataFeature

▸ **serializeMetadataFeature**(`writeStream`, `object`): `void`

Serialize the metadata feature to binary.

#### Parameters

| Name          | Type                                                 | Description                      |
| :------------ | :--------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                        | The stream to write the data to. |
| `object`      | [`IMetadataFeature`](interfaces/IMetadataFeature.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeSenderFeature

▸ **deserializeSenderFeature**(`readStream`): [`ISenderFeature`](interfaces/ISenderFeature.md)

Deserialize the sender feature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ISenderFeature`](interfaces/ISenderFeature.md)

The deserialized object.

---

### serializeSenderFeature

▸ **serializeSenderFeature**(`writeStream`, `object`): `void`

Serialize the sender feature to binary.

#### Parameters

| Name          | Type                                             | Description                      |
| :------------ | :----------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                    | The stream to write the data to. |
| `object`      | [`ISenderFeature`](interfaces/ISenderFeature.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTagFeature

▸ **deserializeTagFeature**(`readStream`): [`ITagFeature`](interfaces/ITagFeature.md)

Deserialize the tag feature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITagFeature`](interfaces/ITagFeature.md)

The deserialized object.

---

### serializeTagFeature

▸ **serializeTagFeature**(`writeStream`, `object`): `void`

Serialize the tag feature to binary.

#### Parameters

| Name          | Type                                       | Description                      |
| :------------ | :----------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                              | The stream to write the data to. |
| `object`      | [`ITagFeature`](interfaces/ITagFeature.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeFunds

▸ **deserializeFunds**(`readStream`): [`IMigratedFunds`](interfaces/IMigratedFunds.md)[]

Deserialize the receipt payload funds from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IMigratedFunds`](interfaces/IMigratedFunds.md)[]

The deserialized object.

---

### serializeFunds

▸ **serializeFunds**(`writeStream`, `objects`): `void`

Serialize the receipt payload funds to binary.

#### Parameters

| Name          | Type                                               | Description                      |
| :------------ | :------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                      | The stream to write the data to. |
| `objects`     | [`IMigratedFunds`](interfaces/IMigratedFunds.md)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeMigratedFunds

▸ **deserializeMigratedFunds**(`readStream`): [`IMigratedFunds`](interfaces/IMigratedFunds.md)

Deserialize the migrated fund from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IMigratedFunds`](interfaces/IMigratedFunds.md)

The deserialized object.

---

### serializeMigratedFunds

▸ **serializeMigratedFunds**(`writeStream`, `object`): `void`

Serialize the migrated funds to binary.

#### Parameters

| Name          | Type                                             | Description                      |
| :------------ | :----------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                    | The stream to write the data to. |
| `object`      | [`IMigratedFunds`](interfaces/IMigratedFunds.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeInputs

▸ **deserializeInputs**(`readStream`): [`InputTypes`](api_ref.md#inputtypes)[]

Deserialize the inputs from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`InputTypes`](api_ref.md#inputtypes)[]

The deserialized object.

---

### serializeInputs

▸ **serializeInputs**(`writeStream`, `objects`): `void`

Serialize the inputs to binary.

#### Parameters

| Name          | Type                                    | Description                      |
| :------------ | :-------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                           | The stream to write the data to. |
| `objects`     | [`InputTypes`](api_ref.md#inputtypes)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeInput

▸ **deserializeInput**(`readStream`): [`InputTypes`](api_ref.md#inputtypes)

Deserialize the input from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`InputTypes`](api_ref.md#inputtypes)

The deserialized object.

---

### serializeInput

▸ **serializeInput**(`writeStream`, `object`): `void`

Serialize the input to binary.

#### Parameters

| Name          | Type                                  | Description                      |
| :------------ | :------------------------------------ | :------------------------------- |
| `writeStream` | `WriteStream`                         | The stream to write the data to. |
| `object`      | [`InputTypes`](api_ref.md#inputtypes) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTreasuryInput

▸ **deserializeTreasuryInput**(`readStream`): [`ITreasuryInput`](interfaces/ITreasuryInput.md)

Deserialize the treasury input from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITreasuryInput`](interfaces/ITreasuryInput.md)

The deserialized object.

---

### serializeTreasuryInput

▸ **serializeTreasuryInput**(`writeStream`, `object`): `void`

Serialize the treasury input to binary.

#### Parameters

| Name          | Type                                             | Description                      |
| :------------ | :----------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                    | The stream to write the data to. |
| `object`      | [`ITreasuryInput`](interfaces/ITreasuryInput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeUTXOInput

▸ **deserializeUTXOInput**(`readStream`): [`IUTXOInput`](interfaces/IUTXOInput.md)

Deserialize the utxo input from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IUTXOInput`](interfaces/IUTXOInput.md)

The deserialized object.

---

### serializeUTXOInput

▸ **serializeUTXOInput**(`writeStream`, `object`): `void`

Serialize the utxo input to binary.

#### Parameters

| Name          | Type                                     | Description                      |
| :------------ | :--------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                            | The stream to write the data to. |
| `object`      | [`IUTXOInput`](interfaces/IUTXOInput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeMilestoneOptions

▸ **deserializeMilestoneOptions**(`readStream`): [`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes)[]

Deserialize the milestone options from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes)[]

The deserialized object.

---

### serializeMilestoneOptions

▸ **serializeMilestoneOptions**(`writeStream`, `objects`): `void`

Serialize the milestone options to binary.

#### Parameters

| Name          | Type                                                        | Description                      |
| :------------ | :---------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                               | The stream to write the data to. |
| `objects`     | [`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeMilestoneOption

▸ **deserializeMilestoneOption**(`readStream`): [`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes)

Deserialize the milestone options from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes)

The deserialized object.

---

### serializeMilestoneOption

▸ **serializeMilestoneOption**(`writeStream`, `object`): `void`

Serialize the milestone option to binary.

#### Parameters

| Name          | Type                                              | Description                      |
| :------------ | :------------------------------------------------ | :------------------------------- |
| `writeStream` | `WriteStream`                                     | The stream to write the data to. |
| `object`      | [`ITypeBase`](interfaces/ITypeBase.md)<`number`\> | The object to serialize.         |

#### Returns

`void`

---

### deserializeProtocolParamsMilestoneOption

▸ **deserializeProtocolParamsMilestoneOption**(`readStream`): [`IProtocolParamsMilestoneOption`](interfaces/IProtocolParamsMilestoneOption.md)

Deserialize the protocol params milestone option from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IProtocolParamsMilestoneOption`](interfaces/IProtocolParamsMilestoneOption.md)

The deserialized object.

---

### serializeProtocolParamsMilestoneOption

▸ **serializeProtocolParamsMilestoneOption**(`writeStream`, `object`): `void`

Serialize the protocol params milestone option to binary.

#### Parameters

| Name          | Type                                                                             | Description                      |
| :------------ | :------------------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                                    | The stream to write the data to. |
| `object`      | [`IProtocolParamsMilestoneOption`](interfaces/IProtocolParamsMilestoneOption.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeReceiptMilestoneOption

▸ **deserializeReceiptMilestoneOption**(`readStream`): [`IReceiptMilestoneOption`](interfaces/IReceiptMilestoneOption.md)

Deserialize the receipt milestone option from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IReceiptMilestoneOption`](interfaces/IReceiptMilestoneOption.md)

The deserialized object.

---

### serializeReceiptMilestoneOption

▸ **serializeReceiptMilestoneOption**(`writeStream`, `object`): `void`

Serialize the receipt milestone option to binary.

#### Parameters

| Name          | Type                                                               | Description                      |
| :------------ | :----------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                      | The stream to write the data to. |
| `object`      | [`IReceiptMilestoneOption`](interfaces/IReceiptMilestoneOption.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeAliasOutput

▸ **deserializeAliasOutput**(`readStream`): [`IAliasOutput`](interfaces/IAliasOutput.md)

Deserialize the alias output from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IAliasOutput`](interfaces/IAliasOutput.md)

The deserialized object.

---

### serializeAliasOutput

▸ **serializeAliasOutput**(`writeStream`, `object`): `void`

Serialize the alias output to binary.

#### Parameters

| Name          | Type                                         | Description                      |
| :------------ | :------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                | The stream to write the data to. |
| `object`      | [`IAliasOutput`](interfaces/IAliasOutput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeBasicOutput

▸ **deserializeBasicOutput**(`readStream`): [`IBasicOutput`](interfaces/IBasicOutput.md)

Deserialize the basic output from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IBasicOutput`](interfaces/IBasicOutput.md)

The deserialized object.

---

### serializeBasicOutput

▸ **serializeBasicOutput**(`writeStream`, `object`): `void`

Serialize the basic output to binary.

#### Parameters

| Name          | Type                                         | Description                      |
| :------------ | :------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                | The stream to write the data to. |
| `object`      | [`IBasicOutput`](interfaces/IBasicOutput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeFoundryOutput

▸ **deserializeFoundryOutput**(`readStream`): [`IFoundryOutput`](interfaces/IFoundryOutput.md)

Deserialize the foundry output from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IFoundryOutput`](interfaces/IFoundryOutput.md)

The deserialized object.

---

### serializeFoundryOutput

▸ **serializeFoundryOutput**(`writeStream`, `object`): `void`

Serialize the foundry output to binary.

#### Parameters

| Name          | Type                                             | Description                      |
| :------------ | :----------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                    | The stream to write the data to. |
| `object`      | [`IFoundryOutput`](interfaces/IFoundryOutput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeNftOutput

▸ **deserializeNftOutput**(`readStream`): [`INftOutput`](interfaces/INftOutput.md)

Deserialize the nft output from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`INftOutput`](interfaces/INftOutput.md)

The deserialized object.

---

### serializeNftOutput

▸ **serializeNftOutput**(`writeStream`, `object`): `void`

Serialize the nft output to binary.

#### Parameters

| Name          | Type                                     | Description                      |
| :------------ | :--------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                            | The stream to write the data to. |
| `object`      | [`INftOutput`](interfaces/INftOutput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeOutputs

▸ **deserializeOutputs**(`readStream`): [`OutputTypes`](api_ref.md#outputtypes)[]

Deserialize the outputs from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`OutputTypes`](api_ref.md#outputtypes)[]

The deserialized object.

---

### serializeOutputs

▸ **serializeOutputs**(`writeStream`, `objects`): `void`

Serialize the outputs to binary.

#### Parameters

| Name          | Type                                      | Description                      |
| :------------ | :---------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                             | The stream to write the data to. |
| `objects`     | [`OutputTypes`](api_ref.md#outputtypes)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeOutput

▸ **deserializeOutput**(`readStream`): [`OutputTypes`](api_ref.md#outputtypes)

Deserialize the output from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`OutputTypes`](api_ref.md#outputtypes)

The deserialized object.

---

### serializeOutput

▸ **serializeOutput**(`writeStream`, `object`): `void`

Serialize the output to binary.

#### Parameters

| Name          | Type                                              | Description                      |
| :------------ | :------------------------------------------------ | :------------------------------- |
| `writeStream` | `WriteStream`                                     | The stream to write the data to. |
| `object`      | [`ITypeBase`](interfaces/ITypeBase.md)<`number`\> | The object to serialize.         |

#### Returns

`void`

---

### deserializeTreasuryOutput

▸ **deserializeTreasuryOutput**(`readStream`): [`ITreasuryOutput`](interfaces/ITreasuryOutput.md)

Deserialize the treasury output from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITreasuryOutput`](interfaces/ITreasuryOutput.md)

The deserialized object.

---

### serializeTreasuryOutput

▸ **serializeTreasuryOutput**(`writeStream`, `object`): `void`

Serialize the treasury output to binary.

#### Parameters

| Name          | Type                                               | Description                      |
| :------------ | :------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                      | The stream to write the data to. |
| `object`      | [`ITreasuryOutput`](interfaces/ITreasuryOutput.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeMilestonePayload

▸ **deserializeMilestonePayload**(`readStream`): [`IMilestonePayload`](interfaces/IMilestonePayload.md)

Deserialize the milestone payload from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IMilestonePayload`](interfaces/IMilestonePayload.md)

The deserialized object.

---

### serializeMilestonePayload

▸ **serializeMilestonePayload**(`writeStream`, `object`): `void`

Serialize the milestone payload to binary.

#### Parameters

| Name          | Type                                                   | Description                      |
| :------------ | :----------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                          | The stream to write the data to. |
| `object`      | [`IMilestonePayload`](interfaces/IMilestonePayload.md) | The object to serialize.         |

#### Returns

`void`

---

### serializeMilestoneEssence

▸ **serializeMilestoneEssence**(`writeStream`, `object`): `void`

Serialize the milestone payload to binary.

#### Parameters

| Name          | Type                                                   | Description                      |
| :------------ | :----------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                          | The stream to write the data to. |
| `object`      | [`IMilestonePayload`](interfaces/IMilestonePayload.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializePayload

▸ **deserializePayload**(`readStream`): [`PayloadTypes`](api_ref.md#payloadtypes) \| `undefined`

Deserialize the payload from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`PayloadTypes`](api_ref.md#payloadtypes) \| `undefined`

The deserialized object.

---

### serializePayload

▸ **serializePayload**(`writeStream`, `object`): `void`

Serialize the payload essence to binary.

#### Parameters

| Name          | Type                                                     | Description                      |
| :------------ | :------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                            | The stream to write the data to. |
| `object`      | `undefined` \| [`PayloadTypes`](api_ref.md#payloadtypes) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTaggedDataPayload

▸ **deserializeTaggedDataPayload**(`readStream`): [`ITaggedDataPayload`](interfaces/ITaggedDataPayload.md)

Deserialize the tagged data payload from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITaggedDataPayload`](interfaces/ITaggedDataPayload.md)

The deserialized object.

---

### serializeTaggedDataPayload

▸ **serializeTaggedDataPayload**(`writeStream`, `object`): `void`

Serialize the tagged data payload to binary.

#### Parameters

| Name          | Type                                                     | Description                      |
| :------------ | :------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                            | The stream to write the data to. |
| `object`      | [`ITaggedDataPayload`](interfaces/ITaggedDataPayload.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTransactionPayload

▸ **deserializeTransactionPayload**(`readStream`): [`ITransactionPayload`](interfaces/ITransactionPayload.md)

Deserialize the transaction payload from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITransactionPayload`](interfaces/ITransactionPayload.md)

The deserialized object.

---

### serializeTransactionPayload

▸ **serializeTransactionPayload**(`writeStream`, `object`): `void`

Serialize the transaction payload to binary.

#### Parameters

| Name          | Type                                                       | Description                      |
| :------------ | :--------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                              | The stream to write the data to. |
| `object`      | [`ITransactionPayload`](interfaces/ITransactionPayload.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTreasuryTransactionPayload

▸ **deserializeTreasuryTransactionPayload**(`readStream`): [`ITreasuryTransactionPayload`](interfaces/ITreasuryTransactionPayload.md)

Deserialize the treasury transaction payload from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITreasuryTransactionPayload`](interfaces/ITreasuryTransactionPayload.md)

The deserialized object.

---

### serializeTreasuryTransactionPayload

▸ **serializeTreasuryTransactionPayload**(`writeStream`, `object`): `void`

Serialize the treasury transaction payload to binary.

#### Parameters

| Name          | Type                                                                       | Description                      |
| :------------ | :------------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                              | The stream to write the data to. |
| `object`      | [`ITreasuryTransactionPayload`](interfaces/ITreasuryTransactionPayload.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeEd25519Signature

▸ **deserializeEd25519Signature**(`readStream`): [`IEd25519Signature`](interfaces/IEd25519Signature.md)

Deserialize the Ed25519 signature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IEd25519Signature`](interfaces/IEd25519Signature.md)

The deserialized object.

---

### serializeEd25519Signature

▸ **serializeEd25519Signature**(`writeStream`, `object`): `void`

Serialize the Ed25519 signature to binary.

#### Parameters

| Name          | Type                                                   | Description                      |
| :------------ | :----------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                          | The stream to write the data to. |
| `object`      | [`IEd25519Signature`](interfaces/IEd25519Signature.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeSignature

▸ **deserializeSignature**(`readStream`): [`SignatureTypes`](api_ref.md#signaturetypes)

Deserialize the signature from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`SignatureTypes`](api_ref.md#signaturetypes)

The deserialized object.

---

### serializeSignature

▸ **serializeSignature**(`writeStream`, `object`): `void`

Serialize the signature to binary.

#### Parameters

| Name          | Type                                                   | Description                      |
| :------------ | :----------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                          | The stream to write the data to. |
| `object`      | [`IEd25519Signature`](interfaces/IEd25519Signature.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeSimpleTokenScheme

▸ **deserializeSimpleTokenScheme**(`readStream`): [`ISimpleTokenScheme`](interfaces/ISimpleTokenScheme.md)

Deserialize the simple token scheme from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ISimpleTokenScheme`](interfaces/ISimpleTokenScheme.md)

The deserialized object.

---

### serializeSimpleTokenScheme

▸ **serializeSimpleTokenScheme**(`writeStream`, `object`): `void`

Serialize the simple token scheme to binary.

#### Parameters

| Name          | Type                                                     | Description                      |
| :------------ | :------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                            | The stream to write the data to. |
| `object`      | [`ISimpleTokenScheme`](interfaces/ISimpleTokenScheme.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTokenScheme

▸ **deserializeTokenScheme**(`readStream`): [`TokenSchemeTypes`](api_ref.md#tokenschemetypes)

Deserialize the token scheme from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`TokenSchemeTypes`](api_ref.md#tokenschemetypes)

The deserialized object.

---

### serializeTokenScheme

▸ **serializeTokenScheme**(`writeStream`, `object`): `void`

Serialize the token scheme to binary.

#### Parameters

| Name          | Type                                                     | Description                      |
| :------------ | :------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                            | The stream to write the data to. |
| `object`      | [`ISimpleTokenScheme`](interfaces/ISimpleTokenScheme.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTransactionEssence

▸ **deserializeTransactionEssence**(`readStream`): [`ITransactionEssence`](interfaces/ITransactionEssence.md)

Deserialize the transaction essence from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITransactionEssence`](interfaces/ITransactionEssence.md)

The deserialized object.

---

### serializeTransactionEssence

▸ **serializeTransactionEssence**(`writeStream`, `object`): `void`

Serialize the transaction essence to binary.

#### Parameters

| Name          | Type                                                       | Description                      |
| :------------ | :--------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                              | The stream to write the data to. |
| `object`      | [`ITransactionEssence`](interfaces/ITransactionEssence.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeAddressUnlockCondition

▸ **deserializeAddressUnlockCondition**(`readStream`): [`IAddressUnlockCondition`](interfaces/IAddressUnlockCondition.md)

Deserialize the address unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IAddressUnlockCondition`](interfaces/IAddressUnlockCondition.md)

The deserialized object.

---

### serializeAddressUnlockCondition

▸ **serializeAddressUnlockCondition**(`writeStream`, `object`): `void`

Serialize the address unlock condition to binary.

#### Parameters

| Name          | Type                                                               | Description                      |
| :------------ | :----------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                      | The stream to write the data to. |
| `object`      | [`IAddressUnlockCondition`](interfaces/IAddressUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeExpirationUnlockCondition

▸ **deserializeExpirationUnlockCondition**(`readStream`): [`IExpirationUnlockCondition`](interfaces/IExpirationUnlockCondition.md)

Deserialize the expiration unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IExpirationUnlockCondition`](interfaces/IExpirationUnlockCondition.md)

The deserialized object.

---

### serializeExpirationUnlockCondition

▸ **serializeExpirationUnlockCondition**(`writeStream`, `object`): `void`

Serialize the expiration unlock condition to binary.

#### Parameters

| Name          | Type                                                                     | Description                      |
| :------------ | :----------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                            | The stream to write the data to. |
| `object`      | [`IExpirationUnlockCondition`](interfaces/IExpirationUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeGovernorAddressUnlockCondition

▸ **deserializeGovernorAddressUnlockCondition**(`readStream`): [`IGovernorAddressUnlockCondition`](interfaces/IGovernorAddressUnlockCondition.md)

Deserialize the governor address unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IGovernorAddressUnlockCondition`](interfaces/IGovernorAddressUnlockCondition.md)

The deserialized object.

---

### serializeGovernorAddressUnlockCondition

▸ **serializeGovernorAddressUnlockCondition**(`writeStream`, `object`): `void`

Serialize the governor address unlock condition to binary.

#### Parameters

| Name          | Type                                                                               | Description                      |
| :------------ | :--------------------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                                      | The stream to write the data to. |
| `object`      | [`IGovernorAddressUnlockCondition`](interfaces/IGovernorAddressUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeImmutableAliasUnlockCondition

▸ **deserializeImmutableAliasUnlockCondition**(`readStream`): [`IImmutableAliasUnlockCondition`](interfaces/IImmutableAliasUnlockCondition.md)

Deserialize the immutable alias unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IImmutableAliasUnlockCondition`](interfaces/IImmutableAliasUnlockCondition.md)

The deserialized object.

---

### serializeImmutableAliasUnlockCondition

▸ **serializeImmutableAliasUnlockCondition**(`writeStream`, `object`): `void`

Serialize the immutable alias unlock condition to binary.

#### Parameters

| Name          | Type                                                                             | Description                      |
| :------------ | :------------------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                                    | The stream to write the data to. |
| `object`      | [`IImmutableAliasUnlockCondition`](interfaces/IImmutableAliasUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeStateControllerAddressUnlockCondition

▸ **deserializeStateControllerAddressUnlockCondition**(`readStream`): [`IStateControllerAddressUnlockCondition`](interfaces/IStateControllerAddressUnlockCondition.md)

Deserialize the state controller address unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IStateControllerAddressUnlockCondition`](interfaces/IStateControllerAddressUnlockCondition.md)

The deserialized object.

---

### serializeStateControllerAddressUnlockCondition

▸ **serializeStateControllerAddressUnlockCondition**(`writeStream`, `object`): `void`

Serialize the state controller address unlock condition to binary.

#### Parameters

| Name          | Type                                                                                             | Description                      |
| :------------ | :----------------------------------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                                                    | The stream to write the data to. |
| `object`      | [`IStateControllerAddressUnlockCondition`](interfaces/IStateControllerAddressUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeStorageDepositReturnUnlockCondition

▸ **deserializeStorageDepositReturnUnlockCondition**(`readStream`): [`IStorageDepositReturnUnlockCondition`](interfaces/IStorageDepositReturnUnlockCondition.md)

Deserialize the storage deposit return unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IStorageDepositReturnUnlockCondition`](interfaces/IStorageDepositReturnUnlockCondition.md)

The deserialized object.

---

### serializeStorageDepositReturnUnlockCondition

▸ **serializeStorageDepositReturnUnlockCondition**(`writeStream`, `object`): `void`

Serialize the storage deposit return unlock condition to binary.

#### Parameters

| Name          | Type                                                                                         | Description                      |
| :------------ | :------------------------------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                                                | The stream to write the data to. |
| `object`      | [`IStorageDepositReturnUnlockCondition`](interfaces/IStorageDepositReturnUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeTimelockUnlockCondition

▸ **deserializeTimelockUnlockCondition**(`readStream`): [`ITimelockUnlockCondition`](interfaces/ITimelockUnlockCondition.md)

Deserialize the timelock unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ITimelockUnlockCondition`](interfaces/ITimelockUnlockCondition.md)

The deserialized object.

---

### serializeTimelockUnlockCondition

▸ **serializeTimelockUnlockCondition**(`writeStream`, `object`): `void`

Serialize the timelock unlock condition to binary.

#### Parameters

| Name          | Type                                                                 | Description                      |
| :------------ | :------------------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                                        | The stream to write the data to. |
| `object`      | [`ITimelockUnlockCondition`](interfaces/ITimelockUnlockCondition.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeUnlockConditions

▸ **deserializeUnlockConditions**(`readStream`): [`UnlockConditionTypes`](api_ref.md#unlockconditiontypes)[]

Deserialize the unlock conditions from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`UnlockConditionTypes`](api_ref.md#unlockconditiontypes)[]

The deserialized object.

---

### serializeUnlockConditions

▸ **serializeUnlockConditions**(`writeStream`, `objects`): `void`

Serialize the unlock conditions to binary.

#### Parameters

| Name          | Type                                                        | Description                      |
| :------------ | :---------------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                               | The stream to write the data to. |
| `objects`     | [`UnlockConditionTypes`](api_ref.md#unlockconditiontypes)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeUnlockCondition

▸ **deserializeUnlockCondition**(`readStream`): [`UnlockConditionTypes`](api_ref.md#unlockconditiontypes)

Deserialize the unlock condition from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`UnlockConditionTypes`](api_ref.md#unlockconditiontypes)

The deserialized object.

---

### serializeUnlockCondition

▸ **serializeUnlockCondition**(`writeStream`, `object`): `void`

Serialize the unlock condition to binary.

#### Parameters

| Name          | Type                                              | Description                      |
| :------------ | :------------------------------------------------ | :------------------------------- |
| `writeStream` | `WriteStream`                                     | The stream to write the data to. |
| `object`      | [`ITypeBase`](interfaces/ITypeBase.md)<`number`\> | The object to serialize.         |

#### Returns

`void`

---

### deserializeAliasUnlock

▸ **deserializeAliasUnlock**(`readStream`): [`IAliasUnlock`](interfaces/IAliasUnlock.md)

Deserialize the alias unlock from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IAliasUnlock`](interfaces/IAliasUnlock.md)

The deserialized object.

---

### serializeAliasUnlock

▸ **serializeAliasUnlock**(`writeStream`, `object`): `void`

Serialize the alias unlock to binary.

#### Parameters

| Name          | Type                                         | Description                      |
| :------------ | :------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                | The stream to write the data to. |
| `object`      | [`IAliasUnlock`](interfaces/IAliasUnlock.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeNftUnlock

▸ **deserializeNftUnlock**(`readStream`): [`INftUnlock`](interfaces/INftUnlock.md)

Deserialize the nft unlock from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`INftUnlock`](interfaces/INftUnlock.md)

The deserialized object.

---

### serializeNftUnlock

▸ **serializeNftUnlock**(`writeStream`, `object`): `void`

Serialize the nft unlock to binary.

#### Parameters

| Name          | Type                                     | Description                      |
| :------------ | :--------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                            | The stream to write the data to. |
| `object`      | [`INftUnlock`](interfaces/INftUnlock.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeReferenceUnlock

▸ **deserializeReferenceUnlock**(`readStream`): [`IReferenceUnlock`](interfaces/IReferenceUnlock.md)

Deserialize the reference unlock from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`IReferenceUnlock`](interfaces/IReferenceUnlock.md)

The deserialized object.

---

### serializeReferenceUnlock

▸ **serializeReferenceUnlock**(`writeStream`, `object`): `void`

Serialize the reference unlock to binary.

#### Parameters

| Name          | Type                                                 | Description                      |
| :------------ | :--------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                        | The stream to write the data to. |
| `object`      | [`IReferenceUnlock`](interfaces/IReferenceUnlock.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeSignatureUnlock

▸ **deserializeSignatureUnlock**(`readStream`): [`ISignatureUnlock`](interfaces/ISignatureUnlock.md)

Deserialize the signature unlock from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`ISignatureUnlock`](interfaces/ISignatureUnlock.md)

The deserialized object.

---

### serializeSignatureUnlock

▸ **serializeSignatureUnlock**(`writeStream`, `object`): `void`

Serialize the signature unlock to binary.

#### Parameters

| Name          | Type                                                 | Description                      |
| :------------ | :--------------------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                                        | The stream to write the data to. |
| `object`      | [`ISignatureUnlock`](interfaces/ISignatureUnlock.md) | The object to serialize.         |

#### Returns

`void`

---

### deserializeUnlocks

▸ **deserializeUnlocks**(`readStream`): [`UnlockTypes`](api_ref.md#unlocktypes)[]

Deserialize the unlocks from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`UnlockTypes`](api_ref.md#unlocktypes)[]

The deserialized object.

---

### serializeUnlocks

▸ **serializeUnlocks**(`writeStream`, `objects`): `void`

Serialize the unlocks to binary.

#### Parameters

| Name          | Type                                      | Description                      |
| :------------ | :---------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                             | The stream to write the data to. |
| `objects`     | [`UnlockTypes`](api_ref.md#unlocktypes)[] | The objects to serialize.        |

#### Returns

`void`

---

### deserializeUnlock

▸ **deserializeUnlock**(`readStream`): [`UnlockTypes`](api_ref.md#unlocktypes)

Deserialize the unlock from binary.

#### Parameters

| Name         | Type         | Description                       |
| :----------- | :----------- | :-------------------------------- |
| `readStream` | `ReadStream` | The stream to read the data from. |

#### Returns

[`UnlockTypes`](api_ref.md#unlocktypes)

The deserialized object.

---

### serializeUnlock

▸ **serializeUnlock**(`writeStream`, `object`): `void`

Serialize the unlock to binary.

#### Parameters

| Name          | Type                                    | Description                      |
| :------------ | :-------------------------------------- | :------------------------------- |
| `writeStream` | `WriteStream`                           | The stream to write the data to. |
| `object`      | [`UnlockTypes`](api_ref.md#unlocktypes) | The object to serialize.         |

#### Returns

`void`

---

### addressBalance

▸ **addressBalance**(`client`, `addressBech32`): `Promise`<{}\>

Get the balance for an address.

#### Parameters

| Name            | Type                                           | Description                                              |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------- |
| `client`        | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to get the information from. |
| `addressBech32` | `string`                                       | The address to get the balances for.                     |

#### Returns

`Promise`<{}\>

The balance.

---

### generateBip44Path

▸ **generateBip44Path**(`accountIndex`, `addressIndex`, `isInternal`): `Bip32Path`

Generate a bip44 path based on all its parts.

#### Parameters

| Name           | Type      | Description                  |
| :------------- | :-------- | :--------------------------- |
| `accountIndex` | `number`  | The account index.           |
| `addressIndex` | `number`  | The address index.           |
| `isInternal`   | `boolean` | Is this an internal address. |

#### Returns

`Bip32Path`

The generated address.

---

### generateBip44Address

▸ **generateBip44Address**(`generatorState`): `string`

Generate addresses based on the account indexing style.

#### Parameters

| Name             | Type                                                         | Description        |
| :--------------- | :----------------------------------------------------------- | :----------------- |
| `generatorState` | [`IBip44GeneratorState`](interfaces/IBip44GeneratorState.md) | The address state. |

#### Returns

`string`

The key pair for the address.

---

### getBalance

▸ **getBalance**(`client`, `seed`, `accountIndex`, `addressOptions?`): `Promise`<`BigInteger`\>

Get the balance for a list of addresses.

#### Parameters

| Name              | Type                                           | Description                                                 |
| :---------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.      |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed.                                                   |
| `accountIndex`    | `number`                                       | The account index in the wallet.                            |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups. |

#### Returns

`Promise`<`BigInteger`\>

The balance.

---

### getUnspentAddress

▸ **getUnspentAddress**(`client`, `seed`, `accountIndex`, `addressOptions?`): `Promise`<{} \| `undefined`\>

Get the first unspent address.

#### Parameters

| Name              | Type                                           | Description                                                 |
| :---------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.      |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                     |
| `accountIndex`    | `number`                                       | The account index in the wallet.                            |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups. |

#### Returns

`Promise`<{} \| `undefined`\>

The first unspent address.

---

### getUnspentAddresses

▸ **getUnspentAddresses**(`client`, `seed`, `accountIndex`, `addressOptions?`): `Promise`<{}[]\>

Get all the unspent addresses.

#### Parameters

| Name              | Type                                           | Description                                                 |
| :---------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.      |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                     |
| `accountIndex`    | `number`                                       | The account index in the wallet.                            |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups. |

#### Returns

`Promise`<{}[]\>

All the unspent addresses.

---

### getUnspentAddressesWithAddressGenerator

▸ **getUnspentAddressesWithAddressGenerator**<`T`\>(`client`, `seed`, `initialAddressState`, `nextAddressPath`, `addressOptions?`): `Promise`<{}[]\>

Get all the unspent addresses using an address generator.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                  | Type                                           | Description                                                 |
| :-------------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| `client`              | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to get the addresses from.      |
| `seed`                | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                     |
| `initialAddressState` | `T`                                            | The initial address state for calculating the addresses.    |
| `nextAddressPath`     | (`addressState`: `T`) => `string`              | Calculate the next address for inputs.                      |
| `addressOptions?`     | `Object`                                       | Optional address configuration for balance address lookups. |

#### Returns

`Promise`<{}[]\>

All the unspent addresses.

---

### promote

▸ **promote**(`client`, `blockId`): `Promise`<{}\>

Promote an existing block.

#### Parameters

| Name      | Type                                           | Description                                             |
| :-------- | :--------------------------------------------- | :------------------------------------------------------ |
| `client`  | `string` \| [`IClient`](interfaces/IClient.md) | The clientor node endpoint to perform the promote with. |
| `blockId` | `string`                                       | The block to promote.                                   |

#### Returns

`Promise`<{}\>

The id and block that were promoted.

---

### reattach

▸ **reattach**(`client`, `blockId`): `Promise`<{}\>

Reattach an existing block.

#### Parameters

| Name      | Type                                           | Description                                               |
| :-------- | :--------------------------------------------- | :-------------------------------------------------------- |
| `client`  | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to perform the reattach with. |
| `blockId` | `string`                                       | The block to reattach.                                    |

#### Returns

`Promise`<{}\>

The id and block that were reattached.

---

### retrieveData

▸ **retrieveData**(`client`, `blockId`): `Promise`<{} \| `undefined`\>

Retrieve a data block.

#### Parameters

| Name      | Type                                           | Description                                            |
| :-------- | :--------------------------------------------- | :----------------------------------------------------- |
| `client`  | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to retrieve the data with. |
| `blockId` | `string`                                       | The block id of the data to get.                       |

#### Returns

`Promise`<{} \| `undefined`\>

The block tag and data.

---

### retry

▸ **retry**(`client`, `blockId`): `Promise`<{}\>

Retry an existing block either by promoting or reattaching.

#### Parameters

| Name      | Type                                           | Description                                            |
| :-------- | :--------------------------------------------- | :----------------------------------------------------- |
| `client`  | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to perform the retry with. |
| `blockId` | `string`                                       | The block to retry.                                    |

#### Returns

`Promise`<{}\>

The id and block that were retried.

---

### send

▸ **send**(`client`, `seed`, `accountIndex`, `addressBech32`, `amount`, `taggedData?`, `addressOptions?`): `Promise`<{}\>

Send a transfer from the balance on the seed to a single output.

#### Parameters

| Name              | Type                                           | Description                                                 |
| :---------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.      |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                     |
| `accountIndex`    | `number`                                       | The account index in the wallet.                            |
| `addressBech32`   | `string`                                       | The address to send the funds to in bech32 format.          |
| `amount`          | `BigInteger`                                   | The amount to send.                                         |
| `taggedData?`     | `Object`                                       | Optional tagged data to associate with the transaction.     |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups. |

#### Returns

`Promise`<{}\>

The id of the block created and the contructed block.

---

### sendEd25519

▸ **sendEd25519**(`client`, `seed`, `accountIndex`, `addressEd25519`, `amount`, `taggedData?`, `addressOptions?`): `Promise`<{}\>

Send a transfer from the balance on the seed to a single output.

#### Parameters

| Name              | Type                                           | Description                                                 |
| :---------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.      |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                     |
| `accountIndex`    | `number`                                       | The account index in the wallet.                            |
| `addressEd25519`  | `string`                                       | The address to send the funds to in ed25519 format.         |
| `amount`          | `BigInteger`                                   | The amount to send.                                         |
| `taggedData?`     | `Object`                                       | Optional tagged data to associate with the transaction.     |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups. |

#### Returns

`Promise`<{}\>

The id of the block created and the contructed block.

---

### sendMultiple

▸ **sendMultiple**(`client`, `seed`, `accountIndex`, `outputs`, `taggedData?`, `addressOptions?`): `Promise`<{}\>

Send a transfer from the balance on the seed to multiple outputs.

#### Parameters

| Name              | Type                                           | Description                                                    |
| :---------------- | :--------------------------------------------- | :------------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.         |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                        |
| `accountIndex`    | `number`                                       | The account index in the wallet.                               |
| `outputs`         | {}[]                                           | The address to send the funds to in bech32 format and amounts. |
| `taggedData?`     | `Object`                                       | Optional tagged data to associate with the transaction.        |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups.    |

#### Returns

`Promise`<{}\>

The id of the block created and the contructed block.

---

### sendMultipleEd25519

▸ **sendMultipleEd25519**(`client`, `seed`, `accountIndex`, `outputs`, `taggedData?`, `addressOptions?`): `Promise`<{}\>

Send a transfer from the balance on the seed.

#### Parameters

| Name              | Type                                           | Description                                                                      |
| :---------------- | :--------------------------------------------- | :------------------------------------------------------------------------------- |
| `client`          | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.                           |
| `seed`            | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                                          |
| `accountIndex`    | `number`                                       | The account index in the wallet.                                                 |
| `outputs`         | {}[]                                           | The outputs including address to send the funds to in ed25519 format and amount. |
| `taggedData?`     | `Object`                                       | Optional tagged data to associate with the transaction.                          |
| `addressOptions?` | `Object`                                       | Optional address configuration for balance address lookups.                      |

#### Returns

`Promise`<{}\>

The id of the block created and the contructed block.

---

### sendWithAddressGenerator

▸ **sendWithAddressGenerator**<`T`\>(`client`, `seed`, `initialAddressState`, `nextAddressPath`, `outputs`, `taggedData?`, `zeroCount?`): `Promise`<{}\>

Send a transfer using account based indexing for the inputs.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                  | Type                                           | Description                                                           |
| :-------------------- | :--------------------------------------------- | :-------------------------------------------------------------------- |
| `client`              | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.                |
| `seed`                | [`ISeed`](interfaces/ISeed.md)                 | The seed to use for address generation.                               |
| `initialAddressState` | `T`                                            | The initial address state for calculating the addresses.              |
| `nextAddressPath`     | (`addressState`: `T`) => `string`              | Calculate the next address for inputs.                                |
| `outputs`             | {}[]                                           | The address to send the funds to in bech32 format and amounts.        |
| `taggedData?`         | `Object`                                       | Optional tagged data to associate with the transaction.               |
| `zeroCount?`          | `number`                                       | The number of addresses with 0 balance during lookup before aborting. |

#### Returns

`Promise`<{}\>

The id of the block created and the contructed block.

---

### calculateInputs

▸ **calculateInputs**<`T`\>(`client`, `seed`, `initialAddressState`, `nextAddressPath`, `outputs`, `zeroCount?`): `Promise`<{}[]\>

Calculate the inputs from the seed and basePath.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                  | Type                                           | Default value | Description                                               |
| :-------------------- | :--------------------------------------------- | :------------ | :-------------------------------------------------------- |
| `client`              | `string` \| [`IClient`](interfaces/IClient.md) | `undefined`   | The client or node endpoint to calculate the inputs with. |
| `seed`                | [`ISeed`](interfaces/ISeed.md)                 | `undefined`   | The seed to use for address generation.                   |
| `initialAddressState` | `T`                                            | `undefined`   | The initial address state for calculating the addresses.  |
| `nextAddressPath`     | (`addressState`: `T`) => `string`              | `undefined`   | Calculate the next address for inputs.                    |
| `outputs`             | {}[]                                           | `undefined`   | The outputs to send.                                      |
| `zeroCount`           | `number`                                       | `5`           | Abort when the number of zero balances is exceeded.       |

#### Returns

`Promise`<{}[]\>

The id of the block created and the contructed block.

---

### sendAdvanced

▸ **sendAdvanced**(`client`, `inputsAndSignatureKeyPairs`, `outputs`, `taggedData?`): `Promise`<{}\>

Send a transfer from the balance on the seed.

#### Parameters

| Name                         | Type                                           | Description                                                       |
| :--------------------------- | :--------------------------------------------- | :---------------------------------------------------------------- |
| `client`                     | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the transfer with.            |
| `inputsAndSignatureKeyPairs` | {}[]                                           | The inputs with the signature key pairs needed to sign transfers. |
| `outputs`                    | {}[]                                           | The outputs to send.                                              |
| `taggedData?`                | `Object`                                       | Optional tagged data to associate with the transaction.           |

#### Returns

`Promise`<{}\>

The id of the block created and the remainder address if one was needed.

---

### buildTransactionPayload

▸ **buildTransactionPayload**(`networkId`, `inputsAndSignatureKeyPairs`, `outputs`, `taggedData?`): [`ITransactionPayload`](interfaces/ITransactionPayload.md)

Build a transaction payload.

#### Parameters

| Name                         | Type     | Description                                                       |
| :--------------------------- | :------- | :---------------------------------------------------------------- |
| `networkId`                  | `string` | The network id we are sending the payload on.                     |
| `inputsAndSignatureKeyPairs` | {}[]     | The inputs with the signature key pairs needed to sign transfers. |
| `outputs`                    | {}[]     | The outputs to send.                                              |
| `taggedData?`                | `Object` | Optional tagged data to associate with the transaction.           |

#### Returns

[`ITransactionPayload`](interfaces/ITransactionPayload.md)

The transaction payload.

---

### sendData

▸ **sendData**(`client`, `tag?`, `data?`): `Promise`<{}\>

Send a data block.

#### Parameters

| Name     | Type                                           | Description                                        |
| :------- | :--------------------------------------------- | :------------------------------------------------- |
| `client` | `string` \| [`IClient`](interfaces/IClient.md) | The client or node endpoint to send the data with. |
| `tag?`   | `string` \| `Uint8Array`                       | The tag for the data.                              |
| `data?`  | `string` \| `Uint8Array`                       | The data as either UTF8 text or Uint8Array bytes.  |

#### Returns

`Promise`<{}\>

The id of the block created and the block.

---

### setLogger

▸ **setLogger**(`log`): `void`

Set the logger for output.

#### Parameters

| Name  | Type                                                | Description |
| :---- | :-------------------------------------------------- | :---------- |
| `log` | (`message`: `string`, `data?`: `unknown`) => `void` | The logger. |

#### Returns

`void`

---

### logRoutes

▸ **logRoutes**(`prefix`, `routes`): `void`

Log the routes of the node.

#### Parameters

| Name     | Type                                               | Description                |
| :------- | :------------------------------------------------- | :------------------------- |
| `prefix` | `string`                                           | The prefix for the output. |
| `routes` | [`IRoutesResponse`](interfaces/IRoutesResponse.md) | The available routes.      |

#### Returns

`void`

---

### logInfo

▸ **logInfo**(`prefix`, `info`): `void`

Log the node information.

#### Parameters

| Name     | Type                                   | Description                |
| :------- | :------------------------------------- | :------------------------- |
| `prefix` | `string`                               | The prefix for the output. |
| `info`   | [`INodeInfo`](interfaces/INodeInfo.md) | The info to log.           |

#### Returns

`void`

---

### logTips

▸ **logTips**(`prefix`, `tipsResponse`): `void`

Log the tips information.

#### Parameters

| Name           | Type                                           | Description                |
| :------------- | :--------------------------------------------- | :------------------------- |
| `prefix`       | `string`                                       | The prefix for the output. |
| `tipsResponse` | [`ITipsResponse`](interfaces/ITipsResponse.md) | The tips to log.           |

#### Returns

`void`

---

### logBlock

▸ **logBlock**(`prefix`, `block`): `void`

Log a block to the console.

#### Parameters

| Name     | Type                             | Description                |
| :------- | :------------------------------- | :------------------------- |
| `prefix` | `string`                         | The prefix for the output. |
| `block`  | [`IBlock`](interfaces/IBlock.md) | The block to log.          |

#### Returns

`void`

---

### logBlockMetadata

▸ **logBlockMetadata**(`prefix`, `blockMetadata`): `void`

Log the block metadata to the console.

#### Parameters

| Name            | Type                                             | Description                |
| :-------------- | :----------------------------------------------- | :------------------------- |
| `prefix`        | `string`                                         | The prefix for the output. |
| `blockMetadata` | [`IBlockMetadata`](interfaces/IBlockMetadata.md) | The blockMetadata to log.  |

#### Returns

`void`

---

### logPayload

▸ **logPayload**(`prefix`, `payload?`): `void`

Log a block to the console.

#### Parameters

| Name       | Type                                      | Description                |
| :--------- | :---------------------------------------- | :------------------------- |
| `prefix`   | `string`                                  | The prefix for the output. |
| `payload?` | [`PayloadTypes`](api_ref.md#payloadtypes) | The payload.               |

#### Returns

`void`

---

### logTransactionPayload

▸ **logTransactionPayload**(`prefix`, `payload?`): `void`

Log a transaction payload to the console.

#### Parameters

| Name       | Type                                                       | Description                |
| :--------- | :--------------------------------------------------------- | :------------------------- |
| `prefix`   | `string`                                                   | The prefix for the output. |
| `payload?` | [`ITransactionPayload`](interfaces/ITransactionPayload.md) | The payload.               |

#### Returns

`void`

---

### logTaggedDataPayload

▸ **logTaggedDataPayload**(`prefix`, `payload?`): `void`

Log a tagged data payload to the console.

#### Parameters

| Name       | Type                                                     | Description                |
| :--------- | :------------------------------------------------------- | :------------------------- |
| `prefix`   | `string`                                                 | The prefix for the output. |
| `payload?` | [`ITaggedDataPayload`](interfaces/ITaggedDataPayload.md) | The payload.               |

#### Returns

`void`

---

### logMilestonePayload

▸ **logMilestonePayload**(`prefix`, `payload?`): `void`

Log a milestone payload to the console.

#### Parameters

| Name       | Type                                                   | Description                |
| :--------- | :----------------------------------------------------- | :------------------------- |
| `prefix`   | `string`                                               | The prefix for the output. |
| `payload?` | [`IMilestonePayload`](interfaces/IMilestonePayload.md) | The payload.               |

#### Returns

`void`

---

### logMilestoneOptions

▸ **logMilestoneOptions**(`prefix`, `milestoneOptions?`): `void`

Log milestone options to the console.

#### Parameters

| Name                | Type                                                        | Description                |
| :------------------ | :---------------------------------------------------------- | :------------------------- |
| `prefix`            | `string`                                                    | The prefix for the output. |
| `milestoneOptions?` | [`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes)[] | The milestone options.     |

#### Returns

`void`

---

### logMilestoneOption

▸ **logMilestoneOption**(`prefix`, `milestoneOption`): `void`

Log milestone option to the console.

#### Parameters

| Name              | Type                                                      | Description                |
| :---------------- | :-------------------------------------------------------- | :------------------------- |
| `prefix`          | `string`                                                  | The prefix for the output. |
| `milestoneOption` | [`MilestoneOptionTypes`](api_ref.md#milestoneoptiontypes) | The milestone option.      |

#### Returns

`void`

---

### logReceiptMilestoneOption

▸ **logReceiptMilestoneOption**(`prefix`, `option?`): `void`

Log a receipt milestone option to the console.

#### Parameters

| Name      | Type                                                               | Description                |
| :-------- | :----------------------------------------------------------------- | :------------------------- |
| `prefix`  | `string`                                                           | The prefix for the output. |
| `option?` | [`IReceiptMilestoneOption`](interfaces/IReceiptMilestoneOption.md) | The option.                |

#### Returns

`void`

---

### logProtocolParamsMilestoneOption

▸ **logProtocolParamsMilestoneOption**(`prefix`, `option?`): `void`

Log a protocol params milestone option to the console.

#### Parameters

| Name      | Type                                                                             | Description                |
| :-------- | :------------------------------------------------------------------------------- | :------------------------- |
| `prefix`  | `string`                                                                         | The prefix for the output. |
| `option?` | [`IProtocolParamsMilestoneOption`](interfaces/IProtocolParamsMilestoneOption.md) | The option.                |

#### Returns

`void`

---

### logTreasuryTransactionPayload

▸ **logTreasuryTransactionPayload**(`prefix`, `payload?`): `void`

Log a treasury transaction payload to the console.

#### Parameters

| Name       | Type                                                                       | Description                |
| :--------- | :------------------------------------------------------------------------- | :------------------------- |
| `prefix`   | `string`                                                                   | The prefix for the output. |
| `payload?` | [`ITreasuryTransactionPayload`](interfaces/ITreasuryTransactionPayload.md) | The payload.               |

#### Returns

`void`

---

### logAddress

▸ **logAddress**(`prefix`, `address?`): `void`

Log an address to the console.

#### Parameters

| Name       | Type                                      | Description                |
| :--------- | :---------------------------------------- | :------------------------- |
| `prefix`   | `string`                                  | The prefix for the output. |
| `address?` | [`AddressTypes`](api_ref.md#addresstypes) | The address to log.        |

#### Returns

`void`

---

### logSignature

▸ **logSignature**(`prefix`, `signature?`): `void`

Log signature to the console.

#### Parameters

| Name         | Type                                                   | Description                |
| :----------- | :----------------------------------------------------- | :------------------------- |
| `prefix`     | `string`                                               | The prefix for the output. |
| `signature?` | [`IEd25519Signature`](interfaces/IEd25519Signature.md) | The signature to log.      |

#### Returns

`void`

---

### logInput

▸ **logInput**(`prefix`, `input?`): `void`

Log input to the console.

#### Parameters

| Name     | Type                                  | Description                |
| :------- | :------------------------------------ | :------------------------- |
| `prefix` | `string`                              | The prefix for the output. |
| `input?` | [`InputTypes`](api_ref.md#inputtypes) | The input to log.          |

#### Returns

`void`

---

### logOutput

▸ **logOutput**(`prefix`, `output?`): `void`

Log output to the console.

#### Parameters

| Name      | Type                                    | Description                |
| :-------- | :-------------------------------------- | :------------------------- |
| `prefix`  | `string`                                | The prefix for the output. |
| `output?` | [`OutputTypes`](api_ref.md#outputtypes) | The output to log.         |

#### Returns

`void`

---

### logUnlock

▸ **logUnlock**(`prefix`, `unlock?`): `void`

Log unlock to the console.

#### Parameters

| Name      | Type                                    | Description                |
| :-------- | :-------------------------------------- | :------------------------- |
| `prefix`  | `string`                                | The prefix for the output. |
| `unlock?` | [`UnlockTypes`](api_ref.md#unlocktypes) | The unlock to log.         |

#### Returns

`void`

---

### logFunds

▸ **logFunds**(`prefix`, `fund?`): `void`

Log fund to the console.

#### Parameters

| Name     | Type                                             | Description                |
| :------- | :----------------------------------------------- | :------------------------- |
| `prefix` | `string`                                         | The prefix for the output. |
| `fund?`  | [`IMigratedFunds`](interfaces/IMigratedFunds.md) | The fund to log.           |

#### Returns

`void`

---

### logNativeTokens

▸ **logNativeTokens**(`prefix`, `nativeTokens`): `void`

Log native tokens to the console.

#### Parameters

| Name           | Type                                                          | Description                |
| :------------- | :------------------------------------------------------------ | :------------------------- |
| `prefix`       | `string`                                                      | The prefix for the output. |
| `nativeTokens` | `undefined` \| [`INativeToken`](interfaces/INativeToken.md)[] | The native tokens.         |

#### Returns

`void`

---

### logTokenScheme

▸ **logTokenScheme**(`prefix`, `tokenScheme`): `void`

Log token scheme to the console.

#### Parameters

| Name          | Type                                                     | Description                |
| :------------ | :------------------------------------------------------- | :------------------------- |
| `prefix`      | `string`                                                 | The prefix for the output. |
| `tokenScheme` | [`ISimpleTokenScheme`](interfaces/ISimpleTokenScheme.md) | The token scheme.          |

#### Returns

`void`

---

### logFeatures

▸ **logFeatures**(`prefix`, `features`): `void`

Log featurew to the console.

#### Parameters

| Name       | Type                                                       | Description                |
| :--------- | :--------------------------------------------------------- | :------------------------- |
| `prefix`   | `string`                                                   | The prefix for the output. |
| `features` | `undefined` \| [`FeatureTypes`](api_ref.md#featuretypes)[] | The features.              |

#### Returns

`void`

---

### logImmutableFeatures

▸ **logImmutableFeatures**(`prefix`, `immutableFeatures`): `void`

Log immutable featuress to the console.

#### Parameters

| Name                | Type                                                       | Description                |
| :------------------ | :--------------------------------------------------------- | :------------------------- |
| `prefix`            | `string`                                                   | The prefix for the output. |
| `immutableFeatures` | `undefined` \| [`FeatureTypes`](api_ref.md#featuretypes)[] | The features.              |

#### Returns

`void`

---

### logFeature

▸ **logFeature**(`prefix`, `feature`): `void`

Log feature to the console.

#### Parameters

| Name      | Type                                      | Description                |
| :-------- | :---------------------------------------- | :------------------------- |
| `prefix`  | `string`                                  | The prefix for the output. |
| `feature` | [`FeatureTypes`](api_ref.md#featuretypes) | The feature.               |

#### Returns

`void`

---

### logUnlockConditions

▸ **logUnlockConditions**(`prefix`, `unlockConditions`): `void`

Log unlock conditions to the console.

#### Parameters

| Name               | Type                                                        | Description                |
| :----------------- | :---------------------------------------------------------- | :------------------------- |
| `prefix`           | `string`                                                    | The prefix for the output. |
| `unlockConditions` | [`UnlockConditionTypes`](api_ref.md#unlockconditiontypes)[] | The unlock conditions.     |

#### Returns

`void`

---

### logUnlockCondition

▸ **logUnlockCondition**(`prefix`, `unlockCondition`): `void`

Log feature block to the console.

#### Parameters

| Name              | Type                                                      | Description                |
| :---------------- | :-------------------------------------------------------- | :------------------------- |
| `prefix`          | `string`                                                  | The prefix for the output. |
| `unlockCondition` | [`UnlockConditionTypes`](api_ref.md#unlockconditiontypes) | The unlock condition.      |

#### Returns

`void`

---

### milestoneIdFromMilestonePayload

▸ **milestoneIdFromMilestonePayload**(`payload`): `string`

Compute a milestoneId from a milestone payload.

#### Parameters

| Name      | Type                                                   | Description            |
| :-------- | :----------------------------------------------------- | :--------------------- |
| `payload` | [`IMilestonePayload`](interfaces/IMilestonePayload.md) | The milestone payload. |

#### Returns

`string`

The milestone id hex prefixed string.

---

### blockIdFromMilestonePayload

▸ **blockIdFromMilestonePayload**(`protocolVersion`, `payload`): `string`

Compute a blockId from a milestone payload.

#### Parameters

| Name              | Type                                                   | Description                  |
| :---------------- | :----------------------------------------------------- | :--------------------------- |
| `protocolVersion` | `number`                                               | The protocol version to use. |
| `payload`         | [`IMilestonePayload`](interfaces/IMilestonePayload.md) | The milestone payload.       |

#### Returns

`string`

The blockId of the block with the milestone payload.

## Type Aliases

### AddressTypes

Ƭ **AddressTypes**: [`IEd25519Address`](interfaces/IEd25519Address.md) \| [`IAliasAddress`](interfaces/IAliasAddress.md) \| [`INftAddress`](interfaces/INftAddress.md)

All of the address types.

---

### FeatureTypes

Ƭ **FeatureTypes**: [`ISenderFeature`](interfaces/ISenderFeature.md) \| [`IIssuerFeature`](interfaces/IIssuerFeature.md) \| [`IMetadataFeature`](interfaces/IMetadataFeature.md) \| [`ITagFeature`](interfaces/ITagFeature.md)

All of the feature block types.

---

### InputTypes

Ƭ **InputTypes**: [`IUTXOInput`](interfaces/IUTXOInput.md) \| [`ITreasuryInput`](interfaces/ITreasuryInput.md)

All of the input types.

---

### LedgerInclusionState

Ƭ **LedgerInclusionState**: `"noTransaction"` \| `"included"` \| `"conflicting"`

The different states of ledger inclusion.

---

### Magnitudes

Ƭ **Magnitudes**: `"P"` \| `"T"` \| `"G"` \| `"M"` \| `"K"` \| `""`

Magnitudes for the numbers.

---

### MilestoneOptionTypes

Ƭ **MilestoneOptionTypes**: [`IReceiptMilestoneOption`](interfaces/IReceiptMilestoneOption.md) \| [`IProtocolParamsMilestoneOption`](interfaces/IProtocolParamsMilestoneOption.md)

All of the milestone option types.

---

### OutputTypes

Ƭ **OutputTypes**: [`ITreasuryOutput`](interfaces/ITreasuryOutput.md) \| [`IBasicOutput`](interfaces/IBasicOutput.md) \| [`IAliasOutput`](interfaces/IAliasOutput.md) \| [`IFoundryOutput`](interfaces/IFoundryOutput.md) \| [`INftOutput`](interfaces/INftOutput.md)

All of the output types.

---

### PayloadTypes

Ƭ **PayloadTypes**: [`ITransactionPayload`](interfaces/ITransactionPayload.md) \| [`IMilestonePayload`](interfaces/IMilestonePayload.md) \| [`ITreasuryTransactionPayload`](interfaces/ITreasuryTransactionPayload.md) \| [`ITaggedDataPayload`](interfaces/ITaggedDataPayload.md)

All of the payload types.

---

### SignatureTypes

Ƭ **SignatureTypes**: [`IEd25519Signature`](interfaces/IEd25519Signature.md)

All of the signature types.

---

### TokenSchemeTypes

Ƭ **TokenSchemeTypes**: [`ISimpleTokenScheme`](interfaces/ISimpleTokenScheme.md)

All of the token scheme types.

---

### UnlockConditionTypes

Ƭ **UnlockConditionTypes**: [`IAddressUnlockCondition`](interfaces/IAddressUnlockCondition.md) \| [`IStorageDepositReturnUnlockCondition`](interfaces/IStorageDepositReturnUnlockCondition.md) \| [`ITimelockUnlockCondition`](interfaces/ITimelockUnlockCondition.md) \| [`IExpirationUnlockCondition`](interfaces/IExpirationUnlockCondition.md) \| [`IStateControllerAddressUnlockCondition`](interfaces/IStateControllerAddressUnlockCondition.md) \| [`IGovernorAddressUnlockCondition`](interfaces/IGovernorAddressUnlockCondition.md) \| [`IImmutableAliasUnlockCondition`](interfaces/IImmutableAliasUnlockCondition.md)

All of the unlock condition types.

---

### UnlockTypes

Ƭ **UnlockTypes**: [`ISignatureUnlock`](interfaces/ISignatureUnlock.md) \| [`IReferenceUnlock`](interfaces/IReferenceUnlock.md) \| [`IAliasUnlock`](interfaces/IAliasUnlock.md) \| [`INftUnlock`](interfaces/INftUnlock.md)

All of the unlock types.
