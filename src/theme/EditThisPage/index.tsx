/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * REASONS TO SWIZZLE:
 * - The default component exposed by the editor doesn't work with external repos.
 */

import React from 'react';
import Translate from '@docusaurus/Translate';

import type { Props } from '@theme/EditThisPage';
import IconEdit from '@theme/IconEdit';
import OriginalEditThisPage from '@theme-original/EditThisPage';

/**
This function will remove 
"content/build/anyOtherString/anyOtherString/anyOtherString"
or
"external/anyOtherString"
**/
function reformatExternalProjectURL(editUrl) {
  const externalDocsRegex = new RegExp('content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/', 'i');
  return editUrl.replace(externalDocsRegex, '');
}

/**
This function will check if docs is in "content/build/" or "external/"
**/
function isExternalProjectURL(editUrl) {
  const externalDocsRegex = new RegExp('content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/', 'i');
  return externalDocsRegex.test(editUrl);
}

export default function EditThisPage({ editUrl }: Props): JSX.Element {
  const formattedEditURL = reformatExternalProjectURL(editUrl);

  return (
    <>
      {isExternalProjectURL(editUrl) ? (
        <a href={formattedEditURL} target='_blank' rel='noreferrer noopener'>
          <IconEdit />
          <Translate
            id='theme.common.editThisPage'
            description='The link label to edit the current page'
          >
            Edit this page
          </Translate>
        </a>
      ) : (
        <OriginalEditThisPage editUrl={editUrl} />
      )}
    </>
  );
}
