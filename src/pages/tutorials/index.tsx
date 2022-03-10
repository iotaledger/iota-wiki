/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect } from 'react';
import Collapsible from 'react-collapsible';

import Layout from '@theme/Layout';
import clsx from 'clsx';

import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import { readSearchTags } from './_components/TutorialTagSelect';
import {
  type Operator,
  readOperator,
} from './_components/TutorialFilterToggle';
import TutorialCard from './_components/TutorialCard';
import {
  sortedTutorials,
  type Tutorial,
  type TagType,
} from '@site/src/data/tutorials';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useLocation } from '@docusaurus/router';
import { usePluralForm } from '@docusaurus/theme-common';

import styles from './styles.module.css';
import SearchBar, { readSearchName } from '@site/src/components/SearchBar';
import Select from 'react-select';

const TITLE = 'Tutorials';
const DESCRIPTION = 'List of great IOTA tutorials';
const EDIT_URL =
  'https://github.com/Dr-Electron/iota-wiki/edit/feat/tuto-section/src/data/users.tsx';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
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
    <section className='container margin-top--lg margin-bottom--lg text--center'>
      <div className='row'>
        <div className='col col--2 col--offset-0'>
          <h1 style={{ textAlign: 'left' }}>Tutorials</h1>
        </div>
      </div>
    </section>
  );
}

function useSiteCountPlural() {
  const { selectMessage } = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(sitesCount, '1 result|' + sitesCount + ' results');
}

const typeOptions = [
  { value: 'text', label: 'Text' },
  { value: 'video', label: 'Video' },
];

const topicOptions = [
  { value: 'nft', label: 'NFT' },
  { value: 'supply_chain', label: 'Supply Chain' },
];

const frameworkOptions = [
  { value: 'identity', label: 'Identity' },
  { value: 'streams', label: 'Streams' },
  { value: 'wallet', label: 'Wallet' },
  { value: 'client', label: 'Client' },
  { value: 'stronghold', label: 'Stronghold' },
  { value: 'iscp', label: 'Smart Contracts' },
];

const languageOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function TutorialFilters() {
  const filteredTutorials = useFilteredTutorials();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className='container margin-top--l margin-bottom--lg'>
      <div className='row'>
        <div className='col col--6'>
          <SearchBar />
        </div>
        <div className='col col--1 col--offset-5'>
          <button className='button button--primary'>Filter</button>
        </div>
      </div>
      <div className='row'>
        <div className='col col--3'>
          <Select placeholder='Type' isMulti options={typeOptions} />
        </div>
        <div className='col col--3'>
          <Select placeholder='Topic' isMulti options={topicOptions} />
        </div>
        <div className='col col--3'>
          <Select placeholder='Frameworks' isMulti options={frameworkOptions} />
        </div>
        <div className='col col--3'>
          <Select placeholder='Languages' isMulti options={languageOptions} />
        </div>
      </div>
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <span>{siteCountPlural(filteredTutorials.length)}</span>
        </div>
        <div className='col col--1 col--offset-3'>
          <span>+</span>
          <a href={EDIT_URL} target='_blank' rel='noreferrer'>
            Add your tutorial
          </a>
        </div>
      </div>
    </section>
  );
}

const favoriteTutorials = sortedTutorials.filter((tutorial) =>
  tutorial.tags.includes('favorite'),
);
const otherTutorials = sortedTutorials.filter(
  (tutorial) => !tutorial.tags.includes('favorite'),
);
const videoTutorials = sortedTutorials.filter((tutorial) =>
  tutorial.tags.includes('videotutorial'),
);
const starterTutorials = sortedTutorials.filter((tutorial) =>
  tutorial.tags.includes('gettingstarted'),
);

function TutorialCards() {
  const filteredTutorials = useFilteredTutorials();

  if (filteredTutorials.length === 0) {
    return (
      <section className='margin-top--lg margin-bottom--xl'>
        <div className='container padding-vert--md text--center'>
          <h2>No result</h2>
          <SearchBar />
        </div>
      </section>
    );
  }

  return (
    <section className='margin-top--lg margin-bottom--xl'>
      {filteredTutorials.length === sortedTutorials.length ? (
        <>
          <div className={styles.tutorialFavorite}>
            <div className='container'>
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.tutorialFavoriteHeader,
                )}
              >
                <h2>Our favorites</h2>
                <FavoriteIcon svgClass={styles.svgIconFavorite} />
              </div>
              <ul className={clsx('container', styles.tutorialList)}>
                {favoriteTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </div>
          </div>
          <div className='container margin-top--lg'>
            <Collapsible
              trigger={
                <Header
                  text='Getting Started'
                  count={starterTutorials.length}
                />
              }
            >
              <ul className={styles.tutorialList}>
                {starterTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </Collapsible>
          </div>
          <div className='container margin-top--lg'>
            <Collapsible
              trigger={
                <Header text='Video Tutorials' count={videoTutorials.length} />
              }
            >
              <ul className={styles.tutorialList}>
                {videoTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </Collapsible>
          </div>

          <div className='container margin-top--lg'>
            <Collapsible
              open={true}
              trigger={
                <Header text='All Tutorials' count={otherTutorials.length} />
              }
            >
              <ul className={styles.tutorialList}>
                {otherTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.title} tutorial={tutorial} />
                ))}
              </ul>
            </Collapsible>
          </div>
        </>
      ) : (
        <div className='container'>
          <div
            className={clsx('margin-bottom--md', styles.tutorialFavoriteHeader)}
          >
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
  text: string;
  count: number;
}

function Header(props: Props): JSX.Element {
  return (
    <div style={{ display: 'flex' }}>
      <h2>{props.text}</h2>
      <h2 className={styles.counter}>{props.count}</h2>
    </div>
  );
}

function Tutorials(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className='margin-vert--lg'>
        <TutorialHeader />
        <TutorialFilters />
        <TutorialCards />
      </main>
    </Layout>
  );
}

export default Tutorials;
