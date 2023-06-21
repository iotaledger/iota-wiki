---
sidebar_label: wallet
title: iota_wallet.wallet
---

## IotaWallet Objects

```python
class IotaWallet()
```

### \_\_init\_\_

```python
def __init__(storage_path='./walletdb',
             client_options=None,
             coin_type=None,
             secret_manager=None)
```

Initialize the IOTA Wallet.

### create_account

```python
def create_account(alias=None, bech32_hrp=None)
```

Create a new account

### get_account

```python
def get_account(account_id)
```

Get the account instance

### get_account_data

```python
def get_account_data(account_id)
```

Get account data

### get_accounts

```python
def get_accounts()
```

Get accounts

### backup

```python
def backup(destination, password)
```

Backup storage.

### bech32_to_hex

```python
def bech32_to_hex(bech32_address)
```

Transforms a bech32 encoded address to hex

### change_stronghold_password

```python
def change_stronghold_password(password)
```

Change stronghold password.

### clear_stronghold_password

```python
def clear_stronghold_password()
```

Clear stronghold password.

### is_stronghold_password_available

```python
def is_stronghold_password_available()
```

Is stronghold password available.

### recover_accounts

```python
def recover_accounts(account_start_index, account_gap_limit, address_gap_limit,
                     sync_options)
```

Recover accounts.

### remove_latest_account

```python
def remove_latest_account()
```

Remove latest account.

### restore_backup

```python
def restore_backup(source, password)
```

Restore a backup from a Stronghold file
Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created
If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was
stored, it will be gone.

### generate_mnemonic

```python
def generate_mnemonic()
```

Generates a new mnemonic.

### verify_mnemonic

```python
def verify_mnemonic(mnemonic)
```

Checks if the given mnemonic is valid.

### set_client_options

```python
def set_client_options(client_options)
```

Updates the client options for all accounts.

### generate_address

```python
def generate_address(account_index,
                     internal,
                     address_index,
                     options=None,
                     bech32_hrp=None)
```

Generate an address without storing it.

### get_node_info

```python
def get_node_info(url, auth)
```

Get node info.

### set_stronghold_password

```python
def set_stronghold_password(password)
```

Set stronghold password.

### set_stronghold_password_clear_interval

```python
def set_stronghold_password_clear_interval(interval_in_milliseconds)
```

Set stronghold password clear interval.

### store_mnemonic

```python
def store_mnemonic(mnemonic)
```

Store mnemonic.

### start_background_sync

```python
def start_background_sync(options, interval_in_milliseconds)
```

Start background sync.

### stop_background_sync

```python
def stop_background_sync()
```

Stop background syncing.

### listen

```python
def listen(handler, events=None)
```

Listen to wallet events, empty array or None will listen to all events
The default value for events is None

### clear_listeners

```python
def clear_listeners(events=None)
```

Remove wallet event listeners, empty array or None will remove all listeners
The default value for events is None
