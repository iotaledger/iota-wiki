import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(path.resolve(
  process.cwd(),
  process.env.IOTA_WIKI_DIRECTORY,
  './docusaurus.config.js',
));

module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  onDuplicateRoutes: 'log',
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
        customCss: path.resolve(__dirname, '../css/custom.css'),
      },
    ],
    path.resolve(__dirname, '../theme'),
  ],
  themeConfig: {
    announcementBar: {
      id: 'preview',
      content:
        'This is a local preview. Please find available routes <a href="/404">here</a>.',
      isCloseable: false,
    },
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
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [],
    },
    footer: {
      links: [],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
  },
  staticDirectories: [
    path.resolve(__dirname, '../static'),
    ...config.staticDirectories,
  ],
};
