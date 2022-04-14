# Tutorial plugin

This is a small plugin to register tutorials to be listed on the tutorial page, which is also provided by this plugin.

## Usage

```
yarn add @jlvandenhout/plugin-tutorial
```

Then register the tutorial page and any tutorials to list on it by providing information like the titles, routes and metadata of the tutorials:

```js
  plugins: [
    [
        '@jlvandenhout/plugin-tutorial/page',
        {
            id: 'default', // Defaults to the route or the default plugin id if not provided.
            route: '/tutorials', // Defaults to this.
        }
    ],
    [
      '@jlvandenhout/plugin-tutorial',
      {
        title: "EVM Tutorial",
        description:
          "In this tutorial, you will learn how to use the EVM in IOTA.",
        route: "evm-tutorial/intro",
        tags: ["text"],
        source: "https://github.com/dr-electron/tutorial-template", // Optional
        preview: "evm-tutorial.png", // Optional
      },
    ],
    ...
  ...
```

## Test

Clone the repository, install dependencies and build the plugins:

```
git clone https://github.com/jlvandenhout/plugin-tutorial.git && cd plugin-tutorial && yarn && yarn build
```

Then start the Docusaurs project contained in the test directory:

```
yarn workspace test start
```
