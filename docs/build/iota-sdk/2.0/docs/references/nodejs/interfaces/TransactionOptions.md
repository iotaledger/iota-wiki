# Interface: TransactionOptions

Options for creating a transaction.

## Table of contents

### Properties

- [remainderValueStrategy](TransactionOptions.md#remaindervaluestrategy)
- [taggedDataPayload](TransactionOptions.md#taggeddatapayload)
- [contextInputs](TransactionOptions.md#contextinputs)
- [requiredInputs](TransactionOptions.md#requiredinputs)
- [burn](TransactionOptions.md#burn)
- [note](TransactionOptions.md#note)
- [allowMicroAmount](TransactionOptions.md#allowmicroamount)
- [allowAdditionalInputSelection](TransactionOptions.md#allowadditionalinputselection)
- [capabilities](TransactionOptions.md#capabilities)
- [manaAllotments](TransactionOptions.md#manaallotments)
- [issuerId](TransactionOptions.md#issuerid)

## Properties

### remainderValueStrategy

• `Optional` **remainderValueStrategy**: [`RemainderValueStrategy`](../api_ref.md#remaindervaluestrategy)

The strategy applied for base coin remainders.

___

### taggedDataPayload

• `Optional` **taggedDataPayload**: [`TaggedDataPayload`](../classes/TaggedDataPayload.md)

An optional tagged data payload.

___

### contextInputs

• `Optional` **contextInputs**: [`ContextInput`](../classes/ContextInput.md)[]

Transaction context inputs to include.

___

### requiredInputs

• `Optional` **requiredInputs**: `string`[]

Inputs that must be used for the transaction.

___

### burn

• `Optional` **burn**: [`Burn`](Burn.md)

Specifies what needs to be burned during input selection.

___

### note

• `Optional` **note**: `string`

Optional note, that is only stored locally.

___

### allowMicroAmount

• `Optional` **allowMicroAmount**: `boolean`

Whether to allow sending a micro amount.

___

### allowAdditionalInputSelection

• `Optional` **allowAdditionalInputSelection**: `boolean`

Whether to allow the selection of additional inputs for this transaction.

___

### capabilities

• `Optional` **capabilities**: `string`

Transaction capabilities.

___

### manaAllotments

• `Optional` **manaAllotments**: `Object`

Mana allotments for the transaction.

#### Index signature

▪ [account_id: [`AccountId`](../api_ref.md#accountid)]: [`u64`](../api_ref.md#u64)

___

### issuerId

• `Optional` **issuerId**: `string`

Optional block issuer to which the transaction will have required mana allotted.
