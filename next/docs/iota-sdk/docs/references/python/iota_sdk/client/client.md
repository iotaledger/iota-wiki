---
sidebar_label: client
title: iota_sdk.client.client
---

## ClientError Objects

```python
class ClientError(Exception)
```

client error

## Client Objects

```python
class Client(NodeCoreAPI, NodeIndexerAPI, HighLevelAPI, ClientUtils)
```

### \_\_init\_\_

```python
def __init__(nodes: Optional[str | List[str]] = None,
             primary_node: Optional[str] = None,
             primary_pow_node: Optional[str] = None,
             permanode: Optional[str] = None,
             ignore_node_health: Optional[bool] = None,
             api_timeout: Optional[timedelta] = None,
             node_sync_interval: Optional[timedelta] = None,
             remote_pow_timeout: Optional[timedelta] = None,
             tips_interval: Optional[int] = None,
             quorum: Optional[bool] = None,
             min_quorum_size: Optional[int] = None,
             quorum_threshold: Optional[int] = None,
             user_agent: Optional[str] = None,
             local_pow: Optional[bool] = None,
             fallback_to_local_pow: Optional[bool] = None,
             pow_worker_count: Optional[int] = None,
             client_handle=None)
```

Initialize the IOTA Client.

#### Parameters

- **nodes**_: string or array of string_  
   A single Node URL or an array of URLs.
- **primary_node**_: string_  
   Node which will be tried first for all requests.
- **primary_pow_node**_: string_  
   Node which will be tried first when using remote PoW, even before the primary_node.
- **permanode**_: string_  
   Permanode URL.
- **ignore_node_health**_: bool_  
   If the node health should be ignored.
- **api_timeout**_: datetime.timedelta_  
   Timeout for API requests.
- **node_sync_interval**_: datetime.timedelta_  
   Interval in which nodes will be checked for their sync status and the [NetworkInfo](crate::NetworkInfo) gets updated.
- **remote_pow_timeout**_: datetime.timedelta_  
   Timeout when sending a block that requires remote proof of work.
- **tips_interval**_: int_  
   Tips request interval during PoW in seconds.
- **quorum**_: bool_  
   If node quorum is enabled. Will compare the responses from multiple nodes
  and only returns the response if `quorum_threshold`% of the nodes return the same one.
- **min_quorum_size**_: int_  
   Minimum amount of nodes required for request when quorum is enabled.
- **quorum_threshold**_: int_  
   % of nodes that have to return the same response so it gets accepted.
- **user_agent**_: string_  
   The User-Agent header for requests.
- **local_pow**_: bool_  
   Local proof of work.
- **fallback_to_local_pow**_: bool_  
   Fallback to local proof of work if the node doesn&#x27;t support remote PoW.
- **pow_worker_count**_: int_  
   The amount of threads to be used for proof of work.

### build_alias_output

```python
def build_alias_output(alias_id: HexStr,
                       unlock_conditions: List[UnlockCondition],
                       amount: Optional[int] = None,
                       native_tokens: Optional[List[NativeToken]] = None,
                       state_index: Optional[int] = None,
                       state_metadata: Optional[str] = None,
                       foundry_counter: Optional[int] = None,
                       features: Optional[List[Feature]] = None,
                       immutable_features: Optional[List[Feature]] = None)
```

Build an AliasOutput.

#### Parameters

- **alias_id**_: string_  
   Hex encoded alias id
- **unlock_conditions**_: array of UnlockCondition_  
   The unlock conditions for this output
- **amount**_: int_  
   Amount of base token
- **native_tokens**_: array of NativeToken_  
   The native token to add to the output
- **state_index**_: int_  
   Index of the state
- **state_metadata**_: string_  
   Hex encoded state metadata
- **foundry_counter**_: int_  
   Counter of foundry outputs created
- **features**_: array of Feature_  
   Features for this outputs
- **immutable_features**_: array of Feature_  
   Immutable features

#### Returns

Output as dict

### build_basic_output

```python
def build_basic_output(unlock_conditions: List[UnlockCondition],
                       amount: Optional[int] = None,
                       native_tokens: Optional[List[NativeToken]] = None,
                       features: Optional[List[Feature]] = None)
```

Build a BasicOutput.

#### Parameters

- **unlock_conditions**_: array of UnlockCondition_  
   The unlock conditions for this output
- **amount**_: int_  
   Amount of base token
- **native_tokens**_: array of NativeToken_  
   The native token to add to the output
- **features**_: array of Feature_  
   Features for this outputs

