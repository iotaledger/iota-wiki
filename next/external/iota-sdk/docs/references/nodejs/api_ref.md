# @iota/sdk

## Table of contents

### Enumerations

- [OutputType](enums/OutputType.md)
- [CoinType](enums/CoinType.md)
- [LedgerDeviceType](enums/LedgerDeviceType.md)
- [Network](enums/Network.md)
- [AddressType](enums/AddressType.md)
- [WalletEventType](enums/WalletEventType.md)
- [OutputsToClaim](enums/OutputsToClaim.md)
- [ReturnStrategy](enums/ReturnStrategy.md)
- [InclusionState](enums/InclusionState.md)

### Classes

- [Client](classes/Client.md)
- [ClientMethodHandler](classes/ClientMethodHandler.md)
- [SecretManager](classes/SecretManager.md)
- [SecretManagerMethodHandler](classes/SecretManagerMethodHandler.md)
- [Ed25519Address](classes/Ed25519Address.md)
- [NftAddress](classes/NftAddress.md)
- [SenderFeature](classes/SenderFeature.md)
- [IssuerFeature](classes/IssuerFeature.md)
- [MetadataFeature](classes/MetadataFeature.md)
- [TagFeature](classes/TagFeature.md)
- [CommonOutput](classes/CommonOutput.md)
- [TreasuryOutput](classes/TreasuryOutput.md)
- [BasicOutput](classes/BasicOutput.md)
- [NftOutput](classes/NftOutput.md)
- [FoundryOutput](classes/FoundryOutput.md)
- [SimpleTokenScheme](classes/SimpleTokenScheme.md)
- [StorageDepositReturnUnlockCondition](classes/StorageDepositReturnUnlockCondition.md)
- [TimelockUnlockCondition](classes/TimelockUnlockCondition.md)
- [StateControllerAddressUnlockCondition](classes/StateControllerAddressUnlockCondition.md)
- [GovernorAddressUnlockCondition](classes/GovernorAddressUnlockCondition.md)
- [ImmutableAliasAddressUnlockCondition](classes/ImmutableAliasAddressUnlockCondition.md)
- [PreparedTransactionData](classes/PreparedTransactionData.md)
- [Utils](classes/Utils.md)
- [Account](classes/Account.md)
- [Wallet](classes/Wallet.md)

### Interfaces

- [IBuildBlockOptions](interfaces/IBuildBlockOptions.md)
- [IClientBlockBuilderOutputAddress](interfaces/IClientBlockBuilderOutputAddress.md)
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
- [AliasOutputBuilderParams](interfaces/AliasOutputBuilderParams.md)
- [BasicOutputBuilderParams](interfaces/BasicOutputBuilderParams.md)
- [FoundryOutputBuilderParams](interfaces/FoundryOutputBuilderParams.md)
- [NftOutputBuilderParams](interfaces/NftOutputBuilderParams.md)
- [OutputIdsResponse](interfaces/OutputIdsResponse.md)
- [IPreparedTransactionData](interfaces/IPreparedTransactionData.md)
- [IInputSigningData](interfaces/IInputSigningData.md)
- [IRange](interfaces/IRange.md)
- [LedgerNanoSecretManager](interfaces/LedgerNanoSecretManager.md)
- [MnemonicSecretManager](interfaces/MnemonicSecretManager.md)
- [SeedSecretManager](interfaces/SeedSecretManager.md)
- [StrongholdSecretManager](interfaces/StrongholdSecretManager.md)
- [Balance](interfaces/Balance.md)
- [BaseCoinBalance](interfaces/BaseCoinBalance.md)
- [RequiredStorageDeposit](interfaces/RequiredStorageDeposit.md)
- [NativeTokenBalance](interfaces/NativeTokenBalance.md)
- [SyncOptions](interfaces/SyncOptions.md)
- [AccountSyncOptions](interfaces/AccountSyncOptions.md)
- [AliasSyncOptions](interfaces/AliasSyncOptions.md)
- [NftSyncOptions](interfaces/NftSyncOptions.md)
- [AccountMeta](interfaces/AccountMeta.md)
- [AccountMetadata](interfaces/AccountMetadata.md)
- [CreateAccountPayload](interfaces/CreateAccountPayload.md)
- [FilterOptions](interfaces/FilterOptions.md)
- [AccountAddress](interfaces/AccountAddress.md)
- [SendAmountParams](interfaces/SendAmountParams.md)
- [AddressWithUnspentOutputs](interfaces/AddressWithUnspentOutputs.md)
- [SendNativeTokensParams](interfaces/SendNativeTokensParams.md)
- [SendNftParams](interfaces/SendNftParams.md)
- [GenerateAddressOptions](interfaces/GenerateAddressOptions.md)
- [BuildAliasOutputData](interfaces/BuildAliasOutputData.md)
- [BuildBasicOutputData](interfaces/BuildBasicOutputData.md)
- [BuildFoundryOutputData](interfaces/BuildFoundryOutputData.md)
- [BuildNftOutputData](interfaces/BuildNftOutputData.md)
- [OutputData](interfaces/OutputData.md)
- [Segment](interfaces/Segment.md)
- [OutputParams](interfaces/OutputParams.md)
- [Assets](interfaces/Assets.md)
- [Features](interfaces/Features.md)
- [Unlocks](interfaces/Unlocks.md)
- [StorageDeposit](interfaces/StorageDeposit.md)
- [PreparedMintTokenTransaction](interfaces/PreparedMintTokenTransaction.md)
- [MintTokenTransaction](interfaces/MintTokenTransaction.md)
- [SignedTransactionEssence](interfaces/SignedTransactionEssence.md)
- [Transaction](interfaces/Transaction.md)
- [TransactionOptions](interfaces/TransactionOptions.md)
- [MintNativeTokenParams](interfaces/MintNativeTokenParams.md)
- [MintNftParams](interfaces/MintNftParams.md)
- [AliasOutputParams](interfaces/AliasOutputParams.md)
- [WalletOptions](interfaces/WalletOptions.md)

