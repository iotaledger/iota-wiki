---
description: How to interact with the L1 ledger in Solo.
image: /img/logo/WASP_logo_dark.png
keywords:

- testing
- solo
- UTXO
- tokens
- ledger
- l1
- how-to

---

# The L1 Ledger

IOTA Smart Contracts work as a **layer 2** (**L2**) extension of the _IOTA Multi-Asset Ledger_, **layer 1** (**L1**).
The specifics of the ledger is outside the scope of this documentation; for now it is sufficient to know that the ledger
contains balances of different kinds of assets (base tokens, native tokens, foundries and NFTs) locked in addresses.
Assets can only be moved on the ledger by unlocking the corresponding address with its private key.

For example:

```log
Address: iota1pr7vescn4nqc9lpvv37unzryqc43vw5wuf2zx8tlq2wud0369hjjugg54mf
    IOTA: 4012720
	Native token 0x08fcccc313acc182fc2c647dc98864062b163a8ee254231d7f029dc6be3a2de52e0100000000: 100
	NFT 0x94cd51b79d9608ed6e38780d48e9fc8c295b893077739b28ce591c45b33dec44
```

In this example, the address owns some base tokens (IOTA), 100 units of a native token with ID `0x08fc...`, and an NFT
with ID `0x94cd...`.

You can find more information about the ledger in the
[Multi-Asset Ledger TIP](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md).

In normal operation, the L2 state is maintained by a committee of Wasp nodes. The L1 ledger is provided and
maintained by a network of [Hornet](https://github.com/iotaledger/hornet) nodes, which is a distributed implementation
of the IOTA Multi-Asset Ledger.

The Solo environment implements a standalone in-memory ledger, simulating the behavior of a real L1 ledger without the
need to run a network of Hornet nodes.

The following example creates a new wallet (private/public key pair) and requests some base tokens from the faucet:

```go
func TestTutorialL1(t *testing.T) {
	env := solo.New(t)
	_, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(1))
	t.Logf("address of the user is: %s", userAddress.Bech32(parameters.L1.Protocol.Bech32HRP))
	numBaseTokens := env.L1BaseTokens(userAddress)
	t.Logf("balance of the user is: %d base tokens", numBaseTokens)
	env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount)
}
```

The output of the test is:

```log
=== RUN   TestTutorialL1
47:49.136622566	INFO	TestTutorialL1.db	dbmanager/dbmanager.go:64	creating new in-memory database for: CHAIN_REGISTRY
47:49.136781104	INFO	TestTutorialL1	solo/solo.go:162	Solo environment has been created: logical time: 00:01.001000000, time step: 1ms
    tutorial_test.go:32: address of the user is: tgl1qp5d8zm9rr9rcae2hq95plx0rquy5gu2mpedurm2kze238neuhh5csjngz0
    tutorial_test.go:34: balance of the user is: 1000000000 base tokens
--- PASS: TestTutorialL1 (0.00s)
```

The L1 ledger in Solo can be accessed via the Solo instance called `env`.
The ledger is unique for the lifetime of the Solo environment.
Even if several L2 chains are deployed during the test, all of them will live on the same L1 ledger; this way Solo makes
it possible to test cross-chain transactions.
(Note that in the test above we did not deploy any chains: the L1 ledger exists independently of any chains.)
