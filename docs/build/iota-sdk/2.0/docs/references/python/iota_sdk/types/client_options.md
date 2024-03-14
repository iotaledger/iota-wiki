---
sidebar_label: client_options
title: iota_sdk.types.client_options
---

## Duration Objects

```python
@json

@dataclass
class Duration()
```

Time duration.

## MqttBrokerOptions Objects

```python
@json

@dataclass
class MqttBrokerOptions()
```

Options for the MQTT broker.

**Attributes**:

  automatic_disconnect (bool):
  Whether the MQTT broker should be automatically disconnected when all topics are unsubscribed or not.
  timeout (Duration):
  Sets the timeout used for the MQTT operations.
  use_ws (bool):
  Sets the use_ws used for the MQTT operations.
  port (int):
  Sets the port used for the MQTT operations.
  max_reconnection_attempts (int):
  Sets the maximum number of reconnection attempts. 0 is unlimited.

## ClientOptions Objects

```python
@json

@dataclass
class ClientOptions()
```

Client options.

**Attributes**:

  primary_nodes (List[str]):
  Nodes which will be tried first for all requests.
  nodes (List[str]):
  Array of Node URLs.
  ignore_node_health (bool):
  If the node health should be ignored.
  node_sync_interval (Duration):
  Interval in which nodes will be checked for their sync status and the [NetworkInfo](crate::NetworkInfo) gets updated.
  quorum (bool):
  If node quorum is enabled. Will compare the responses from multiple nodes
  and only returns the response if `quorum_threshold`% of the nodes return the same one.
  min_quorum_size (int):
  Minimum amount of nodes required for request when quorum is enabled.
  quorum_threshold (int):
  % of nodes that have to return the same response so it gets accepted.
  user_agent (str):
  The User-Agent header for requests.
  broker_options (MqttBrokerOptions):
  Options for the MQTT broker.
  protocol_parameters (ProtocolParameters):
  Protocol parameters.
  api_timeout (Duration):
  Timeout for API requests.
  max_parallel_api_requests (int):
  The maximum parallel API requests.

