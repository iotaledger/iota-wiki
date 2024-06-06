/* eslint-disable */
import React, { forwardRef, useEffect } from 'react';
import {
  facetNamesJson,
  allFacets,
  subFilters,
  subChildFilters,
  buildSubFilters,
  identitySubFilters,
  maintainSubFilters,
} from '../../utils/searchConstant';
import clsx from 'clsx';
import styles from './styles.module.css';

export const FilterDropdown = forwardRef(
  ({ selectedFacets, setSelectedFacets, styleProps = {} }, ref) => {
    const actualFacets = allFacets[1];

    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
      let updatedFacetList = checked
        ? [...selectedFacets[1], value]
        : selectedFacets[1].filter((facet) => facet !== value);

      if (!checked && updatedFacetList.length === 0) {
        return;
      }

      if (checked) {
        // If a parent filter is checked, add its child filters
        if (value === 'docusaurus_tag:docs-build-current') {
          updatedFacetList = [
            ...new Set([...updatedFacetList, ...buildSubFilters]),
          ];
        } else if (value === 'docusaurus_tag:docs-identity-rs-1-0-current') {
          updatedFacetList = [
            ...new Set([...updatedFacetList, ...identitySubFilters]),
          ];
        } else if (value === 'docusaurus_tag:docs-maintain-current') {
          updatedFacetList = [
            ...new Set([...updatedFacetList, ...maintainSubFilters]),
          ];
        }
      } else {
        // If a parent filter is unchecked, remove its child filters
        if (value === 'docusaurus_tag:docs-build-current') {
          updatedFacetList = updatedFacetList.filter(
            (facet) => !buildSubFilters.includes(facet),
          );
        } else if (value === 'docusaurus_tag:docs-identity-rs-1-0-current') {
          updatedFacetList = updatedFacetList.filter(
            (facet) => !identitySubFilters.includes(facet),
          );
        } else if (value === 'docusaurus_tag:docs-maintain-current') {
          updatedFacetList = updatedFacetList.filter(
            (facet) => !maintainSubFilters.includes(facet),
          );
        }
      }

      setSelectedFacets([selectedFacets[0], updatedFacetList]);
    };

    const handleSelectAll = (event) => {
      const checked = event.target.checked;
      const updatedFacetList = checked ? actualFacets.slice() : [];
      setSelectedFacets([selectedFacets[0], updatedFacetList]);
    };

    useEffect(() => {
      // Check if all subfilters are selected, if yes, select the parent filter
      const parentFilterStatus = {
        'docusaurus_tag:docs-maintain-current': maintainSubFilters.every(
          (facet) => selectedFacets[1].includes(facet),
        ),
        'docusaurus_tag:docs-build-current': buildSubFilters.every((facet) =>
          selectedFacets[1].includes(facet),
        ),
        'docusaurus_tag:docs-identity-rs-1-0-current': identitySubFilters.every(
          (facet) => selectedFacets[1].includes(facet),
        ),
      };

      Object.keys(parentFilterStatus).forEach((parentFilter) => {
        if (
          parentFilterStatus[parentFilter] &&
          !selectedFacets[1].includes(parentFilter)
        ) {
          setSelectedFacets((prevState) => [
            prevState[0],
            [...prevState[1], parentFilter],
          ]);
        }
      });
    }, [selectedFacets, setSelectedFacets]);

    return (
      <div
        className={clsx('dropdown dropdown--hoverable', styles.dropdown)}
        style={styleProps}
        ref={ref}
      >
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
              disabled={actualFacets.every((facet) =>
                selectedFacets[1].includes(facet),
              )}
              type='checkbox'
              onChange={handleSelectAll}
              checked={actualFacets.every((facet) =>
                selectedFacets[1].includes(facet),
              )}
            />
            Select All
          </label>
          {actualFacets.map((facet, index) => (
            <li key={index} className={clsx(styles.dropdownElements)}>
              <label
                className={
                  subFilters.includes(facetNamesJson[facet])
                    ? clsx(styles.subFilters)
                    : subChildFilters.includes(facetNamesJson[facet])
                    ? clsx(styles.subChildFilters)
                    : ''
                }
              >
                <input
                  style={{ width: '10px' }}
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
  },
);
