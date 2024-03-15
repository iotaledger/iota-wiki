# Class: UtxoChangesFullResponse

All full UTXO changes that happened at a specific slot.

## Table of contents

### Constructors

- [constructor](UtxoChangesFullResponse.md#constructor)

### Properties

- [commitmentId](UtxoChangesFullResponse.md#commitmentid)
- [createdOutputs](UtxoChangesFullResponse.md#createdoutputs)
- [consumedOutputs](UtxoChangesFullResponse.md#consumedoutputs)

## Constructors

### constructor

• **new UtxoChangesFullResponse**()

## Properties

### commitmentId

• **commitmentId**: `string`

The commitment ID of the requested slot that contains the changes.

___

### createdOutputs

• **createdOutputs**: [`OutputWithId`](OutputWithId.md)[]

The created outputs of the given slot.

___

### consumedOutputs

• **consumedOutputs**: [`OutputWithId`](OutputWithId.md)[]

The consumed outputs of the given slot.
