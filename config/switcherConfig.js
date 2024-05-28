// @ts-check
const {
  generateSwitcherConfig,
} = require('../src/utils/pluginConfigGenerators');
const {
  buildPluginsConfig,
  maintainPluginsConfig,
} = require('./versionedConfig');

/** @type {import('../src/components/Switcher').Config} */
const config = {
  docs: [
    ...generateSwitcherConfig(buildPluginsConfig),
    ...generateSwitcherConfig(maintainPluginsConfig),
  ],
  sections: [
    {
      before: {
        docId: 'build',
        sidebarId: 'build',
      },
      subsections: [
        {
          label: 'Layer 1',
          description: 'Build applications on our feeless multi-asset L1 DAG.',
          id: 'build-layer-1',
        },
        {
          label: 'Layer 2',
          description: 'Build dApps with ISC, our L2 smart contracts platform.',
          id: 'build-layer-2',
        },
        {
          label: 'Tools',
          description: 'Tools to develop your dApps.',
          id: 'build-tools',
        },
      ],
    },
    {
      before: {
        docId: 'maintain',
        sidebarId: 'maintain',
      },
      subsections: [
        {
          label: 'Layer 1',
          description:
            'Setup nodes and indexers for our feeless multi-asset L1 DAG.',
          id: 'maintain-layer-1',
        },
        {
          label: 'Layer 2',
          description: 'Setup nodes for ISC, our L2 smart contracts platform.',
          id: 'maintain-layer-2',
        },
      ],
    },
  ],
};

module.exports = config;
