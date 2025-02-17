import CodeBlock from '@theme/CodeBlock';
import { Networks } from '@theme/constant';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId='network' queryString>
<TabItem value='iota_testnet' label='IOTA EVM Testnet'>

<CodeBlock language="js">
{`
networks: {
    'iotaevm-testnet': {
        url: '${Networks['iota_testnet'].evm.core.rpcUrls[0]}',
        chainId: ${parseInt(Networks['iota_testnet'].evm.core.chainId)},
        accounts: [YOUR PRIVATE KEY],
    },
}
`}
</CodeBlock>

</TabItem>
<TabItem value='shimmer_testnet' label='ShimmerEVM Testnet'>

<CodeBlock language="js">
{`
networks: {
    'shimmerevm-testnet': {
        url: '${Networks['shimmer_testnet'].evm.core.rpcUrls[0]}',
        chainId: ${parseInt(Networks['shimmer_testnet'].evm.core.chainId)},
        accounts: [YOUR PRIVATE KEY],
    },
}
`}
</CodeBlock>

</TabItem>
<TabItem value='iota' label='IOTA EVM'>

<CodeBlock language="js">
{`
networks: {
    'iotaevm': {
        url: '${Networks['iota'].evm.core.rpcUrls[0]}',
        chainId: ${parseInt(Networks['iota'].evm.core.chainId)},
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
        url: '${Networks['shimmer'].evm.core.rpcUrls[0]}',
        chainId: ${parseInt(Networks['shimmer'].evm.core.chainId)},
        accounts: [YOUR PRIVATE KEY],
    },
}
`}
</CodeBlock>

</TabItem>
</Tabs>