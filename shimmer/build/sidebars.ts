module.exports = {
  build: [
    {
      type: 'category',
      label: 'Build',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Intro to Clients',
          items: [
            {
              type: 'category',
              label: 'Seeds, Accounts and Addresses',
              items: [
                'intro-to-clients/seeds-accounts-and-addresses/seed-mnemonics',
                'intro-to-clients/seeds-accounts-and-addresses/accounts-and-addresses',
              ],
            },
            'intro-to-clients/request-testnet-funds',
            'intro-to-clients/simple-transfer',
            'intro-to-clients/backup-security',
          ]
        },
        {
          type: 'category',
          label: 'Clients in Shimmer',
          items: [

            {
              type: 'category',
              label: 'Output Unlock Conditions',
              items: [
                'clients-in-shimmer/output-unlock-conditions/expiration',
                'clients-in-shimmer/output-unlock-conditions/timelock',
                'clients-in-shimmer/output-unlock-conditions/storage-deposit-return',
              ],
            },
            {
              type: 'category',
              label: 'Output Features',
              items: [
                'clients-in-shimmer/output-features/sender',
                'clients-in-shimmer/output-features/metadata',
                'clients-in-shimmer/output-features/tag',
              ],
            },
            {
              type: 'category',
              label: 'Alias Transactions',
              items: [
                {
                  type: 'doc',
                  id: 'clients-in-shimmer/alias/introduction',
                  label: 'Introduction',
                },
                'clients-in-shimmer/alias/create',
                'clients-in-shimmer/alias/state-transitions',
                'clients-in-shimmer/alias/governance-transitions',
                'clients-in-shimmer/alias/destroy',
                'clients-in-shimmer/alias/unlock-alias-funds',
              ],
            },
            {
              type: 'category',
              label: 'Native Tokens and Foundries',
              items: [
                'clients-in-shimmer/native-token/introduction',
                'clients-in-shimmer/native-token/create-foundry',
                'clients-in-shimmer/native-token/mint-tokens',
                'clients-in-shimmer/native-token/melt-tokens',
                'clients-in-shimmer/native-token/burn-tokens',
                'clients-in-shimmer/native-token/storage-deposits',
              ],
            },
            {
              type: 'category',
              label: 'NFTs',
              items: [
                'clients-in-shimmer/nft/introduction',
                'clients-in-shimmer/nft/mint',
                'clients-in-shimmer/nft/transfer',
                'clients-in-shimmer/nft/claim',
                'clients-in-shimmer/nft/burn',
                'clients-in-shimmer/nft/nft-as-a-wallet',
                'clients-in-shimmer/nft/nft-collections',
              ],
            },
          ]},


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
                {
                  type: 'link',
                  label: 'API Core v0',
                  href: '/inx-api-core-v0/welcome',
                },
                {
                  type: 'link',
                  label: 'API Core v1',
                  href: '/inx-api-core-v1/welcome',
                },
                {
                  type: 'link',
                  label: 'IRC Metadata',
                  href: '/inx-irc-metadata/welcome',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
