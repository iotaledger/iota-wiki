module.exports = {
  develop: [
    'welcome',
    {
      type: 'link',
      label: 'Protocol Overview',
      href: '/introduction/welcome',
    },
    {
      type: 'link',
      label: 'Tangle Improvement Proposals (TIPS)',
      href: '/tips',
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: true,
      items: [
        {
          label: 'iota.rs',
          type: 'link',
          href: '/iota.rs/welcome',
        },
        {
          label: 'Wallet.rs',
          type: 'link',
          href: '/wallet.rs/welcome',
        },
        {
          label: 'Identity',
          type: 'link',
          href: '/identity.rs/introduction',
        },
        {
          label: 'Streams',
          type: 'link',
          href: '/streams/welcome',
        },
        {
          label: 'Stronghold',
          type: 'link',
          href: '/stronghold.rs/welcome',
        },
        {
          type: 'category',
          label: 'Community Driven Libraries',
          collapsed: true,
          items: [
            {
              label: 'tanglePHP',
              type: 'link',
              href: 'https://tanglephp.com',
            },
          ],
        },
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
          id: 'nodes/node-software',
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
          id: 'nodes/about-nodes',
        },
        'nodes/become-a-node-operator',
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'nodes/api_reference',
            {
              type: 'category',
              label: 'REST API',
              collapsed: true,
              items: require('./nodes/rest-api/sidebar'),
            },
          ],
        },
        {
          type: 'category',
          label: 'Explanations',
          collapsed: false,
          items: [
            'nodes/explanations/nodes_101',
            'nodes/explanations/security_101',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'endpoints/mainnet',
          label: 'Mainnet',
        },
        {
          type: 'doc',
          id: 'endpoints/devnet',
          label: 'Devnet',
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
          label: 'Explorer',
          type: 'link',
          href: 'https://explorer.iota.org',
        },
        {
          label: 'Devnet Faucet',
          type: 'link',
          href: 'https://faucet.chrysalis-devnet.iota.cafe',
        },
      ],
    },
    'network-token-migration',
    {
      type: 'link',
      label: 'Tutorials',
      href: '/tutorials',
    },
  ],
};
