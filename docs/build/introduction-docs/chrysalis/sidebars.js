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
          label: 'Chrysalis Update',
          items: [
            {
              type: 'doc',
              id: 'explanations/update/what_is_chrysalis',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'explanations/update/chrysalis_improvements',
              label: 'Protocol Improvements',
            },
            {
              type: 'doc',
              id: 'explanations/update/path_to_chrysalis',
              label: 'Path To Chrysalis',
            },
            {
              type: 'doc',
              id: 'explanations/update/migration_mechanism',
              label: 'Migration Mechanism',
            },
          ],
        },
        {
          type: 'doc',
          id: 'explanations/node_software',
          label: 'Node Software',
        },
        {
          type: 'doc',
          id: 'explanations/libraries',
          label: 'Libraries',
        },
        {
          type: 'doc',
          id: 'explanations/protocol_tip',
          label: 'TIPs',
        },
        {
          type: 'doc',
          id: 'explanations/faq',
          label: 'FAQ',
        },
      ],
    },
    {
      type: 'category',
      label: 'How Tos',
      items: [
        {
          type: 'doc',
          id: 'how_tos/verify_firefly_download',
          label: 'Verify Firefly Download',
        },
        {
          type: 'doc',
          id: 'how_tos/backup_security',
          label: 'Backup and Security',
        },
        {
          type: 'doc',
          id: 'how_tos/exchange',
          label: 'Integrate Exchange',
        },
        {
          type: 'category',
          label: 'Migration From IOTA 1.0',
          items: [
            {
              type: 'doc',
              id: 'how_tos/migration/token_migration',
              label: 'Token Migration',
            },
            {
              type: 'doc',
              id: 'how_tos/migration/snapshot_validation_bootstrapping',
              label: 'Snapshot Validation Bootstrapping',
            },
            {
              type: 'doc',
              id: 'how_tos/migration/hub_migration',
              label: 'Hub Migration',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          id: 'reference/changelog',
          label: 'Changelog',
        },
        {
          type: 'doc',
          id: 'reference/details',
          label: 'Detailed Description',
        },
        {
          type: 'category',
          label: 'Networks',
          items: [
            {
              type: 'doc',
              id: 'reference/networks/mainnet',
              label: 'Mainnet',
            },
            {
              type: 'doc',
              id: 'reference/networks/devnet',
              label: 'Devnet',
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
