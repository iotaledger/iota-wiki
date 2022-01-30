/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef, memo } from 'react';
import type { Props } from '@theme/Toggle';
import { useThemeConfig, ColorModeConfig } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';

import clsx from 'clsx';
import './styles.css';

const ToggleComponent = memo(
  ({
    className,
    switchConfig,
    checked: defaultChecked,
    disabled,
    onChange,
  }: Props & {
    switchConfig: ColorModeConfig['switchConfig'];
    disabled: boolean;
  }): JSX.Element => {
    const { darkIcon, darkIconStyle, lightIcon, lightIconStyle } = switchConfig;
    const styles = {
      unchecked: lightIconStyle,
      checked: darkIconStyle,
    };
    const icons = {
      unchecked: lightIcon,
      checked: darkIcon,
    };
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

ToggleComponent.displayName = 'ToggleComponent';

export default function Toggle(props: Props): JSX.Element {
  const {
    colorMode: { switchConfig },
  } = useThemeConfig();
  const isBrowser = useIsBrowser();

  return (
    <ToggleComponent
      switchConfig={switchConfig}
      disabled={!isBrowser}
      {...props}
    />
  );
}
