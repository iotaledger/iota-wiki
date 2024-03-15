# Class: ValidationBlockBody

A Validation Block Body is a special type of block body used by validators to secure the network.
It is recognised by the Congestion Control of the IOTA 2.0 protocol and can be issued without
burning Mana within the constraints of the allowed validator throughput.

It is allowed to reference more parent blocks than a normal Basic Block Body.

## Hierarchy

- [`BlockBody`](BlockBody.md)

  ↳ **`ValidationBlockBody`**

## Table of contents

### Constructors

- [constructor](ValidationBlockBody.md#constructor)

### Properties

- [type](ValidationBlockBody.md#type)
- [strongParents](ValidationBlockBody.md#strongparents)
- [weakParents](ValidationBlockBody.md#weakparents)
- [shallowLikeParents](ValidationBlockBody.md#shallowlikeparents)
- [highestSupportedVersion](ValidationBlockBody.md#highestsupportedversion)
- [protocolParametersHash](ValidationBlockBody.md#protocolparametershash)

### Methods

- [isBasic](ValidationBlockBody.md#isbasic)
- [asBasic](ValidationBlockBody.md#asbasic)
- [isValidation](ValidationBlockBody.md#isvalidation)
- [asValidation](ValidationBlockBody.md#asvalidation)

## Constructors

### constructor

• **new ValidationBlockBody**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`BlockBodyType`](../enums/BlockBodyType.md) | The type of BlockBody. |

#### Inherited from

[BlockBody](BlockBody.md).[constructor](BlockBody.md#constructor)

## Properties

### type

• `Readonly` **type**: [`BlockBodyType`](../enums/BlockBodyType.md)

#### Inherited from

[BlockBody](BlockBody.md).[type](BlockBody.md#type)

___

### strongParents

• `Readonly` **strongParents**: [`Parents`](../api_ref.md#parents)

Blocks that are strongly directly approved.

___

### weakParents

• `Optional` `Readonly` **weakParents**: [`Parents`](../api_ref.md#parents)

Blocks that are weakly directly approved.

___

### shallowLikeParents

• `Optional` `Readonly` **shallowLikeParents**: [`Parents`](../api_ref.md#parents)

Blocks that are directly referenced to adjust opinion.

___

### highestSupportedVersion

• `Readonly` **highestSupportedVersion**: `number`

The highest supported protocol version the issuer of this block supports.

___

### protocolParametersHash

• `Readonly` **protocolParametersHash**: `string`

The hash of the protocol parameters for the Highest Supported Version.

## Methods

### isBasic

▸ **isBasic**(): `boolean`

Checks whether the block body is a `BasicBlockBody`.

#### Returns

`boolean`

true if it is, otherwise false

#### Inherited from

[BlockBody](BlockBody.md).[isBasic](BlockBody.md#isbasic)

___

### asBasic

▸ **asBasic**(): [`BasicBlockBody`](BasicBlockBody.md)

Gets the block body as an actual `BasicBlockBody`.
NOTE: Will throw an error if the block is not a `BasicBlockBody`.

#### Returns

[`BasicBlockBody`](BasicBlockBody.md)

The BasicBlockBody

#### Inherited from

[BlockBody](BlockBody.md).[asBasic](BlockBody.md#asbasic)

___

### isValidation

▸ **isValidation**(): `boolean`

Checks whether the block body is a `ValidationBlockBody`.

#### Returns

`boolean`

true if it is, otherwise false

#### Inherited from

[BlockBody](BlockBody.md).[isValidation](BlockBody.md#isvalidation)

___

### asValidation

▸ **asValidation**(): [`ValidationBlockBody`](ValidationBlockBody.md)

Gets the block body as an actual `ValidationBlockBody`.
NOTE: Will throw an error if the block is not a `ValidationBlockBody`.

#### Returns

[`ValidationBlockBody`](ValidationBlockBody.md)

The ValidationBlockBody

#### Inherited from

[BlockBody](BlockBody.md).[asValidation](BlockBody.md#asvalidation)
