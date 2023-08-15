/**
 * SWIZZLED VERSION: 2.4.1
 * REASONS:
 *  - Remove use of siteTitle as it is irrelevant in our setup.
 *  - Link to our own latest version.
 *  - Add `deprecated` banner.
 */

import React, { type ComponentType } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  useActivePlugin,
  useDocVersionSuggestions,
  type GlobalVersion,
} from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocVersionBanner';
import type {
  VersionBanner,
  PropVersionMetadata,
} from '@docusaurus/plugin-content-docs';

type WikiVersionBanner = VersionBanner & 'deprecated';

type BannerLabelComponentProps = {
  siteTitle: string;
  versionMetadata: PropVersionMetadata;
};

function UnreleasedVersionLabel({
  versionMetadata,
}: BannerLabelComponentProps) {
  return (
    <Translate
      id='theme.docs.versions.unreleasedVersionLabel'
      description="The label used to tell the user that he's browsing an unreleased doc version"
      values={{
        versionLabel: <b>{versionMetadata.label}</b>,
      }}
    >
      {'This is unreleased documentation for {versionLabel} version.'}
    </Translate>
  );
}

function UnmaintainedVersionLabel({
  versionMetadata,
}: BannerLabelComponentProps) {
  return (
    <Translate
      id='theme.docs.versions.unmaintainedVersionLabel'
      description="The label used to tell the user that he's browsing an unmaintained doc version"
      values={{
        versionLabel: <b>{versionMetadata.label}</b>,
      }}
    >
      {
        'This is documentation for {versionLabel}, which is no longer actively maintained.'
      }
    </Translate>
  );
}

function DeprecatedVersionLabel({
  versionMetadata,
}: BannerLabelComponentProps) {
  return (
    <Translate
      id='theme.docs.versions.deprecatedVersionLabel'
      description="The label used to tell the user that he's browsing a deprecated doc version"
      values={{
        versionLabel: <b>{versionMetadata.label}</b>,
      }}
    >
      {'This is documentation for {versionLabel}, which is being deprecated.'}
    </Translate>
  );
}

const BannerLabelComponents: {
  [banner in WikiVersionBanner]: ComponentType<BannerLabelComponentProps>;
} = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel,
  deprecated: DeprecatedVersionLabel,
};

function BannerLabel(props: BannerLabelComponentProps) {
  const BannerLabelComponent =
    BannerLabelComponents[props.versionMetadata.banner!];
  return <BannerLabelComponent {...props} />;
}

function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick,
}: {
  to: string;
  onClick: () => void;
  versionLabel: string;
}) {
  return (
    <Translate
      id='theme.docs.versions.latestVersionSuggestionLabel'
      description='The label used to tell the user to check the latest version'
      values={{
        versionLabel,
        latestVersionLink: (
          <b>
            <Link to={to} onClick={onClick}>
              <Translate
                id='theme.docs.versions.latestVersionLinkLabel'
                description='The label used for the latest version suggestion link label'
              >
                latest version
              </Translate>
            </Link>
          </b>
        ),
      }}
    >
      {
        'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
      }
    </Translate>
  );
}

function DocVersionBannerEnabled({
  className,
  versionMetadata,
}: Props & {
  versionMetadata: PropVersionMetadata;
}): JSX.Element {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { pluginId } = useActivePlugin({ failfast: true })!;

  const getVersionMainDoc = (version: GlobalVersion) =>
    version.docs.find((doc) => doc.id === version.mainDocId)!;

  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId);

  const { latestDocSuggestion, latestVersionSuggestion } =
    useDocVersionSuggestions(pluginId);

  // Try to link to same doc in latest version (not always possible), falling
  // back to main doc of latest version
  const latestVersionSuggestedDoc =
    latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md',
      )}
      role='alert'
    >
      <div>
        <BannerLabel siteTitle={siteTitle} versionMetadata={versionMetadata} />
      </div>
      <div>
        <LatestVersionSuggestionLabel
          versionLabel={latestVersionSuggestion.label}
          to={latestVersionSuggestedDoc.path}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
        />
      </div>
    </div>
  );
}

export default function DocVersionBanner({
  className,
}: Props): JSX.Element | null {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.banner) {
    return (
      <DocVersionBannerEnabled
        className={className}
        versionMetadata={versionMetadata}
      />
    );
  }
  return null;
}
