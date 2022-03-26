// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        path: path.resolve(__dirname, './docs'),
        sidebarPath: path.resolve(__dirname, './sidebars.js'),
        // Please change this to your repo.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      }),
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        path: path.resolve(__dirname, './blog'),
        showReadingTime: true,
        // Please change this to your repo.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      }),
    ],
    [
      '@docusaurus/plugin-content-pages',
      /** @type {import('@docusaurus/plugin-content-pages').Options} */
      ({
        path: path.resolve(__dirname, './src/pages'),
      }),
    ],
  ],
  staticDirectories: [path.resolve(__dirname, './static')],
};
