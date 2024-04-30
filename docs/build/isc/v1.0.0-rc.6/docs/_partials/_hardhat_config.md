import CodeBlock from '@theme/CodeBlock';
import { Networks } from '@theme/constant';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId='network'>
<TabItem value='shimmer_testnet' label='ShimmerEVM Testnet'>

<CodeBlock language="js">
{`
networks: {
    'shimmerevm-testnet': {
        url: '${Networks['shimmer_testnet'].evm.rpcUrls[0]}',
        chainId: ${parseInt(Networks['shimmer_testnet'].evm.chainId)},
        accounts: [YOUR PRIVATE KEY],
    },
}
`}
</CodeBlock>

</TabItem>
<TabItem value='iota_testnet' label='IOTA EVM Testnet'>

<CodeBlock language="js">
{`
networks: {
    'iotaevm-testnet': {
        url: '${Networks['iota_testnet'].evm.rpcUrls[0]}',
        chainId: ${parseInt(Networks['iota_testnet'].evm.chainId)},
        accounts: [YOUR PRIVATE KEY],
    },
}
`}
</CodeBlock>

</TabItem>
<TabItem value='shimmer' label='ShimmerEVM'>

<CodeBlock language="js">
{`
networks: {
    'shimmerevm': {
        url: '${Networks['shimmer'].evm.rpcUrls[0]}',
        chainId: ${parseInt(Networks['shimmer'].evm.chainId)},
        accounts: [YOUR PRIVATE KEY],
    },
}
`}
</CodeBlock>

</TabItem>
</Tabs>