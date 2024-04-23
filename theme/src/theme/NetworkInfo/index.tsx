import React from 'react';
import { ChainId } from '../ChainId';
import { NetworkProps } from '../constant';
import CodeBlock from '@theme/CodeBlock';

function L1(props: NetworkProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Base Token</th>
          <th>Protocol</th>
          <th>HTTP REST API</th>
          <th>Event API</th>
          <th>Permanode API</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.baseToken}</td>
          <td>{props.protocol}</td>
          <td>
            <a
              href={props.httpRestApi}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p>{props.httpRestApi}</p>
            </a>
          </td>
          <td>
            {props.eventApi}
          </td>
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
      <thead>
        <tr>
          <th>Base Token</th>
          <th>Protocol</th>
          <th>Chain ID</th>
          <th>RPC URL</th>
          <th>Explorer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.baseToken}</td>
          <td>ISC / EVM</td>
          <td>
            <ChainId url={props.evm.rpcUrls[0]} />
          </td>
          <td>
            {props.evm.rpcUrls.map((url, index) => (
              <CodeBlock>
                {url}
              </CodeBlock>
            ))}
          </td>
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
      </tbody>
    </table>
  );
}

function EvmCustom(props: NetworkProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Chain Address</th>
          <th>Alias ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a
              href={props.explorer + '/addr/' + props.evmCustom.chainAddress}
              target='_blank'
              rel='noopener noreferrer'
            >
              {props.evmCustom.chainAddress}
            </a>
          </td>
          <td>
            {props.evmCustom.aliasId}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default {
  L1,
  Evm,
  EvmCustom,
}
