# Class: StorageDepositReturnUnlockCondition

Storage Deposit Return Unlock Condition.

## Hierarchy

- `UnlockCondition`

  ↳ **`StorageDepositReturnUnlockCondition`**

## Table of contents

### Methods

- [getType](StorageDepositReturnUnlockCondition.md#gettype)
- [getAmount](StorageDepositReturnUnlockCondition.md#getamount)
- [getReturnAddress](StorageDepositReturnUnlockCondition.md#getreturnaddress)

## Methods

### getType

▸ **getType**(): `UnlockConditionType`

The type of unlock condition.

#### Returns

`UnlockConditionType`

#### Inherited from

UnlockCondition.getType

___

### getAmount

▸ **getAmount**(): `string`

Amount of tokens the consuming transaction must deposit to the address defined in return address.

#### Returns

`string`

___

### getReturnAddress

▸ **getReturnAddress**(): `Address`

The return address.

#### Returns

`Address`
