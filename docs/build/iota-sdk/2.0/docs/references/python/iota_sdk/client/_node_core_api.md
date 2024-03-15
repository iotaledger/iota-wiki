---
sidebar_label: _node_core_api
title: iota_sdk.client._node_core_api
---

## NodeCoreAPI Objects

```python
class NodeCoreAPI(metaclass=ABCMeta)
```

Node core API.

### get\_health

```python
def get_health(url: str) -> bool
```

Returns the health of the node.
GET /health

**Arguments**:

- `url` - The node&#x27;s url.

### get\_info

```python
def get_info() -> NodeInfoWrapper
```

Returns general information about the node together with its URL.
GET /api/core/v3/info

### get\_node\_info

```python
def get_node_info(url: str, auth=None) -> InfoResponse
```

Returns general information about the node.
GET /api/core/v3/info

**Arguments**:

- `url` - The node&#x27;s url.
- `auth` - A JWT or username/password authentication object.
  

**Returns**:

  The node info.

### get\_routes

```python
def get_routes() -> RoutesResponse
```

Returns the available API route groups of the node.
GET /api/routes

### call\_plugin\_route

```python
def call_plugin_route(base_plugin_path: str,
                      method: str,
                      endpoint: str,
                      query_params: Optional[List[str]] = None,
                      request: Optional[str] = None)
```

Extension method which provides request methods for plugins.

**Arguments**:

- `base_plugin_path` - The base path of the routes provided by the plugin.
- `method` - The HTTP method.
- `endpoint` - The endpoint to query provided by the plugin.
- `query_params` - The parameters of the query.
- `request` - The request object sent to the endpoint of the plugin.

### get\_account\_congestion

```python
def get_account_congestion(account_id: HexStr) -> CongestionResponse
```

Checks if the account is ready to issue a block.
GET /api/core/v3/accounts/{bech32Address}/congestion

### get\_output\_mana\_rewards

```python
def get_output_mana_rewards(output_id: OutputId,
                            slot_index: SlotIndex) -> ManaRewardsResponse
```

Returns the total available Mana rewards of an account or delegation output decayed up to `epochEnd` index
provided in the response.
Note that rewards for an epoch only become available at the beginning of the next epoch. If the end epoch of a
staking feature is equal or greater than the current epoch, the rewards response will not include the potential
future rewards for those epochs. `epochStart` and `epochEnd` indicates the actual range for which reward value
is returned and decayed for.
GET /api/core/v3/rewards/{outputId}

### get\_committee

```python
def get_committee(epoch_index: EpochIndex) -> CommitteeResponse
```

Returns the information of committee members at the given epoch index. If epoch index is not provided, the
current committee members are returned.
GET /api/core/v3/committee/?epochIndex

### get\_validators

```python
def get_validators(page_size, cursor) -> ValidatorsResponse
```

Returns information of all registered validators and if they are active.
GET JSON to /api/core/v3/validators

### get\_validator

```python
def get_validator(account_id: HexStr) -> ValidatorResponse
```

Return information about a validator.
GET /api/core/v3/validators/{bech32Address}

### get\_issuance

```python
def get_issuance() -> IssuanceBlockHeaderResponse
```

Returns information that is ideal for attaching a block in the network.
GET /api/core/v3/blocks/issuance

### post\_block

```python
def post_block(block: Block) -> BlockId
```

Returns the BlockId of the submitted block.
POST JSON to /api/core/v3/blocks

**Arguments**:

- `block` - The block to post.
  

**Returns**:

  The block id of the posted block.

### post\_block\_raw

```python
def post_block_raw(block: Block) -> BlockId
```

Returns the BlockId of the submitted block.
POST /api/core/v3/blocks

**Returns**:

  The corresponding block id of the block.

### get\_block

```python
def get_block(block_id: BlockId) -> Block
```

Finds a block by its ID and returns it as object.
GET /api/core/v3/blocks/{blockId}

**Returns**:

  The corresponding block.

### get\_block\_raw

```python
def get_block_raw(block_id: BlockId) -> List[int]
```

Finds a block by its ID and returns it as raw bytes.
GET /api/core/v3/blocks/{blockId}

**Returns**:

  The corresponding raw bytes of a block.

### get\_block\_metadata

```python
def get_block_metadata(block_id: BlockId) -> BlockMetadataResponse
```

Returns the metadata of a block.
GET /api/core/v3/blocks/{blockId}/metadata

**Returns**:

  The corresponding block metadata.

### get\_block\_with\_metadata

```python
def get_block_with_metadata(block_id: BlockId) -> BlockWithMetadataResponse
```

Returns a block with its metadata.
GET /api/core/v2/blocks/{blockId}/full

**Returns**:

  The corresponding block with it metadata.

### get\_output

```python
def get_output(
        output_id: Union[OutputId, HexStr]) -> OutputWithMetadataResponse
```

