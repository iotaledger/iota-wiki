module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: require('./get-started/sidebars'),
    },
    {
      type: 'category',
      label: 'Learn',
      items: require('./learn/sidebars'),
    },
    {
      type: 'category',
      label: 'Build',
      items: require('./build/sidebars'),
    },
    {
      type: 'category',
      label: 'Maintain',
      items: require('./maintain/sidebars'),
    },
  ],
};
