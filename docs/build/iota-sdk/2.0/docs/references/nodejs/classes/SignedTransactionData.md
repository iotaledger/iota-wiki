# Class: SignedTransactionData

The signed transaction with inputs data

## Table of contents

### Constructors

- [constructor](SignedTransactionData.md#constructor)

### Properties

- [payload](SignedTransactionData.md#payload)
- [inputsData](SignedTransactionData.md#inputsdata)
- [manaRewards](SignedTransactionData.md#manarewards)

## Constructors

### constructor

• **new SignedTransactionData**()

## Properties

### payload

• **payload**: [`SignedTransactionPayload`](SignedTransactionPayload.md)

A signed transaction payload.

___

### inputsData

• **inputsData**: [`InputSigningData`](InputSigningData.md)

Signed inputs data.

___

### manaRewards

• `Optional` **manaRewards**: `Object`

Mana rewards by input

#### Index signature

▪ [outputId: [`HexEncodedString`](../api_ref.md#hexencodedstring)]: [`NumericString`](../api_ref.md#numericstring)
