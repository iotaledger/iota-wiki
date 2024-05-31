const { generatePluginConfig } = require('../src/utils/pluginConfigGenerators');
const {
  buildPluginsConfig,
  maintainPluginsConfig,
} = require('./versionedConfig');

const path = require('path');

module.exports = async () => {
  const { SELECTED_SECTION = 'all' } = process.env;

  const buildPlugins = [
    {
      id: 'build',
      globalSidebars: ['build'],
      path: path.resolve(__dirname, '../docs/build/getting-started'),
      sidebarPath: path.resolve(
        __dirname,
        '../docs/build/getting-started/sidebars.ts',
      ),
      routeBasePath: 'build',
    },
    ...generatePluginConfig(
      buildPluginsConfig,
      path.resolve(__dirname, '../docs/build/'),
    ),
    {
      id: 'introduction-docs-stardust',
      path: path.resolve(
        __dirname,
        '../docs/build/introduction-docs/stardust/docs',
      ),
      routeBasePath: 'introduction',
      sidebarPath: path.resolve(
        __dirname,
        '../docs/build/introduction-docs/stardust/sidebars.js',
      ),
      versions: {
        current: {
          label: 'Stardust',
          path: 'stardust',
          badge: true,
        },
      },
    },
  ];

  const maintainPlugins = [
    ...generatePluginConfig(
      maintainPluginsConfig,
      path.resolve(__dirname, '../docs/maintain/'),
    ),
    {
      id: 'maintain',
      globalSidebars: ['maintain'],
      path: path.resolve(__dirname, '../docs/maintain/getting-started'),
      sidebarPath: path.resolve(
        __dirname,
        '../docs/maintain/getting-started/sidebars.ts',
      ),
      routeBasePath: 'maintain',
    },
  ];

  const getStartedPlugins = [
    {
      id: 'get-started',
      path: path.resolve(__dirname, '../docs/get-started/'),
      sidebarPath: path.resolve(__dirname, '../docs/get-started/sidebars.ts'),
      routeBasePath: 'get-started',
    },
  ];

  const learnPlugins = [
    {
      id: 'learn',
      path: path.resolve(__dirname, '../docs/learn/'),
      sidebarPath: path.resolve(__dirname, '../docs/learn/sidebars.ts'),
      routeBasePath: 'learn',
    },
  ];

  const allPlugins = [
    ...learnPlugins,
    ...getStartedPlugins,
    {
      id: 'community',
      path: path.resolve(__dirname, '../docs/community/'),
      sidebarPath: path.resolve(__dirname, '../docs/community/sidebars.ts'),
      routeBasePath: 'community',
    },
    ...buildPlugins,
    ...maintainPlugins,
  ];

  const sectionPluginMap = {
    build: buildPlugins,
    maintain: maintainPlugins,
    'get-started': getStartedPlugins,
    learn: learnPlugins,
    all: allPlugins,
  };

  return sectionPluginMap[SELECTED_SECTION];
};
