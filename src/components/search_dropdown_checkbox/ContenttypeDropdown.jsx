import React from 'react';
import DropdownCheckboxBuilder from './DropdownCheckboxBuilder';

const options = [
  { label: 'Movie', value: 'Movie' },
  { label: 'TV Show', value: 'TV Show' },
  { label: 'Web Series', value: 'Web Series' },
  { label: 'Video Song', value: 'Video Song' },
  { label: 'Short Film', value: 'Short Film' },
  { label: 'Trailer', value: 'Trailer' },
];
const head='Content Type';
function ContenttypeDropdown({ selectedOptions, onSelect }) {
  return (
    <DropdownCheckboxBuilder
      head={head}
      options={options}
      selectedOptions={selectedOptions}
      onSelect={onSelect}
    />
  );
}

export default ContenttypeDropdown;
