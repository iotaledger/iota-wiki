const path = require('path');

 module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'blueprints',
                path: path.resolve(__dirname, './'),
                routeBasePath: 'blueprints',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/iotaledger/blueprints/edit/main',
                include: ['**.md'],
                exclude: ['README.md', 'node_modules']
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};