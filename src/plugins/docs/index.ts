import type { LoadContext, Plugin } from '@docusaurus/types';
import docsPlugin, {
  validateOptions as docsValidateOptions,
  PropVersionMetadata,
} from '@docusaurus/plugin-content-docs';
import fs from 'fs/promises';
import path from 'path';
import {
  Options as DocsOptions,
  PluginOptions as DocsPluginOptions,
  LoadedContent as DocsLoadedContent,
  DocMetadata as DocsDocMetadata,
} from '@docusaurus/plugin-content-docs';
import {
  OptionValidationContext as DocsOptionValidationContext,
  Validate,
} from '@docusaurus/types';

export type DocMetadata = DocsDocMetadata & {
  bannerContent?: string;
};

export type LoadedContent = DocsLoadedContent & {
  bannerContent?: string;
};

export type PluginOptions = DocsPluginOptions & {
  globalSidebars: string[];
  bannerPath?: string;
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
export default async function pluginDocs(
  context: LoadContext,
  options: PluginOptions,
): Promise<Plugin<LoadedContent>> {
  // Destructure to separate the Docusaurus docs plugin options
  // and initialize the Docusaurus docs plugin to wrap.
  const { bannerPath, globalSidebars, ...docsOptions } = options;
  const plugin = await docsPlugin(context, docsOptions);

  return {
    ...plugin,
    getPathsToWatch: () => {
      const pathsToWatch = plugin.getPathsToWatch();

      if (bannerPath)
        pathsToWatch.push(path.resolve(context.siteDir, bannerPath));

      return pathsToWatch;
    },
    loadContent: async () => {
      const docsLoadedContent = await plugin.loadContent();
      return {
        ...docsLoadedContent,
        // Load banner content from file
        bannerContent: bannerPath
          ? await fs.readFile(bannerPath, {
              encoding: 'utf-8',
            })
          : undefined,
      };
    },
    translateContent: ({ content, ...args }) => {
      // Propagate banner content
      const { bannerContent, ...docsContent } = content;
      const docsContentLoaded = plugin.translateContent({
        content: docsContent,
        ...args,
      });
      return {
        ...docsContentLoaded,
        bannerContent,
      };
    },
    // Override the `contentLoaded` function to add sidebars to the
    // global data exposed by the Docusaurus docs plugin.
    contentLoaded: async ({ actions, content, ...args }) => {
      const { bannerContent, ...docsContent } = content;
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

        return await actions.createData(
          name,
          // Expose banner content to be used by the DocBanner theme component
          JSON.stringify(
            {
              ...versionMetadata,
              bannerContent,
            },
            null,
            2,
          ),
        );
      };

      const setGlobalData = (data: object) => {
        actions.setGlobalData({
          ...data,
          globalSidebars: Object.fromEntries(globalSidebarEntries),
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
  const { bannerPath, globalSidebars = [], ...docsOptions } = options;
  return {
    ...docsValidateOptions({ validate, options: docsOptions }),
    globalSidebars,
    bannerPath,
  };
}
