# Class: Account

The Account class.

## Table of contents

### Methods

- [buildAliasOutput](Account.md#buildaliasoutput)
- [buildBasicOutput](Account.md#buildbasicoutput)
- [buildFoundryOutput](Account.md#buildfoundryoutput)
- [buildNftOutput](Account.md#buildnftoutput)
- [prepareBurn](Account.md#prepareburn)
- [prepareBurnNativeToken](Account.md#prepareburnnativetoken)
- [prepareBurnNft](Account.md#prepareburnnft)
- [claimOutputs](Account.md#claimoutputs)
- [prepareConsolidateOutputs](Account.md#prepareconsolidateoutputs)
- [prepareCreateAliasOutput](Account.md#preparecreatealiasoutput)
- [prepareDecreaseNativeTokenSupply](Account.md#preparedecreasenativetokensupply)
- [prepareDestroyAlias](Account.md#preparedestroyalias)
- [prepareDestroyFoundry](Account.md#preparedestroyfoundry)
- [generateEd25519Addresses](Account.md#generateed25519addresses)
- [getBalance](Account.md#getbalance)
- [getOutput](Account.md#getoutput)
- [getFoundryOutput](Account.md#getfoundryoutput)
- [getOutputsWithAdditionalUnlockConditions](Account.md#getoutputswithadditionalunlockconditions)
- [getTransaction](Account.md#gettransaction)
- [getIncomingTransaction](Account.md#getincomingtransaction)
- [addresses](Account.md#addresses)
- [addressesWithUnspentOutputs](Account.md#addresseswithunspentoutputs)
- [outputs](Account.md#outputs)
- [pendingTransactions](Account.md#pendingtransactions)
- [incomingTransactions](Account.md#incomingtransactions)
- [transactions](Account.md#transactions)
- [unspentOutputs](Account.md#unspentoutputs)
- [getMetadata](Account.md#getmetadata)
- [minimumRequiredStorageDeposit](Account.md#minimumrequiredstoragedeposit)
- [prepareIncreaseNativeTokenSupply](Account.md#prepareincreasenativetokensupply)
- [prepareMintNativeToken](Account.md#preparemintnativetoken)
- [prepareMintNfts](Account.md#preparemintnfts)
- [prepareOutput](Account.md#prepareoutput)
- [prepareSendAmount](Account.md#preparesendamount)
- [prepareTransaction](Account.md#preparetransaction)
- [retryTransactionUntilIncluded](Account.md#retrytransactionuntilincluded)
- [sendAmount](Account.md#sendamount)
- [prepareSendNativeTokens](Account.md#preparesendnativetokens)
- [prepareSendNft](Account.md#preparesendnft)
- [sendOutputs](Account.md#sendoutputs)
- [setAlias](Account.md#setalias)
- [setDefaultSyncOptions](Account.md#setdefaultsyncoptions)
- [signTransactionEssence](Account.md#signtransactionessence)
- [signAndSubmitTransaction](Account.md#signandsubmittransaction)
- [submitAndStoreTransaction](Account.md#submitandstoretransaction)
- [sync](Account.md#sync)
- [getParticipationOverview](Account.md#getparticipationoverview)

## Methods

### buildAliasOutput

▸ **buildAliasOutput**(`data`): `Promise`<`IAliasOutput`\>

Build an `AliasOutput`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BuildAliasOutputData`](../interfaces/BuildAliasOutputData.md) | Options for building an `AliasOutput`. |

#### Returns

`Promise`<`IAliasOutput`\>

The built `AliasOutput`.

___

### buildBasicOutput

▸ **buildBasicOutput**(`data`): `Promise`<`IBasicOutput`\>

Build a `BasicOutput`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BuildBasicOutputData`](../interfaces/BuildBasicOutputData.md) | Options for building a `BasicOutput`. |

#### Returns

`Promise`<`IBasicOutput`\>

The built `BasicOutput`.

___

### buildFoundryOutput

▸ **buildFoundryOutput**(`data`): `Promise`<`IFoundryOutput`\>

Build a `FoundryOutput`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BuildFoundryOutputData`](../interfaces/BuildFoundryOutputData.md) | Options for building a `FoundryOutput`. |

#### Returns

`Promise`<`IFoundryOutput`\>

The built `FoundryOutput`.

___

### buildNftOutput

▸ **buildNftOutput**(`data`): `Promise`<[`NftOutput`](NftOutput.md)\>

Build an `NftOutput`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BuildNftOutputData`](../interfaces/BuildNftOutputData.md) | Options for building an `NftOutput`. |

#### Returns

`Promise`<[`NftOutput`](NftOutput.md)\>

The built `NftOutput`.

___

### prepareBurn

▸ **prepareBurn**(`burn`, `transactionOptions?`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

A generic `burn()` function that can be used to prepare to burn native tokens, nfts, foundries and aliases.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `burn` | [`Burn`](../interfaces/Burn.md) | The outputs to burn |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The resulting transaction.

___

### prepareBurnNativeToken

▸ **prepareBurnNativeToken**(`tokenId`, `burnAmount`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Burn native tokens. This doesn't require the foundry output which minted them, but will not increase
the foundries `melted_tokens` field, which makes it impossible to destroy the foundry output. Therefore it's
recommended to use melting, if the foundry output is available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `burnAmount` | `string` | The to be burned amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The transaction.

___

### prepareBurnNft

▸ **prepareBurnNft**(`nftId`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Burn an nft output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftId` | `string` | The NftId. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The transaction.

___

### claimOutputs

▸ **claimOutputs**(`outputIds`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Claim basic or nft outputs that have additional unlock conditions
to their `AddressUnlockCondition` from the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputIds` | `string`[] | The outputs to claim. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The resulting transaction.

___

### prepareConsolidateOutputs

▸ **prepareConsolidateOutputs**(`force`, `outputConsolidationThreshold?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Consolidate basic outputs with only an `AddressUnlockCondition` from an account
by sending them to an own address again if the output amount is greater or
equal to the output consolidation threshold.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | `boolean` | Force consolidation on addresses where the threshold isn't met. |
| `outputConsolidationThreshold?` | `number` | A default threshold is used if this is omitted. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The consolidation transaction.

___

### prepareCreateAliasOutput

▸ **prepareCreateAliasOutput**(`params?`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

`createAliasOutput` creates an alias output

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`AliasOutputParams`](../interfaces/AliasOutputParams.md) | The alias output options. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

A transaction object.

___

### prepareDecreaseNativeTokenSupply

▸ **prepareDecreaseNativeTokenSupply**(`tokenId`, `meltAmount`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Melt native tokens. This happens with the foundry output which minted them, by increasing its
`melted_tokens` field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `meltAmount` | `string` | To be melted amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The transaction.

___

### prepareDestroyAlias

▸ **prepareDestroyAlias**(`aliasId`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Destroy an alias output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | The AliasId. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The transaction.

___

### prepareDestroyFoundry

▸ **prepareDestroyFoundry**(`foundryId`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Function to destroy a foundry output with a circulating supply of 0.
Native tokens in the foundry (minted by other foundries) will be transacted to the controlling alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `foundryId` | `string` | The FoundryId. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The transaction.

___

### generateEd25519Addresses

▸ **generateEd25519Addresses**(`amount`, `options?`): `Promise`<[`AccountAddress`](../interfaces/AccountAddress.md)[]\>

Generate new unused ed25519 addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount of addresses to generate. |
| `options?` | [`GenerateAddressOptions`](../interfaces/GenerateAddressOptions.md) | Options for address generation. |

#### Returns

`Promise`<[`AccountAddress`](../interfaces/AccountAddress.md)[]\>

The addresses.

___

### getBalance

▸ **getBalance**(): `Promise`<[`Balance`](../interfaces/Balance.md)\>

Get the account balance.

#### Returns

`Promise`<[`Balance`](../interfaces/Balance.md)\>

The account balance.

___

### getOutput

▸ **getOutput**(`outputId`): `Promise`<[`OutputData`](../interfaces/OutputData.md)\>

Get the data for an output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | The output to get. |

#### Returns

`Promise`<[`OutputData`](../interfaces/OutputData.md)\>

The `OutputData`.

___

### getFoundryOutput

▸ **getFoundryOutput**(`tokenId`): `Promise`<`IFoundryOutput`\>

Get a `FoundryOutput` by native token ID. It will try to get the foundry from
the account, if it isn't in the account it will try to get it from the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token ID to get the foundry for. |

#### Returns

`Promise`<`IFoundryOutput`\>

The `FoundryOutput` that minted the token.

___

### getOutputsWithAdditionalUnlockConditions

▸ **getOutputsWithAdditionalUnlockConditions**(`outputs`): `Promise`<`string`[]\>

Get outputs with additional unlock conditions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`OutputsToClaim`](../enums/OutputsToClaim.md) | The type of outputs to claim. |

#### Returns

`Promise`<`string`[]\>

The output IDs of the unlockable outputs.

___

### getTransaction

▸ **getTransaction**(`transactionId`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Get a transaction stored in the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction to get. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The transaction.

___

### getIncomingTransaction

▸ **getIncomingTransaction**(`transactionId`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Get the transaction with inputs of an incoming transaction stored in the account
List might not be complete, if the node pruned the data already

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction to get. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The transaction.

___

### addresses

▸ **addresses**(): `Promise`<[`AccountAddress`](../interfaces/AccountAddress.md)[]\>

List all the addresses of the account.

#### Returns

`Promise`<[`AccountAddress`](../interfaces/AccountAddress.md)[]\>

The addresses.

___

### addressesWithUnspentOutputs

▸ **addressesWithUnspentOutputs**(): `Promise`<[`AddressWithUnspentOutputs`](../interfaces/AddressWithUnspentOutputs.md)[]\>

List the addresses of the account with unspent outputs.

#### Returns

`Promise`<[`AddressWithUnspentOutputs`](../interfaces/AddressWithUnspentOutputs.md)[]\>

The addresses.

___

### outputs

▸ **outputs**(`filterOptions?`): `Promise`<[`OutputData`](../interfaces/OutputData.md)[]\>

List all outputs of the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterOptions?` | [`FilterOptions`](../interfaces/FilterOptions.md) | Options to filter the to be returned outputs. |

#### Returns

`Promise`<[`OutputData`](../interfaces/OutputData.md)[]\>

The outputs with metadata.

___

### pendingTransactions

▸ **pendingTransactions**(): `Promise`<[`Transaction`](../interfaces/Transaction.md)[]\>

List all the pending transactions of the account.

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)[]\>

The transactions.

___

### incomingTransactions

▸ **incomingTransactions**(): `Promise`<[`Transaction`](../interfaces/Transaction.md)[]\>

List all incoming transactions of the account.

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)[]\>

The incoming transactions with their inputs.

___

### transactions

▸ **transactions**(): `Promise`<[`Transaction`](../interfaces/Transaction.md)[]\>

List all the transactions of the account.

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)[]\>

The transactions.

___

### unspentOutputs

▸ **unspentOutputs**(`filterOptions?`): `Promise`<[`OutputData`](../interfaces/OutputData.md)[]\>

List all the unspent outputs of the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterOptions?` | [`FilterOptions`](../interfaces/FilterOptions.md) | Options to filter the to be returned outputs. |

#### Returns

`Promise`<[`OutputData`](../interfaces/OutputData.md)[]\>

The outputs with metadata.

___

### getMetadata

▸ **getMetadata**(): [`AccountMetadata`](../interfaces/AccountMetadata.md)

Get the accounts metadata.

#### Returns

[`AccountMetadata`](../interfaces/AccountMetadata.md)

The accounts metadata.

___

### minimumRequiredStorageDeposit

▸ **minimumRequiredStorageDeposit**(`output`): `Promise`<`string`\>

Calculate the minimum required storage deposit for an output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | `Output` | output to calculate the deposit amount for. |

#### Returns

`Promise`<`string`\>

The amount.

___

### prepareIncreaseNativeTokenSupply

▸ **prepareIncreaseNativeTokenSupply**(`tokenId`, `mintAmount`, `transactionOptions?`): `Promise`<`PreparedMintTokenTransactionData`\>

Mint more native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `mintAmount` | `string` | To be minted amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<`PreparedMintTokenTransactionData`\>

The minting transaction and the token ID.

___

### prepareMintNativeToken

▸ **prepareMintNativeToken**(`params`, `transactionOptions?`): `Promise`<`PreparedMintTokenTransactionData`\>

Mint native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MintNativeTokenParams`](../interfaces/MintNativeTokenParams.md) | The options for minting tokens. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<`PreparedMintTokenTransactionData`\>

The minting transaction and the token ID.

___

### prepareMintNfts

▸ **prepareMintNfts**(`params`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Mint nfts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MintNftParams`](../interfaces/MintNftParams.md)[] | The options for minting nfts. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The minting transaction.

___

### prepareOutput

▸ **prepareOutput**(`params`, `transactionOptions?`): `Promise`<`Output`\>

Prepare an output for sending, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`OutputParams`](../interfaces/OutputParams.md) | - |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<`Output`\>

The prepared output.

___

### prepareSendAmount

▸ **prepareSendAmount**(`params`, `options?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Prepare a send amount transaction, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendAmountParams`](../interfaces/SendAmountParams.md)[] | Address with amounts to send. |
| `options?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The prepared transaction data.

___

### prepareTransaction

▸ **prepareTransaction**(`outputs`, `options?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Prepare a transaction, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | `Output`[] | Outputs to use in the transaction. |
| `options?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The prepared transaction data.

___

### retryTransactionUntilIncluded

▸ **retryTransactionUntilIncluded**(`transactionId`, `interval?`, `maxAttempts?`): `Promise`<`string`\>

Retries (promotes or reattaches) a transaction sent from the account for a provided transaction id until it's
included (referenced by a milestone). Returns the included block id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |
| `interval?` | `number` |
| `maxAttempts?` | `number` |

#### Returns

`Promise`<`string`\>

___

### sendAmount

▸ **sendAmount**(`params`, `transactionOptions?`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Send a transaction with amounts from input addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendAmountParams`](../interfaces/SendAmountParams.md)[] | Addresses with amounts. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The sent transaction.

___

### prepareSendNativeTokens

▸ **prepareSendNativeTokens**(`params`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Send native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendNativeTokensParams`](../interfaces/SendNativeTokensParams.md)[] | Addresses amounts and native tokens. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The sent transaction.

___

### prepareSendNft

▸ **prepareSendNft**(`params`, `transactionOptions?`): `Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

Send nft.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendNftParams`](../interfaces/SendNftParams.md)[] | Addresses and nft ids. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`PreparedTransactionData`](PreparedTransactionData.md)\>

The sent transaction.

___

### sendOutputs

▸ **sendOutputs**(`outputs`, `transactionOptions?`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Send outputs in a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | `Output`[] | The outputs to send. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | The options to define a `RemainderValueStrategy` or custom inputs. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The sent transaction.

___

### setAlias

▸ **setAlias**(`alias`): `Promise`<`void`\>

Set the alias for the account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | The account alias to set. |

#### Returns

`Promise`<`void`\>

___

### setDefaultSyncOptions

▸ **setDefaultSyncOptions**(`options`): `Promise`<`void`\>

Set the fallback SyncOptions for account syncing.
If storage is enabled, will persist during restarts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SyncOptions`](../interfaces/SyncOptions.md) | The sync options to set. |

#### Returns

`Promise`<`void`\>

___

### signTransactionEssence

▸ **signTransactionEssence**(`preparedTransactionData`): `Promise`<[`SignedTransactionEssence`](../interfaces/SignedTransactionEssence.md)\>

Sign a prepared transaction, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedTransactionData` | [`IPreparedTransactionData`](../interfaces/IPreparedTransactionData.md) | The prepared transaction data to sign. |

#### Returns

`Promise`<[`SignedTransactionEssence`](../interfaces/SignedTransactionEssence.md)\>

The signed transaction essence.

___

### signAndSubmitTransaction

▸ **signAndSubmitTransaction**(`preparedTransactionData`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Sign a prepared transaction, and send it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedTransactionData` | [`IPreparedTransactionData`](../interfaces/IPreparedTransactionData.md) | The prepared transaction data to sign and submit. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The transaction.

___

### submitAndStoreTransaction

▸ **submitAndStoreTransaction**(`signedTransactionData`): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

Validate the transaction, submit it to a node and store it in the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signedTransactionData` | [`SignedTransactionEssence`](../interfaces/SignedTransactionEssence.md) | A signed transaction to submit and store. |

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The sent transaction.

___

### sync

▸ **sync**(`options?`): `Promise`<[`Balance`](../interfaces/Balance.md)\>

Sync the account by fetching new information from the nodes.
Will also retry pending transactions if necessary.
A custom default can be set using setDefaultSyncOptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`SyncOptions`](../interfaces/SyncOptions.md) | Optional synchronization options. |

#### Returns

`Promise`<[`Balance`](../interfaces/Balance.md)\>

The account balance.

___

### getParticipationOverview

▸ **getParticipationOverview**(`eventIds?`): `Promise`<`ParticipationOverview`\>

Calculates the voting overview of an account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventIds?` | `string`[] | Optional, filters participations only for provided events. |

#### Returns

`Promise`<`ParticipationOverview`\>

ParticipationOverview
