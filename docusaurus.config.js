/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'http://94.16.108.60',
  baseUrl: '/iota-wiki/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  noIndex: true,
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: "Learn",
          to: "docs/learn/about-iota/an-introduction-to-iota",
        },
        {
          label: "Use",
          to: "docs/use/use-cases/industry-applications",
        },
        {
          label: "Develop",
          to: "docs/develop/getting-started/architecture",
        },
        {
          label: "Participate",
          to: "docs/participate/support-the-network/run-a-node",
        },
        { 
          label: 'External Docs', 
          position: 'right',
          items: [
            {
              label: "Bee",
              to: "bee/getting_started/getting_started",
            },
            {
              label: "GoShimmer",
              to: "goshimmer/welcome",
            },
            {
              label: "Wasp",
              to: "wasp/welcome",
            },
            {
              label: "iota.rs",
              to: "iota.rs/welcome",
            },
            {
              label: "wallet.rs",
              to: "wallet.rs/welcome",
            },
            {
              label: "stronghold.rs",
              to: "stronghold.rs/welcome",
            },
            {
              label: "IOTA 2.0 Specs",
              to: "IOTA-2.0-Research-Specifications/Preface",
            },
            {
              label: "Chrysalis docs",
              to: "chrysalis-docs/welcome",
            },
          ]
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About IOTA',
              to: "docs/learn/about-iota/an-introduction-to-iota",
            },
            {
              label: 'IOTA Token',
              to: "docs/learn/iota-token/overview",
            },
            {
              label: 'Wallets',
              to: "docs/learn/wallets/what-is-a-wallet",
            },
            {
              label: 'Networks',
              to: "docs/learn/networks/iota-1.5-chrysalis",
            },
            {
              label: 'Resource Materials',
              to: "docs/learn/resource-materials/glossary",
            },
            {
              label: 'Research',
              to: "docs/learn/research/research-outline",
            },
          ],
        },
        {
          title: 'USE',
          items: [
            {
              label: 'Use Cases',
              to: "docs/use/use-cases/industry-applications",
            },
            {
              label: 'Streams',
              to: "docs/use/streams/encrypted-data-comms",
            },
            {
              label: 'Identity',
              to: "docs/use/identity/enabling-privacy-and-trust",
            },
            {
              label: 'Access',
              to: "docs/use/access/secure-access-control",
            },
            {
              label: 'Smart Contracts',
              to: "docs/use/smart-contracts/programmable-contracts",
            },
            {
              label: 'Stronghold',
              to: "docs/use/stronghold/protecting-your-secrets",
            },
            {
              label: 'Oracles',
              to: "docs/use/oracles/trust-in-real-world-data",
            },
            {
              label: 'Utilities',
              to: "docs/use/utilities/tangle-explorer",
            },
          ],
        },
        {
          title: 'DEVELOP',
          items: [
            {
              label: 'Getting Started',
              to: "docs/develop/getting-started/architecture",
            },
            {
              label: 'Fundamentals',
              to: "docs/develop/fundamentals/cryptography",
            },
            {
              label: 'Exchange Integration',
              to: "docs/develop/exchange-integration/guide",
            },
            {
              label: 'Tutorials',
              to: "docs/develop/tutorials/youtube",
            },
          ],
        },
        {
          title: 'PARTICIPATE',
          items: [
            {
              label: 'Support the network',
              to: "docs/participate/support-the-network/run-a-node",
            },
            {
              label: 'The Community',
              to: "docs/participate/the-community/discord",
            },
            {
              label: 'Partnerships',
              to: "docs/participate/partnerships/iota-partnerships",
            },
            {
              label: 'Funding',
              to: "docs/participate/funding/edf-funding",
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
        srcDark: 'img/iota_logo_dark.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki, Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: 'light_mode',

        // CSS to apply to dark icon
        darkIconStyle: {
          fontFamily: 'Material Icons',
        },

        lightIcon: 'dark_mode',

        lightIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
    searchMode: {
      switchConfig: {
        closeIcon: 'close',

        closeIconStyle: {
          fontFamily: 'Material Icons',
        },

        searchIcon: 'search',

        searchIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/iota-community/iota-wiki',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bee',
        path: 'external/bee/documentation/docs',
        routeBasePath: 'bee',
        sidebarPath: require.resolve('./external/bee/documentation/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'goshimmer',
        path: 'external/goshimmer/docOps/docs',
        routeBasePath: 'goshimmer',
        sidebarPath: require.resolve('./external/goshimmer/docOps/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wasp',
        path: 'external/wasp/documentation/docs',
        routeBasePath: 'wasp',
        sidebarPath: require.resolve('./external/wasp/documentation/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-rs',
        path: 'external/iota.rs/documentation/docs',
        routeBasePath: 'iota.rs',
        sidebarPath: require.resolve('./external/iota.rs/documentation/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wallet-rs',
        path: 'external/wallet.rs/documentation/docs',
        routeBasePath: 'wallet.rs',
        sidebarPath: require.resolve('./external/wallet.rs/documentation/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'stronghold-rs',
        path: 'external/stronghold.rs/documentation/docs',
        routeBasePath: 'stronghold.rs',
        sidebarPath: require.resolve('./external/stronghold.rs/documentation/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'IOTA-Research-Specifications',
        path: 'external/IOTA-2.0-Research-Specifications/docs',
        routeBasePath: 'IOTA-2.0-Research-Specifications',
        sidebarPath: require.resolve('./external/IOTA-2.0-Research-Specifications/sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chrysalis-docs',
        path: 'external/chrysalis-docs/docs',
        routeBasePath: 'chrysalis-docs',
        sidebarPath: require.resolve('./external/chrysalis-docs/sidebars.js'),
      }
    ]
  ]
};
