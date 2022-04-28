import {
    useDocsData,
    useVersions,
    useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import { ActiveDocContext, GlobalVersion } from '@docusaurus/plugin-content-docs/client';

export function useAllActiveDocContexts(pluginIds: string[]): ActiveDocContext{
    let active = {
        activeVersion: undefined,
        activeDoc: undefined,
        alternateDocVersions: {}
    } as ActiveDocContext;

    pluginIds.forEach(element => {
        const activeDocContext = useActiveDocContext(element);
        if (activeDocContext.activeDoc)
            active.activeDoc = activeDocContext.activeDoc;
        if (activeDocContext.activeVersion)
            active.activeVersion = activeDocContext.activeVersion;
    });

    //TODO Check if loop is needed
    pluginIds.forEach(element => {
        if (active.activeDoc) {
            console.log(element);
            const data = useDocsData(element);
            data.versions.forEach((version) => {
                version.docs.forEach((doc) => {
                    if (doc.id === active.activeDoc.id)
                        // TODO Don't use label?
                        active.alternateDocVersions[version.label] = doc;
                });
            });
            console.log(active.alternateDocVersions);
        }
    })

    return active;
}

export function useAllVersions(pluginIds: string[]): GlobalVersion[] {
    let versions = [];
    pluginIds.forEach(element => {
        versions.push(...useVersions(element));
    });
    return versions;
}