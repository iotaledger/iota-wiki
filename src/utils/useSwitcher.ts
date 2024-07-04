import useRouteContext from '@docusaurus/useRouteContext';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  GlobalPluginData as DocsGlobalPluginData,
  useAllDocsData,
} from '@docusaurus/plugin-content-docs/client';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import {
  Config,
  Doc,
  MenuItem,
  Section,
  Sidebar,
  Item,
} from '../common/components/Switcher';
import { MAIN_BADGE } from './pluginConfigGenerators';

export type GlobalPluginData = DocsGlobalPluginData & {
  globalSidebars?: {
    [key: string]: PropSidebarItem[];
  };
};

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
  subsections: (Item & { docs: Doc[] })[];
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
  const plugins = useAllDocsData() as {
    [pluginId: string]: GlobalPluginData;
  };
  const docId = useRouteContext().plugin.id;
  const { name: sidebarId, items: sidebarItems } = useDocsSidebar();
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();

  const config = themeConfig.switcher as Config;
  if (!config) return { main: sidebarItems };

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

        // Resolve the doc link to the first MAIN_BADGE version.
        let to = versionLinks[0].to;
        const foundVersion = versionLinks.find((version) =>
          version.badges
            ? version.badges.some((b) => b.includes(MAIN_BADGE))
            : false,
        );
        if (foundVersion) to = foundVersion.to;

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

      // Resolve the subsection link to the first doc configured.
      const to = docLinks[0].to;

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
