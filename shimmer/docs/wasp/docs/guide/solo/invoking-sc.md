---
description: Invoking smart contracts with on-ledger and off-ledger requests with Solo.
image: /img/tutorial/send_request.png
keywords:

- how-to
- explanation
- testing
- PostRequestSync
- PostRequestOffLedger
- send
- requests
- post
- solo
- on-ledger
- off-ledger

---

# Invoking Smart Contracts

After deploying
the [`solotutorial`](https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples/src/solotutorial.rs)
smart contract, you can invoke the `storeString` function:

```go
func TestTutorialInvokeSC(t *testing.T) {
	env := solo.New(t, &solo.InitOptions{AutoAdjustStorageDeposit: true})
	chain := env.NewChain()
	err := chain.DeployWasmContract(nil, "solotutorial", "solotutorial_bg.wasm")
	require.NoError(t, err)

	// invoke the `storeString` function
	req := solo.NewCallParams("solotutorial", "storeString", "str", "Hello, world!").
		WithMaxAffordableGasBudget()
	_, err = chain.PostRequestSync(req, nil)
	require.NoError(t, err)

	// invoke the `getString` view
	res, err := chain.CallView("solotutorial", "getString")
	require.NoError(t, err)
	require.Equal(t, "Hello, world!", codec.MustDecodeString(res.MustGet("str")))
}
```

## Parameters

### `NewCallParams()`

The above example uses `NewCallParams` to set up the parameters of the request that it will send to the contract.
It specifies that it wants to invoke the `storeString` entry point of the `solotutorial` smart contract, passing the
parameter named `str` with the string value `"Hello, world!"`.

### `WithMaxAffordableGasBudget()`

`WithMaxAffordableGasBudget()` assigns the gas budget of the request to the maximum that the sender can afford with the
funds they own on L2 (including any funds attached in the request itself).
In this case the funds attached automatically for the storage deposit will be enough to cover for the gas fee, so it is
not necessary to manually deposit more funds for gas.

## `PostRequestSync()`

`PostRequestSync` sends an on-ledger request to the chain.

## On-Ledger Requests

[![Generic process of posting an on-ledger request to the smart contract](/img/tutorial/send_request.png)](/img/tutorial/send_request.png)

The diagram above depicts the generic process of posting an _on-ledger_ request to the smart contract.
The same diagram is valid for the Solo environment and any other requester that sends an on-ledger request, e.g., the
IOTA Smart Contracts wallet or another chain.

Posting an on-ledger request always consists of the steps below.
Note that in Solo, all seven steps are carried out by a single call to `PostRequestSync`.

1. Create the L1 transaction, which wraps the L2 request and moves tokens.

   Each on-ledger request must be contained in a transaction on the ledger.
   Therefore, it must be signed by the sender’s private key.
   This securely identifies each requester in IOTA Smart Contracts.
   In Solo, the transaction is signed by the private key provided in the second parameter of the `PostRequestSync` call
   (`chain.OriginatorPrivateKey()` by default).

2. Post and confirm the transaction to the L1 ledger.

   In Solo, it is just adding the transaction to the emulated L1 ledger, so it is confirmed immediately and
   synchronously.
   The confirmed transaction on the ledger becomes part of the backlog of requests to be processed by the chain.
   In the real L1 ledger, the sender must wait until the ledger confirms the transaction.

3. The chain picks the request from the backlog and runs the request on the VM.
4. The VM calls the target entry point of the smart contract program. The program updates the state.
5. The VM produces a state update transaction (the _anchor_).
6. The chain signs the transaction with its private key (the `chain.StateControllerKeyPair()` in Solo).
7. The chain posts the resulting transaction to the L1 ledger and, after confirmation, commits the corresponding state.

The following lines in the test log correspond to step 7:

```log
49:37.771863573 INFO    TestTutorialInvokeSC    solo/solo.go:171        solo publisher: state [tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd 4 1 0-177c8a62feb7d434608215a179dd6637b8038d1237dd264
d8feaf4d9a851b808 0000000000000000000000000000000000000000000000000000000000000000]
49:37.771878833 INFO    TestTutorialInvokeSC    solo/solo.go:171        solo publisher: request_out [tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd 0-c55b41b07687c644b7f7a1b9fb5da86f2d40195f39885
bc348767e2dd285ca15 4 1]
49:37.771884127 INFO    TestTutorialInvokeSC.ch1        solo/run.go:156 state transition --> #4. Requests in the block: 1. Outputs: 1
```

## Off-ledger Requests

Alternatively, you could send an off-ledger request by using `chain.PostRequestOffLedger` instead of `PostRequestSync`.
However, since off-ledger requests cannot have tokens attached, in order to cover the gas fee, you must deposit funds to
the chain beforehand:

```go
user, _ := env.NewKeyPairWithFunds(env.NewSeedFromIndex(1))
chain.DepositBaseTokensToL2(10_000, user) // to cover gas fees
_, err = chain.PostRequestOffLedger(req, user)
require.NoError(t, err)
```
