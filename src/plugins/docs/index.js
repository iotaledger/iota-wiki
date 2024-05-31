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
Object.defineProperty(exports, '__esModule', { value: true });
exports.validateOptions = void 0;
const plugin_content_docs_1 = __importStar(
  require('@docusaurus/plugin-content-docs'),
);
async function pluginDocs(context, options) {
  // Destructure to separate the Docusaurus docs plugin options
  // and initialize the Docusaurus docs plugin to wrap.
  const { globalSidebars, ...docsOptions } = options;
  const plugin = await (0, plugin_content_docs_1.default)(context, docsOptions);
  return {
    ...plugin,
    // Override the `contentLoaded` function to add sidebars to the
    // global data exposed by the Docusaurus docs plugin.
    contentLoaded: async ({ actions, content, ...args }) => {
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
        return await actions.createData(name, data);
      };
      const setGlobalData = (data) => {
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
exports.default = pluginDocs;
function validateOptions({ validate, options }) {
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
  const validatedDocsOptions = (0, plugin_content_docs_1.validateOptions)({
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
exports.validateOptions = validateOptions;
