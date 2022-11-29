import {
  useDocsData,
  useVersions,
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import {
  ActiveDocContext,
  GlobalVersion,
  useAllDocsData,
  useLatestVersion,
} from '@docusaurus/plugin-content-docs/client';
import { useMemo } from 'react';

function uniq<T>(arr: T[]): T[] {
  // Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
  return Array.from(new Set(arr));
}

export function useAllActiveDocContexts(pluginIds: string[]): ActiveDocContext {
  const active = {
    activeVersion: undefined,
    activeDoc: undefined,
    alternateDocVersions: {},
  } as ActiveDocContext;

  pluginIds.forEach((element) => {
    const activeDocContext = useActiveDocContext(element);
    if (activeDocContext.activeDoc) {
      active.activeDoc = activeDocContext.activeDoc;
      active.activeVersion = activeDocContext.activeVersion;
    }
  });

  //TODO Check if loop is needed
  pluginIds.forEach((element) => {
    if (active.activeDoc) {
      const data = useDocsData(element);
      data.versions.forEach((version) => {
        version.docs.forEach((doc) => {
          if (doc.id === active.activeDoc.id)
            // TODO Don't use label?
            active.alternateDocVersions[version.label] = doc;
        });
      });
    }
  });

  return active;
}

export function useAllVersions(pluginIds: string[]): GlobalVersion[] {
  const versions = [];
  pluginIds.forEach((element) => {
    versions.push(...useVersions(element));
  });
  return versions;
}

// Gets all plugin ids with the current base route
export function useCurrentDocPlugins(pathname: string): string[] {
  const pluginIds = [];
  const data = useAllDocsData();
  for (const key in data) {
    const element = data[key];
    if (pathname.startsWith(element.path)) pluginIds.push(key);
  }

  // Sort plugins in reverse alphabetic order so that the most recent version is first
  // Plugins with name as id may need to prepend a number to sort their versions
  pluginIds.sort((a, b) => (a < b ? 1 : b < a ? -1 : 0));

  return pluginIds;
}

export function useAllLatestVersion(pluginIds: string[]): GlobalVersion {
  return pluginIds.reduce((previousVersion, currentPluginId) => {
    const currentVersion = useLatestVersion(currentPluginId);

    if (
      previousVersion.path.split('/').length <=
      currentVersion.path.split('/').length
    )
      return previousVersion;
    return currentVersion;
  }, useLatestVersion(pluginIds[0]));
}

/**
 * "Version candidates" are mostly useful for the layout components, which must
 * be able to work on all pages. For example, if a user has `{ type: "doc",
 * docId: "intro" }` as a navbar item, which version does that refer to? We
 * believe that it could refer to at most three version candidates:
 *
 * 1. The **active version**, the one that the user is currently browsing. See
 * {@link useActiveDocContext}.
 * 2. The **preferred version**, the one that the user last visited. See
 * {@link useDocsPreferredVersion}.
 * 3. The **latest version**, the "default". See {@link useLatestVersion}.
 *
 * @param preferredVersion The preferred version of the current plugin IDs.
 * @param activeVersion The active version of the current plugin IDs.
 * @param docsPluginIds The plugin IDs to get latest version from.
 * @returns An array of 1~3 versions with priorities defined above, guaranteed
 * to be unique and non-sparse. Will be memoized, hence stable for deps array.
 */
export function useWikiVersionCandidates(
  preferredVersion: GlobalVersion,
  activeVersion: GlobalVersion,
  docsPluginIds?: string[],
): [GlobalVersion, ...GlobalVersion[]] {
  const latestVersion = useAllLatestVersion(docsPluginIds);
  return useMemo(
    () =>
      uniq(
        [activeVersion, preferredVersion, latestVersion].filter(Boolean),
      ) as [GlobalVersion, ...GlobalVersion[]],
    [activeVersion, preferredVersion, latestVersion],
  );
}
