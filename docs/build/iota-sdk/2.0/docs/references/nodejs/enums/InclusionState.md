# Enumeration: InclusionState

Possible InclusionStates of transactions sent with the wallet

## Table of contents

### Enumeration Members

- [Pending](InclusionState.md#pending)
- [Accepted](InclusionState.md#accepted)
- [Confirmed](InclusionState.md#confirmed)
- [Finalized](InclusionState.md#finalized)
- [Conflicting](InclusionState.md#conflicting)
- [UnknownPruned](InclusionState.md#unknownpruned)

## Enumeration Members

### Pending

• **Pending** = ``"Pending"``

The transaction is pending.

___

### Accepted

• **Accepted** = ``"Accepted"``

The transaction is accepted.

___

### Confirmed

• **Confirmed** = ``"Confirmed"``

The transaction is confirmed.

___

### Finalized

• **Finalized** = ``"Finalized"``

The transaction is finalized.

___

### Conflicting

• **Conflicting** = ``"Conflicting"``

The transaction is conflicting.

___

### UnknownPruned

• **UnknownPruned** = ``"UnknownPruned"``

The transaction and its in- and outputs are pruned, so it's unknown if it got confirmed or was conflicting.
