import { writeFileSync } from 'fs';

const createConfig = (data, id) =>
  `const path = require('path');

module.exports = {
    title: '${data.title}',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    tutorial: {
        title: '${data.title}',
        description: '${data.description}',
        preview: './${data.preview}',
        website: '${id}/${data.firstPage}',
        source: '${data.sourceUrl}',
        tags: ['${data.tags.join("','")}'],
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: '${id}',
                path: path.resolve(__dirname, './docs'),
                routeBasePath: '${id}',
                sidebarPath: path.resolve(__dirname, './sidebars.js'),
                editUrl: '${data.sourceUrl}/edit/main/',
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './images')],
};
`;

export function writeConfig(data) {
  const id = data.title
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
  writeFileSync('documentation/docusaurus.config.js', createConfig(data, id));
}
