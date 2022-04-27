/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * REASONS TO SWIZZLE:
 * - Addition of the mega dropdown menu.
 */

import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem, {
  type Props as DropdownNavbarItemProps,
} from '@theme/NavbarItem/DropdownNavbarItem';
import MegaDropdownNavbarItem from '../../components/MegaDropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import type { Types, Props } from '@theme/NavbarItem';
import './styles.css';

const NavbarItemComponents = {
  default: () => DefaultNavbarItem,
  localeDropdown: () => LocaleDropdownNavbarItem,
  search: () => SearchNavbarItem,
  dropdown: () => DropdownNavbarItem,
  megaDropdown: () => MegaDropdownNavbarItem,

  // Need to lazy load these items as we don't know for sure the docs plugin is
  // loaded. See https://github.com/facebook/docusaurus/issues/3360
  /* eslint-disable @typescript-eslint/no-var-requires, global-require */
  docsVersion: () => require('@theme/NavbarItem/DocsVersionNavbarItem').default,
  docsVersionDropdown: () =>
    require('@theme/NavbarItem/DocsVersionDropdownNavbarItem').default,
  doc: () => require('@theme/NavbarItem/DocNavbarItem').default,
  docSidebar: () => require('@theme/NavbarItem/DocSidebarNavbarItem').default,
  /* eslint-enable @typescript-eslint/no-var-requires, global-require */
} as const;

type NavbarItemComponentType = keyof typeof NavbarItemComponents;

const getNavbarItemComponent = (type: NavbarItemComponentType) => {
  const navbarItemComponentFn = NavbarItemComponents[type];
  if (!navbarItemComponentFn) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }
  return navbarItemComponentFn();
};

function getComponentType(
  type: Types,
  props,
  isDropdown: boolean,
): NavbarItemComponentType {
  if (props.layout !== undefined) return 'megaDropdown';
  // Backward compatibility: navbar item with no type set
  // but containing dropdown items should use the type "dropdown"
  if (!type || type === 'default') {
    return isDropdown ? 'dropdown' : 'default';
  }
  return type as NavbarItemComponentType;
}

export default function NavbarItem({ type, ...props }: Props): JSX.Element {
  const componentType = getComponentType(
    type,
    props,
    (props as DropdownNavbarItemProps).items !== undefined,
  );
  const NavbarItemComponent = getNavbarItemComponent(componentType);
  return <NavbarItemComponent {...props} />;
}
