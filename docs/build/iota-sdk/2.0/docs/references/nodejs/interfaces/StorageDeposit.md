# Interface: StorageDeposit

Storage deposit strategy to be used for the output.

## Table of contents

### Properties

- [returnStrategy](StorageDeposit.md#returnstrategy)
- [useExcessIfLow](StorageDeposit.md#useexcessiflow)

## Properties

### returnStrategy

• `Optional` **returnStrategy**: [`ReturnStrategy`](../enums/ReturnStrategy.md)

The return strategy.

___

### useExcessIfLow

• `Optional` **useExcessIfLow**: `boolean`

Determines whether the storage deposit will automatically add excess small funds when necessary.
For example, given an account has 20 tokens and wants to send 15 tokens, and the minimum amount
is 10 tokens, it wouldn't be possible to create an output with the 5 token remainder. If this flag is enabled,
the 5 tokens will be added to the output automatically.
