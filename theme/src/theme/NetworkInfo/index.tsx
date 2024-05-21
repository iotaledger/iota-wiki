import React from 'react';
import { ChainId } from '../ChainId';
import { NetworkProps } from '../constant';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

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
          <th>
            <Admonition type='tip' title='Blast API URLs'>
              This are highly scalable and fault-tolerant API endpoints provided
              by our partner Blast. You can find more information about Blast
              and how to apply for special Blast API endpoints{' '}
              <a href={'/build/blastAPI/'}>here</a>.
            </Admonition>
          </th>
          <td>
            {props.evm.blastApiUrls &&
              props.evm.blastApiUrls.map((object, index) =>
                typeof object === 'string' ? (
                  <CodeBlock> {object as string} </CodeBlock>
                ) : (
                  <CodeBlock title={Object.keys(object)[0]}>
                    {' '}
                    {Object.values(object)[0]}{' '}
                  </CodeBlock>
                ),
              )}
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
