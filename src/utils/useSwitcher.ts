import useRouteContext from '@docusaurus/useRouteContext';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import config from '../switcher.config';
import {
  Doc,
  MenuItem,
  Section,
  Sidebar,
  Subsection,
} from '../common/components/Switcher';
import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { GlobalPluginData } from '@iota-wiki/plugin-docs';

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

type ConfigTree = (Omit<Section, 'subsections'> & {
  subsections: (Subsection & { docs: Doc[] })[];
})[];

function findCurrentSection(
  configTree: ConfigTree,
  docId: string,
  sidebarId: string,
) {
  for (const section of configTree) {
    if (
      [section.before, section.after].some(
        (item) => item && item.docId === docId && item.sidebarId === sidebarId,
      )
    ) {
      // In this case we are outside of any subsections, so no
      // subsection, doc, or version to return.
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

function findSidebarItems(
  item: Sidebar,
  plugins: {
    [pluginId: string]: GlobalPluginData;
  },
) {
  if (!item) return;

  const { docId, sidebarId } = item;
  const items = plugins[docId]?.globalSidebars?.[sidebarId];
  if (!items) throw `No global sidebar '${sidebarId}' found for doc '${docId}'`;

  return items;
}

export default function useSwitcher(): SwitcherProps {
  const plugins = useAllDocsData();
  const docId = useRouteContext().plugin.id;
  const { name: sidebarId, items: sidebarItems } = useDocsSidebar();

  // Convert the sections and docs configuration into a single
  // tree structure of sections, subsections, docs, and versions.
  const configTree = config.sections.map((section) => {
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
  if (!configTree) return { main: sidebarItems };

  const current = findCurrentSection(configTree, docId, sidebarId);
  if (!current) return { main: sidebarItems };

  let currentDocLinks, currentVersionLinks;
  const currentSubsectionLinks = current.section.subsections.map(
    (subsection) => {
      const docLinks = subsection.docs.map((doc) => {
        const versionLinks = doc.versions.map((version) => {
          // Find the registered entry path of a docs plugin.
          // We can take the first version, because we only allow one
          // Docusaurus docs plugin version for our versioning system.
          const { docs, mainDocId } = plugins[version.id].versions[0];
          const { path: to } = docs.find((doc) => doc.id === mainDocId);

          const active = current.version && current.version.id === version.id;

          return {
            ...version,
            to,
            active,
          };
        });

        // Resolve the doc link to the default version or the first version configured.
        let to = versionLinks[0].to;
        if (doc.defaultVersion) {
          const foundVersion = versionLinks.find(
            (version) => version.id === doc.defaultVersion,
          );
          if (!foundVersion)
            throw `Default version ${doc.defaultVersion} of doc ${doc.label} not found.`;

          to = foundVersion.to;
        }

        let active = false;
        if (current.doc && doc.id === current.doc.id) {
          currentVersionLinks = versionLinks;
          active = true;
        }

        return {
          ...doc,
          to,
          active,
        };
      });

      // Resolve the subsection link to the default doc or the first doc configured.
      let to = docLinks[0].to;
      if (subsection.defaultDoc) {
        const foundDoc = docLinks.find(
          (doc) => doc.id === subsection.defaultDoc,
        );
        if (!foundDoc)
          throw `Default doc ${subsection.defaultDoc} of subsection ${subsection.label} not found.`;

        to = foundDoc.to;
      }

      let active = false;
      if (current.subsection && subsection.id === current.subsection.id) {
        currentDocLinks = docLinks;
        active = true;
      }

      return {
        ...subsection,
        to,
        active,
      };
    },
  );

  return {
    switcher: {
      subsections: currentSubsectionLinks,
      docs: currentDocLinks,
      versions: currentVersionLinks,
    },
    before: findSidebarItems(current.section.before, plugins),
    // Only display main sidebar if we are in a subsection.
    main: current.subsection ? sidebarItems : undefined,
    after: findSidebarItems(current.section.after, plugins),
  };
}
