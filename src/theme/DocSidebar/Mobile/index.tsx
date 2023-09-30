/**
 * SWIZZLED VERSION: 2.4.1
 * REASONS:
 *  - Add switcher.
 *  - Add static sidebar logic.
 */

import React from 'react';
import clsx from 'clsx';
import {
  NavbarSecondaryMenuFiller,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme/DocSidebarItems';
import type { Props } from '@theme/DocSidebar/Mobile';
import Switcher from '@site/src/components/Switcher';
import useSwitcher from '@site/src/utils/useSwitcher';

function DocSidebarMobileSecondaryMenu({ path }: Props) {
  const mobileSidebar = useNavbarMobileSidebar();
  const { before, switcher, main, after } = useSwitcher();

  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
      {before && (
        <DocSidebarItems
          items={before}
          activePath={path}
          onItemClick={(item) => {
            // Mobile sidebar should only be closed if the category has a link
            if (item.type === 'category' && item.href) {
              mobileSidebar.toggle();
            }
            if (item.type === 'link') {
              mobileSidebar.toggle();
            }
          }}
          level={1}
        />
      )}
      {switcher && <Switcher {...switcher} />}
      {main && (
        <DocSidebarItems
          items={main}
          activePath={path}
          onItemClick={(item) => {
            // Mobile sidebar should only be closed if the category has a link
            if (item.type === 'category' && item.href) {
              mobileSidebar.toggle();
            }
            if (item.type === 'link') {
              mobileSidebar.toggle();
            }
          }}
          level={1}
        />
      )}
      {after && (
        <DocSidebarItems
          items={after}
          activePath={path}
          onItemClick={(item) => {
            // Mobile sidebar should only be closed if the category has a link
            if (item.type === 'category' && item.href) {
              mobileSidebar.toggle();
            }
            if (item.type === 'link') {
              mobileSidebar.toggle();
            }
          }}
          level={1}
        />
      )}
    </ul>
  );
}

function DocSidebarMobile(props: Props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
