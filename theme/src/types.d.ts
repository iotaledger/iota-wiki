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
