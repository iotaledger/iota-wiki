---
description: Calling smart contract view functions with Solo.
image: /img/tutorial/call_view.png
keywords:

- how to
- testing
- solo
- views
- call
- synchronous
- entry points

---

# Calling a View

The following snippet shows how you can call the view function `getString` of the smart contract `solotutorial` without
parameters:

```go
res, err := chain.CallView("example1", "getString")
```

The call returns a collection of key/value pairs `res` and an error result `err` in the typical Go fashion.

[![Calling a view process](/img/tutorial/call_view.png)](/img/tutorial/call_view.png)

The basic principle of calling a view is similar to sending a request to the smart contract. The essential difference is
that calling a view does not constitute an asynchronous transaction; it is just a direct synchronous call to the view
entry point exposed by the smart contract.

Therefore, calling a view does not involve any token transfers. Sending a request (either on-ledger or off-ledger) to a
view entry point will result in an exception, returning all attached tokens to the sender minus fees (iif any).

Views are used to retrieve information about the smart contract's state, for example, to display on a website. Certain
Solo methods such as `chain.GetInfo`, `chain.GetGasFeePolicy`, and `chain.L2Assets` call views of
the [core smart contracts](../core_concepts/core_contracts/overview.md) behind the scenes to retrieve the information
about the chain or a specific smart contract.

## Decoding Results Returned by _PostRequestSync_ and _CallView_

The following is a specific technicality of the Go environment of _Solo_.

The result returned by the call to an entry point from the Solo environment is an instance of
the [`dict.Dict`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/dict/dict.go) type, which is essentially a
map of `[]byte` key/value pairs, defined as:

```go
type Dict map[kv.Key][]byte
```

`Dict` is also an implementation of
the [`kv.KVStore`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/kv.go) interface. The `kv` package and
subpackages provide many useful functions to work with the `Dict` type.

:::note 

Both view and non-view entry points can produce results.
In normal operation, retrieving the result of an on-ledger request is impossible since it is an asynchronous operation.

However, in the Solo environment, the call to `PostRequestSync` is synchronous, allowing the caller to inspect the
result.
This is a convenient difference between the mocked Solo environment and the distributed ledger used by Wasp nodes.
You can use it to make assertions about the results of a call in the tests.

:::

In the example above, `res` is a dictionary where keys and values are binary slices. The `getString` view returns the
value under the `"str"` key, and the value is a `string` encoded as a byte slice. The `codec` package provides functions
to encode/decode frequently used data types, including `string`. The following is a commonly used pattern to get a value
from the `Dict` and decode it:

```go
var value string = codec.MustDecodeString(res["str"])
```



