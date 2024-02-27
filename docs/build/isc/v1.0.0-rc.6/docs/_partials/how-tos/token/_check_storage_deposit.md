### 1. Check the Storage Deposit

Check if the amount paid to the contract is the same as the required [storage deposit](/learn/protocols/stardust/core-concepts/storage-deposit)
   and set the allowance.

```solidity
require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
ISCAssets memory allowance;
allowance.baseTokens = _storageDeposit;
```