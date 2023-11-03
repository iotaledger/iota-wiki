import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import icons from '@site/src/icons/iota';

import './styles.css';
import { SwitcherProps } from '@site/src/utils/useSwitcher';

export type Item = {
  id: string;
  label: string;
  description?: string;
  badges?: string[];
  icon?: string;
};

export type Version = Omit<Item, 'id'> & {
  id?: string;
};
export type Doc = Item & {
  subsection: string;
  versions: Version[];
};

export type Sidebar = {
  docId: string;
  sidebarId: string;
};

export type Section = {
  before?: Sidebar;
  subsections: Item[];
  after?: Sidebar;
};

export type Config = {
  docs: Doc[];
  sections: Section[];
};

export type MenuItem = Item & {
  to: string;
  active: boolean;
};

enum SwitcherMenuState {
  None,
  Docs,
  Versions,
}

function Icon({ icon, className }: { icon: string; className: string }) {
  const Comp = icons[icon];
  return <Comp className={className} />;
}

type SwitcherMenuDropdownProps = { items: MenuItem[]; active: boolean };

function SwitcherMenuDropdown(props: SwitcherMenuDropdownProps) {
  return (
    <div
      className={clsx(
        'switcher-menu__dropdown',
        props.active && 'switcher-menu__dropdown--active',
      )}
    >
      <ul className='switcher-menu__items'>
        {props.items.map(
          ({ id, label, to, active, icon, description, badges = [] }) => (
            <li className='switcher-menu__item' key={id}>
              <Link
                className={clsx(
                  'switcher-menu__link',
                  active && 'switcher-menu__link--active',
                )}
                to={to}
              >
                {icon && <Icon icon={icon} className='switcher-menu__icon' />}
                <div className='switcher-menu__content'>
                  <div className='switcher-menu__label'>
                    {label}
                    <div className='switcher-menu__badges'>
                      {Array.from(new Set(badges)).map((badge) => (
                        <span
                          key={badge}
                          className='badge switcher-menu__badge'
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  {description && (
                    <div className='switcher-menu__description'>
                      {description}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

type SwitcherMenuProps = { docs: MenuItem[]; versions: MenuItem[] };

function SwitcherMenu(props: SwitcherMenuProps) {
  const [state, setState] = useState<SwitcherMenuState>(SwitcherMenuState.None);
  const { docs, versions } = props;

  const toggle = (nextState: SwitcherMenuState) => {
    setState((previousState) =>
      previousState !== nextState ? nextState : SwitcherMenuState.None,
    );
  };

  const currentDoc = docs.find((doc) => doc.active);
  const currentVersion = versions.find((version) => version.active);
  if (!currentDoc || !currentVersion)
    throw 'Could not find active doc or version.';

  return (
    <div className='switcher-menu'>
      <div className='switcher-menu__buttons'>
        {docs.length > 1 ? (
          <div
            className={clsx(
              'switcher-menu__button',
              'switcher-menu__button--caret',
              state === SwitcherMenuState.Docs &&
                'switcher-menu__button--active',
            )}
            onClick={() => toggle(SwitcherMenuState.Docs)}
          >
            {currentDoc.label}
          </div>
        ) : (
          <div
            className={clsx(
              'switcher-menu__button',
              'switcher-menu__button--disabled',
            )}
          >
            {currentDoc.label}
          </div>
        )}
        {versions.length > 1 ? (
          <div
            className={clsx(
              'switcher-menu__button',
              'switcher-menu__button--caret',
              state === SwitcherMenuState.Versions &&
                'switcher-menu__button--active',
            )}
            onClick={() => toggle(SwitcherMenuState.Versions)}
          >
            {currentVersion.label}
          </div>
        ) : (
          <div
            className={clsx(
              'switcher-menu__button',
              'switcher-menu__button--disabled',
            )}
          >
            {currentVersion.label}
          </div>
        )}
      </div>
      <SwitcherMenuDropdown
        items={docs}
        active={state === SwitcherMenuState.Docs}
      />
      <SwitcherMenuDropdown
        items={versions}
        active={state === SwitcherMenuState.Versions}
      />
    </div>
  );
}

export default function Switcher(props: SwitcherProps['switcher']) {
  const { subsections, docs, versions } = props;

  return (
    <div className='switcher menu__list-item'>
      {subsections.map((subsection) =>
        subsection.active ? (
          <div
            key={subsection.id}
            className={clsx(
              'switcher-subsection',
              'switcher-subsection--active',
            )}
          >
            <div className='switcher-subsection__content'>
              <h4>
                <span className='badge badge--switcher'>
                  {subsection.label}
                </span>
              </h4>
              <p className='switcher-subsection__description'>
                {subsection.description}
              </p>
            </div>
            {(docs.length > 1 || versions.length > 1) && (
              <SwitcherMenu docs={docs} versions={versions} />
            )}
          </div>
        ) : (
          <Link
            key={subsection.id}
            className={clsx('switcher-subsection')}
            to={subsection.to}
          >
            <div className='switcher-subsection__content'>
              <h4>
                <span className='badge badge--switcher'>
                  {subsection.label}
                </span>
              </h4>
              <p className='switcher-subsection__description'>
                {subsection.description && <p>{subsection.description}</p>}
              </p>
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
