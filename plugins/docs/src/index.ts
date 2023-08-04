import type { LoadContext, Plugin } from '@docusaurus/types';
import { OptionValidationContext, PluginOptions } from './types';
import docsPlugin, {
  validateOptions as docsValidateOptions,
  LoadedContent as DocsContentLoaded,
  PropVersionMetadata,
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
      const globalSidebarEntries = [];

      const createData = async (name: string, data: string) => {
        const versionMetadata = JSON.parse(data) as PropVersionMetadata;
        if (versionMetadata.docsSidebars) {
          Object.entries(versionMetadata.docsSidebars)
            .filter(([sidebarId]) => globalSidebars.includes(sidebarId))
            .forEach((entry) => globalSidebarEntries.push(entry));
        }
        return await actions.createData(name, data);
      };

      const setGlobalData = (data: {}) => {
        actions.setGlobalData({
          ...data,
          globalSidebars: Object.fromEntries(globalSidebarEntries),
        });
      };

      await plugin.contentLoaded({
        ...args,
        content,
        actions: {
          ...actions,
          createData,
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
