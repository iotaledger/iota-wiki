---
description:  'How to manage a chain using the Grafana dashboard, a client to receive published events, logging, and
validators.'
image: /img/logo/WASP_logo_dark.png
keywords:

- Smart Contracts
- Chain
- Management
- Grafana

---

# Chain Management

## Monitoring

Each Wasp node provides a [Grafana dashboard](./running-a-node.md#grafana) where you can visualize metrics gathered by
the node.

You can view the chain state using the [dashboard](./running-a-node.md#dashboard) (by default on port `:7000`).

You can also set up a client to receive [published events](./running-a-node.md#publisher) to have insights into what's
happening in the system.

Lastly, each Wasp node will produce a log file (`wasp.log`) where you can investigate the behavior of a node.

## Managing Chain Configuration and Validators

You can manage the chain configuration and committee of validators by interacting with
the [Governance contract](../core_concepts/core_contracts/governance.md).

The “Chain Owner” is the only one who can perform administrative tasks.

### Changing Chain Ownership

To change the chain ownership, the current “Chain Owner” must call `delegateChainOwnership` specifying the `agentID` of
the next owner. The next owner must call `claimChainOwnership` to finalize the process.

### Changing Access Nodes

For new access nodes to join the network, they need to:

- Be added as a trusted peer to at least 1 of the existing nodes.
- Be added by the administrator to the list of access nodes by calling `changeAccessNodes`. There is a helper in
  wasp-cli to do so:

```bash
wasp-cli chain change-access-nodes
```

After this, new nodes should be able to sync the state and execute view queries (call view entry points).

You can remove an access node by calling `changeAccessNodes`.

### Changing the Set of Validators

You can do this in different ways, depending on whom the
[governor address](https://wiki.iota.org/introduction/develop/explanations/ledger/alias) of the alias output of the
chain is.

- If the chain governor address is the chain itself or another chain, you can perform the rotation by calling
  `rotateStateController` after adding the next state controller via `addAllowedStateControllerAddress`.
- If the chain governor address is a regular user wallet, you can issue the rotation transaction using wasp-cli:

```bash
wasp-cli chain rotate <new controller address>
```




