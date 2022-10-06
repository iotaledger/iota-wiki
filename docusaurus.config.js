// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const content = require('./iota/docusaurus.config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tutorials = require('./tutorials/single-page-tutorials/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'iota-wiki', // Usually your GitHub org/user name.
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
      id: 'govern',
      content:
        'If you would like to get more involved in the future governance of Shimmer, IOTA, and the Assembly network, join the discussions with the community in our <a target="_blank" href="https://govern.iota.org">governance forum</a> 🏛️',
      backgroundColor: '#5991c7',
      textColor: '#ffffff',
      isCloseable: true,
    },
    image: 'img/iota-wiki.png',
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
      searchParameters: {
        facetFilters: ['environment:iota'],
      },
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
            '^(/[^/]+)?/bee/.*|' +
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
          customCss: require.resolve('./src/css/iota/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        pages: {
          path: 'src/pages/iota',
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
        path: 'iota/use',
        routeBasePath: 'use',
        sidebarPath: require.resolve('./iota/use/sidebars.ts'),

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
        path: 'iota/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./iota/learn/sidebars.ts'),

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
        path: 'iota/develop',
        routeBasePath: 'develop',
        sidebarPath: require.resolve('./iota/develop/sidebars.ts'),

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
        path: 'iota/community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./iota/community/sidebars.ts'),

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
      '@docusaurus/plugin-content-pages',
      {
        id: 'common',
        path: 'src/pages/common',
      },
    ],
    ...content.plugins,
    ...tutorials.plugins,
  ],
  staticDirectories: [
    './static',
    ...content.staticDirectories,
    ...tutorials.staticDirectories,
  ],
};
