// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const content = require('./content/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA and Shimmer',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
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
          activeBaseRegex: '^/use/.*',
        },
        {
          label: 'About',
          to: '/about/about-iota/an-introduction-to-iota',
          activeBaseRegex: '^/about/.*',
        },
        {
          label: 'Develop',
          to: '/develop/nodes/about-nodes',
          activeBaseRegex: 
          '^/develop.*|' + 
          '^/smart-contracts/.*|' +
          '^/identity.rs/.*|' +
          '^/iota.rs/.*|' +
          '^/iotajs/.*|' +
          '^/wallet.rs/.*|' +
          '^/streams/.*|' +
          '^/stronghold.rs/.*|' +
          '^/hornet/.*|' +
          '^/bee/.*|' +
          '^/chronicle.rs/.*|' +
          '^/introduction/.*|' +
          '^/inx-*|' +
          '^/tutorials*',
        },
        {
          label: 'Community',
          to: '/community/the-community/discord',
          activeBaseRegex: 
          '^/community/.*|' +
          '^/IOTA-2.0-Research-Specifications/.*|' +
          '^/goshimmer/.*',
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
              to: 'wallets/what-is-a-wallet'
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'How It Works',
              to: 'about-iota/an-introduction-to-iota',
            },
            {
              label: 'IOTA Token',
              to: 'iota-token/buying-iota',
            },
            {
              label: 'Media Library',
              to: 'media-library/infographics',
            },
            {
              label: 'Future of IOTA',
              to: 'future/future-of-iota',
            },
            {
              label: 'Use Cases',
              to: 'use-cases/data-confidence',
            },
            {
              label: 'Glossary',
              to: 'glossary',
            },
            {
              label: 'FAQs',
              to: 'faqs',
            },
            {
              label: 'Partnerships',
              href: 'https://www.iota.org/solutions/partnerships',
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
              to: 'nodes/about-nodes',
            },
            {
              label: 'Wasp',
              href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
              label: 'Chronicle',
              href: '/chronicle.rs/welcome',   
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
              to: 'funding/edf-funding',
            },
            {
              label: 'The Community',
              to: 'the-community/how-to-support',
            },
            {
              label: 'Research',
              to: 'research/research-outline',
            },
            {
              label: 'Contribute To Wiki',
              to: 'contribute-to-wiki/welcome',
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
          customCss: require.resolve('./src/css/custom.css'),
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
        path: 'content/use',
        routeBasePath: 'use',
        sidebarPath: require.resolve('./content/use/sidebars.ts'),

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
        id: 'about',
        path: 'content/about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./content/about/sidebars.ts'),

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
        path: 'content/develop',
        routeBasePath: 'develop',
        sidebarPath: require.resolve('./content/develop/sidebars.ts'),

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
        path: 'content/community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./content/community/sidebars.ts'),

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
