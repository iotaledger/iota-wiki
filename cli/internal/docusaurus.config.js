// @ts-check
const path = require('path');
const config = require(path.resolve(
  process.cwd(),
  process.env.WIKI_SITE_DIR,
  './docusaurus.config.js',
));

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
  plugins: ['plugin-image-zoom', ...config.plugins],
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: path.resolve(__dirname, './src/css/custom.css'),
      },
    ],
  ],
  themeConfig: {
    image: 'img/iota-wiki.png',
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
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: 'Learn',
          to: 'learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Participate',
          to: 'participate/support-the-network/about-nodes',
          activeBaseRegex: '^/participate/.*',
        },
        {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 3 4',
            '0 1 3 4',
            '5 1 3 2',
            '5 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
          ],
          items_: [
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Getting Started',
                  sublabel: 'IOTA development basics',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
              ],
            },
            {
              label: 'Chrysalis (IOTA 1.5)',
              items: [
                {
                  label: 'Chrysalis Docs',
                  sublabel: 'Mainnet documentation',
                  to: 'chrysalis-docs/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/chrysalis-docs.*',
                },
                {
                  label: 'Bee Node',
                  sublabel: 'IOTA node written in Rust',
                  to: 'bee/welcome',
                  icon: '\ue900',
                  activeBaseRegex: '^/bee/.*',
                },
                {
                  label: 'Hornet Node',
                  sublabel: 'IOTA node written in Go',
                  to: 'hornet/welcome',
                  icon: '\ue904',
                  activeBaseRegex: '^/hornet/.*',
                },
                {
                  label: 'Chronicle Permanode',
                  sublabel: 'IOTA permanode',
                  to: 'chronicle.rs/welcome',
                  icon: '\ue90c',
                  activeBaseRegex: '^/chronicle.rs/.*',
                },
              ],
            },
            {
              label: 'Coordicide (IOTA 2.0)',
              items: [
                {
                  label: 'Coordicide Specs',
                  sublabel: 'Decentralizing IOTA',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
                {
                  label: 'GoShimmer Node',
                  sublabel: 'IOTA 2.0 node',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
              ],
            },
            {
              label: 'Libraries',
              items: [
                {
                  label: 'Client',
                  sublabel: 'Interact with the IOTA network',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Wallet',
                  sublabel: 'Build IOTA wallets',
                  to: 'wallet.rs/welcome',
                  icon: '\ue90a',
                  activeBaseRegex: '^/wallet.rs/.*',
                },
                {
                  label: 'Stronghold',
                  sublabel: 'Handle secrets securely',
                  to: 'stronghold.rs/welcome',
                  icon: '\ue909',
                  activeBaseRegex: '^/stronghold.rs/.*',
                },
                {
                  label: 'Identity',
                  sublabel: 'Identity framework',
                  to: 'identity.rs/introduction',
                  icon: '\ue905',
                  activeBaseRegex: '^/identity.rs/.*',
                },
                {
                  label: 'Streams',
                  sublabel: 'Share data securely',
                  to: 'streams/welcome',
                  icon: '\ue908',
                  activeBaseRegex: '^/streams/.*',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              items: [
                {
                  label: 'Wasp Node',
                  sublabel: 'Smart contract node',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
              ],
            },
            {
              label: 'Integrations',
              items: [
                {
                  label: 'Streams and Identity',
                  sublabel: 'Integrate IOTA seamlessly',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
              ],
            },
          ],
        },
        { to: '/blog', label: 'Community Blog', position: 'right' },
        { to: '/team', label: 'Team', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About IOTA',
              to: 'learn/about-iota/an-introduction-to-iota',
            },
            {
              label: 'IOTA Token',
              to: 'learn/iota-token/buying-iota',
            },
            {
              label: 'Wallets',
              to: 'learn/wallets/what-is-a-wallet',
            },
            {
              label: 'Networks',
              to: 'learn/networks/iota-1.5-chrysalis',
            },
            {
              label: 'Glossary',
              to: 'learn/glossary',
            },
            {
              label: 'Research',
              to: 'learn/research/research-outline',
            },
            {
              label: 'Future of IOTA',
              to: 'learn/future/future-of-iota',
            },
          ],
        },
        {
          title: 'PARTICIPATE',
          items: [
            {
              label: 'Support the network',
              to: 'participate/support-the-network/about-nodes',
            },
            {
              label: 'The Community',
              to: 'participate/the-community/discord',
            },
            {
              label: 'Partnerships',
              href: 'https://www.iota.org/solutions/partnerships',
            },
            {
              label: 'Funding',
              to: 'participate/funding/edf-funding',
            },
            {
              label: 'Use Cases',
              to: 'participate/use-cases/industry-applications',
            },
            {
              label: 'Frameworks',
              to: 'participate/frameworks/introduction',
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: 'build/welcome',
            },
            {
              label: 'Fundamentals',
              to: 'build/fundamentals/cryptography',
            },
            {
              label: 'Exchange Integration',
              to: 'build/exchange-integration/exchange-integration-guide',
            },
            {
              label: 'Tutorials',
              to: 'build/tutorials/twitch',
            },
          ],
        },
        {
          title: 'WIKI',
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
              label: 'Editor Github',
              href: 'https://github.com/jlvandenhout/docusaurus-plugin-docs-editor',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Contribute',
              to: 'participate/contribute-to-wiki/welcome',
            },
            {
              label: 'Impressum',
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
      {
        url: 'https://www.facebook.com/TheIOTAFoundation/',
        backgroundColor: '#BAC6DE',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
    },
  },
  staticDirectories: [
    path.resolve(__dirname, './static'),
    ...config.staticDirectories,
  ],
};
