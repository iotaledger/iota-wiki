module.exports = {
  about: [
    {
      type: 'category',
      label: 'How It Works',
      items: [
        'welcome',
        'tangle',
        'coordinator',
        'data-and-value-transfer',
        'why-are-iota-and-shimmer-feeless',
        'messages',
        'outputs',
        'energy-efficiency',
        'maintenance',
        'role-of-token',
        'dust-protection',
        {
          type: 'category',
          label: 'Smart Contracts',
          items: [
            'smart-contracts/smart-contracts-introduction',
            'smart-contracts/smart-contracts-VM-and-languages',
            'smart-contracts/smart-contracts-validators',
            'smart-contracts/smart-contracts-chains',
            'smart-contracts/smart-contracts-dapps',
            'smart-contracts/smart-contracts-consensus',
            'smart-contracts/smart-contracts-tangle',
            'smart-contracts/smart-contracts-community-tutorials',
          ],
        },
        'native-assets',
        'glossary',
        'faqs',
      ],
    },

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
          link: {
            type: 'doc',
            id: 'what-is-shimmer/nodes/about-nodes',
          },
          items: [
            'what-is-shimmer/nodes/about-nodes',
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
      label: 'What is Stardust?',
      items: [
        {
          type: 'doc',
          id: 'what-is-stardust/what-is-stardust',
          label: `Introduction`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/rethink-utxo',
          label: `Rethinking UTXO`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/sc-support',
          label: `Smart Contract Chain Support`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/tokenization',
          label: `Tokenization`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/storage-deposit',
          label: `Storage Deposit`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/unlock-conditions',
          label: `Output Unlock Conditions`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/output-features',
          label: `Output Features`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/protecting-users',
          label: `Protecting Users`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/data-processing',
          label: `Offloading Data Processing`,
        },
        {
          type: 'doc',
          id: 'what-is-stardust/dynamic-pow',
          label: `Dynamic PoW`,
        },
        {
          type: 'doc',
          id: 'protocol-tip',
          label: 'Protocol TIPs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Wallets',
      items: [
        'wallets/what-is-a-wallet',
        {
          type: 'category',
          label: 'Official',
          items: [
            {
              type: 'category',
              label: 'Firefly',
              items: [
                'wallets/firefly/general',
                'wallets/firefly/user-guide',
                'wallets/firefly/user-guide-ledger',
                'wallets/firefly/faq-and-troubleshooting',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Third Party',
          items: [
            {
              type: 'link',
              label: 'Tanglepay',
              href: 'https://tanglepay.com',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Research',
      items: [
        'research/research-outline',
        'research/research-papers',
        'research/iota-2.0-coordicide',
        {
          type: 'link',
          label: 'Coordicide Specs',
          href: '/IOTA-2.0-Research-Specifications/Preface',
        },
        {
          type: 'link',
          label: 'GoShimmer',
          href: '/goshimmer/welcome',
        },
        'research/iota-devnet-wallet',
      ],
    },
    {
      type: 'category',
      label: 'IOTA Token',
      items: ['iota-token/buying-iota', 'iota-token/staking-iota'],
    },
    {
      type: 'category',
      label: 'Shimmer Token',
      items: ['token/buying'],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/shimmer-governance-intro',
        'governance/governance-tech',
        'governance/the-shimmer-governance-framework',
        'governance/shimmer-community-grant-committee',
        'governance/governance-scope',
        'governance/shimmer-firefly-governance-guide',
      ],
    },

    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/data-confidence',
        'use-cases/eco-social-projects',
        'use-cases/healthcare',
        'use-cases/industry-applications',
        'use-cases/mobility',
        'use-cases/real-estate',
        'use-cases/trade-and-supply-chain',
      ],
    },
  ],
};
