---
description: 'The errors contract keeps a map of error codes to error message templates. These error codes are used in
request receipts.'
image: /img/logo/WASP_logo_dark.png
keywords:

- smart contracts
- core
- root
- initialization
- entry points
- fees
- ownership
- views
- reference

--- 

# The `errors` Contract

The `errors` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts
chain.

The `errors` contract keeps a map of error codes to error message templates.
This allows contracts to store lengthy error strings only once and then reuse them by just providing the error code (and
optional extra values) when producing an error, thus saving storage and gas.

---

## Entry Points

### `registerError(m ErrorMessageFormat) c ErrorCode`

Registers an error message template.

#### Parameters

- `m` (`string`): The error message template, which supports standard [go verbs](https://pkg.go.dev/fmt#hdr-Printing)
  for variable printing.

#### Returns

- `c` (`ErrorCode`): The error code of the registered template

---

## Views

### `getErrorMessageFormat(c ErrorCode) m ErrorMessageFormat`

Returns the message template stored for a given error code.

#### Parameters

- `c` (`ErrorCode`): The error code of the registered template.

#### Returns

- `m` (`string`): The error message template.

---

## Schemas

### `ErrorCode`

`ErrorCode` is encoded as the concatenation of:

- The contract hname(`hname`).
- The error ID, calculated as the hash of the error template(`uint16`).

### `UnresolvedVMError`

`UnresolvedVMError` is encoded as the concatenation of:

- The error code ([`ErrorCode`](#errorcode)).
- CRC32 checksum of the formatted string (`uint32`).
- The JSON-encoded list of parameters for the template (`string` prefixed with `uint16` size).



