const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Danger Zone',
  tagline: 'Unreleased documentation',
  baseUrl: '/next/',
  noIndex: true,
  themeConfig: {
    announcementBar: {
      id: 'next',
      content: '.',
      isCloseable: false,
    },
    image: 'img/next-wiki.png',
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Shimmer Wiki Logo',
        src: 'img/logo_next.svg',
        srcDark: 'img/logo_next_dark.svg',
      },
      items: [
        {
          label: 'Use Shimmer',
          to: '/use/wallets/what-is-a-wallet',
          activeBaseRegex: '^(/[^/]+)?/use/.*',
        },
        {
          label: 'Learn',
          to: '/learn/welcome',
          activeBaseRegex:
            '^(/[^/]+)?/learn/.*|' +
            '^(/[^/]+)?/IOTA-2.0-Research-Specifications/.*|' +
            '^(/[^/]+)?/goshimmer/.*',
        },
        {
          label: 'Develop',
          to: '/develop/explanations/what-is-shimmer/introduction',
          activeBaseRegex: '^(/[^/]+)?/develop.*|' + '^(/[^/]+)?/tutorials*',
        },
        {
          label: 'Documentation',
          to: '/develop/docs',
          activeBaseRegex:
            '^(/[^/]+)?/develop/docs|' +
            '^(/[^/]+)?/smart-contracts/.*|' +
            '^(/[^/]+)?/iota-sdk/.*|' +
            '^(/[^/]+)?/stronghold.rs/.*|' +
            '^(/[^/]+)?/hornet/.*|' +
            '^(/[^/]+)?/bee/.*|' +
            '^(/[^/]+)?/chronicle/.*|' +
            '^(/[^/]+)?/introduction/.*|' +
            '^(/[^/]+)?/identity.rs/.*|' +
            '^(/[^/]+)?/tips*',
        },
        {
          label: 'Community',
          to: '/community/the-community/discord',
          activeBaseRegex: '^(/[^/]+)?/community/.*',
        },
        {
          type: 'custom-network-dropdown',
          position: 'right',
          label: 'Next',
          items: [
            {
              label: 'IOTA',
              routeBasePath: '/',
            },
            {
              label: 'Shimmer',
              routeBasePath: '/shimmer/',
            },
          ],
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Use',
          items: [
            {
              label: 'Wallets',
              to: '/use/wallets/what-is-a-wallet',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'How It Works',
              to: '/learn/welcome',
            },
          ],
        },
        {
          title: 'Develop',
          items: [
            {
              label: 'Smart Contracts',
              href: '/smart-contracts/overview',
            },
            {
              label: 'Nodes',
              to: '/develop/nodes/about-nodes',
            },
            {
              label: 'Wasp',
              href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
              label: 'Tutorials',
              href: '/tutorials',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Funding',
              to: '/community/funding/edf-funding',
            },
            {
              label: 'The Community',
              to: '/community/the-community/how-to-support',
            },
            {
              label: 'Research',
              to: '/community/research/research-outline',
            },
            {
              label: 'Contribute To Wiki',
              to: '/community/contribute-to-wiki/welcome',
            },
          ],
        },
      ],
      logo: {
        alt: 'Shimmer Logo',
        src: 'img/footer_logo.svg',
        href: 'https://www.shimmer.network',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus. <a href="/cookie-policy"> Cookie Policy. </a>`,
    },
    socials: [
      {
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.shimmer.network/',
        backgroundColor: '#4B576F',
      },
      {
        url: 'https://www.twitter.com/shimmer/',
        backgroundColor: '#6A768E',
      },
      {
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      },
      {
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('../src/next/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        pages: {
          path: path.resolve(__dirname, '../src/next/pages'),
        },
      },
    ],
  ],
  plugins: [
    //docs
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'use',
        path: path.resolve(__dirname, 'use'),
        routeBasePath: 'use',
        sidebarPath: require.resolve('./use/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: path.resolve(__dirname, 'learn'),
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'develop',
        path: path.resolve(__dirname, 'develop'),
        routeBasePath: 'develop',
        sidebarPath: require.resolve('./develop/sidebars.ts'),
        docItemComponent: '@theme/ApiItem',

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-sdk',
        path: path.resolve(__dirname, 'docs/iota-sdk/docs'),
        routeBasePath: 'iota-sdk',
        sidebarPath: require.resolve('./docs/iota-sdk/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
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
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cli-wallet',
        path: path.resolve(__dirname, 'docs/cli-wallet/docs'),
        routeBasePath: 'cli-wallet',
        sidebarPath: require.resolve('./docs/cli-wallet/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hornet',
        path: path.resolve(__dirname, 'docs/hornet/docs'),
        routeBasePath: 'hornet',
        sidebarPath: path.resolve(__dirname, 'docs/hornet/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-goshimmer',
        path: path.resolve(__dirname, 'docs/goshimmer/docs'),
        routeBasePath: 'goshimmer',
        sidebarPath: path.resolve(__dirname, 'docs/goshimmer/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'introduction-docs',
        path: path.resolve(__dirname, 'docs/introduction-docs/docs'),
        routeBasePath: 'introduction',
        sidebarPath: path.resolve(
          __dirname,
          'docs/introduction-docs/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
          require('remark-remove-comments'),
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-IOTA-Research-Specifications',
        path: path.resolve(__dirname, 'docs/iota-2.0-research-specifications/'),
        routeBasePath: 'IOTA-2.0-Research-Specifications',
        sidebarPath: path.resolve(
          __dirname,
          'docs/iota-2.0-research-specifications/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        include: ['*.md'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wasp',
        path: path.resolve(__dirname, 'docs/wasp/docs'),
        routeBasePath: 'smart-contracts',
        sidebarPath: path.resolve(__dirname, 'docs/wasp/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
          require('remark-remove-comments'),
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-chronicle-rs',
        path: path.resolve(__dirname, 'docs/chronicle/docs'),
        routeBasePath: 'chronicle',
        sidebarPath: path.resolve(__dirname, 'docs/chronicle/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        versions: {
          current: {
            label: 'IOTA',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'identity-rs',
        path: path.resolve(__dirname, 'docs/identity.rs/0.7-alpha/docs'),
        routeBasePath: 'identity.rs',
        sidebarPath: path.resolve(
          __dirname,
          'docs/identity.rs/0.7-alpha/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
          require('remark-remove-comments'),
        ],
        versions: {
          current: {
            label: '0.7',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-api-core-v0',
        path: path.resolve(__dirname, 'docs/inx-api-core-v0/docs'),
        routeBasePath: 'inx-api-core-v0',
        sidebarPath: path.resolve(
          __dirname,
          'docs/inx-api-core-v0/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-api-core-v1',
        path: path.resolve(__dirname, 'docs/inx-api-core-v1/docs'),
        routeBasePath: 'inx-api-core-v1',
        sidebarPath: path.resolve(
          __dirname,
          'docs/inx-api-core-v1/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-coordinator',
        path: path.resolve(__dirname, 'docs/inx-coordinator/docs'),
        routeBasePath: 'inx-coordinator',
        sidebarPath: path.resolve(
          __dirname,
          'docs/inx-coordinator/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-dashboard',
        path: path.resolve(__dirname, 'docs/inx-dashboard/docs'),
        routeBasePath: 'inx-dashboard',
        sidebarPath: path.resolve(__dirname, 'docs/inx-dashboard/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-faucet',
        path: path.resolve(__dirname, 'docs/inx-faucet/docs'),
        routeBasePath: 'inx-faucet',
        sidebarPath: path.resolve(__dirname, 'docs/inx-faucet/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-indexer',
        path: path.resolve(__dirname, 'docs/inx-indexer/docs'),
        routeBasePath: 'inx-indexer',
        sidebarPath: path.resolve(__dirname, 'docs/inx-indexer/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-irc-metadata',
        path: path.resolve(__dirname, 'docs/inx-irc-metadata/docs'),
        routeBasePath: 'inx-irc-metadata',
        sidebarPath: path.resolve(
          __dirname,
          'docs/inx-irc-metadata/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-mqtt',
        path: path.resolve(__dirname, 'docs/inx-mqtt/docs'),
        routeBasePath: 'inx-mqtt',
        sidebarPath: path.resolve(__dirname, 'docs/inx-mqtt/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-participation',
        path: path.resolve(__dirname, 'docs/inx-participation/docs'),
        routeBasePath: 'inx-participation',
        sidebarPath: path.resolve(
          __dirname,
          'docs/inx-participation/sidebars.js',
        ),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-poi',
        path: path.resolve(__dirname, 'docs/inx-poi/docs'),
        routeBasePath: 'inx-poi',
        sidebarPath: path.resolve(__dirname, 'docs/inx-poi/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'inx-spammer',
        path: path.resolve(__dirname, 'docs/inx-spammer/docs'),
        routeBasePath: 'inx-spammer',
        sidebarPath: path.resolve(__dirname, 'docs/inx-spammer/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'stronghold-rs',
        path: path.resolve(__dirname, 'docs/stronghold.rs/docs'),
        routeBasePath: 'stronghold.rs',
        sidebarPath: path.resolve(__dirname, 'docs/stronghold.rs/sidebars.js'),
        editUrl:
          'https://github.com/iotaledger/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
          require('remark-remove-comments'),
          math,
        ],
        rehypePlugins: [katex],
      },
    ],
    //plugins
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'develop', // e.g. "classic" or the plugin-content-docs id
        config: {
          core_rest_api: {
            specPath:
              'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml',
            outputDir: path.resolve(__dirname, 'develop/nodes/core-rest-api'),
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],
  staticDirectories: [
    path.resolve(__dirname, 'docs/iota-sdk/static'),
    path.resolve(__dirname, 'docs/cli-wallet/static'),
    path.resolve(__dirname, 'docs/hornet/static'),
    path.resolve(__dirname, './docs/goshimmer/static'),
    path.resolve(__dirname, './docs/introduction-docs/static'),
    path.resolve(__dirname, './docs/iota-2.0-research-specifications/static'),
    path.resolve(__dirname, './docs/wasp/static'),
    path.resolve(__dirname, './docs/chronicle/static'),
    path.resolve(__dirname, './docs/identity.rs/0.7-alpha/static'),
    path.resolve(__dirname, './docs/stronghold.rs/static'),
  ],
};
