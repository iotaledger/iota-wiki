---
description: Deploying Wasm smart contracts with Solo.
image: /img/tutorial/send_request.png
keywords:

- testing
- PostRequestSync
- PostRequestOffLedger
- send
- requests
- post
- solo
- on-ledger
- off-ledger
- how-to

---

# Deploying Wasm Smart Contracts

:::note WASM VM

For more information about how to create Wasm smart contracts, refer to the [Wasm VM chapter](../wasm_vm/intro.mdx).

:::

## Deploy the Solo Tutorial

The following examples will make use of the
[`solotutorial` Rust/Wasm smart contract](https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples/src/solotutorial.rs)
.

In order to test the smart contract using Solo, first you need to deploy it. You can use the following code to
deploy `slotutorial_bg.wasm`:

```go
func TestTutorialDeploySC(t *testing.T) {
	env := solo.New(t, &solo.InitOptions{AutoAdjustStorageDeposit: true})
	chain := env.NewChain()
	err := chain.DeployWasmContract(nil, "solotutorial", "solotutorial_bg.wasm")
	require.NoError(t, err)
}
```

This will work as long as the `solotutorial_bg.wasm` file is in the same directory as the Go test code.

### Create a Default Wallet and Chain

You can use the `NewChain()` function to create a new wallet and deploys a new chain using said wallet, and other
default parameters. You can access the wallet calling `chain.OriginatorPrivateKey`.

### DeployWasmContract Parameters

#### Deployer's Key Pair

The first parameter to `DeployWasmContract`  is the key pair of the deployer of the smart contract. You can pass `nil`
to use a default wallet, which can be accessed as `chain.OriginatorPrivateKey`.

#### Smart Contract Name

The second parameter to `DeployWasmContract` (`"solotutorial"`), is the name assigned to the smart contract instance.
Smart contract instance names must be unique across each chain.

### AutoAdjustStorageDeposit

In the example above we enabled the `AutoAdjustStorageDeposit` option.
This is necessary in order to automatically adjust all sent L1 transactions to include the storage deposit if
necessary (provided that the sender owns the funds).

It is possible to disable the option and have manual control of the storage deposit, but in that case the deployment
of the smart contract will have to be done "by hand".

In most cases it is recommended to leave it enabled.

