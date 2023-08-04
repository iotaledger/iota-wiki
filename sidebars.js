module.exports = {
  'get-started': [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'IOTA',
          collapsed: false,
          items: [
            'get-started/introduction/iota/introduction',
            'get-started/introduction/iota/iota-token',
            'get-started/introduction/iota/staking',
          ],
        },
        {
          type: 'category',
          label: 'Shimmer',
          collapsed: false,
          items: [
            'get-started/introduction/shimmer/introduction',
            'get-started/introduction/shimmer/shimmer-token',
            'get-started/introduction/shimmer/governance',
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: 'Community Links',
      id: 'get-started/community-links',
    },
    {
      type: 'category',
      label: 'Programmes',
      items: [
        'get-started/programmes/touchpoint',
        'get-started/programmes/EDF-grant-programme',
        'get-started/programmes/bug-bounties',
      ],
    },
    {
      type: 'category',
      label: 'Wallets',
      items: [
        'get-started/wallets/firefly',
        { type: 'link', label: 'TanglePay', href: 'https://tanglepay.com/' },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'link',
          label: 'IOTA Explorer',
          href: 'https://explorer.iota.org/mainnet',
        },
        {
          type: 'link',
          label: 'Shimmer Explorer',
          href: 'https://explorer.chrysalis.network/',
        },
      ],
    },
    'get-started/research-papers',
    'get-started/glossary',
    'get-started/faq',
  ],
  learn: [
    {
      type: 'category',
      label: 'Stardust',
      collapsed: true,
      items: [
        'learn/stardust/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'learn/stardust/core-concepts/multi-asset-ledger',
            'learn/stardust/core-concepts/consensus',
            'learn/stardust/core-concepts/output-unlock-conditions',
            'learn/stardust/core-concepts/output-features',
            'learn/stardust/core-concepts/storage-deposit',
          ],
        },
        'learn/stardust/tips',
      ],
    },
    {
      type: 'category',
      label: 'Chrysalis',
      collapsed: true,
      items: [
        'learn/chrysalis/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'learn/chrysalis/core-concepts/white-flag-consensus',
            'learn/chrysalis/core-concepts/switch-to-UTXO',
            'learn/chrysalis/core-concepts/EdDSA-support',
            'learn/chrysalis/core-concepts/binary-transaction-layout',
          ],
        },
        'learn/chrysalis/tips',
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
              id: 'learn/smart-contracts/core_concepts/smart-contracts',
            },
            {
              type: 'doc',
              label: 'ISC Architecture',
              id: 'learn/smart-contracts/core_concepts/isc-architecture',
            },
            {
              type: 'doc',
              label: 'Validators and Access Nodes',
              id: 'learn/smart-contracts/core_concepts/validators',
            },
            {
              type: 'doc',
              label: 'Consensus',
              id: 'learn/smart-contracts/core_concepts/consensus',
            },
            {
              type: 'doc',
              label: 'State manager',
              id: 'learn/smart-contracts/core_concepts/state_manager',
            },
            {
              type: 'doc',
              label: 'State, Transitions and State Anchoring',
              id: 'learn/smart-contracts/core_concepts/states',
            },
            {
              type: 'doc',
              label: 'Anatomy of a Smart Contract',
              id: 'learn/smart-contracts/core_concepts/smart-contract-anatomy',
            },
            {
              type: 'doc',
              label: 'Calling a Smart Contract',
              id: 'learn/smart-contracts/core_concepts/invocation',
            },
            {
              type: 'doc',
              label: 'Sandbox Interface',
              id: 'learn/smart-contracts/core_concepts/sandbox',
            },
            {
              type: 'category',
              label: 'Core Contracts',
              items: [
                {
                  type: 'doc',
                  label: 'Overview',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/overview',
                },
                {
                  type: 'doc',
                  label: 'root',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/root',
                },
                {
                  type: 'doc',
                  label: 'accounts',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/accounts',
                },
                {
                  type: 'doc',
                  label: 'blob',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/blob',
                },
                {
                  type: 'doc',
                  label: 'blocklog',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/blocklog',
                },
                {
                  type: 'doc',
                  label: 'governance',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/governance',
                },
                {
                  type: 'doc',
                  label: 'errors',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/errors',
                },
                {
                  type: 'doc',
                  label: 'evm',
                  id: 'learn/smart-contracts/core_concepts/core_contracts/evm',
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
                  id: 'learn/smart-contracts/core_concepts/accounts/how-accounts-work',
                },
                {
                  type: 'doc',
                  label: 'How To Deposit To a Chain',
                  id: 'learn/smart-contracts/core_concepts/accounts/how-to-deposit-to-a-chain',
                },
                {
                  type: 'doc',
                  label: 'How To Withdraw From a Chain',
                  id: 'learn/smart-contracts/core_concepts/accounts/how-to-withdraw-from-a-chain',
                },
                {
                  type: 'doc',
                  label: 'View Account Balances',
                  id: 'learn/smart-contracts/core_concepts/accounts/view-account-balances',
                },
                {
                  type: 'doc',
                  label: 'The Common Account',
                  id: 'learn/smart-contracts/core_concepts/accounts/the-common-account',
                },
              ],
            },
          ],
        },
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
            'learn/iota2.0/introduction/five-principles',
            'learn/iota2.0/introduction/digital-autonomy',
          ],
        },
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'learn/iota2.0/core-concepts/consensus',
            'learn/iota2.0/core-concepts/mana',
            'learn/iota2.0/core-concepts/data-flow',
            'learn/iota2.0/core-concepts/networking',
            'learn/iota2.0/core-concepts/data-structures',
            'learn/iota2.0/core-concepts/validators',
            'learn/iota2.0/core-concepts/communication',
          ],
        },
        'learn/iota2.0/tips',
      ],
    },
  ],
  'build/getting-started': [
    {
      type: 'category',
      label: 'Networks',
      collapsed: true,
      items: [
        'build/getting-started/networks/legacy-mainnet',
        'build/getting-started/networks/mainnet',
        'build/getting-started/networks/overview',
        'build/getting-started/networks/public-testnets',
        'build/getting-started/networks/shimmer',
      ],
    },
    {
      type: 'category',
      label: 'Community Libs',
      collapsed: true,
      items: [
        { type: 'link', label: 'tanglePHP', href: 'https://tanglephp.com/' },
        {
          type: 'link',
          label: 'IotaWallet.NET',
          href: 'https://github.com/IOTA-NET/IotaWallet.NET',
        },
      ],
    },
  ],
  'build/identity.rs/0.7-alpha': [
    {
      type: 'doc',
      id: 'build/identity.rs/0.7-alpha/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'build/identity.rs/0.7-alpha/decentralized_identity',
      label: 'Decentralized Identity',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'build/identity.rs/0.7-alpha/getting_started/overview',
        'build/identity.rs/0.7-alpha/getting_started/install',
        'build/identity.rs/0.7-alpha/getting_started/create_and_publish',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          'Decentralized Identifiers (DID)': [
            'build/identity.rs/0.7-alpha/concepts/decentralized_identifiers/overview',
            'build/identity.rs/0.7-alpha/concepts/decentralized_identifiers/alias',
            'build/identity.rs/0.7-alpha/concepts/decentralized_identifiers/create',
            'build/identity.rs/0.7-alpha/concepts/decentralized_identifiers/update',
            'build/identity.rs/0.7-alpha/concepts/decentralized_identifiers/resolve',
            'build/identity.rs/0.7-alpha/concepts/decentralized_identifiers/delete',
          ],
          'Verifiable Credentials': [
            'build/identity.rs/0.7-alpha/concepts/verifiable_credentials/overview',
            'build/identity.rs/0.7-alpha/concepts/verifiable_credentials/create',
            'build/identity.rs/0.7-alpha/concepts/verifiable_credentials/revocation',
            'build/identity.rs/0.7-alpha/concepts/verifiable_credentials/verifiable_presentations',
          ],
          'Domain Linkage': [
            'build/identity.rs/0.7-alpha/concepts/domain_linkage/domain_linkage',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Programming Languages',
      collapsed: true,
      items: [
        'build/identity.rs/0.7-alpha/libraries/overview',
        {
          type: 'category',
          label: 'Rust',
          collapsed: true,
          items: ['build/identity.rs/0.7-alpha/libraries/rust/getting_started'],
        },
        {
          type: 'category',
          label: 'WASM',
          collapsed: true,
          items: [
            'build/identity.rs/0.7-alpha/libraries/wasm/getting_started',
            'build/identity.rs/0.7-alpha/libraries/wasm/api_reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'build/identity.rs/0.7-alpha/tutorials/overview',
        'build/identity.rs/0.7-alpha/tutorials/validate_university_degree',
      ],
    },
    {
      type: 'category',
      label: 'Specifications',
      collapsed: true,
      items: [
        'build/identity.rs/0.7-alpha/specs/overview',
        {
          type: 'category',
          label: 'IOTA DID',
          collapsed: true,
          items: [
            'build/identity.rs/0.7-alpha/specs/did/overview',
            'build/identity.rs/0.7-alpha/specs/did/iota_did_method_spec',
          ],
        },
        'build/identity.rs/0.7-alpha/specs/revocation_bitmap_2022',
      ],
    },
    'build/identity.rs/0.7-alpha/glossary',
    'build/identity.rs/0.7-alpha/contribute',
    'build/identity.rs/0.7-alpha/workflow',
    'build/identity.rs/0.7-alpha/contact',
    'build/identity.rs/0.7-alpha/faq',
  ],
  'build/identity.rs/next': [
    {
      type: 'doc',
      id: 'build/identity.rs/next/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'build/identity.rs/next/decentralized_identity',
      label: 'Decentralized Identity',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'build/identity.rs/next/getting_started/overview',
        'build/identity.rs/next/getting_started/install',
        'build/identity.rs/next/getting_started/create_and_publish',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          'Decentralized Identifiers (DID)': [
            'build/identity.rs/next/concepts/decentralized_identifiers/overview',
            'build/identity.rs/next/concepts/decentralized_identifiers/alias',
            'build/identity.rs/next/concepts/decentralized_identifiers/create',
            'build/identity.rs/next/concepts/decentralized_identifiers/update',
            'build/identity.rs/next/concepts/decentralized_identifiers/resolve',
            'build/identity.rs/next/concepts/decentralized_identifiers/delete',
          ],
          'Verifiable Credentials': [
            'build/identity.rs/next/concepts/verifiable_credentials/overview',
            'build/identity.rs/next/concepts/verifiable_credentials/create',
            'build/identity.rs/next/concepts/verifiable_credentials/revocation',
            'build/identity.rs/next/concepts/verifiable_credentials/verifiable_presentations',
          ],
          'Domain Linkage': [
            'build/identity.rs/next/concepts/domain_linkage/domain_linkage',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Programming Languages',
      collapsed: true,
      items: [
        'build/identity.rs/next/libraries/overview',
        {
          type: 'category',
          label: 'Rust',
          collapsed: true,
          items: ['build/identity.rs/next/libraries/rust/getting_started'],
        },
        {
          type: 'category',
          label: 'WASM',
          collapsed: true,
          items: [
            'build/identity.rs/next/libraries/wasm/getting_started',
            'build/identity.rs/next/libraries/wasm/api_reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'build/identity.rs/next/tutorials/overview',
        'build/identity.rs/next/tutorials/validate_university_degree',
      ],
    },
    {
      type: 'category',
      label: 'Specifications',
      collapsed: true,
      items: [
        'build/identity.rs/next/specs/overview',
        {
          type: 'category',
          label: 'IOTA DID',
          collapsed: true,
          items: [
            'build/identity.rs/next/specs/did/overview',
            'build/identity.rs/next/specs/did/iota_did_method_spec',
          ],
        },
        'build/identity.rs/next/specs/revocation_bitmap_2022',
      ],
    },
    'build/identity.rs/next/glossary',
    'build/identity.rs/next/contribute',
    'build/identity.rs/next/workflow',
    'build/identity.rs/next/contact',
    'build/identity.rs/next/faq',
  ],
  'build/identity.rs/v0.5.0': [
    {
      type: 'doc',
      id: 'build/identity.rs/v0.5.0/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'build/identity.rs/v0.5.0/decentralized_identity',
      label: 'Decentralized Identity',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'build/identity.rs/v0.5.0/getting_started/overview',
        'build/identity.rs/v0.5.0/getting_started/install',
        'build/identity.rs/v0.5.0/getting_started/create_and_publish',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          'Decentralized Identifiers (DID)': [
            'build/identity.rs/v0.5.0/concepts/decentralized_identifiers/overview',
            'build/identity.rs/v0.5.0/concepts/decentralized_identifiers/create',
            'build/identity.rs/v0.5.0/concepts/decentralized_identifiers/update',
            'build/identity.rs/v0.5.0/concepts/decentralized_identifiers/resolve',
            'build/identity.rs/v0.5.0/concepts/decentralized_identifiers/private_tangle',
          ],
          'Verifiable Credentials': [
            'build/identity.rs/v0.5.0/concepts/verifiable_credentials/overview',
            'build/identity.rs/v0.5.0/concepts/verifiable_credentials/create',
            'build/identity.rs/v0.5.0/concepts/verifiable_credentials/revoke',
            'build/identity.rs/v0.5.0/concepts/verifiable_credentials/verifiable_presentations',
          ],
          'Advanced Concepts': [
            'build/identity.rs/v0.5.0/concepts/advanced/overview',
            'build/identity.rs/v0.5.0/concepts/advanced/did_messages',
            'build/identity.rs/v0.5.0/concepts/advanced/storage_interface',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Programming Languages',
      collapsed: true,
      items: [
        'build/identity.rs/v0.5.0/libraries/overview',
        {
          type: 'category',
          label: 'Rust',
          collapsed: true,
          items: [
            'build/identity.rs/v0.5.0/libraries/rust/getting_started',
            'build/identity.rs/v0.5.0/libraries/rust/api_reference',
          ],
        },
        {
          type: 'category',
          label: 'WASM',
          collapsed: true,
          items: [
            'build/identity.rs/v0.5.0/libraries/wasm/getting_started',
            'build/identity.rs/v0.5.0/libraries/wasm/api_reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'build/identity.rs/v0.5.0/tutorials/overview',
        'build/identity.rs/v0.5.0/tutorials/validate_university_degree',
      ],
    },
    {
      type: 'category',
      label: 'Specifications',
      collapsed: true,
      items: [
        'build/identity.rs/v0.5.0/specs/overview',
        {
          type: 'category',
          label: 'IOTA DID',
          collapsed: true,
          items: [
            'build/identity.rs/v0.5.0/specs/did/overview',
            'build/identity.rs/v0.5.0/specs/did/iota_did_method_spec',
          ],
        },
        {
          type: 'category',
          label: 'IOTA DIDComm',
          collapsed: true,
          items: [
            'build/identity.rs/v0.5.0/specs/didcomm/overview',
            {
              type: 'category',
              label: 'Protocols',
              collapsed: true,
              items: [
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/connection',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/authentication',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/presentation',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/issuance',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/signing',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/revocation',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/revocation-options',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/post',
                'build/identity.rs/v0.5.0/specs/didcomm/protocols/termination',
              ],
            },
            {
              type: 'category',
              label: 'Resources',
              collapsed: true,
              items: [
                'build/identity.rs/v0.5.0/specs/didcomm/resources/credential-info',
                'build/identity.rs/v0.5.0/specs/didcomm/resources/problem-reports',
              ],
            },
            'build/identity.rs/v0.5.0/specs/didcomm/CHANGELOG',
          ],
        },
      ],
    },
    'build/identity.rs/v0.5.0/glossary',
    'build/identity.rs/v0.5.0/contribute',
    'build/identity.rs/v0.5.0/workflow',
    'build/identity.rs/v0.5.0/contact',
    'build/identity.rs/v0.5.0/faq',
  ],
  'build/identity.rs/v0.6.0': [
    {
      type: 'doc',
      id: 'build/identity.rs/v0.6.0/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'build/identity.rs/v0.6.0/decentralized_identity',
      label: 'Decentralized Identity',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'build/identity.rs/v0.6.0/getting_started/overview',
        'build/identity.rs/v0.6.0/getting_started/install',
        'build/identity.rs/v0.6.0/getting_started/create_and_publish',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          'Decentralized Identifiers (DID)': [
            'build/identity.rs/v0.6.0/concepts/decentralized_identifiers/overview',
            'build/identity.rs/v0.6.0/concepts/decentralized_identifiers/create',
            'build/identity.rs/v0.6.0/concepts/decentralized_identifiers/update',
            'build/identity.rs/v0.6.0/concepts/decentralized_identifiers/resolve',
            'build/identity.rs/v0.6.0/concepts/decentralized_identifiers/private_tangle',
          ],
          'Verifiable Credentials': [
            'build/identity.rs/v0.6.0/concepts/verifiable_credentials/overview',
            'build/identity.rs/v0.6.0/concepts/verifiable_credentials/create',
            'build/identity.rs/v0.6.0/concepts/verifiable_credentials/revocation',
            'build/identity.rs/v0.6.0/concepts/verifiable_credentials/verifiable_presentations',
          ],
          'Advanced Concepts': [
            'build/identity.rs/v0.6.0/concepts/advanced/overview',
            'build/identity.rs/v0.6.0/concepts/advanced/did_messages',
            'build/identity.rs/v0.6.0/concepts/advanced/storage_interface',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Programming Languages',
      collapsed: true,
      items: [
        'build/identity.rs/v0.6.0/libraries/overview',
        {
          type: 'category',
          label: 'Rust',
          collapsed: true,
          items: ['build/identity.rs/v0.6.0/libraries/rust/getting_started'],
        },
        {
          type: 'category',
          label: 'WASM',
          collapsed: true,
          items: [
            'build/identity.rs/v0.6.0/libraries/wasm/getting_started',
            'build/identity.rs/v0.6.0/libraries/wasm/api_reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'build/identity.rs/v0.6.0/tutorials/overview',
        'build/identity.rs/v0.6.0/tutorials/validate_university_degree',
      ],
    },
    {
      type: 'category',
      label: 'Specifications',
      collapsed: true,
      items: [
        'build/identity.rs/v0.6.0/specs/overview',
        'build/identity.rs/v0.6.0/specs/revocation_bitmap_2022',
        {
          type: 'category',
          label: 'IOTA DID',
          collapsed: true,
          items: [
            'build/identity.rs/v0.6.0/specs/did/overview',
            'build/identity.rs/v0.6.0/specs/did/iota_did_method_spec',
          ],
        },
        {
          type: 'category',
          label: 'IOTA DIDComm',
          collapsed: true,
          items: [
            'build/identity.rs/v0.6.0/specs/didcomm/overview',
            {
              type: 'category',
              label: 'Protocols',
              collapsed: true,
              items: [
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/connection',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/authentication',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/presentation',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/issuance',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/signing',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/revocation',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/revocation-options',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/post',
                'build/identity.rs/v0.6.0/specs/didcomm/protocols/termination',
              ],
            },
            {
              type: 'category',
              label: 'Resources',
              collapsed: true,
              items: [
                'build/identity.rs/v0.6.0/specs/didcomm/resources/credential-info',
                'build/identity.rs/v0.6.0/specs/didcomm/resources/problem-reports',
              ],
            },
            'build/identity.rs/v0.6.0/specs/didcomm/CHANGELOG',
          ],
        },
      ],
    },
    'build/identity.rs/v0.6.0/glossary',
    'build/identity.rs/v0.6.0/contribute',
    'build/identity.rs/v0.6.0/workflow',
    'build/identity.rs/v0.6.0/contact',
    'build/identity.rs/v0.6.0/faq',
  ],
  'build/iota-sdk/1.0.0': [
    { type: 'doc', id: 'build/iota-sdk/1.0.0/welcome' },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          label: 'Rust',
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/getting-started/rust',
        },
        {
          label: 'Node.js',
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/getting-started/nodejs',
        },
        {
          label: 'Python',
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/getting-started/python',
        },
        {
          label: 'Wasm',
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/getting-started/wasm',
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/explanations/accounts-and-addresses',
        },
        {
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/explanations/testnet-and-test-tokens',
        },
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'build/iota-sdk/1.0.0/how-tos/introduction',
        {
          type: 'category',
          label: 'Accounts and Addresses',
          items: [
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/create-mnemonic',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/create-account',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/list-accounts',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/check-balance',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/create-address',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/list-addresses',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/list-transactions',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/list-outputs',
            'build/iota-sdk/1.0.0/how-tos/accounts-and-addresses/consolidate-outputs',
          ],
        },
        {
          type: 'category',
          label: 'Simple Transaction',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/iota-sdk/1.0.0/how-tos/simple-transaction',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced Transactions',
          items: [
            {
              type: 'autogenerated',
              dirName:
                'docs/build/iota-sdk/1.0.0/how-tos/advanced-transactions',
            },
          ],
        },
        {
          type: 'category',
          label: 'Use Aliases/NFTs as Wallets',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/iota-sdk/1.0.0/how-tos/alias-wallet',
            },
          ],
        },
        {
          type: 'category',
          label: 'Native Tokens',
          items: [
            'build/iota-sdk/1.0.0/how-tos/native-tokens/create',
            'build/iota-sdk/1.0.0/how-tos/native-tokens/melt',
            'build/iota-sdk/1.0.0/how-tos/native-tokens/mint',
            'build/iota-sdk/1.0.0/how-tos/native-tokens/send',
            'build/iota-sdk/1.0.0/how-tos/native-tokens/burn',
            'build/iota-sdk/1.0.0/how-tos/native-tokens/destroy-foundry',
          ],
        },
        {
          type: 'category',
          label: 'Sign And Verify Ed25519',
          items: [
            {
              type: 'autogenerated',
              dirName:
                'docs/build/iota-sdk/1.0.0/how-tos/sign-and-verify-ed25519',
            },
          ],
        },
        {
          type: 'category',
          label: 'Outputs',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/iota-sdk/1.0.0/how-tos/outputs',
            },
          ],
        },
        {
          type: 'category',
          label: 'NFTs',
          items: [
            'build/iota-sdk/1.0.0/how-tos/nfts/mint-nft',
            'build/iota-sdk/1.0.0/how-tos/nfts/send-nft',
            'build/iota-sdk/1.0.0/how-tos/nfts/burn-nft',
          ],
        },
        {
          type: 'category',
          label: 'Client',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/iota-sdk/1.0.0/how-tos/client',
            },
          ],
        },
        'build/iota-sdk/1.0.0/how-tos/exchange-guide',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/references/rust-api-reference',
          label: 'Rust',
        },
        {},
        {},
        {
          type: 'doc',
          id: 'build/iota-sdk/1.0.0/references/wasm-api-reference',
          label: 'WASM',
        },
      ],
    },
    { type: 'doc', id: 'build/iota-sdk/1.0.0/troubleshooting' },
    { type: 'doc', id: 'build/iota-sdk/1.0.0/contribute', label: 'Contribute' },
  ],
  'build/iota.js/2.0.0-rc.1': [
    { type: 'doc', id: 'build/iota.js/2.0.0-rc.1/welcome', label: 'Welcome' },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'build/iota.js/2.0.0-rc.1/getting_started',
    },
    {
      type: 'category',
      label: 'How Tos',
      items: [
        'build/iota.js/2.0.0-rc.1/how_tos/run_how_tos',
        'build/iota.js/2.0.0-rc.1/how_tos/simple',
        'build/iota.js/2.0.0-rc.1/how_tos/address',
        'build/iota.js/2.0.0-rc.1/how_tos/peers',
        'build/iota.js/2.0.0-rc.1/how_tos/data',
        'build/iota.js/2.0.0-rc.1/how_tos/transaction',
        'build/iota.js/2.0.0-rc.1/how_tos/pow',
        'build/iota.js/2.0.0-rc.1/how_tos/browser',
        'build/iota.js/2.0.0-rc.1/how_tos/mint_nft',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Value Transactions',
          link: {
            type: 'doc',
            id: 'tutorials/value-transactions/introduction',
          },
          items: [
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/prepare-the-dev-env',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/generate-a-seed',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/generate-addresses',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/public-addresses',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/request-funds-from-the-faucet',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/query-output-details',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/transfer-funds',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/understanding-deposits',
            'build/iota.js/2.0.0-rc.1/tutorials/value-transactions/sweep-outputs-to-reduce-deposits',
          ],
        },
        {
          type: 'category',
          label: 'Alias Transactions',
          link: {
            type: 'doc',
            id: 'tutorials/alias-transactions/introduction',
          },
          items: [
            'build/iota.js/2.0.0-rc.1/tutorials/alias-transactions/prepare-the-dev-env',
            'build/iota.js/2.0.0-rc.1/tutorials/alias-transactions/mint-new-alias',
            'build/iota.js/2.0.0-rc.1/tutorials/alias-transactions/alias-transaction',
          ],
        },
        {
          type: 'category',
          label: 'Native Token Transactions',
          link: {
            type: 'doc',
            id: 'tutorials/native-token-transactions/introduction',
          },
          items: [
            'build/iota.js/2.0.0-rc.1/tutorials/native-token-transactions/prepare-the-dev-env',
            'build/iota.js/2.0.0-rc.1/tutorials/native-token-transactions/mint-native-tokens',
            'build/iota.js/2.0.0-rc.1/tutorials/native-token-transactions/native-tokens-transaction',
            'build/iota.js/2.0.0-rc.1/tutorials/native-token-transactions/melt-native-tokens',
          ],
        },
        {
          type: 'category',
          label: 'NFT Transactions',
          link: { type: 'doc', id: 'tutorials/nft-transactions/introduction' },
          items: [
            'build/iota.js/2.0.0-rc.1/tutorials/nft-transactions/prepare-the-dev-env',
            'build/iota.js/2.0.0-rc.1/tutorials/nft-transactions/mint-new-nft',
            'build/iota.js/2.0.0-rc.1/tutorials/nft-transactions/nft-transaction',
            'build/iota.js/2.0.0-rc.1/tutorials/nft-transactions/claim-nft',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: '@iota/iota.js',
          items: [
            {
              type: 'doc',
              id: 'build/iota.js/2.0.0-rc.1/references/client/api_ref',
              label: 'API Reference',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/client/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Enums',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/client/enums',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/client/interfaces',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/crypto.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/crypto/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/mqtt.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/mqtt/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/mqtt/interfaces',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/pow-neon.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/pow-neon/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/pow-node.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/pow-node/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/pow-wasm.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/pow-wasm/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/util.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.js/2.0.0-rc.1/references/util/classes',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'build/iota.js/2.0.0-rc.1/troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'build/iota.js/2.0.0-rc.1/contribute',
      label: 'Contribute',
    },
  ],
  'build/iota.rs/1.4.0': [
    { type: 'doc', id: 'build/iota.rs/1.4.0/welcome' },
    { type: 'doc', id: 'build/iota.rs/1.4.0/overview' },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/getting_started/required_prior_knowledge',
        },
        {
          type: 'category',
          label: 'Java',
          items: [
            'build/iota.rs/1.4.0/getting_started/java/getting_started',
            'build/iota.rs/1.4.0/getting_started/java/android_development',
          ],
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/getting_started/nodejs',
          label: 'Nodejs',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/getting_started/python',
          label: 'Python',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/getting_started/rust',
          label: 'Rust',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/getting_started/wasm',
          label: 'Wasm',
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        'build/iota.rs/1.4.0/explanations/seeds',
        'build/iota.rs/1.4.0/explanations/address_key_space',
        'build/iota.rs/1.4.0/explanations/messages_payloads_and_transactions',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'build/iota.rs/1.4.0/examples/running_examples',
        'build/iota.rs/1.4.0/examples/get_info',
        'build/iota.rs/1.4.0/examples/generate_seed',
        'build/iota.rs/1.4.0/examples/generate_addresses',
        'build/iota.rs/1.4.0/examples/get_balance',
        'build/iota.rs/1.4.0/examples/get_outputs',
        'build/iota.rs/1.4.0/examples/simple_message',
        'build/iota.rs/1.4.0/examples/get_message_data',
        'build/iota.rs/1.4.0/examples/data_message',
        'build/iota.rs/1.4.0/examples/transaction',
        'build/iota.rs/1.4.0/examples/mqtt',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/libraries/java/api_reference',
          label: 'Java',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/libraries/nodejs/api_reference',
          label: 'Node.js',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/libraries/python/api_reference',
          label: 'Python',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/libraries/rust/api_reference',
          label: 'Rust',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/1.4.0/libraries/wasm/api_reference',
          label: 'Wasm',
        },
      ],
    },
    { type: 'doc', id: 'build/iota.rs/1.4.0/specs', label: 'Specification' },
    {
      type: 'doc',
      id: 'build/iota.rs/1.4.0/troubleshooting',
      label: 'Troubleshooting',
    },
    { type: 'doc', id: 'build/iota.rs/1.4.0/contribute', label: 'Contribute' },
  ],
  'build/iota.rs/2.0.1-rc.7': [
    { type: 'doc', id: 'build/iota.rs/2.0.1-rc.7/welcome' },
    { type: 'doc', id: 'build/iota.rs/2.0.1-rc.7/overview' },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting_started/getting_started' },
      items: [
        {
          type: 'doc',
          id: 'build/iota.rs/2.0.1-rc.7/getting_started/rust',
          label: 'Rust',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/2.0.1-rc.7/getting_started/nodejs',
          label: 'Node.js',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/2.0.1-rc.7/getting_started/java',
          label: 'Java',
        },
        {
          type: 'doc',
          id: 'build/iota.rs/2.0.1-rc.7/getting_started/python',
          label: 'Python',
        },
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/build/iota.rs/2.0.1-rc.7/how_tos',
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'doc',
          id: 'build/iota.rs/2.0.1-rc.7/libraries/rust/api_reference',
          label: 'Rust',
        },
        {
          type: 'category',
          label: 'Node.js',
          items: [
            {
              type: 'doc',
              id: 'build/iota.rs/2.0.1-rc.7/libraries/nodejs/references/api_ref',
              label: 'API Reference',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.rs/2.0.1-rc.7/libraries/nodejs/references/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Enums',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.rs/2.0.1-rc.7/libraries/nodejs/references/enums',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/iota.rs/2.0.1-rc.7/libraries/nodejs/references/interfaces',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'build/iota.rs/2.0.1-rc.7/libraries/java/api_reference',
          label: 'Java',
        },
        {
          type: 'category',
          label: 'Python',
          items: [
            {
              type: 'autogenerated',
              dirName:
                'docs/build/iota.rs/2.0.1-rc.7/libraries/python/references/iota_client',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'build/iota.rs/2.0.1-rc.7/troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'build/iota.rs/2.0.1-rc.7/contribute',
      label: 'Contribute',
    },
  ],
  'build/streams/0.2.0': [
    { type: 'doc', id: 'build/streams/0.2.0/welcome' },
    { type: 'doc', id: 'build/streams/0.2.0/overview' },
    { type: 'doc', id: 'build/streams/0.2.0/getting_started' },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'build/streams/0.2.0/libraries/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Rust',
          items: [
            {
              type: 'doc',
              id: 'build/streams/0.2.0/libraries/rust/getting_started',
              label: 'Getting Started',
            },
            {
              type: 'doc',
              id: 'build/streams/0.2.0/libraries/rust/examples',
              label: 'Examples',
            },
            {
              type: 'doc',
              id: 'build/streams/0.2.0/libraries/rust/api_reference',
              label: 'API Reference',
            },
          ],
        },
      ],
    },
    { type: 'doc', id: 'build/streams/0.2.0/specs', label: 'Specification' },
    {
      type: 'doc',
      id: 'build/streams/0.2.0/troubleshooting',
      label: 'Troubleshooting',
    },
    { type: 'doc', id: 'build/streams/0.2.0/contribute', label: 'Contribute' },
  ],
  'build/stronghold.rs/1.1.0': [
    { type: 'doc', label: 'Welcome', id: 'build/stronghold.rs/1.1.0/welcome' },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'build/stronghold.rs/1.1.0/getting_started',
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/explanations/non-contiguous-data-types',
          label: 'Non-contiguous Data Types',
        },
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/explanations/procedures',
          label: 'Cryptographic Procedures',
        },
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/explanations/runtime-extensions',
          label: 'Runtime Extensions',
        },
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/explanations/concurrency',
          label: 'Concurrency in Stronghold',
        },
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/explanations/deadlock-analysis',
          label: 'Deadlock Analysis',
        },
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/explanations/retrospective',
          label: 'Retrospective',
        },
      ],
    },
    {
      type: 'category',
      label: 'How Tos',
      items: [
        {
          type: 'category',
          label: 'Command Line Interface (CLI)',
          items: [
            'build/stronghold.rs/1.1.0/how_tos/cli/running_examples',
            'build/stronghold.rs/1.1.0/how_tos/cli/generate_key_pair',
            'build/stronghold.rs/1.1.0/how_tos/cli/store_read_write',
            'build/stronghold.rs/1.1.0/how_tos/cli/generate_bip39',
            'build/stronghold.rs/1.1.0/how_tos/cli/generate_slip_10',
            'build/stronghold.rs/1.1.0/how_tos/cli/derive_slip_10',
            'build/stronghold.rs/1.1.0/how_tos/cli/create_snapshot',
            'build/stronghold.rs/1.1.0/how_tos/cli/read_snapshot',
            'build/stronghold.rs/1.1.0/how_tos/cli/recover_seed_with_mnemonic',
          ],
        },
        {
          type: 'category',
          label: 'Read-evaluate-print-loop (REPL)',
          items: ['build/stronghold.rs/1.1.0/how_tos/repl/repl'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          id: 'build/stronghold.rs/1.1.0/reference/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Structure',
          items: [
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/structure/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/structure/client',
              label: 'Client',
            },
            {
              type: 'category',
              label: 'Engine',
              items: [
                {
                  type: 'doc',
                  id: 'build/stronghold.rs/1.1.0/reference/structure/engine/overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'build/stronghold.rs/1.1.0/reference/structure/engine/snapshot',
                  label: 'Snapshot',
                },
                {
                  type: 'doc',
                  id: 'build/stronghold.rs/1.1.0/reference/structure/engine/vault',
                  label: 'Vault',
                },
                {
                  type: 'doc',
                  id: 'build/stronghold.rs/1.1.0/reference/structure/engine/store',
                  label: 'Store',
                },
                {
                  type: 'doc',
                  id: 'build/stronghold.rs/1.1.0/reference/structure/engine/runtime',
                  label: 'Runtime',
                },
              ],
            },
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/structure/derive',
              label: 'Derive',
            },
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/structure/utils',
              label: 'Utils',
            },
          ],
        },
        {
          type: 'category',
          label: 'Specification',
          items: [
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/specs/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/specs/scope',
              label: 'Scope',
            },
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/specs/engineering',
              label: 'Engineering',
            },
            {
              type: 'doc',
              id: 'build/stronghold.rs/1.1.0/reference/specs/threat-modeling',
              label: 'Threat Modeling',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'build/stronghold.rs/1.1.0/contribute',
      label: 'Contribute',
    },
    {
      type: 'link',
      href: 'https://github.com/iotaledger/stronghold.rs',
      label: 'GitHub',
    },
  ],
  'build/wallet.rs/0.1.0': [
    { type: 'doc', label: 'Welcome', id: 'build/wallet.rs/0.1.0/welcome' },
    { type: 'doc', label: 'Overview', id: 'build/wallet.rs/0.1.0/overview' },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          label: 'Rust',
          id: 'build/wallet.rs/0.1.0/getting_started/rust',
        },
        {
          type: 'doc',
          label: 'Node.js',
          id: 'build/wallet.rs/0.1.0/getting_started/nodejs',
        },
        {
          type: 'doc',
          label: 'Python',
          id: 'build/wallet.rs/0.1.0/getting_started/python',
        },
        {
          type: 'doc',
          label: 'Java',
          id: 'build/wallet.rs/0.1.0/getting_started/java',
        },
        {
          type: 'doc',
          label: 'Java for Android',
          id: 'build/wallet.rs/0.1.0/getting_started/java_for_android',
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'doc',
          label: 'The Library in a Nutshell',
          id: 'build/wallet.rs/0.1.0/explanations/nutshell',
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          label: 'Rust',
          id: 'build/wallet.rs/0.1.0/examples/rust',
        },
        {
          type: 'doc',
          label: 'Node.js',
          id: 'build/wallet.rs/0.1.0/examples/nodejs',
        },
        {
          type: 'doc',
          label: 'Python',
          id: 'build/wallet.rs/0.1.0/examples/python',
        },
        {
          type: 'doc',
          label: 'Java',
          id: 'build/wallet.rs/0.1.0/examples/java',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          label: 'Library Specifications',
          id: 'build/wallet.rs/0.1.0/reference/specifications',
        },
        {
          type: 'doc',
          label: 'Rust API',
          id: 'build/wallet.rs/0.1.0/reference/rust',
        },
        {
          type: 'doc',
          label: 'Node.js API',
          id: 'build/wallet.rs/0.1.0/reference/nodejs',
        },
        {
          type: 'doc',
          label: 'Python API',
          id: 'build/wallet.rs/0.1.0/reference/python',
        },
        {
          type: 'doc',
          label: 'Java API',
          id: 'build/wallet.rs/0.1.0/reference/java',
        },
      ],
    },
    {
      type: 'doc',
      id: 'build/wallet.rs/0.1.0/troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'build/wallet.rs/0.1.0/contribute',
      label: 'Contribute',
    },
  ],
  'build/wallet.rs/1.0.0-rc.6': [
    { type: 'doc', id: 'build/wallet.rs/1.0.0-rc.6/welcome' },
    {
      type: 'category',
      label: 'Overview',
      items: [
        'build/wallet.rs/1.0.0-rc.6/explanations/library_overview',
        'build/wallet.rs/1.0.0-rc.6/explanations/account_approaches',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting_started/getting_started' },
      items: [
        {
          type: 'doc',
          id: 'build/wallet.rs/1.0.0-rc.6/getting_started/rust',
          label: 'Rust',
        },
        {
          type: 'doc',
          id: 'build/wallet.rs/1.0.0-rc.6/getting_started/nodejs',
          label: 'Node.js',
        },
        {
          type: 'doc',
          id: 'build/wallet.rs/1.0.0-rc.6/getting_started/java',
          label: 'Java',
        },
        {
          type: 'doc',
          id: 'build/wallet.rs/1.0.0-rc.6/getting_started/python',
          label: 'Python',
        },
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'build/wallet.rs/1.0.0-rc.6/how_tos/run_how_tos',
        {
          type: 'category',
          label: 'Accounts and Addresses',
          items: [
            {
              type: 'autogenerated',
              dirName:
                'docs/build/wallet.rs/1.0.0-rc.6/how_tos/accounts_and_addresses',
            },
          ],
        },
        {
          type: 'category',
          label: 'Outputs and Transactions',
          items: [
            {
              type: 'autogenerated',
              dirName:
                'docs/build/wallet.rs/1.0.0-rc.6/how_tos/outputs_and_transactions',
            },
          ],
        },
        {
          type: 'category',
          label: 'Native Tokens',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/wallet.rs/1.0.0-rc.6/how_tos/native_tokens',
            },
          ],
        },
        {
          type: 'category',
          label: 'NFTs',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/wallet.rs/1.0.0-rc.6/how_tos/NFT',
            },
          ],
        },
        'build/wallet.rs/1.0.0-rc.6/how_tos/more_examples',
        'build/wallet.rs/1.0.0-rc.6/how_tos/exchange_guide',
        'build/wallet.rs/1.0.0-rc.6/how_tos/use-python-with-IOTA',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'doc',
          id: 'build/wallet.rs/1.0.0-rc.6/references/rust_api_reference',
          label: 'Rust',
        },
        {
          type: 'category',
          label: 'Node.js',
          link: { type: 'doc', id: 'references/nodejs/api_ref' },
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/wallet.rs/1.0.0-rc.6/references/nodejs/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Enums',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/wallet.rs/1.0.0-rc.6/references/nodejs/enums',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName:
                    'docs/build/wallet.rs/1.0.0-rc.6/references/nodejs/interfaces',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Java',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/build/wallet.rs/1.0.0-rc.6/references/java',
            },
          ],
        },
        {
          type: 'category',
          label: 'Python',
          items: [
            {
              type: 'autogenerated',
              dirName:
                'docs/build/wallet.rs/1.0.0-rc.6/references/python/iota_wallet',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'build/wallet.rs/1.0.0-rc.6/troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'build/wallet.rs/1.0.0-rc.6/contribute',
      label: 'Contribute',
    },
  ],
  'build/wasp/0.7.0': [
    { type: 'doc', label: 'Overview', id: 'build/wasp/0.7.0/overview' },
    {
      type: 'link',
      label: 'Run and maintain a Wasp Node',
      href: '/wasp/running-a-node',
    },
    {
      type: 'category',
      label: 'Wasm VM (Experimental)',
      items: [
        {
          type: 'doc',
          label: 'Wasm VM for ISC',
          id: 'build/wasp/0.7.0/guide/wasm_vm/intro',
        },
        {
          type: 'doc',
          label: 'Smart Contract Concepts',
          id: 'build/wasp/0.7.0/guide/wasm_vm/concepts',
        },
        {
          type: 'doc',
          label: 'Call Context',
          id: 'build/wasp/0.7.0/guide/wasm_vm/context',
        },
        {
          type: 'doc',
          label: 'Smart Contract Schema Tool',
          id: 'build/wasp/0.7.0/guide/wasm_vm/schema',
        },
        {
          type: 'doc',
          label: 'Using the Schema Tool',
          id: 'build/wasp/0.7.0/guide/wasm_vm/usage',
        },
        {
          type: 'category',
          label: 'Testing Smart Contracts with Solo',
          items: [
            {
              type: 'doc',
              label: 'What is Solo?',
              id: 'build/wasp/0.7.0/guide/solo/what-is-solo',
            },
            {
              type: 'doc',
              label: 'First Example',
              id: 'build/wasp/0.7.0/guide/solo/first-example',
            },
            {
              type: 'doc',
              label: 'The L1 Ledger',
              id: 'build/wasp/0.7.0/guide/solo/the-l1-ledger',
            },
            {
              type: 'doc',
              label: 'Deploying a Smart Contract',
              id: 'build/wasp/0.7.0/guide/solo/deploying-sc',
            },
            {
              type: 'doc',
              label: 'Invoking a Smart Contract',
              id: 'build/wasp/0.7.0/guide/solo/invoking-sc',
            },
            {
              type: 'doc',
              label: 'Calling a View',
              id: 'build/wasp/0.7.0/guide/solo/view-sc',
            },
            {
              type: 'doc',
              label: 'Error Handling',
              id: 'build/wasp/0.7.0/guide/solo/error-handling',
            },
            {
              type: 'doc',
              label: 'Accounts',
              id: 'build/wasp/0.7.0/guide/solo/the-l2-ledger',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Data Access Proxies',
          id: 'build/wasp/0.7.0/guide/wasm_vm/proxies',
        },
        {
          type: 'doc',
          label: 'WasmLib Data Types',
          id: 'build/wasp/0.7.0/guide/wasm_vm/types',
        },
        {
          type: 'doc',
          label: 'Structured Data Types',
          id: 'build/wasp/0.7.0/guide/wasm_vm/structs',
        },
        {
          type: 'doc',
          label: 'Type Definitions',
          id: 'build/wasp/0.7.0/guide/wasm_vm/typedefs',
        },
        {
          type: 'doc',
          label: 'Smart Contract State',
          id: 'build/wasp/0.7.0/guide/wasm_vm/state',
        },
        {
          type: 'doc',
          label: 'Triggering Events',
          id: 'build/wasp/0.7.0/guide/wasm_vm/events',
        },
        {
          type: 'doc',
          label: 'Function Definitions',
          id: 'build/wasp/0.7.0/guide/wasm_vm/funcs',
        },
        {
          type: 'doc',
          label: 'Limiting Access',
          id: 'build/wasp/0.7.0/guide/wasm_vm/access',
        },
        {
          type: 'doc',
          label: 'Function Parameters',
          id: 'build/wasp/0.7.0/guide/wasm_vm/params',
        },
        {
          type: 'doc',
          label: 'Function Results',
          id: 'build/wasp/0.7.0/guide/wasm_vm/results',
        },
        {
          type: 'doc',
          label: 'Thunk Functions',
          id: 'build/wasp/0.7.0/guide/wasm_vm/thunks',
        },
        {
          type: 'doc',
          label: 'View-Only Functions',
          id: 'build/wasp/0.7.0/guide/wasm_vm/views',
        },
        {
          type: 'doc',
          label: 'Smart Contract Initialization',
          id: 'build/wasp/0.7.0/guide/wasm_vm/init',
        },
        {
          type: 'doc',
          label: 'Token Transfers',
          id: 'build/wasp/0.7.0/guide/wasm_vm/transfers',
        },
        {
          type: 'doc',
          label: 'Function Descriptors',
          id: 'build/wasp/0.7.0/guide/wasm_vm/funcdesc',
        },
        {
          type: 'doc',
          label: 'Calling Functions',
          id: 'build/wasp/0.7.0/guide/wasm_vm/call',
        },
        {
          type: 'doc',
          label: 'Posting Asynchronous Requests',
          id: 'build/wasp/0.7.0/guide/wasm_vm/post',
        },
        {
          type: 'doc',
          label: 'Testing Smart Contracts',
          id: 'build/wasp/0.7.0/guide/wasm_vm/test',
        },
        {
          type: 'doc',
          label: 'Example Tests',
          id: 'build/wasp/0.7.0/guide/wasm_vm/examples',
        },
        {
          type: 'doc',
          label: 'Colored Tokens and Time Locks',
          id: 'build/wasp/0.7.0/guide/wasm_vm/timelock',
        },
      ],
    },
    {
      type: 'category',
      label: 'EVM',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'build/wasp/0.7.0/guide/evm/introduction',
        },
        {
          type: 'doc',
          label: 'Quickstart',
          id: 'build/wasp/0.7.0/guide/evm/quickstart',
        },
        {
          type: 'doc',
          label: 'Compatibility',
          id: 'build/wasp/0.7.0/guide/evm/compatibility',
        },
        {
          type: 'doc',
          label: 'How to Use',
          id: 'build/wasp/0.7.0/guide/evm/using',
        },
        {
          type: 'doc',
          label: 'The Magic Contract',
          id: 'build/wasp/0.7.0/guide/evm/magic',
        },
        {
          type: 'doc',
          label: 'Tooling',
          id: 'build/wasp/0.7.0/guide/evm/tooling',
        },
        {
          type: 'category',
          label: 'Examples',
          items: [
            {
              type: 'doc',
              label: 'Example Contract',
              id: 'build/wasp/0.7.0/guide/evm/examples/introduction',
            },
            {
              type: 'doc',
              label: 'ERC20',
              id: 'build/wasp/0.7.0/guide/evm/examples/ERC20',
            },
            {
              type: 'doc',
              label: 'ERC721',
              id: 'build/wasp/0.7.0/guide/evm/examples/ERC721',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Example projects',
      items: [
        {
          type: 'doc',
          label: 'Fair Roulette',
          id: 'build/wasp/0.7.0/guide/example_projects/fair_roulette',
        },
      ],
    },
    { type: 'doc', label: 'Contribute', id: 'build/wasp/0.7.0/contribute' },
  ],
  'maintain/chronicle/0.3.0': [
    { type: 'doc', id: 'maintain/chronicle/0.3.0/welcome', label: 'Welcome' },
    {
      type: 'doc',
      id: 'maintain/chronicle/0.3.0/getting_started',
      label: 'Getting Started',
    },
    {
      type: 'doc',
      id: 'maintain/chronicle/0.3.0/config_reference',
      label: 'Config Reference',
    },
    {
      type: 'doc',
      id: 'maintain/chronicle/0.3.0/contribute',
      label: 'Contribute',
    },
  ],
  'maintain/chronicle/1.0.0-rc.1': [
    {
      type: 'doc',
      id: 'maintain/chronicle/1.0.0-rc.1/welcome',
      label: 'Welcome',
    },
    {
      type: 'doc',
      id: 'maintain/chronicle/1.0.0-rc.1/changelog',
      label: 'Changelog',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'maintain/chronicle/1.0.0-rc.1/getting_started/docker',
          label: 'Docker',
        },
      ],
    },
    {
      type: 'category',
      label: 'References',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'maintain/chronicle/1.0.0-rc.1/reference/sync_and_analytics',
          label: 'Sync and Analytics',
        },
        {
          type: 'doc',
          id: 'maintain/chronicle/1.0.0-rc.1/reference/authentication',
          label: 'Authentication',
        },
        {
          type: 'doc',
          id: 'maintain/chronicle/1.0.0-rc.1/reference/api',
          label: 'API',
        },
        {
          type: 'doc',
          id: 'maintain/chronicle/1.0.0-rc.1/reference/environment',
          label: 'Environment Variables',
        },
      ],
    },
    {
      type: 'doc',
      id: 'maintain/chronicle/1.0.0-rc.1/troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'maintain/chronicle/1.0.0-rc.1/contribute',
      label: 'Contribute',
    },
  ],
  'maintain/goshimmer/0.9.8': [
    { type: 'doc', label: 'Welcome', id: 'maintain/goshimmer/0.9.8/welcome' },
    { type: 'doc', label: 'FAQ', id: 'maintain/goshimmer/0.9.8/faq' },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          label: 'Set up a node',
          id: 'maintain/goshimmer/0.9.8/tutorials/setup',
        },
        {
          type: 'doc',
          label: 'Obtain tokens',
          id: 'maintain/goshimmer/0.9.8/tutorials/obtain_tokens',
        },
        {
          type: 'doc',
          label: 'Wallet library',
          id: 'maintain/goshimmer/0.9.8/tutorials/wallet_library',
        },
        {
          type: 'doc',
          label: 'Write a dApp',
          id: 'maintain/goshimmer/0.9.8/tutorials/dApp',
        },
        {
          type: 'doc',
          label: 'Manual peering',
          id: 'maintain/goshimmer/0.9.8/tutorials/manual_peering',
        },
        {
          type: 'doc',
          label: 'Create a static identity',
          id: 'maintain/goshimmer/0.9.8/tutorials/static_identity',
        },
        {
          type: 'doc',
          label: 'Set up the Monitoring Dashboard',
          id: 'maintain/goshimmer/0.9.8/tutorials/monitoring',
        },
        {
          type: 'doc',
          label: 'How to create and send transactions',
          id: 'maintain/goshimmer/0.9.8/tutorials/send_transaction',
        },
      ],
    },
    {
      type: 'category',
      label: 'Implementation design',
      items: [
        {
          type: 'doc',
          label: 'Event driven model',
          id: 'maintain/goshimmer/0.9.8/implementation_design/event_driven_model',
        },
        {
          type: 'doc',
          label: 'Packages and plugins',
          id: 'maintain/goshimmer/0.9.8/implementation_design/packages_plugins',
        },
        {
          type: 'doc',
          label: 'Plugin',
          id: 'maintain/goshimmer/0.9.8/implementation_design/plugin',
        },
        {
          type: 'doc',
          label: 'Configuration parameters',
          id: 'maintain/goshimmer/0.9.8/implementation_design/configuration_parameters',
        },
        {
          type: 'doc',
          label: 'Object storage',
          id: 'maintain/goshimmer/0.9.8/implementation_design/object_storage',
        },
      ],
    },
    {
      type: 'category',
      label: 'Protocol Specification',
      items: [
        {
          type: 'doc',
          label: 'Protocol Specification',
          id: 'maintain/goshimmer/0.9.8/protocol_specification/overview',
        },
        {
          type: 'doc',
          label: 'Protocol High Level Overview',
          id: 'maintain/goshimmer/0.9.8/protocol_specification/protocol',
        },
        {
          type: 'category',
          label: 'Components',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/overview',
            },
            {
              type: 'doc',
              label: 'Tangle',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/tangle',
            },
            {
              type: 'doc',
              label: 'Autopeering',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/autopeering',
            },
            {
              type: 'doc',
              label: 'Mana',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/mana',
            },
            {
              type: 'doc',
              label: 'Congestion Control',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/congestion_control',
            },
            {
              type: 'doc',
              label: 'Consensus Mechanism',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/consensus_mechanism',
            },
            {
              type: 'doc',
              label: 'UTXO and Ledgerstate',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/ledgerstate',
            },
            {
              type: 'doc',
              label: 'Advanced Outputs (Experimental)',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/advanced_outputs',
            },
            {
              type: 'doc',
              label: 'Markers',
              id: 'maintain/goshimmer/0.9.8/protocol_specification/components/markers',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Glossary',
          id: 'maintain/goshimmer/0.9.8/protocol_specification/glossary',
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'doc',
          label: 'Client Lib',
          id: 'maintain/goshimmer/0.9.8/apis/client_lib',
        },
        {
          type: 'doc',
          label: 'WebAPI',
          id: 'maintain/goshimmer/0.9.8/apis/webAPI',
        },
        {
          type: 'doc',
          label: 'Node Info',
          id: 'maintain/goshimmer/0.9.8/apis/info',
        },
        {
          type: 'doc',
          label: 'Autopeering',
          id: 'maintain/goshimmer/0.9.8/apis/autopeering',
        },
        {
          type: 'doc',
          label: 'Manual Peering',
          id: 'maintain/goshimmer/0.9.8/apis/manual_peering',
        },
        {
          type: 'doc',
          label: 'Communication Layer',
          id: 'maintain/goshimmer/0.9.8/apis/communication',
        },
        {
          type: 'doc',
          label: 'Ledgerstate',
          id: 'maintain/goshimmer/0.9.8/apis/ledgerstate',
        },
        {
          type: 'doc',
          label: 'Mana',
          id: 'maintain/goshimmer/0.9.8/apis/mana',
        },
        {
          type: 'doc',
          label: 'Snapshot',
          id: 'maintain/goshimmer/0.9.8/apis/snapshot',
        },
        {
          type: 'doc',
          label: 'Faucet',
          id: 'maintain/goshimmer/0.9.8/apis/faucet',
        },
        {
          type: 'doc',
          label: 'Spammer',
          id: 'maintain/goshimmer/0.9.8/apis/spammer',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tooling',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'maintain/goshimmer/0.9.8/tooling/overview',
        },
        {
          type: 'doc',
          label: 'Docker Private Network',
          id: 'maintain/goshimmer/0.9.8/tooling/docker_private_network',
        },
        {
          type: 'doc',
          label: 'Integration Tests',
          id: 'maintain/goshimmer/0.9.8/tooling/integration_tests',
        },
        {
          type: 'doc',
          label: 'DAGs Visualizer',
          id: 'maintain/goshimmer/0.9.8/tooling/dags_visualizer',
        },
        {
          type: 'doc',
          label: 'Evil Spammer',
          id: 'maintain/goshimmer/0.9.8/tooling/evil_spammer',
        },
        {
          type: 'doc',
          label: 'Rand Seed and Rand Address',
          id: 'maintain/goshimmer/0.9.8/tooling/rand_seed_and_rand_address',
        },
      ],
    },
    {
      type: 'category',
      label: 'Team Resources',
      items: [
        {
          type: 'doc',
          label: 'How To Do a Release',
          id: 'maintain/goshimmer/0.9.8/teamresources/release',
        },
        {
          type: 'doc',
          label: 'Code Guidelines',
          id: 'maintain/goshimmer/0.9.8/teamresources/guidelines',
        },
        {
          type: 'doc',
          label: 'Local Development',
          id: 'maintain/goshimmer/0.9.8/teamresources/local_development',
        },
        {
          type: 'doc',
          label: 'Modify the Analysis Dashboard',
          id: 'maintain/goshimmer/0.9.8/teamresources/analysis_dashboard',
        },
      ],
    },
    {
      type: 'link',
      label: 'Release Notes',
      href: 'https://github.com/iotaledger/goshimmer/releases',
    },
  ],
  'maintain/hornet/1.2.4': [
    {
      type: 'category',
      label: 'Hornet',
      collapsed: false,
      items: [
        { type: 'doc', id: 'maintain/hornet/1.2.4/welcome' },
        {
          type: 'doc',
          id: 'maintain/hornet/1.2.4/getting_started/getting_started',
        },
        {
          type: 'category',
          label: 'How to',
          items: [
            {
              type: 'doc',
              id: 'maintain/hornet/1.2.4/how_tos/using_docker',
              label: 'Install Hornet using Docker',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/1.2.4/how_tos/post_installation',
              label: 'Post Installation',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/1.2.4/how_tos/run_as_a_verifier',
              label: 'Run a Node as a Verifier',
            },
          ],
        },
        {
          type: 'category',
          label: 'References',
          items: [
            {
              type: 'doc',
              id: 'maintain/hornet/1.2.4/references/configuration',
              label: 'Configuration',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/1.2.4/references/api_reference',
              label: 'API Reference',
            },
          ],
        },
      ],
    },
  ],
  'maintain/hornet/2.0.0-rc.6': [
    {
      type: 'category',
      label: 'Hornet',
      collapsed: false,
      items: [
        { type: 'doc', id: 'maintain/hornet/2.0.0-rc.6/welcome' },
        {
          type: 'doc',
          id: 'maintain/hornet/2.0.0-rc.6/getting_started/getting_started',
        },
        {
          type: 'category',
          label: 'How to',
          items: [
            {
              type: 'doc',
              id: 'maintain/hornet/2.0.0-rc.6/how_tos/using_docker',
              label: 'Install HORNET using Docker',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/2.0.0-rc.6/how_tos/post_installation',
              label: 'Post Installation',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/2.0.0-rc.6/how_tos/private_tangle',
              label: 'Run a Private Tangle',
            },
          ],
        },
        {
          type: 'category',
          label: 'INX-Plugins',
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/maintain/hornet/2.0.0-rc.6/inx-plugins',
            },
          ],
        },
        {
          type: 'category',
          label: 'References',
          items: [
            {
              type: 'doc',
              id: 'maintain/hornet/2.0.0-rc.6/references/configuration',
              label: 'Configuration',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/2.0.0-rc.6/references/peering',
              label: 'Peering',
            },
            {
              type: 'doc',
              id: 'maintain/hornet/2.0.0-rc.6/references/api_reference',
              label: 'API Reference',
            },
          ],
        },
      ],
    },
  ],
  'maintain/wasp/0.7.0': [
    { type: 'doc', id: 'maintain/wasp/0.7.0/running-a-node' },
    { type: 'doc', id: 'maintain/wasp/0.7.0/wasp-cli' },
    { type: 'doc', id: 'maintain/wasp/0.7.0/setting-up-a-chain' },
    { type: 'doc', id: 'maintain/wasp/0.7.0/chain-management' },
    { type: 'doc', id: 'maintain/wasp/0.7.0/testnet' },
    { type: 'doc', id: 'maintain/wasp/0.7.0/configuration' },
    { type: 'doc', id: 'maintain/wasp/0.7.0/metrics' },
  ],
};
