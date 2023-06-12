const path = require('path');
module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'zebra-tutorials',
                path: path.resolve(__dirname, './tutorials'),
                routeBasePath: 'zebra-tutorials',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation',
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};
