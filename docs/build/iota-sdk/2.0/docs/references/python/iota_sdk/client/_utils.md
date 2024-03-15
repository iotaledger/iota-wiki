---
sidebar_label: _utils
title: iota_sdk.client._utils
---

## ClientUtils Objects

```python
class ClientUtils(metaclass=ABCMeta)
```

Client utility functions.

### hex\_to\_bech32

```python
def hex_to_bech32(hex_str: HexStr, bech32_hrp: Optional[str] = None) -> str
```

Transforms a hex encoded address to a bech32 encoded address.

### account\_id\_to\_bech32

```python
def account_id_to_bech32(account_id: HexStr,
                         bech32_hrp: Optional[str] = None) -> str
```

Transforms an account id to a bech32 encoded address.

### anchor\_id\_to\_bech32

```python
def anchor_id_to_bech32(anchor_id: HexStr,
                        bech32_hrp: Optional[str] = None) -> str
```

Transforms an anchor id to a bech32 encoded address.

### nft\_id\_to\_bech32

```python
def nft_id_to_bech32(nft_id: HexStr, bech32_hrp: Optional[str] = None) -> str
```

Transforms an nft id to a bech32 encoded address.

### hex\_public\_key\_to\_bech32\_address

```python
def hex_public_key_to_bech32_address(hex_str: HexStr,
                                     bech32_hrp: Optional[str] = None) -> str
```

Transforms a hex encoded public key to a bech32 encoded address.

### computer\_minimum\_output\_amount

```python
def computer_minimum_output_amount(output: Output) -> int
```

Minimum required output amount.

### request\_funds\_from\_faucet

```python
def request_funds_from_faucet(url: str, address: str) -> str
```

Requests funds from the faucet, for example `https://faucet.testnet.shimmer.network/api/enqueue` or `http://localhost:8091/api/enqueue`.

### block\_id

```python
def block_id(block: Block) -> BlockId
```

Return a block ID (Blake2b256 hash of block bytes) from a block.

