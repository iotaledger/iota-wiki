'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
const plugin_content_docs_1 = __importStar(
  require('@docusaurus/plugin-content-docs'),
);
const promises_1 = __importDefault(require('fs/promises'));
const path_1 = __importDefault(require('path'));
async function pluginDocs(context, options) {
  // Destructure to separate the Docusaurus docs plugin options
  // and initialize the Docusaurus docs plugin to wrap.
  const { bannerPath, globalSidebars, ...docsOptions } = options;
  const plugin = await (0, plugin_content_docs_1.default)(context, docsOptions);
  return {
    ...plugin,
    getPathsToWatch: () => {
      const pathsToWatch = plugin.getPathsToWatch();
      if (bannerPath)
        pathsToWatch.push(path_1.default.resolve(context.siteDir, bannerPath));
      return pathsToWatch;
    },
    loadContent: async () => {
      const docsLoadedContent = await plugin.loadContent();
      return {
        ...docsLoadedContent,
        // Load banner content from file
        bannerContent: bannerPath
          ? await promises_1.default.readFile(bannerPath, {
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
      const createData = async (name, data) => {
        // Hook into the `createData` call to extract the sidebars we need.
        const versionMetadata = JSON.parse(data);
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
      const setGlobalData = (data) => {
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
pluginDocs.validateOptions = ({ validate, options }) => {
  const { bannerPath, globalSidebars = [], ...docsOptions } = options;
  return {
    ...(0, plugin_content_docs_1.validateOptions)({
      validate,
      options: docsOptions,
    }),
    globalSidebars,
    bannerPath,
  };
};
module.exports = pluginDocs;
