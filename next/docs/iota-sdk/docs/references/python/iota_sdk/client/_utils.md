---
sidebar_label: _utils
title: iota_sdk.client._utils
---

## ClientUtils Objects

```python
class ClientUtils()
```

### hex_to_bech32

```python
def hex_to_bech32(hex: HexStr, bech32_hrp: str) -> str
```

Transforms a hex encoded address to a bech32 encoded address.

### alias_id_to_bech32

```python
def alias_id_to_bech32(alias_id: HexStr, bech32_hrp: str) -> str
```

Transforms an alias id to a bech32 encoded address.

### nft_id_to_bech32

```python
def nft_id_to_bech32(nft_id: HexStr, bech32_hrp: str) -> str
```

Transforms an nft id to a bech32 encoded address.

### hex_public_key_to_bech32_address

```python
def hex_public_key_to_bech32_address(hex: HexStr,
                                     bech32_hrp: Optional[str] = None) -> str
```

Transforms a hex encoded public key to a bech32 encoded address.

### request_funds_from_faucet

```python
def request_funds_from_faucet(url: str, address: str) -> str
```

Requests funds from the faucet, for example `https://faucet.testnet.shimmer.network/api/enqueue` or `http://localhost:8091/api/enqueue`.
