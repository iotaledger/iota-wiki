/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useThemeConfig } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import './styles.css';

const ToggleMemo = memo(
  ({
    className,
    styles,
    icons,
    checked: defaultChecked,
    disabled,
    onChange,
  }) => {
    const [checked, setChecked] = useState(defaultChecked);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);
    return (
      <div
        className={clsx('toggle', className, {
          'toggle--checked': checked,
          'toggle--focused': focused,
          'toggle--disabled': disabled,
        })}
        role='button'
        tabIndex={-1}
        onClick={() => inputRef.current?.click()}
      >
        <div
          className='toggle__icon toggle__icon--unchecked'
          style={styles.unchecked}
        >
          {icons.unchecked}
        </div>
        <div
          className='toggle__icon toggle__icon--checked'
          style={styles.checked}
        >
          {icons.checked}
        </div>

        <input
          ref={inputRef}
          checked={checked}
          type='checkbox'
          className='toggle__screenreader-only'
          aria-label='Switch between dark and light mode'
          onChange={onChange}
          onClick={() => setChecked(!checked)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              inputRef.current?.click();
            }
          }}
        />
      </div>
    );
  },
);

ToggleMemo.displayName = 'ToggleMemo';
ToggleMemo.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.shape({
    unchecked: PropTypes.any,
    checked: PropTypes.any,
  }),
  icons: PropTypes.shape({
    unchecked: PropTypes.string,
    checked: PropTypes.string,
  }),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default function Toggle(props) {
  const {
    colorMode: {
      switchConfig: { darkIcon, darkIconStyle, lightIcon, lightIconStyle },
    },
  } = useThemeConfig();
  const isBrowser = useIsBrowser();
  return (
    <ToggleMemo
      disabled={!isBrowser}
      styles={{
        unchecked: lightIconStyle,
        checked: darkIconStyle,
      }}
      icons={{
        unchecked: lightIcon,
        checked: darkIcon,
      }}
      {...props}
    />
  );
}
