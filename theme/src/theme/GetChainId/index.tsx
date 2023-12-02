import { useEffect, useState } from 'react';
import { Web3 } from 'web3';

interface GetChainIdProps {
  url: string;
}

export function GetChainId(props: GetChainIdProps) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const web3 = new Web3(props.url);
    web3.eth
      .getChainId()
      .then((chainId) => setValue(chainId.toString()))
      .catch((error) => setValue(`Error: ${error.message}`));
  }, []);

  return value;
}
