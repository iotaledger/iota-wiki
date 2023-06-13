const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'IOTA-Research-Specifications',
                path: path.resolve(__dirname, '../'),
                routeBasePath: 'IOTA-2.0-Research-Specifications',
                sidebarPath: path.resolve(__dirname, '../sidebars.js'),
                editUrl: 'https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus',
                remarkPlugins: [math],
                rehypePlugins: [katex],
                include: ['*.md'],
                exclude: ['README.md'],
            }
        ],
    ],
    staticDirectories: [],
};
