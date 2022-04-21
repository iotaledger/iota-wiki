/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';

import NavbarNavLink, { ExtendedNavLinkProps } from '@theme/NavbarItem/NavbarNavLink';

import type { DesktopOrMobileNavBarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';

import { getInfimaActiveClassName } from '@theme/NavbarItem/utils';


function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? 'dropdown__link' : 'navbar__item navbar__link',
        className,
      )}
      {...props}
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function DefaultNavbarItemMobile({
  className,
  isDropdownItem,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  return (
    <li className='menu__list-item'>
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: ExtendedNavLinkProps): JSX.Element {
  /**
   * Added to enable non-clickable category headers.
   * To use simply add an navBar items in the config
   * with to:'category-header'
   */
  if (props.to === 'category-header') {
    const categorySeparatorStyles = {
      fontSize: '10px',
      color: 'var(--ifm-color-emphasis-600)',
      paddingTop: '10px',
    };
    return <li style={categorySeparatorStyles}>{props.label}</li>;
  } else {
    const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
    return (
      <Comp
        {...props}
        activeClassName={
          props.activeClassName ?? getInfimaActiveClassName(mobile)
        }
      />
    );
  }
}
