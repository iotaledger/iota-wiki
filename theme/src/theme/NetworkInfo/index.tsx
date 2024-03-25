import React from 'react';
import { ChainId } from '../ChainId';

// TODO: Host network info in a top-level configuration file
// and use it to generate these tables.

function IOTA() {
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
          <td>IOTA Token</td>
          <td>Stardust</td>
          <td>
            <a
              href='https://api.stardust-mainnet.iotaledger.net'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://api.stardust-mainnet.iotaledger.net
            </a>
          </td>
          <td>
            wss://api.stardust-mainnet.iotaledger.net:443 (MQTT 3.1, /mqtt)
          </td>
          <td>
            <a
              href='https://chronicle.stardust-mainnet.iotaledger.net'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://chronicle.stardust-mainnet.iotaledger.net
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function IotaEVM() {
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
          <td>IOTA Token</td>
          <td>ISC / EVM</td>
          <td>
            <ChainId url='https://json-rpc.evm.iotaledger.net' />
          </td>
          <td>
            <a
              href='https://json-rpc.evm.iotaledger.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://json-rpc.evm.iotaledger.network
            </a>{' '}
            or wss://ws.json-rpc.evm.iotaledger.network
          </td>
          <td>
            <a
              href='https://iota-evm.blockscout.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://iota-evm.blockscout.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function IotaEVMAdditional() {
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
              href='https://explorer.iota.org/mainnet/addr/iota1pzt3mstq6khgc3tl0mwuzk3eqddkryqnpdxmk4nr25re2466uxwm28qqxu5'
              target='_blank'
              rel='noopener noreferrer'
            >
              iota1pzt3mstq6khgc3tl0mwuzk3eqddkryqnpdxmk4nr25re2466uxwm28qqxu5
            </a>
          </td>
          <td>
            0xccc7018e4fa63e5014332f45ddc8a5450da89572676d12d4d5e51c98d64155b3
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Shimmer() {
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
          <td>Shimmer Token</td>
          <td>Stardust</td>
          <td>
            <a
              href='https://api.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://api.shimmer.network
            </a>
          </td>
          <td>wss://api.shimmer.network:443/api/mqtt/v1 (MQTT 3.1)</td>
          <td>
            <a
              href='https://chronicle.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://chronicle.shimmer.network
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ShimmerEVM() {
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
          <td>Shimmer Token</td>
          <td>ISC / EVM</td>
          <td>
            <ChainId url='https://json-rpc.evm.shimmer.network' />
          </td>
          <td>
            <a
              href='https://json-rpc.evm.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://json-rpc.evm.shimmer.network
            </a>{' '}
            or wss://ws.json-rpc.evm.shimmer.network
          </td>
          <td>
            <a
              href='https://explorer.evm.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://explorer.evm.shimmer.network
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ShimmerEVMAdditional() {
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
              href='https://explorer.shimmer.network/shimmer/addr/smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s'
              target='_blank'
              rel='noopener noreferrer'
            >
              smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s
            </a>
          </td>
          <td>
            0xccc7018e4fa63e5014332f45ddc8a5450da89572676d12d4d5e51c98d64155b3
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Testnet() {
  return (
    <table>
      <thead>
        <tr>
          <th>Base Token</th>
          <th>Protocol</th>
          <th>HTTP REST API</th>
          <th>Event API</th>
          <th>Permanode API</th>
          <th>Faucet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Testnet Tokens (no value)</td>
          <td>Stardust</td>
          <td>
            <code>https://api.testnet.shimmer.network</code>
          </td>
          <td>wss://api.testnet.shimmer.network:443/api/mqtt/v1 (MQTT 3.1)</td>
          <td>
            <a
              href='https://chronicle.testnet.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://chronicle.testnet.shimmer.network
            </a>
          </td>
          <td>
            <a
              href='https://faucet.testnet.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://faucet.testnet.shimmer.network
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function TestnetEVM() {
  return (
    <table>
      <thead>
        <tr>
          <th>Base Token</th>
          <th>Protocol</th>
          <th>Chain ID</th>
          <th>RPC URL</th>
          <th>Faucet</th>
          <th>Explorer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Testnet Tokens (no value)</td>
          <td>ISC / EVM</td>
          <td>
            <ChainId url='https://json-rpc.evm.testnet.shimmer.network' />
          </td>
          <td>
            <a
              href='https://json-rpc.evm.testnet.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://json-rpc.evm.testnet.shimmer.network
            </a>
          </td>
          <td>
            <a
              href='https://evm-faucet.testnet.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://evm-faucet.testnet.shimmer.network
            </a>
          </td>
          <td>
            <a
              href='https://explorer.evm.testnet.shimmer.network'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://explorer.evm.testnet.shimmer.network
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function TestnetEVMAdditional() {
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
              href='https://explorer.shimmer.network/testnet/addr/rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex'
              target='_blank'
              rel='noopener noreferrer'
            >
              rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex
            </a>
          </td>
          <td>
            0x42f7da9bdb55b3ec87e5ac1a1e6d88e16768663fde5eca3429eb6f579cc538ac
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default {
  IOTA,
  IotaEVM,
  IotaEVMAdditional,
  Shimmer,
  ShimmerEVM,
  ShimmerEVMAdditional,
  Testnet,
  TestnetEVM,
  TestnetEVMAdditional,
};
