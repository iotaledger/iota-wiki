module.exports = {
  build: [
    {
      type: 'category',
      label: 'Chrysalis',
      collapsed: true,
      items: [
        'chrysalis/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'chrysalis/core-concepts/white-flag-consensus',
            'chrysalis/core-concepts/switch-to-UTXO',
            'chrysalis/core-concepts/EdDSA-support',
            'chrysalis/core-concepts/binary-transaction-layout',
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
              id: 'chrysalis/nodes/node-software',
            },
            {
              label: 'Hornet',
              type: 'link',
              href: '/hornet/welcome',
            },
            {
              label: 'Chronicle',
              type: 'link',
              href: '/chronicle/welcome',
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
              id: 'chrysalis/nodes/about-nodes',
            },
            'chrysalis/nodes/become-a-node-operator',
            {
              type: 'category',
              label: 'API Reference',
              collapsed: true,
              items: [
                'chrysalis/nodes/api_reference',
              ],
            },
            {
              type: 'category',
              label: 'Explanations',
              collapsed: false,
              items: [
                'chrysalis/nodes/explanations/nodes_101',
                'chrysalis/nodes/explanations/security_101',
              ],
            },
          ],
        },
        'chrysalis/tips',
      ],
    },
    {
      type: 'category',
      label: 'Stardust',
      collapsed: true,
      items: [
        'stardust/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'stardust/core-concepts/multi-asset-ledger',
            'stardust/core-concepts/consensus',
            'stardust/core-concepts/output-unlock-conditions',
            'stardust/core-concepts/output-features',
            'stardust/core-concepts/storage-deposit',
          ],
        },
        {
          type: 'category',
          label: 'About Nodes',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'stardust/nodes/about-nodes',
          },
          items: [
            'stardust/nodes/about-nodes',
            'stardust/nodes/hornet',
            'stardust/nodes/become-a-node-operator',
          ],
        },
        'stardust/tips',
      ],
    },
    {
      type: 'category',
      label: 'IOTA 2.0',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'iota2.0/introduction/five-principles',
            'iota2.0/introduction/digital-autonomy',
          ],
        },
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'iota2.0/core-concepts/data-structures',
            'iota2.0/core-concepts/data-flow',
            'iota2.0/core-concepts/networking',
            'iota2.0/core-concepts/communication',
            'iota2.0/core-concepts/consensus',
            'iota2.0/core-concepts/mana',
            'iota2.0/core-concepts/validators',
          ],
        },
        'iota2.0/tips',
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
    'glossary'
  ],
};
