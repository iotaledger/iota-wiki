module.exports = {
  develop: [
    {
      type: 'category',
      label: 'What is Shimmer?',
      link: {
        type: 'doc',
        id: 'explanations/what-is-shimmer/introduction',
      },
      items: [
        'explanations/what-is-shimmer/layer-1-landscape',
        'explanations/what-is-shimmer/networks',
        {
          type: 'category',
          label: 'About Nodes',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'explanations/what-is-shimmer/nodes/about-nodes',
          },
          items: [
            'explanations/what-is-shimmer/nodes/about-nodes',
            'explanations/what-is-shimmer/nodes/hornet',
            'explanations/what-is-shimmer/nodes/become-a-node-operator',
          ],
        },
        'explanations/what-is-shimmer/clients',
        'explanations/what-is-shimmer/tokens-and-wallets',
      ],
    },
    {
      type: 'category',
      label: 'What is Stardust?',
      items: [
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/what-is-stardust',
          label: `Introduction`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/rethink-utxo',
          label: `Rethinking UTXO`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/sc-support',
          label: `Smart Contract Chain Support`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/tokenization',
          label: `Tokenization`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/storage-deposit',
          label: `Storage Deposit`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/unlock-conditions',
          label: `Output Unlock Conditions`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/output-features',
          label: `Output Features`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/protecting-users',
          label: `Protecting Users`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/data-processing',
          label: `Offloading Data Processing`,
        },
        {
          type: 'doc',
          id: 'explanations/what-is-stardust/dynamic-pow',
          label: `Dynamic PoW`,
        },
        {
          type: 'doc',
          id: 'explanations/protocol-tip',
          label: 'Protocol TIPs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Start Building',
      items: [
        'how-tos/introduction',
        {
          type: 'category',
          label: 'Seeds, Accounts and Addresses',
          items: [
            'how-tos/seeds-accounts-and-addresses/seed-mnemonics',
            'how-tos/seeds-accounts-and-addresses/accounts-and-addresses',
          ],
        },
        'how-tos/request-testnet-funds',
        'how-tos/simple-transfer',
        {
          type: 'category',
          label: 'Output Unlock Conditions',
          items: [
            'how-tos/output-unlock-conditions/expiration',
            'how-tos/output-unlock-conditions/timelock',
            'how-tos/output-unlock-conditions/storage-deposit-return',
          ],
        },
        {
          type: 'category',
          label: 'Output Features',
          items: [
            'how-tos/output-features/sender',
            'how-tos/output-features/metadata',
            'how-tos/output-features/tag',
          ],
        },
        {
          type: 'category',
          label: 'Alias Transactions',
          link: {
            type: 'doc',
            id: 'how-tos/alias/introduction',
          },
          items: [
            {
              type: 'doc',
              id: 'how-tos/alias/introduction',
              label: 'Introduction',
            },
            'how-tos/alias/create',
            'how-tos/alias/state-transitions',
            'how-tos/alias/governance-transitions',
            'how-tos/alias/destroy',
            'how-tos/alias/unlock-alias-funds',
          ],
        },
        {
          type: 'category',
          label: 'Native Tokens and Foundries',
          items: [
            'how-tos/native-token/introduction',
            'how-tos/native-token/create-foundry',
            'how-tos/native-token/mint-tokens',
            'how-tos/native-token/melt-tokens',
            'how-tos/native-token/burn-tokens',
            'how-tos/native-token/storage-deposits',
          ],
        },
        {
          type: 'category',
          label: 'NFTs',
          items: [
            'how-tos/nft/introduction',
            'how-tos/nft/mint',
            'how-tos/nft/transfer',
            'how-tos/nft/claim',
            'how-tos/nft/burn',
            'how-tos/nft/nft-as-a-wallet',
            'how-tos/nft/nft-collections',
          ],
        },
        {
          type: 'doc',
          id: 'how-tos/backup_security',
          label: 'Backup and Security',
        },
        {
          type: 'doc',
          id: 'how-tos/verify_download',
          label: 'Verify Firefly Download',
        },
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
              label: 'IOTA SDK',
              type: 'link',
              href: '/iota-sdk/welcome',
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
            {
              type: 'category',
              label: 'Community Driven Libraries',
              collapsed: true,
              items: [
                {
                  label: 'tanglePHP',
                  type: 'link',
                  href: 'https://tanglephp.com',
                },
                {
                  label: 'IotaWallet.NET',
                  type: 'link',
                  href: 'https://github.com/IOTA-NET/IotaWallet.NET',
                },
              ],
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
                {
                  type: 'category',
                  label: 'Community Driven INX Plugins',
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
