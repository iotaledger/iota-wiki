/* eslint-disable */

import React from 'react';
import { facetNamesJson, allFacets } from '../../utils/searchConstant';
import clsx from 'clsx';
import styles from './styles.module.css';

export const DropdownContent = ({ selectedFacets, setSelectedFacets }) => {
  const actualFacets = allFacets[1];
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedFacets = [...selectedFacets];
    const updatedFacetList = [...updatedFacets[1]];
    if (checked) {
      if (!updatedFacetList.includes(value)) {
        updatedFacetList.push(value);
      }
    } else {
      const index = updatedFacetList.indexOf(value);
      if (index > -1) {
        updatedFacetList.splice(index, 1);
      }
    }
    updatedFacets[1] = updatedFacetList;
    setSelectedFacets(updatedFacets);
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    const updatedFacets = [...selectedFacets];
    const updatedFacetList = checked ? actualFacets.slice() : [];
    updatedFacets[1] = updatedFacetList;
    setSelectedFacets(updatedFacets);
  };
  return (
    <div className={clsx('dropdown dropdown--hoverable', styles.dropdown)}>
      <button
        className={clsx(
          'button button--primary button--outline',
          styles.filterButton,
        )}
      >
        filter↓
      </button>
      <ul className={clsx('dropdown__menu', styles.dropdownMenu)}>
        <label>
          <input
            type='checkbox'
            onChange={handleSelectAll}
            checked={actualFacets.every((facet) =>
              selectedFacets[1].includes(facet),
            )}
          />
          Select All
        </label>
        {actualFacets.map((facet, index) => (
          <li key={index}>
            <label
              style={
                facetNamesJson[facet] === 'Identity.rs 1.1' ||
                facetNamesJson[facet] === 'Identity.rs 1.2'
                  ? { marginLeft: '30px' }
                  : {}
              }
            >
              <input
                type='checkbox'
                value={facet}
                onChange={handleCheckboxChange}
                checked={selectedFacets[1].includes(facet)}
              />
              {facetNamesJson.hasOwnProperty(facet)
                ? facetNamesJson[facet]
                : facet.slice(15)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
