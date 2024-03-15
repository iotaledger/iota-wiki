# Class: BlockBody

## Hierarchy

- **`BlockBody`**

  ↳ [`BasicBlockBody`](BasicBlockBody.md)

  ↳ [`ValidationBlockBody`](ValidationBlockBody.md)

## Table of contents

### Constructors

- [constructor](BlockBody.md#constructor)

### Properties

- [type](BlockBody.md#type)

### Methods

- [isBasic](BlockBody.md#isbasic)
- [asBasic](BlockBody.md#asbasic)
- [isValidation](BlockBody.md#isvalidation)
- [asValidation](BlockBody.md#asvalidation)

## Constructors

### constructor

• **new BlockBody**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`BlockBodyType`](../enums/BlockBodyType.md) | The type of BlockBody. |

## Properties

### type

• `Readonly` **type**: [`BlockBodyType`](../enums/BlockBodyType.md)

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
NOTE: Will throw an error if the block is not a `BasicBlockBody`.

#### Returns

[`BasicBlockBody`](BasicBlockBody.md)

The BasicBlockBody

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
NOTE: Will throw an error if the block is not a `ValidationBlockBody`.

#### Returns

[`ValidationBlockBody`](ValidationBlockBody.md)

The ValidationBlockBody
