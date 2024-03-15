# Interface: ParticipationEventRegistrationOptions

Options when registering participation events.

## Table of contents

### Properties

- [node](ParticipationEventRegistrationOptions.md#node)
- [eventsToRegister](ParticipationEventRegistrationOptions.md#eventstoregister)
- [eventsToIgnore](ParticipationEventRegistrationOptions.md#eventstoignore)

## Properties

### node

• **node**: [`INode`](INode.md)

The node to register participation events.

___

### eventsToRegister

• `Optional` **eventsToRegister**: `string`[]

The events to register.
If empty, then every event being tracked by the node will be registered.

___

### eventsToIgnore

• `Optional` **eventsToIgnore**: `string`[]

The events to ignore.
