---
sidebar_label: payload
title: iota_sdk.types.payload
---

## PayloadType Objects

```python
class PayloadType(IntEnum)
```

Block payload types.

**Attributes**:

- `TaggedData` _0_ - A tagged data payload.
- `SignedTransaction` _1_ - A signed transaction payload.
- `CandidacyAnnouncement` _2_ - A candidacy announcement payload.

## TaggedDataPayload Objects

```python
@json

@dataclass
class TaggedDataPayload()
```

A tagged data payload.

**Attributes**:

- `tag` - The tag part of the tagged data payload.
- `data` - The data part of the tagged data payload.

### deserialize\_payload

```python
def deserialize_payload(d: Dict[str, Any]) -> Payload
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_payloads

```python
def deserialize_payloads(dicts: List[Dict[str, Any]]) -> List[Payload]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_tagged\_data\_payload

```python
def deserialize_tagged_data_payload(d: Dict[str, Any]) -> Payload
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

## Transaction Objects

```python
@json

@dataclass
class Transaction()
```

A transaction consuming inputs, creating outputs and carrying an optional payload.

**Attributes**:

- `network_id` - The unique value denoting whether the block was meant for mainnet, shimmer, testnet, or a private network.
  It consists of the first 8 bytes of the BLAKE2b-256 hash of the network name.
- `creation_slot` - The slot index in which the transaction was created.
- `context_inputs` - The inputs that provide additional contextual information for the execution of a transaction.
- `inputs` - The inputs to consume in order to fund the outputs of the Transaction Payload.
- `allotments` - The allotments of Mana which which will be added upon commitment of the slot.
- `capabilities` - The capability bitflags of the transaction.
- `outputs` - The outputs that are created by the Transaction Payload
- `payload` - An optional tagged data payload

### with\_capabilities

```python
def with_capabilities(capabilities: bytes)
```

Sets the transaction capabilities from a byte array.

**Attributes**:

- `capabilities` - The transaction capabilities bitflags.

## SignedTransactionPayload Objects

```python
@json

@dataclass
class SignedTransactionPayload()
```

A signed transaction payload.

**Attributes**:

- `transaction` - The transaction.
- `unlocks` - The unlocks of the transaction.

## CandidacyAnnouncementPayload Objects

```python
@json

@dataclass
class CandidacyAnnouncementPayload()
```

A payload which is used to indicate candidacy for committee selection for the next epoch.

