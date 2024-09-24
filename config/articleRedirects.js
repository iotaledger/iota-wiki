const fs = require('fs');

function directoryExists(directoryPath) {
  try {
    return fs.statSync(directoryPath).isDirectory();
  } catch (err) {
    return false;
  }
}

const ApiCore = [
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/blocks',
    to: '/apis/core/v2/submit-a-block',
  },
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/control',
    to: '/apis/core/v2/prunes-the-node-database',
  },
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/milestones',
    to: '/apis/core/v2/look-up-a-milestone-by-a-given-milestone-id',
  },
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/node',
    to: '/apis/core/v2/returns-the-health-of-the-node',
  },
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/peers',
    to: '/apis/core/v2/get-information-about-the-peers-of-the-node',
  },
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/tangle',
    to: '/apis/core/v2/returns-tips-that-are-ideal-for-attaching-a-block',
  },
  {
    from: '/shimmer/develop/category/nodes/core-rest-api/utxo',
    to: '/apis/core/v2/find-an-output-by-its-identifier',
  },
];

exports.articleRedirects = [
  ...(directoryExists('./docs/build/apis/docs/core') ? ApiCore : []),
  {
    from: '/develop/endpoints/mainnet',
    to: '/build/networks-endpoints',
  },
  {
    from: '/develop/network-token-migration',
    to: '/tips/tips/TIP-0017',
  },
  {
    from: '/develop/nodes/about-nodes',
    to: '/maintain/welcome',
  },
  {
    from: '/develop/nodes/api_reference',
    to: '/apis/welcome',
  },
  {
    from: '/develop/nodes/become-a-node-operator',
    to: '/maintain/welcome',
  },
  {
    from: '/develop/nodes/explanations/nodes_101',
    to: '/maintain/welcome',
  },
  {
    from: '/develop/nodes/explanations/security_101',
    to: '/maintain/welcome',
  },
  {
    from: '/develop/nodes/node-software',
    to: '/maintain/welcome',
  },
  {
    from: '/develop/tools',
    to: '/build/tools',
  },
  {
    from: '/develop/welcome',
    to: '/build/welcome',
  },
  {
    from: '/learn/about-iota/an-introduction-to-iota',
    to: '/learn/protocols/introduction',
  },
  {
    from: '/learn/about-iota/coordinator',
    to: '/learn/protocols/coordinator',
  },
  {
    from: '/learn/about-iota/data-transfer',
    to: '/learn/protocols/stardust/core-concepts/output-features',
  },
  {
    from: '/learn/about-iota/energy-efficiency',
    to: '/learn/protocols/stardust/introduction',
  },
  {
    from: '/learn/about-iota/messages',
    to: '/tips/tips/TIP-0006',
  },
  {
    from: '/learn/about-iota/tangle',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/about-iota/value-transfer',
    to: '/learn/protocols/stardust/core-concepts/output-features',
  },
  {
    from: '/learn/about-iota/why-is-iota-feeless',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/faqs',
    to: '/get-started/faq',
  },
  {
    from: '/learn/iota-token/buying-iota',
    to: '/get-started/introduction/iota/iota-token',
  },
  {
    from: '/learn/iota-token/staking-iota',
    to: '/get-started/research-papers',
  },
  {
    from: '/learn/research/iota-devnet-wallet',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/research/research-outline',
    to: '/get-started/research-papers',
  },
  {
    from: '/learn/research/research-papers',
    to: '/get-started/research-papers',
  },
  {
    from: '/learn/use-cases/data-confidence',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/use-cases/eco-social-projects',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/use-cases/healthcare',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/use-cases/industry-applications',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/use-cases/mobility',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/use-cases/real-estate',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/learn/use-cases/trade-and-supply-chain',
    to: '/get-started/introduction/iota/introduction',
  },
  { from: '/shimmer', to: '/' },
  {
    from: '/shimmer/cookie-policy',
    to: '/cookie-policy',
  },
  {
    from: '/shimmer/develop/docs',
    to: '/build/welcome',
  },
  {
    from: '/shimmer/develop/endpoints/shimmer',
    to: '/build/networks-endpoints',
  },
  {
    from: '/shimmer/develop/endpoints/testnet',
    to: '/build/networks-endpoints',
  },
  {
    from: '/shimmer/develop/explanations/protocol-tip',
    to: '/learn/protocols/stardust/tips',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/clients',
    to: '/build/welcome',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/introduction',
    to: '/learn/protocols/stardust/introduction',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/layer-1-landscape',
    to: '/learn/protocols/introduction',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/networks',
    to: '/learn/protocols/introduction',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/nodes/about-nodes',
    to: '/maintain/welcome',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/nodes/become-a-node-operator',
    to: '/maintain/welcome',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/nodes/hornet',
    to: '/hornet/welcome',
  },
  {
    from: '/shimmer/develop/explanations/what-is-shimmer/tokens-and-wallets',
    to: '/get-started/introduction/shimmer/shimmer-token',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust',
    to: '/learn/protocols/stardust/introduction',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/data-processing',
    to: '/learn/protocols/stardust/core-concepts/output-features',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/dynamic-pow',
    to: '/tips',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/output-features',
    to: '/learn/protocols/stardust/core-concepts/output-features',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/protecting-users',
    to: '/tips/tips/TIP-0020',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/rethink-utxo',
    to: '/tips/tips/TIP-0020',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/sc-support',
    to: '/learn/protocols/stardust/introduction',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/storage-deposit',
    to: '/learn/protocols/stardust/core-concepts/storage-deposit',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/tokenization',
    to: '/learn/protocols/stardust/core-concepts/multi-asset-ledger',
  },
  {
    from: '/shimmer/develop/explanations/what-is-stardust/unlock-conditions',
    to: '/learn/protocols/stardust/core-concepts/output-unlock-conditions',
  },
  {
    from: '/shimmer/develop/how-tos/introduction',
    to: '/iota-sdk/how-tos/introduction',
  },
  {
    from: '/shimmer/develop/how-tos/native-token/burn-tokens',
    to: '/iota-sdk/how-tos/native-tokens/burn',
  },
  {
    from: '/shimmer/develop/how-tos/native-token/create-foundry',
    to: '/iota-sdk/how-tos/native-tokens/create',
  },
  {
    from: '/shimmer/develop/how-tos/native-token/introduction',
    to: '/iota-sdk/how-tos/native-tokens/create',
  },
  {
    from: '/shimmer/develop/how-tos/native-token/melt-tokens',
    to: '/iota-sdk/how-tos/native-tokens/melt',
  },
  {
    from: '/shimmer/develop/how-tos/native-token/mint-tokens',
    to: '/iota-sdk/how-tos/native-tokens/mint',
  },
  {
    from: '/shimmer/develop/how-tos/native-token/storage-deposits',
    to: '/iota-sdk/how-tos/native-tokens/create',
  },
  {
    from: '/shimmer/develop/how-tos/nft/burn',
    to: '/iota-sdk/how-tos/nfts/burn-nft',
  },
  {
    from: '/shimmer/develop/how-tos/nft/claim',
    to: '/iota-sdk/how-tos/advanced-transactions/claim-transaction',
  },
  {
    from: '/shimmer/develop/how-tos/nft/introduction',
    to: '/iota-sdk/how-tos/nfts/mint-nft',
  },
  {
    from: '/shimmer/develop/how-tos/nft/mint',
    to: '/iota-sdk/how-tos/nfts/mint-nft',
  },
  {
    from: '/shimmer/develop/how-tos/nft/nft-as-a-wallet',
    to: '/iota-sdk/how-tos/alias-wallet/transaction',
  },
  {
    from: '/shimmer/develop/how-tos/nft/nft-collections',
    to: '/iota-sdk/how-tos/nfts/mint-nft',
  },
  {
    from: '/shimmer/develop/how-tos/nft/transfer',
    to: '/iota-sdk/how-tos/nfts/send-nft',
  },
  {
    from: '/shimmer/develop/how-tos/output-features/metadata',
    to: '/iota-sdk/how-tos/outputs/features',
  },
  {
    from: '/shimmer/develop/how-tos/output-features/sender',
    to: '/iota-sdk/how-tos/outputs/features',
  },
  {
    from: '/shimmer/develop/how-tos/output-features/tag',
    to: '/iota-sdk/how-tos/outputs/features',
  },
  {
    from: '/shimmer/develop/how-tos/output-unlock-conditions/expiration',
    to: '/iota-sdk/how-tos/outputs/unlock-conditions',
  },
  {
    from: '/shimmer/develop/how-tos/output-unlock-conditions/storage-deposit-return',
    to: '/iota-sdk/how-tos/outputs/unlock-conditions',
  },
  {
    from: '/shimmer/develop/how-tos/output-unlock-conditions/timelock',
    to: '/iota-sdk/how-tos/outputs/unlock-conditions',
  },
  {
    from: '/shimmer/develop/how-tos/request-testnet-funds',
    to: '/iota-sdk/how-tos/simple-transaction/request-funds',
  },
  {
    from: '/shimmer/develop/how-tos/seeds-accounts-and-addresses/accounts-and-addresses',
    to: '/iota-sdk/explanations/accounts-and-addresses',
  },
  {
    from: '/shimmer/develop/how-tos/seeds-accounts-and-addresses/seed-mnemonics',
    to: '/iota-sdk/how-tos/accounts-and-addresses/create-mnemonic',
  },
  {
    from: '/shimmer/develop/how-tos/simple-transfer',
    to: '/iota-sdk/how-tos/simple-transaction',
  },
  {
    from: '/shimmer/develop/how-tos/verify_download',
    to: '/introduction/stardust/how_tos/verify_download',
  },
  {
    from: '/shimmer/develop/nodes/api_reference',
    to: '/apis/welcome',
  },
  {
    from: '/shimmer/develop/tools',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/shimmer/learn/coordinator',
    to: '/learn/protocols/coordinator',
  },
  {
    from: '/shimmer/learn/data-and-value-transfer',
    to: '/learn/protocols/stardust/core-concepts/multi-asset-ledger',
  },
  {
    from: '/shimmer/learn/dust-protection',
    to: '/learn/protocols/stardust/core-concepts/multi-asset-ledger',
  },
  {
    from: '/shimmer/learn/glossary',
    to: '/learn/glossary',
  },
  {
    from: '/shimmer/learn/maintenance',
    to: '/learn/protocols/stardust/introduction',
  },
  {
    from: '/shimmer/learn/native-assets',
    to: '/learn/protocols/stardust/core-concepts/multi-asset-ledger',
  },
  {
    from: '/shimmer/learn/outputs',
    to: '/learn/protocols/stardust/core-concepts/output-features',
  },
  {
    from: '/shimmer/learn/role-of-token',
    to: '/get-started/introduction/shimmer/shimmer-token',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-community-tutorials',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-consensus',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-dapps',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-introduction',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-tangle',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-validators',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/smart-contracts/smart-contracts-VM-and-languages',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/learn/tangle',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/shimmer/learn/token/buying',
    to: '/get-started/introduction/iota/iota-token',
  },
  {
    from: '/shimmer/learn/welcome',
    to: '/get-started/introduction/iota/introduction',
  },
  {
    from: '/shimmer/search',
    to: '/search',
  },
  {
    from: '/smart-contracts',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/smart-contracts',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/next/smart-contracts',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/smart-contracts/configuration',
    to: '/wasp/reference/configuration',
  },
  {
    from: '/shimmer/smart-contracts/contribute',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/smart-contracts/metrics',
    to: '/wasp/reference/metrics',
  },
  {
    from: '/shimmer/learn/smart-contracts/introduction',
    to: '/learn/smart-contracts/introduction',
  },
  {
    from: '/shimmer/use/wallets/firefly/faq-and-troubleshooting',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/shimmer/use/wallets/firefly/general',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/shimmer/use/wallets/firefly/user-guide-ledger',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/shimmer/use/wallets/firefly/user-guide',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/shimmer/use/wallets/what-is-a-wallet',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/use/wallets/firefly/faq-and-troubleshooting',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/use/wallets/firefly/general',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/use/wallets/firefly/user-guide-ledger',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/use/wallets/firefly/user-guide',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/use/wallets/what-is-a-wallet',
    to: '/get-started/wallets/firefly',
  },
  {
    from: '/identity.rs/concepts/decentralized_identifiers/alias/',
    to: '/identity.rs/explanations/about-alias-outputs/',
  },
  {
    from: '/identity.rs/concepts/decentralized_identifiers/create/',
    to: '/identity.rs/how-tos/decentralized-identifiers/create/',
  },
  {
    from: '/identity.rs/concepts/decentralized_identifiers/delete/',
    to: '/identity.rs/how-tos/decentralized-identifiers/delete/',
  },
  {
    from: '/identity.rs/concepts/decentralized_identifiers/overview/',
    to: '/identity.rs/explanations/decentralized-identifiers/',
  },
  {
    from: '/identity.rs/concepts/decentralized_identifiers/resolve/',
    to: '/identity.rs/how-tos/decentralized-identifiers/resolve/',
  },
  {
    from: '/identity.rs/concepts/decentralized_identifiers/update/',
    to: '/identity.rs/how-tos/decentralized-identifiers/update/',
  },
  {
    from: '/identity.rs/concepts/domain_linkage/',
    to: '/identity.rs/how-tos/domain-linkage/create-and-verify/',
  },
  {
    from: '/identity.rs/concepts/key_storage/',
    to: '/identity.rs/how-tos/key-storage/',
  },
  {
    from: '/identity.rs/concepts/verifiable_credentials/create/',
    to: '/identity.rs/how-tos/verifiable-credentials/create/',
  },
  {
    from: '/identity.rs/concepts/verifiable_credentials/overview/',
    to: '/identity.rs/explanations/verifiable-credentials/',
  },
  {
    from: '/identity.rs/concepts/verifiable_credentials/revocation/',
    to: '/identity.rs/how-tos/verifiable-credentials/revocation/',
  },
  {
    from: '/identity.rs/concepts/verifiable_credentials/verifiable_presentations/',
    to: '/identity.rs/explanations/verifiable-presentations/',
  },
  {
    from: '/identity.rs/decentralized_identity/',
    to: '/identity.rs/explanations/decentralized-identifiers/',
  },
  {
    from: '/identity.rs/getting_started/create_and_publish/',
    to: '/identity.rs/how-tos/decentralized-identifiers/create/',
  },
  {
    from: '/identity.rs/getting_started/install/',
    to: '/identity.rs/getting-started/rust/',
  },
  {
    from: '/identity.rs/getting_started/overview/',
    to: '/identity.rs/getting-started/rust/',
  },
  {
    from: '/identity.rs/introduction/',
    to: '/identity.rs/welcome/',
  },
  {
    from: '/identity.rs/libraries/overview/',
    to: '/identity.rs/welcome/',
  },
  {
    from: '/identity.rs/libraries/rust/getting_started/',
    to: '/identity.rs/getting-started/rust/',
  },
  {
    from: '/identity.rs/libraries/wasm/api_reference/',
    to: '/identity.rs/references/wasm/api_ref',
  },
  {
    from: '/identity.rs/libraries/wasm/getting_started/',
    to: '/identity.rs/getting-started/wasm/',
  },
  {
    from: '/identity.rs/specs/did/iota_did_method_spec/',
    to: '/identity.rs/references/specifications/iota-did-method-spec/',
  },
  {
    from: '/identity.rs/specs/did/overview/',
    to: '/identity.rs/references/specifications/overview/',
  },
  {
    from: '/identity.rs/specs/overview/',
    to: '/identity.rs/references/specifications/overview/',
  },
  {
    from: '/identity.rs/specs/revocation_bitmap_2022/',
    to: '/identity.rs/references/specifications/revocation-bitmap-2022/',
  },
];
