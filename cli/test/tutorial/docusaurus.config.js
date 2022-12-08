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
        source: 'https://github.com/iota-community/iota-wiki-cli.git',
        tags: ['text', 'video', 'c'],
      },
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
