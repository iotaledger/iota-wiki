import React, { useState } from 'react';
import type { ComponentType, SVGProps } from 'react';

import useSwitcher from '@site/src/utils/useSwitcher';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import './styles.css';

export type Item = {
  id: string;
  label: string;
  description?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

// TODO: Add default version.
export type Version = Item;
export type Doc = Item & {
  subsection: string;
  versions: Version[];
};

// TODO: Add default doc.
export type Subsection = Item;
export type Section = Subsection[];

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
          ({ id, label, to, active, icon: Icon, description }) => (
            <li
              className={clsx(
                'switcher-menu__item',
                active && 'switcher-menu__item--active',
              )}
              key={id}
            >
              <Link className='switcher-menu__link' to={to}>
                {Icon && <Icon className='switcher-menu__icon' />}
                <div className='switcher-menu__content'>
                  <div className='switcher-menu__label'>{label}</div>
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
        <div
          className={clsx(
            'switcher-menu__button',
            state === SwitcherMenuState.Docs && 'switcher-menu__button--active',
          )}
          onClick={() => toggle(SwitcherMenuState.Docs)}
        >
          {currentDoc.label}
        </div>
        <div
          className={clsx(
            'switcher-menu__button',
            state === SwitcherMenuState.Versions &&
              'switcher-menu__button--active',
          )}
          onClick={() => toggle(SwitcherMenuState.Versions)}
        >
          {currentVersion.label}
        </div>
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

export default function Switcher() {
  const currentSwitcher = useSwitcher();
  if (!currentSwitcher) return null;

  const { subsections, docs, versions } = currentSwitcher;

  return (
    <div className='switcher'>
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
              <h3>{subsection.label}</h3>
              {docs.length <= 1 &&
                versions.length <= 1 &&
                subsection.description && <p>{subsection.description}</p>}
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
              <h3>{subsection.label}</h3>
              {subsection.description && <p>{subsection.description}</p>}
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
