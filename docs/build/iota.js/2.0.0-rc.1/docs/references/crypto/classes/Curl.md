---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: Curl

Class to implement Curl sponge.

## Table of contents

### Properties

- [HASH_LENGTH](Curl.md#hash_length)
- [STATE_LENGTH](Curl.md#state_length)

### Constructors

- [constructor](Curl.md#constructor)

### Methods

- [transform](Curl.md#transform)
- [reset](Curl.md#reset)
- [rate](Curl.md#rate)
- [absorb](Curl.md#absorb)
- [squeeze](Curl.md#squeeze)

## Properties

### HASH_LENGTH

▪ `Static` `Readonly` **HASH_LENGTH**: `number` = `243`

The Hash Length.

---

### STATE_LENGTH

▪ `Static` `Readonly` **STATE_LENGTH**: `number`

The State Length.

## Constructors

### constructor

• **new Curl**(`rounds?`)

Create a new instance of Curl.

#### Parameters

| Name     | Type     | Default value           | Description                      |
| :------- | :------- | :---------------------- | :------------------------------- |
| `rounds` | `number` | `Curl.NUMBER_OF_ROUNDS` | The number of rounds to perform. |

## Methods

### transform

▸ `Static` **transform**(`curlState`, `rounds`): `void`

Sponge transform function.

#### Parameters

| Name        | Type        | Description                  |
| :---------- | :---------- | :--------------------------- |
| `curlState` | `Int8Array` | The curl state to transform. |
| `rounds`    | `number`    | The number of rounds to use. |

#### Returns

`void`

---

### reset

▸ **reset**(): `void`

Resets the state.

#### Returns

`void`

---

### rate

▸ **rate**(`len?`): `Int8Array`

Get the state of the sponge.

#### Parameters

| Name  | Type     | Default value      | Description                     |
| :---- | :------- | :----------------- | :------------------------------ |
| `len` | `number` | `Curl.HASH_LENGTH` | The length of the state to get. |

#### Returns

`Int8Array`

The state.

---

### absorb

▸ **absorb**(`trits`, `offset`, `length`): `void`

Absorbs trits given an offset and length.

#### Parameters

| Name     | Type        | Description                                    |
| :------- | :---------- | :--------------------------------------------- |
| `trits`  | `Int8Array` | The trits to absorb.                           |
| `offset` | `number`    | The offset to start abororbing from the array. |
| `length` | `number`    | The length of trits to absorb.                 |

#### Returns

`void`

---

### squeeze

▸ **squeeze**(`trits`, `offset`, `length`): `void`

Squeezes trits given an offset and length.

#### Parameters

| Name     | Type        | Description                                   |
| :------- | :---------- | :-------------------------------------------- |
| `trits`  | `Int8Array` | The trits to squeeze.                         |
| `offset` | `number`    | The offset to start squeezing from the array. |
| `length` | `number`    | The length of trits to squeeze.               |

#### Returns

`void`
