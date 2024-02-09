---
tags:
  - how to
description: How to create and maintain your versioned docs.
---

# Versioning

The Wiki allows you to create your docs. This How-To will explain how it works, how to add a new version, and how to maintain versions.

## Add Version

To add a new version, create a new folder inside `docs` in your project folder with the version as its name. For Example, `docs/build/identity.rs/2.0`. This folder should contain a new `docs` folder and a new `sidebars.js` file. 

:::tip

You can copy an old version or copy from another project and edit everything to your needs.

:::

After that, open the `versionedConfig.js` file, look for your project config, and add a new version in the following format:
```js
{
  label: '2.0',
  badges: ['IOTA', 'Shimmer'],
  // Here, you can add any custom Docusaurus plugin-content-docs option like excludes, includes, etc. For a full list of options, visit: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
  // You can also add a banner that will show up on all pages above the title.
  //Example:
  //bannerPath: path.resolve(
  //  __dirname,
  //  'banners/some_nice_markdown.mdx',
  //),
},
```

## Tag Version

The wiki versioning uses the order of versions and their tags to show which network is compatible and which version is the main version of the corresponding network. So always sort your plugins from new to old and properly tag them.
The main `IOTA` version is the first one, including the `IOTA` tag.
The main `Shimmer` version is the first one, including the `Shimmer` tag.

## Version URL Paths

By default, the main `IOTA` version is accessible at `https://wiki.iota.org/<your-project>/` as this is the stable release, but as with all other versions, it is also reachable over its version: `https://wiki.iota.org/<your-project>/<main-iota-version>`
For convenience, the main version of each version is also always reachable through `https://wiki.iota.org/<your-project>/iota` or `https://wiki.iota.org/<your-project>/shimmer` in case you want to link to the newest version of a corresponding network.

