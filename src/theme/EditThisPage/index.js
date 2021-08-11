/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/IconEdit';

/**
This function will remove "external/anyOtherString"
**/
function reformatExternalProjectURL(editUrl)
{
    const externalDocsRegex =  new RegExp('external\/[^\/]*\/','i') ;
    return editUrl.replace(externalDocsRegex, '');
}

export default function EditThisPage({editUrl}) {
  const formattedEditURL = reformatExternalProjectURL(editUrl);

  return (
    <a href={formattedEditURL} target="_blank" rel="noreferrer noopener">
      <IconEdit />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page">
        Edit this page
      </Translate>
    </a>
  );
}
