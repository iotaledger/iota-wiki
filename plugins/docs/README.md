# Docs

This plugin wraps the Docusaurus docs plugin and adds the possibility to expose selected sidebars on the client side globally, where the Docusaurus docs plugin would only expose a link instead of the complete sidebar structure. This allows us to display sidebars statically in docs other than the one the sidebar is associated with.

## Usage

```
yarn add @iota-wiki/plugin-docs
```

Configure it like you would do with the Docusaurus docs plugin. Then register any sidebars you want to expose globally by adding their ID, found in the associated sidebars configuration file, to the `globalSidebars` array:

```js
  plugins: [
    [
      '@iota-wiki/plugin-docs',
      {
        globalSidebars: ['sidebar-id'], // Optional
        ...
      },
    ],
    ...
  ...
```

Now the global data for that docs plugin will contain a `globalSidebars` object, which maps sidebar IDs to their items. For example:

```js
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
  ...
  const plugins = useAllDocsData();
  const sidebarItems = plugins['default'].globalSidebars['sidebar-id'];
  ...
```
