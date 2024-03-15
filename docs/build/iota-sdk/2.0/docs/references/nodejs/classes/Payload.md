# Class: Payload

The base class for block payloads.

## Hierarchy

- **`Payload`**

  ↳ [`TaggedDataPayload`](TaggedDataPayload.md)

  ↳ [`SignedTransactionPayload`](SignedTransactionPayload.md)

  ↳ [`CandidacyAnnouncementPayload`](CandidacyAnnouncementPayload.md)

## Table of contents

### Constructors

- [constructor](Payload.md#constructor)

### Properties

- [type](Payload.md#type)

## Constructors

### constructor

• **new Payload**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PayloadType`](../enums/PayloadType.md) | The type of payload. |

## Properties

### type

• `Readonly` **type**: [`PayloadType`](../enums/PayloadType.md)

The type of payload.
