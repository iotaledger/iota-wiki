import useRouteContext from '@docusaurus/useRouteContext';
// TODO: Change to use `useAllDocsData` from `@docusaurus/plugin-content-docs/client`.
import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import config from '../switcher.config';
import { MenuItem } from '../common/components/Switcher';

const PLUGIN_NAME = 'docusaurus-plugin-content-docs';

export type Switcher = {
  subsections: MenuItem[];
  docs: MenuItem[];
  versions: MenuItem[];
};

export default function useSwitcher(): Switcher | undefined {
  const plugins = useAllPluginInstancesData(PLUGIN_NAME);
  const pluginId = useRouteContext().plugin.id;

  function getPath(id: string) {
    // Find the registered entry path of a doc.
    const { docs, mainDocId } = plugins[id].versions[0];
    const { path } = docs.find((doc) => doc.id === mainDocId);
    return path;
  }

  const currentDoc = config.docs.find((doc) =>
    doc.versions.some((version) => version.id === pluginId),
  );
  if (!currentDoc) return;

  const currentSubsections = config.sections.find((subsections) =>
    subsections.some((subsection) => subsection.id === currentDoc.subsection),
  );
  if (!currentSubsections) return;

  const currentDocs = config.docs.filter(
    ({ subsection }) => subsection === currentDoc.subsection,
  );

  return {
    versions: currentDoc.versions.map((version) => ({
      ...version,
      to: getPath(version.id),
      active: version.id === pluginId,
    })),
    docs: currentDocs.map((doc) => {
      const id = doc.defaultVersion ?? doc.versions[0].id;

      return {
        ...doc,
        to: getPath(id),
        active: doc.id === currentDoc.id,
      };
    }),
    subsections: currentSubsections.map((subsection) => {
      let id;

      if (subsection.defaultDoc) {
        const doc = config.docs.find((doc) => doc.id === subsection.defaultDoc);
        id = doc.defaultVersion ?? doc.versions[0].id;
      } else {
        id = config.docs.filter((doc) => doc.subsection === subsection.id)[0]
          .versions[0].id;
      }

      return {
        ...subsection,
        to: getPath(id),
        active: subsection.id === currentDoc.subsection,
      };
    }),
  };
}
