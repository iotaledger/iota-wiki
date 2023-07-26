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
    id: 'iota-rs',
    path: path.resolve(__dirname, 'docs/iota.rs/docs'),
    routeBasePath: 'iota.rs',
    sidebarPath: path.resolve(__dirname, 'docs/iota.rs/sidebars.js'),
  },
  {
    id: 'wallet-rs',
    path: path.resolve(__dirname, 'docs/wallet.rs/docs'),
    routeBasePath: 'wallet.rs',
    sidebarPath: path.resolve(__dirname, 'docs/wallet.rs/sidebars.js'),
  },
  {
    id: 'iota-sdk',
    path: path.resolve(__dirname, 'docs/iota-sdk/docs'),
    routeBasePath: 'iota-sdk',
    sidebarPath: require.resolve('./docs/iota-sdk/sidebars.js'),
    remarkPlugins: [
      [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
    ],
    //overriding default exclude array to include the python api's classes with _ at the beginning
    //but still exclude any _admonitions
    exclude: [
      // '**/_*.{js,jsx,ts,tsx,md}',
      // '**/_*/**',
      '**/*.test.{js,jsx,ts,tsx}',
      '**/__tests__/**',
      '**/_admonitions/_**',
    ],
  },
  {
    id: 'cli-wallet',
    path: path.resolve(__dirname, 'docs/cli-wallet/docs'),
    routeBasePath: 'cli-wallet',
    sidebarPath: require.resolve('./docs/cli-wallet/sidebars.js'),
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
    id: 'wasp',
    path: path.resolve(__dirname, 'docs/wasp/docs'),
    routeBasePath: 'smart-contracts',
    sidebarPath: path.resolve(__dirname, 'docs/wasp/sidebars.js'),
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
    id: 'identity-rs',
    path: path.resolve(__dirname, 'docs/identity.rs/0.7-alpha/docs'),
    routeBasePath: 'identity.rs',
    sidebarPath: path.resolve(
      __dirname,
      'docs/identity.rs/0.7-alpha/sidebars.js',
    ),
    versions: {
      current: {
        label: '0.7',
        badge: true,
      },
    },
  },
  {
    id: 'iotajs',
    path: path.resolve(__dirname, 'docs/iota.js/docs'),
    routeBasePath: 'iota.js',
    sidebarPath: path.resolve(__dirname, 'docs/iota.js/sidebars.js'),
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
    id: 'stronghold-rs',
    path: path.resolve(__dirname, 'docs/stronghold.rs/docs'),
    routeBasePath: 'stronghold.rs',
    sidebarPath: path.resolve(__dirname, 'docs/stronghold.rs/sidebars.js'),
  },
];
