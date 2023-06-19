---
description: Example of a _Solo_ test. It deploys a new chain and invokes some view calls.
image: /img/logo/WASP_logo_dark.png
keywords:

- testing framework
- golang
- solo
- example
- new chain
- how-to

---
# First Example

The following is an example of a _Solo_ test. It deploys a new chain and invokes some view calls in the
[`root`](../core_concepts/core_contracts/root.md) and [`governance`](../core_concepts/core_contracts/governance.md)
[core contracts](../core_concepts/core_contracts/overview.md).

```go
import (
	"testing"

	"github.com/iotaledger/wasp/packages/solo"
	"github.com/iotaledger/wasp/packages/vm/core/corecontracts"
	"github.com/stretchr/testify/require"
)

func TestTutorialFirst(t *testing.T) {
	env := solo.New(t)
	chain := env.NewChain()

	// calls views governance::ViewGetChainInfo and root:: ViewGetContractRecords
	chainID, chainOwnerID, coreContracts := chain.GetInfo()
	// assert that all core contracts are deployed
	require.EqualValues(t, len(corecontracts.All), len(coreContracts))

	t.Logf("chain ID: %s", chainID.String())
	t.Logf("chain owner ID: %s", chainOwnerID.String())
	for hname, rec := range coreContracts {
		t.Logf("    Core contract %q: %s", rec.Name, hname)
	}
}
```

The output of the test will be something like this:

```log
=== RUN   TestTutorialFirst
29:43.383770108	INFO	TestTutorialFirst.db	dbmanager/dbmanager.go:64	creating new in-memory database for: CHAIN_REGISTRY
29:43.383957435	INFO	TestTutorialFirst	solo/solo.go:162	Solo environment has been created: logical time: 00:01.001000000, time step: 1ms
29:43.384671943	INFO	TestTutorialFirst	solo/solo.go:236	deploying new chain 'tutorial1'. ID: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd, state controller address: tgl1qpk70349ftcpvlt6lnn0437p63wt7w2ejvlkw93wkkt0kc39f2wpvuv73ea
29:43.384686865	INFO	TestTutorialFirst	solo/solo.go:238	    chain 'tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd'. state controller address: tgl1qpk70349ftcpvlt6lnn0437p63wt7w2ejvlkw93wkkt0kc39f2wpvuv73ea
29:43.384698704	INFO	TestTutorialFirst	solo/solo.go:239	    chain 'tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd'. originator address: tgl1qq93jh7dsxq3lznajgtq33v26rt0pz0rs0rwar4jahahp6h2hh9jy4nc52k
29:43.384709967	INFO	TestTutorialFirst.db	dbmanager/dbmanager.go:64	creating new in-memory database for: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd
29:43.384771911	INFO	TestTutorialFirst	solo/solo.go:244	    chain 'tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd'. origin state commitment: c4f09061cd63ea506f89b7cbb3c6e0984f124158
29:43.417023624	INFO	TestTutorialFirst	solo/solo.go:171	solo publisher: state [tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd 1 1 0-6c7ff6bc5aaa3af12f9b6b7c43dcf557175ac251418df562f7ec4ff092e84d4f 0000000000000000000000000000000000000000000000000000000000000000]
29:43.417050354	INFO	TestTutorialFirst	solo/solo.go:171	solo publisher: request_out [tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd 0-11232aa47639429b83faf79547c6bf615bd65aa461f243c89e4073b792ac89b7 1 1]
29:43.417056290	INFO	TestTutorialFirst.tutorial1	solo/run.go:156	state transition --> #1. Requests in the block: 1. Outputs: 1
29:43.417179099	INFO	TestTutorialFirst.tutorial1	solo/run.go:176	REQ: 'tx/0-11232aa47639429b83faf79547c6bf615bd65aa461f243c89e4073b792ac89b7'
29:43.417196814	INFO	TestTutorialFirst.tutorial1	solo/solo.go:301	chain 'tutorial1' deployed. Chain ID: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd
    tutorial_test.go:20: chain ID: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd
    tutorial_test.go:21: chain owner ID: tgl1qq93jh7dsxq3lznajgtq33v26rt0pz0rs0rwar4jahahp6h2hh9jy4nc52k
    tutorial_test.go:23:     Core contract "blob": fd91bc63
    tutorial_test.go:23:     Core contract "governance": 17cf909f
    tutorial_test.go:23:     Core contract "errors": 8f3a8bb3
    tutorial_test.go:23:     Core contract "evm": 07cb02c1
    tutorial_test.go:23:     Core contract "accounts": 3c4b5e02
    tutorial_test.go:23:     Core contract "root": cebf5908
    tutorial_test.go:23:     Core contract "blocklog": f538ef2b
--- PASS: TestTutorialFirst (0.03s)
```

:::note

* The example uses [`stretchr/testify`](https://github.com/stretchr/testify) for assertions, but it is not strictly
  required.
* Addresses, chain IDs and other hashes should be the same on each run of the test because Solo uses a constant seed by
  default.
* The timestamps shown in the log come from the computer's timer, but the Solo environment operates on its own logical
  time.

:::

The [core contracts](../core_concepts/core_contracts/overview.md) listed in the log are automatically deployed on each
new chain. The log also shows their _contract IDs_.

The output fragment in the log `state transition --> #1` means that the state of the chain has changed from block index
0 (the origin index of the empty state) to block index 1. State #0 is the empty origin state, and #1 always contains all
core smart contracts deployed on the chain, as well as other data internal to the chain itself, such as the _chainID_
and the _chain owner ID_.

The _chain ID_ and _chain owner ID_ are, respectively, the ID of the deployed chain, and the address of the L1 account
that triggered the deployment of the chain (which is automatically generated by Solo in our example, but it can be
overridden when calling `env.NewChain`).



