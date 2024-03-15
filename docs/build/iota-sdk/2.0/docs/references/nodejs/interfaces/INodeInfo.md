# Interface: INodeInfo

Response from the /info endpoint.

## Table of contents

### Properties

- [name](INodeInfo.md#name)
- [version](INodeInfo.md#version)
- [status](INodeInfo.md#status)
- [metrics](INodeInfo.md#metrics)
- [protocolParameters](INodeInfo.md#protocolparameters)
- [baseToken](INodeInfo.md#basetoken)

## Properties

### name

• **name**: `string`

The name of the node.

___

### version

• **version**: `string`

The semantic version of the node.

___

### status

• **status**: [`INodeInfoStatus`](INodeInfoStatus.md)

The status of the node.

___

### metrics

• **metrics**: [`INodeInfoMetrics`](INodeInfoMetrics.md)

The metrics for the node.

___

### protocolParameters

• **protocolParameters**: [`ProtocolInfo`](ProtocolInfo.md)[]

The protocol parameters.

___

### baseToken

• **baseToken**: [`INodeInfoBaseToken`](INodeInfoBaseToken.md)

The base token info of the node.
