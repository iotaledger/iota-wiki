module.exports = {
    apis: [
      'welcome',
      {
        type: 'category',
        label: 'Core',
        collapsed: true,
        items: require('./core/sidebar'),
      },
      {
        type: 'category',
        label: 'Explorer',
        collapsed: true,
        items: require('./explorer/sidebar'),
      },
      {
        type: 'category',
        label: 'Indexer',
        collapsed: true,
        items: require('./indexer/sidebar'),
      },
      {
        type: 'category',
        label: 'IRC Metadata',
        collapsed: true,
        items: require('./irc-metadata/sidebar'),
      },
      {
        type: 'category',
        label: 'PoI',
        collapsed: true,
        items: require('./poi/sidebar'),
      },
    ],
  };
  