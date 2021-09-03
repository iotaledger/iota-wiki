/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    announcementBar: {
      id: 'wip', // Any value that will identify this message.
      content:
        'The work on this Wiki is still in progress. Consider contributing by using the in page editor or creating a <a href="https://github.com/iota-community/iota-wiki">PR directly</a>',
      backgroundColor: '#ff0000', // Defaults to `#fff`.
      textColor: '#fff', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    matomo: {
      matomoUrl: 'https://matomo.antonionardella.it/',
      siteId: '6',
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
          label: "Learn",
          to: "docs/learn/about-iota/an-introduction-to-iota",
        },
        {
          label: "Participate",
          to: "docs/participate/support-the-network/about-nodes",
        },
        {
          label: 'Build',
          to: '#',
          layout: [
            '. 1 3 4',
            '0 1 3 4',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
          ],
          items_: [
            {
              label: "Getting Started",
              sublabel: "IOTA development basics",
              to: "docs/develop/getting-started/architecture",
              icon: "\e908",
              activeBaseRegex: 'docs/develop/getting-started/.*'
            },
            {
              label: 'Chrysalis (IOTA 1.5)',
              items: [
                {
                  label: "Chrysalis Docs",
                  sublabel: "Mainnet documentation",
                  to: "chrysalis-docs/welcome",
                  icon: "\e909",
                  activeBaseRegex: 'chrysalis-docs/.*',
                },
                {
                  label: "Bee Node",
                  sublabel: "IOTA node written in Rust",
                  to: "bee/getting_started/getting_started",
                  icon: "\e90a",
                  activeBaseRegex: 'bee/.*'
                },
                {
                  label: "Hornet Node",
                  sublabel: "IOTA node written in Go",
                  to: "hornet/welcome",
                  icon: "\e906",
                  activeBaseRegex: 'hornet/.*'
                },
              ],
            },
            {
              label: 'Coordicide (IOTA 2.0)',
              items: [
                {
                  label: "Coordicide Specs",
                  sublabel: "Full specs of decentralized IOTA",
                  to: "IOTA-2.0-Research-Specifications/Preface",
                  icon: "\e904",
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*'
                },
                {
                  label: "GoShimmer Node",
                  sublabel: "IOTA 2.0 node",
                  to: "goshimmer/welcome",
                  icon: "\e907",
                  activeBaseRegex: 'goshimmer/.*'
                },
              ],
            },
            {
              label: 'Libraries',
              items: [
                {
                  label: "Core",
                  sublabel: "IOTA core functionality library",
                  to: "iota.rs/welcome",
                  icon: "\e903",
                  activeBaseRegex: 'iota.rs/.*'
                },
                {
                  label: "Wallet",
                  sublabel: "Build IOTA wallets",
                  to: "wallet.rs/welcome",
                  icon: "\e901",
                  activeBaseRegex: 'wallet.rs/.*'
                },
                {
                  label: "Stronghold",
                  sublabel: "Hanlde secrets securely",
                  to: "stronghold.rs/welcome",
                  icon: "\e902",
                  activeBaseRegex: 'stronghold.rs/.*'
                },
                {
                  label: "Identity",
                  sublabel: "Identity framework",
                  to: "identity.rs/intro",
                  icon: "\e905",
                  activeBaseRegex: 'identity.rs/.*'
                },
              ],
            },
            {
              label: 'Smart Contracts',
              items: [
                {
                  label: "Wasp Node",
                  sublabel: "Smart-contract node",
                  to: "wasp/welcome",
                  icon: "\e900",
                  activeBaseRegex: 'wasp/.*',
                },
              ],
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'right' },
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
            {
              label: 'Use Cases',
              to: "docs/use/use-cases/industry-applications",
            },
            {
              label: 'Solutions',
              to: "docs/use/streams/encrypted-data-comms",
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: "docs/build/getting-started/architecture",
            },
            {
              label: 'Fundamentals',
              to: "docs/build/fundamentals/cryptography",
            },
            {
              label: 'Exchange Integration',
              to: "docs/develop/exchange-integration/exchange-integration-guide",
            },
            {
              label: 'Tutorials',
              to: "docs/build/tutorials/youtube",
            },
          ],
        },
        {
          title: 'WIKI',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/iota-community/iota-wiki'
            },
            {
              label: 'Editor Github',
              href: 'https://github.com/jlvandenhout/docusaurus-plugin-docs-editor'
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io'
            },
            {
              label: 'Blog',
              to: 'blog'
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
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
          editUrl: 'https://github.com/iota-community/iota-wiki/edit/develop/',
          remarkPlugins: [require('remark-code-import'), require('remark-import-partial')],
        },
        blog: {
          showReadingTime: true,
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
    ]
  ],
  plugins: [
    [
      '@jlvandenhout/docusaurus-plugin-docs-editor',
      {
        // GitHub OAuth Application settings
        github: {
          // REQUIRED - The Client ID you got from the GitHub OAuth App setup
          clientId: '30a8f5a21215004e81ca',
          // REQUIRED - The plugin will append the authorization code to this URL
          tokenUrl: 'https://iota-wiki-github-oauth-login.iotaledger.workers.dev',
          // The request method to use (GET or POST), defaults to GET
          method: 'POST',
        },
      }
    ],
    'docusaurus-plugin-matomo',
    /* AUTO GENERATED EXTERNAL DOCS CONFIG */
  ]
};
