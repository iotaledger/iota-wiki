---
sidebar_label: utils
title: iota_sdk.utils
---

## Utils Objects

```python
class Utils()
```

Utility functions.

### bech32\_to\_hex

```python
@staticmethod
def bech32_to_hex(bech32: str) -> HexStr
```

Convert a Bech32 string to a hex string.

### hex\_to\_bech32

```python
@staticmethod
def hex_to_bech32(hex_str: HexStr, bech32_hrp: str) -> str
```

Convert a hex encoded address to a Bech32 encoded address.

### account\_id\_to\_bech32

```python
@staticmethod
def account_id_to_bech32(account_id: HexStr, bech32_hrp: str) -> str
```

Convert an account id to a Bech32 encoded address.

### anchor\_id\_to\_bech32

```python
@staticmethod
def anchor_id_to_bech32(anchor_id: HexStr, bech32_hrp: str) -> str
```

Convert an anchor id to a Bech32 encoded address.

### nft\_id\_to\_bech32

```python
@staticmethod
def nft_id_to_bech32(nft_id: HexStr, bech32_hrp: str) -> str
```

Convert an NFT ID to a Bech32 encoded address.

### hex\_public\_key\_to\_bech32\_address

```python
@staticmethod
def hex_public_key_to_bech32_address(hex_str: HexStr, bech32_hrp: str) -> str
```

Convert a hex encoded public key to a Bech32 encoded address.

### parse\_bech32\_address

```python
@staticmethod
def parse_bech32_address(address: str) -> Address
```

Parse a string into a valid address.

### is\_address\_valid

```python
@staticmethod
def is_address_valid(address: str) -> bool
```

Check whether a string is a valid Bech32 encoded address.

### generate\_mnemonic

```python
@staticmethod
def generate_mnemonic() -> str
```

Generate a new mnemonic.

### mnemonic\_to\_hex\_seed

```python
@staticmethod
def mnemonic_to_hex_seed(mnemonic: str) -> HexStr
```

Convert a mnemonic to a hex encoded seed.

### compute\_account\_id

```python
@staticmethod
def compute_account_id(output_id: OutputId) -> HexStr
```

Compute the account id for the given account output id.

### compute\_foundry\_id

```python
@staticmethod
def compute_foundry_id(account_id: HexStr, serial_number: int,
                       token_scheme_type: int) -> HexStr
```

Compute the foundry id.

### compute\_minimum\_output\_amount

```python
@staticmethod
def compute_minimum_output_amount(output, storage_score_parameters) -> int
```

Calculate the minimum required amount for an output.

### compute\_nft\_id

```python
@staticmethod
def compute_nft_id(output_id: OutputId) -> HexStr
```

Compute the NFT id for the given NFT output id.

### compute\_output\_id

```python
@staticmethod
def compute_output_id(transaction_id: TransactionId, index: int) -> OutputId
```

Compute the output id from transaction id and output index.

### compute\_token\_id

```python
@staticmethod
def compute_token_id(account_id: HexStr, serial_number: int,
                     token_scheme_type: int) -> HexStr
```

Compute a token id from the account id, serial number and token scheme type.

### block\_id

```python
@staticmethod
def block_id(block: Block, params: ProtocolParameters) -> BlockId
```

Return a block ID (Blake2b256 hash of block bytes) from a block.

### transaction\_id

```python
@staticmethod
def transaction_id(payload: SignedTransactionPayload) -> TransactionId
```

Compute the transaction ID (Blake2b256 hash of the provided transaction payload) of a transaction payload.

### protocol\_parameters\_hash

```python
@staticmethod
def protocol_parameters_hash(params: ProtocolParameters) -> HexStr
```

Compute the hash of a ProtocolParameters instance.

### transaction\_signing\_hash

```python
@staticmethod
def transaction_signing_hash(transaction: Transaction) -> HexStr
```

Compute the signing hash of a transaction.

### verify\_ed25519\_signature

```python
@staticmethod
def verify_ed25519_signature(signature: Ed25519Signature,
                             message: HexStr) -> bool
```

Verify an Ed25519 signature against a message.

### verify\_secp256k1\_ecdsa\_signature

```python
@staticmethod
def verify_secp256k1_ecdsa_signature(public_key: HexStr, signature: HexStr,
                                     message: HexStr) -> bool
```

Verify a Secp256k1Ecdsa signature against a message.

### verify\_transaction\_semantic

```python
@staticmethod
def verify_transaction_semantic(
        transaction: Transaction,
        inputs: List[InputSigningData],
        protocol_parameters: ProtocolParameters,
        unlocks: Optional[List[Unlock]] = None,
        mana_rewards: Optional[dict[OutputId, int]] = None) -> str
```

Verifies the semantic of a transaction.

### mana\_with\_decay

```python
@staticmethod
def mana_with_decay(mana: int, slot_index_created: int, slot_index_target: int,
                    protocol_parameters: ProtocolParameters) -> int
```

Applies mana decay to the given mana.

### generate\_mana\_with\_decay

```python
@staticmethod
def generate_mana_with_decay(amount: int, slot_index_created: int,
                             slot_index_target: int,
                             protocol_parameters: ProtocolParameters) -> int
```

Calculates the potential mana that is generated by holding `amount` tokens from `slot_index_created` to
`slot_index_target` and applies the decay to the result.

### output\_mana\_with\_decay

```python
@staticmethod
def output_mana_with_decay(
        output: Output, slot_index_created: int, slot_index_target: int,
        protocol_parameters: ProtocolParameters) -> DecayedMana
```

Calculates the potential mana that is generated by holding `amount` tokens from `slot_index_created` to
`slot_index_target` and applies the decay to the result.

### verify\_transaction\_syntax

```python
@staticmethod
def verify_transaction_syntax(transaction: SignedTransactionPayload,
                              protocol_parameters: ProtocolParameters)
```

Verifies the syntax of a transaction.

### block\_bytes

```python
@staticmethod
def block_bytes(block: Block) -> bytes
```

Returns the serialized bytes of a block.

## UtilsError Objects

```python
class UtilsError(Exception)
```

A utils error.

