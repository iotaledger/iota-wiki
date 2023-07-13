const path = require('path');

module.exports = [
  {
    id: 'use',
    path: path.resolve(__dirname, 'use'),
    routeBasePath: 'use',
    sidebarPath: require.resolve('./use/sidebars.ts'),
  },
  {
    id: 'learn',
    path: path.resolve(__dirname, 'learn'),
    routeBasePath: 'learn',
    sidebarPath: require.resolve('./learn/sidebars.ts'),
  },
  {
    id: 'develop',
    path: path.resolve(__dirname, 'develop'),
    routeBasePath: 'develop',
    sidebarPath: require.resolve('./develop/sidebars.ts'),
    docItemComponent: '@theme/ApiItem',
  },
  {
    id: 'hornet',
    path: path.resolve(__dirname, 'docs/hornet/docs'),
    routeBasePath: 'hornet',
    sidebarPath: path.resolve(__dirname, 'docs/hornet/sidebars.js'),
  },
  {
    id: 'iota-goshimmer',
    path: path.resolve(__dirname, 'docs/goshimmer/docs'),
    routeBasePath: 'goshimmer',
    sidebarPath: path.resolve(__dirname, 'docs/goshimmer/sidebars.js'),
  },
  {
    id: 'introduction-docs',
    path: path.resolve(__dirname, 'docs/introduction-docs/docs'),
    routeBasePath: 'introduction',
    sidebarPath: path.resolve(__dirname, 'docs/introduction-docs/sidebars.js'),
  },
  {
    id: 'iota-IOTA-Research-Specifications',
    path: path.resolve(__dirname, 'docs/iota-2.0-research-specifications/'),
    routeBasePath: 'IOTA-2.0-Research-Specifications',
    sidebarPath: path.resolve(
      __dirname,
      'docs/iota-2.0-research-specifications/sidebars.js',
    ),
    include: ['*.md'],
  },
  {
    id: 'iota-chronicle-rs',
    path: path.resolve(__dirname, 'docs/chronicle/docs'),
    routeBasePath: 'chronicle',
    sidebarPath: path.resolve(__dirname, 'docs/chronicle/sidebars.js'),
    versions: {
      current: {
        label: 'IOTA',
        badge: true,
      },
    },
  },
  {
    id: 'inx-api-core-v0',
    path: path.resolve(__dirname, 'docs/inx-api-core-v0/docs'),
    routeBasePath: 'inx-api-core-v0',
    sidebarPath: path.resolve(__dirname, 'docs/inx-api-core-v0/sidebars.js'),
  },
  {
    id: 'inx-api-core-v1',
    path: path.resolve(__dirname, 'docs/inx-api-core-v1/docs'),
    routeBasePath: 'inx-api-core-v1',
    sidebarPath: path.resolve(__dirname, 'docs/inx-api-core-v1/sidebars.js'),
  },
  {
    id: 'inx-coordinator',
    path: path.resolve(__dirname, 'docs/inx-coordinator/docs'),
    routeBasePath: 'inx-coordinator',
    sidebarPath: path.resolve(__dirname, 'docs/inx-coordinator/sidebars.js'),
  },
  {
    id: 'inx-dashboard',
    path: path.resolve(__dirname, 'docs/inx-dashboard/docs'),
    routeBasePath: 'inx-dashboard',
    sidebarPath: path.resolve(__dirname, 'docs/inx-dashboard/sidebars.js'),
  },
  {
    id: 'inx-faucet',
    path: path.resolve(__dirname, 'docs/inx-faucet/docs'),
    routeBasePath: 'inx-faucet',
    sidebarPath: path.resolve(__dirname, 'docs/inx-faucet/sidebars.js'),
  },
  {
    id: 'inx-indexer',
    path: path.resolve(__dirname, 'docs/inx-indexer/docs'),
    routeBasePath: 'inx-indexer',
    sidebarPath: path.resolve(__dirname, 'docs/inx-indexer/sidebars.js'),
  },
  {
    id: 'inx-irc-metadata',
    path: path.resolve(__dirname, 'docs/inx-irc-metadata/docs'),
    routeBasePath: 'inx-irc-metadata',
    sidebarPath: path.resolve(__dirname, 'docs/inx-irc-metadata/sidebars.js'),
  },
  {
    id: 'inx-mqtt',
    path: path.resolve(__dirname, 'docs/inx-mqtt/docs'),
    routeBasePath: 'inx-mqtt',
    sidebarPath: path.resolve(__dirname, 'docs/inx-mqtt/sidebars.js'),
  },
  {
    id: 'inx-participation',
    path: path.resolve(__dirname, 'docs/inx-participation/docs'),
    routeBasePath: 'inx-participation',
    sidebarPath: path.resolve(__dirname, 'docs/inx-participation/sidebars.js'),
  },
  {
    id: 'inx-poi',
    path: path.resolve(__dirname, 'docs/inx-poi/docs'),
    routeBasePath: 'inx-poi',
    sidebarPath: path.resolve(__dirname, 'docs/inx-poi/sidebars.js'),
  },
  {
    id: 'inx-spammer',
    path: path.resolve(__dirname, 'docs/inx-spammer/docs'),
    routeBasePath: 'inx-spammer',
    sidebarPath: path.resolve(__dirname, 'docs/inx-spammer/sidebars.js'),
  },
  {
    id: 'cli-wallet',
    path: path.resolve(__dirname, 'docs/cli-wallet/docs'),
    routeBasePath: 'cli-wallet',
    sidebarPath: require.resolve('./docs/cli-wallet/sidebars.js'),
  },
];
