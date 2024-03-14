# Interface: IOutputConsumptionMetadata

Metadata of the output if it is marked as spent in the ledger.

## Table of contents

### Properties

- [slot](IOutputConsumptionMetadata.md#slot)
- [transactionId](IOutputConsumptionMetadata.md#transactionid)
- [commitmentId](IOutputConsumptionMetadata.md#commitmentid)

## Properties

### slot

• **slot**: `number`

Slot in which the output was spent.

___

### transactionId

• **transactionId**: `string`

Transaction ID that spent the output.

___

### commitmentId

• `Optional` **commitmentId**: `string`

Commitment ID that includes the spending of the output.
