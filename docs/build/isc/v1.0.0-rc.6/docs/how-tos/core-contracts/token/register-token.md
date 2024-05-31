---
description: How to register a native token as ERC20
image: /img/logo/WASP_logo_dark.png
tags:
  - ERC20
  - EVM
  - how-to
---
import ExampleCodeIntro from '../../../_partials/how-tos/token/_example_code_intro.md';
import ObsoleteTokenCreation from '../../../_partials/how-tos/token/_obsolete_token_creation.md';

# Register Tokens

<ObsoleteTokenCreation/>

To properly use your native tokens, you should register them as ERC20 using the `registerERC20NativeToken` function from the ISC magic contract.

## Example Code

<ExampleCodeIntro/>


###  2. Register the Native Tokens

Register the native tokens specifying:
* the foundry serial number
* a name
* a symbol
* it's decimals 
* the allowance.
```solidity
ISC.sandbox.registerERC20NativeToken(_foundrySN, _name, _symbol, _decimals, allowance);
```

###  3. Get the Contract's Address

Get the ERC20 contract address with `erc20NativeTokensAddress`:

```solidity
address erc20address = ISC.sandbox.erc20NativeTokensAddress(_foundrySN);
```

### Full Example Code

```solidity
event ERC20Address(address erc20address);

function registerERC20NativeToken(uint32 _foundrySN, string calldata _name, string calldata _symbol, uint8 _decimals, uint64 _storageDeposit) public payable {
require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
ISCAssets memory allowance;
allowance.baseTokens = _storageDeposit;
ISC.sandbox.registerERC20NativeToken(_foundrySN, _name, _symbol, _decimals, allowance);
address erc20address = ISC.sandbox.erc20NativeTokensAddress(_foundrySN);
emit ERC20Address(erc20address);
}
```
