# IOTA Theme

The IOTA Wiki theme for Docusaurus.

## Installation

Add `@iota-wiki/theme` to your package:

```bash
npm i @iota-wiki/theme
# or
yarn add @iota-wiki/theme
```

Modify your `docusaurus.config.js`:

```diff
module.exports = {
  ...
+ themes: ['@iota-wiki/theme'],
  ...
}
```

## Components

### AddToMetaMaskButton

A button to add the ShimmerEVM network to MetaMask.

```
import {AddToMetaMaskButton} from '@theme/AddToMetaMaskButton'

<AddToMetaMaskButton />
```

### CodeSnippetBlock

This component finds `startString` and `endString` in a code listing and displays the snippet in between.

```
import CodeSnippetBlock from '@theme/CodeSnippetBlock'
import code_snippet from '!!raw-loader!../../code_snippet.py'

<CodeSnippetBlock
  language={'python'}
  code={code_snippet}
  startString={'# start'}
  endString={'# end'} />
```

## Swizzling components

```bash
npm swizzle @iota-wiki/theme [component name]
```

All components used by this theme can be found [here](https://github.com/iota-wiki/iota-wiki/tree/main/theme/src/theme)
