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
    contentLoaded: async ({ actions, content, ...args }) => {
      const setGlobalData = (data: {}) => {
        actions.setGlobalData({
          ...data,
          globalSidebars: Object.fromEntries(
            // This is safe because we only allow the 'current' version.
            Object.entries(content.loadedVersions[0].sidebars).filter(
              ([sidebarId]) => globalSidebars.includes(sidebarId),
            ),
          ),
        });
      };

      await plugin.contentLoaded({
        ...args,
        content,
        actions: {
          ...actions,
          setGlobalData,
        },
      });
    },
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
