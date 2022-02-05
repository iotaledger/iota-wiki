/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useMemo, useEffect} from 'react';
import Collapsible from 'react-collapsible';

import Layout from '@theme/Layout';
import clsx from 'clsx';

import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import TutorialTagSelect, {
  readSearchTags,
} from './_components/TutorialTagSelect';
import TutorialFilterToggle, {
  type Operator,
  readOperator,
} from './_components/TutorialFilterToggle';
import TutorialCard from './_components/TutorialCard';
import {
  sortedTutorials,
  Tags,
  TagList,
  type Tutorial,
  type TagType,
} from '@site/src/data/tutorials';
import TutorialTooltip from './_components/TutorialTooltip';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useHistory, useLocation} from '@docusaurus/router';
import {usePluralForm} from '@docusaurus/theme-common';

import styles from './styles.module.css';

const TITLE = 'Wiki Tutorials';
const DESCRIPTION = 'List of great IOTA tutorials';
const EDIT_URL =
  'https://github.com/Dr-Electron/iota-wiki/edit/feat/tuto-section/src/data/users.tsx';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const {scrollTopPosition, focusedElementId} = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({top: scrollTopPosition});
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterTutorials(
  tutorials: Tutorial[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    tutorials = tutorials.filter((tutorial) =>
      tutorial.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return tutorials;
  }
  return tutorials.filter((tutorial) => {
    if (tutorial.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => tutorial.tags.includes(tag));
    }
    return selectedTags.some((tag) => tutorial.tags.includes(tag));
  });
}

function useFilteredTutorials() {
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterTutorials(sortedTutorials, selectedTags, operator, searchName),
    [selectedTags, operator, searchName],
  );
}

function TutorialHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        href={EDIT_URL}
        target="_blank"
        rel="noreferrer">
        🙏 Please add your tutorial
      </a>
    </section>
  );
}

function useSiteCountPlural() {
  const {selectMessage} = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      "1 site|" + sitesCount + " sites",
    );
}

function TutorialFilters() {
  const filteredTutorials = useFilteredTutorials();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <h2>
            Filters
          </h2>
          <span>{siteCountPlural(filteredTutorials.length)}</span>
        </div>
        <TutorialFilterToggle />
      </div>
      <ul className={styles.checkboxList}>
        {TagList.map((tag, i) => {
          const {label, description, color} = Tags[tag];
          const id = `tutorial_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <TutorialTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus">
                <TutorialTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === 'favorite' ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </TutorialTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const favoriteTutorials = sortedTutorials.filter((tutorial) =>
  tutorial.tags.includes('favorite'),
);
const otherTutorials = sortedTutorials.filter(
  (tutorial) => !tutorial.tags.includes('favorite'),
);
const videoTutorials = sortedTutorials.filter(
  (tutorial) => tutorial.tags.includes('videotutorial'),
);
const starterTutorials = sortedTutorials.filter(
  (tutorial) => tutorial.tags.includes('gettingstarted'),
);

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder="Search for tutorial name..."
        value={value ?? undefined}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function TutorialCards() {
  const filteredTutorials = useFilteredTutorials();

  if (filteredTutorials.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>
            No result
          </h2>
          <SearchBar />
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredTutorials.length === sortedTutorials.length ? (
        <>
          <div className={styles.tutorialFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.tutorialFavoriteHeader,
                )}>
                <h2>
                    Our favorites
                </h2>
                <FavoriteIcon svgClass={styles.svgIconFavorite} />
                <SearchBar />
              </div>
              <ul className={clsx('container', styles.tutorialList)}>
                {favoriteTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </div>
          </div>
          <div className="container margin-top--lg">
            <Collapsible trigger={<Header text='Getting Started' count={starterTutorials.length}/>}>
              <ul className={styles.tutorialList}>
                {starterTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </Collapsible>
          </div>
          <div className="container margin-top--lg">
            <Collapsible trigger={<Header text='Video Tutorials' count={videoTutorials.length}/>}>
              <ul className={styles.tutorialList}>
                {videoTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </Collapsible>
          </div>

          <div className="container margin-top--lg">
            <Collapsible open={true} trigger={<Header text='All Tutorials' count={otherTutorials.length}/>} >
              <ul className={styles.tutorialList}>
                {otherTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </Collapsible>
          </div>
        </>
      ) : (
        <div className="container">
          <div
            className={clsx(
              'margin-bottom--md',
              styles.tutorialFavoriteHeader,
            )}>
            <SearchBar />
          </div>
          <ul className={styles.tutorialList}>
            {filteredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.title} tutorial={tutorial} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

interface Props {
  text: string,
  count: number,
}

function Header(props: Props): JSX.Element {
  return (
    <div style={{display: "flex"}}>
      <h2>{props.text}</h2>
      <h2 className={styles.counter}>{props.count}</h2>
    </div>
  );
}

function Tutorials(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <TutorialHeader />
        <TutorialFilters />
        <TutorialCards />
      </main>
    </Layout>
  );
}

export default Tutorials;
