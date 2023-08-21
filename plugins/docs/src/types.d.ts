import {
  Options as DocsOptions,
  PluginOptions as DocsPluginOptions,
  LoadedContent as DocsLoadedContent,
} from '@docusaurus/plugin-content-docs';
import {
  OptionValidationContext as DocsOptionValidationContext,
  Validate,
} from '@docusaurus/types';

export type LoadedContent = DocsLoadedContent & {
  banner?: string;
};

export type PluginOptions = DocsPluginOptions & {
  globalSidebars: string[];
  banner?: string;
};

export type Options = Partial<PluginOptions>;

export type OptionValidationContext = {
  // Docusaurus does not export their schemas for us to use,
  // so we just pass validate function on to the docs plugin validation.
  validate: Validate<DocsOptions, DocsPluginOptions>;
  options: PluginOptions;
};

declare module '@docusaurus/plugin-content-docs' {
  export function validateOptions(
    arg: DocsOptionValidationContext<DocsOptions, DocsPluginOptions>,
  ): DocsPluginOptions;
}
