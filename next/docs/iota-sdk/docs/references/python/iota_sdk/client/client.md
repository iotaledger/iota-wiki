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

Parameters
----------
nodes : string or array of string
    A single Node URL or an array of URLs.
primary_node : string
    Node which will be tried first for all requests.
primary_pow_node : string
    Node which will be tried first when using remote PoW, even before the primary_node.
permanode : string
    Permanode URL.
ignore_node_health : bool
    If the node health should be ignored.
api_timeout : datetime.timedelta
    Timeout for API requests.
node_sync_interval : datetime.timedelta
    Interval in which nodes will be checked for their sync status and the [NetworkInfo](crate::NetworkInfo) gets updated.
remote_pow_timeout : datetime.timedelta
    Timeout when sending a block that requires remote proof of work.
tips_interval : int
    Tips request interval during PoW in seconds.
quorum : bool
    If node quorum is enabled. Will compare the responses from multiple nodes 
    and only returns the response if `quorum_threshold`% of the nodes return the same one.
min_quorum_size : int
    Minimum amount of nodes required for request when quorum is enabled.
quorum_threshold : int
    % of nodes that have to return the same response so it gets accepted.
user_agent : string
    The User-Agent header for requests.
local_pow : bool
    Local proof of work.
fallback_to_local_pow : bool
    Fallback to local proof of work if the node doesn&#x27;t support remote PoW.
pow_worker_count : int
    The amount of threads to be used for proof of work.

### build\_alias\_output

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

Parameters
----------
alias_id : string
    Hex encoded alias id
unlock_conditions : array of UnlockCondition
    The unlock conditions for this output
amount : int
    Amount of base token
native_tokens : array of NativeToken
    The native token to add to the output
state_index : int
    Index of the state
state_metadata : string
    Hex encoded state metadata
foundry_counter : int
    Counter of foundry outputs created
features : array of Feature
    Features for this outputs
immutable_features : array of Feature
    Immutable features

Returns
-------
Output as dict

### build\_basic\_output

```python
def build_basic_output(unlock_conditions: List[UnlockCondition],
                       amount: Optional[int] = None,
                       native_tokens: Optional[List[NativeToken]] = None,
                       features: Optional[List[Feature]] = None)
```

Build a BasicOutput.

Parameters
----------
unlock_conditions : array of UnlockCondition
    The unlock conditions for this output
amount : int
    Amount of base token
native_tokens : array of NativeToken
    The native token to add to the output
features : array of Feature
    Features for this outputs

Returns
-------
Output as dict

### build\_foundry\_output

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

Parameters
----------
serial_number : int
    The serial number of the foundry
token_scheme : TokenScheme
    The Token scheme. Currently only a simple scheme is supported
unlock_conditions : array of UnlockCondition
    The unlock conditions for this output
amount : int
    Amount of base token
native_tokens : array of NativeToken
    The native token to add to the output
features : array of Feature
    Features for this outputs
immutable_features : array of Feature
    Immutable features

Returns
-------
Output as dict

### build\_nft\_output

```python
def build_nft_output(nft_id: HexStr,
                     unlock_conditions: List[UnlockCondition],
                     amount: Optional[int] = None,
                     native_tokens: Optional[List[NativeToken]] = None,
                     features: Optional[List[Feature]] = None,
                     immutable_features: Optional[List[Feature]] = None)
```

Build an NftOutput.

Parameters
----------
nft_id : string
    Hex encoded nft id
unlock_conditions : array of UnlockCondition
    The unlock conditions for this output
amount : int
    Amount of base token
native_tokens : array of NativeToken
    The native tokens to add to the output
features : array of Feature
    Features for this outputs
immutable_features : array of Feature
    Immutable features

Returns
-------
Output as dict

### generate\_ed25519\_addresses

```python
def generate_ed25519_addresses(
        secret_manager,
        account_index: Optional[int] = None,
        start: Optional[int] = None,
        end: Optional[int] = None,
        internal: Optional[bool] = None,
        coin_type: Optional[int] = None,
        bech32_hrp: Optional[str] = None,
        ledger_nano_prompt: Optional[bool] = None) -> List[str]
```

Generate addresses.

Parameters
----------
secret_manager : Any type of SecretManager.
    The secret manager to use. Can be (MnemonicSecretManager, SeedSecretManager, StrongholdSecretManager or LedgerNanoSecretManager.
account_index : int
    Account index.
start : int
    Start index of generated addresses
end : int
    End index of generated addresses
internal : bool
    Internal addresses
coin_type : int
    Coin type. The CoinType enum can be used
bech32_hrp : string
    Bech32 human readable part.
ledger_nano_prompt : bool
    Display the address on ledger devices.

Returns
-------
Addresses as array of strings.

### build\_and\_post\_block

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

Parameters
----------
account_index : int
    Account Index
coin_type : int
    Coin type. The CoinType enum can be used
custom_remainder_address : string
    Address to send the remainder funds to
data : str
    Hex encoded data
initial_address_index : int
    Initial address index
input_range_start : int
    Start of the input range
input_range_end : int
    End of the input range
inputs : Array of Inputs
    Inputs to use
output : SendAmountParams
    Address and amount to send to
outputs : Array of Outputs
    Outputs to use
tag : string
    Hex encoded tag

Returns
-------
Block as dict

### get\_node

```python
def get_node() -> Dict[str, Any]
```

Get a node candidate from the healthy node pool.

### get\_network\_info

```python
def get_network_info() -> Dict[str, Any]
```

Gets the network related information such as network_id and min_pow_score.

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

### get\_min\_pow\_score

```python
def get_min_pow_score() -> int
```

Returns the min pow score.

### get\_tips\_interval

```python
def get_tips_interval() -> int
```

Returns the tips interval.

### get\_local\_pow

```python
def get_local_pow() -> bool
```

Returns if local pow should be used or not.

### get\_fallback\_to\_local\_pow

```python
def get_fallback_to_local_pow() -> bool
```

Get fallback to local proof of work timeout.

### unhealthy\_nodes

```python
def unhealthy_nodes() -> List[Dict[str, Any]]
```

Returns the unhealthy nodes.

### prepare\_transaction

```python
def prepare_transaction(secret_manager=None, options=None)
```

Prepare a transaction for signing.

### sign\_transaction

```python
def sign_transaction(secret_manager, prepared_transaction_data)
```

Sign a transaction.

### submit\_payload

```python
def submit_payload(payload)
```

Submit a payload in a block.

