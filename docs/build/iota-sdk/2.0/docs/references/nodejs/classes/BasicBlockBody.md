# Class: BasicBlockBody

Basic Block Body layout.

## Hierarchy

- [`BlockBody`](BlockBody.md)

  ↳ **`BasicBlockBody`**

## Table of contents

### Constructors

- [constructor](BasicBlockBody.md#constructor)

### Properties

- [strongParents](BasicBlockBody.md#strongparents)
- [weakParents](BasicBlockBody.md#weakparents)
- [shallowLikeParents](BasicBlockBody.md#shallowlikeparents)
- [payload](BasicBlockBody.md#payload)
- [maxBurnedMana](BasicBlockBody.md#maxburnedmana)
- [type](BasicBlockBody.md#type)

### Methods

- [isBasic](BasicBlockBody.md#isbasic)
- [asBasic](BasicBlockBody.md#asbasic)
- [isValidation](BasicBlockBody.md#isvalidation)
- [asValidation](BasicBlockBody.md#asvalidation)

## Constructors

### constructor

• **new BasicBlockBody**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`BlockBodyType`](../enums/BlockBodyType.md) | The type of BlockBody. |

#### Inherited from

[BlockBody](BlockBody.md).[constructor](BlockBody.md#constructor)

## Properties

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

### payload

• `Optional` `Readonly` **payload**: [`Payload`](Payload.md)

The payload contents.

___

### maxBurnedMana

• `Readonly` **maxBurnedMana**: `bigint`

The amount of mana the Account identified by IssuerID is at most
willing to burn for this block.

___

### type

• `Readonly` **type**: [`BlockBodyType`](../enums/BlockBodyType.md)

#### Inherited from

[BlockBody](BlockBody.md).[type](BlockBody.md#type)

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
