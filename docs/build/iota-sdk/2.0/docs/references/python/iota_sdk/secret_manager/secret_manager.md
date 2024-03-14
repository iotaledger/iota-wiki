---
sidebar_label: secret_manager
title: iota_sdk.secret_manager.secret_manager
---

## LedgerNanoSecretManager Objects

```python
class LedgerNanoSecretManager(dict)
```

Secret manager that uses a Ledger Nano hardware wallet or a Speculos simulator.

### \_\_init\_\_

```python
def __init__(is_simulator)
```

Initialize a Ledger Nano secret manager.

**Arguments**:

- `is_simulator` - Whether this is a simulated Ledger Nano device.

## MnemonicSecretManager Objects

```python
class MnemonicSecretManager(dict)
```

Secret manager that uses a mnemonic held in memory.
This is not recommended in production. Use LedgerNano or Stronghold instead.

### \_\_init\_\_

```python
def __init__(mnemonic)
```

Initialize a mnemonic secret manager.

**Arguments**:

- `mnemonic` - The root secret of this type of secret manager.

## SeedSecretManager Objects

```python
class SeedSecretManager(dict)
```

Secret manager that uses a seed.

### \_\_init\_\_

```python
def __init__(seed)
```

Initialize a seed secret manager.

**Arguments**:

- `seed` - The root secret of this type of secret manager.

## StrongholdSecretManager Objects

```python
class StrongholdSecretManager(dict)
```

Secret manager that uses Stronghold.

### \_\_init\_\_

```python
def __init__(snapshot_path, password)
```

Initialize a stronghold secret manager.

**Arguments**:

- `snapshot_path` - The path to the Stronghold snapshot file.
- `password` - The password to unlock the Stronghold snapshot file.

## Inner Objects

```python
class Inner(dict)
```

Inner storage for stronghold configuration information.

## SecretManagerError Objects

```python
class SecretManagerError(Exception)
```

Secret manager error.

## SecretManager Objects

```python
class SecretManager()
```

Secret manager wrapper.

### \_\_init\_\_

```python
def __init__(secret_manager: Optional[Union[LedgerNanoSecretManager,
                                            MnemonicSecretManager,
                                            SeedSecretManager,
                                            StrongholdSecretManager]] = None,
             secret_manager_handle=None)
```

Initialize a secret manager.

**Arguments**:

- `secret_manager` - One of the supported secret managers.
- `secret_manager_handle` - A handle to a secret manager.

### generate\_ed25519\_addresses

```python
def generate_ed25519_addresses(account_index: Optional[int] = None,
                               start: Optional[int] = None,
                               end: Optional[int] = None,
                               internal: Optional[bool] = None,
                               coin_type: Optional[int] = None,
                               bech32_hrp: Optional[str] = None,
                               ledger_nano_prompt: Optional[bool] = None)
```

Generate Ed25519 addresses.

**Arguments**:

- `account_index` - An account index.
- `start` - The start index of the addresses to generate.
- `end` - The end index of the addresses to generate.
- `internal` - Whether the generated addresses should be internal.
- `coin_type` - The coin type to generate addresses for.
- `bech32_hrp` - The bech32 HRP (human readable part) to use.
- `ledger_nano_prompt` - Whether to display the address on Ledger Nano devices.
  

**Returns**:

  The generated Ed25519 addresses.

### generate\_evm\_addresses

```python
def generate_evm_addresses(account_index: Optional[int] = None,
                           start: Optional[int] = None,
                           end: Optional[int] = None,
                           internal: Optional[bool] = None,
                           coin_type: Optional[int] = None,
                           ledger_nano_prompt: Optional[bool] = None)
```

Generate EVM addresses.

**Arguments**:

- `account_index` - An account index.
- `start` - The start index of the addresses to generate.
- `end` - The end index of the addresses to generate.
- `internal` - Whether the generated addresses should be internal.
- `coin_type` - The coin type to generate addresses for.
- `ledger_nano_prompt` - Whether to display the address on Ledger Nano devices.
  

**Returns**:

  The generated EVM addresses.

### get\_ledger\_nano\_status

```python
def get_ledger_nano_status()
```

Return the Ledger Status.

### store\_mnemonic

```python
def store_mnemonic(mnemonic: str)
```

Store a mnemonic.

**Arguments**:

- `mnemonic` - A mnemonic to store in the secret manager.

### sign\_ed25519

```python
def sign_ed25519(message: HexStr, chain: Bip44) -> Ed25519Signature
```

Signs a message with an Ed25519 private key.

**Arguments**:

- `message` - The given message to sign.
- `chain` - The chain to sign with.
  

**Returns**:

  The Ed25519 signature.

### sign\_secp256k1\_ecdsa

```python
def sign_secp256k1_ecdsa(message: HexStr, chain: Bip44)
```

Signs a message with an Secp256k1Ecdsa private key.

**Arguments**:

- `message` - The given message to sign.
- `chain` - The chain to sign with.

### sign\_transaction

```python
def sign_transaction(
        prepared_transaction_data: PreparedTransactionData,
        protocol_parameters: ProtocolParameters) -> SignedTransactionPayload
```

Sign a transaction.

**Arguments**:

- `prepare_transaction_data` - The prepared transaction data that needs to be signed.
- `protocol_parameters` - The protocol parameters used in creating the signed transaction.

### sign\_block

```python
def sign_block(unsigned_block: UnsignedBlock, chain: Bip44) -> Block
```

Sign a block.

**Arguments**:

- `unsigned_block` - The unsigned block data.
- `chain` - The Bip44 chain to use.

### signature\_unlock

```python
def signature_unlock(transaction_signing_hash: HexStr, chain: Bip44)
```

Sign a transaction hash.

**Arguments**:

- `transaction_signing_hash` - The transaction hash to sign.
- `chain` - The chain to sign with.

