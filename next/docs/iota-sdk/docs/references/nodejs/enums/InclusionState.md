# Enumeration: InclusionState

Possible InclusionStates of transactions sent with the wallet

## Table of contents

### Enumeration Members

- [Pending](InclusionState.md#pending)
- [Confirmed](InclusionState.md#confirmed)
- [Conflicting](InclusionState.md#conflicting)
- [UnknownPruned](InclusionState.md#unknownpruned)

## Enumeration Members

### Pending

• **Pending** = `"Pending"`

The transaction is pending

---

### Confirmed

• **Confirmed** = `"Confirmed"`

The transaction is confirmed

---

### Conflicting

• **Conflicting** = `"Conflicting"`

The transaction is conflicting

---

### UnknownPruned

• **UnknownPruned** = `"UnknownPruned"`

The transaction and its in- and outputs are pruned, so it's unknown if it got confirmed or was conflicting
