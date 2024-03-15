---
sidebar_label: burn
title: iota_sdk.types.burn
---

## Burn Objects

```python
@json

@dataclass
class Burn()
```

A DTO for `Burn`.

**Attributes**:

- `accounts` - The accounts to burn.
- `nfts` - The NFTs to burn.
- `foundries` - The foundries to burn.
- `native_tokens` - The native tokens to burn.

### add\_account

```python
def add_account(account: HexStr) -> Burn
```

Add an account to the burn.

### add\_nft

```python
def add_nft(nft: HexStr) -> Burn
```

Add an NFT to the burn.

### add\_foundry

```python
def add_foundry(foundry: HexStr) -> Burn
```

Add a foundry to the burn.

### add\_native\_token

```python
def add_native_token(native_token: NativeToken) -> Burn
```

Add a native token to the burn.

