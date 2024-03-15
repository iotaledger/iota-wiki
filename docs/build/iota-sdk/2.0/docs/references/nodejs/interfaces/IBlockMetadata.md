# Interface: IBlockMetadata

Response from the metadata endpoint.

## Table of contents

### Properties

- [blockId](IBlockMetadata.md#blockid)
- [blockState](IBlockMetadata.md#blockstate)
- [blockFailureReason](IBlockMetadata.md#blockfailurereason)
- [transactionMetadata](IBlockMetadata.md#transactionmetadata)

## Properties

### blockId

• **blockId**: `string`

The block id.

___

### blockState

• **blockState**: [`BlockState`](../api_ref.md#blockstate)

The block state.

___

### blockFailureReason

• `Optional` **blockFailureReason**: `BlockFailureReason`

The block failure reason.

___

### transactionMetadata

• `Optional` **transactionMetadata**: [`TransactionMetadata`](TransactionMetadata.md)

The metadata of the transaction in the block.
