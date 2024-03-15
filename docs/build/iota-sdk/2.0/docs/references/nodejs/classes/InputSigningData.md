# Class: InputSigningData

Data for transaction inputs for signing and ordering of unlock blocks.

## Table of contents

### Constructors

- [constructor](InputSigningData.md#constructor)

### Properties

- [output](InputSigningData.md#output)
- [outputMetadata](InputSigningData.md#outputmetadata)
- [chain](InputSigningData.md#chain)

## Constructors

### constructor

• **new InputSigningData**()

## Properties

### output

• **output**: [`Output`](Output.md)

The output

___

### outputMetadata

• **outputMetadata**: [`IOutputMetadataResponse`](../interfaces/IOutputMetadataResponse.md)

The output metadata

___

### chain

• `Optional` **chain**: [`Bip44`](../interfaces/Bip44.md)

The chain derived from seed, only for ed25519 addresses
