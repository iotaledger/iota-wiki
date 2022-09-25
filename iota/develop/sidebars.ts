module.exports = {
    develop: [
      {
        type: 'category',
        label: 'Libraries',
        collapsed: true,
        items: [
            {
                label: 'Client.rs',
                type: 'link',
                href: '/iota.rs/welcome',
            },
            {
              label: 'Wallet.rs',
              type: 'link',
              href: '/wallet.rs/welcome',
            },
            {
                label: 'Identity',
                type: 'link',
                href: '/identity.rs/introduction',
            },
            {
                label: 'Streams',
                type: 'link',
                href: '/streams/welcome',
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
                href: '/hornet/welcome',
            },
            {
                label: 'Bee',
                type: 'link',
                href: '/bee/welcome',
            },
            {
              label: 'Chronicle',
              type: 'link',
              href: '/chronicle/welcome',   
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
                label: 'Chrysalis',
                href:  '/introduction/welcome'
            },
        ],
      },
      {
        type: 'link',
        label: 'Tutorials',
        href: '/tutorials',
      },
    ]
  };