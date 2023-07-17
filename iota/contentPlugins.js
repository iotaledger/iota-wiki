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
      id: 'iota-zebra-tutorials',
      path: path.resolve(__dirname, 'docs/zebra-iota-edge-sdk/tutorials'),
      routeBasePath: 'zebra-tutorials',
      sidebarPath: path.resolve(
        __dirname,
        'docs/zebra-iota-edge-sdk/sidebars.js',
      ),
    },
  ];
};
