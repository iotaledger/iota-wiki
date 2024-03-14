# Interface: IMqttBrokerOptions

Options for the MQTT broker.

## Table of contents

### Properties

- [automaticDisconnect](IMqttBrokerOptions.md#automaticdisconnect)
- [timeout](IMqttBrokerOptions.md#timeout)
- [useWs](IMqttBrokerOptions.md#usews)
- [port](IMqttBrokerOptions.md#port)
- [maxReconnectionAttempts](IMqttBrokerOptions.md#maxreconnectionattempts)

## Properties

### automaticDisconnect

• `Optional` **automaticDisconnect**: `boolean`

Whether the MQTT broker should be automatically disconnected when all topics are unsubscribed or not.

___

### timeout

• `Optional` **timeout**: `number`

Sets the timeout in seconds used for the MQTT operations.

___

### useWs

• `Optional` **useWs**: `boolean`

Sets whether websockets should be used instead of regular TCP for the MQTT operations.

___

### port

• `Optional` **port**: `number`

Sets the port used for the MQTT operations.

___

### maxReconnectionAttempts

• `Optional` **maxReconnectionAttempts**: `number`

Sets the maximum number of reconnection attempts. 0 is unlimited.
