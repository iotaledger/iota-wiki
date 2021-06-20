/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useState, useRef, memo} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './styles.module.css';

const Toggle = memo(
  () => {
    const {
      searchMode: {
        switchConfig: {closeIcon, closeIconStyle, searchIcon, searchIconStyle},
      },
    } = useThemeConfig();

    const [checked, setChecked] = useState(false);
    const checkboxRef = useRef(null);

    const handleToggle = (e) => {
      const checkbox = checkboxRef.current;

      if (!checkbox) {
        return;
      }

      if (e.target !== checkbox) {
        e.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      setChecked(checkbox?.checked);
    };

    return (
      <>
        <div
          className={clsx('wiki-search', {
            'wiki-search--checked': checked,
          })}
          role="button"
          tabIndex={-1}
          onClick={handleToggle}>
          <div className="wiki-search-opened">
            <span className={clsx(styles.toggle)} style={closeIconStyle}>
              {closeIcon}
            </span>
          </div>
          <div className="wiki-search-closed">
            <span className={clsx(styles.toggle)} style={searchIconStyle}>
              {searchIcon}
            </span>
          </div>

          <input
            ref={checkboxRef}
            checked={checked}
            type="checkbox"
            className="wiki-search-screenreader-only"
            aria-label="Open and close search"
            onChange={handleToggle}
          />
        </div>

        <div className={clsx('wiki-search-page',
          {
            'wiki-search-page--checked': checked,
          }
        )}>
          <div className='wiki-search-header'>
          </div>
          <div className='wiki-search-main'>
            <div className='wiki-search-bar'>
              <div className='wiki-search-logo'>
                <span className={clsx(styles.toggle)} style={searchIconStyle}>
                  {searchIcon}
                </span>
              </div>
              <input className='wiki-search-input' type="text"></input>
            </div>
          </div>
        </div>
      </>
    );
  },
);

export default Toggle
