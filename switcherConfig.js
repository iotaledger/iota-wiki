// @ts-check

const buildDocs = [
  {
    id: 'iota-sdk-1-0-0',
    label: 'IOTA SDK',
    description: 'Seamlessly integrate IOTA into your app.',
    icon: 'IotaCore',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'iota-sdk-1-0-0',
        label: '1.0.0',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'identity-rs-0-5',
    label: 'Identity',
    description: 'Trustless digital identity management.',
    icon: 'Identity',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'identity-rs-next',
        label: 'next',
        badges: ['Shimmer'],
      },
      {
        id: 'identity-rs-0-7-alpha',
        label: '0.7-alpha',
        badges: ['Shimmer'],
      },
      {
        id: 'identity-rs-0-6',
        label: '0.6',
        badges: ['IOTA'],
      },
      {
        id: 'identity-rs-0-5',
        label: '0.5',
        badges: ['IOTA'],
      },
    ],
  },
  {
    id: 'stronghold-rs',
    label: 'Stronghold',
    description: 'Securely store secrets.',
    icon: 'Stronghold',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'stronghold-rs',
        label: '1.1.0',
        badges: ['IOTA/Shimmer'],
      },
    ],
  },
  {
    id: 'cli-wallet',
    label: 'CLI Wallet',
    description: 'Command line wallet.',
    icon: 'Wallet',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'cli-wallet',
        label: '1.0.0',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'apis',
    label: 'APIs',
    description: 'All available APIs.',
    icon: 'Tools',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'apis',
      },
    ],
  },
  {
    id: 'iota-rs-1-4-0',
    label: 'iota.rs (deprecated)',
    description: 'Legacy client SDK.',
    icon: 'IotaCore',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'iota-rs-2-0-1-rc-7',
        label: '2.0.1-rc.7',
        badges: ['Shimmer'],
      },
      {
        id: 'iota-rs-1-4-0',
        label: '1.4.0',
        badges: ['IOTA'],
      },
    ],
  },
  {
    id: 'iotajs',
    label: 'iota.js (deprecated)',
    description: 'Legacy JavaScript SDK.',
    icon: 'IotaCore',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'iotajs',
        label: '2.0.0-rc.1',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'wallet-rs-0-1-0',
    label: 'wallet.rs (deprecated)',
    description: 'Legacy wallet SDK.',
    icon: 'Wallet',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'wallet-rs-1-0-0-rc-6',
        label: '1.0.0-rc.6',
        badges: ['Shimmer'],
      },
      {
        id: 'wallet-rs-0-1-0',
        label: '0.1.0',
        badges: ['IOTA'],
      },
    ],
  },
  {
    id: 'iota-streams',
    label: 'Streams (deprecated)',
    description: 'Secure data channels over the Tangle.',
    icon: 'Streams',
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'iota-streams',
        label: '0.2.0',
        badges: ['IOTA'],
      },
    ],
  },
  {
    id: 'wasp-evm-0-7-0',
    label: 'EVM',
    description: 'Create EVM smart contracts.',
    icon: 'SmartContracts',
    subsection: 'build-layer-2',
    versions: [
      {
        id: 'wasp-evm-0-7-0',
        label: '0.7.0',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'wasp-cli-0-7-0',
    label: 'Wasp CLI',
    description: 'Create custom smart contract chains.',
    icon: 'SmartContracts',
    subsection: 'build-layer-2',
    versions: [
      {
        id: 'wasp-cli-0-7-0',
        label: '0.7.0',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'wasp-wasm-0-7-0',
    label: 'WASM (Experimental)',
    description: 'Create WASM smart contracts.',
    icon: 'SmartContracts',
    subsection: 'build-layer-2',
    versions: [
      {
        id: 'wasp-wasm-0-7-0',
        label: '0.7.0',
        badges: ['Shimmer'],
      },
    ],
  },
];

const maintainDocs = [
  {
    id: 'hornet-1-2-4',
    label: 'Hornet',
    description: 'The primary node software for IOTA.',
    icon: 'Hornet',
    subsection: 'maintain-layer-1',
    versions: [
      {
        id: 'hornet-2-0-0-rc-6',
        label: '2.0.0-rc.6',
        badges: ['Shimmer'],
      },
      {
        id: 'hornet-1-2-4',
        label: '1.2.4',
        badges: ['IOTA'],
      },
    ],
  },
  {
    id: 'wasp-0-7-0',
    label: 'Wasp',
    description: 'The node software to run an ISC network',
    icon: 'SmartContracts',
    subsection: 'maintain-layer-2',
    versions: [
      {
        id: 'wasp-0-7-0',
        label: '0.7.0',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'chronicle-rs',
    label: 'Chronicle',
    description: 'Indexer, archival node, analytics.',
    icon: 'Chronicle',
    subsection: 'maintain-layer-1',
    versions: [
      {
        id: 'inx-chronicle',
        label: '1.0.0-rc.1',
        badges: ['Shimmer'],
      },
      {
        id: 'chronicle-rs',
        label: '0.3.0',
        badges: ['IOTA'],
      },
    ],
  },
  {
    id: 'goshimmer',
    label: 'GoShimmer',
    description: 'Research node implementation for IOTA 2.0',
    icon: 'GoShimmer',
    subsection: 'maintain-layer-1',
    versions: [
      {
        id: 'goshimmer',
        label: '0.9.8',
        badges: ['IOTA 2.0'],
      },
    ],
  },
];

/** @type {import('./src/common/components/Switcher').Config} */
const config = {
  docs: [...buildDocs, ...maintainDocs],
  sections: [
    {
      before: {
        docId: 'build',
        sidebarId: 'build',
      },
      subsections: [
        {
          label: 'Layer 1',
          description: 'Build applications on our feeless multi-asset L1 DAG.',
          id: 'build-layer-1',
        },
        {
          label: 'Layer 2',
          description: 'Build dApps with ISC, our L2 smart contracts platform.',
          id: 'build-layer-2',
        },
      ],
    },
    {
      before: {
        docId: 'maintain',
        sidebarId: 'maintain',
      },
      subsections: [
        {
          label: 'Layer 1',
          description:
            'Setup nodes and indexers for our feeless multi-asset L1 DAG.',
          id: 'maintain-layer-1',
        },
        {
          label: 'Layer 2',
          description: 'Setup nodes for ISC, our L2 smart contracts platform.',
          id: 'maintain-layer-2',
        },
      ],
    },
  ],
};

module.exports = config;
