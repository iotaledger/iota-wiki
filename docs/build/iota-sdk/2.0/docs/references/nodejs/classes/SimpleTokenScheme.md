# Class: SimpleTokenScheme

A simple token scheme.

## Hierarchy

- [`TokenScheme`](TokenScheme.md)

  ↳ **`SimpleTokenScheme`**

## Table of contents

### Constructors

- [constructor](SimpleTokenScheme.md#constructor)

### Properties

- [type](SimpleTokenScheme.md#type)
- [mintedTokens](SimpleTokenScheme.md#mintedtokens)
- [meltedTokens](SimpleTokenScheme.md#meltedtokens)
- [maximumSupply](SimpleTokenScheme.md#maximumsupply)

## Constructors

### constructor

• **new SimpleTokenScheme**(`mintedTokens`, `meltedTokens`, `maximumSupply`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mintedTokens` | `bigint` | The number of tokens that were minted. |
| `meltedTokens` | `bigint` | The number of tokens that were melted. |
| `maximumSupply` | `bigint` | The maximum supply of the token. |

#### Overrides

[TokenScheme](TokenScheme.md).[constructor](TokenScheme.md#constructor)

## Properties

### type

• `Readonly` **type**: [`Simple`](../enums/TokenSchemeType.md#simple)

The type of token scheme.

#### Inherited from

[TokenScheme](TokenScheme.md).[type](TokenScheme.md#type)

___

### mintedTokens

• `Readonly` **mintedTokens**: `bigint`

The amount of tokens minted.

___

### meltedTokens

• `Readonly` **meltedTokens**: `bigint`

The amount of tokens melted.

___

### maximumSupply

• `Readonly` **maximumSupply**: `bigint`

The maximum supply of tokens.
