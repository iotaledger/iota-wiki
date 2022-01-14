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
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type '{ chi... Remove this comment to see the full error message
    className,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'styles' does not exist on type '{ childr... Remove this comment to see the full error message
    styles,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'icons' does not exist on type '{ childre... Remove this comment to see the full error message
    icons,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'checked' does not exist on type '{ child... Remove this comment to see the full error message
    checked: defaultChecked,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'disabled' does not exist on type '{ chil... Remove this comment to see the full error message
    disabled,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onChange' does not exist on type '{ chil... Remove this comment to see the full error message
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
// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
