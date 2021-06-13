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

const Opened = ({icon, style}) => (
  <span className={clsx(styles.toggle)} style={style}>
    {icon}
  </span>
);

const Closed = ({icon, style}) => (
  <span className={clsx(styles.toggle)} style={style}>
    {icon}
  </span>
);

const Toggle = memo(
  ({icons}) => {
    const [checked, setChecked] = useState(false);
    const inputRef = useRef(null);

    const handleToggle = (e) => {
      const checkbox = inputRef.current;

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
      <div
        className={clsx('react-search', {
          'react-search--checked': checked,
        })}
        role="button"
        tabIndex={-1}
        onClick={handleToggle}>
        <div className="react-search-opened">{icons.checked}</div>
        <div className="react-search-closed">{icons.unchecked}</div>

        <input
          ref={inputRef}
          checked={checked}
          type="checkbox"
          className="react-search-screenreader-only"
          aria-label="Open and close search"
          onChange={handleToggle}
        />
      </div>
    );
  },
);

export default function () {
  const {
    searchMode: {
      switchConfig: {openedIcon, openedIconStyle, closedIcon, closedIconStyle},
    },
  } = useThemeConfig();

  return (
    <Toggle
      icons={{
        checked: <Opened icon={openedIcon} style={openedIconStyle} />,
        unchecked: <Closed icon={closedIcon} style={closedIconStyle} />,
      }}
    />
  );
}
