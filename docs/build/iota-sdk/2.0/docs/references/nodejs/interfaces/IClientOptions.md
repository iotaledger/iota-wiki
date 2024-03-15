# Interface: IClientOptions

Options for the client builder

## Table of contents

### Properties

- [primaryNodes](IClientOptions.md#primarynodes)
- [nodes](IClientOptions.md#nodes)
- [ignoreNodeHealth](IClientOptions.md#ignorenodehealth)
- [nodeSyncInterval](IClientOptions.md#nodesyncinterval)
- [quorum](IClientOptions.md#quorum)
- [minQuorumSize](IClientOptions.md#minquorumsize)
- [quorumThreshold](IClientOptions.md#quorumthreshold)
- [networkInfo](IClientOptions.md#networkinfo)
- [brokerOptions](IClientOptions.md#brokeroptions)
- [apiTimeout](IClientOptions.md#apitimeout)
- [maxParallelApiRequests](IClientOptions.md#maxparallelapirequests)

## Properties

### primaryNodes

• `Optional` **primaryNodes**: (`string` \| [`INode`](INode.md))[]

Nodes which will be tried first for all requests

___

### nodes

• `Optional` **nodes**: (`string` \| [`INode`](INode.md))[]

A list of nodes.

___

### ignoreNodeHealth

• `Optional` **ignoreNodeHealth**: `boolean`

If the node health status should be ignored

___

### nodeSyncInterval

• `Optional` **nodeSyncInterval**: [`IDuration`](IDuration.md)

Interval in which nodes will be checked for their sync status and the NetworkInfo gets updated

___

### quorum

• `Optional` **quorum**: `boolean`

If node quorum is enabled. Will compare the responses from multiple nodes and only returns the
response if quorum_threshold of the nodes return the same one

___

### minQuorumSize

• `Optional` **minQuorumSize**: `number`

Minimum amount of nodes required for request when quorum is enabled

___

### quorumThreshold

• `Optional` **quorumThreshold**: `number`

% of nodes that have to return the same response so it gets accepted

___

### networkInfo

• `Optional` **networkInfo**: [`INetworkInfo`](INetworkInfo.md)

Data related to the used network

___

### brokerOptions

• `Optional` **brokerOptions**: [`IMqttBrokerOptions`](IMqttBrokerOptions.md)

Options for the MQTT broker

___

### apiTimeout

• `Optional` **apiTimeout**: [`IDuration`](IDuration.md)

Timeout for API requests

___

### maxParallelApiRequests

• `Optional` **maxParallelApiRequests**: `number`

The maximum parallel API requests.
