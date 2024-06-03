/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const { directoryExists } = require('../../../../src/utils/config');

var iscutils_references = {};
if (directoryExists(__dirname + '/docs/reference/iscutils')) {
  iscutils_references = {
    type: 'category',
    label: 'ISC Utilities',
    items: [
      {
        type: 'autogenerated',
        dirName: 'reference/iscutils',
      },
    ],
  };
}

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
      label: 'How To',
      items: [
        'how-tos/introduction',
        {
          type: 'doc',
          label: 'Send Funds from L1 to L2',
          id: 'how-tos/send-funds-from-L1-to-L2',
        },
        {
          type: 'doc',
          label: 'Create a Basic Contract',
          id: 'how-tos/create-a-basic-contract',
        },
        {
          type: 'doc',
          label: 'Deploy a Smart Contract',
          id: 'how-tos/deploy-a-smart-contract',
        },
        {
          type: 'doc',
          label: 'Create Custom Tokens - ERC20',
          id: 'how-tos/ERC20',
        },
        {
          type: 'doc',
          label: 'Send ERC20 Tokens Across Chains',
          id: 'how-tos/send-ERC20-across-chains',
        },
        {
          type: 'doc',
          label: 'Create NFTs - ERC721',
          id: 'how-tos/ERC721',
        },
        {
          type: 'doc',
          label: 'Send NFTs Across Chains',
          id: 'how-tos/send-NFTs-across-chains',
        },
        {
          type: 'doc',
          label: 'Test Smart Contracts',
          id: 'how-tos/test-smart-contracts',
        },
        {
          type: 'category',
          label: 'Interact with the Core Contracts',
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'how-tos/core-contracts/introduction',
            },
            {
              type: 'category',
              label: 'Basics',
              items: [
                {
                  type: 'doc',
                  label: 'Get Native Assets Balance',
                  id: 'how-tos/core-contracts/basics/get-balance',
                },
                {
                  type: 'category',
                  label: 'Allowance',
                  items: [
                    {
                      type: 'doc',
                      label: 'Allow',
                      id: 'how-tos/core-contracts/basics/allowance/allow',
                    },
                    {
                      type: 'doc',
                      label: 'Get Allowance',
                      id: 'how-tos/core-contracts/basics/allowance/get-allowance',
                    },
                    {
                      type: 'doc',
                      label: 'Take Allowance',
                      id: 'how-tos/core-contracts/basics/allowance/take-allowance',
                    },
                  ],
                },
                {
                  type: 'doc',
                  label: 'Send Assets to L1',
                  id: 'how-tos/core-contracts/basics/send-assets-to-l1',
                },
              ],
            },
            {
              type: 'category',
              label: 'Token',
              items: [
                {
                  label: 'Introduction',
                  type: 'doc',
                  id: 'how-tos/core-contracts/token/introduction',
                },
                {
                  type: 'doc',
                  label: 'Create a Native Token',
                  id: 'how-tos/core-contracts/token/create-native-token',
                },
                {
                  type: 'doc',
                  label: 'Mint Native Tokens',
                  id: 'how-tos/core-contracts/token/mint-token',
                },
                {
                  type: 'doc',
                  label: 'Custom ERC20 Functions',
                  id: 'how-tos/core-contracts/token/erc20-native-token',
                },
                {
                  type: 'doc',
                  label: 'Create a Foundry',
                  id: 'how-tos/core-contracts/token/create-foundry',
                },
                {
                  type: 'doc',
                  label: 'Register Token as ERC20',
                  id: 'how-tos/core-contracts/token/register-token',
                },
              ],
            },
            {
              type: 'category',
              label: 'NFT',
              items: [
                {
                  label: 'Introduction',
                  type: 'doc',
                  id: 'how-tos/core-contracts/nft/introduction',
                },
                {
                  type: 'doc',
                  label: 'Mint an NFT',
                  id: 'how-tos/core-contracts/nft/mint-nft',
                },
                {
                  type: 'doc',
                  label: 'Use as ERC721',
                  id: 'how-tos/core-contracts/nft/use-as-erc721',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Get Randomness on L2',
              id: 'how-tos/core-contracts/get-randomness-on-l2',
            },
            {
              type: 'doc',
              label: 'Call and Call View',
              id: 'how-tos/core-contracts/call-view',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
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
      label: 'Reference',
      items: [
        'reference/json-rpc-spec',
        {
          type: 'category',
          label: 'Magic Contract',
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/magic-contract',
            },
          ],
        },
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
        iscutils_references,
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
          type: 'doc',
          label: 'Data Access Proxies',
          id: 'schema/proxies',
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
