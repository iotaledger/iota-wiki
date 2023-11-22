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
          label: 'Chrysalis',
          collapsed: true,
          items: [
            'protocols/chrysalis/introduction',
            {
              type: 'category',
              label: 'Core Concepts',
              items: [
                'protocols/chrysalis/core-concepts/white-flag-consensus',
                'protocols/chrysalis/core-concepts/switch-to-UTXO',
                'protocols/chrysalis/core-concepts/EdDSA-support',
                'protocols/chrysalis/core-concepts/binary-transaction-layout',
              ],
            },
            'protocols/chrysalis/tips',
          ],
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
          label: 'ISC Architecture',
          id: 'smart-contracts/isc-architecture',
        },
        {
          type: 'doc',
          label: 'Anatomy of a Smart Contract',
          id: 'smart-contracts/smart-contract-anatomy',
        },
        {
          type: 'doc',
          label: 'Sandbox Interface',
          id: 'smart-contracts/sandbox',
        },
        {
          type: 'doc',
          label: 'Calling a Smart Contract',
          id: 'smart-contracts/invocation',
        },
        {
          type: 'doc',
          label: 'State, Transitions and State Anchoring',
          id: 'smart-contracts/states',
        },
        {
          type: 'doc',
          label: 'State manager',
          id: 'smart-contracts/state_manager',
        },
        {
          type: 'doc',
          label: 'Validators and Access Nodes',
          id: 'smart-contracts/validators',
        },
        {
          type: 'doc',
          label: 'Consensus',
          id: 'smart-contracts/consensus',
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
