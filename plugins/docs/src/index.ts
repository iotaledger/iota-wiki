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
  // Destructure to separate the Docusaurus docs plugin options
  // and initialize the Docusaurus docs plugin to wrap.
  const { globalSidebars, ...docsOptions } = options;
  const plugin = await docsPlugin(context, docsOptions);

  return {
    ...plugin,
    // Override the `contentLoaded` function to add sidebars to the
    // global data exposed by the Docusaurus docs plugin.
    contentLoaded: async ({ actions, content, ...args }) => {
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
  const { versions = {}, globalSidebars = [], ...docsOptions } = options;

  const versionEntries = Object.entries(versions);
  if (versionEntries.length > 1)
    throw 'Multiple Docusuaurus doc versions not allowed in the Wiki';

  // Handle version banner.
  const versionBannerMap = {};
  const docsVersionEntries = versionEntries.map(
    ([versionLabel, versionOptions]) => {
      // TODO: validate banner
      const { banner, ...docsVersionOptions } = versionOptions;
      versionBannerMap[versionLabel] = banner;
      return [versionLabel, docsVersionOptions];
    },
  );

  const validatedDocsOptions = docsValidateOptions({
    validate,
    options: {
      ...docsOptions,
      versions: Object.fromEntries(docsVersionEntries),
    },
  });

  // Re-add banner.
  validatedDocsOptions.versions = Object.fromEntries(
    Object.entries(validatedDocsOptions.versions).map(
      ([versionLabel, versionOptions]) => {
        return [
          versionLabel,
          {
            ...versionOptions,
            banner: versionBannerMap[versionLabel],
          },
        ];
      },
    ),
  );

  return {
    ...validatedDocsOptions,
    globalSidebars,
  };
}
