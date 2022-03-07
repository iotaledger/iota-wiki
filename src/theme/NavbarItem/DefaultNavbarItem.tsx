/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import type { DesktopOrMobileNavBarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import NavLink, { ExtendedNavLinkProps } from '@site/src/components/NavLink';

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavLink
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
  ...props
}: DesktopOrMobileNavBarItemProps) {
  delete props.isDropdownItem;

  return (
    <li className='menu__list-item'>
      <NavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

function DefaultNavbarItem({
  mobile = false,
  to,
  label,
  ...props
}: ExtendedNavLinkProps): JSX.Element {
  delete props.position;

  /**
   * Added to enable non-clickable category headers.
   * To use simply add an navBar items in the config
   * with to:'category-header'
   */
  if (to === 'category-header') {
    const categorySeparatorStyles = {
      fontSize: '10px',
      color: 'var(--ifm-color-emphasis-600)',
      paddingTop: '10px',
    };
    return <li style={categorySeparatorStyles}>{label}</li>;
  } else {
    const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
    return <Comp to={to} label={label} {...props} />;
  }
}

export default DefaultNavbarItem;
