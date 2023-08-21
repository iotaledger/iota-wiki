import type { LoadContext, Plugin } from '@docusaurus/types';
import { LoadedContent, OptionValidationContext, PluginOptions } from './types';
import docsPlugin, {
  validateOptions as docsValidateOptions,
  LoadedContent as DocsContentLoaded,
  PropVersionMetadata,
} from '@docusaurus/plugin-content-docs';
import fs from 'fs/promises';
import path from 'path';

export default async function pluginDocs(
  context: LoadContext,
  options: PluginOptions,
): Promise<Plugin<LoadedContent>> {
  // Destructure to separate the Docusaurus docs plugin options
  // and initialize the Docusaurus docs plugin to wrap.
  const { banner, globalSidebars, ...docsOptions } = options;
  const plugin = await docsPlugin(context, docsOptions);

  return {
    ...plugin,
    getPathsToWatch: () => {
      const pathsToWatch = plugin.getPathsToWatch();

      if (banner) pathsToWatch.push(path.resolve(context.siteDir, banner));

      return pathsToWatch;
    },
    loadContent: async () => {
      const docsLoadedContent = await plugin.loadContent();
      return {
        ...docsLoadedContent,
        // Load banner content from file
        banner: banner
          ? await fs.readFile(banner, {
              encoding: 'utf-8',
            })
          : undefined,
      };
    },
    translateContent: ({ content, ...args }) => {
      // Propagate banner content
      const { banner, ...docsContent } = content;
      const docsContentLoaded = plugin.translateContent({
        content: docsContent,
        ...args,
      });
      return {
        ...docsContentLoaded,
        banner,
      };
    },
    // Override the `contentLoaded` function to add sidebars to the
    // global data exposed by the Docusaurus docs plugin.
    contentLoaded: async ({ actions, content, ...args }) => {
      const { banner, ...docsContent } = content;
      const globalSidebarEntries = [];

      const createData = async (name: string, data: string) => {
        // Hook into the `createData` call to extract the sidebars we need.
        const versionMetadata = JSON.parse(data) as PropVersionMetadata;
        if (versionMetadata.docsSidebars) {
          // We can do this, because all `createData` calls are assured
          // to resolve before `setGlobalData` is called.
          Object.entries(versionMetadata.docsSidebars)
            .filter(([sidebarId]) => globalSidebars.includes(sidebarId))
            .forEach((entry) => globalSidebarEntries.push(entry));
        }
        return await actions.createData(name, data);
      };

      const setGlobalData = (data: object) => {
        actions.setGlobalData({
          ...data,
          globalSidebars: Object.fromEntries(globalSidebarEntries),
          // Expose banner content globally to be used by the Banner theme component
          banner,
        });
      };

      await plugin.contentLoaded({
        ...args,
        content: docsContent,
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
  const { banner, globalSidebars = [], ...docsOptions } = options;
  return {
    ...docsValidateOptions({ validate, options: docsOptions }),
    globalSidebars,
    banner,
  };
}
