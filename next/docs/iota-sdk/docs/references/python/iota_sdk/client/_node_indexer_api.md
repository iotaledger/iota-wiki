---
sidebar_label: _node_indexer_api
title: iota_sdk.client._node_indexer_api
---

## NodeIndexerAPI Objects

```python
class NodeIndexerAPI()
```

### basic_output_ids

```python
def basic_output_ids(query_parameters: QueryParameters) -> OutputIdsResponse
```

Fetch basic output IDs.

### alias_output_ids

```python
def alias_output_ids(query_parameters: QueryParameters) -> OutputIdsResponse
```

Fetch alias output IDs.

### alias_output_id

```python
def alias_output_id(alias_id: HexStr) -> OutputId
```

Fetch alias output ID.

### nft_output_ids

```python
def nft_output_ids(query_parameters: QueryParameters) -> OutputIdsResponse
```

Fetch NFT output IDs.

### nft_output_id

```python
def nft_output_id(nft_id: HexStr) -> OutputId
```

Fetch NFT output ID.

### foundry_output_ids

```python
def foundry_output_ids(query_parameters: QueryParameters) -> OutputIdsResponse
```

Fetch foundry Output IDs.

### foundry_output_id

```python
def foundry_output_id(foundry_id: HexStr) -> OutputId
```

Fetch foundry Output ID.
