module.exports = {
    develop: [
      {
        type: 'category',
        label: 'Smart Contracts',
        collapsed: true,
        items: [
            {
                label: 'Documentation',
                type: 'link',
                href: '/smart-contracts/overview',
            },
            {
                label: 'Node (WASP)',
                type: 'link',
                href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
                type: 'link',
                label: 'WASP CLI',
                href: '/smart-contracts/guide/chains_and_nodes/wasp-cli'
            },
            {
                label: 'Schema Tool',
                type: 'link',
                href: '/smart-contracts/guide/schema'
            }
        ],
      },
      {
        type: 'category',
        label: 'Libraries',
        collapsed: true,
        items: [
            {
                label: 'Client',
                type: 'link',
                href: '/iota.rs/develop/welcome',
            },
            {
                label: 'Wallet.rs',
                type: 'link',
                href: '/wallet.rs/develop/welcome',
            },
            {
                label: 'Client Typescript',
                type: 'link',
                href: '/iotajs/welcome',
            },
            {
                label: 'Stronghold',
                type: 'link',
                href: '/stronghold.rs/welcome',
            },
        ],
      },
      {
        type: 'category',
        label: 'Node Software',
        collapsed: true,
        items: [
            {
                label: 'Introduction',
                type: 'doc',
                id: 'nodes/node-software',
            },
            {
                label: 'Hornet',
                type: 'link',
                href: '/hornet/develop/welcome',
            },
            {
              type: 'category',
              label: 'INX Plugins',
              collapsed: true,
              items: [
                  {
                      type: 'link',
                      label: 'Indexer',
                      href: '/inx-indexer/develop/welcome',
                  },
                  {
                      type: 'link',
                      label: 'MQTT',
                      href: '/inx-mqtt/develop/welcome',
                  },
                  {
                      type: 'link',
                      label: 'PoI',
                      href: '/inx-poi/develop/welcome',
                  },
                  {
                      type: 'link',
                      label: 'Participation',
                      href: '/inx-participation/develop/welcome',
                  },
                  {
                      type: 'link',
                      label: 'Coordinator',
                      href: '/inx-coordinator/develop/welcome',
                  },
                  {
                      type: 'link',
                      label: 'Faucet',
                      href: '/inx-faucet/develop/welcome',
                  },
                  {
                      type: 'link',
                      label: 'Dashboard',
                      href: '/inx-dashboard/develop/welcome',   
                  },
                  {
                      type: 'link',
                      label: 'Spammer',
                      href: '/inx-spammer/develop/welcome',  
                  },
                  {
                    type: 'link',
                    label: 'Wasp',
                    href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
                  },
                  {
                    type: 'link',
                    label: 'Chronicle',
                    href: '/chronicle/develop/welcome',   
                  },
              ],
            },
        ],
      },
      {
        type: 'category',
        label: 'About Nodes',
        collapsed: true,
        items: [
            {
                label: 'Introduction',
                type: 'doc',
                id: 'nodes/about-nodes',
            },
            'nodes/become-a-node-operator',
            'nodes/api_reference',
            {
              type: 'category',
              label: 'Explanations',
              collapsed: false,
              items: [
                  'nodes/explanations/nodes_101',
                  'nodes/explanations/security_101',
              ]
            },
        ],
      },
      {
        type: 'category',
        label: 'Networks',
        items: [
            'networks/iota-1.5-chrysalis',
            'networks/iota-2.0-coordicide',
            'networks/testnets',
            'networks/network-token-migration',
            {
                type: 'link',
                label: 'Shimmer',
                href:  '/introduction/develop/welcome'
            },
        ],
      },
      {
        type: 'category',
        label: 'Tools',
        link: {
            type: 'generated-index',
            title: 'Tools',
            slug: '/tools',
        },
        items: [
            {
                type: 'link',
                label: 'CLI Wallet',
                href:  '/cli-wallet/welcome'
            },
            {
                type: 'link',
                label: 'WASP CLI',
                href: '/smart-contracts/guide/chains_and_nodes/wasp-cli'
            },
            {
                label: 'Schema Tool',
                type: 'link',
                href: '/smart-contracts/guide/schema'
            }
        ]
      },
      {
        type: 'link',
        label: 'Tutorials',
        href: '/tutorials',
      },
    ]
  };