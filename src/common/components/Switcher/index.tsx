import React, { useState } from 'react';
import type { ComponentType, SVGProps } from 'react';

import useSwitcher from '@site/src/utils/useSwitcher';
import Link from '@docusaurus/Link';

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
};

type MenuProps = { item: Item; items: MenuItem[] };

function Menu(props: MenuProps) {
  return (
    <ul className='menu__list'>
      {props.items.map(({ id, label, to }) => (
        <li key={id}>
          {id === props.item.id ? (
            <div className='menu__link menu__link--active'>
              <span className='menu__icon'></span>
              {label}
            </div>
          ) : (
            <Link className='menu__link' to={to}>
              <span className='menu__icon'></span>
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Switcher() {
  const [menu, setMenu] = useState();

  const current = useSwitcher();
  if (!current) return null;

  const toggleMenu = (toggleMenu) => {
    setMenu((menu) => (menu === toggleMenu ? undefined : toggleMenu));
  };

  return (
    <div className='switcher container'>
      {current.subsections.map((subsection) =>
        subsection.id === current.subsection.id ? (
          <div key={subsection.id} className='card margin-vert--md'>
            <div className='card__body'>
              <h3>{subsection.label}</h3>
              {subsection.description && <p>{subsection.description}</p>}
              <div className='button-group button-group--block'>
                {current.docs && current.docs.length > 1 && (
                  <button
                    className='button button--secondary'
                    onClick={() => toggleMenu('docs')}
                  >
                    {current.doc.label}
                  </button>
                )}
                {current.versions && current.versions.length > 1 && (
                  <button
                    className='button button--secondary'
                    onClick={() => toggleMenu('versions')}
                  >
                    {current.version.label}
                  </button>
                )}
              </div>
            </div>
            {menu && (
              <div className='card__footer padding-horiz--none'>
                {menu === 'docs' ? (
                  <Menu item={current.doc} items={current.docs} />
                ) : menu === 'versions' ? (
                  <Menu item={current.version} items={current.versions} />
                ) : null}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={subsection.id}
            className='card margin-vert--md'
            to={subsection.to}
          >
            <div className='card__body'>
              <h3>{subsection.label}</h3>
              {subsection.description && <p>{subsection.description}</p>}
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
