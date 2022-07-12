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
          label: 'Layer One',
          collapsed: false,
          items: [
              {
                  type: 'link',
                  label: 'Hornet',
                  href: 'https://stardust.iota-community.org/hornet/welcome',  
              },
              {
                  type: 'link',
                  label: 'Bee',
                  href: 'https://stardust.iota-community.org/bee/welcome',  
              },
          ],
      },
      {
        type: 'category',
        label: 'Layer Two',
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
                        href: 'https://github.com/iotaledger/inx-indexer',
                    },
                    {
                        type: 'link',
                        label: 'Dashboard',
                        href: 'https://github.com/iotaledger/inx-dashboard',   
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
                href: 'https://stardust.iota-community.org/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
                type: 'link',
                label: 'Chronicle',
                href: 'https://stardust.iota-community.org/chronicle.rs/welcome',   
            },
        ],
      },
    ]
};