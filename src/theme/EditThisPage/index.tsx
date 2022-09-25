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

/**
This function will remove 
"content/build/anyOtherString/anyOtherString/anyOtherString"
or
"external/anyOtherString"
**/
function reformatExternalProjectURL(editUrl) {
  const externalDocsRegex = new RegExp(
    'shimmer/external/[^/]*/[^/]*/|iota/external/[^/]*/[^/]*/[^/]*/',
    'i',
  );
  return editUrl.replace(externalDocsRegex, '');
}

/**
This function will check if docs is in "content/build/" or "external/"
**/
function isExternalProjectURL(editUrl) {
  const externalDocsRegex = new RegExp(
    'shimmer/external/[^/]*/[^/]*/|iota/external/[^/]*/[^/]*/[^/]*/',
    'i',
  );
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
