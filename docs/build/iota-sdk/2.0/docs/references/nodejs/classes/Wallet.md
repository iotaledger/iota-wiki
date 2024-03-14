# Class: Wallet

The Wallet class.

## Table of contents

### Constructors

- [constructor](Wallet.md#constructor)

### Methods

- [create](Wallet.md#create)
- [backup](Wallet.md#backup)
- [changeStrongholdPassword](Wallet.md#changestrongholdpassword)
- [clearStrongholdPassword](Wallet.md#clearstrongholdpassword)
- [destroy](Wallet.md#destroy)
- [emitTestEvent](Wallet.md#emittestevent)
- [getClient](Wallet.md#getclient)
- [getSecretManager](Wallet.md#getsecretmanager)
- [getLedgerNanoStatus](Wallet.md#getledgernanostatus)
- [isStrongholdPasswordAvailable](Wallet.md#isstrongholdpasswordavailable)
- [listen](Wallet.md#listen)
- [clearListeners](Wallet.md#clearlisteners)
- [restoreBackup](Wallet.md#restorebackup)
- [setClientOptions](Wallet.md#setclientoptions)
- [setStrongholdPassword](Wallet.md#setstrongholdpassword)
- [setStrongholdPasswordClearInterval](Wallet.md#setstrongholdpasswordclearinterval)
- [startBackgroundSync](Wallet.md#startbackgroundsync)
- [stopBackgroundSync](Wallet.md#stopbackgroundsync)
- [storeMnemonic](Wallet.md#storemnemonic)
- [updateNodeAuth](Wallet.md#updatenodeauth)
- [accounts](Wallet.md#accounts)
- [burn](Wallet.md#burn)
- [prepareBurn](Wallet.md#prepareburn)
- [prepareBurnNativeToken](Wallet.md#prepareburnnativetoken)
- [prepareBurnNft](Wallet.md#prepareburnnft)
- [claimOutputs](Wallet.md#claimoutputs)
- [prepareClaimOutputs](Wallet.md#prepareclaimoutputs)
- [consolidateOutputs](Wallet.md#consolidateoutputs)
- [prepareConsolidateOutputs](Wallet.md#prepareconsolidateoutputs)
- [createAccountOutput](Wallet.md#createaccountoutput)
- [prepareCreateAccountOutput](Wallet.md#preparecreateaccountoutput)
- [meltNativeToken](Wallet.md#meltnativetoken)
- [prepareMeltNativeToken](Wallet.md#preparemeltnativetoken)
- [deregisterParticipationEvent](Wallet.md#deregisterparticipationevent)
- [prepareDestroyAccount](Wallet.md#preparedestroyaccount)
- [prepareDestroyFoundry](Wallet.md#preparedestroyfoundry)
- [getBalance](Wallet.md#getbalance)
- [getOutput](Wallet.md#getoutput)
- [getParticipationEvent](Wallet.md#getparticipationevent)
- [getParticipationEventIds](Wallet.md#getparticipationeventids)
- [getParticipationEvents](Wallet.md#getparticipationevents)
- [getParticipationEventStatus](Wallet.md#getparticipationeventstatus)
- [getFoundryOutput](Wallet.md#getfoundryoutput)
- [claimableOutputs](Wallet.md#claimableoutputs)
- [getTransaction](Wallet.md#gettransaction)
- [getIncomingTransaction](Wallet.md#getincomingtransaction)
- [address](Wallet.md#address)
- [outputs](Wallet.md#outputs)
- [pendingTransactions](Wallet.md#pendingtransactions)
- [implicitAccountCreationAddress](Wallet.md#implicitaccountcreationaddress)
- [implicitAccountTransition](Wallet.md#implicitaccounttransition)
- [prepareImplicitAccountTransition](Wallet.md#prepareimplicitaccounttransition)
- [implicitAccounts](Wallet.md#implicitaccounts)
- [incomingTransactions](Wallet.md#incomingtransactions)
- [transactions](Wallet.md#transactions)
- [unspentOutputs](Wallet.md#unspentoutputs)
- [mintNativeToken](Wallet.md#mintnativetoken)
- [prepareMintNativeToken](Wallet.md#preparemintnativetoken)
- [createNativeToken](Wallet.md#createnativetoken)
- [prepareCreateNativeToken](Wallet.md#preparecreatenativetoken)
- [mintNfts](Wallet.md#mintnfts)
- [prepareMintNfts](Wallet.md#preparemintnfts)
- [prepareOutput](Wallet.md#prepareoutput)
- [prepareSend](Wallet.md#preparesend)
- [createDelegation](Wallet.md#createdelegation)
- [prepareCreateDelegation](Wallet.md#preparecreatedelegation)
- [delayDelegationClaiming](Wallet.md#delaydelegationclaiming)
- [prepareDelayDelegationClaiming](Wallet.md#preparedelaydelegationclaiming)
- [beginStaking](Wallet.md#beginstaking)
- [prepareBeginStaking](Wallet.md#preparebeginstaking)
- [extendStaking](Wallet.md#extendstaking)
- [prepareExtendStaking](Wallet.md#prepareextendstaking)
- [endStaking](Wallet.md#endstaking)
- [prepareEndStaking](Wallet.md#prepareendstaking)
- [announceCandidacy](Wallet.md#announcecandidacy)
- [sendTransaction](Wallet.md#sendtransaction)
- [prepareTransaction](Wallet.md#preparetransaction)
- [registerParticipationEvents](Wallet.md#registerparticipationevents)
- [waitForTransactionAcceptance](Wallet.md#waitfortransactionacceptance)
- [send](Wallet.md#send)
- [sendWithParams](Wallet.md#sendwithparams)
- [sendNativeTokens](Wallet.md#sendnativetokens)
- [prepareSendNativeTokens](Wallet.md#preparesendnativetokens)
- [sendNft](Wallet.md#sendnft)
- [prepareSendNft](Wallet.md#preparesendnft)
- [sendOutputs](Wallet.md#sendoutputs)
- [setAlias](Wallet.md#setalias)
- [setDefaultSyncOptions](Wallet.md#setdefaultsyncoptions)
- [signTransaction](Wallet.md#signtransaction)
- [signAndSubmitTransaction](Wallet.md#signandsubmittransaction)
- [submitAndStoreTransaction](Wallet.md#submitandstoretransaction)
- [sync](Wallet.md#sync)
- [prepareVote](Wallet.md#preparevote)
- [prepareStopParticipating](Wallet.md#preparestopparticipating)
- [getParticipationOverview](Wallet.md#getparticipationoverview)
- [prepareIncreaseVotingPower](Wallet.md#prepareincreasevotingpower)
- [prepareDecreaseVotingPower](Wallet.md#preparedecreasevotingpower)

## Constructors

### constructor

• **new Wallet**(`methodHandler`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodHandler` | [`WalletMethodHandler`](WalletMethodHandler.md) | The Rust method handler created in `WalletMethodHandler.create()`. |

## Methods

### create

▸ `Static` **create**(`options`): `Promise`\<[`Wallet`](Wallet.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WalletOptions`](../interfaces/WalletOptions.md) | The wallet options. |

#### Returns

`Promise`\<[`Wallet`](Wallet.md)\>

___

### backup

▸ **backup**(`destination`, `password`): `Promise`\<`void`\>

Backup the data to a Stronghold snapshot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |
| `password` | `string` |

#### Returns

`Promise`\<`void`\>

___

### changeStrongholdPassword

▸ **changeStrongholdPassword**(`currentPassword`, `newPassword`): `Promise`\<`void`\>

Change the Stronghold password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`Promise`\<`void`\>

___

### clearStrongholdPassword

▸ **clearStrongholdPassword**(): `Promise`\<`void`\>

Clear the Stronghold password from memory.

#### Returns

`Promise`\<`void`\>

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

Destroy the Wallet and drop its database connection.

#### Returns

`Promise`\<`void`\>

___

### emitTestEvent

▸ **emitTestEvent**(`event`): `Promise`\<`void`\>

Emit a provided event for testing of the event system.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WalletEvent`](WalletEvent.md) |

#### Returns

`Promise`\<`void`\>

___

### getClient

▸ **getClient**(): `Promise`\<[`Client`](Client.md)\>

Get client.

#### Returns

`Promise`\<[`Client`](Client.md)\>

___

### getSecretManager

▸ **getSecretManager**(): `Promise`\<[`SecretManager`](SecretManager.md)\>

Get secret manager.

#### Returns

`Promise`\<[`SecretManager`](SecretManager.md)\>

___

### getLedgerNanoStatus

▸ **getLedgerNanoStatus**(): `Promise`\<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

Get the status for a Ledger Nano.

#### Returns

`Promise`\<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

___

### isStrongholdPasswordAvailable

▸ **isStrongholdPasswordAvailable**(): `Promise`\<`boolean`\>

Check if the Stronghold password has been set.

#### Returns

`Promise`\<`boolean`\>

___

### listen

▸ **listen**(`eventTypes`, `callback`): `Promise`\<`void`\>

Listen to wallet events with a callback. An empty array will listen to all possible events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTypes` | [`WalletEventType`](../enums/WalletEventType.md)[] |
| `callback` | (`error`: `Error`, `event`: [`WalletEvent`](WalletEvent.md)) => `void` |

#### Returns

`Promise`\<`void`\>

___

### clearListeners

▸ **clearListeners**(`eventTypes`): `Promise`\<`void`\>

Clear the callbacks for provided events. An empty array will clear all listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTypes` | [`WalletEventType`](../enums/WalletEventType.md)[] |

#### Returns

`Promise`\<`void`\>

___

### restoreBackup

▸ **restoreBackup**(`source`, `password`, `ignoreIfCoinTypeMismatch?`, `ignoreIfBech32Mismatch?`): `Promise`\<`void`\>

Restore a backup from a Stronghold file
Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created
If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was
stored, it will be gone.
if ignore_if_coin_type_mismatch is provided client options will not be restored
if ignore_if_coin_type_mismatch == true, client options coin type and accounts will not be restored if the cointype doesn't match
If a bech32 hrp is provided to ignore_if_bech32_hrp_mismatch, that doesn't match the one of the current address, the wallet will not be restored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `password` | `string` |
| `ignoreIfCoinTypeMismatch?` | `boolean` |
| `ignoreIfBech32Mismatch?` | `string` |

#### Returns

`Promise`\<`void`\>

___

### setClientOptions

▸ **setClientOptions**(`clientOptions`): `Promise`\<`void`\>

Set ClientOptions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientOptions` | [`IClientOptions`](../interfaces/IClientOptions.md) |

#### Returns

`Promise`\<`void`\>

___

### setStrongholdPassword

▸ **setStrongholdPassword**(`password`): `Promise`\<`void`\>

Set the Stronghold password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<`void`\>

___

### setStrongholdPasswordClearInterval

▸ **setStrongholdPasswordClearInterval**(`intervalInMilliseconds?`): `Promise`\<`void`\>

Set the interval after which the Stronghold password gets cleared from memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalInMilliseconds?` | `number` |

#### Returns

`Promise`\<`void`\>

___

### startBackgroundSync

▸ **startBackgroundSync**(`options?`, `intervalInMilliseconds?`): `Promise`\<`void`\>

Start the background syncing process for all accounts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SyncOptions`](../interfaces/SyncOptions.md) |
| `intervalInMilliseconds?` | `number` |

#### Returns

`Promise`\<`void`\>

___

### stopBackgroundSync

▸ **stopBackgroundSync**(): `Promise`\<`void`\>

Stop the background syncing process for all accounts.

#### Returns

`Promise`\<`void`\>

___

### storeMnemonic

▸ **storeMnemonic**(`mnemonic`): `Promise`\<`void`\>

Store a mnemonic in the Stronghold snapshot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`Promise`\<`void`\>

___

### updateNodeAuth

▸ **updateNodeAuth**(`url`, `auth?`): `Promise`\<`void`\>

Update the authentication for the provided node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `auth?` | [`IAuth`](../interfaces/IAuth.md) |

#### Returns

`Promise`\<`void`\>

___

### accounts

▸ **accounts**(): `Promise`\<[`OutputData`](OutputData.md)[]\>

Returns the accounts of the wallet.

#### Returns

`Promise`\<[`OutputData`](OutputData.md)[]\>

The accounts of the wallet.

___

### burn

▸ **burn**(`burn`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

A generic function that can be used to burn native tokens, nfts, foundries and accounts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `burn` | [`Burn`](../interfaces/Burn.md) | The outputs or native tokens to burn |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### prepareBurn

▸ **prepareBurn**(`burn`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

A generic function that can be used to prepare to burn native tokens, nfts, foundries and accounts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `burn` | [`Burn`](../interfaces/Burn.md) | The outputs or native tokens to burn |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### prepareBurnNativeToken

▸ **prepareBurnNativeToken**(`tokenId`, `burnAmount`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Burn native tokens. This doesn't require the foundry output which minted them, but will not increase
the foundries `melted_tokens` field, which makes it impossible to destroy the foundry output. Therefore it's
recommended to use melting, if the foundry output is available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `burnAmount` | `bigint` | The to be burned amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### prepareBurnNft

▸ **prepareBurnNft**(`nftId`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Burn an nft output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftId` | `string` | The NftId. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### claimOutputs

▸ **claimOutputs**(`outputIds`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Claim basic or nft outputs that have additional unlock conditions
to their `AddressUnlockCondition` from the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputIds` | `string`[] | The outputs to claim. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The resulting transaction.

___

### prepareClaimOutputs

▸ **prepareClaimOutputs**(`outputIds`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Claim basic or nft outputs that have additional unlock conditions
to their `AddressUnlockCondition` from the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputIds` | `string`[] | The outputs to claim. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### consolidateOutputs

▸ **consolidateOutputs**(`params`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Consolidate basic outputs with only an `AddressUnlockCondition` from a wallet
by sending them to an own address again if the output amount is greater or
equal to the output consolidation threshold.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ConsolidationParams`](../interfaces/ConsolidationParams.md) | Consolidation options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The consolidation transaction.

___

### prepareConsolidateOutputs

▸ **prepareConsolidateOutputs**(`params`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Consolidate basic outputs with only an `AddressUnlockCondition` from a wallet
by sending them to an own address again if the output amount is greater or
equal to the output consolidation threshold.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ConsolidationParams`](../interfaces/ConsolidationParams.md) | Consolidation options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared consolidation transaction.

___

### createAccountOutput

▸ **createAccountOutput**(`params?`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Creates an account output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`AccountOutputParams`](../interfaces/AccountOutputParams.md) | The account output options. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### prepareCreateAccountOutput

▸ **prepareCreateAccountOutput**(`params?`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Creates an account output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`AccountOutputParams`](../interfaces/AccountOutputParams.md) | The account output options. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### meltNativeToken

▸ **meltNativeToken**(`tokenId`, `meltAmount`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Melt native tokens. This happens with the foundry output which minted them, by increasing its
`melted_tokens` field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `meltAmount` | `bigint` | To be melted amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### prepareMeltNativeToken

▸ **prepareMeltNativeToken**(`tokenId`, `meltAmount`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Melt native tokens. This happens with the foundry output which minted them, by increasing its
`melted_tokens` field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `meltAmount` | `bigint` | To be melted amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### deregisterParticipationEvent

▸ **deregisterParticipationEvent**(`eventId`): `Promise`\<`void`\>

Deregister a participation event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `string` | The id of the participation event to deregister. |

#### Returns

`Promise`\<`void`\>

___

### prepareDestroyAccount

▸ **prepareDestroyAccount**(`accountId`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Destroy an account output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The AccountId. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### prepareDestroyFoundry

▸ **prepareDestroyFoundry**(`foundryId`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Function to destroy a foundry output with a circulating supply of 0.
Native tokens in the foundry (minted by other foundries) will be transacted to the controlling account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `foundryId` | `string` | The FoundryId. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### getBalance

▸ **getBalance**(): `Promise`\<[`Balance`](../interfaces/Balance.md)\>

Get the account balance.

#### Returns

`Promise`\<[`Balance`](../interfaces/Balance.md)\>

The account balance.

___

### getOutput

▸ **getOutput**(`outputId`): `Promise`\<[`OutputData`](OutputData.md)\>

Get the data for an output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | The output to get. |

#### Returns

`Promise`\<[`OutputData`](OutputData.md)\>

The `OutputData`.

___

### getParticipationEvent

▸ **getParticipationEvent**(`eventId`): `Promise`\<[`ParticipationEventWithNodes`](../interfaces/ParticipationEventWithNodes.md)\>

Get a participation event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `string` | The ID of the event to get. |

#### Returns

`Promise`\<[`ParticipationEventWithNodes`](../interfaces/ParticipationEventWithNodes.md)\>

___

### getParticipationEventIds

▸ **getParticipationEventIds**(`node`, `eventType?`): `Promise`\<`string`[]\>

Get IDs of participation events of a certain type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`INode`](../interfaces/INode.md) | The node to get events from. |
| `eventType?` | [`ParticipationEventType`](../enums/ParticipationEventType.md) | The type of events to get. |

#### Returns

`Promise`\<`string`[]\>

___

### getParticipationEvents

▸ **getParticipationEvents**(): `Promise`\<[`ParticipationEventMap`](../api_ref.md#participationeventmap)\>

Get all participation events.

#### Returns

`Promise`\<[`ParticipationEventMap`](../api_ref.md#participationeventmap)\>

___

### getParticipationEventStatus

▸ **getParticipationEventStatus**(`eventId`): `Promise`\<[`ParticipationEventStatus`](../interfaces/ParticipationEventStatus.md)\>

Get the participation event status by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `string` | The ID of the event status to get. |

#### Returns

`Promise`\<[`ParticipationEventStatus`](../interfaces/ParticipationEventStatus.md)\>

___

### getFoundryOutput

▸ **getFoundryOutput**(`tokenId`): `Promise`\<[`FoundryOutput`](FoundryOutput.md)\>

Get a `FoundryOutput` by native token ID. It will try to get the foundry from
the account, if it isn't in the wallet it will try to get it from the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token ID to get the foundry for. |

#### Returns

`Promise`\<[`FoundryOutput`](FoundryOutput.md)\>

The `FoundryOutput` that minted the token.

___

### claimableOutputs

▸ **claimableOutputs**(`outputs`): `Promise`\<`string`[]\>

Get outputs with additional unlock conditions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`OutputsToClaim`](../enums/OutputsToClaim.md) | The type of outputs to claim. |

#### Returns

`Promise`\<`string`[]\>

The output IDs of the unlockable outputs.

___

### getTransaction

▸ **getTransaction**(`transactionId`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Get a transaction stored in the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction to get. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### getIncomingTransaction

▸ **getIncomingTransaction**(`transactionId`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Get the transaction with inputs of an incoming transaction stored in the wallet
List might not be complete, if the node pruned the data already

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction to get. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### address

▸ **address**(): `Promise`\<`string`\>

Get the address of the wallet.

#### Returns

`Promise`\<`string`\>

The address.

___

### outputs

▸ **outputs**(`filterOptions?`): `Promise`\<[`OutputData`](OutputData.md)[]\>

List all outputs of the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterOptions?` | [`FilterOptions`](../interfaces/FilterOptions.md) | Options to filter the to be returned outputs. |

#### Returns

`Promise`\<[`OutputData`](OutputData.md)[]\>

The outputs with metadata.

___

### pendingTransactions

▸ **pendingTransactions**(): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)[]\>

List all the pending transactions of the wallet.

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)[]\>

The transactions.

___

### implicitAccountCreationAddress

▸ **implicitAccountCreationAddress**(): `Promise`\<`string`\>

Returns the implicit account creation address of the wallet if it is Ed25519 based.

#### Returns

`Promise`\<`string`\>

The implicit account creation address.

___

### implicitAccountTransition

▸ **implicitAccountTransition**(`outputId`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Transitions an implicit account to an account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | Identifier of the implicit account output. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The created transaction.

___

### prepareImplicitAccountTransition

▸ **prepareImplicitAccountTransition**(`outputId`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepares to transition an implicit account to an account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputId` | `string` | Identifier of the implicit account output. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### implicitAccounts

▸ **implicitAccounts**(): `Promise`\<[`OutputData`](OutputData.md)[]\>

Returns the implicit accounts of the wallet.

#### Returns

`Promise`\<[`OutputData`](OutputData.md)[]\>

The implicit accounts of the wallet.

___

### incomingTransactions

▸ **incomingTransactions**(): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)[]\>

List all incoming transactions of the wallet.

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)[]\>

The incoming transactions with their inputs.

___

### transactions

▸ **transactions**(): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)[]\>

List all the transactions of the wallet.

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)[]\>

The transactions.

___

### unspentOutputs

▸ **unspentOutputs**(`filterOptions?`): `Promise`\<[`OutputData`](OutputData.md)[]\>

List all the unspent outputs of the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterOptions?` | [`FilterOptions`](../interfaces/FilterOptions.md) | Options to filter the to be returned outputs. |

#### Returns

`Promise`\<[`OutputData`](OutputData.md)[]\>

The outputs with metadata.

___

### mintNativeToken

▸ **mintNativeToken**(`tokenId`, `mintAmount`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Mint additional native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `mintAmount` | `bigint` | To be minted amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The minting transaction.

___

### prepareMintNativeToken

▸ **prepareMintNativeToken**(`tokenId`, `mintAmount`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Mint additional native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The native token id. |
| `mintAmount` | `bigint` | To be minted amount. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared minting transaction.

___

### createNativeToken

▸ **createNativeToken**(`params`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Create a native token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateNativeTokenParams`](../interfaces/CreateNativeTokenParams.md) | The options for creating a native token. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The created transaction.

___

### prepareCreateNativeToken

▸ **prepareCreateNativeToken**(`params`, `transactionOptions?`): `Promise`\<[`PreparedCreateNativeTokenTransaction`](PreparedCreateNativeTokenTransaction.md)\>

Create a native token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateNativeTokenParams`](../interfaces/CreateNativeTokenParams.md) | The options for creating a native token. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedCreateNativeTokenTransaction`](PreparedCreateNativeTokenTransaction.md)\>

The created transaction and the token ID.

___

### mintNfts

▸ **mintNfts**(`params`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Mint NFTs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MintNftParams`](../interfaces/MintNftParams.md)[] | The options for minting nfts. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The minting transaction.

___

### prepareMintNfts

▸ **prepareMintNfts**(`params`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Mint NFTs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`MintNftParams`](../interfaces/MintNftParams.md)[] | The options for minting nfts. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared minting transaction.

___

### prepareOutput

▸ **prepareOutput**(`params`, `transactionOptions?`): `Promise`\<[`Output`](Output.md)\>

Prepare an output for sending, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`OutputParams`](../interfaces/OutputParams.md) | - |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`Output`](Output.md)\>

The prepared output.

___

### prepareSend

▸ **prepareSend**(`params`, `options?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare to send base coins, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendParams`](../interfaces/SendParams.md)[] | Address with amounts to send. |
| `options?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction data.

___

### createDelegation

▸ **createDelegation**(`params`, `transactionOptions?`): `Promise`\<[`CreateDelegationTransaction`](CreateDelegationTransaction.md)\>

Create a delegation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateDelegationParams`](../interfaces/CreateDelegationParams.md) | The options for creating a delegation. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`CreateDelegationTransaction`](CreateDelegationTransaction.md)\>

The created transaction and the delegation ID.

___

### prepareCreateDelegation

▸ **prepareCreateDelegation**(`params`, `transactionOptions?`): `Promise`\<[`PreparedCreateDelegationTransaction`](PreparedCreateDelegationTransaction.md)\>

Prepare a transaction to create a delegation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateDelegationParams`](../interfaces/CreateDelegationParams.md) | The options for creating a delegation. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedCreateDelegationTransaction`](PreparedCreateDelegationTransaction.md)\>

The prepared transaction and the delegation ID.

___

### delayDelegationClaiming

▸ **delayDelegationClaiming**(`delegationId`, `reclaimExcess`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Delay a delegation's claiming.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delegationId` | `string` | The id of the delegation to delay. |
| `reclaimExcess` | `boolean` | Indicates whether excess value over the minimum storage requirements will be moved to a basic output that is unlockable by the same address which controls the delegation. Otherwise it will be added to a new delegation. In this manner, one can delegate for one epoch at a time and never lose out on any rewards. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The created transaction.

___

### prepareDelayDelegationClaiming

▸ **prepareDelayDelegationClaiming**(`delegationId`, `reclaimExcess`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare a transaction to delay a delegation's claiming.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delegationId` | `string` | The id of the delegation to delay. |
| `reclaimExcess` | `boolean` | Whether any excess funds should be reclaimed, or put into a new delegation. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### beginStaking

▸ **beginStaking**(`params`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Begin staking.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`BeginStakingParams`](../interfaces/BeginStakingParams.md) | The options for beginning staking. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The created transaction.

___

### prepareBeginStaking

▸ **prepareBeginStaking**(`params`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare a transaction to begin staking.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`BeginStakingParams`](../interfaces/BeginStakingParams.md) | The options for beginning staking. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### extendStaking

▸ **extendStaking**(`accountId`, `additionalEpochs`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Extend staking period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The ID of the staking account. |
| `additionalEpochs` | `number` | The number of epochs to add to the staking period. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The created transaction.

___

### prepareExtendStaking

▸ **prepareExtendStaking**(`accountId`, `additionalEpochs`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare a transaction to extend a staking period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The ID of the staking account. |
| `additionalEpochs` | `number` | The number of epochs to add to the staking period. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### endStaking

▸ **endStaking**(`accountId`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

End staking and claim rewards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The ID of the staking account. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The created transaction.

___

### prepareEndStaking

▸ **prepareEndStaking**(`accountId`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare a transaction to end staking and claim rewards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The ID of the staking account. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### announceCandidacy

▸ **announceCandidacy**(`accountId`): `Promise`\<`string`\>

Announce a staking account's candidacy for the staking period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | The ID of the account to announce candidacy. |

#### Returns

`Promise`\<`string`\>

The submitted block ID.

___

### sendTransaction

▸ **sendTransaction**(`outputs`, `options?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Send a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`Output`](Output.md)[] | Outputs to use in the transaction. |
| `options?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction data.

___

### prepareTransaction

▸ **prepareTransaction**(`outputs`, `options?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare a transaction, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`Output`](Output.md)[] | Outputs to use in the transaction. |
| `options?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction data.

___

### registerParticipationEvents

▸ **registerParticipationEvents**(`options`): `Promise`\<[`ParticipationEventMap`](../api_ref.md#participationeventmap)\>

Register participation events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ParticipationEventRegistrationOptions`](../interfaces/ParticipationEventRegistrationOptions.md) | Options to register participation events. |

#### Returns

`Promise`\<[`ParticipationEventMap`](../api_ref.md#participationeventmap)\>

A mapping between event IDs and their corresponding event data.

___

### waitForTransactionAcceptance

▸ **waitForTransactionAcceptance**(`transactionId`, `interval?`, `maxAttempts?`): `Promise`\<`string`\>

Checks the transaction state for a provided transaction id until it's accepted. Interval in milliseconds. Returns the block id that
contains this transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |
| `interval?` | `number` |
| `maxAttempts?` | `number` |

#### Returns

`Promise`\<`string`\>

___

### send

▸ **send**(`amount`, `address`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Send base coins to an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `bigint` | Amount of coins. |
| `address` | `string` | Receiving address. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The sent transaction.

___

### sendWithParams

▸ **sendWithParams**(`params`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Send base coins with amounts from input addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendParams`](../interfaces/SendParams.md)[] | Addresses with amounts. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The sent transaction.

___

### sendNativeTokens

▸ **sendNativeTokens**(`params`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Send native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendNativeTokenParams`](../interfaces/SendNativeTokenParams.md)[] | Addresses amounts and native tokens. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### prepareSendNativeTokens

▸ **prepareSendNativeTokens**(`params`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Send native tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendNativeTokenParams`](../interfaces/SendNativeTokenParams.md)[] | Addresses amounts and native tokens. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### sendNft

▸ **sendNft**(`params`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Send NFT.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendNftParams`](../interfaces/SendNftParams.md)[] | Addresses and nft ids. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### prepareSendNft

▸ **prepareSendNft**(`params`, `transactionOptions?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Send NFT.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SendNftParams`](../interfaces/SendNftParams.md)[] | Addresses and nft ids. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

The prepared transaction.

___

### sendOutputs

▸ **sendOutputs**(`outputs`, `transactionOptions?`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Send outputs in a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`Output`](Output.md)[] | The outputs to send. |
| `transactionOptions?` | [`TransactionOptions`](../interfaces/TransactionOptions.md) | Additional transaction options. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The sent transaction.

___

### setAlias

▸ **setAlias**(`alias`): `Promise`\<`void`\>

Set the alias for the account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | The account alias to set. |

#### Returns

`Promise`\<`void`\>

___

### setDefaultSyncOptions

▸ **setDefaultSyncOptions**(`options`): `Promise`\<`void`\>

Set the fallback SyncOptions for account syncing.
If storage is enabled, will persist during restarts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SyncOptions`](../interfaces/SyncOptions.md) | The sync options to set. |

#### Returns

`Promise`\<`void`\>

___

### signTransaction

▸ **signTransaction**(`preparedTransactionData`): `Promise`\<[`SignedTransactionData`](SignedTransactionData.md)\>

Sign a prepared transaction, useful for offline signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedTransactionData` | [`PreparedTransactionData`](PreparedTransactionData.md) | The prepared transaction data to sign. |

#### Returns

`Promise`\<[`SignedTransactionData`](SignedTransactionData.md)\>

The signed transaction.

___

### signAndSubmitTransaction

▸ **signAndSubmitTransaction**(`preparedTransactionData`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Sign a prepared transaction, and send it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedTransactionData` | [`PreparedTransactionData`](PreparedTransactionData.md) | The prepared transaction data to sign and submit. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The transaction.

___

### submitAndStoreTransaction

▸ **submitAndStoreTransaction**(`signedTransactionData`): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

Validate the transaction, submit it to a node and store it in the wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signedTransactionData` | [`SignedTransactionData`](SignedTransactionData.md) | A signed transaction to submit and store. |

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The sent transaction.

___

### sync

▸ **sync**(`options?`): `Promise`\<[`Balance`](../interfaces/Balance.md)\>

Sync the account by fetching new information from the nodes.
Will also reissue pending transactions if necessary.
A custom default can be set using setDefaultSyncOptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`SyncOptions`](../interfaces/SyncOptions.md) | Optional synchronization options. |

#### Returns

`Promise`\<[`Balance`](../interfaces/Balance.md)\>

The account balance.

___

### prepareVote

▸ **prepareVote**(`eventId?`, `answers?`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare a vote.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId?` | `string` | The participation event ID. |
| `answers?` | `number`[] | Answers for a voting event, can be empty. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

An instance of `PreparedTransaction`.

___

### prepareStopParticipating

▸ **prepareStopParticipating**(`eventId`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare stop participating in an event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `string` | The event ID to stop participating in. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

An instance of `PreparedTransaction`.

___

### getParticipationOverview

▸ **getParticipationOverview**(`eventIds?`): `Promise`\<[`ParticipationOverview`](../interfaces/ParticipationOverview.md)\>

Calculates the voting overview of a wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventIds?` | `string`[] | Optional, filters participations only for provided events. |

#### Returns

`Promise`\<[`ParticipationOverview`](../interfaces/ParticipationOverview.md)\>

An instance of `ParticipationOverview`

___

### prepareIncreaseVotingPower

▸ **prepareIncreaseVotingPower**(`amount`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare to increase the voting power.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | The amount to increase the voting power by. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

An instance of `PreparedTransaction`.

___

### prepareDecreaseVotingPower

▸ **prepareDecreaseVotingPower**(`amount`): `Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

Prepare to decrease the voting power.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | The amount to decrease the voting power by. |

#### Returns

`Promise`\<[`PreparedTransaction`](PreparedTransaction.md)\>

An instance of `PreparedTransaction`.