Finds an output by its ID and returns it as object.
GET /api/core/v3/outputs/{outputId}

**Returns**:

  The corresponding output.

### get\_output\_raw

```python
def get_output_raw(output_id: Union[OutputId, HexStr]) -> List[int]
```

Finds an output by its ID and returns it as raw bytes.
GET /api/core/v3/outputs/{outputId}

**Returns**:

  The raw bytes of the corresponding output.

### get\_output\_metadata

```python
def get_output_metadata(output_id: Union[OutputId, HexStr]) -> OutputMetadata
```

Finds output metadata by output ID.
GET /api/core/v3/outputs/{outputId}/metadata

**Returns**:

  The output metadata.

### get\_output\_with\_metadata

```python
def get_output_with_metadata(
        output_id: Union[OutputId, HexStr]) -> OutputWithMetadataResponse
```

Finds an output with its metadata by output ID.
GET /api/core/v3/outputs/{outputId}/full

**Returns**:

  The corresponding output.

### get\_included\_block

```python
def get_included_block(transaction_id: TransactionId) -> Block
```

Returns the earliest confirmed block containing the transaction with the given ID.
GET /api/core/v3/transactions/{transactionId}/included-block

**Returns**:

  The included block.

### get\_included\_block\_raw

```python
def get_included_block_raw(transaction_id: TransactionId) -> List[int]
```

Returns the earliest confirmed block containing the transaction with the given ID, as raw bytes.
GET /api/core/v3/transactions/{transactionId}/included-block

**Returns**:

  The raw bytes of the included block.

### get\_included\_block\_metadata

```python
def get_included_block_metadata(
        transaction_id: TransactionId) -> BlockMetadataResponse
```

Returns the metadata of the earliest block containing the tx that was confirmed.
GET /api/core/v3/transactions/{transactionId}/included-block/metadata

**Returns**:

  The metadata of the included block.

### get\_transaction\_metadata

```python
def get_transaction_metadata(
        transaction_id: TransactionId) -> TransactionMetadataResponse
```

Finds the metadata of a transaction.
GET /api/core/v3/transactions/{transactionId}/metadata

**Returns**:

  The transaction metadata.

### get\_commitment

```python
def get_commitment(commitment_id: SlotCommitmentId) -> SlotCommitment
```

Finds a slot commitment by its ID and returns it as object.
GET /api/core/v3/commitments/{commitmentId}

**Returns**:

  The corresponding slot commitment.

### get\_commitment\_raw

```python
def get_commitment_raw(commitment_id: SlotCommitmentId) -> List[int]
```

Finds a slot commitment by its ID and returns it as raw bytes.
GET /api/core/v3/commitments/{commitmentId}

**Returns**:

  The raw bytes of the corresponding slot commitment.

### get\_utxo\_changes

```python
def get_utxo_changes(commitment_id: SlotCommitmentId) -> UtxoChangesResponse
```

Get all UTXO changes of a given slot by slot commitment ID.
GET /api/core/v3/commitments/{commitmentId}/utxo-changes

**Returns**:

  The corresponding UTXO changes.

### get\_utxo\_changes\_full

```python
def get_utxo_changes_full(
        commitment_id: SlotCommitmentId) -> UtxoChangesFullResponse
```

Get all full UTXO changes of a given slot by slot commitment ID.
GET /api/core/v3/commitments/{commitmentId}/utxo-changes/full

**Returns**:

  The full UTXO changes.

### get\_slot\_commitment\_by\_slot

```python
def get_slot_commitment_by_slot(slot: SlotIndex) -> SlotCommitment
```

Finds a slot commitment by slot index and returns it as object.
GET /api/core/v3/commitments/by-slot/{slot}

**Returns**:

  The corresponding slot commitment.

### get\_slot\_commitment\_by\_slot\_raw

```python
def get_slot_commitment_by_slot_raw(slot: SlotIndex) -> List[int]
```

Finds a slot commitment by slot index and returns it as raw bytes.
GET /api/core/v3/commitments/by-slot/{slot}

**Returns**:

  The raw bytes of the corresponding slot commitment.

### get\_utxo\_changes\_by\_slot

```python
def get_utxo_changes_by_slot(slot: SlotIndex) -> UtxoChangesResponse
```

Get all UTXO changes of a given slot by its index.
GET /api/core/v3/commitments/by-slot/{slot}/utxo-changes

**Returns**:

  The corresponding UTXO changes.

### get\_utxo\_changes\_full\_by\_slot

```python
def get_utxo_changes_full_by_slot(slot: SlotIndex) -> UtxoChangesFullResponse
```

Get all full UTXO changes of a given slot by its index.
GET /api/core/v3/commitments/by-slot/{slot}/utxo-changes/full

**Returns**:

  The full UTXO changes.

