# Tutorial plugin

This is a small plugin to register tutorials to be listed on the tutorial page plugin.

## Usage

```
yarn add @iota-wiki/plugin-tutorial
```

Then register any tutorials to list on the tutorial page by providing information like the titles, routes and metadata of the tutorials:

```js
  plugins: [
    [
      '@iota-wiki/plugin-tutorial',
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
