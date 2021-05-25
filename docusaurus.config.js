/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA wiki',
  tagline: 'The single source of truth for the IOTA network',
  url: 'https://wiki.iota.org',
  baseUrl: '/iota-wiki/',
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
          type: "doc",
          docId: "getting-started/introduction-to-iota-and-the-tangle",
          position: "right",
          label: "Get Started",
          activeSidebarClassName: "navbar__link--active"
        },
        {
          type: "doc",
          docId: "the-token/introduction-to-miota",
          position: "right",
          label: "The Token",
          activeSidebarClassName: "navbar__link--active"
        },
        {
          type: "doc",
          docId: "develop/understanding-the-architecture",
          position: "right",
          label: "Develop",
          activeSidebarClassName: "navbar__link--active"
        },
        {
          type: "doc",
          docId: "the-community/community-overview",
          position: "right",
          label: "The Community",
          activeSidebarClassName: "navbar__link--active"
        },
        {
          type: "doc",
          docId: "fact-base/introduction-to-the-facts",
          position: "right",
          label: "Fact Base",
          activeSidebarClassName: "navbar__link--active"
        },
        {
          type: "doc",
          docId: "faqs/faqs",
          position: "right",
          label: "Faqs",
          activeSidebarClassName: "navbar__link--active"
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
