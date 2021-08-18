/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import {useLatestVersion, useActiveDocContext} from '@theme/hooks/useDocs';
import clsx from 'clsx';
import {useDocsPreferredVersion} from '@docusaurus/theme-common';
import {uniq} from '@docusaurus/utils-common';

function getDocInVersions(versions, docId) {
  const allDocs = versions.flatMap((version) => version.docs);
  const doc = allDocs.find((versionDoc) => versionDoc.id === docId);

  if (!doc) {
    const docIds = allDocs.map((versionDoc) => versionDoc.id).join('\n- ');
    throw new Error(`DocNavbarItem: couldn't find any doc with id "${docId}" in version${
      versions.length ? 's' : ''
    } ${versions.map((version) => version.name).join(', ')}".
Available doc ids are:\n- ${docIds}`);
  }

  return doc;
}

export default function DocNavbarItem({
  docId,
  activeSidebarClassName,
  label: staticLabel,
  docsPluginId,
  ...props
}) {
  const {activeVersion, activeDoc} = useActiveDocContext(docsPluginId);
  const {preferredVersion} = useDocsPreferredVersion(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId); // Versions used to look for the doc to link to, ordered + no duplicate

  const versions = uniq(
    [activeVersion, preferredVersion, latestVersion].filter(Boolean),
  );
  const doc = getDocInVersions(versions, docId);
  return (
    <DefaultNavbarItem
      exact
      {...props}
      className={clsx(props.className, {
        [activeSidebarClassName]:
          activeDoc && activeDoc.sidebar === doc.sidebar,
      })}
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  );
}
