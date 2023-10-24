const { generatePluginConfig } = require('./src/utils/pluginConfigGenerators');
const {
  buildPluginsConfig,
  maintainPluginsConfig,
} = require('./versionedConfig');

const path = require('path');

module.exports = async () => {
  const { SELECTED_SECTION = 'all' } = process.env

  const buildPlugin = [
    {
      id: 'build',
      globalSidebars: ['build'],
      path: path.resolve(__dirname, 'docs/build/getting-started'),
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/getting-started/sidebars.ts',
      ),
      routeBasePath: 'build',
    },
    ...generatePluginConfig(buildPluginsConfig, __dirname + '/docs/build/'),
    {
      id: 'introduction-docs-chrysalis',
      path: path.resolve(
        __dirname,
        'docs/build/introduction-docs/chrysalis/docs',
      ),
      routeBasePath: 'introduction',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/introduction-docs/chrysalis/sidebars.js',
      ),
      versions: {
        current: {
          label: 'Chrysalis',
          badge: true,
        },
      },
    },
    {
      id: 'introduction-docs-stardust',
      path: path.resolve(
        __dirname,
        'docs/build/introduction-docs/stardust/docs',
      ),
      routeBasePath: 'introduction',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/introduction-docs/stardust/sidebars.js',
      ),
      versions: {
        current: {
          label: 'Stardust',
          path: 'stardust',
          badge: true,
        },
      },
    },
    {
      id: 'iota-zebra-tutorials',
      path: path.resolve(__dirname, 'docs/build/zebra-iota-edge-sdk/tutorials'),
      routeBasePath: 'zebra-tutorials',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/zebra-iota-edge-sdk/sidebars.js',
      ),
    },
  ];

  const maintainPlugin = [
    ...generatePluginConfig(
      maintainPluginsConfig,
      __dirname + '/docs/maintain/',
    ),
    {
      id: 'maintain',
      globalSidebars: ['maintain'],
      path: path.resolve(__dirname, 'docs/maintain/getting-started'),
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/getting-started/sidebars.ts',
      ),
      routeBasePath: 'maintain',
    },
  ];

  const getStartedPlugin = [{
      id: 'get-started',
      path: path.resolve(__dirname, 'docs/get-started'),
      sidebarPath: path.resolve(__dirname, 'docs/get-started/sidebars.ts'),
      routeBasePath: 'get-started',
  }]

  const learnPlugin = [{
      id: 'learn',
      path: path.resolve(__dirname, 'docs/learn'),
      sidebarPath: path.resolve(__dirname, 'docs/learn/sidebars.ts'),
      routeBasePath: 'learn',
  }]

  const allPlugins = [
    ...learnPlugin,
    ...getStartedPlugin,
    ...buildPlugin,
    ...maintainPlugin,
  ]

  const pluginMap = {
    build: buildPlugin,
    maintain: maintainPlugin,
    'get-started': getStartedPlugin,
    learn: learnPlugin,
    all: allPlugins,
  }


  return pluginMap[SELECTED_SECTION]
};



