/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const SearchBar = () => {
  const {
    searchMode: {
      switchConfig: {closeIcon, closeIconStyle, searchIcon, searchIconStyle},
    },
  } = useThemeConfig();
}

export default SearchBar
