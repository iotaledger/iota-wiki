# Interface: OutputData

An output with metadata

## Table of contents

### Properties

- [outputId](OutputData.md#outputid)
- [metadata](OutputData.md#metadata)
- [output](OutputData.md#output)
- [isSpent](OutputData.md#isspent)
- [address](OutputData.md#address)
- [networkId](OutputData.md#networkid)
- [remainder](OutputData.md#remainder)
- [chain](OutputData.md#chain)

## Properties

### outputId

• **outputId**: `string`

The identifier of an Output

---

### metadata

• **metadata**: `IOutputMetadataResponse`

The metadata of the output

---

### output

• **output**: `OutputTypes`

The actual Output

---

### isSpent

• **isSpent**: `boolean`

If an output is spent

---

### address

• **address**: `AddressTypes`

Associated account address

---

### networkId

• **networkId**: `string`

Network ID

---

### remainder

• **remainder**: `boolean`

Remainder

---

### chain

• `Optional` **chain**: [`Segment`](Segment.md)[]

BIP32 path
