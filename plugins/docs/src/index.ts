import type { LoadContext, Plugin } from '@docusaurus/types';
import { OptionValidationContext, PluginOptions } from './types';
import docsPlugin, {
  validateOptions as docsValidateOptions,
  LoadedContent as DocsContentLoaded,
} from '@docusaurus/plugin-content-docs';

export default async function pluginDocs(
  context: LoadContext,
  options: PluginOptions,
): Promise<Plugin<DocsContentLoaded>> {
  const { globalSidebars, ...docsOptions } = options;
  const plugin = await docsPlugin(context, docsOptions);

  return {
    ...plugin,
  };
}

export function validateOptions({
  validate,
  options,
}: OptionValidationContext): PluginOptions {
  const { globalSidebars = [], ...docsOptions } = options;
  return {
    ...docsValidateOptions({ validate, options: docsOptions }),
    globalSidebars,
  };
}
