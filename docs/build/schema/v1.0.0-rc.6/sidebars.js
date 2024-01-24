/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  SchemaSidebar: [
    {
      type: 'doc',
      label: 'The Schema Tool',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        {
          type: 'doc',
          label: 'Create a Schema',
          id: 'how-tos/usage',
        },
        {
          type: 'doc',
          label: 'Define the State',
          id: 'how-tos/state',
        },
        {
          type: 'doc',
          label: 'Use Structured Data Types',
          id: 'how-tos/structs',
        },
        {
          type: 'doc',
          label: 'Generate Type Definitions',
          id: 'how-tos/typedefs',
        },
        {
          type: 'doc',
          label: 'Trigger Events',
          id: 'how-tos/events',
        },
        {
          type: 'doc',
          label: 'Define Functions',
          id: 'how-tos/funcs',
        },
        {
          type: 'doc',
          label: 'Limit Access',
          id: 'how-tos/access',
        },
        {
          type: 'doc',
          label: 'Define Function Parameters',
          id: 'how-tos/params',
        },
        {
          type: 'doc',
          label: 'Define Function Results',
          id: 'how-tos/results',
        },
        {
          type: 'doc',
          label: 'Use Thunk Functions',
          id: 'how-tos/thunks',
        },
        {
          type: 'doc',
          label: 'Use View-Only Functions',
          id: 'how-tos/views',
        },
        {
          type: 'doc',
          label: 'Initialize a Smart Contract',
          id: 'how-tos/init',
        },
        {
          type: 'doc',
          label: 'Transfer Tokens',
          id: 'how-tos/transfers',
        },
        {
          type: 'doc',
          label: 'Add Function Descriptors',
          id: 'how-tos/funcdesc',
        },
        {
          type: 'doc',
          label: 'Call Functions',
          id: 'how-tos/call',
        },
        {
          type: 'doc',
          label: 'Post Asynchronous Requests',
          id: 'how-tos/post',
        },
      ],
    },
  ],
};
