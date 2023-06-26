---
sidebar_label: wallet
title: iota_sdk.wallet.wallet
---

## Wallet Objects

```python
class Wallet()
```

### \_\_init\_\_

```python
def __init__(
    storage_path: Optional[str] = None,
    client_options: Optional[Dict[str, Any]] = None,
    coin_type: Optional[int] = None,
    secret_manager: Optional[LedgerNanoSecretManager | MnemonicSecretManager
                             | StrongholdSecretManager] = None)
```

Initialize the IOTA Wallet.

### create_account

```python
def create_account(alias: Optional[str] = None,
                   bech32_hrp: Optional[str] = None)
```

Create a new account

### get_account

```python
def get_account(account_id: str | int) -> Account
```

Get the account instance

### get_client

```python
def get_client()
```

Get the client instance

### get_secret_manager

```python
def get_secret_manager()
```

Get the secret manager instance

### get_account_data

```python
def get_account_data(account_id: str | int)
```

Get account data

### get_accounts

```python
def get_accounts()
```

Get accounts

### backup

```python
def backup(destination: str, password: str)
```

Backup storage.

### change_stronghold_password

```python
def change_stronghold_password(password: str)
```

Change stronghold password.

### clear_stronghold_password

```python
def clear_stronghold_password()
```

Clear stronghold password.

### is_stronghold_password_available

```python
def is_stronghold_password_available() -> bool
```

Is stronghold password available.

### recover_accounts

```python
def recover_accounts(account_start_index: int,
                     account_gap_limit: int,
                     address_gap_limit: int,
                     sync_options: Optional[Any] = None)
```

Recover accounts.

### remove_latest_account

```python
def remove_latest_account()
```

Remove latest account.

### restore_backup

```python
def restore_backup(source: str, password: str)
```

Restore a backup from a Stronghold file
Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created
If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was
stored, it will be gone.

### generate_mnemonic

```python
def generate_mnemonic() -> str
```

Generates a new mnemonic.

### verify_mnemonic

```python
def verify_mnemonic(mnemonic: str)
```

Checks if the given mnemonic is valid.

### set_client_options

```python
def set_client_options(client_options)
```

Updates the client options for all accounts.

### generate_ed25519_address

```python
def generate_ed25519_address(account_index: int,
                             internal: bool,
                             address_index: int,
                             options=None,
                             bech32_hrp: Optional[str] = None) -> List[str]
```

Generate an address without storing it.

### set_stronghold_password

```python
def set_stronghold_password(password: str)
```

Set stronghold password.

### set_stronghold_password_clear_interval

```python
def set_stronghold_password_clear_interval(interval_in_milliseconds: int)
```

Set stronghold password clear interval.

### store_mnemonic

```python
def store_mnemonic(mnemonic: str)
```

Store mnemonic.

### start_background_sync

```python
def start_background_sync(options, interval_in_milliseconds: int)
```

Start background sync.

### stop_background_sync

```python
def stop_background_sync()
```

Stop background syncing.

### listen

```python
def listen(handler, events: Optional[List[str]] = None)
```

Listen to wallet events, empty array or None will listen to all events
The default value for events is None

### clear_listeners

```python
def clear_listeners(events: Optional[List[str]] = None)
```

Remove wallet event listeners, empty array or None will remove all listeners
The default value for events is None

### destroy

```python
def destroy()
```

Destroys the wallet instance.
