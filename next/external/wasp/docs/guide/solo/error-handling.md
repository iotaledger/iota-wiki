---
description: What happens when a smart contract invocation fails?
image: /img/logo/WASP_logo_dark.png
keywords:

- testing
- solo
- error handling
- panic
- state
- transition

---

# Error Handling

The following test posts a request to the `solotutorial` smart contract without the expected parameter `"str"`, causing
the smart contract call to panic:

```go
func TestTutorialInvokeSCError(t *testing.T) {
	env := solo.New(t, &solo.InitOptions{AutoAdjustStorageDeposit: true})
	chain := env.NewChain()
	err := chain.DeployWasmContract(nil, "solotutorial", "solotutorial_bg.wasm")
	require.NoError(t, err)

	// missing the required parameter "str"
	req := solo.NewCallParams("solotutorial", "storeString").
		WithMaxAffordableGasBudget()

	_, err = chain.PostRequestSync(req, nil)
	require.Error(t, err)
	require.True(t, err.Error() == "WASM: panic in VM: missing mandatory string")
}
```

The `_, err = chain.PostRequestSync(req, nil)` will return an error containing `WASM: panic in VM: missing mandatory string`.

This shows that the request resulted in a panic.
The Solo test passes because of the `require.Error(t, err)` line.

Note that this test still ends with the state `#4`, although the last request to the smart contract failed:

```log
20:09.974258867	INFO	TestTutorialInvokeSCError.ch1	solo/run.go:156	state transition --> #4. Requests in the block: 1. Outputs: 1
```

This shows that a chain block is always generated, regardless of whether the smart contract call succeeds or not. The
result of the request is stored in the chain's [`blocklog`](../core_concepts/core_contracts/blocklog.md) in the form of
a receipt. In fact, the received Go error `err` in the test above is just generated from the request receipt.

If a panic occurs during a smart contract call, it is recovered by the VM context, and the request is marked as failed.
Any state changes made prior to the panic are rolled back.
