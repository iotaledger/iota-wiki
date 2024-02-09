module.exports = {
  build: [
    {
      type: 'category',
      label: 'Protocols',
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'protocols/introduction',
        },
        {
          type: 'doc',
          label: 'The Coordinator',
          id: 'protocols/coordinator',
        },
        {
          type: 'category',
          label: 'Stardust',
          collapsed: true,
          items: [
            'protocols/stardust/introduction',
            {
              type: 'category',
              label: 'Core Concepts',
              items: [
                'protocols/stardust/core-concepts/multi-asset-ledger',
                'protocols/stardust/core-concepts/output-unlock-conditions',
                'protocols/stardust/core-concepts/output-features',
                'protocols/stardust/core-concepts/storage-deposit',
              ],
            },
            'protocols/stardust/tips',
          ],
        },
        {
          type: 'category',
          label: 'IOTA 2.0',
          collapsed: true,
          items: [
            'protocols/iota2.0/introduction-to-digital-autonomy',
            {
              type: 'category',
              label: 'Core Concepts',
              items: [
                'protocols/iota2.0/core-concepts/data-flow',
                'protocols/iota2.0/core-concepts/data-structures',
                'protocols/iota2.0/core-concepts/mana',
                'protocols/iota2.0/core-concepts/mana-calculator',
                {
                  type: 'category',
                  label: 'Consensus',
                  items: [
                    'protocols/iota2.0/core-concepts/consensus/introduction',
                    'protocols/iota2.0/core-concepts/consensus/preliminaries',
                    'protocols/iota2.0/core-concepts/consensus/tip-selection-algorithm',
                    'protocols/iota2.0/core-concepts/consensus/consensus-flags',
                    'protocols/iota2.0/core-concepts/consensus/chain-switching-rule',
                    'protocols/iota2.0/core-concepts/consensus/relevant-algorithms',
                  ],
                },
                'protocols/iota2.0/core-concepts/validators',
                'protocols/iota2.0/core-concepts/communication-layer',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'smart-contracts/introduction',
        },
        {
          type: 'doc',
          label: 'Protocol Overview',
          id: 'smart-contracts/protocol-overview',
        },
        {
          type: 'doc',
          label: 'Smart Contract Execution',
          id: 'smart-contracts/smart-contract-execution',
        },
        {
          type: 'doc',
          label: 'Account, Addresses & Fees',
          id: 'smart-contracts/accounts-addresses-and-fees',
        },
        {
          type: 'doc',
          label: 'Chain Owners, Validators, & Access Nodes',
          id: 'smart-contracts/chain-owners-validators-and-access-nodes',
        },
        {
          type: 'doc',
          label: 'Consensus',
          id: 'smart-contracts/consensus',
        },
        {
          type: 'doc',
          label: 'State Management & Anchoring',
          id: 'smart-contracts/state-management-and-anchoring',
        },
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      collapsed: true,
      items: [
        'governance/governance-intro',
        'governance/governance-tech',
        'governance/the-shimmer-governance-framework',
        'governance/shimmer-community-grant-committee',
        'governance/governance-scope',
        'governance/firefly-governance-guide',
      ],
    },
    'glossary',
  ],
};
