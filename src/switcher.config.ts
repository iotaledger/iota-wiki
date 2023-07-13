import type { Config } from './common/components/Switcher';
import { IotaCore } from './common/icons';

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
  ],
  sections: [
    [
      {
        label: 'Layer 1',
        description: 'Interact with the network.',
        id: 'layer-1',
      }
    ],
  ],
};

export default config;
