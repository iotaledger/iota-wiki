---
description: How to handle native tokens on L2 and use them as ERC20
image: /img/logo/WASP_logo_dark.png
tags:
  - native token
  - EVM
  - how-to
---
import DocCardList from '@theme/DocCardList';

# Native Token and ERC20NativeToken

The IOTA L1 has functionality to create L1 tokens, also called native tokens. To use these native tokens on L2, you have
a ERC20 contract called `ERC20NativeToken`. The following guides will show you how to [create a foundry](create-foundry.md)
that can [mint your own L1 token from L2](mint-token.md), and [register](register-token.md) it as `ERC20NativeToken`, 
so it can be used like any other ERC20 token with some additional features.

<DocCardList />