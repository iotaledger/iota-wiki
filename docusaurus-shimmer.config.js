// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const content = require('./shimmer/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Shimmer Wiki',
  tagline: 'The complete reference for Shimmer',
  url: 'https://wiki.iota-community.org',
  baseUrl: '/shimmer/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    announcementBar: {
      id: 'shimmer',
      content:
        'This are the docs for the Shimmer staging network',
      backgroundColor: '#00e0ca',
      textColor: '#000000',
      isCloseable: true,
    },
    image: 'img/iota-wiki.png',
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
    },
    matomo: {
      matomoUrl: 'https://matomo.iota-community.org/',
      siteId: '13',
    },
    hotjar: {
      applicationId: '2809821',
    },
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    imageSlider: {
      videoPlaceholder: '/img/infographics/video-placeholder.png',
    },
    prism: {
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Shimmer Wiki Logo',
        src: 'img/logo_shimmer.svg',
        srcDark: 'img/logo_shimmer.svg',
      },
      items: [
        {
          label: 'Use Shimmer',
          to: '/use/wallets/what-is-a-wallet',
          activeBaseRegex: '^/use/.*',
        },
        {
          label: 'Learn',
          to: '/learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: 
          '^/learn/.*|' +
          '^/IOTA-2.0-Research-Specifications/.*|' +
          '^/goshimmer/.*',
        },
        {
          label: 'Develop',
          to: '/develop/nodes/about-nodes',
          activeBaseRegex: 
          '^/develop.*|' + 
          '^/smart-contracts/.*|' +
          '^/iota.rs/.*|' +
          '^/iotajs/.*|' +
          '^/wallet.rs/.*|' +
          '^/stronghold.rs/.*|' +
          '^/hornet/.*|' +
          '^/bee/.*|' +
          '^/chronicle/.*|' +
          '^/introduction/.*|' +
          '^/tutorials*',
        },
        {
          label: 'Community',
          to: '/community/the-community/discord',
          activeBaseRegex: '^/community/.*'
        },
        {
          type: 'custom-network-dropdown',
          position: 'right',
          networks: [
            {
              label: 'IOTA',
            },
            {
              label: 'Shimmer',
              routeBasePath: 'shimmer',
            },
          ]
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
              to: '/use/wallets/what-is-a-wallet'
            },
            {
              label: 'Use Cases',
              to: '/use/use-cases/data-confidence',
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
              label: 'Future of IOTA',
              to: '/learn/future/future-of-iota',
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
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus.`,
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
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/shimmer/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-hotjar',
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'use',
        path: 'shimmer/use',
        routeBasePath: 'use',
        sidebarPath: require.resolve('./shimmer/use/sidebars.ts'),

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
        path: 'shimmer/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./shimmer/learn/sidebars.ts'),

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
        path: 'shimmer/develop',
        routeBasePath: 'develop',
        sidebarPath: require.resolve('./shimmer/develop/sidebars.ts'),

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
        id: 'community',
        path: 'shimmer/community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./shimmer/community/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    ...content.plugins,
  ],
  staticDirectories: ['./static', ...content.staticDirectories],
};
