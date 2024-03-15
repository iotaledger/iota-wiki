---
sidebar_label: client
title: iota_sdk.client.client
---

## Client Objects

```python
class Client(NodeCoreAPI, NodeIndexerAPI, HighLevelAPI, ClientUtils)
```

Represents an IOTA client.

**Attributes**:

- `handle` - The handle to the inner client object.

### \_\_init\_\_

```python
def __init__(primary_nodes: Optional[Union[Union[str, Node],
                                           List[Union[str, Node]]]] = None,
             nodes: Optional[Union[Union[str, Node],
                                   List[Union[str, Node]]]] = None,
             ignore_node_health: Optional[bool] = None,
             api_timeout: Optional[timedelta] = None,
             node_sync_interval: Optional[timedelta] = None,
             quorum: Optional[bool] = None,
             min_quorum_size: Optional[int] = None,
             quorum_threshold: Optional[int] = None,
             user_agent: Optional[str] = None,
             max_parallel_api_requests: Optional[int] = None,
             client_handle=None)
```

Initialize the IOTA Client.

**Arguments**
* __primary_nodes__*:*  
    Nodes which will be tried first for all requests.
* __nodes__*:*  
    A single Node URL or an array of URLs.
* __ignore_node_health__*:*  
    If the node health should be ignored.
* __api_timeout__*:*  
    Timeout for API requests.
* __node_sync_interval__*:*  
    Interval in which nodes will be checked for their sync status and the [NetworkInfo](crate::NetworkInfo) gets updated.
* __quorum__*:*  
    If node quorum is enabled. Will compare the responses from multiple nodes and only returns the response if &#x27;quorum_threshold&#x27;% of the nodes return the same one.
* __min_quorum_size__*:*  
    Minimum amount of nodes required for request when quorum is enabled.
* __quorum_threshold__*:*  
    % of nodes that have to return the same response so it gets accepted.
* __user_agent__*:*  
    The User-Agent header for requests.
* __max_parallel_api_requests__*:*  
    Set maximum parallel API requests.
* __client_handle__*:*  
    An instance of a node client.

### get\_handle

```python
def get_handle()
```

Get the client handle.

**Returns**:

  The inner client object.

### build\_account\_output

```python
def build_account_output(
        account_id: HexStr,
        unlock_conditions: List[UnlockCondition],
        amount: Optional[int] = None,
        mana: Optional[int] = None,
        foundry_counter: Optional[int] = None,
        features: Optional[List[Feature]] = None,
        immutable_features: Optional[List[Feature]] = None) -> AccountOutput
```

Build an AccountOutput.

**Arguments**:

- `account_id` - A unique ID for the new account.
- `unlock_conditions` - The unlock conditions for the new output.
- `amount` - The amount of base coins in the new output.
- `mana` - Amount of stored Mana held by this output.
- `foundry_counter` - A counter that denotes the number of foundries created by this account output.
- `features` - A list of features.
- `immutable_features` - A list of immutable features.
  

**Returns**:

  The account output as dict.

### build\_basic\_output

```python
def build_basic_output(
        unlock_conditions: List[UnlockCondition],
        amount: Optional[int] = None,
        mana: Optional[int] = None,
        features: Optional[List[Feature]] = None) -> BasicOutput
```

Build a BasicOutput.

**Arguments**:

- `unlock_conditions` - The unlock conditions for the new output.
- `amount` - The amount of base coins in the new output.
- `mana` - Amount of stored Mana held by this output.
- `features` - Features that add utility to the output but do not impose unlocking conditions.
  

**Returns**:

  The basic output as dict.

### build\_foundry\_output

```python
def build_foundry_output(
        serial_number: int,
        token_scheme: SimpleTokenScheme,
        unlock_conditions: List[UnlockCondition],
        amount: Optional[int] = None,
        features: Optional[List[Feature]] = None,
        immutable_features: Optional[List[Feature]] = None) -> FoundryOutput
```

Build a FoundryOutput.

**Arguments**:

- `serial_number` - The serial number of the foundry with respect to the controlling account.
- `token_scheme` - Defines the supply control scheme of the tokens controlled by the foundry. Currently only a simple scheme is supported.
- `unlock_conditions` - The unlock conditions for the new output.
- `amount` - The amount of base coins in the new output.
- `features` - Features that add utility to the output but do not impose unlocking conditions.
- `immutable_features` - Features that add utility to the output but do not impose unlocking conditions. These features need to be kept in future transitions of the UTXO state machine.
  

**Returns**:

  The foundry output as dict.

### build\_nft\_output

```python
def build_nft_output(
        nft_id: HexStr,
        unlock_conditions: List[UnlockCondition],
        amount: Optional[int] = None,
        mana: Optional[int] = None,
        features: Optional[List[Feature]] = None,
        immutable_features: Optional[List[Feature]] = None) -> NftOutput
```

Build an NftOutput.

**Arguments**:

- `nft_id` - A unique ID for the new NFT.
- `unlock_conditions` - The unlock conditions for the new output.
- `amount` - The amount of base coins in the new output.
- `mana` - Amount of stored Mana held by this output.
- `features` - Features that add utility to the output but do not impose unlocking conditions.
- `immutable_features` - Features that add utility to the output but do not impose unlocking conditions. These features need to be kept in future transitions of the UTXO state machine.
  

**Returns**:

  The NFT output as dict.

### get\_node

```python
def get_node() -> Dict[str, Any]
```

Get a node candidate from the healthy node pool.

### get\_network\_info

```python
def get_network_info() -> NetworkInfo
```

Gets the network related information such as network_id.

### get\_network\_id

```python
def get_network_id() -> int
```

Gets the network id of the node we&#x27;re connecting to.

### get\_bech32\_hrp

```python
def get_bech32_hrp() -> str
```

Returns the bech32_hrp.

### unhealthy\_nodes

```python
def unhealthy_nodes() -> List[Dict[str, Any]]
```

Returns the unhealthy nodes.

### build\_basic\_block

```python
def build_basic_block(issuer_id: HexStr,
                      payload: Optional[Payload] = None) -> UnsignedBlock
```

Build a basic block.

**Arguments**:

- `issuer_id` - The identifier of the block issuer account.
- `payload` - The payload to submit.
  

**Returns**:

  An unsigned block.

### listen\_mqtt

```python
def listen_mqtt(topics: List[str], handler)
```

Listen to MQTT events.

**Arguments**:

- `topics` - The topics to listen to.
- `handler` - A callback function for MQTT events.

### clear\_mqtt\_listeners

```python
def clear_mqtt_listeners(topics: List[str])
```

Removes all listeners for the provided MQTT topics.

**Arguments**:

- `topics` - The topics to stop listening to.

### convert\_nodes

```python
def convert_nodes(nodes: Optional[Union[Union[str, Node],
                                        List[Union[str, Node]]]] = None)
```

Helper function to convert provided nodes to a list for the client options.

