module.exports = {
    nodes: [
      'about-nodes',
      'become-a-node-operator',
      'node-software',
      'api_reference',
      {
        type: 'category',
        label: 'Explanations',
        collapsed: false,
        items: [
            'explanations/nodes_101',
            'explanations/security_101',
        ]
      },
      {
          type: 'category',
          label: 'Nodes',
          collapsed: false,
          items: [
              {
                  type: 'link',
                  label: 'Hornet',
                  href: '/hornet/welcome',  
              },
              {
                  type: 'link',
                  label: 'Bee',
                  href: '/bee/welcome',  
              },
          ],
      },
      {
        type: 'category',
        label: 'Extensions',
        collapsed: false,
        items: [
            {
                type: 'category',
                label: 'INX Plugins',
                collapsed: false,
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
                        href: 'https://github.com/iotaledger/inx-spammer',  
                    }
                ],  
            },
            {
                type: 'link',
                label: 'Wasp',
                href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
                type: 'link',
                label: 'Chronicle',
                href: '/chronicle.rs/welcome',   
            },
        ],
      },
    ]
};
