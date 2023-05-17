module.exports = [
  {
    type: 'category',
    label: 'Ecosystem Overview',
    link: {
      type: 'doc',
      id: 'get-started/ecosystem-overview/introduction',
    },
    items: [
      'get-started/ecosystem-overview/layer-1-landscape',
      'get-started/ecosystem-overview/networks',
      {
        type: 'category',
        label: 'About Nodes',
        link: {
          type: 'doc',
          id: 'get-started/ecosystem-overview/nodes/about-nodes',
        },
        items: [
          'get-started/ecosystem-overview/nodes/about-nodes',
          'get-started/ecosystem-overview/nodes/hornet',
          'get-started/ecosystem-overview/nodes/become-a-node-operator',
        ],
      },
      'get-started/ecosystem-overview/clients',
      'get-started/ecosystem-overview/tokens-and-wallets',
    ],
  },
  {
    type: 'category',
    label: 'How It Works',
    items: [
      'get-started/welcome',
      'get-started/tangle',
      'get-started/coordinator',
      'get-started/data-and-value-transfer',
      'get-started/why-are-iota-and-shimmer-feeless',
      'get-started/messages',
      'get-started/outputs',
      'get-started/energy-efficiency',
      'get-started/maintenance',
      'get-started/role-of-token',
      'get-started/dust-protection',
      {
        type: 'category',
        label: 'Smart Contracts',
        items: [
          'get-started/smart-contracts/smart-contracts-introduction',
          'get-started/smart-contracts/smart-contracts-VM-and-languages',
          'get-started/smart-contracts/smart-contracts-validators',
          'get-started/smart-contracts/smart-contracts-chains',
          'get-started/smart-contracts/smart-contracts-dapps',
          'get-started/smart-contracts/smart-contracts-consensus',
          'get-started/smart-contracts/smart-contracts-tangle',
          'get-started/smart-contracts/smart-contracts-community-tutorials',
        ],
      },
      'get-started/native-assets',
      'get-started/glossary',
      'get-started/faqs',
    ],
  },

  {
    type: 'category',
    label: 'What is Stardust?',
    items: [
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/what-is-stardust',
        label: `Introduction`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/rethink-utxo',
        label: `Rethinking UTXO`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/sc-support',
        label: `Smart Contract Chain Support`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/tokenization',
        label: `Tokenization`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/storage-deposit',
        label: `Storage Deposit`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/unlock-conditions',
        label: `Output Unlock Conditions`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/output-features',
        label: `Output Features`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/protecting-users',
        label: `Protecting Users`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/data-processing',
        label: `Offloading Data Processing`,
      },
      {
        type: 'doc',
        id: 'get-started/what-is-stardust/dynamic-pow',
        label: `Dynamic PoW`,
      },
      {
        type: 'doc',
        id: 'get-started/protocol-tip',
        label: 'Protocol TIPs',
      },
    ],
  },
  {
    type: 'category',
    label: 'Wallets',
    items: [
      'get-started/wallets/what-is-a-wallet',
      {
        type: 'category',
        label: 'Official',
        items: [
          {
            type: 'category',
            label: 'Firefly',
            items: [
              'get-started/wallets/firefly/general',
              'get-started/wallets/firefly/user-guide',
              'get-started/wallets/firefly/user-guide-ledger',
              'get-started/wallets/firefly/faq-and-troubleshooting',
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
      'get-started/research/research-outline',
      'get-started/research/research-papers',
      'get-started/research/iota-2.0-coordicide',
      'get-started/research/iota-devnet-wallet',
    ],
  },
  {
    type: 'category',
    label: 'IOTA Token',
    items: [
      'get-started/iota-token/buying-iota',
      'get-started/iota-token/staking-iota',
    ],
  },
  {
    type: 'category',
    label: 'Shimmer Token',
    items: ['get-started/token/buying'],
  },
  {
    type: 'category',
    label: 'Governance',
    items: [
      'get-started/governance/shimmer-governance-intro',
      'get-started/governance/governance-tech',
      'get-started/governance/the-shimmer-governance-framework',
      'get-started/governance/shimmer-community-grant-committee',
      'get-started/governance/governance-scope',
      'get-started/governance/shimmer-firefly-governance-guide',
    ],
  },

  {
    type: 'category',
    label: 'Use Cases',
    items: [
      'get-started/use-cases/data-confidence',
      'get-started/use-cases/eco-social-projects',
      'get-started/use-cases/healthcare',
      'get-started/use-cases/industry-applications',
      'get-started/use-cases/mobility',
      'get-started/use-cases/real-estate',
      'get-started/use-cases/trade-and-supply-chain',
    ],
  },
];
