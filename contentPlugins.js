const path = require('path');

module.exports = async () => {
  return [
    {
      id: 'get-started',
      path: path.resolve(__dirname, 'docs/get-started'),
      routeBasePath: 'get-started',
    },
    {
      id: 'learn',
      path: path.resolve(__dirname, 'docs/learn'),
      routeBasePath: 'learn',
    },
    {
      id: 'build',
      path: path.resolve(__dirname, 'docs/build'),
      routeBasePath: 'build',
    },
    {
      id: 'maintain',
      path: path.resolve(__dirname, 'docs/maintain'),
      routeBasePath: 'maintain',
    },
  ];
};
