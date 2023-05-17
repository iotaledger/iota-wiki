module.exports = [
  'learn/introduction',
  {
    type: 'category',
    label: 'Intro to Clients',
    items: [
      {
        type: 'category',
        label: 'Seeds, Accounts and Addresses',
        items: [
          'learn/intro-to-clients/seeds-accounts-and-addresses/seed-mnemonics',
          'learn/intro-to-clients/seeds-accounts-and-addresses/accounts-and-addresses',
        ],
      },
      'learn/intro-to-clients/simple-transfer',
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
          'learn/clients-in-shimmer/output-unlock-conditions/expiration',
          'learn/clients-in-shimmer/output-unlock-conditions/timelock',
          'learn/clients-in-shimmer/output-unlock-conditions/storage-deposit-return',
        ],
      },
      {
        type: 'category',
        label: 'Output Features',
        items: [
          'learn/clients-in-shimmer/output-features/sender',
          'learn/clients-in-shimmer/output-features/metadata',
          'learn/clients-in-shimmer/output-features/tag',
        ],
      },
      {
        type: 'category',
        label: 'Alias Transactions',
        items: [
          {
            type: 'doc',
            id: 'learn/clients-in-shimmer/alias/introduction',
            label: 'Introduction',
          },
          'learn/clients-in-shimmer/alias/create',
          'learn/clients-in-shimmer/alias/state-transitions',
          'learn/clients-in-shimmer/alias/governance-transitions',
          'learn/clients-in-shimmer/alias/destroy',
          'learn/clients-in-shimmer/alias/unlock-alias-funds',
        ],
      },
      {
        type: 'category',
        label: 'Native Tokens and Foundries',
        items: [
          'learn/clients-in-shimmer/native-token/introduction',
          'learn/clients-in-shimmer/native-token/create-foundry',
          'learn/clients-in-shimmer/native-token/mint-tokens',
          'learn/clients-in-shimmer/native-token/melt-tokens',
          'learn/clients-in-shimmer/native-token/burn-tokens',
          'learn/clients-in-shimmer/native-token/storage-deposits',
        ],
      },
      {
        type: 'category',
        label: 'NFTs',
        items: [
          'learn/clients-in-shimmer/nft/introduction',
          'learn/clients-in-shimmer/nft/mint',
          'learn/clients-in-shimmer/nft/transfer',
          'learn/clients-in-shimmer/nft/claim',
          'learn/clients-in-shimmer/nft/burn',
          'learn/clients-in-shimmer/nft/nft-as-a-wallet',
          'learn/clients-in-shimmer/nft/nft-collections',
        ],
      },
    ],
  },
  //Identity
  {
    type: 'category',
    label: 'Identity',
    items: [
      {
        type: 'doc',
        id: 'learn/identity/introduction',
        label: 'Introduction',
      },
      {
        type: 'doc',
        id: 'learn/identity/decentralized_identity',
        label: 'Decentralized Identity',
      },
      {
        type: 'category',
        label: 'Decentralized Identifiers (DID)',
        items: [
          'learn/identity/decentralized_identifiers/overview',
          'learn/identity/decentralized_identifiers/alias',
        ],
      },
      'learn/identity/verifiable_credentials',
      'learn/identity/glossary',
      'learn/identity/faq',
    ],
  },
];
