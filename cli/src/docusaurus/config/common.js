const path = require('path');
const { merge } = require('@wiki/utils/config');

const common = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'iota-wiki', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: ['plugin-image-zoom'],
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: path.resolve(
          __dirname,
          '../../../../src/next/css/custom.css',
        ),
      },
    ],
    path.resolve(__dirname, '../theme'),
  ],
  themeConfig: {
    image: 'img/shimmer-wiki.png',
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
        src: 'img/logo_next.svg',
        srcDark: 'img/logo_next_dark.svg',
      },
      items: [],
    },
  },
  staticDirectories: [path.resolve(__dirname, '../static')],
};

module.exports = async () => {
  const { IOTA_WIKI_DIRECTORY } = process.env;

  // Get relative configuration path and import it.
  const configPath = path
    .relative(__dirname, path.join(IOTA_WIKI_DIRECTORY, 'docusaurus.config.js'))
    .split(path.sep)
    .join(path.posix.sep);
  const config = require(configPath);

  // Allow async functions returning a configuration object.
  const external = typeof config === 'function' ? await config() : config;

  return merge(external, common);
};
