module.exports = {
  develop: [
    {
      type: 'category',
      label: 'What is Shimmer?',
      link: {
        type: 'doc',
        id: 'what-is-shimmer/introduction',
      },
      items: [
        'what-is-shimmer/layer-1-landscape',
        'what-is-shimmer/networks',
        {
          type: 'category',
          label: 'About Nodes',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'what-is-shimmer/nodes/about-nodes',
          },
          items: [
            'what-is-shimmer/nodes/hornet',
            'what-is-shimmer/nodes/become-a-node-operator',
          ],
        },
        'what-is-shimmer/clients',
        'what-is-shimmer/tokens-and-wallets',
      ],
    },

    {
      type: 'category',
      label: 'Node API Reference',
      collapsed: true,
      items: [
        'nodes/api_reference',
        {
          type: 'category',
          label: 'Core REST API',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'nodes/core-rest-api/iota-core-rest-api',
          },
          items: require('./nodes/core-rest-api/sidebar'),
        },
      ],
    },

    {
      type: 'category',
      label: 'Endpoints',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'endpoints/shimmer',
          label: 'Shimmer',
        },
        {
          type: 'doc',
          id: 'endpoints/testnet',
          label: 'Testnet',
        },
      ],
    },

    {
      type: 'category',
      label: 'Documentation',
      link: {
        type: 'doc',
        id: 'docs',
      },
      items: [
        {
          type: 'link',
          label: 'Protocol Overview',
          href: '/introduction/welcome',
        },
        {
          type: 'link',
          label: 'Tangle Improvement Proposals (TIPS)',
          href: '/tips',
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
              label: 'iota.rs',
              type: 'link',
              href: '/iota.rs/welcome',
            },
            {
              label: 'wallet.rs',
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
        {
          label: 'Explorer',
          type: 'link',
          href: 'https://explorer.shimmer.network',
        },
        {
          label: 'Testnet Faucet',
          type: 'link',
          href: 'https://faucet.testnet.shimmer.network',
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
