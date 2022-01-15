/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate from '@docusaurus/Translate';

import type { Props } from '@theme/EditThisPage';
import IconEdit from '@theme/IconEdit';
import OriginalEditThisPage from '@theme-original/EditThisPage';

/**
This function will remove "external/anyOtherString"
**/
function reformatExternalProjectURL(editUrl) {
  const externalDocsRegex = new RegExp('external/[^/]*/', 'i');
  return editUrl.replace(externalDocsRegex, '');
}

/**
This function will check if docs is in "external/"
**/
function isExternalProjectURL(editUrl) {
  const externalDocsRegex = new RegExp('external/[^/]*/', 'i');
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
