# Class: CongestionResponse

Provides the cost and readiness to issue estimates.

## Table of contents

### Constructors

- [constructor](CongestionResponse.md#constructor)

### Properties

- [slot](CongestionResponse.md#slot)
- [ready](CongestionResponse.md#ready)
- [referenceManaCost](CongestionResponse.md#referencemanacost)
- [blockIssuanceCredits](CongestionResponse.md#blockissuancecredits)

## Constructors

### constructor

• **new CongestionResponse**()

## Properties

### slot

• **slot**: `number`

Slot for which the estimate is provided.

___

### ready

• **ready**: `boolean`

Indicates if a node is ready to schedule a block issued by the specified account, or if the issuer should wait.

___

### referenceManaCost

• **referenceManaCost**: `bigint`

Mana cost a user needs to burn to issue a block in the slot.

___

### blockIssuanceCredits

• **blockIssuanceCredits**: `bigint`

BIC of the account in the slot. This balance needs to be non-negative, otherwise account is locked.
