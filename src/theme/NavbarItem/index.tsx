/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import MegaDropdownNavbarItem from './MegaDropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
const NavbarItemComponents = {
  default: () => DefaultNavbarItem,
  localeDropdown: () => LocaleDropdownNavbarItem,
  search: () => SearchNavbarItem,
  dropdown: () => DropdownNavbarItem,
  megaDropdown: () => MegaDropdownNavbarItem,
  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360

  /* eslint-disable no-undef, global-require */
  docsVersion: () => require('@theme/NavbarItem/DocsVersionNavbarItem').default,
  docsVersionDropdown: () =>
    require('@theme/NavbarItem/DocsVersionDropdownNavbarItem').default,
  doc: () => require('@theme/NavbarItem/DocNavbarItem').default,
  /* eslint-enable no-undef, global-require */
};

const getNavbarItemComponent = (type) => {
  const navbarItemComponentFn = NavbarItemComponents[type];

  if (!navbarItemComponentFn) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }

  return navbarItemComponentFn();
};

function getComponentType(type, isDropdown, isMegaDropdown) {
  if (isMegaDropdown) {
    return 'megaDropdown';
  }

  // Backward compatibility: navbar item with no type set
  // but containing dropdown items should use the type "dropdown"
  if (!type || type === 'default') {
    return isDropdown ? 'dropdown' : 'default';
  }

  return type;
}

function NavbarItem({ type, items, layout, ...props }) {
  const componentType = getComponentType(
    type,
    items !== undefined,
    layout !== undefined,
  );
  const NavbarItemComponent = getNavbarItemComponent(componentType);
  return <NavbarItemComponent items={items} layout={layout} {...props} />;
}

NavbarItem.propTypes = {
  type: PropTypes.string,
  items: PropTypes.array,
  layout: PropTypes.arrayOf(PropTypes.string),
};

export default NavbarItem;
