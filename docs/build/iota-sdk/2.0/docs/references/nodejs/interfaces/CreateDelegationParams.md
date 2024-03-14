# Interface: CreateDelegationParams

Options for delegation output creation

## Table of contents

### Properties

- [address](CreateDelegationParams.md#address)
- [delegatedAmount](CreateDelegationParams.md#delegatedamount)
- [validatorAddress](CreateDelegationParams.md#validatoraddress)

## Properties

### address

• `Optional` **address**: `string`

Bech32 encoded address which will control the delegation. By default, the ed25519 wallet address will be used.

___

### delegatedAmount

• **delegatedAmount**: `string`

The amount to delegate.

___

### validatorAddress

• **validatorAddress**: [`AccountAddress`](../classes/AccountAddress.md)

The Account Address of the validator to which this output will delegate.
