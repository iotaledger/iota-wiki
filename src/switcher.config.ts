import type { Config } from './common/components/Switcher';
import { Identity, IotaCore, SmartContracts, Stronghold, Wallet } from './common/icons';

const config: Config = {
  docs: [
    {
      id: 'build',
      label: 'Getting Started',
      description: 'Learn about the different networks and how to get started.',
      icon: IotaCore,
      subsection: 'layer-1',
      versions: [
        {
          id: 'build',
          label: '',
          badges: ['IOTA/Shimmer'],
        },
      ],
    },
    {
      id: 'iota-sdk-1-0-0',
      label: 'IOTA SDK',
      description: 'Interact with the network.',
      icon: IotaCore,
      subsection: 'layer-1',
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
      subsection: 'layer-1',
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
      subsection: 'layer-1',
      versions: [
        {
          id: 'iota-rs-1-4-0',
          label: '1.4.0',
          badges: ['IOTA'],
        },
        {
          id: 'iota-rs-2-0-1-rc-7',
          label: '2.0.1-rc.7',
          badges: ['Shimmer']
        },
      ],
    },
    {
      id: 'iotajs',
      label: 'iota.js',
      description: 'Interact with the network.',
      icon: IotaCore,
      subsection: 'layer-1',
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
      subsection: 'layer-1',
      versions: [
        {
          id: 'wallet-rs-0-1-0',
          label: '0.1.0',
          badges: ['IOTA'],
        },
        {
          id: 'wallet-rs-1-0-0-rc-6',
          label: '1.0.0-rc.6',
          badges: ['Shimmer']
        },
      ],
    },
    {
      id: 'stronghold-rs',
      label: 'Stronghold',
      description: 'Securely store secrets.',
      icon: Stronghold,
      subsection: 'layer-1',
      versions: [
        {
          id: 'stronghold-rs',
          label: '1.1.0',
          badges: ['IOTA/Shimmer'],
        },
      ],
    },
    {
      id: 'wasp-0-7-0',
      label: 'Smart Contracts',
      description: 'Create smart contracts.',
      icon: SmartContracts,
      subsection: 'layer-2',
      versions: [
        {
          id: 'wasp-0-7-0',
          label: '0.7.0',
          badges: ['Shimmer'],
        },
      ],
    },
  ],
  sections: [
    [
      {
        label: 'Layer 1',
        description: 'Interact with the network.',
        id: 'layer-1',
      },
      {
        label: 'Layer 2',
        description: 'Create smart contracts.',
        id: 'layer-2',
      }
    ],
  ],
};

export default config;
