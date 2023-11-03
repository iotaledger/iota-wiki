import React from 'react';
import type { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export const EVMNetworks = {
  'shimmerevm-testnet': {
    chainId: '0x431',
    chainName: 'ShimmerEVM Testnet',
    nativeCurrency: {
      name: 'Shimmer',
      symbol: 'SMR',
      decimals: 18, // Replace with the number of decimals of the native currency
    },
    rpcUrls: ['https://json-rpc.evm.testnet.shimmer.network'],
    blockExplorerUrls: ['https://explorer.evm.testnet.shimmer.network/'],
  },
  shimmerevm: {
    chainId: '0x94',
    chainName: 'ShimmerEVM',
    nativeCurrency: {
      name: 'Shimmer',
      symbol: 'SMR',
      decimals: 18, // Replace with the number of decimals of the native currency
    },
    rpcUrls: ['https://json-rpc.evm.shimmer.network'],
    blockExplorerUrls: ['https://explorer.evm.shimmer.network/'],
  },
};

interface MetaMaskButtonProps {
  cfg: unknown;
}

export function AddToMetaMaskButton(props: MetaMaskButtonProps) {
  async function addNetwork() {
    if (!window.ethereum) {
      alert(
        'MetaMask is not installed. Please install MetaMask and try again.',
      );
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [props.cfg],
      });
    } catch (error) {
      console.error(error);
      console.log('Error adding network: ' + error.message);
    }
  }

  return (
    <button
      className={`button button--primary button--md margin-bottom--md`}
      onClick={() => addNetwork()}
    >
      Add to MetaMask
    </button>
  );
}
