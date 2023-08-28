import type { Config } from './common/components/Switcher';
import {
  Chronicle,
  GoShimmer,
  Hornet,
  Identity,
  IotaCore,
  SmartContracts,
  Streams,
  Stronghold,
  Tools,
  Wallet,
} from './common/icons';

const buildDocs = [
  {
    id: 'iota-sdk-1-0-0',
    label: 'IOTA SDK',
    description: 'Interact with the network.',
    icon: IotaCore,
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
    icon: Identity,
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'identity-rs-0-5',
        label: '0.5',
        badges: ['IOTA'],
      },
      {
        id: 'identity-rs-0-6',
        label: '0.6',
        badges: ['IOTA'],
      },
      {
        id: 'identity-rs-0-7-alpha',
        label: '0.7-alpha',
        badges: ['Shimmer'],
      },
      {
        id: 'identity-rs-next',
        label: 'next',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'iota-rs-1-4-0',
    label: 'iota.rs',
    description: 'Interact with the network.',
    icon: IotaCore,
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'iota-rs-1-4-0',
        label: '1.4.0',
        badges: ['IOTA'],
      },
      {
        id: 'iota-rs-2-0-1-rc-7',
        label: '2.0.1-rc.7',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'iotajs',
    label: 'iota.js',
    description: 'Interact with the network.',
    icon: IotaCore,
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
    label: 'wallet.rs',
    description: 'Interact with the network.',
    icon: Wallet,
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'wallet-rs-0-1-0',
        label: '0.1.0',
        badges: ['IOTA'],
      },
      {
        id: 'wallet-rs-1-0-0-rc-6',
        label: '1.0.0-rc.6',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'stronghold-rs',
    label: 'Stronghold',
    description: 'Securely store secrets.',
    icon: Stronghold,
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
    id: 'iota-streams',
    label: 'Streams',
    icon: Streams,
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
    id: 'apis',
    label: 'APIs',
    description: 'All available APIs.',
    icon: Tools,
    subsection: 'build-layer-1',
    versions: [
      {
        id: 'apis',
      },
    ],
  },
  {
    id: 'smart-contract-0-7-0',
    label: 'Smart Contracts',
    description: 'Create smart contracts.',
    icon: SmartContracts,
    subsection: 'build-layer-2',
    versions: [
      {
        id: 'smart-contract-0-7-0',
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
    description: 'Run a node',
    icon: Hornet,
    subsection: 'maintain-layer-1',
    versions: [
      {
        id: 'hornet-1-2-4',
        label: '1.2.4',
        badges: ['IOTA'],
      },
      {
        id: 'hornet-2-0-0-rc-6',
        label: '2.0.0-rc.6',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'wasp-0-7-0',
    label: 'Wasp',
    description: 'Create smart contracts',
    icon: SmartContracts,
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
    description: 'Store and query data',
    icon: Chronicle,
    subsection: 'maintain-layer-1',
    versions: [
      {
        id: 'chronicle-rs',
        label: '0.3.0',
        badges: ['IOTA'],
      },
      {
        id: 'inx-chronicle',
        label: '1.0.0-rc.1',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'goshimmer',
    label: 'GoShimmer',
    description: 'Research Node implementation for IOTA 2.0',
    icon: GoShimmer,
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

const config: Config = {
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

export default config;