const path = require('path');

module.exports = {
  plugins: [
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Test tutorial',
        description: 'This is a test tutorial.',
        preview: '/img/docusaurus.png',
        route: '/intro',
        tags: ['text'],
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'tutorial',
          path: path.resolve(__dirname, './docs'),
          sidebarPath: path.resolve(__dirname, './sidebars.js'),
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, './static')],
};
