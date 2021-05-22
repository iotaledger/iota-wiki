/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Wiki',
  tagline: 'IOTA is cool',
  url: 'https://iota-community.github.io',
  baseUrl: '/iota-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'IOTA 101',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'The Tech',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'The Token',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'The Science',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'The Facts',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Community',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Develop',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'FAQs',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
