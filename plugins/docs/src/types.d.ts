import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  Options as DocsOptions,
  PluginOptions as DocsPluginOptions,
} from '@docusaurus/plugin-content-docs';
import { GlobalPluginData as DocsGlobalPluginData } from '@docusaurus/plugin-content-docs/src/client';
import {
  OptionValidationContext as DocsOptionValidationContext,
  Validate,
} from '@docusaurus/types';

export type PluginOptions = DocsPluginOptions & {
  globalSidebars: string[];
};

export type Options = Partial<PluginOptions>;

export type OptionValidationContext = {
  // Docusaurus does not export their schemas for us to use,
  // so we just pass validate function on to the docs plugin validation.
  validate: Validate<DocsOptions, DocsPluginOptions>;
  options: PluginOptions;
};

export type GlobalPluginData = DocsGlobalPluginData & {
  globalSidebars?: {
    [key: string]: PropSidebarItem[];
  };
};

declare module '@docusaurus/plugin-content-docs' {
  export function validateOptions(
    arg: DocsOptionValidationContext<DocsOptions, DocsPluginOptions>,
  ): DocsPluginOptions;
}
