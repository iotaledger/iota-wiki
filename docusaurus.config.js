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
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
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
          label: 'About IOTA',
          to: 'learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Wallets',
          to: 'wallets/what-is-a-wallet',
          activeBaseRegex: '^/wallets/.*',
        },
        {
          label: 'Smart Contracts',
          to: 'smart-contracts/overview',
          activeBaseRegex: '^/smart-contracts/.*',
        },
        {
          label: 'Networks',
          to: 'networks/iota-1.5-chrysalis',
          activeBaseRegex: '^/networks/.*',
        },
        {
          label: 'Libraries',
          to: 'libraries',
          activeBaseRegex: '^/libraries.*',
        },
        {
          label: 'Nodes',
          to: 'nodes/about-nodes',
          activeBaseRegex: '^/nodes/.*',
        },
        {
          label: 'Research',
          to: 'research/research-outline',
          activeBaseRegex: '^/research/.*',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'About IOTA',
          items: [
            {
              label: 'Introduction',
              to: 'learn/about-iota/an-introduction-to-iota',
            },
            {
              label: 'IOTA token',
              to: 'learn/iota-token/buying-iota',
            },
            {
              label: 'Glossary',
              to: 'learn/glossary',
            },
            {
              label: "FAQ's",
              to: 'learn/faqs',
            },
            {
              label: 'Use cases',
              to: 'learn/use-cases/data-confidence',
            },
            {
              label: 'Funding',
              to: 'learn/funding/edf-funding',
            },
            {
              label: 'Partnerships',
              href: 'https://www.iota.org/solutions/partnerships',
            },
            {
              label: 'The community',
              to: 'learn/the-community/discord',
            },
          ],
        },
        {
          title: 'Networks',
          items: [
            {
              label: 'IOTA 1.5 Chrysalis',
              to: 'networks/iota-1.5-chrysalis',
            },
            {
              label: 'IOTA 2.0 Coordicide',
              to: 'networks/iota-2.0-coordicide',
            },
            {
              label: 'Testnets',
              to: 'networks/testnets',
            },
            {
              label: 'Token migration',
              to: 'networks/network-token-migration',
            },
          ],
        },
        {
          title: 'Libraries',
          items: [
            {
              label: 'Introduction',
              to: 'libraries/introduction',
            },
            {
              label: 'Client',
              to: 'iota.rs/welcome',
            },
            {
              label: 'JS Client',
              to: 'iotajs/welcome',
            },
            {
              label: 'Wallet',
              to: 'wallet.rs/welcome',
            },
            {
              label: 'Streams',
              to: 'libraries/streams',
            },
            {
              label: 'Identity',
              to: 'libraries/identity',
            },
            {
              label: 'Stronghold',
              to: 'libraries/stronghold',
            },
          ],
        },
        {
          title: 'Smart contracts',
          items: [
            {
              label: 'Overview',
              to: 'smart-contracts/overview',
            },
            {
              label: 'Core concepts',
              to: 'smart-contracts/guide/core_concepts/smart-contracts',
            },
            {
              label: 'Chains and nodes',
              to: 'smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
              label: 'Wasm VM',
              to: 'smart-contracts/guide/wasm_vm/intro',
            },
            {
              label: 'Ethereum VM',
              to: 'smart-contracts/guide/evm/introduction',
            },
            {
              label: 'Example projects',
              to: 'smart-contracts/guide/example_projects/fair_roulette',
            },
            {
              label: 'Tools',
              to: 'smart-contracts/guide/development_tools/docker_preconfigured',
            },
            {
              label: 'Metrics',
              to: 'smart-contracts/metrics',
            },
          ],
        },
        {
          title: 'Wiki',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Github',
              href: 'https://github.com/iota-community/iota-wiki',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'Community blog',
              to: 'blog',
            },
            {
              label: 'Contribute',
              to: 'learn/contribute-to-wiki/welcome',
            },
            {
              label: 'Imprint',
              to: 'https://www.iota.org/impressum',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.iota.org/privacy-policy',
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
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
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
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
        id: 'wallets',
        path: 'content/wallets',
        routeBasePath: 'wallets',
        sidebarPath: require.resolve('./content/wallets/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
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
        id: 'networks',
        path: 'content/networks',
        routeBasePath: 'networks',
        sidebarPath: require.resolve('./content/networks/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
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
        id: 'nodes',
        //docItemComponent: "@theme/ApiItem",
        path: 'content/nodes',
        routeBasePath: 'nodes',
        sidebarPath: require.resolve('./content/nodes/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
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
        id: 'research',
        path: 'content/research',
        routeBasePath: 'research',
        sidebarPath: require.resolve('./content/research/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
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
