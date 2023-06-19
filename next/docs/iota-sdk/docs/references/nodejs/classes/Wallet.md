# Class: Wallet

The Wallet class.

## Table of contents

### Methods

- [backup](Wallet.md#backup)
- [changeStrongholdPassword](Wallet.md#changestrongholdpassword)
- [clearStrongholdPassword](Wallet.md#clearstrongholdpassword)
- [createAccount](Wallet.md#createaccount)
- [destroy](Wallet.md#destroy)
- [emitTestEvent](Wallet.md#emittestevent)
- [getAccount](Wallet.md#getaccount)
- [getAccountIndexes](Wallet.md#getaccountindexes)
- [getAccounts](Wallet.md#getaccounts)
- [getClient](Wallet.md#getclient)
- [generateEd25519Address](Wallet.md#generateed25519address)
- [getLedgerNanoStatus](Wallet.md#getledgernanostatus)
- [isStrongholdPasswordAvailable](Wallet.md#isstrongholdpasswordavailable)
- [listen](Wallet.md#listen)
- [clearListeners](Wallet.md#clearlisteners)
- [recoverAccounts](Wallet.md#recoveraccounts)
- [removeLatestAccount](Wallet.md#removelatestaccount)
- [restoreBackup](Wallet.md#restorebackup)
- [setClientOptions](Wallet.md#setclientoptions)
- [setStrongholdPassword](Wallet.md#setstrongholdpassword)
- [setStrongholdPasswordClearInterval](Wallet.md#setstrongholdpasswordclearinterval)
- [startBackgroundSync](Wallet.md#startbackgroundsync)
- [stopBackgroundSync](Wallet.md#stopbackgroundsync)
- [storeMnemonic](Wallet.md#storemnemonic)
- [updateNodeAuth](Wallet.md#updatenodeauth)

## Methods

### backup

▸ **backup**(`destination`, `password`): `Promise`<`void`\>

Backup the data to a Stronghold snapshot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

___

### changeStrongholdPassword

▸ **changeStrongholdPassword**(`currentPassword`, `newPassword`): `Promise`<`void`\>

Change the Stronghold password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`Promise`<`void`\>

___

### clearStrongholdPassword

▸ **clearStrongholdPassword**(): `Promise`<`void`\>

Clear the Stronghold password from memory.

#### Returns

`Promise`<`void`\>

___

### createAccount

▸ **createAccount**(`data`): `Promise`<[`Account`](Account.md)\>

Create a new account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CreateAccountPayload`](../interfaces/CreateAccountPayload.md) |

#### Returns

`Promise`<[`Account`](Account.md)\>

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

Destroy the Wallet and drop its database connection.

#### Returns

`Promise`<`void`\>

___

### emitTestEvent

▸ **emitTestEvent**(`event`): `Promise`<`void`\>

Emit a provided event for testing of the event system.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `WalletEvent` |

#### Returns

`Promise`<`void`\>

___

### getAccount

▸ **getAccount**(`accountId`): `Promise`<[`Account`](Account.md)\>

Get an account by its alias or index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | [`AccountId`](../api_ref.md#accountid) |

#### Returns

`Promise`<[`Account`](Account.md)\>

___

### getAccountIndexes

▸ **getAccountIndexes**(): `Promise`<`number`[]\>

Get all account indexes.

#### Returns

`Promise`<`number`[]\>

___

### getAccounts

▸ **getAccounts**(): `Promise`<[`Account`](Account.md)[]\>

Get all accounts.

#### Returns

`Promise`<[`Account`](Account.md)[]\>

___

### getClient

▸ **getClient**(): `Promise`<[`Client`](Client.md)\>

Get client.

#### Returns

`Promise`<[`Client`](Client.md)\>

___

### generateEd25519Address

▸ **generateEd25519Address**(`accountIndex`, `addressIndex`, `options?`, `bech32Hrp?`): `Promise`<`string`\>

Generate an address without storing it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountIndex` | `number` |
| `addressIndex` | `number` |
| `options?` | [`GenerateAddressOptions`](../interfaces/GenerateAddressOptions.md) |
| `bech32Hrp?` | `string` |

#### Returns

`Promise`<`string`\>

___

### getLedgerNanoStatus

▸ **getLedgerNanoStatus**(): `Promise`<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

Get the status for a Ledger Nano.

#### Returns

`Promise`<[`LedgerNanoStatus`](../interfaces/LedgerNanoStatus.md)\>

___

### isStrongholdPasswordAvailable

▸ **isStrongholdPasswordAvailable**(): `Promise`<`boolean`\>

Check if the Stronghold password has been set.

#### Returns

`Promise`<`boolean`\>

___

### listen

▸ **listen**(`eventTypes`, `callback`): `Promise`<`void`\>

Listen to wallet events with a callback. An empty array will listen to all possible events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTypes` | [`WalletEventType`](../enums/WalletEventType.md)[] |
| `callback` | (`error`: `Error`, `event`: `Event`) => `void` |

#### Returns

`Promise`<`void`\>

___

### clearListeners

▸ **clearListeners**(`eventTypes`): `Promise`<`void`\>

Clear the callbacks for provided events. An empty array will clear all listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTypes` | [`WalletEventType`](../enums/WalletEventType.md)[] |

#### Returns

`Promise`<`void`\>

___

### recoverAccounts

▸ **recoverAccounts**(`accountStartIndex`, `accountGapLimit`, `addressGapLimit`, `syncOptions`): `Promise`<[`Account`](Account.md)[]\>

Find accounts with unspent outputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountStartIndex` | `number` |
| `accountGapLimit` | `number` |
| `addressGapLimit` | `number` |
| `syncOptions` | [`SyncOptions`](../interfaces/SyncOptions.md) |

#### Returns

`Promise`<[`Account`](Account.md)[]\>

___

### removeLatestAccount

▸ **removeLatestAccount**(): `Promise`<`void`\>

Delete the latest account.

#### Returns

`Promise`<`void`\>

___

### restoreBackup

▸ **restoreBackup**(`source`, `password`, `ignoreIfCoinTypeMismatch?`, `ignoreIfBech32Mismatch?`): `Promise`<`void`\>

Restore a backup from a Stronghold file
Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created
If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was
stored, it will be gone.
if ignore_if_coin_type_mismatch is provided client options will not be restored
if ignore_if_coin_type_mismatch == true, client options coin type and accounts will not be restored if the cointype doesn't match
if ignore_if_bech32_hrp_mismatch == Some("rms"), but addresses have something different like "smr", no accounts
will be restored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `password` | `string` |
| `ignoreIfCoinTypeMismatch?` | `boolean` |
| `ignoreIfBech32Mismatch?` | `string` |

#### Returns

`Promise`<`void`\>

___

### setClientOptions

▸ **setClientOptions**(`clientOptions`): `Promise`<`void`\>

Set ClientOptions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientOptions` | [`IClientOptions`](../interfaces/IClientOptions.md) |

#### Returns

`Promise`<`void`\>

___

### setStrongholdPassword

▸ **setStrongholdPassword**(`password`): `Promise`<`void`\>

Set the Stronghold password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

___

### setStrongholdPasswordClearInterval

▸ **setStrongholdPasswordClearInterval**(`intervalInMilliseconds?`): `Promise`<`void`\>

Set the interval after which the Stronghold password gets cleared from memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalInMilliseconds?` | `number` |

#### Returns

`Promise`<`void`\>

___

### startBackgroundSync

▸ **startBackgroundSync**(`options?`, `intervalInMilliseconds?`): `Promise`<`void`\>

Start the background syncing process for all accounts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SyncOptions`](../interfaces/SyncOptions.md) |
| `intervalInMilliseconds?` | `number` |

#### Returns

`Promise`<`void`\>

___

### stopBackgroundSync

▸ **stopBackgroundSync**(): `Promise`<`void`\>

Stop the background syncing process for all accounts.

#### Returns

`Promise`<`void`\>

___

### storeMnemonic

▸ **storeMnemonic**(`mnemonic`): `Promise`<`void`\>

Store a mnemonic in the Stronghold snapshot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`Promise`<`void`\>

___

### updateNodeAuth

▸ **updateNodeAuth**(`url`, `auth?`): `Promise`<`void`\>

Update the authentication for the provided node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `auth?` | [`IAuth`](../interfaces/IAuth.md) |

#### Returns

`Promise`<`void`\>
