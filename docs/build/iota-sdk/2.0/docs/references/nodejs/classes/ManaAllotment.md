# Class: ManaAllotment

An allotment of Mana which will be added upon commitment of the slot in which the containing transaction was issued,
in the form of Block Issuance Credits to the account.

## Table of contents

### Constructors

- [constructor](ManaAllotment.md#constructor)

### Properties

- [accountId](ManaAllotment.md#accountid)
- [mana](ManaAllotment.md#mana)

## Constructors

### constructor

• **new ManaAllotment**(`accountId`, `mana`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |
| `mana` | `bigint` |

## Properties

### accountId

• `Readonly` **accountId**: `string`

The Account to allot Mana to.

___

### mana

• `Readonly` **mana**: `bigint`

The Amount of Mana to allot.
