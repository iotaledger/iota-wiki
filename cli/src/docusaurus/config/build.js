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
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
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
  },
  staticDirectories: [
    path.resolve(__dirname, '../static'),
    ...config.staticDirectories,
  ],
};
