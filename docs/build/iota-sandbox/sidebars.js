module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        {
          type: 'doc',
          id: 'how-tos/interact-wasp',
        },
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        {
          type: 'doc',
          id: 'references/endpoints',
        },
        {
          type: 'doc',
          id: 'references/keys',
        },
      ],
    },
  ],
};
