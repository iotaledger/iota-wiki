---
sidebar_label: feature
title: iota_sdk.types.feature
---

## Feature Objects

```python
class Feature()
```

### \_\_init\_\_

```python
def __init__(type, sender=None, issuer=None, data=None, tag=None)
```

Initialize a feature

Parameters
----------
type : FeatureType
    The type of feature
sender : Address
    Sender address
issuer : Address
    Issuer Address
data : string
    Hex encoded metadata
tag : string
    Hex encoded tag used to index the output

## SenderFeature Objects

```python
class SenderFeature(Feature)
```

### \_\_init\_\_

```python
def __init__(sender)
```

Initialize a SenderFeature

Parameters
----------
sender : Address
    Sender address

## IssuerFeature Objects

```python
class IssuerFeature(Feature)
```

### \_\_init\_\_

```python
def __init__(issuer)
```

Initialize an IssuerFeature

Parameters
----------
issuer : Address
    Issuer address

## MetadataFeature Objects

```python
class MetadataFeature(Feature)
```

### \_\_init\_\_

```python
def __init__(data: HexStr)
```

Initialize a MetadataFeature

Parameters
----------
data : HexStr
    Hex encoded metadata

## TagFeature Objects

```python
class TagFeature(Feature)
```

### \_\_init\_\_

```python
def __init__(tag: HexStr)
```

Initialize a TagFeature

Parameters
----------
tag : HexStr
    Hex encoded tag used to index the output

