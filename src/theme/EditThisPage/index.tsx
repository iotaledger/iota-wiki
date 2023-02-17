/**
 * SWIZZLED VERSION: 2.0.0-rc.1
 * REASONS:
 *  - Support external repo edit URLs.
 */

import React from 'react';
import EditThisPage from '@theme-original/EditThisPage';
import type EditThisPageType from '@theme/EditThisPage';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof EditThisPageType>;

const externalDocsRegex = new RegExp(
  'shimmer/external/[^/]*/[^/]*/[^/]*/|iota/external/[^/]*/[^/]*/[^/]*/',
  'i',
);

/**
This function will remove the links in the regex above
**/
function reformatExternalProjectURL(editUrl) {
  return editUrl.replace(externalDocsRegex, '');
}

/**
This function will check if docs is one of the links from the regex above"
**/
function isExternalProjectURL(editUrl) {
  return externalDocsRegex.test(editUrl);
}

export default function EditThisPageWrapper({
  editUrl,
  ...props
}: Props): JSX.Element {
  const formattedEditURL = isExternalProjectURL(editUrl)
    ? reformatExternalProjectURL(editUrl)
    : editUrl;

  return <EditThisPage editUrl={formattedEditURL} {...props} />;
}
