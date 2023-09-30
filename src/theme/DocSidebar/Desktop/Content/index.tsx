/**
 * SWIZZLED VERSION: 2.4.1
 * REASONS:
 *  - Add switcher.
 *  - Add static sidebar logic.
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import type { Props } from '@theme/DocSidebar/Desktop/Content';
import Switcher from '@site/src/components/Switcher';

import styles from './styles.module.css';
import useSwitcher from '@site/src/utils/useSwitcher';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

export default function DocSidebarDesktopContent({
  path,
  className,
}: Props): JSX.Element {
  const showAnnouncementBar = useShowAnnouncementBar();
  const { before, switcher, main, after } = useSwitcher();

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}
    >
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        {before && (
          <DocSidebarItems items={before} activePath={path} level={1} />
        )}
        {switcher && <Switcher {...switcher} />}
        {main && <DocSidebarItems items={main} activePath={path} level={1} />}
        {after && <DocSidebarItems items={after} activePath={path} level={1} />}
      </ul>
    </nav>
  );
}
