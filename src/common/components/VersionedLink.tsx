import React from 'react';
import Link, { Props } from '@docusaurus/Link';
import { useCurrentDocPlugins } from '@site/src/utils/wikiVersion';
import { useWikiPreferredVersion } from '@site/src/utils/wikiPreferredVersion';

export default function VersionedLink({ to, ...props }: Props): JSX.Element {
  if (to !== undefined) {
    // TODO: Not rely on `{projectId}/{docsPath}` formatted url
    const [projectId, ...docsPathItems] = to.split('/');
    const docsPath = docsPathItems.join('/');
    const pathname = `/${projectId}/${docsPath}`;
    const pluginIds = useCurrentDocPlugins(pathname);

    const { preferredVersion } = useWikiPreferredVersion(pathname, pluginIds);

    if (preferredVersion !== null) {
      return <Link to={`${preferredVersion.path}/${docsPath}`} {...props} />;
    }
  }

  return <Link to={to} {...props} />;
}
