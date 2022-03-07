/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import type { ComponentProps } from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import MegaDropdownNavbarItem from '@site/src/components/MegaDropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type { Props as DropdownNavbarItemProps } from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props as DocsVersionDropdownNavbarItemProps } from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type { Props as LocaleDropdownNavbarItemProps } from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import type { Props as SearchNavbarItemProps } from '@theme/NavbarItem/SearchNavbarItem';
import type { Props as MegaDropdownNavbarItemProps } from '@site/src/components/MegaDropdownNavbarItem';
import './styles.css';

type Props = ComponentProps<'a'> & {
  readonly position?: 'left' | 'right';
} & (
    | LinkLikeNavbarItemProps
    | ({ readonly type?: 'dropdown' } & DropdownNavbarItemProps)
    | ({ readonly type: 'megaDropdown' } & MegaDropdownNavbarItemProps)
    | ({
        readonly type: 'docsVersionDropdown';
      } & DocsVersionDropdownNavbarItemProps)
    | ({ readonly type: 'localeDropdown' } & LocaleDropdownNavbarItemProps)
    | ({
        readonly type: 'search';
      } & SearchNavbarItemProps)
  );

type Types = Props['type'];

const NavbarItemComponents: Record<
  Exclude<Types, undefined>,
  // TODO: properly type this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  () => (props: any) => JSX.Element
> = {
  default: () => DefaultNavbarItem,
  localeDropdown: () => LocaleDropdownNavbarItem,
  search: () => SearchNavbarItem,
  dropdown: () => DropdownNavbarItem,
  megaDropdown: () => MegaDropdownNavbarItem,
  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360
  /* eslint-disable @typescript-eslint/no-var-requires, global-require */
  docsVersion: () => require('@theme/NavbarItem/DocsVersionNavbarItem').default,
  docsVersionDropdown: () =>
    require('@theme/NavbarItem/DocsVersionDropdownNavbarItem').default,
  doc: () => require('@theme/NavbarItem/DocNavbarItem').default,
  docSidebar: () => require('@theme/DocSidebar').default,
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

function getComponentType(type, props): NavbarItemComponentType {
  if (props.layout !== undefined) {
    return 'megaDropdown';
  }

  // Backward compatibility: navbar item with no type set
  // but containing dropdown items should use the type 'dropdown'
  if (!props.type || props.type === 'default') {
    return props.items !== undefined ? 'dropdown' : 'default';
  }
  return type as NavbarItemComponentType;
}

export const getInfimaActiveClassName = (mobile?: boolean): string =>
  mobile ? 'menu__link--active' : 'navbar__link--active';

export default function NavbarItem({ type, ...props }: Props): JSX.Element {
  const componentType = getComponentType(type, props);
  const NavbarItemComponent = getNavbarItemComponent(componentType);
  return <NavbarItemComponent {...props} />;
}
