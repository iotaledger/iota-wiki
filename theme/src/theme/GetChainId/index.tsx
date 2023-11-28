import React, { useEffect, useState } from 'react';
import { Web3 } from 'web3';

interface GetChainIdProps {
  url: string;
}

export function GetChainId(props: GetChainIdProps) {
  const [chainId, setChainId] = useState<bigint | null>(null);
  const [error, setError] = useState<Error | null>(null);

  console.log(props.url);

  useEffect(() => {
    const web3 = new Web3(props.url);
    web3.eth.getChainId().then(setChainId).catch(setError);
  }, []);

  console.log(chainId);
  return (
    <>
      {chainId !== null && <span>{chainId.toString()}</span>}
      {error !== null && <span>Error: {error.message}</span>}
    </>
  );
}
