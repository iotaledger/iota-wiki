# Class: Block

Represent the object that nodes gossip around the network.

## Table of contents

### Constructors

- [constructor](Block.md#constructor)

### Properties

- [header](Block.md#header)
- [body](Block.md#body)
- [signature](Block.md#signature)

### Methods

- [isBasic](Block.md#isbasic)
- [asBasic](Block.md#asbasic)
- [isValidation](Block.md#isvalidation)
- [asValidation](Block.md#asvalidation)
- [id](Block.md#id)

## Constructors

### constructor

• **new Block**(`header`, `body`, `signature`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | [`BlockHeader`](BlockHeader.md) |
| `body` | [`BlockBody`](BlockBody.md) |
| `signature` | [`Signature`](Signature.md) |

## Properties

### header

• `Readonly` **header**: [`BlockHeader`](BlockHeader.md)

The block header.

___

### body

• `Readonly` **body**: [`BlockBody`](BlockBody.md)

___

### signature

• `Readonly` **signature**: [`Signature`](Signature.md)

The block signature; used to validate issuance capabilities.

## Methods

### isBasic

▸ **isBasic**(): `boolean`

Checks whether the block body is a `BasicBlockBody`.

#### Returns

`boolean`

true if it is, otherwise false

___

### asBasic

▸ **asBasic**(): [`BasicBlockBody`](BasicBlockBody.md)

Gets the block body as an actual `BasicBlockBody`.
NOTE: Will throw an error if the block body is not a `BasicBlockBody`.

#### Returns

[`BasicBlockBody`](BasicBlockBody.md)

The block

___

### isValidation

▸ **isValidation**(): `boolean`

Checks whether the block body is a `ValidationBlockBody`.

#### Returns

`boolean`

true if it is, otherwise false

___

### asValidation

▸ **asValidation**(): [`ValidationBlockBody`](ValidationBlockBody.md)

Gets the block body as an actual `ValidationBlockBody`.
NOTE: Will throw an error if the block body is not a `ValidationBlockBody`.

#### Returns

[`ValidationBlockBody`](ValidationBlockBody.md)

The block

___

### id

▸ `Static` **id**(`block`, `params`): `string`

Returns the block id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [`Block`](Block.md) |
| `params` | [`ProtocolParameters`](../interfaces/ProtocolParameters.md) |

#### Returns

`string`
