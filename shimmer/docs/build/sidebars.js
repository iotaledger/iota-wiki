module.exports = [
  'build/introduction',
  {
    type: 'category',
    label: 'Intro to Clients',
    items: [
      'build/intro-to-clients/get-started',
      {
        type: 'category',
        label: 'Seeds, Accounts and Addresses',
        items: [
          'build/intro-to-clients/seeds-accounts-and-addresses/seed-mnemonics',
          'build/intro-to-clients/seeds-accounts-and-addresses/accounts-and-addresses',
        ],
      },
      'build/intro-to-clients/request-testnet-funds',
      'build/intro-to-clients/simple-transfer',
      'build/intro-to-clients/backup-security',
    ],
  },
  {
    type: 'category',
    label: 'Clients in Shimmer',
    items: [
      {
        type: 'category',
        label: 'Output Unlock Conditions',
        items: [
          'build/clients-in-shimmer/output-unlock-conditions/expiration',
          'build/clients-in-shimmer/output-unlock-conditions/timelock',
          'build/clients-in-shimmer/output-unlock-conditions/storage-deposit-return',
        ],
      },
      {
        type: 'category',
        label: 'Output Features',
        items: [
          'build/clients-in-shimmer/output-features/sender',
          'build/clients-in-shimmer/output-features/metadata',
          'build/clients-in-shimmer/output-features/tag',
        ],
      },
      {
        type: 'category',
        label: 'Alias Transactions',
        items: [
          {
            type: 'doc',
            id: 'build/clients-in-shimmer/alias/introduction',
            label: 'Introduction',
          },
          'build/clients-in-shimmer/alias/create',
          'build/clients-in-shimmer/alias/state-transitions',
          'build/clients-in-shimmer/alias/governance-transitions',
          'build/clients-in-shimmer/alias/destroy',
          'build/clients-in-shimmer/alias/unlock-alias-funds',
        ],
      },
      {
        type: 'category',
        label: 'Native Tokens and Foundries',
        items: [
          'build/clients-in-shimmer/native-token/introduction',
          'build/clients-in-shimmer/native-token/create-foundry',
          'build/clients-in-shimmer/native-token/mint-tokens',
          'build/clients-in-shimmer/native-token/melt-tokens',
          'build/clients-in-shimmer/native-token/burn-tokens',
          'build/clients-in-shimmer/native-token/storage-deposits',
        ],
      },
      {
        type: 'category',
        label: 'NFTs',
        items: [
          'build/clients-in-shimmer/nft/introduction',
          'build/clients-in-shimmer/nft/mint',
          'build/clients-in-shimmer/nft/transfer',
          'build/clients-in-shimmer/nft/claim',
          'build/clients-in-shimmer/nft/burn',
          'build/clients-in-shimmer/nft/nft-as-a-wallet',
          'build/clients-in-shimmer/nft/nft-collections',
        ],
      },
    ],
  },
  //ISC
  {
    type: 'category',
    label: 'Smart Contracts',
    items: [
      {
        type: 'doc',
        label: 'Overview',
        id: 'build/smart-contracts/overview',
      },
      {
        type: 'category',
        label: 'Core Concepts',
        items: [
          {
            type: 'doc',
            label: 'Smart Contracts',
            id: 'build/smart-contracts/guide/core_concepts/smart-contracts',
          },
          {
            type: 'doc',
            label: 'ISC Architecture',
            id: 'build/smart-contracts/guide/core_concepts/isc-architecture',
          },
          {
            type: 'doc',
            label: 'Validators and Access Nodes',
            id: 'build/smart-contracts/guide/core_concepts/validators',
          },
          {
            type: 'doc',
            label: 'Consensus',
            id: 'build/smart-contracts/guide/core_concepts/consensus',
          },
          {
            type: 'doc',
            label: 'State, Transitions and State Anchoring',
            id: 'build/smart-contracts/guide/core_concepts/states',
          },
          {
            type: 'doc',
            label: 'Anatomy of a Smart Contract',
            id: 'build/smart-contracts/guide/core_concepts/smart-contract-anatomy',
          },
          {
            type: 'doc',
            label: 'Calling a Smart Contract',
            id: 'build/smart-contracts/guide/core_concepts/invocation',
          },
          {
            type: 'doc',
            label: 'Sandbox Interface',
            id: 'build/smart-contracts/guide/core_concepts/sandbox',
          },
          {
            type: 'category',
            label: 'Core Contracts',
            items: [
              {
                type: 'doc',
                label: 'Overview',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/overview',
              },
              {
                type: 'doc',
                label: 'root',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/root',
              },
              {
                type: 'doc',
                label: 'accounts',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/accounts',
              },
              {
                type: 'doc',
                label: 'blob',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/blob',
              },
              {
                type: 'doc',
                label: 'blocklog',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/blocklog',
              },
              {
                type: 'doc',
                label: 'governance',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/governance',
              },
              {
                type: 'doc',
                label: 'errors',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/errors',
              },
              {
                type: 'doc',
                label: 'evm',
                id: 'build/smart-contracts/guide/core_concepts/core_contracts/evm',
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
                id: 'build/smart-contracts/guide/core_concepts/accounts/how-accounts-work',
              },
              {
                type: 'doc',
                label: 'How To Deposit To a Chain',
                id: 'build/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain',
              },
              {
                type: 'doc',
                label: 'How To Withdraw From a Chain',
                id: 'build/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain',
              },
              {
                type: 'doc',
                label: 'View Account Balances',
                id: 'build/smart-contracts/guide/core_concepts/accounts/view-account-balances',
              },
              {
                type: 'doc',
                label: 'The Common Account',
                id: 'build/smart-contracts/guide/core_concepts/accounts/the-common-account',
              },
            ],
          },
          {
            type: 'category',
            label: 'Testing Smart Contracts with Solo',
            items: [
              {
                type: 'doc',
                label: 'What is Solo?',
                id: 'build/smart-contracts/guide/solo/what-is-solo',
              },
              {
                type: 'doc',
                label: 'First Example',
                id: 'build/smart-contracts/guide/solo/first-example',
              },
              {
                type: 'doc',
                label: 'The L1 Ledger',
                id: 'build/smart-contracts/guide/solo/the-l1-ledger',
              },
              {
                type: 'doc',
                label: 'Deploying a Smart Contract',
                id: 'build/smart-contracts/guide/solo/deploying-sc',
              },
              {
                type: 'doc',
                label: 'Invoking a Smart Contract',
                id: 'build/smart-contracts/guide/solo/invoking-sc',
              },
              {
                type: 'doc',
                label: 'Calling a View',
                id: 'build/smart-contracts/guide/solo/view-sc',
              },
              {
                type: 'doc',
                label: 'Error Handling',
                id: 'build/smart-contracts/guide/solo/error-handling',
              },
              {
                type: 'doc',
                label: 'Accounts',
                id: 'build/smart-contracts/guide/solo/the-l2-ledger',
              },
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'ISC Chains and Nodes',
        items: [
          {
            type: 'doc',
            label: 'Installing Wasp',
            id: 'build/smart-contracts/guide/chains_and_nodes/installing-wasp',
          },
          {
            type: 'doc',
            label: 'Running a Node',
            id: 'build/smart-contracts/guide/chains_and_nodes/running-a-node',
          },
          {
            type: 'doc',
            label: 'Node Configuration',
            id: 'build/smart-contracts/guide/chains_and_nodes/node-config',
          },
          {
            type: 'doc',
            label: 'Using Docker (Standalone)',
            id: 'build/smart-contracts/guide/chains_and_nodes/docker_standalone',
          },
          {
            type: 'doc',
            label: 'Configuring wasp-cli',
            id: 'build/smart-contracts/guide/chains_and_nodes/wasp-cli',
          },
          {
            type: 'doc',
            label: 'Setting Up a Chain',
            id: 'build/smart-contracts/guide/chains_and_nodes/setting-up-a-chain',
          },
          {
            type: 'doc',
            label: 'Chain Management',
            id: 'build/smart-contracts/guide/chains_and_nodes/chain-management',
          },
          {
            type: 'doc',
            label: 'Chain Rotation',
            id: 'build/smart-contracts/guide/chains_and_nodes/chain-rotation',
          },
          {
            type: 'doc',
            label: 'Testnet',
            id: 'build/smart-contracts/guide/chains_and_nodes/testnet',
          },
        ],
      },
      {
        type: 'category',
        label: 'Wasm VM',
        items: [
          {
            type: 'doc',
            label: 'Wasm VM for ISC',
            id: 'build/smart-contracts/guide/wasm_vm/intro',
          },
          {
            type: 'doc',
            label: 'Smart Contract Concepts',
            id: 'build/smart-contracts/guide/wasm_vm/concepts',
          },
          {
            type: 'doc',
            label: 'Call Context',
            id: 'build/smart-contracts/guide/wasm_vm/context',
          },
          {
            type: 'doc',
            label: 'Smart Contract Schema Tool',
            id: 'build/smart-contracts/guide/wasm_vm/schema',
          },
          {
            type: 'doc',
            label: 'Using the Schema Tool',
            id: 'build/smart-contracts/guide/wasm_vm/usage',
          },
          {
            type: 'doc',
            label: 'Data Access Proxies',
            id: 'build/smart-contracts/guide/wasm_vm/proxies',
          },
          {
            type: 'doc',
            label: 'WasmLib Data Types',
            id: 'build/smart-contracts/guide/wasm_vm/types',
          },
          {
            type: 'doc',
            label: 'Structured Data Types',
            id: 'build/smart-contracts/guide/wasm_vm/structs',
          },
          {
            type: 'doc',
            label: 'Type Definitions',
            id: 'build/smart-contracts/guide/wasm_vm/typedefs',
          },
          {
            type: 'doc',
            label: 'Smart Contract State',
            id: 'build/smart-contracts/guide/wasm_vm/state',
          },
          {
            type: 'doc',
            label: 'Triggering Events',
            id: 'build/smart-contracts/guide/wasm_vm/events',
          },
          {
            type: 'doc',
            label: 'Function Definitions',
            id: 'build/smart-contracts/guide/wasm_vm/funcs',
          },
          {
            type: 'doc',
            label: 'Limiting Access',
            id: 'build/smart-contracts/guide/wasm_vm/access',
          },
          {
            type: 'doc',
            label: 'Function Parameters',
            id: 'build/smart-contracts/guide/wasm_vm/params',
          },
          {
            type: 'doc',
            label: 'Function Results',
            id: 'build/smart-contracts/guide/wasm_vm/results',
          },
          {
            type: 'doc',
            label: 'Thunk Functions',
            id: 'build/smart-contracts/guide/wasm_vm/thunks',
          },
          {
            type: 'doc',
            label: 'View-Only Functions',
            id: 'build/smart-contracts/guide/wasm_vm/views',
          },
          {
            type: 'doc',
            label: 'Smart Contract Initialization',
            id: 'build/smart-contracts/guide/wasm_vm/init',
          },
          {
            type: 'doc',
            label: 'Token Transfers',
            id: 'build/smart-contracts/guide/wasm_vm/transfers',
          },
          {
            type: 'doc',
            label: 'Function Descriptors',
            id: 'build/smart-contracts/guide/wasm_vm/funcdesc',
          },
          {
            type: 'doc',
            label: 'Calling Functions',
            id: 'build/smart-contracts/guide/wasm_vm/call',
          },
          {
            type: 'doc',
            label: 'Posting Asynchronous Requests',
            id: 'build/smart-contracts/guide/wasm_vm/post',
          },
          {
            type: 'doc',
            label: 'Testing Smart Contracts',
            id: 'build/smart-contracts/guide/wasm_vm/test',
          },
          {
            type: 'doc',
            label: 'Example Tests',
            id: 'build/smart-contracts/guide/wasm_vm/examples',
          },
          {
            type: 'doc',
            label: 'Colored Tokens and Time Locks',
            id: 'build/smart-contracts/guide/wasm_vm/timelock',
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
            id: 'build/smart-contracts/guide/evm/introduction',
          },
          {
            type: 'doc',
            label: 'Compatibility',
            id: 'build/smart-contracts/guide/evm/compatibility',
          },
          {
            type: 'doc',
            label: 'How to Use',
            id: 'build/smart-contracts/guide/evm/using',
          },
          {
            type: 'doc',
            label: 'The Magic Contract',
            id: 'build/smart-contracts/guide/evm/magic',
          },
          {
            type: 'doc',
            label: 'Tooling',
            id: 'build/smart-contracts/guide/evm/tooling',
          },
          {
            type: 'category',
            label: 'Examples',
            items: [
              {
                type: 'doc',
                label: 'Example Contract',
                id: 'build/smart-contracts/guide/evm/examples/introduction',
              },
              {
                type: 'doc',
                label: 'ERC20',
                id: 'build/smart-contracts/guide/evm/examples/ERC20',
              },
              {
                type: 'doc',
                label: 'ERC721',
                id: 'build/smart-contracts/guide/evm/examples/ERC721',
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
            id: 'build/smart-contracts/guide/example_projects/fair_roulette',
          },
        ],
      },
      {
        type: 'category',
        label: 'Development tools',
        items: [
          {
            type: 'doc',
            label: 'Preconfigured Development Docker setup',
            id: 'build/smart-contracts/guide/development_tools/docker_preconfigured',
          },
        ],
      },
      {
        type: 'doc',
        label: 'Contribute',
        id: 'build/smart-contracts/contribute',
      },
      {
        type: 'doc',
        label: 'Metrics',
        id: 'build/smart-contracts/metrics',
      },
    ],
  },
  // build/identity
  {
    type: 'category',
    label: 'build/identity',
    items: [
      {
        type: 'category',
        label: 'Getting Started',
        collapsed: false,
        items: [
          'build/identity/getting_started/overview',
          'build/identity/getting_started/install',
          'build/identity/getting_started/create_and_publish',
          {
            type: 'category',
            label: 'Rust',
            collapsed: true,
            items: ['build/identity/getting_started/rust/getting_started'],
          },
          {
            type: 'category',
            label: 'WASM',
            collapsed: true,
            items: [
              'build/identity/getting_started/wasm/getting_started',
              'build/identity/getting_started/wasm/api_reference',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Decentralized Identifiers (DID)',
        items: [
          'build/identity/concepts/decentralized_identifiers/create',
          'build/identity/concepts/decentralized_identifiers/update',
          'build/identity/concepts/decentralized_identifiers/resolve',
          'build/identity/concepts/decentralized_identifiers/delete',
        ],
      },

      {
        type: 'category',
        label: 'Verifiable Credentials',
        items: [
          'build/identity/concepts/verifiable_credentials/create',
          'build/identity/concepts/verifiable_credentials/revocation',
          'build/identity/concepts/verifiable_credentials/verifiable_presentations',
        ],
      },
      {
        type: 'category',
        label: 'Tutorials',
        items: [
          'build/identity/tutorials/overview',
          'build/identity/tutorials/validate_university_degree',
        ],
      },
      {
        type: 'category',
        label: 'Specifications',
        collapsed: true,
        items: [
          'build/identity/specs/overview',
          {
            type: 'category',
            label: 'IOTA DID',
            collapsed: true,
            items: [
              'build/identity/specs/did/overview',
              'build/identity/specs/did/iota_did_method_spec',
            ],
          },
          {
            type: 'category',
            label: 'IOTA DIDComm',
            collapsed: true,
            items: [
              'build/identity/specs/didcomm/overview',
              {
                type: 'category',
                label: 'Protocols',
                collapsed: true,
                items: [
                  'build/identity/specs/didcomm/protocols/connection',
                  'build/identity/specs/didcomm/protocols/authentication',
                  'build/identity/specs/didcomm/protocols/presentation',
                  'build/identity/specs/didcomm/protocols/issuance',
                  'build/identity/specs/didcomm/protocols/signing',
                  'build/identity/specs/didcomm/protocols/revocation',
                  'build/identity/specs/didcomm/protocols/revocation-options',
                  'build/identity/specs/didcomm/protocols/post',
                  'build/identity/specs/didcomm/protocols/termination',
                ],
              },
              {
                type: 'category',
                label: 'Resources',
                collapsed: true,
                items: [
                  'build/identity/specs/didcomm/resources/credential-info',
                  'build/identity/specs/didcomm/resources/problem-reports',
                ],
              },
              'build/identity/specs/didcomm/CHANGELOG',
            ],
          },
          'build/identity/specs/revocation_bitmap_2022',
        ],
      },
    ],
  },
  // API REF
  {
    type: 'category',
    label: 'Node API Reference',
    collapsed: true,
    items: [
      'build/nodes/api_reference',
      {
        type: 'category',
        label: 'Core REST API',
        collapsed: true,
        link: {
          type: 'doc',
          id: 'build/nodes/core-rest-api/iota-core-rest-api',
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
        id: 'build/endpoints/shimmer',
        label: 'Shimmer',
      },
      {
        type: 'doc',
        id: 'build/endpoints/testnet',
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
        href: '/build/smart-contracts/guide/chains_and_nodes/wasp-cli',
      },
      {
        label: 'Schema Tool',
        type: 'link',
        href: '/build/smart-contracts/guide/wasm_vm/schema',
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
];
