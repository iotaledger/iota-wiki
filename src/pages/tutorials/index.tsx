/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';

import Layout from '@theme/Layout';

import TutorialCard from '../../components/tutorials/TutorialCard';
import {
  sortedTutorials,
  type Tutorial,
  type TagType,
} from '@site/src/data/tutorials';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useHistory, useLocation } from '@docusaurus/router';
import { usePluralForm } from '@docusaurus/theme-common';

import './styles.css';
import SearchBar, { readSearchName } from '@site/src/components/SearchBar';
import Select, { ActionMeta } from 'react-select';
import config from '@site/tutorials.json';

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

function getItems(actionMeta: ActionMeta<any>): TagType[] {
  const items = [];
  switch (actionMeta.action) {
    case 'select-option':
      items.push(actionMeta.option);
      break;
    case 'deselect-option':
      items.push(actionMeta.option);
      break;
    case 'remove-value':
      items.push(actionMeta.removedValue);
      break;
    case 'pop-value':
      items.push(actionMeta.removedValue);
      break;
    case 'clear':
      items.push(...actionMeta.removedValues);
      break;
  }

  return items.map((item) => {
    return item['value'];
  });
}

function TutorialFilters() {
  const location = useLocation();
  const history = useHistory();
  const filteredTutorials = useFilteredTutorials();
  const siteCountPlural = useSiteCountPlural();

  const changeTags = useCallback(
    (_, actionMeta) => {
      const items = getItems(actionMeta);
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
          <h3>Type</h3>
        </div>
        <div className='col col--3'>
          <h3>Topic</h3>
        </div>
        <div className='col col--3'>
          <h3>Frameworks</h3>
        </div>
        <div className='col col--3'>
          <h3>Languages</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col col--3'>
          <Select
            placeholder='Type'
            isMulti
            onChange={changeTags}
            options={config.typeOptions}
          />
        </div>
        <div className='col col--3'>
          <Select
            placeholder='Topic'
            isMulti
            onChange={changeTags}
            options={config.topicOptions}
          />
        </div>
        <div className='col col--3'>
          <Select
            placeholder='Frameworks'
            isMulti
            onChange={changeTags}
            options={config.frameworkOptions}
          />
        </div>
        <div className='col col--3'>
          <Select
            placeholder='Languages'
            isMulti
            onChange={changeTags}
            options={config.languageOptions}
          />
        </div>
      </div>
      <div className='margin-bottom--sm filter-checkbox'>
        <div>
          <span>{siteCountPlural(filteredTutorials.length)}</span>
        </div>
        <div className='col col--1 col--offset-3'>
          <span>+</span>
          <a href={config.edit_url} target='_blank' rel='noreferrer'>
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
        <ul className='tutorial-list'>
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
    <Layout title={config.title} description={config.description}>
      <main className='margin-vert--lg'>
        <TutorialHeader />
        <TutorialFilters />
        <TutorialCards />
      </main>
    </Layout>
  );
}

export default Tutorials;
