import React from 'react';
import type { MetaMaskInpageProvider } from '@metamask/providers';
import { NetworkProps } from '../constant';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export function AddToMetaMaskButton(props: NetworkProps) {
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
        params: [props.evm.core],
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
