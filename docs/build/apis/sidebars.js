module.exports = {
  apis: [
    'welcome',
    {
      type: 'category',
      label: 'Core',
      link: {
        type: 'generated-index',
        title: 'Core API',
        description:
          'The core API is the main API for interacting with the Tangle. V1 is meant for the IOTA network and V2 for the Shimmer staging network.',
        slug: '/api/core',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'V1',
          collapsed: true,
          items: require('./docs/core/v1/sidebar'),
        },
        {
          type: 'category',
          label: 'V2',
          collapsed: true,
          items: require('./docs/core/v2/sidebar'),
        },
      ],
    },
    {
      type: 'category',
      label: 'Wasp',
      collapsed: true,
      items: require('./docs/wasp/sidebar'),
    },
    {
      type: 'category',
      label: 'Explorer',
      collapsed: true,
      items: require('./docs/explorer/sidebar'),
    },
    {
      type: 'category',
      label: 'Indexer',
      collapsed: true,
      items: require('./docs/indexer/sidebar'),
    },
    {
      type: 'category',
      label: 'IRC Metadata',
      collapsed: true,
      items: require('./docs/irc-metadata/sidebar'),
    },
    {
      type: 'category',
      label: 'PoI',
      collapsed: true,
      items: require('./docs/poi/sidebar'),
    },
  ],
};
