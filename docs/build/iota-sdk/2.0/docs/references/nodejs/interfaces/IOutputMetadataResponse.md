# Interface: IOutputMetadataResponse

Metadata of an output.

## Table of contents

### Properties

- [outputId](IOutputMetadataResponse.md#outputid)
- [blockId](IOutputMetadataResponse.md#blockid)
- [included](IOutputMetadataResponse.md#included)
- [spent](IOutputMetadataResponse.md#spent)
- [latestCommitmentId](IOutputMetadataResponse.md#latestcommitmentid)

## Properties

### outputId

• **outputId**: `string`

The ID of the output.

___

### blockId

• **blockId**: `string`

The ID of the block in which the output was included.

___

### included

• **included**: [`IOutputInclusionMetadata`](IOutputInclusionMetadata.md)

Metadata of the output if it is included in the ledger.

___

### spent

• `Optional` **spent**: [`IOutputConsumptionMetadata`](IOutputConsumptionMetadata.md)

Metadata of the output if it is marked as spent in the ledger.

___

### latestCommitmentId

• **latestCommitmentId**: `string`

Latest commitment ID of the node.
