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

#### Parameters

- **type**_: FeatureType_  
   The type of feature
- **sender**_: Address_  
   Sender address
- **issuer**_: Address_  
   Issuer Address
- **data**_: string_  
   Hex encoded metadata
- **tag**_: string_  
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

#### Parameters

- **sender**_: Address_  
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

#### Parameters

- **issuer**_: Address_  
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

#### Parameters

- **data**_: HexStr_  
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

#### Parameters

- **tag**_: HexStr_  
   Hex encoded tag used to index the output
