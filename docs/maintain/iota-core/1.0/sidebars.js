/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'IOTA-Core',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'welcome',
        },
        {
          type: 'doc',
          id: 'getting_started/getting_started',
        },
        {
          type: 'category',
          label: 'How to',
          items: [
            {
              type: 'doc',
              id: 'how_tos/using_docker',
              label: 'Install using Docker',
            },
            {
              type: 'doc',
              id: 'how_tos/validator_setup',
              label: 'Become a validator',
            },
            {
              type: 'doc',
              id: 'how_tos/post_installation',
              label: 'Post Installation',
            },
          ],
        } /*
        {
          type: 'category',
          label: 'INX-Plugins',
          link: {
            type: 'generated-index',
            title: 'INX-Plugins',
            description:
              'Use custom plugins to extend the functionality of your node.',
            slug: '/inx-plugins',
            keywords: ['inx', 'plugins'],
          },
          items: [
            {
              type: 'category',
              label: 'API Core v0',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/api-core-v0/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/api-core-v0/configuration',
                },
              ],
            },
            {
              type: 'category',
              label: 'API Core v1',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/api-core-v1/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/api-core-v1/configuration',
                },
              ],
            },
            {
              type: 'category',
              label: 'Coordinator',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/coordinator/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/coordinator/configuration',
                },
              ],
            },
            {
              type: 'category',
              label: 'Dashboard',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/dashboard/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/dashboard/configuration',
                },
              ],
            },
            {
              type: 'category',
              label: 'Faucet',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/faucet/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/faucet/configuration',
                },
              ],
            },
            {
              type: 'category',
              label: 'Indexer',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/indexer/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/indexer/configuration',
                },
                {
                  type: 'doc',
                  label: 'API Reference',
                  id: 'inx-plugins/indexer/api_reference',
                },
                {
                  type: 'doc',
                  label: 'How To Query Outputs',
                  id: 'inx-plugins/indexer/how_to/query_outputs',
                },
              ],
            },
            {
              type: 'category',
              label: 'IRC Metadata',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/irc-metadata/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/irc-metadata/configuration',
                },
                {
                  type: 'doc',
                  label: 'API Reference',
                  id: 'inx-plugins/irc-metadata/api_reference',
                },
              ],
            },
            {
              type: 'category',
              label: 'MQTT',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/mqtt/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/mqtt/configuration',
                },
                {
                  type: 'doc',
                  label: 'API Reference',
                  id: 'inx-plugins/mqtt/api_reference',
                },
              ],
            },
            {
              type: 'category',
              label: 'Participation',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/participation/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/participation/configuration',
                },
                {
                  type: 'doc',
                  label: 'API Reference',
                  id: 'inx-plugins/participation/api_reference',
                },
              ],
            },
            {
              type: 'category',
              label: 'POI',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/poi/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/poi/configuration',
                },
                {
                  type: 'doc',
                  label: 'API Reference',
                  id: 'inx-plugins/poi/api_reference',
                },
              ],
            },
            {
              type: 'category',
              label: 'Spammer',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Welcome',
                  id: 'inx-plugins/spammer/welcome',
                },
                {
                  type: 'doc',
                  label: 'Configuration',
                  id: 'inx-plugins/spammer/configuration',
                },
              ],
            },
            {
              type: 'category',
              label: 'Community INX Plugins',
              collapsed: true,
              items: [
                {
                  label: 'INX Collector',
                  type: 'link',
                  href: 'https://github.com/teleconsys/inx-collector',
                },
              ],
            },
          ],
        },*/,
        {
          type: 'category',
          label: 'References',
          items: [
            {
              type: 'doc',
              id: 'references/configuration',
              label: 'Configuration',
            } /*
            {
              type: 'doc',
              id: 'references/peering',
              label: 'Peering',
            },*/,
            {
              type: 'doc',
              id: 'references/api_reference',
              label: 'API Reference',
            },
          ],
        },
      ],
    },
  ],
};
