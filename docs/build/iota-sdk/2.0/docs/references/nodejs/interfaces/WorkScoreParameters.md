# Interface: WorkScoreParameters

Work Score Parameters lists the work score of each type, it is used to denote the computation costs of processing an object.

## Table of contents

### Properties

- [dataByte](WorkScoreParameters.md#databyte)
- [block](WorkScoreParameters.md#block)
- [input](WorkScoreParameters.md#input)
- [contextInput](WorkScoreParameters.md#contextinput)
- [output](WorkScoreParameters.md#output)
- [nativeToken](WorkScoreParameters.md#nativetoken)
- [staking](WorkScoreParameters.md#staking)
- [blockIssuer](WorkScoreParameters.md#blockissuer)
- [allotment](WorkScoreParameters.md#allotment)
- [signatureEd25519](WorkScoreParameters.md#signatureed25519)

## Properties

### dataByte

• **dataByte**: `number`

DataByte accounts for the network traffic per kibibyte.

___

### block

• **block**: `number`

Block accounts for work done to process a block in the node software.

___

### input

• **input**: `number`

Input accounts for loading the UTXO from the database and performing the mana calculations.

___

### contextInput

• **contextInput**: `number`

ContextInput accounts for loading and checking the context input.

___

### output

• **output**: `number`

Output accounts for storing the UTXO in the database.

___

### nativeToken

• **nativeToken**: `number`

NativeToken accounts for calculations done with native tokens.

___

### staking

• **staking**: `number`

Staking accounts for the existence of a staking feature in the output.

___

### blockIssuer

• **blockIssuer**: `number`

BlockIssuer accounts for the existence of a block issuer feature in the output.

___

### allotment

• **allotment**: `number`

Allotment accounts for accessing the account based ledger to transform the mana to block issuance credits.

___

### signatureEd25519

• **signatureEd25519**: `number`

SignatureEd25519 accounts for an Ed25519 signature check.
