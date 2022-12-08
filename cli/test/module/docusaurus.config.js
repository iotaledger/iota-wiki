const path = require('path');

module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: path.resolve(__dirname, './docs'),
        sidebarPath: path.resolve(__dirname, './sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog',
        path: path.resolve(__dirname, './blog'),
        showReadingTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'pages',
        path: path.resolve(__dirname, './src/pages'),
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, './static')],
};
