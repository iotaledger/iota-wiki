/// <reference types="@docusaurus/theme-classic" />

declare module '@theme/CodeSnippetBlock' {
  import type { Props as BaseProps } from '@theme/CodeBlock';

  export interface Props extends Omit<BaseProps, 'children'> {
    language: string;
    code: string;
    startString?: string;
    endString?: string;
  }

  export default function CodeSnippetBlock(props: Props): JSX.Element;
}

declare module '@theme/AddToMetaMaskButton' {
  export default function AddToMetaMaskButton(): JSX.Element;
}

declare module '@theme/DocBanner' {
  export default function DocBanner(): JSX.Element;
}

declare module '@theme/NetworkInfo' {
  export default {
    IOTA: JSX.Element,
    IOTAEVM: JSX.Element,
    IOTAEVMAdditional: JSX.Element,
    Shimmer: JSX.Element,
    ShimmerEVM: JSX.Element,
    ShimmerEVMAdditional: JSX.Element,
    Testnet: JSX.Element,
    TestnetEVM: JSX.Element,
    TestnetEVMAdditional: JSX.Element,
  };
}
