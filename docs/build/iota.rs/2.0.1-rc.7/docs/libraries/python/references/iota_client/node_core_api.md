---
sidebar_label: node_core_api
title: iota_client.node_core_api
---

## NodeCoreAPI Objects

```python
class NodeCoreAPI(BaseAPI)
```

### get_node_health

```python
def get_node_health(url)
```

Get node health.

### get_node_info

```python
def get_node_info(url, auth=None)
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
def get_tips()
```

Get tips.

### post_block

```python
def post_block(block)
```

Post block.

### get_block_data

```python
def get_block_data(block_id)
```

Post block.

### get_block_metadata

```python
def get_block_metadata(block_id)
```

Get block metadata with block_id.

### get_block_raw

```python
def get_block_raw(block_id)
```

Get block raw.

### post_block_raw

```python
def post_block_raw(block_bytes)
```

Post block raw.

### get_output

```python
def get_output(output_id)
```

Get output.

### get_output_metadata

```python
def get_output_metadata(output_id)
```

Get output metadata.

### get_milestone_by_id

```python
def get_milestone_by_id(milestone_id)
```

Get the milestone by the given milestone id.

### get_milestone_by_id_raw

```python
def get_milestone_by_id_raw(milestone_id)
```

Get the raw milestone by the given milestone id.

### get_milestone_by_index

```python
def get_milestone_by_index(index)
```

Get the milestone by the given index.

### get_milestone_by_index_raw

```python
def get_milestone_by_index_raw(index)
```

Get the milestone by the given index.

### get_utxo_changes_by_id

```python
def get_utxo_changes_by_id(milestone_id)
```

Get the UTXO changes by the given milestone id.

### get_utxo_changes_by_index

```python
def get_utxo_changes_by_index(index)
```

Get the UTXO changes by the given milestone index.

### get_receipts

```python
def get_receipts()
```

Get all receipts.

### get_receipts_migrated_at

```python
def get_receipts_migrated_at(milestone_index)
```

Get the receipts by the given milestone index.

### get_treasury

```python
def get_treasury()
```

Get the treasury output.

### get_included_block

```python
def get_included_block(transaction_id)
```

Returns the included block of the transaction.

### get_included_block_metadata

```python
def get_included_block_metadata(transaction_id)
```

Returns the metadata of the included block of the transaction.
