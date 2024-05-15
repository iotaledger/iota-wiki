import React from 'react';

export const DropdownContent = ({
  facetList,
  selectedFacets,
  setSelectedFacets,
}) => {
  const actualFacets = facetList[1];
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
    <div
      style={{
        position: 'fixed',
        right: '21%',
        top: '9.7%',
        cursor: 'pointer',
      }}
      className='dropdown dropdown--hoverable'
    >
      <button
        style={{ background: 'transparent', border: 'transparent' }}
        className='button button--primary'
      >
        filter↓
      </button>

      <ul
        className='dropdown__menu'
        style={{
          width: '30vh',
          position: 'fixed',
          right: '30%',
          top: '12.5%',
          left: '69%',
        }}
      >
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
            <label>
              <input
                type='checkbox'
                value={facet}
                onChange={handleCheckboxChange}
                checked={selectedFacets[1].includes(facet)}
              />
              {facet.slice(15)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};