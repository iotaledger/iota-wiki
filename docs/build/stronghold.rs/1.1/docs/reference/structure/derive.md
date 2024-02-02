---
description: The Derive crate contains procedural macros for Stronghold.
image: /img/logo/Stronghold_icon.png
tags:
  - reference
  - rust
  - crate
  - GuardDebug
  - VariantPermission
---

# Structure: Derive

[![github](https://img.shields.io/badge/github-source-blue.svg)](https://github.com/iotaledger/stronghold.rs/tree/dev/derive) [![](https://img.shields.io/crates/v/stronghold-derive.svg)](https://crates.io/crates/stronghold-derive)

This crate contains procedural macros for Stronghold.

#### GuardDebug

The GuardDebug macro is used to block inspection of a data structure. It implements the Debug trait and explicitly blocks the reading of the internal data on the structure its derived on. Instead, the data will be returned out as a `(guarded)` string.

##### Example

```rust
#[derive(GuardDebug)]
struct Foo {
    some_data: String
}
...

let foo = Foo { some_data: "Some data"};

println!("{:?}", foo);
...

> Foo(guarded)
```

#### RequestPermissions

Implements the `VariantPermission` for struct/unions with PermissionValue(1). For enums, it implements `ToPermissionVariants`, which creates an according new enum `<Ident>Permission` with Unit variants, and implements `VariantPermission` by assigning different `PermissionValue` for each variant. The permission value is the "index" in the enum as exponent for the power of 2, thus from top to bottom 1, 2, 4, 8...
