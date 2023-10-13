import React from 'react';
import DropdownCheckbox_builder from './DropdownCheckboxBuilder';

const options = [
  { label: 'Movie', value: 'Movie' },
  { label: 'TV Show', value: 'TV Show' },
  { label: 'Web Series', value: 'Web Series' },
  { label: 'Video Song', value: 'Video Song' },
  { label: 'Short Film', value: 'Short Film' },
  { label: 'Trailer', value: 'Trailer' },
];
const head='Content Type';
function Contenttype_dropdown({ selectedOptions, onSelect }) {
  return (
    <DropdownCheckbox_builder
      head={head}
      options={options}
      selectedOptions={selectedOptions}
      onSelect={onSelect}
    />
  );
}

export default Contenttype_dropdown;
