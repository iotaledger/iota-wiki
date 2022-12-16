module.exports = {
  develop: [
    'welcome',
    {
      type: 'link',
      label: 'Protocol Overview',
      href: '/introduction/welcome',
    },
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
          href: '/smart-contracts/guide/chains_and_nodes/wasp-cli',
        },
        {
          label: 'Schema Tool',
          type: 'link',
          href: '/smart-contracts/guide/wasm_vm/schema',
        },
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
          href: '/iota.rs/welcome',
        },
        {
          label: 'Wallet.rs',
          type: 'link',
          href: '/wallet.rs/welcome',
        },
        {
          label: 'Client Typescript',
          type: 'link',
          href: '/iotajs/welcome',
        },
        {
          label: 'Identity',
          type: 'link',
          href: '/identity.rs/introduction',
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
          type: 'category',
          label: 'INX Plugins',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Indexer',
              href: '/inx-indexer/welcome',
            },
            {
              type: 'link',
              label: 'MQTT',
              href: '/inx-mqtt/welcome',
            },
            {
              type: 'link',
              label: 'PoI',
              href: '/inx-poi/welcome',
            },
            {
              type: 'link',
              label: 'Participation',
              href: '/inx-participation/welcome',
            },
            {
              type: 'link',
              label: 'Coordinator',
              href: '/inx-coordinator/welcome',
            },
            {
              type: 'link',
              label: 'Faucet',
              href: '/inx-faucet/welcome',
            },
            {
              type: 'link',
              label: 'Dashboard',
              href: '/inx-dashboard/welcome',
            },
            {
              type: 'link',
              label: 'Spammer',
              href: '/inx-spammer/welcome',
            },
            {
              type: 'link',
              label: 'Wasp',
              href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
              type: 'link',
              label: 'Chronicle',
              href: '/chronicle/welcome',
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
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'nodes/api_reference',
            {
              type: 'category',
              label: 'Core REST API',
              collapsed: true,
              items: require('./nodes/core-rest-api/sidebar'),
            },
          ],
        },
        {
          type: 'category',
          label: 'Explanations',
          collapsed: false,
          items: [
            'nodes/explanations/nodes_101',
            'nodes/explanations/security_101',
          ],
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
          href: '/cli-wallet/welcome',
        },
        {
          type: 'link',
          label: 'WASP CLI',
          href: '/smart-contracts/guide/chains_and_nodes/wasp-cli',
        },
        {
          label: 'Schema Tool',
          type: 'link',
          href: '/smart-contracts/guide/wasm_vm/schema',
        },
      ],
    },
    {
      type: 'link',
      label: 'Tutorials',
      href: '/tutorials',
    },
  ],
};
