import { useCallback } from 'react';
import {
  useDocsData,
  type GlobalVersion,
} from '@docusaurus/plugin-content-docs/client';
import { createStorageSlot } from './storageUtils';
import { DocsVersionPersistence } from '@docusaurus/theme-common/src/utils/useThemeConfig';
import useIsBrowser from '@docusaurus/useIsBrowser';

const storageKey = (projectId) => `wiki-preferred-version-${projectId}`;

const DocsPreferredVersionStorage = {
  save: (
    projectId: string,
    persistence: DocsVersionPersistence,
    versionLabel: string,
  ): void => {
    createStorageSlot(storageKey(projectId), { persistence }).set(versionLabel);
  },

  read: (
    projectId: string,
    persistence: DocsVersionPersistence,
  ): string | null => {
    return createStorageSlot(storageKey(projectId), { persistence }).get();
  },

  clear: (projectId: string, persistence: DocsVersionPersistence): void => {
    createStorageSlot(storageKey(projectId), { persistence }).del();
  },
};

export function useWikiPreferredVersion(
  pathname: string,
  pluginIds: string[],
): {
  preferredVersion: GlobalVersion | null;
  savePreferredVersionName: (versionName: string) => void;
} {
  const isBrowser = useIsBrowser();
  // Use string at index 1 as pathname starts with a '/'
  const projectId = pathname.split('/')[1];
  const persistence = 'localStorage';
  const preferredVersionLabel = isBrowser
    ? DocsPreferredVersionStorage.read(projectId, persistence)
    : null;

  // TODO Check if pluginID should be part of the key too
  const preferredVersion = pluginIds.reduce((preferredVersion, pluginId) => {
    const docsData = useDocsData(pluginId);
    if (docsData.versions[0].label === preferredVersionLabel) {
      return docsData.versions[0];
    }
    return preferredVersion;
  }, null as GlobalVersion | null);

  if (!preferredVersion && preferredVersionLabel)
    DocsPreferredVersionStorage.clear(projectId, persistence);

  const savePreferredVersionName = useCallback(
    (versionLabel: string) => {
      if (isBrowser) {
        DocsPreferredVersionStorage.save(projectId, persistence, versionLabel);
      }
    },
    [projectId, isBrowser],
  );

  return { preferredVersion, savePreferredVersionName };
}
