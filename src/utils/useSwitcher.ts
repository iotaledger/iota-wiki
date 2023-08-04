import useRouteContext from '@docusaurus/useRouteContext';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import config from '../switcher.config';
import { MenuItem } from '../common/components/Switcher';
import { PropSidebarItem } from '@docusaurus/plugin-content-docs';

export type SwitcherProps = {
  before?: PropSidebarItem[];
  main?: PropSidebarItem[];
  after?: PropSidebarItem[];
  switcher?: {
    subsections: MenuItem[];
    docs: MenuItem[];
    versions: MenuItem[];
  };
};

function findCurrentSection(sections, docId, sidebarId) {
  for (const section of sections) {
    if (
      [section.before, section.after].some(
        (item) => item && item.docId === docId && item.sidebarId === sidebarId,
      )
    ) {
      return { section };
    }
    for (const subsection of section.subsections) {
      for (const doc of subsection.docs) {
        for (const version of doc.versions) {
          if (version.id === docId) {
            return { section, subsection, doc, version };
          }
        }
      }
    }
  }
}

function findSidebarItems(item, plugins) {
  if (!item) return;

  const { docId, sidebarId } = item;
  const items = plugins[docId]?.globalSidebars[sidebarId];
  if (!items) throw `No global sidebar '${sidebarId}' found for doc '${docId}'`;

  return items;
}

export default function useSwitcher(): SwitcherProps {
  const plugins = useAllDocsData();
  const docId = useRouteContext().plugin.id;
  const currentSidebar = useDocsSidebar();

  const sections = config.sections.map((section) => {
    const subsections = section.subsections.map((subsection) => {
      const docs = config.docs.filter(
        (doc) => doc.subsection === subsection.id,
      );
      return {
        ...subsection,
        docs,
      };
    });
    return {
      ...section,
      subsections,
    };
  });
  if (!sections) return { main: currentSidebar.items };

  const current = findCurrentSection(sections, docId, currentSidebar.name);
  if (!current) return { main: currentSidebar.items };

  function getPath(id: string) {
    // Find the registered entry path of a doc.
    const { docs, mainDocId } = plugins[id].versions[0];
    const { path } = docs.find((doc) => doc.id === mainDocId);
    return path;
  }

  // TODO: Improve logic by traversing subsections depth first and resolve
  // default links and active states from the leaves upward.

  const currentSubsections = current.section?.subsections ?? [];
  const currentDocs = current.subsection?.docs ?? [];
  const currentVersions = current.doc?.versions ?? [];
  const currentSubsection = current.subsection;
  const currentDoc = current.doc;
  const currentVersion = current.version;
  const currentSidebars = {
    before: findSidebarItems(current.section.before, plugins),
    // Only display main sidebar if we are in a subsection.
    main: currentSubsection ? currentSidebar.items : undefined,
    after: findSidebarItems(current.section.after, plugins),
  };

  const switcher = {
    versions: currentVersions.map((version) => ({
      ...version,
      to: getPath(version.id),
      active: currentVersion && version.id === currentVersion.id,
    })),
    docs: currentDocs.map((doc) => {
      const id = doc.defaultVersion ?? doc.versions[0].id;

      return {
        ...doc,
        to: getPath(id),
        active: currentDoc && doc.id === currentDoc.id,
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
        active: currentSubsection && subsection.id === currentSubsection.id,
      };
    }),
  };

  return {
    switcher,
    ...currentSidebars,
  };
}
