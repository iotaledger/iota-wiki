---
description: Query the Indexer for Outputs.
image: /img/logo/HornetLogo.png
tags:
  - IOTA Node
  - HORNET Node
  - Configuration
  - REST API
  - Indexer
  - Simple Outputs
  - Query
  - how to
---

# Query the Indexer for Outputs

Outputs support a wide range of unlock conditions. Some of them are time-based or require to issue a transaction to claim final ownership of the outputs. Some usecases might want to skip these kind of outputs to avoid the required complexity of comparing time or issuing claiming transactions. The indexer allows you to filter out these outputs by using simple query filters.

## "Simple Outputs"

We can define "Simple Outputs" to be the ones that can be unlocked by a single address, have no timelock or expiration and have no storage deposit return conditions. These ouputs are 100% owned by the given address and can be spent without any constraints.

### Example

An example indexer query for such simple outputs could be:

`https://api.testnet.shimmer.network/api/indexer/v1/outputs/basic?address=rms1qrnspqhq6jhkujxak8aw9vult5uaa38hj8fv9klsvnvchdsf2q06wmr2c7j&hasStorageDepositReturn=false&hasExpiration=false&hasTimelock=false`

Let's break it down into the components:

- `/api/indexer/v1/outputs/basic`: we are asking the indexer for outputs of type `BasicOutput`. These are normal outputs that carry value in form of the base token and optionally a set of native tokens. You can check [TIP-18](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md) for more information about the outputs that are supported by the network.

- `address=rms1qrnspqhq6jhkujxak8aw9vult5uaa38hj8fv9klsvnvchdsf2q06wmr2c7j` : we are asking the indexer to only return the outputs, where the `Address Unlock Condition` matches the given address `rms1qrnspqhq6jhkujxak8aw9vult5uaa38hj8fv9klsvnvchdsf2q06wmr2c7j`

- `hasStorageDepositReturn=false`: by adding the `hasStorageDepositReturn` query parameter we are explicitely asking the indexer to look at the `Storage Deposit Return Unlock Condition` of the outputs. By passing `false` we tell the indexer to only return outputs that have no such condition.

- `hasExpiration=false`: by adding the `hasExpiration` query parameter, we can tell the indexer to look for `Expiration Unlock Condition` and by passing `false` we can ask it to only return outputs that have no expiration condition.

- `hasTimelock=false`: by adding the `hasTimelock` query parameter, we are asking the indexer to look for `Timelock Unlock Condition` and by passing `false` we tell it to only return outputs that have no timelock condition.
