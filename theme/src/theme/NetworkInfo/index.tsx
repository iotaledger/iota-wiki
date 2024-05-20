import React from 'react';
import { ChainId } from '../ChainId';
import { NetworkProps } from '../constant';
import CodeBlock from '@theme/CodeBlock';

function L1(props: NetworkProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Base Token</th>
          <td>{props.baseToken}</td>
        </tr>
        <tr>
          <th>Protocol</th>
          <td>{props.protocol}</td>
        </tr>
        <tr>
          <th>HTTP REST API</th>
          <td>
            <a
              href={props.httpRestApi}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p>{props.httpRestApi}</p>
            </a>
          </td>
        </tr>
        <tr>
          <th>Event API</th>
          <td>{props.eventApi}</td>
        </tr>
        <tr>
          <th>Permanode API</th>
          <td>
            <a
              href={props.permaNodeApi}
              target='_blank'
              rel='noopener noreferrer'
            >
              {props.permaNodeApi}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Evm(props: NetworkProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Base Token</th>
          <td>{props.baseToken}</td>
        </tr>
        <tr>
          <th>Protocol</th>
          <td>ISC / EVM</td>
        </tr>
        <tr>
          <th>Chain ID</th>
          <td>
            <ChainId url={props.evm.rpcUrls[0]} />
          </td>
        </tr>
        <tr>
          <th>RPC URL</th>
          <td>
            {props.evm.rpcUrls.map((url, index) => (
              <CodeBlock key={index}>{url}</CodeBlock>
            ))}
          </td>
        </tr>
        <tr>
          <th>Explorer</th>
          <td>
            <a
              href={props.evm.blockExplorerUrls[0]}
              target='_blank'
              rel='noopener noreferrer'
            >
              {props.evm.blockExplorerUrls[0]}
            </a>
          </td>
        </tr>
        {props.evm.BlastAPIUrls &&
            Object.keys(props.evm.BlastAPIUrls).map((keyName, index) => (
              <tr key={index}>
                <th><a href={'/build/blastAPI/'}>Blast API</a> {keyName} URL</th>
                <td><CodeBlock> {props.evm.BlastAPIUrls[keyName]} </CodeBlock></td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

function EvmCustom(props: NetworkProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Chain Address</th>
          <td>
            <a
              href={props.explorer + '/addr/' + props.evmCustom.chainAddress}
              target='_blank'
              rel='noopener noreferrer'
            >
              {props.evmCustom.chainAddress}
            </a>
          </td>
        </tr>
        <tr>
          <th>Alias ID</th>
          <td>{props.evmCustom.aliasId}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default {
  L1,
  Evm,
  EvmCustom,
};
