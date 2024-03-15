# Class: PreparedTransactionData

Helper struct for offline signing.

## Table of contents

### Constructors

- [constructor](PreparedTransactionData.md#constructor)

### Properties

- [transaction](PreparedTransactionData.md#transaction)
- [inputsData](PreparedTransactionData.md#inputsdata)
- [remainders](PreparedTransactionData.md#remainders)
- [manaRewards](PreparedTransactionData.md#manarewards)

## Constructors

### constructor

• **new PreparedTransactionData**()

## Properties

### transaction

• **transaction**: [`Transaction`](Transaction.md)

Transaction

___

### inputsData

• **inputsData**: [`InputSigningData`](InputSigningData.md)[]

Required address information for signing

___

### remainders

• `Optional` **remainders**: [`Remainder`](Remainder.md)[]

Optional remainder output information

___

### manaRewards

• `Optional` **manaRewards**: `Object`

Mana rewards by input.

#### Index signature

▪ [outputId: [`HexEncodedString`](../api_ref.md#hexencodedstring)]: [`NumericString`](../api_ref.md#numericstring)
