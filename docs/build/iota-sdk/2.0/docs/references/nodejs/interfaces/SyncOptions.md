# Interface: SyncOptions

Sync options for a wallet

## Table of contents

### Properties

- [forceSyncing](SyncOptions.md#forcesyncing)
- [syncIncomingTransactions](SyncOptions.md#syncincomingtransactions)
- [syncPendingTransactions](SyncOptions.md#syncpendingtransactions)
- [wallet](SyncOptions.md#wallet)
- [account](SyncOptions.md#account)
- [nft](SyncOptions.md#nft)
- [syncOnlyMostBasicOutputs](SyncOptions.md#synconlymostbasicoutputs)
- [syncNativeTokenFoundries](SyncOptions.md#syncnativetokenfoundries)
- [syncImplicitAccounts](SyncOptions.md#syncimplicitaccounts)

## Properties

### forceSyncing

• `Optional` **forceSyncing**: `boolean`

Usually syncing is skipped if it's called in between 200ms, because there can only be new changes every
milestone and calling it twice "at the same time" will not return new data
When this to true, we will sync anyways, even if it's called 0ms after the las sync finished. Default: false.

___

### syncIncomingTransactions

• `Optional` **syncIncomingTransactions**: `boolean`

___

### syncPendingTransactions

• `Optional` **syncPendingTransactions**: `boolean`

Checks pending transactions. Default: true.

___

### wallet

• `Optional` **wallet**: [`WalletSyncOptions`](WalletSyncOptions.md)

Specifies what outputs should be synced for the ed25519 address from the wallet.

___

### account

• `Optional` **account**: [`AccountSyncOptions`](AccountSyncOptions.md)

Specifies what outputs should be synced for the address of an account output.

___

### nft

• `Optional` **nft**: [`NftSyncOptions`](NftSyncOptions.md)

Specifies what outputs should be synced for the address of an nft output.

___

### syncOnlyMostBasicOutputs

• `Optional` **syncOnlyMostBasicOutputs**: `boolean`

Specifies if only basic outputs with an AddressUnlockCondition alone should be synced, will overwrite `wallet`, `account` and `nft` options. Default: false.

___

### syncNativeTokenFoundries

• `Optional` **syncNativeTokenFoundries**: `boolean`

Sync native token foundries, so their metadata can be returned in the balance. Default: false.

___

### syncImplicitAccounts

• `Optional` **syncImplicitAccounts**: `boolean`
