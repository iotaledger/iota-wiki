/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting_started/docker',
          label: 'Docker',
        },
      ],
    },
    {
      type: 'category',
      label: 'References',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'reference/sync_and_analytics',
          label: 'Sync and Analytics',
        },
        {
          type: 'doc',
          id: 'reference/authentication',
          label: 'Authentication',
        },
        {
          type: 'doc',
          id: 'reference/api',
          label: 'API',
        },
        {
          type: 'doc',
          id: 'reference/environment',
          label: 'Environment Variables',
        },
      ],
    },
    {
      type: 'doc',
      id: 'troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'contribute',
      label: 'Contribute',
    },
  ],
};
