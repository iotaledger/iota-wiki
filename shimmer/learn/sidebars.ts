module.exports = {
  about: [
    {
      type: 'category',
      label: 'How It Works',
      collapsed: false,
      items: [
        'welcome',
        'tangle',
        'coordinator',
        'data-and-value-transfer',
        'outputs',
        'maintenance',
        'role-of-token',
        'dust-protection',
        {
          type: 'category',
          label: 'Smart Contracts',
          collapsed: true,
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
      ],
    },
    {
      type: 'category',
      label: 'Shimmer EVM',
      collapsed: true,
      items: [
        'shimmer-EVM/introduction',
        {
          type: 'doc',
          id: 'shimmer-EVM/bridging',
          label: 'Bridging',
        },
        {
          type: 'doc',
          id: 'shimmer-EVM/composability',
          label: 'Composability',
        },
        {
          type: 'doc',
          id: 'shimmer-EVM/feeless',
          label: 'Feeless',
        },
        {
          type: 'doc',
          id: 'shimmer-EVM/governance',
          label: 'Governance',
        },
        {
          type: 'doc',
          id: 'shimmer-EVM/multichain',
          label: 'Multichain',
        },
      ],
    },
    {
      type: 'category',
      label: 'Shimmer Token',
      collapsed: true,
      items: ['token/buying'],
    },
    {
      type: 'category',
      label: 'Governance',
      collapsed: true,
      items: [
        'governance/shimmer-governance-intro',
        'governance/governance-tech',
        'governance/the-shimmer-governance-framework',
        'governance/shimmer-community-grant-committee',
        'governance/governance-scope',
        'governance/shimmer-firefly-governance-guide',
      ],
    },
  ],
};
