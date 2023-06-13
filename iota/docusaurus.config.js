const math = require('remark-math');
const katex = require('rehype-katex');

const path = require('path');

module.exports = async () => {
  const rehype_lodash_template = (await import('rehype-lodash-template'))
    .default;

  return {
    title: 'IOTA Wiki',
    tagline: 'The complete reference for IOTA',
    baseUrl: '/',
    themeConfig: {
      announcementBar: {
        id: 'govern',
        content:
          'If you would like to get more involved in the future governance of Shimmer, IOTA, and the Assembly network, join the discussions with the community in our <a target="_blank" href="https://govern.iota.org">governance forum</a> 🏛️',
        backgroundColor: '#5991c7',
        textColor: '#ffffff',
        isCloseable: true,
      },
      image: 'img/iota-wiki.png',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'IOTA Wiki Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            label: 'Use IOTA',
            to: '/use/wallets/what-is-a-wallet',
            activeBaseRegex: '^(/[^/]+)?/use/.*',
          },
          {
            label: 'Learn',
            to: '/learn/about-iota/an-introduction-to-iota',
            activeBaseRegex:
              '^(/[^/]+)?/learn/.*|' +
              '^(/[^/]+)?/IOTA-2.0-Research-Specifications/.*|' +
              '^(/[^/]+)?/goshimmer/.*',
          },
          {
            label: 'Develop',
            to: '/develop/welcome',
            activeBaseRegex:
              '^(/[^/]+)?/develop.*|' +
              '^(/[^/]+)?/identity.rs/.*|' +
              '^(/[^/]+)?/iota.rs/.*|' +
              '^(/[^/]+)?/wallet.rs/.*|' +
              '^(/[^/]+)?/streams/.*|' +
              '^(/[^/]+)?/stronghold.rs/.*|' +
              '^(/[^/]+)?/hornet/.*|' +
              '^(/[^/]+)?/chronicle/.*|' +
              '^(/[^/]+)?/introduction/.*|' +
              '^(/[^/]+)?/integration-services/.*|' +
              '^(/[^/]+)?/tutorials*',
          },
          {
            label: 'Community',
            to: '/community/the-community/discord',
            activeBaseRegex: '^(/[^/]+)?/community/.*',
          },
          {
            type: 'custom-network-dropdown',
            position: 'right',
            label: 'IOTA',
            items: [
              {
                label: 'Shimmer',
                routeBasePath: '/shimmer/',
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
                to: '/learn/about-iota/an-introduction-to-iota',
              },
              {
                label: 'IOTA Token',
                to: '/learn/iota-token/buying-iota',
              },
              {
                label: 'Research',
                to: '/learn/research/research-outline',
              },
              {
                label: 'Glossary',
                to: '/learn/glossary',
              },
              {
                label: 'FAQs',
                to: '/learn/faqs',
              },
            ],
          },
          {
            title: 'Develop',
            items: [
              {
                label: 'Nodes',
                to: '/develop/nodes/about-nodes',
              },
              {
                label: 'Chronicle',
                href: '/chronicle/welcome',
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
          alt: 'IOTA Logo',
          src: 'img/footer_logo.svg',
          href: 'https://www.iota.org',
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
          url: 'https://discord.iota.org/',
          backgroundColor: '#4B576F',
        },
        {
          url: 'https://www.twitter.com/iota/',
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
            customCss: require.resolve('../src/iota/css/custom.css'),
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          pages: {
            path: path.resolve(__dirname, '../src/iota/pages'),
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
            [
              rehype_lodash_template,
              {
                values: {
                  network: 'IOTA',
                },
              },
            ],
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
            rest_api: {
              specPath:
                'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0013/rest-api.yaml',
              outputDir: path.resolve(__dirname, 'develop/nodes/rest-api'),
              sidebarOptions: {
                groupPathsBy: 'tag',
              },
            },
          },
        },
      ],


      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'chronicle-rs',
          path: path.resolve(__dirname, 'external/chronicle/docs'),
          routeBasePath: 'chronicle',
          sidebarPath: path.resolve(
            __dirname,
            'external/chronicle/sidebars.js',
          ),
          editUrl:
            'https://github.com/iotaledger/chronicle.rs/edit/main/documentation',
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
          id: 'goshimmer',
          path: path.resolve(__dirname, 'external/goshimmer/docs'),
          routeBasePath: 'goshimmer',
          sidebarPath: path.resolve(
            __dirname,
            'external/goshimmer/sidebars.js',
          ),
          editUrl:
            'https://github.com/iotaledger/goshimmer/edit/develop/documentation',
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'hornet',
          path: path.resolve(__dirname, 'external/hornet/docs'),
          routeBasePath: 'hornet',
          sidebarPath: path.resolve(__dirname, 'external/hornet/sidebars.js'),
          editUrl:
            'https://github.com/iotaledger/hornet/edit/production/documentation',
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
          id: 'integration-services',
          path: path.resolve(__dirname, 'external/integration-services/docs'),
          routeBasePath: 'integration-services',
          sidebarPath: path.resolve(
            __dirname,
            'external/integration-services/sidebars.js',
          ),
          editUrl:
            'https://github.com/iotaledger/integration-services/edit/develop/documentation',
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'introduction-docs',
          path: path.resolve(__dirname, 'external/introduction-docs/docs'),
          routeBasePath: 'introduction',
          sidebarPath: path.resolve(
            __dirname,
            'external/introduction-docs/sidebars.js',
          ),
          editUrl:
            'https://github.com/iotaledger/introduction-docs/edit/main/docs',
          remarkPlugins: [
            require('remark-code-import'),
            require('remark-import-partial'),
            require('remark-remove-comments'),
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
          id: 'IOTA-Research-Specifications',
          path: path.resolve(
            __dirname,
            'external/iota-2.0-research-specifications/',
          ),
          routeBasePath: 'IOTA-2.0-Research-Specifications',
          sidebarPath: path.resolve(
            __dirname,
            'external/iota-2.0-research-specifications/sidebars.js',
          ),
          editUrl:
            'https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          include: ['*.md'],
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'streams',
          path: path.resolve(__dirname, 'external/streams/docs'),
          routeBasePath: 'streams',
          sidebarPath: path.resolve(__dirname, 'external/streams/sidebars.js'),
          editUrl:
            'https://github.com/iotaledger/streams/edit/main/documentation',
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'iota-tips-iota',
          path: path.resolve(__dirname, 'external/tips'),
          routeBasePath: 'tips',
          editUrl: 'https://github.com/iotaledger/tips/edit/main/',
          remarkPlugins: [require('remark-import-partial')],
          include: ['tips/**/*.md', 'README.md'],
          sidebarPath: path.resolve(__dirname, 'external/tips/sidebars.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'zebra-tutorials',
          path: path.resolve(
            __dirname,
            'external/zebra-iota-edge-sdk/tutorials',
          ),
          routeBasePath: 'zebra-tutorials',
          sidebarPath: path.resolve(
            __dirname,
            'external/zebra-iota-edge-sdk/sidebars.js',
          ),
          editUrl:
            'https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation',
        },
      ],
    ],

    staticDirectories: [
      path.resolve(__dirname, './external/blueprints/static'),
      path.resolve(__dirname, './external/chronicle/static'),
      path.resolve(__dirname, './external/goshimmer/static'),
      path.resolve(__dirname, './external/hornet/static'),
      path.resolve(__dirname, './external/identity.rs/static'),
      path.resolve(__dirname, './external/integration-services/static'),
      path.resolve(__dirname, './external/introduction-docs/static'),
      path.resolve(
        __dirname,
        './external/iota-2.0-research-specifications/static',
      ),
      path.resolve(__dirname, './external/iota.rs/static'),
      path.resolve(__dirname, './external/streams/static'),
      path.resolve(__dirname, './external/stronghold.rs/static'),
      path.resolve(__dirname, './external/tips/static'),
      path.resolve(__dirname, './external/wallet.rs/static'),
      path.resolve(__dirname, './external/zebra-iota-edge-sdk/static'),
      path.resolve(__dirname, '/static'),
    ],
  };
};
