/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Wiki',
  tagline: 'Everything you need to know about IOTA in one place.',
  url: 'http://94.16.108.60',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          to: "docs/getting-started/introduction-to-iota-and-the-tangle",
          label: "Get Started",
        },
        {
          to: "docs/the-token/introduction-to-miota",
          label: "The Token",
        },
        {
          to: "docs/develop/understanding-the-architecture",
          label: "Develop",
        },
        {
          to: "docs/the-community/community-overview",
          label: "The Community",
        },
        {
          to: "docs/fact-base/introduction-to-the-facts",
          label: "Fact Base",
        },
        {
          to: "docs/faqs/faqs",
          label: "Faqs",
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/getting-started/tutorials',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Exchange',
              href: 'https://iota.stackexchange.com/',
            },
            {
              label: 'Discord',
              href: 'https://discord.iota.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/iota',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/iota-community/iota-wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IOTA Wiki, Built with Docusaurus.`,
    },
    colorMode: {
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon
        darkIconStyle: {
          marginLeft: '2px',
        },

        lightIcon: '☀',

        lightIconStyle: {
          marginLeft: '1px',
          color: '#ffd557',
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
