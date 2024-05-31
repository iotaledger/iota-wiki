import React from 'react';
import { useEffect, useState } from 'react';
import { Web3 } from 'web3';

interface ChainIdProps {
  url: string;
}

export function ChainId(props: ChainIdProps) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const web3 = new Web3(props.url);
    web3.eth
      .getChainId()
      .then((chainId) => setValue(chainId.toString()))
      .catch((error) => setValue(`Error: ${error.message}`));
  }, []);

  return <>{value}</>;
}
