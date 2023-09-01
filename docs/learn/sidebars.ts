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
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            {
              type: 'doc',
              label: 'Smart Contracts',
              id: 'smart-contracts/core_concepts/smart-contracts',
            },
            {
              type: 'doc',
              label: 'ISC Architecture',
              id: 'smart-contracts/core_concepts/isc-architecture',
            },
            {
              type: 'doc',
              label: 'Validators and Access Nodes',
              id: 'smart-contracts/core_concepts/validators',
            },
            {
              type: 'doc',
              label: 'Consensus',
              id: 'smart-contracts/core_concepts/consensus',
            },
            {
              type: 'doc',
              label: 'State manager',
              id: 'smart-contracts/core_concepts/state_manager',
            },
            {
              type: 'doc',
              label: 'State, Transitions and State Anchoring',
              id: 'smart-contracts/core_concepts/states',
            },
            {
              type: 'doc',
              label: 'Anatomy of a Smart Contract',
              id: 'smart-contracts/core_concepts/smart-contract-anatomy',
            },
            {
              type: 'doc',
              label: 'Calling a Smart Contract',
              id: 'smart-contracts/core_concepts/invocation',
            },
            {
              type: 'doc',
              label: 'Sandbox Interface',
              id: 'smart-contracts/core_concepts/sandbox',
            },
            {
              type: 'category',
              label: 'Core Contracts',
              items: [
                {
                  type: 'doc',
                  label: 'Overview',
                  id: 'smart-contracts/core_concepts/core_contracts/overview',
                },
                {
                  type: 'doc',
                  label: 'root',
                  id: 'smart-contracts/core_concepts/core_contracts/root',
                },
                {
                  type: 'doc',
                  label: 'accounts',
                  id: 'smart-contracts/core_concepts/core_contracts/accounts',
                },
                {
                  type: 'doc',
                  label: 'blob',
                  id: 'smart-contracts/core_concepts/core_contracts/blob',
                },
                {
                  type: 'doc',
                  label: 'blocklog',
                  id: 'smart-contracts/core_concepts/core_contracts/blocklog',
                },
                {
                  type: 'doc',
                  label: 'governance',
                  id: 'smart-contracts/core_concepts/core_contracts/governance',
                },
                {
                  type: 'doc',
                  label: 'errors',
                  id: 'smart-contracts/core_concepts/core_contracts/errors',
                },
                {
                  type: 'doc',
                  label: 'evm',
                  id: 'smart-contracts/core_concepts/core_contracts/evm',
                },
              ],
            },
            {
              type: 'category',
              label: 'Accounts',
              items: [
                {
                  type: 'doc',
                  label: 'How Accounts Work',
                  id: 'smart-contracts/core_concepts/accounts/how-accounts-work',
                },
                {
                  type: 'doc',
                  label: 'How To Deposit To a Chain',
                  id: 'smart-contracts/core_concepts/accounts/how-to-deposit-to-a-chain',
                },
                {
                  type: 'doc',
                  label: 'How To Withdraw From a Chain',
                  id: 'smart-contracts/core_concepts/accounts/how-to-withdraw-from-a-chain',
                },
                {
                  type: 'doc',
                  label: 'View Account Balances',
                  id: 'smart-contracts/core_concepts/accounts/view-account-balances',
                },
                {
                  type: 'doc',
                  label: 'The Common Account',
                  id: 'smart-contracts/core_concepts/accounts/the-common-account',
                },
              ],
            },
          ],
        },
      ],
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
    'glossary',
  ],
};
