import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { prepareUserState } from '../TutorialFilters';
import clsx from 'clsx';
import './styles.css';

const SearchNameQueryKey = 'name';

export function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

interface SearchBarProps {
  className?: string;
}

function SearchBar({ className }: SearchBarProps) {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={clsx('search-container', className)}>
      <input
        className='search-container__input'
        id='searchbar'
        placeholder='Search for tutorials'
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

export default SearchBar;
