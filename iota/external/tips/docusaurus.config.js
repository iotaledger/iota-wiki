const { link } = require('fs');
const path = require('path');

module.exports = {
  plugins: [
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'iota-tips', 
            path: path.resolve(__dirname, './'),
            routeBasePath: 'tips',
            editUrl: 'https://github.com/iotaledger/tips/edit/main/',
            remarkPlugins: [require('remark-import-partial')],
            include: ['tips/**/*.md', 'README.md'],
            sidebarPath: path.resolve(__dirname, 'sidebars.js'),
        }
    ],
  ],
  staticDirectories: [],
};
