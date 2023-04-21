import React from 'react';
import type { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default function AddToMetaMaskButton() {
  async function addNetwork() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x42F', // Replace with the chain ID of the network you want to add
              chainName: 'ShimmerEVM Testnet', // Replace with the name of the network
              nativeCurrency: {
                name: 'Shimmer', // Replace with the name of the native currency
                symbol: 'SMR', // Replace with the symbol of the native currency
                decimals: 18, // Replace with the number of decimals of the native currency
              },
              rpcUrls: ['https://json-rpc.evm.testnet.shimmer.network'], // Replace with the RPC URL(s) of the network
              blockExplorerUrls: [
                'https://explorer.evm.testnet.shimmer.network/',
              ], // Replace with the block explorer URL(s) of the network (optional)
            },
          ],
        });
      } catch (error) {
        console.error(error);
        console.log('Error adding network: ' + error.message);
      }
    } else {
      alert(
        'MetaMask is not installed. Please install MetaMask and try again.',
      );
    }
  }

  return (
    <button
      className={`button button--primary margin`}
      onClick={() => addNetwork()}
    >
      Add ShimmerEVM Testnet to MetaMask
    </button>
  );
}
