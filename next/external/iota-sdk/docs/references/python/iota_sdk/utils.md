---
sidebar_label: utils
title: iota_sdk.utils
---

## Utils Objects

```python
class Utils()
```

### bech32\_to\_hex

```python
@staticmethod
def bech32_to_hex(bech32: str) -> HexStr
```

Transforms bech32 to hex.

### hex\_to\_bech32

```python
@staticmethod
def hex_to_bech32(hex: HexStr, bech32_hrp: str) -> str
```

Transforms a hex encoded address to a bech32 encoded address.

### alias\_id\_to\_bech32

```python
@staticmethod
def alias_id_to_bech32(alias_id: HexStr, bech32_hrp: str) -> str
```

Transforms an alias id to a bech32 encoded address.

### nft\_id\_to\_bech32

```python
@staticmethod
def nft_id_to_bech32(nft_id: HexStr, bech32_hrp: str) -> str
```

Transforms an nft id to a bech32 encoded address.

### hex\_public\_key\_to\_bech32\_address

```python
@staticmethod
def hex_public_key_to_bech32_address(hex: HexStr, bech32_hrp: str) -> str
```

Transforms a hex encoded public key to a bech32 encoded address.

### parse\_bech32\_address

```python
@staticmethod
def parse_bech32_address(address: str) -> Dict[str, Any]
```

Returns a valid Address parsed from a String.

### is\_address\_valid

```python
@staticmethod
def is_address_valid(address: str) -> bool
```

Checks if a String is a valid bech32 encoded address.

### generate\_mnemonic

```python
@staticmethod
def generate_mnemonic() -> str
```

Generates a new mnemonic.

### mnemonic\_to\_hex\_seed

```python
@staticmethod
def mnemonic_to_hex_seed(mnemonic: HexStr) -> HexStr
```

Returns a hex encoded seed for a mnemonic.

### compute\_alias\_id

```python
@staticmethod
def compute_alias_id(output_id: OutputId) -> HexStr
```

Computes the alias id for the given alias output id.

### compute\_nft\_id

```python
@staticmethod
def compute_nft_id(output_id: OutputId) -> HexStr
```

Computes the NFT id for the given NFT output id.

### compute\_foundry\_id

```python
@staticmethod
def compute_foundry_id(alias_address: str, serial_number: int,
                       token_scheme_kind: int) -> HexStr
```

Computes the foundry id.

### block\_id

```python
@staticmethod
def block_id(block) -> HexStr
```

Returns a block ID (Blake2b256 hash of block bytes) from a block.

### hash\_transaction\_essence

```python
@staticmethod
def hash_transaction_essence(essence) -> HexStr
```

Compute the hash of a transaction essence.

### verify\_ed25519\_signature

```python
@staticmethod
def verify_ed25519_signature(signature: HexStr, message: HexStr,
                             address: Ed25519Address) -> bool
```

Verifies the Ed25519Signature for a message against an Ed25519Address.

## UtilsError Objects

```python
class UtilsError(Exception)
```

utils error

