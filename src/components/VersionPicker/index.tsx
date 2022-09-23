import React from 'react';
import { Collapsible, useCollapsible } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import {
  useAllActiveDocContexts,
  useAllVersions,
  useCurrentDocPlugins,
  useWikiVersionCandidates,
} from '@site/src/utils/wikiVersion';
import { useWikiPreferredVersion } from '@site/src/utils/wikiPreferredVersion';
import './styles.css';

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);

export default function VersionPicker() {
  const { pathname } = useLocation();
  const pluginIds = useCurrentDocPlugins(pathname);

  // Check if multiple versions are available
  if (pluginIds.length < 2) return null;

  const activeDocContext = useAllActiveDocContexts(pluginIds);
  const versions = useAllVersions(pluginIds);
  const { preferredVersion, savePreferredVersionName } =
    useWikiPreferredVersion(pathname, pluginIds);

  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    // TODO Don't use label?
    const versionDoc =
      activeDocContext?.alternateDocVersions[version.label] ??
      getVersionMainDoc(version);
    return {
      isNavLink: true,
      label: version.label,
      to: versionDoc.path,
      isActive: () => version === activeDocContext?.activeVersion,
      onClick: () => {
        savePreferredVersionName(version.label);
      },
    };
  });

  const dropdownVersion = useWikiVersionCandidates(
    preferredVersion,
    activeDocContext.activeVersion,
    pluginIds,
  )[0];

  const { collapsed, toggleCollapsed } = useCollapsible({ initialState: true });

  return (
    <div className='version-picker'>
      <div
        className='version-picker__toggle menu__link menu__link--sublist menu__link--sublist-caret'
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        Version: {dropdownVersion.label}
      </div>

      <Collapsible
        lazy
        as='ul'
        className='version-picker__list menu__list'
        collapsed={collapsed}
      >
        {versionLinks.map((versionLink, key) => (
          <li key={key} className='version-picker__list-item menu__list-item'>
            <Link
              {...versionLink}
              className='version-picker__link menu__link'
              activeClassName={'version-picker__link--active'}
            >
              {versionLink.label}
            </Link>
          </li>
        ))}
      </Collapsible>
    </div>
  );
}
