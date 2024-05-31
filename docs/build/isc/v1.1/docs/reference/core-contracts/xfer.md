---
description: 'The `transferAccountToChain` contract needs special consideration.'
image: /img/logo/WASP_logo_dark.png
tags:
  - core contracts
  - accounts
  - deposit
  - withdraw
  - assets
  - balance
  - reference
---

# `accounts.transferAccountToChain`

The `transferAccountToChain` function of the `accounts` contract is one that needs
careful consideration before use. Make sure you understand precisely how to use it to
prevent

---

## Entry Point

### `transferAccountToChain(g GasReserve)`

Transfers the specified allowance from the sender SC's L2 account on
the target chain to the sender SC's L2 account on the origin chain.

Caller must be a contract, and we will transfer the allowance from its L2 account
on the target chain to its L2 account on the origin chain. This requires that
this function takes the allowance into custody and in turn sends the assets as
allowance to the origin chain, where that chain's accounts.TransferAllowanceTo()
function then transfers it into the caller's L2 account on that chain.

#### Parameters

- `g` (`uint64`): Optional gas amount to reserve in the allowance for
  the internal call to transferAllowanceTo(). Default 100 (MinGasFee).
  But better to provide it so that it matches the fee structure.

### IMPORTANT CONSIDERATIONS

1. The caller contract needs to provide sufficient base tokens in its
   allowance, to cover the gas fee GAS1 for this request.
   Note that this amount depends on the fee structure of the target chain,
   which can be different from the fee structure of the caller's own chain.

2. The caller contract also needs to provide sufficient base tokens in
   its allowance, to cover the gas fee GAS2 for the resulting request to
   accounts.TransferAllowanceTo() on the origin chain. The caller needs to
   also specify this GAS2 amount through the GasReserve parameter.

3. The caller contract also needs to provide a storage deposit SD with
   this request, holding enough base tokens _independent_ of the GAS1 and
   GAS2 amounts.
   Since this storage deposit is dictated by L1 we can use this amount as
   storage deposit for the resulting accounts.TransferAllowanceTo() request,
   where it will then be returned to the caller as part of the transfer.

4. This means that the caller contract needs to provide at least
   GAS1 + GAS2 + SD base tokens as assets to this request, and provide an
   allowance to the request that is exactly GAS2 + SD + transfer amount.
   Failure to meet these conditions may result in a failed request and
   worst case the assets sent to accounts.TransferAllowanceTo() could be
   irretrievably locked up in an account on the origin chain that belongs
   to the accounts core contract of the target chain.

5. The caller contract needs to set the gas budget for this request to
   GAS1 to guard against unanticipated changes in the fee structure that
   raise the gas price, otherwise the request could accidentally cannibalize
   GAS2 or even SD, with potential failure and locked up assets as a result.
