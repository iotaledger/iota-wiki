const path = require('path');

module.exports = {
    title: '',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
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
                id: '',
                path: path.resolve(__dirname, './docs'),
                routeBasePath: '',
                sidebarPath: path.resolve(__dirname, './sidebars.js'),
                editUrl: '/edit/main/',
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './images')],
};
