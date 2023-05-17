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
          label: 'Get Started',
          to: '/get-started/welcome',
          activeBaseRegex: '^(/[^/]+)?/get-started/.*|',
        },
        {
          label: 'Learn',
          to: '/learn/introduction',
          activeBaseRegex: '^(/[^/]+)?/learn/.*',
        },
        {
          label: 'Build',
          to: '/build/introduction',
          activeBaseRegex: '^(/[^/]+)?/build.*|' + '^(/[^/]+)?/tutorials*',
        },

        {
          label: 'Maintain',
          to: '/maintain/introduction',
          activeBaseRegex: '^(/[^/]+)?/maintain/.*',
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
          title: 'Get Started',
          items: [
            {
              label: 'How It Works',
              to: '/get-started/welcome',
            },
          ],
        },
        {
          title: 'Build',
          items: [
            {
              label: 'Smart Contracts',
              href: '/smart-contracts/overview',
            },
            {
              label: 'Nodes',
              to: '/build/nodes/about-nodes',
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
        id: 'get-started',
        path: path.resolve(__dirname, 'get-started'),
        routeBasePath: 'get-started',
        sidebarPath: require.resolve('./get-started/sidebars.ts'),

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
        id: 'build',
        path: path.resolve(__dirname, 'build'),
        routeBasePath: 'build',
        sidebarPath: require.resolve('./build/sidebars.ts'),

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
        id: 'maintain',
        path: path.resolve(__dirname, 'maintain'),
        routeBasePath: 'maintain',
        sidebarPath: require.resolve('./maintain/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
  ],
};
