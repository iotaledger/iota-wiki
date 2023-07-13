const path = require('path');

module.exports = async () => {
  return [
    {
      id: 'get-started',
      path: path.resolve(__dirname, 'docs/get-started'),
      sidebarPath: path.resolve(__dirname, 'docs/get-started/sidebars.ts'),
      routeBasePath: 'get-started',
    },
    {
      id: 'learn',
      path: path.resolve(__dirname, 'docs/learn'),
      sidebarPath: path.resolve(__dirname, 'docs/learn/sidebars.ts'),
      routeBasePath: 'learn',
    },
    {
      id: 'build',
      path: path.resolve(__dirname, 'docs/build'),
      sidebarPath: path.resolve(__dirname, 'docs/build/sidebars.ts'),
      routeBasePath: 'build',
    },
    {
      id: 'maintain',
      path: path.resolve(__dirname, 'docs/maintain'),
      routeBasePath: 'maintain',
    },
  ];
};
