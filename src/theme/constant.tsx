export const Networks: { [key: string]: NetworkProps } = {
  iota: {
    baseToken: 'IOTA Token',
    protocol: 'Stardust',
    httpRestApi: 'https://api.stardust-mainnet.iotaledger.net',
    eventApi: 'wss://api.stardust-mainnet.iotaledger.net:443 (MQTT 3.1, /mqtt)',
    permaNodeApi: 'https://chronicle.stardust-mainnet.iotaledger.net',
    explorer: 'https://explorer.iota.org/mainnet',
    evm: {
      core: {
        chainId: '0x2276',
        chainName: 'IOTA EVM',
        nativeCurrency: {
          name: 'IOTA',
          symbol: 'IOTA',
          decimals: 18,
        },
        rpcUrls: [
          'https://json-rpc.evm.iotaledger.net',
          'wss://ws.json-rpc.evm.iotaledger.net',
        ],
        blockExplorerUrls: ['https://explorer.evm.iota.org'],
      },
      tools: {
        blastApiUrls: [
          'https://iota-mainnet-evm.public.blastapi.io',
          'wss://iota-mainnet-evm.public.blastapi.io',
          {
            'Archive RPC':
              'https://iota-mainnet-evm.blastapi.io/e7596858-fc63-4a54-8727-b885a2af4ec8',
          },
        ],
      },
      custom: {
        chainAddress:
          'iota1pzt3mstq6khgc3tl0mwuzk3eqddkryqnpdxmk4nr25re2466uxwm28qqxu5',
        aliasId:
          '0x971dc160d5ae8c457f7eddc15a39035b6190130b4dbb5663550795575ae19db5',
        toolkit: {
          url: 'https://evm-toolkit.evm.iotaledger.net',
          hasFaucet: false,
        },
        api: 'https://api.evm.iotaledger.net',
      },
    },
  },
  iota_2_testnet: {
    baseToken: 'Testnet Token (no value)',
    protocol: 'IOTA 2.0',
    httpRestApi: 'https://api.nova-testnet.iotaledger.net/',
    eventApi: 'wss://api.nova-testnet.iotaledger.net:443 (MQTT 3.1, /mqtt)',
    permaNodeApi: 'https://chronicle.nova-testnet.iotaledger.net',
    explorer: 'https://explorer.iota.org/iota2-testnet',
    faucet: 'https://faucet.nova-testnet.iotaledger.net',
  },
  iota_testnet: {
    baseToken: 'Testnet Token (no value)',
    protocol: 'Stardust',
    httpRestApi: 'https://api.testnet.iotaledger.net',
    eventApi: 'wss://api.testnet.iotaledger.net:443 (MQTT 3.1, /mqtt)',
    permaNodeApi: 'https://chronicle.testnet.iotaledger.net',
    faucet: 'https://faucet.testnet.iotaledger.net',
    explorer: 'https://explorer.iota.org/iota-testnet',
    evm: {
      core: {
        chainId: '0x433',
        chainName: 'IOTA EVM Testnet',
        nativeCurrency: {
          name: 'IOTA',
          symbol: 'IOTA',
          decimals: 18,
        },
        rpcUrls: [
          'https://json-rpc.evm.testnet.iotaledger.net',
          'wss://ws.json-rpc.evm.testnet.iotaledger.net',
        ],
        blockExplorerUrls: ['https://explorer.evm.testnet.iotaledger.net'],
      },
      tools: {
        blastApiUrls: [
          'https://iota-testnet-evm.public.blastapi.io',
          'wss://iota-testnet-evm.public.blastapi.io',
          {
            'Archive RPC':
              'https://iota-testnet-evm.blastapi.io/e7596858-fc63-4a54-8727-b885a2af4ec8',
          },
        ],
      },
      custom: {
        chainAddress:
          'tst1pzxsrr7apqkdzz633dyntmvxwtyvk029p39te5j0m33q6946h7akzv663zu',
        aliasId:
          '0x8d018fdd082cd10b518b4935ed8672c8cb3d450c4abcd24fdc620d16babfbb61',
        toolkit: {
          url: 'https://evm-toolkit.evm.testnet.iotaledger.net',
          hasFaucet: true,
        },
        api: 'https://api.evm.testnet.iotaledger.net',
      },
    },
  },
  shimmer: {
    baseToken: 'Shimmer Token',
    protocol: 'Stardust',
    httpRestApi: 'https://api.shimmer.network',
    eventApi: 'wss://api.shimmer.network:443/api/mqtt/v1 (MQTT 3.1)',
    permaNodeApi: 'https://chronicle.shimmer.network',
    explorer: 'https://explorer.shimmer.network/shimmer',
    evm: {
      core: {
        chainId: '0x94',
        chainName: 'ShimmerEVM',
        nativeCurrency: {
          name: 'Shimmer',
          symbol: 'SMR',
          decimals: 18,
        },
        rpcUrls: [
          'https://json-rpc.evm.shimmer.network',
          'wss://ws.json-rpc.evm.shimmer.network',
        ],
        blockExplorerUrls: ['https://explorer.evm.shimmer.network/'],
      },
      custom: {
        chainAddress:
          'smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s',
        aliasId:
          '0xccc7018e4fa63e5014332f45ddc8a5450da89572676d12d4d5e51c98d64155b3',
        toolkit: {
          url: 'https://evm-toolkit.evm.shimmer.network',
          hasFaucet: false,
        },
        api: 'https://api.evm.shimmer.network',
      },
    },
  },
  shimmer_testnet: {
    baseToken: 'Testnet Token (no value)',
    protocol: 'Stardust',
    httpRestApi: 'https://api.testnet.shimmer.network',
    eventApi: 'wss://api.testnet.shimmer.network:443/api/mqtt/v1 (MQTT 3.1)',
    permaNodeApi: 'https://chronicle.testnet.shimmer.network',
    faucet: 'https://faucet.testnet.shimmer.network',
    explorer: 'https://explorer.shimmer.network/shimmer-testnet',
    evm: {
      core: {
        chainId: '0x431',
        chainName: 'ShimmerEVM Testnet',
        nativeCurrency: {
          name: 'Shimmer',
          symbol: 'SMR',
          decimals: 18,
        },
        rpcUrls: ['https://json-rpc.evm.testnet.shimmer.network'],
        blockExplorerUrls: ['https://explorer.evm.testnet.shimmer.network/'],
      },
      custom: {
        chainAddress:
          'rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex',
        aliasId:
          '0x42f7da9bdb55b3ec87e5ac1a1e6d88e16768663fde5eca3429eb6f579cc538ac',
        toolkit: {
          url: 'https://evm-toolkit.evm.testnet.shimmer.network',
          hasFaucet: true,
        },
        api: 'https://api.evm.testnet.shimmer.network',
      },
    },
  },
};

export interface Toolkit {
  url: string;
  hasFaucet: boolean;
}

// This is just a copy of https://github.com/MetaMask/metamask-sdk/blob/890ec432439705af4c8d02281b7447a1a4f94de3/packages/sdk-react-ui/src/hooks/MetaMaskWagmiHooks.ts#L25-L36
// and should not be touched
export interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency?: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: number;
  };
  rpcUrls?: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export interface EVMProps {
  core: AddEthereumChainParameter;
  tools?: {
    blastApiUrls?: Array<string | object>;
  };
  custom: {
    chainAddress: string;
    aliasId: string;
    api: string;
    toolkit: Toolkit;
  };
}

export interface NetworkProps {
  baseToken: string;
  protocol: string;
  httpRestApi: string;
  eventApi: string;
  permaNodeApi: string;
  faucet?: string;
  explorer: string;
  evm?: EVMProps;
}
