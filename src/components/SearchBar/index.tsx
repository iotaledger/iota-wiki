import { useHistory, useLocation } from '@docusaurus/router';
import { prepareUserState } from '@site/src/pages/tutorials';
import React from 'react';
import { useEffect, useState } from 'react';

const SearchNameQueryKey = 'name';

export function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className='search-container'>
      <input
        className='search-container__input'
        id='searchbar'
        placeholder='Search for tutorial name...'
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
