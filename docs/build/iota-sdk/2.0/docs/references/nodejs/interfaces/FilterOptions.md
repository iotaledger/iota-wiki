# Interface: FilterOptions

Options to filter outputs

## Table of contents

### Properties

- [lowerBoundBookedTimestamp](FilterOptions.md#lowerboundbookedtimestamp)
- [upperBoundBookedTimestamp](FilterOptions.md#upperboundbookedtimestamp)
- [outputTypes](FilterOptions.md#outputtypes)
- [accountIds](FilterOptions.md#accountids)
- [foundryIds](FilterOptions.md#foundryids)
- [nftIds](FilterOptions.md#nftids)
- [delegationIds](FilterOptions.md#delegationids)

## Properties

### lowerBoundBookedTimestamp

• `Optional` **lowerBoundBookedTimestamp**: `number`

Filter all outputs where the booked milestone index is below the specified timestamp

___

### upperBoundBookedTimestamp

• `Optional` **upperBoundBookedTimestamp**: `number`

Filter all outputs where the booked milestone index is above the specified timestamp

___

### outputTypes

• `Optional` **outputTypes**: `number`[]

Filter all outputs for the provided types (Basic = 3, Account = 4, Foundry = 5, NFT = 6)

___

### accountIds

• `Optional` **accountIds**: `string`[]

Return all account outputs matching these IDs.

___

### foundryIds

• `Optional` **foundryIds**: `string`[]

Return all foundry outputs matching these IDs.

___

### nftIds

• `Optional` **nftIds**: `string`[]

Return all NFT outputs matching these IDs.

___

### delegationIds

• `Optional` **delegationIds**: `string`[]

Return all delegation outputs matching these IDs.
