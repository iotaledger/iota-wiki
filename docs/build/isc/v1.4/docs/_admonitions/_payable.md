:::info Payable

Instead of making the function payable, you could let the contract pay for the storage deposit. 
If so, you will need to change the `require` statement to check if the contract's balance has enough funds:

```solidity
require(address(this).balance > _storageDeposit);
```

:::