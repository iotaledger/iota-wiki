module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'How to',
      items: [
        {
          type: 'doc',
          id: 'how-tos/install',
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
