const path = require('path');

module.exports = async () => {
  const rehype_lodash_template = (await import('rehype-lodash-template'))
    .default;

  return [
    {
      id: 'use',
      path: path.resolve(__dirname, 'use'),
      routeBasePath: 'use',
      sidebarPath: require.resolve('./use/sidebars.ts'),
      rehypePlugins: [
        [
          rehype_lodash_template,
          {
            values: {
              network: 'IOTA',
            },
          },
        ],
      ],
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
      id: 'iota-goshimmer',
      path: path.resolve(__dirname, 'docs/goshimmer/docs'),
      routeBasePath: 'goshimmer',
      sidebarPath: path.resolve(__dirname, 'docs/goshimmer/sidebars.js'),
      editUrl: 'https://github.com/iotaledger/iota-wiki/edit/main/',
      showLastUpdateTime: true,
    },
    {
      id: 'iota-hornet',
      path: path.resolve(__dirname, 'docs/hornet/docs'),
      routeBasePath: 'hornet',
      sidebarPath: path.resolve(__dirname, 'docs/hornet/sidebars.js'),
      versions: {
        current: {
          label: 'IOTA',
          badge: true,
        },
      },
    },
    {
      id: 'iota-integration-services',
      path: path.resolve(__dirname, 'docs/integration-services/docs'),
      routeBasePath: 'integration-services',
      sidebarPath: path.resolve(
        __dirname,
        'docs/integration-services/sidebars.js',
      ),
    },

    {
      id: 'iota-introduction-docs',
      path: path.resolve(__dirname, 'docs/introduction-docs/docs'),
      routeBasePath: 'introduction',
      sidebarPath: path.resolve(
        __dirname,
        'docs/introduction-docs/sidebars.js',
      ),
      versions: {
        current: {
          label: 'IOTA',
          badge: true,
        },
      },
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
      id: 'iota-streams',
      path: path.resolve(__dirname, 'docs/streams/docs'),
      routeBasePath: 'streams',
      sidebarPath: path.resolve(__dirname, 'docs/streams/sidebars.js'),
    },
    {
      id: 'iota-zebra-tutorials',
      path: path.resolve(__dirname, 'docs/zebra-iota-edge-sdk/tutorials'),
      routeBasePath: 'zebra-tutorials',
      sidebarPath: path.resolve(
        __dirname,
        'docs/zebra-iota-edge-sdk/sidebars.js',
      ),
    },

    {
      id: 'stronghold-rs',
      path: path.resolve(__dirname, 'docs/stronghold.rs/docs'),
      routeBasePath: 'stronghold.rs',
      sidebarPath: path.resolve(__dirname, 'docs/stronghold.rs/sidebars.js'),
    },

    {
      id: 'wallet-rs',
      path: path.resolve(__dirname, 'docs/wallet.rs/docs'),
      routeBasePath: 'wallet.rs',
      sidebarPath: path.resolve(__dirname, 'docs/wallet.rs/sidebars.js'),
      versions: {
        current: {
          label: 'IOTA',
          badge: true,
        },
      },
    },
    {
      id: 'iota-rs',
      path: path.resolve(__dirname, 'docs/iota.rs/docs'),
      routeBasePath: 'iota.rs',
      sidebarPath: path.resolve(__dirname, 'docs/iota.rs/sidebars.js'),
      versions: {
        current: {
          label: 'IOTA',
          badge: true,
        },
      },
    },

    {
      id: 'identity-rs-0-5',
      path: path.resolve(__dirname, 'docs/identity.rs/v0.5.0/docs'),
      routeBasePath: 'identity.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/identity.rs/v0.5.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.5',
          path: '0.5',
          badge: true,
        },
      },
    },
    {
      id: 'identity-rs-0-6',
      path: path.resolve(__dirname, 'docs/identity.rs/v0.6.0/docs'),
      routeBasePath: 'identity.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/identity.rs/v0.6.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.6',
          badge: true,
        },
      },
    },
  ];
};
