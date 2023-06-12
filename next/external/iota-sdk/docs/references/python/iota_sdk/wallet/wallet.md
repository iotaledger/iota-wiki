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

### create\_account

```python
def create_account(alias: Optional[str] = None,
                   bech32_hrp: Optional[str] = None)
```

Create a new account

### get\_account

```python
def get_account(account_id: str | int) -> Account
```

Get the account instance

### get\_client

```python
def get_client()
```

Get the client instance

### get\_account\_data

```python
def get_account_data(account_id: str | int)
```

Get account data

### get\_accounts

```python
def get_accounts()
```

Get accounts

### backup

```python
def backup(destination: str, password: str)
```

Backup storage.

### change\_stronghold\_password

```python
def change_stronghold_password(password: str)
```

Change stronghold password.

### clear\_stronghold\_password

```python
def clear_stronghold_password()
```

Clear stronghold password.

### is\_stronghold\_password\_available

```python
def is_stronghold_password_available() -> bool
```

Is stronghold password available.

### recover\_accounts

```python
def recover_accounts(account_start_index: int,
                     account_gap_limit: int,
                     address_gap_limit: int,
                     sync_options: Optional[Any] = None)
```

Recover accounts.

### remove\_latest\_account

```python
def remove_latest_account()
```

Remove latest account.

### restore\_backup

```python
def restore_backup(source: str, password: str)
```

Restore a backup from a Stronghold file
Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created
If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was
stored, it will be gone.

### generate\_mnemonic

```python
def generate_mnemonic() -> str
```

Generates a new mnemonic.

### verify\_mnemonic

```python
def verify_mnemonic(mnemonic: str)
```

Checks if the given mnemonic is valid.

### set\_client\_options

```python
def set_client_options(client_options)
```

Updates the client options for all accounts.

### generate\_ed25519\_address

```python
def generate_ed25519_address(account_index: int,
                             internal: bool,
                             address_index: int,
                             options=None,
                             bech32_hrp: Optional[str] = None) -> List[str]
```

Generate an address without storing it.

### get\_node\_info

```python
def get_node_info(url: str, auth)
```

Get node info.

### set\_stronghold\_password

```python
def set_stronghold_password(password: str)
```

Set stronghold password.

### set\_stronghold\_password\_clear\_interval

```python
def set_stronghold_password_clear_interval(interval_in_milliseconds: int)
```

Set stronghold password clear interval.

### store\_mnemonic

```python
def store_mnemonic(mnemonic: str)
```

Store mnemonic.

### start\_background\_sync

```python
def start_background_sync(options, interval_in_milliseconds: int)
```

Start background sync.

### stop\_background\_sync

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

### clear\_listeners

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

