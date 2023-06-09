const path = require('path');

module.exports = {
  title: 'Shimmer Wiki',
  tagline: 'The complete reference for Shimmer',
  baseUrl: '/shimmer/',
  themeConfig: {
    image: 'img/shimmer-wiki.png',
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Shimmer Wiki Logo',
        src: 'img/logo_shimmer.svg',
        srcDark: 'img/logo_shimmer_dark.svg',
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
            '^(/[^/]+)?/iota.rs/.*|' +
            '^(/[^/]+)?/iotajs/.*|' +
            '^(/[^/]+)?/wallet.rs/.*|' +
            '^(/[^/]+)?/stronghold.rs/.*|' +
            '^(/[^/]+)?/hornet/.*|' +
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
          label: 'Shimmer',
          items: [
            {
              label: 'IOTA',
              routeBasePath: '/',
            },
            {
              label: 'Next',
              routeBasePath: '/next/',
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
              to: '/develop/explanations/what-is-shimmer/nodes/about-nodes/',
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
          customCss: require.resolve('../src/shimmer/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        pages: {
          path: path.resolve(__dirname, '../src/shimmer/pages'),
        },
      },
    ],
  ],
  plugins: [
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
};
