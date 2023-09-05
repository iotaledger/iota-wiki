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
      type: 'category',
      label: 'Zebra IOTA Edge SDK',
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: '101: Understanding Decentralized Identities',
          id: 'zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial',
        },
        {
          type: 'doc',
          label: '102: Managing credentials (Holder Application)',
          id: 'zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial',
        },
        {
          type: 'doc',
          label: '103: Verifying Credentials',
          id: 'zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial',
        },
        {
          type: 'doc',
          label: '104: Device Onboarding',
          id: 'zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial',
        },
      ],
    },
    {
      type: 'category',
      label: 'Track And Trace Ledger API',
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: '101: Device Events',
          id: 'track-trace-ledger-api/track-trace-ledger-api-tutorial-101',
        },
        {
          type: 'doc',
          label: '102: Consuming Events',
          id: 'track-trace-ledger-api/track-trace-ledger-api-tutorial-102',
        },
        {
          type: 'doc',
          label: '103: Digital Identity',
          id: 'track-trace-ledger-api/track-trace-ledger-api-tutorial-103',
        },
        {
          type: 'doc',
          label: '201: Business Events',
          id: 'track-trace-ledger-api/track-trace-ledger-api-tutorial-201',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Identity Tutorial',
      id: 'in-app-tutorial',
    },
  ],
};
