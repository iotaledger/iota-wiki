# Class: Transaction

A transaction.

## Table of contents

### Constructors

- [constructor](Transaction.md#constructor)

### Properties

- [networkId](Transaction.md#networkid)
- [creationSlot](Transaction.md#creationslot)
- [contextInputs](Transaction.md#contextinputs)
- [inputs](Transaction.md#inputs)
- [allotments](Transaction.md#allotments)
- [payload](Transaction.md#payload)
- [outputs](Transaction.md#outputs)

### Methods

- [setCapabilities](Transaction.md#setcapabilities)
- [withCapabilities](Transaction.md#withcapabilities)
- [getCapabilities](Transaction.md#getcapabilities)

## Constructors

### constructor

• **new Transaction**(`networkId`, `creationSlot`, `contextInputs`, `inputs`, `allotments`, `outputs`, `payload?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `networkId` | `string` | The ID of the network the transaction was issued to. |
| `creationSlot` | `number` | - |
| `contextInputs` | [`ContextInput`](ContextInput.md)[] | - |
| `inputs` | [`Input`](Input.md)[] | The inputs of the transaction. |
| `allotments` | [`ManaAllotment`](ManaAllotment.md)[] | - |
| `outputs` | [`Output`](Output.md)[] | The outputs of the transaction. |
| `payload?` | [`Payload`](Payload.md) | An optional Tagged Data payload. |

## Properties

### networkId

• `Readonly` **networkId**: `string`

The unique value denoting whether the block was meant for mainnet, testnet, or a private network.

___

### creationSlot

• `Readonly` **creationSlot**: `number`

___

### contextInputs

• `Optional` `Readonly` **contextInputs**: [`ContextInput`](ContextInput.md)[]

___

### inputs

• `Readonly` **inputs**: [`Input`](Input.md)[]

___

### allotments

• `Optional` `Readonly` **allotments**: [`ManaAllotment`](ManaAllotment.md)[]

___

### payload

• `Optional` `Readonly` **payload**: [`Payload`](Payload.md)

___

### outputs

• `Readonly` **outputs**: [`Output`](Output.md)[]

## Methods

### setCapabilities

▸ **setCapabilities**(`capabilities`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `capabilities` | `Uint8Array` |

#### Returns

`void`

___

### withCapabilities

▸ **withCapabilities**(`capabilities`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `capabilities` | `Uint8Array` |

#### Returns

[`Transaction`](Transaction.md)

___

### getCapabilities

▸ **getCapabilities**(): `Uint8Array`

Get the capability bitflags of the transaction.

#### Returns

`Uint8Array`
