# Class: OutputData

An output with metadata

## Table of contents

### Constructors

- [constructor](OutputData.md#constructor)

### Properties

- [outputId](OutputData.md#outputid)
- [metadata](OutputData.md#metadata)
- [output](OutputData.md#output)
- [address](OutputData.md#address)
- [networkId](OutputData.md#networkid)
- [remainder](OutputData.md#remainder)
- [chain](OutputData.md#chain)

## Constructors

### constructor

• **new OutputData**()

## Properties

### outputId

• **outputId**: `string`

The identifier of an Output

___

### metadata

• **metadata**: [`IOutputMetadataResponse`](../interfaces/IOutputMetadataResponse.md)

The metadata of the output

___

### output

• **output**: [`Output`](Output.md)

The actual Output

___

### address

• **address**: [`Address`](Address.md)

Associated account address

___

### networkId

• **networkId**: `string`

Network ID

___

### remainder

• **remainder**: `boolean`

Remainder

___

### chain

• `Optional` **chain**: [`Segment`](../interfaces/Segment.md)[]

BIP32 path
