---
sidebar_label: address
title: iota_sdk.types.address
---

## Address Objects

```python
class Address()
```

### \_\_init\_\_

```python
def __init__(type: AddressType, address_or_id: HexStr)
```

Initialize an Address

Parameters
----------
type : AddressType
    The type of the Address
address_or_id : string
    The address to use. Can either be an hex encoded ED25519 address or NFT/Alias id

## Ed25519Address Objects

```python
class Ed25519Address(Address)
```

### \_\_init\_\_

```python
def __init__(address: HexStr)
```

Initialize an Ed25519Address

Parameters
----------
address : string
    The hex encoded address to use.

## AliasAddress Objects

```python
class AliasAddress(Address)
```

### \_\_init\_\_

```python
def __init__(address_or_id: HexStr)
```

Initialize an AliasAddress

Parameters
----------
address_or_id : string
    The hex encoded address to use.

## NFTAddress Objects

```python
class NFTAddress(Address)
```

### \_\_init\_\_

```python
def __init__(address_or_id: HexStr)
```

Initialize an NFTokenAddress

Parameters
----------
address_or_id : string
    The hex encoded address to use.

