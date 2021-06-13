/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'http://94.16.108.60',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  onBrokenLinks: 'log',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: "Learn",
          to: "docs/learn/about-iota/not-a-blockchain",
        },
        {
          label: "Build",
          to: "docs/build/getting-started/architecture",
        },
        {
          label: "Participate",
          to: "docs/participate/support-the-network/run-a-node",
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
              to: "docs/learn/about-iota/not-a-blockchain",
            },
            {
              label: 'Use cases',
              to: "docs/learn/use-cases/industry-applications",
            },
            {
              label: 'IOTA Token',
              to: "docs/learn/iota-token/overview",
            },
            {
              label: 'Networks',
              to: "docs/learn/networks/chrysalis",
            },
            {
              label: 'Resource materials',
              to: "docs/learn/resource-materials/glossary",
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting started',
              to: "docs/build/getting-started/",
            },
            {
              label: 'Client Libraries',
              to: "docs/build/client-libraries/",
            },
            {
              label: 'Wallet Libraries',
              to: "docs/build/wallet-libraries/",
            },
            {
              label: 'Private Tangle',
              to: "docs/build/private-tangle",
            },
            {
              label: 'Exchange Integration',
              to: "docs/build/exchange-integration",
            },
            {
              label: 'Tutorials',
              to: "docs/build/tutorials",
            },
            {
              label: 'Utilities',
              to: "docs/build/utilities",
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
              label: 'Node software',
              to: "docs/participate/node-software/hornet",
            },
            {
              label: 'Join the community',
              to: "docs/participate/join-the-community/github",
            },
          ],
        },
        {
          title: 'SOLUTIONS',
          items: [
            {
              label: 'Wallets',
              to: "docs/solutions/wallets/wallets",
            },
            {
              label: 'Streams',
              to: "docs/solutions/streams/streams",
            },
            {
              label: 'Identity',
              to: "docs/solutions/identity/identity",
            },
            {
              label: 'Access',
              to: "docs/solutions/access/access",
            },
            {
              label: 'Smart Contracts',
              to: "docs/solutions/smart-contracts/smart-contracts",
            },
            {
              label: 'Stronghold',
              to: "docs/solutions/stronghold/stronghold",
            },
          ],
        },
        {
          title: 'RESEARCH',
          items: [
            {
              label: 'Academics',
              to: "docs/research/academics/research-topics",
            },
            {
              label: 'Papers',
              to: "docs/research/papers/publications-in-1-5",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IOTA Wiki, Built with Docusaurus.`,
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
    ],
  ],
};
