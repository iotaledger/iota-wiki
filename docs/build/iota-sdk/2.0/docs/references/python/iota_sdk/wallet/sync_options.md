---
sidebar_label: sync_options
title: iota_sdk.wallet.sync_options
---

## WalletSyncOptions Objects

```python
@json

@dataclass
class WalletSyncOptions()
```

Specifies what outputs should be synced for the ed25519 address from the wallet.

**Attributes**:

- `basic_outputs` - Whether to sync basic outputs.
- `nft_outputs` - Whether to sync NFT outputs.
- `account_outputs` - whether to sync account outputs.

## AccountSyncOptions Objects

```python
@json

@dataclass
class AccountSyncOptions()
```

Specifies what outputs should be synced for the address of an account output.

**Attributes**:

- `basic_outputs` - Whether to sync basic outputs.
- `nft_outputs` - Whether to sync NFT outputs.
- `account_outputs` - Whether to sync account outputs.
- `foundry_outputs` - Whether to sync foundry outputs.

## NftSyncOptions Objects

```python
@json

@dataclass
class NftSyncOptions()
```

Specifies what outputs should be synced for the address of an nft output.

**Attributes**:

- `basic_outputs` - Whether to sync basic outputs.
- `nft_outputs` - Whether to sync NFT outputs.
- `account_outputs` - Whether to sync account outputs.

## SyncOptions Objects

```python
@json

@dataclass
class SyncOptions()
```

The synchronization options.

**Attributes**
* __force_syncing__*:*  
    Usually syncing is skipped if it&#x27;s called in between 200ms, because there can only be new
    changes every milestone and calling it twice &quot;at the same time&quot; will not return new data.
    When this is set to true, we will sync anyways, even if it&#x27;s called 0ms after the last sync
    finished.
* __sync_incoming_transactions__*:*  
    Try to sync transactions from incoming outputs with their inputs. Some data may not be obtained
    if it has been pruned.
* __sync_pending_transactions__*:*  
    Checks pending transactions.
* __account__*:*  
    Specifies what outputs should be synced for the address of an account output.
* __wallet__*:*  
    Specifies what outputs should be synced for the address of an account output.
* __nft__*:*  
    Specifies what outputs should be synced for the address of an nft output.
* __sync_only_most_basic_outputs__*:*  
    Specifies if only basic outputs with just an address unlock condition should be synced.
    This will overwrite the `wallet`, `alias` and `nft` options.
* __sync_native_token_foundries__*:*  
    Sync native token foundries, so their metadata can be returned in the balance.
* __sync_implicit_accounts__*:*  
    Sync implicit accounts.

