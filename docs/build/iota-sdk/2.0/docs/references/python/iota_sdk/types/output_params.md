---
sidebar_label: output_params
title: iota_sdk.types.output_params
---

## Assets Objects

```python
@json

@dataclass
class Assets()
```

Assets for OutputParams.

## Features Objects

```python
@json

@dataclass
class Features()
```

Features for OutputParams.

## Unlocks Objects

```python
@json

@dataclass
class Unlocks()
```

Unlocks for OutputParams.

## ReturnStrategy Objects

```python
class ReturnStrategy(str, Enum)
```

Return strategy for the StorageDeposit.

## StorageDeposit Objects

```python
@json

@dataclass
class StorageDeposit()
```

Storage deposit options for OutputParams.

## OutputParams Objects

```python
@json

@dataclass
class OutputParams()
```

Params for `Wallet.prepare_output()`.

