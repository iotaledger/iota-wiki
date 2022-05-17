import { useCallback } from "react";
import { useDocsData, type GlobalVersion, } from '@docusaurus/plugin-content-docs/client'
import { useLocation } from "@docusaurus/router";
import { createStorageSlot } from '../theme/NavbarItem/DocsVersionDropdownNavbarItem/storageUtils'
import { DocsVersionPersistence } from '@docusaurus/theme-common/src/utils/useThemeConfig'

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
    ): string | null =>{
        return createStorageSlot(storageKey(projectId), { persistence }).get();
    },

    clear: (projectId: string, persistence: DocsVersionPersistence): void => {
        createStorageSlot(storageKey(projectId), { persistence }).del();
    },
};

export function useWikiPreferredVersion(
    pluginIds: string[],
): {
    preferredVersion: GlobalVersion | null;
    savePreferredVersionName: (versionName: string) => void;
} {
    // Use string at index 1 as pathname starts with a '/'
    const projectId = useLocation().pathname.split('/')[1];
    const persistence = "persistance" as DocsVersionPersistence;
    const preferredVersionLabel = DocsPreferredVersionStorage.read(projectId, persistence);

    // TODO Check if pluginID should be part of the key too
    const preferredVersion =
        pluginIds.reduce(
            (preferredVersion, pluginId) => {
                const docsData = useDocsData(pluginId);
                if (docsData.versions[0].label === preferredVersionLabel) {
                    return docsData.versions[0];
                }
                return preferredVersion;
            }, null as GlobalVersion | null
        );

    if (preferredVersion && preferredVersionLabel)
            DocsPreferredVersionStorage.clear(projectId, persistence);
    
    const savePreferredVersionName = useCallback(
        (versionLabel: string) => {
            DocsPreferredVersionStorage.save(projectId, persistence, versionLabel);
        },
        [projectId],
    );

    return { preferredVersion, savePreferredVersionName };
}