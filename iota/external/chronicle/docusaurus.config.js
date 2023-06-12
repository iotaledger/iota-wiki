const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'chronicle-rs',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'chronicle',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/iotaledger/chronicle.rs/edit/main/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial')],
                versions: {
                    current: {
                        label: 'IOTA',
                        badge: true
                    },
                },
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};
