/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';

import Layout from '@theme/Layout';
import clsx from 'clsx';

import TutorialCard from './_components/TutorialCard';
import {
  sortedTutorials,
  type Tutorial,
  type TagType,
} from '@site/src/data/tutorials';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useHistory, useLocation } from '@docusaurus/router';
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

function toggleListItem<T>(list: T[], newItems: T[]): T[] {
  let newList = [...list];
  newItems.forEach((item) => {
    const itemIndex = newList.indexOf(item);
    if (itemIndex === -1) {
      newList = newList.concat(item);
    } else {
      newList.splice(itemIndex, 1);
    }
  });
  return newList;
}

const TagQueryStringKey = 'tags';

function replaceSearchTags(search: string, newTags: TagType[]) {
  const searchParams = new URLSearchParams(search);
  searchParams.delete(TagQueryStringKey);
  newTags.forEach((tag) => searchParams.append(TagQueryStringKey, tag));
  return searchParams.toString();
}

function readSearchTags(search: string): TagType[] {
  return new URLSearchParams(search).getAll(TagQueryStringKey) as TagType[];
}

function filterTutorials(
  tutorials: Tutorial[],
  selectedTags: TagType[],
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
    return selectedTags.every((tag) => tutorial.tags.includes(tag));
  });
}

function useFilteredTutorials() {
  const location = useLocation<UserState>();
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterTutorials(sortedTutorials, selectedTags, searchName),
    [selectedTags, searchName],
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
  { value: 'gettingstarted', label: 'Getting Started' },
];

const topicOptions = [
  { value: 'favorite', label: 'Favorite' },
  { value: 'integrationservices', label: 'Integration Services' },
  { value: 'livecoding', label: 'Live Coding' },
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
  { value: 'rust', label: 'Rust' },
  { value: 'wasm', label: 'Wasm' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'node_js', label: 'Node.js' },
  { value: 'c', label: 'C' },
  { value: 'go', label: 'Go' },
];

function TutorialFilters() {
  const location = useLocation();
  const history = useHistory();
  const filteredTutorials = useFilteredTutorials();
  const siteCountPlural = useSiteCountPlural();

  const changeTags = useCallback(
    (e) => {
      const items = e.map((item) => {
        return item['value'];
      });
      const tags = readSearchTags(location.search);
      const newTags = toggleListItem(tags, items);
      const newSearch = replaceSearchTags(location.search, newTags);
      history.push({
        ...location,
        search: newSearch,
        state: prepareUserState(),
      });
    },
    [history, location],
  );

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
          <Select
            placeholder='Type'
            isMulti
            onChange={changeTags}
            options={typeOptions}
          />
        </div>
        <div className='col col--3'>
          <Select
            placeholder='Topic'
            isMulti
            onChange={changeTags}
            options={topicOptions}
          />
        </div>
        <div className='col col--3'>
          <Select
            placeholder='Frameworks'
            isMulti
            onChange={changeTags}
            options={frameworkOptions}
          />
        </div>
        <div className='col col--3'>
          <Select
            placeholder='Languages'
            isMulti
            onChange={changeTags}
            options={languageOptions}
          />
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

function TutorialCards() {
  const filteredTutorials = useFilteredTutorials();

  if (filteredTutorials.length === 0) {
    return (
      <section className='margin-top--lg margin-bottom--xl'>
        <div className='container padding-vert--md text--center'>
          <h2>No result</h2>
        </div>
      </section>
    );
  }

  return (
    <section className='margin-top--lg margin-bottom--xl'>
      <div className='container margin-top--lg'>
        <ul className={styles.tutorialList}>
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} tutorial={tutorial} />
          ))}
        </ul>
      </div>
    </section>
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
