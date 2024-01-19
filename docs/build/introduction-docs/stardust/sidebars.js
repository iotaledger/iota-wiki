module.exports = {
  mySidebar: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'category',
          label: 'What is Stardust',
          items: [
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/what_is_stardust',
              label: `Introduction`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/rethink_utxo',
              label: `Rethinking UTXO`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/sc_support',
              label: `Smart Contract Chain Support`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/tokenization',
              label: `Tokenization`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/storage_deposit',
              label: `Storage Deposit`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/unlock_conditions',
              label: `Output Unlock Conditions`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/output_features',
              label: `Output Features`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/protecting_users',
              label: `Protecting Users`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/data_processing',
              label: `Offloading Data Processing`,
            },
            {
              type: 'doc',
              id: 'explanations/what_is_stardust/dynamic_pow',
              label: `Dynamic PoW`,
            },
          ],
        },
        {
          type: 'category',
          label: 'Stardust Ledger Anatomy',
          items: [
            {
              type: 'doc',
              id: 'explanations/ledger/intro',
              label: `Introduction`,
            },
            {
              type: 'doc',
              id: 'explanations/ledger/simple_transfers',
              label: `Simple Transactions`,
            },
            {
              type: 'doc',
              id: 'explanations/ledger/alias',
              label: `Alias Transactions`,
            },
            {
              type: 'doc',
              id: 'explanations/ledger/foundry',
              label: `Native Tokens and Foundries`,
            },
            {
              type: 'doc',
              id: 'explanations/ledger/nft',
              label: `NFT Transactions`,
            },
          ],
        },
        {
          type: 'doc',
          id: 'explanations/node_software',
          label: 'Node Software',
        },
        {
          type: 'category',
          label: 'Libraries',
          items: [
            {
              type: 'doc',
              id: 'explanations/libraries/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'doc',
          id: 'explanations/protocol_tip',
          label: 'Protocol TIPs',
        },
      ],
    },
    {
      type: 'category',
      label: 'How Tos',
      items: [
        {
          type: 'doc',
          id: 'how_tos/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'how_tos/backup_security',
          label: 'Backup and Security',
        },
        {
          type: 'doc',
          id: 'how_tos/verify_download',
          label: 'Verify Firefly Download',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Networks',
          items: [
            {
              type: 'doc',
              id: 'reference/networks/betanet',
              label: 'Shimmer Beta',
            },
            {
              type: 'doc',
              id: 'reference/networks/shimmer',
              label: 'Shimmer',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'resources',
      label: 'Resources',
    },
  ],
};