#### Returns

Output as dict

### build_foundry_output

```python
def build_foundry_output(serial_number: int,
                         token_scheme: TokenScheme,
                         unlock_conditions: List[UnlockCondition],
                         amount: Optional[int] = None,
                         native_tokens: Optional[List[NativeToken]] = None,
                         features: Optional[List[Feature]] = None,
                         immutable_features: Optional[List[Feature]] = None)
```

Build a FoundryOutput.

#### Parameters

- **serial_number**_: int_  
   The serial number of the foundry
- **token_scheme**_: TokenScheme_  
   The Token scheme. Currently only a simple scheme is supported
- **unlock_conditions**_: array of UnlockCondition_  
   The unlock conditions for this output
- **amount**_: int_  
   Amount of base token
- **native_tokens**_: array of NativeToken_  
   The native token to add to the output
- **features**_: array of Feature_  
   Features for this outputs
- **immutable_features**_: array of Feature_  
   Immutable features

#### Returns

Output as dict

### build_nft_output

```python
def build_nft_output(nft_id: HexStr,
                     unlock_conditions: List[UnlockCondition],
                     amount: Optional[int] = None,
                     native_tokens: Optional[List[NativeToken]] = None,
                     features: Optional[List[Feature]] = None,
                     immutable_features: Optional[List[Feature]] = None)
```

Build an NftOutput.

#### Parameters

- **nft_id**_: string_  
   Hex encoded nft id
- **unlock_conditions**_: array of UnlockCondition_  
   The unlock conditions for this output
- **amount**_: int_  
   Amount of base token
- **native_tokens**_: array of NativeToken_  
   The native tokens to add to the output
- **features**_: array of Feature_  
   Features for this outputs
- **immutable_features**_: array of Feature_  
   Immutable features

#### Returns

Output as dict

### build_and_post_block

```python
def build_and_post_block(secret_manager=None,
                         account_index: Optional[int] = None,
                         coin_type: Optional[int] = None,
                         custom_remainder_address: Optional[str] = None,
                         data: Optional[HexStr] = None,
                         initial_address_index: Optional[int] = None,
                         input_range_start: Optional[int] = None,
                         input_range_end: Optional[int] = None,
                         inputs: Optional[List[Dict[str, Any]]] = None,
                         output: Optional[Dict[str, Any]] = None,
                         outputs: Optional[List[Any]] = None,
                         tag: Optional[HexStr] = None)
```

Build and post a block.

#### Parameters

- **account_index**_: int_  
   Account Index
- **coin_type**_: int_  
   Coin type. The CoinType enum can be used
- **custom_remainder_address**_: string_  
   Address to send the remainder funds to
- **data**_: str_  
   Hex encoded data
- **initial_address_index**_: int_  
   Initial address index
- **input_range_start**_: int_  
   Start of the input range
- **input_range_end**_: int_  
   End of the input range
- **inputs**_: Array of Inputs_  
   Inputs to use
- **output**_: SendAmountParams_  
   Address and amount to send to
- **outputs**_: Array of Outputs_  
   Outputs to use
- **tag**_: string_  
   Hex encoded tag

#### Returns

Block as dict

### get_node

```python
def get_node() -> Dict[str, Any]
```

Get a node candidate from the healthy node pool.

### get_network_info

```python
def get_network_info() -> Dict[str, Any]
```

Gets the network related information such as network_id and min_pow_score.

### get_network_id

```python
def get_network_id() -> int
```

Gets the network id of the node we&#x27;re connecting to.

### get_bech32_hrp

```python
def get_bech32_hrp() -> str
```

Returns the bech32_hrp.

### get_min_pow_score

```python
def get_min_pow_score() -> int
```

Returns the min pow score.

### get_tips_interval

```python
def get_tips_interval() -> int
```

Returns the tips interval.

### get_local_pow

```python
def get_local_pow() -> bool
```

Returns if local pow should be used or not.

### get_fallback_to_local_pow

```python
def get_fallback_to_local_pow() -> bool
```

Get fallback to local proof of work timeout.

### unhealthy_nodes

```python
def unhealthy_nodes() -> List[Dict[str, Any]]
```

Returns the unhealthy nodes.

### prepare_transaction

```python
def prepare_transaction(secret_manager=None, options=None)
```

Prepare a transaction for signing.

### sign_transaction

```python
def sign_transaction(secret_manager, prepared_transaction_data)
```

Sign a transaction.

### submit_payload

```python
def submit_payload(payload)
```

Submit a payload in a block.
