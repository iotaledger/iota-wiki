const path = require('path');

module.exports = {
    tutorial: {
        title: '',
        description: '',
        preview: './',
        website: '/intro',
        source: '',
        tags: [''],
    },
    plugins: [
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
