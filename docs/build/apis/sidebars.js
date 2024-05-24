const fs = require('fs');
const path = require('path');

function resolveSidebarPaths(category) {
  if (typeof category.items === 'string') {
    return {
      ...category,
      items: require(category.items),
    }
  }

  return {
    ...category,
    items: category.items.map(resolveSidebarPaths),
  }
}

function generateDirectoryPath(basePath, label) {
  const directoryName = label.toLowerCase().replaceAll(/\s+/g, '-');
  const directoryPath = path.join(__dirname, basePath, directoryName);
  return directoryPath;
}

function directoryExists(directoryPath) {
  try {
    return fs.statSync(directoryPath).isDirectory();
  } catch (err) {
    return false;
  }
}

const categories = [
  {
    type: 'category',
    label: 'Core',
    link: {
      type: 'generated-index',
      title: 'Core API',
      description:
        'The core API is the main API for interacting with the Tangle. V2 is now used for both IOTA and the Shimmer staging network.',
      slug: '/api/core',
    },
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'V2',
        collapsed: true,
        items: './docs/core/v2/sidebar',
      },
      {
        type: 'category',
        label: 'V3',
        collapsed: true,
        items: './docs/core/v3/sidebar',
      },
    ],
  },
  {
    type: 'category',
    label: 'Wasp',
    collapsed: true,
    items: './docs/wasp/sidebar',
  },
  {
    type: 'category',
    label: 'Explorer',
    collapsed: true,
    items: './docs/explorer/sidebar',
  },
  {
    type: 'category',
    label: 'Indexer',
    collapsed: true,
    items: './docs/indexer/sidebar',
  },
  {
    type: 'category',
    label: 'IRC Metadata',
    collapsed: true,
    items: './docs/irc-metadata/sidebar',
  },
  {
    type: 'category',
    label: 'PoI',
    collapsed: true,
    items: './docs/poi/sidebar',
  },
];

module.exports = {
  apis: [
    'welcome',
    ...categories
      .filter(({ label }) => directoryExists(generateDirectoryPath('docs', label)))
      .map(resolveSidebarPaths),
    {
      type: 'link',
      label: 'ShimmerEVM Explorer API',
      href: 'https://explorer.evm.shimmer.network/api-docs',
    },
  ],
};
