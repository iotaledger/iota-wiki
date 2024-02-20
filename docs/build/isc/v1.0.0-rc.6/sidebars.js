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
  ISCSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          label: 'Languages & VMs',
          id: 'getting-started/languages-and-vms',
        },
        'getting-started/quick-start',
        'getting-started/compatibility',
        {
          type: 'doc',
          label: 'Networks & Chains',
          id: 'getting-started/networks-and-chains',
        },
        {
          type: 'doc',
          label: 'Tools',
          id: 'getting-started/tools',
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'doc',
          label: 'ISC Architecture',
          id: 'explanations/isc-architecture',
        },
        {
          type: 'doc',
          label: 'Anatomy of a Smart Contract',
          id: 'explanations/smart-contract-anatomy',
        },
        {
          type: 'doc',
          label: 'Sandbox Interface',
          id: 'explanations/sandbox',
        },
        {
          type: 'doc',
          label: 'Calling a Smart Contract',
          id: 'explanations/invocation',
        },
        {
          type: 'doc',
          label: 'Data Access Proxies',
          id: 'explanations/proxies',
        },
        {
          type: 'doc',
          label: 'State, Transitions and State Anchoring',
          id: 'explanations/states',
        },
        {
          type: 'doc',
          label: 'State manager',
          id: 'explanations/state_manager',
        },
        {
          type: 'doc',
          label: 'Validators and Access Nodes',
          id: 'explanations/validators',
        },
        {
          type: 'doc',
          label: 'Consensus',
          id: 'explanations/consensus',
        },
        {
          type: 'doc',
          label: 'How Accounts Work',
          id: 'explanations/how-accounts-work',
        },
        {
          type: 'link',
          label: 'Core Contracts',
          href: '/isc/reference/core-contracts/overview',
        },
      ],
    },

    {
      type: 'category',
      label: 'How To',
      items: [
        'how-tos/introduction',
        {
          type: 'category',
          label: 'EVM',
          collapsed: false,
          items: [
            {
              type: 'doc',
              label: 'Use EVM in ISC',
              id: 'how-tos/EVM/using',
            },
            {
              type: 'doc',
              label: 'Send Funds from L1 to L2',
              id: 'how-tos/EVM/send-funds-from-L1-to-L2',
            },
            {
              type: 'doc',
              label: 'Create a Basic Solidity Contract',
              id: 'how-tos/EVM/create-a-basic-contract',
            },
            {
              type: 'doc',
              label: 'Create Custom Tokens - ERC20',
              id: 'how-tos/EVM/ERC20',
            },
            {
              type: 'doc',
              label: 'Create NFTs - ERC721',
              id: 'how-tos/EVM/ERC721',
            },
          ],
        },
        {
          type: 'category',
          label: 'Use the Magic Contract',
          items: [
            {
              type: 'doc',
              label: 'Use the Magic Contract',
              id: 'how-tos/magic',
            },
            {
              type: 'doc',
              label: 'Send Tokens to L1',
              id: 'how-tos/send-tokens-to-l1',
            },
            {
              type: 'category',
              label: 'Tokens',
              items: [
                {
                  type: 'doc',
                  label: 'Create a Foundry',
                  id: 'how-tos/token/create-foundry',
                },
                {
                  type: 'doc',
                  label: 'Mint a Native Token',
                  id: 'how-tos/token/mint-token',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/json-rpc-spec',
        'reference/magic-contract',
        {
          type: 'category',
          label: 'Core Contracts',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'reference/core-contracts/overview',
            },
            {
              type: 'doc',
              label: 'root',
              id: 'reference/core-contracts/root',
            },
            {
              type: 'doc',
              label: 'accounts',
              id: 'reference/core-contracts/accounts',
            },
            {
              type: 'doc',
              label: 'blob',
              id: 'reference/core-contracts/blob',
            },
            {
              type: 'doc',
              label: 'blocklog',
              id: 'reference/core-contracts/blocklog',
            },
            {
              type: 'doc',
              label: 'governance',
              id: 'reference/core-contracts/governance',
            },
            {
              type: 'doc',
              label: 'errors',
              id: 'reference/core-contracts/errors',
            },
            {
              type: 'doc',
              label: 'EVM',
              id: 'reference/core-contracts/evm',
            },
          ],
        },
        {
          type: 'doc',
          label: 'WasmLib Data Types',
          id: 'reference/wasm-lib-data-types',
        },
      ],
    },
    {
      type: 'category',
      label: 'Test with Solo',
      items: [
        {
          label: 'Getting Started',
          id: 'solo/getting-started',
          type: 'doc',
        },
        {
          type: 'category',
          label: 'How To',
          items: [
            {
              type: 'doc',
              label: 'First Example',
              id: 'solo/how-tos/first-example',
            },
            {
              type: 'doc',
              label: 'The L1 Ledger',
              id: 'solo/how-tos/the-l1-ledger',
            },
            {
              type: 'doc',
              label: 'Deploy a Smart Contract',
              id: 'solo/how-tos/deploying-sc',
            },
            {
              type: 'doc',
              label: 'Invoke a Smart Contract',
              id: 'solo/how-tos/invoking-sc',
            },
            {
              type: 'doc',
              label: 'Call a View',
              id: 'solo/how-tos/view-sc',
            },
            {
              type: 'doc',
              label: 'Error Handling',
              id: 'solo/how-tos/error-handling',
            },
            {
              type: 'doc',
              label: 'Accounts',
              id: 'solo/how-tos/the-l2-ledger',
            },
            {
              type: 'doc',
              label: 'Test Smart Contracts',
              id: 'solo/how-tos/test',
            },
            {
              type: 'doc',
              label: 'Example Tests',
              id: 'solo/how-tos/examples',
            },
            {
              type: 'doc',
              label: 'Colored Tokens and Time Locks',
              id: 'solo/how-tos/timelock',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Wasm - Schema Tool',
      items: [
        {
          type: 'doc',
          label: 'The Schema Tool',
          id: 'schema/introduction',
        },
        {
          type: 'category',
          label: 'How To',
          items: [
            {
              type: 'doc',
              label: 'Create a Schema',
              id: 'schema/how-tos/usage',
            },
            {
              type: 'doc',
              label: 'Define the State',
              id: 'schema/how-tos/state',
            },
            {
              type: 'doc',
              label: 'Use Structured Data Types',
              id: 'schema/how-tos/structs',
            },
            {
              type: 'doc',
              label: 'Generate Type Definitions',
              id: 'schema/how-tos/typedefs',
            },
            {
              type: 'doc',
              label: 'Trigger Events',
              id: 'schema/how-tos/events',
            },
            {
              type: 'doc',
              label: 'Define Functions',
              id: 'schema/how-tos/funcs',
            },
            {
              type: 'doc',
              label: 'Limit Access',
              id: 'schema/how-tos/access',
            },
            {
              type: 'doc',
              label: 'Define Function Parameters',
              id: 'schema/how-tos/params',
            },
            {
              type: 'doc',
              label: 'Define Function Results',
              id: 'schema/how-tos/results',
            },
            {
              type: 'doc',
              label: 'Use Thunk Functions',
              id: 'schema/how-tos/thunks',
            },
            {
              type: 'doc',
              label: 'Use View-Only Functions',
              id: 'schema/how-tos/views',
            },
            {
              type: 'doc',
              label: 'Initialize a Smart Contract',
              id: 'schema/how-tos/init',
            },
            {
              type: 'doc',
              label: 'Transfer Tokens',
              id: 'schema/how-tos/transfers',
            },
            {
              type: 'doc',
              label: 'Add Function Descriptors',
              id: 'schema/how-tos/funcdesc',
            },
            {
              type: 'doc',
              label: 'Call Functions',
              id: 'schema/how-tos/call',
            },
            {
              type: 'doc',
              label: 'Post Asynchronous Requests',
              id: 'schema/how-tos/post',
            },
          ],
        },
      ],
    },
  ],
};
