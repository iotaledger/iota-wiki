import useRouteContext from '@docusaurus/useRouteContext';
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
    const { docs, mainDocId } = plugins[id].versions[0];
    const { path } = docs.find((doc) => doc.id === mainDocId);
    return path;
  }

  const currentDoc = config.docs.find((doc) =>
    doc.versions.find((version) => version.id === pluginId),
  );
  if (!currentDoc) return;

  const currentSubsections = config.sections.find((subsections) =>
    subsections.find((subsection) => subsection.id === currentDoc.subsection),
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
    docs: currentDocs.map((doc) => ({
      ...doc,
      to: getPath(doc.versions[0].id),
      active: doc.id === currentDoc.id,
    })),
    subsections: currentSubsections.map((subsection) => ({
      ...subsection,
      to: getPath(
        config.docs.filter((doc) => doc.subsection === subsection.id)[0]
          .versions[0].id,
      ),
      active: subsection.id === currentDoc.subsection,
    })),
  };
}
