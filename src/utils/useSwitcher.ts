import useRouteContext from '@docusaurus/useRouteContext';
import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import config from '../switcher.config';
import {
  Doc,
  Item,
  MenuItem,
  Subsection,
  Version,
} from '../common/components/Switcher';

const PLUGIN_NAME = 'docusaurus-plugin-content-docs';

export type Items = {
  subsection: Item;
  subsections: MenuItem[];
  doc: Item;
  docs: MenuItem[];
  version: Item;
  versions: MenuItem[];
};

export default function useSwitcher(): Items | undefined {
  const plugins = useAllPluginInstancesData(PLUGIN_NAME);
  const id = useRouteContext().plugin.id;

  function getPath(id: string) {
    const { docs, mainDocId } = plugins[id].versions[0];
    const { path } = docs.find((x) => x.id === mainDocId);
    return path;
  }

  const docItems = config.docs.reduce((docItems, doc) => {
    // Already found doc.
    // TODO: Check if multiple docs or versions with same ID can be found.
    if (docItems) return docItems;

    const version = doc.versions.find((x) => x.id === id);
    if (!version) return docItems;

    const docs = config.docs.filter((x) => x.subsection === doc.subsection);

    return { doc, docs, version, versions: doc.versions };
  }, undefined as { doc: Doc; docs: Doc[]; version: Version; versions: Version[] } | undefined);
  if (!docItems) return;

  const subsectionItems = config.sections.reduce(
    (subsectionItems, subsections) => {
      // Already found subsection.
      // TODO: Check if multiple subsections with same ID can be found.
      if (subsectionItems) return subsectionItems;

      const subsection = subsections.find(
        (x) => x.id === docItems.doc.subsection,
      );
      if (!subsection) return subsectionItems;

      return { subsection, subsections };
    },
    undefined as
      | { subsection: Subsection; subsections: Subsection[] }
      | undefined,
  );
  if (!subsectionItems) return;

  return {
    version: docItems.version,
    // TODO: Allow default path.
    versions: docItems.versions.map((x) => {
      const to = getPath(x.id);
      return { ...x, to };
    }),
    doc: docItems.doc,
    // TODO: Allow default version and path.
    docs: docItems.docs.map((x) => {
      const to = getPath(x.versions[0].id);
      return { ...x, to };
    }),
    subsection: subsectionItems.subsection,
    // TODO: Allow default doc, version and path.
    subsections: subsectionItems.subsections.map((x) => {
      const doc = config.docs.filter((y) => y.subsection === x.id)[0];
      const to = getPath(doc.versions[0].id);
      return { ...x, to };
    }),
  };
}
