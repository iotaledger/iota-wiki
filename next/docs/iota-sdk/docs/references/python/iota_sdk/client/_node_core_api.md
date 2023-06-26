---
sidebar_label: _node_core_api
title: iota_sdk.client._node_core_api
---

## NodeCoreAPI Objects

```python
class NodeCoreAPI()
```

### get_node_health

```python
def get_node_health(url: str)
```

Get node health.

### get_node_info

```python
def get_node_info(url: str, auth=None)
```

Get node info.

### get_info

```python
def get_info()
```

Returns the node information together with the url of the used node.

### get_peers

```python
def get_peers()
```

Get peers.

### get_tips

```python
def get_tips() -> List[HexStr]
```

Get tips.

### post_block

```python
def post_block(block)
```

Post block.

### get_block_data

```python
def get_block_data(block_id: HexStr)
```

Post block.

### get_block_metadata

```python
def get_block_metadata(block_id: HexStr)
```

Get block metadata with block_id.

### get_block_raw

```python
def get_block_raw(block_id: HexStr)
```

Get block raw.

### post_block_raw

```python
def post_block_raw(block_bytes)
```

Post block raw.

### get_output

```python
def get_output(output_id: OutputId)
```

Get output.

### get_output_metadata

```python
def get_output_metadata(output_id: OutputId)
```

Get output metadata.

### get_milestone_by_id

```python
def get_milestone_by_id(milestone_id: HexStr)
```

Get the milestone by the given milestone id.

### get_milestone_by_id_raw

```python
def get_milestone_by_id_raw(milestone_id: HexStr)
```

Get the raw milestone by the given milestone id.

### get_milestone_by_index

```python
def get_milestone_by_index(index: int)
```

Get the milestone by the given index.

### get_milestone_by_index_raw

```python
def get_milestone_by_index_raw(index: int)
```

Get the milestone by the given index.

### get_utxo_changes_by_id

```python
def get_utxo_changes_by_id(milestone_id: HexStr)
```

Get the UTXO changes by the given milestone id.

### get_utxo_changes_by_index

```python
def get_utxo_changes_by_index(index: int)
```

Get the UTXO changes by the given milestone index.

### get_receipts

```python
def get_receipts()
```

Get all receipts.

### get_receipts_migrated_at

```python
def get_receipts_migrated_at(milestone_index: int)
```

Get the receipts by the given milestone index.

### get_treasury

```python
def get_treasury()
```

Get the treasury output.

### get_included_block

```python
def get_included_block(transaction_id: HexStr)
```

Returns the included block of the transaction.

### get_included_block_metadata

```python
def get_included_block_metadata(transaction_id: HexStr)
```

Returns the metadata of the included block of the transaction.
