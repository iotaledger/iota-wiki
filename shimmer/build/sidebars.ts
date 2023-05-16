module.exports = {
    build: [
        {
            // Clients
            type: 'category',
            label: 'Build',
            items: [
                'introduction',
                {
                    type: 'category',
                    label: 'Intro to Clients',
                    items: [
                        'intro-to-clients/get-started',
                        {
                            type: 'category',
                            label: 'Seeds, Accounts and Addresses',
                            items: [
                                'intro-to-clients/seeds-accounts-and-addresses/seed-mnemonics',
                                'intro-to-clients/seeds-accounts-and-addresses/accounts-and-addresses',
                            ],
                        },
                        'intro-to-clients/request-testnet-funds',
                        'intro-to-clients/simple-transfer',
                        'intro-to-clients/backup-security',
                    ]
                },
                {
                    type: 'category',
                    label: 'Clients in Shimmer',
                    items: [

                        {
                            type: 'category',
                            label: 'Output Unlock Conditions',
                            items: [
                                'clients-in-shimmer/output-unlock-conditions/expiration',
                                'clients-in-shimmer/output-unlock-conditions/timelock',
                                'clients-in-shimmer/output-unlock-conditions/storage-deposit-return',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Output Features',
                            items: [
                                'clients-in-shimmer/output-features/sender',
                                'clients-in-shimmer/output-features/metadata',
                                'clients-in-shimmer/output-features/tag',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Alias Transactions',
                            items: [
                                {
                                    type: 'doc',
                                    id: 'clients-in-shimmer/alias/introduction',
                                    label: 'Introduction',
                                },
                                'clients-in-shimmer/alias/create',
                                'clients-in-shimmer/alias/state-transitions',
                                'clients-in-shimmer/alias/governance-transitions',
                                'clients-in-shimmer/alias/destroy',
                                'clients-in-shimmer/alias/unlock-alias-funds',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Native Tokens and Foundries',
                            items: [
                                'clients-in-shimmer/native-token/introduction',
                                'clients-in-shimmer/native-token/create-foundry',
                                'clients-in-shimmer/native-token/mint-tokens',
                                'clients-in-shimmer/native-token/melt-tokens',
                                'clients-in-shimmer/native-token/burn-tokens',
                                'clients-in-shimmer/native-token/storage-deposits',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'NFTs',
                            items: [
                                'clients-in-shimmer/nft/introduction',
                                'clients-in-shimmer/nft/mint',
                                'clients-in-shimmer/nft/transfer',
                                'clients-in-shimmer/nft/claim',
                                'clients-in-shimmer/nft/burn',
                                'clients-in-shimmer/nft/nft-as-a-wallet',
                                'clients-in-shimmer/nft/nft-collections',
                            ],
                        },
                    ]
                },
                //ISC
                {
                    type: 'category',
                    label: 'Smart Contracts',
                    items: [
                        {
                            type: 'doc',
                            label: 'Overview',
                            id: 'smart-contracts/overview',
                        },
                        {
                            type: 'category',
                            label: 'Core Concepts',
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Smart Contracts',
                                    id: 'smart-contracts/guide/core_concepts/smart-contracts',
                                },
                                {
                                    type: 'doc',
                                    label: 'ISC Architecture',
                                    id: 'smart-contracts/guide/core_concepts/isc-architecture',
                                },
                                {
                                    type: 'doc',
                                    label: 'Validators and Access Nodes',
                                    id: 'smart-contracts/guide/core_concepts/validators',
                                },
                                {
                                    type: 'doc',
                                    label: 'Consensus',
                                    id: 'smart-contracts/guide/core_concepts/consensus',
                                },
                                {
                                    type: 'doc',
                                    label: 'State, Transitions and State Anchoring',
                                    id: 'smart-contracts/guide/core_concepts/states',
                                },
                                {
                                    type: 'doc',
                                    label: 'Anatomy of a Smart Contract',
                                    id: 'smart-contracts/guide/core_concepts/smart-contract-anatomy'
                                },
                                {
                                    type: 'doc',
                                    label: 'Calling a Smart Contract',
                                    id: 'smart-contracts/guide/core_concepts/invocation',
                                },
                                {
                                    type: 'doc',
                                    label: 'Sandbox Interface',
                                    id: 'smart-contracts/guide/core_concepts/sandbox'
                                },
                                {
                                    type: 'category',
                                    label: 'Core Contracts',
                                    items: [
                                        {
                                            type: 'doc',
                                            label: 'Overview',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/overview',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'root',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/root',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'accounts',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/accounts',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'blob',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/blob',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'blocklog',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/blocklog',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'governance',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/governance',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'errors',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/errors',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'evm',
                                            id: 'smart-contracts/guide/core_concepts/core_contracts/evm',
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
                                            id: 'smart-contracts/guide/core_concepts/accounts/how-accounts-work',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'How To Deposit To a Chain',
                                            id: 'smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'How To Withdraw From a Chain',
                                            id: 'smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'View Account Balances',
                                            id: 'smart-contracts/guide/core_concepts/accounts/view-account-balances',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'The Common Account',
                                            id: 'smart-contracts/guide/core_concepts/accounts/the-common-account',
                                        },
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Testing Smart Contracts with Solo',
                                    items: [
                                        {
                                            type: 'doc',
                                            label: 'What is Solo?',
                                            id: 'smart-contracts/guide/solo/what-is-solo',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'First Example',
                                            id: 'smart-contracts/guide/solo/first-example',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'The L1 Ledger',
                                            id: 'smart-contracts/guide/solo/the-l1-ledger',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'Deploying a Smart Contract',
                                            id: 'smart-contracts/guide/solo/deploying-sc',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'Invoking a Smart Contract',
                                            id: 'smart-contracts/guide/solo/invoking-sc',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'Calling a View',
                                            id: 'smart-contracts/guide/solo/view-sc',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'Error Handling',
                                            id: 'smart-contracts/guide/solo/error-handling',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'Accounts',
                                            id: 'smart-contracts/guide/solo/the-l2-ledger'
                                        },
                                    ]
                                }
                            ],
                        },
                        {
                            type: 'category',
                            label: 'ISC Chains and Nodes',
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Installing Wasp',
                                    id: 'smart-contracts/guide/chains_and_nodes/installing-wasp',
                                },
                                {
                                    type: 'doc',
                                    label: 'Running a Node',
                                    id: 'smart-contracts/guide/chains_and_nodes/running-a-node',
                                },
                                {
                                    type: 'doc',
                                    label: 'Node Configuration',
                                    id: 'smart-contracts/guide/chains_and_nodes/node-config',
                                },
                                {
                                    type: 'doc',
                                    label: 'Using Docker (Standalone)',
                                    id: 'smart-contracts/guide/chains_and_nodes/docker_standalone',
                                },
                                {
                                    type: 'doc',
                                    label: 'Configuring wasp-cli',
                                    id: 'smart-contracts/guide/chains_and_nodes/wasp-cli',
                                },
                                {
                                    type: 'doc',
                                    label: 'Setting Up a Chain',
                                    id: 'smart-contracts/guide/chains_and_nodes/setting-up-a-chain',
                                },
                                {
                                    type: 'doc',
                                    label: 'Chain Management',
                                    id: 'smart-contracts/guide/chains_and_nodes/chain-management',
                                },
                                {
                                    type: 'doc',
                                    label: 'Chain Rotation',
                                    id: 'smart-contracts/guide/chains_and_nodes/chain-rotation',
                                },
                                {
                                    type: 'doc',
                                    label: 'Testnet',
                                    id: 'smart-contracts/guide/chains_and_nodes/testnet',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Wasm VM',
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Wasm VM for ISC',
                                    id: 'smart-contracts/guide/wasm_vm/intro',
                                },
                                {
                                    type: 'doc',
                                    label: 'Smart Contract Concepts',
                                    id: 'smart-contracts/guide/wasm_vm/concepts',
                                },
                                {
                                    type: 'doc',
                                    label: 'Call Context',
                                    id: 'smart-contracts/guide/wasm_vm/context',
                                },
                                {
                                    type: 'doc',
                                    label: 'Smart Contract Schema Tool',
                                    id: 'smart-contracts/guide/wasm_vm/schema',
                                },
                                {
                                    type: 'doc',
                                    label: 'Using the Schema Tool',
                                    id: 'smart-contracts/guide/wasm_vm/usage',
                                },
                                {
                                    type: 'doc',
                                    label: 'Data Access Proxies',
                                    id: 'smart-contracts/guide/wasm_vm/proxies',
                                },
                                {
                                    type: 'doc',
                                    label: 'WasmLib Data Types',
                                    id: 'smart-contracts/guide/wasm_vm/types',
                                },
                                {
                                    type: 'doc',
                                    label: 'Structured Data Types',
                                    id: 'smart-contracts/guide/wasm_vm/structs',
                                },
                                {
                                    type: 'doc',
                                    label: 'Type Definitions',
                                    id: 'smart-contracts/guide/wasm_vm/typedefs',
                                },
                                {
                                    type: 'doc',
                                    label: 'Smart Contract State',
                                    id: 'smart-contracts/guide/wasm_vm/state',
                                },
                                {
                                    type: 'doc',
                                    label: 'Triggering Events',
                                    id: 'smart-contracts/guide/wasm_vm/events',
                                },
                                {
                                    type: 'doc',
                                    label: 'Function Definitions',
                                    id: 'smart-contracts/guide/wasm_vm/funcs',
                                },
                                {
                                    type: 'doc',
                                    label: 'Limiting Access',
                                    id: 'smart-contracts/guide/wasm_vm/access',
                                },
                                {
                                    type: 'doc',
                                    label: 'Function Parameters',
                                    id: 'smart-contracts/guide/wasm_vm/params',
                                },
                                {
                                    type: 'doc',
                                    label: 'Function Results',
                                    id: 'smart-contracts/guide/wasm_vm/results',
                                },
                                {
                                    type: 'doc',
                                    label: 'Thunk Functions',
                                    id: 'smart-contracts/guide/wasm_vm/thunks',
                                },
                                {
                                    type: 'doc',
                                    label: 'View-Only Functions',
                                    id: 'smart-contracts/guide/wasm_vm/views',
                                },
                                {
                                    type: 'doc',
                                    label: 'Smart Contract Initialization',
                                    id: 'smart-contracts/guide/wasm_vm/init',
                                },
                                {
                                    type: 'doc',
                                    label: 'Token Transfers',
                                    id: 'smart-contracts/guide/wasm_vm/transfers',
                                },
                                {
                                    type: 'doc',
                                    label: 'Function Descriptors',
                                    id: 'smart-contracts/guide/wasm_vm/funcdesc',
                                },
                                {
                                    type: 'doc',
                                    label: 'Calling Functions',
                                    id: 'smart-contracts/guide/wasm_vm/call',
                                },
                                {
                                    type: 'doc',
                                    label: 'Posting Asynchronous Requests',
                                    id: 'smart-contracts/guide/wasm_vm/post',
                                },
                                {
                                    type: 'doc',
                                    label: 'Testing Smart Contracts',
                                    id: 'smart-contracts/guide/wasm_vm/test',
                                },
                                {
                                    type: 'doc',
                                    label: 'Example Tests',
                                    id: 'smart-contracts/guide/wasm_vm/examples',
                                },
                                {
                                    type: 'doc',
                                    label: 'Colored Tokens and Time Locks',
                                    id: 'smart-contracts/guide/wasm_vm/timelock',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'EVM',
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Introduction',
                                    id: 'smart-contracts/guide/evm/introduction',
                                },
                                {
                                    type: 'doc',
                                    label: 'Compatibility',
                                    id: 'smart-contracts/guide/evm/compatibility',
                                },
                                {
                                    type: 'doc',
                                    label: 'How to Use',
                                    id: 'smart-contracts/guide/evm/using',
                                },
                                {
                                    type: 'doc',
                                    label: 'The Magic Contract',
                                    id: 'smart-contracts/guide/evm/magic',
                                },
                                {
                                    type: 'doc',
                                    label: 'Tooling',
                                    id: 'smart-contracts/guide/evm/tooling',
                                },
                                {
                                    type: 'category',
                                    label: 'Examples',
                                    items: [
                                        {
                                            type: 'doc',
                                            label: 'Example Contract',
                                            id: 'smart-contracts/guide/evm/examples/introduction',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'ERC20',
                                            id: 'smart-contracts/guide/evm/examples/ERC20',
                                        },
                                        {
                                            type: 'doc',
                                            label: 'ERC721',
                                            id: 'smart-contracts/guide/evm/examples/ERC721',
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Example projects',
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Fair Roulette',
                                    id: 'smart-contracts/guide/example_projects/fair_roulette',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Development tools',
                            items: [
                                {
                                    type: 'doc',
                                    label: 'Preconfigured Development Docker setup',
                                    id: 'smart-contracts/guide/development_tools/docker_preconfigured',
                                },
                            ]
                        },
                        {
                            type: 'doc',
                            label: 'Contribute',
                            id: 'smart-contracts/contribute',
                        },
                        {
                            type: 'doc',
                            label: 'Metrics',
                            id: 'smart-contracts/metrics',
                        }
                    ],
                },
                // Identity
                {
                    type: 'category',
                    label: 'Identity',
                    items: [
                        {
                            type: 'doc',
                            id: 'identity/introduction',
                            label: 'Introduction'
                        },
                        {
                            type: 'doc',
                            id: 'identity/decentralized_identity',
                            label: 'Decentralized Identity'
                        },
                        {
                            type: 'category',
                            label: 'Getting Started',
                            collapsed: false,
                            items: [
                                'identity/getting_started/overview',
                                'identity/getting_started/install',
                                'identity/getting_started/create_and_publish',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Concepts',
                            collapsed: false,
                            items: [
                                {
                                    'Decentralized Identifiers (DID)': [
                                        'identity/concepts/decentralized_identifiers/overview',
                                        'identity/concepts/decentralized_identifiers/alias',
                                        'identity/concepts/decentralized_identifiers/create',
                                        'identity/concepts/decentralized_identifiers/update',
                                        'identity/concepts/decentralized_identifiers/resolve',
                                        'identity/concepts/decentralized_identifiers/delete',
                                    ],
                                    'Verifiable Credentials': [
                                        'identity/concepts/verifiable_credentials/overview',
                                        'identity/concepts/verifiable_credentials/create',
                                        'identity/concepts/verifiable_credentials/revocation',
                                        'identity/concepts/verifiable_credentials/verifiable_presentations',
                                    ]
                                },
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Programming Languages',
                            collapsed: true,
                            items: [
                                'identity/libraries/overview',
                                {
                                    type: 'category',
                                    label: 'Rust',
                                    collapsed: true,
                                    items: [
                                        'identity/libraries/rust/getting_started',
                                    ],
                                },
                                {
                                    type: 'category',
                                    label: 'WASM',
                                    collapsed: true,
                                    items: [
                                        'identity/libraries/wasm/getting_started',
                                        'identity/libraries/wasm/api_reference',
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Tutorials',
                            items:['identity/tutorials/overview','identity/tutorials/validate_university_degree']
                        },
                        {
                            type: 'category',
                            label: 'Specifications',
                            collapsed: true,
                            items: [
                                'identity/specs/overview',
                                {
                                    type: 'category',
                                    label: 'IOTA DID',
                                    collapsed: true,
                                    items: [
                                        'identity/specs/did/overview',
                                        'identity/specs/did/iota_did_method_spec',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'IOTA DIDComm',
                                    collapsed: true,
                                    items: [
                                        'identity/specs/didcomm/overview',
                                        {
                                            type: 'category',
                                            label: 'Protocols',
                                            collapsed: true,
                                            items: [
                                                'identity/specs/didcomm/protocols/connection',
                                                'identity/specs/didcomm/protocols/authentication',
                                                'identity/specs/didcomm/protocols/presentation',
                                                'identity/specs/didcomm/protocols/issuance',
                                                'identity/specs/didcomm/protocols/signing',
                                                'identity/specs/didcomm/protocols/revocation',
                                                'identity/specs/didcomm/protocols/revocation-options',
                                                'identity/specs/didcomm/protocols/post',
                                                'identity/specs/didcomm/protocols/termination',
                                            ]
                                        },
                                        {
                                            type: 'category',
                                            label: 'Resources',
                                            collapsed: true,
                                            items: [
                                                'identity/specs/didcomm/resources/credential-info',
                                                'identity/specs/didcomm/resources/problem-reports',
                                            ]
                                        },
                                        'identity/specs/didcomm/CHANGELOG',
                                    ]
                                },
                                'identity/specs/revocation_bitmap_2022',
                            ],
                        },
                        'identity/glossary',
                        'identity/contribute',
                        'identity/workflow',
                        'identity/contact',
                        'identity/faq'
                    ],
                },
                // API REF
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
        },
    ]
};