### Type Aliases

- [BlockId](api_ref.md#blockid)
- [IBip32Chain](api_ref.md#ibip32chain)
- [QueryParameter](api_ref.md#queryparameter)
- [AliasQueryParameter](api_ref.md#aliasqueryparameter)
- [FoundryQueryParameter](api_ref.md#foundryqueryparameter)
- [NftQueryParameter](api_ref.md#nftqueryparameter)
- [PlaceholderSecretManager](api_ref.md#placeholdersecretmanager)
- [SecretManagerType](api_ref.md#secretmanagertype)
- [AccountId](api_ref.md#accountid)
- [RemainderValueStrategy](api_ref.md#remaindervaluestrategy)
- [ChangeAddress](api_ref.md#changeaddress)
- [ReuseAddress](api_ref.md#reuseaddress)
- [CustomAddress](api_ref.md#customaddress)

### Functions

- [initLogger](api_ref.md#initlogger)
- [utf8ToBytes](api_ref.md#utf8tobytes)
- [hexToUtf8](api_ref.md#hextoutf8)
- [utf8ToHex](api_ref.md#utf8tohex)

## Type Aliases

### BlockId

Ƭ **BlockId**: `string`

A block identifier, the BLAKE2b-256 hash of the block bytes.
See <https://www.blake2.net/> for more information.

___

### IBip32Chain

Ƭ **IBip32Chain**: `number`[]

BIP 32 chain.

___

### QueryParameter

Ƭ **QueryParameter**: `Address` \| `AliasAddress` \| `HasStorageDepositReturn` \| `StorageDepositReturnAddress` \| `HasTimelock` \| `TimelockedBefore` \| `TimelockedAfter` \| `HasExpiration` \| `ExpiresBefore` \| `ExpiresAfter` \| `ExpirationReturnAddress` \| `Sender` \| `Tag` \| `Issuer` \| `StateController` \| `Governor` \| `CommonQueryParameters`

Query parameter for filtering output requests

___

### AliasQueryParameter

Ƭ **AliasQueryParameter**: `StateController` \| `Governor` \| `Issuer` \| `Sender` \| `CommonQueryParameters`

Query parameters for filtering Alias Outputs

___

### FoundryQueryParameter

Ƭ **FoundryQueryParameter**: `AliasAddress` \| `CommonQueryParameters`

Query parameters for filtering Foundry Outputs

___

### NftQueryParameter

Ƭ **NftQueryParameter**: `Address` \| `AliasAddress` \| `HasStorageDepositReturn` \| `StorageDepositReturnAddress` \| `HasTimelock` \| `TimelockedBefore` \| `TimelockedAfter` \| `HasExpiration` \| `ExpiresBefore` \| `ExpiresAfter` \| `ExpirationReturnAddress` \| `Sender` \| `Tag` \| `CommonQueryParameters`

Query parameters for filtering Nft Outputs

___

### PlaceholderSecretManager

Ƭ **PlaceholderSecretManager**: ``"placeholder"``

Placeholder secret manager that can't do anything.

___

### SecretManagerType

Ƭ **SecretManagerType**: [`LedgerNanoSecretManager`](interfaces/LedgerNanoSecretManager.md) \| [`MnemonicSecretManager`](interfaces/MnemonicSecretManager.md) \| [`StrongholdSecretManager`](interfaces/StrongholdSecretManager.md) \| [`PlaceholderSecretManager`](api_ref.md#placeholdersecretmanager)

Supported secret managers

___

### AccountId

Ƭ **AccountId**: `number` \| `string`

Account identifier
Could be the account index (number) or account alias (string)

___

### RemainderValueStrategy

Ƭ **RemainderValueStrategy**: [`ChangeAddress`](api_ref.md#changeaddress) \| [`ReuseAddress`](api_ref.md#reuseaddress) \| [`CustomAddress`](api_ref.md#customaddress)

The RemainderValueStrategy

___

### ChangeAddress

Ƭ **ChangeAddress**: `Object`

ChangeAddress variant of RemainderValueStrategy

#### Type declaration

| Name | Type |
| :------ | :------ |
| `strategy` | ``"ChangeAddress"`` |
| `value` | ``null`` |

___

### ReuseAddress

Ƭ **ReuseAddress**: `Object`

ReuseAddress variant of RemainderValueStrategy

#### Type declaration

| Name | Type |
| :------ | :------ |
| `strategy` | ``"ReuseAddress"`` |
| `value` | ``null`` |

___

### CustomAddress

Ƭ **CustomAddress**: `Object`

CustomAddress variant of RemainderValueStrategy

#### Type declaration

| Name | Type |
| :------ | :------ |
| `strategy` | ``"CustomAddress"`` |
| `value` | `string` |

## Functions

### initLogger

▸ **initLogger**(`config?`): `any`

Initialize logger, if no arguments are provided a default config will be used.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | `ILoggerConfig` | `defaultLoggerConfig` |

#### Returns

`any`

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
