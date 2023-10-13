import React from 'react';
import DropdownCheckbox_builder from './DropdownCheckboxBuilder';

const options = [
  { label: 'Action', value: 'Action' },
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Love', value: 'Love' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Suspense', value: 'Suspense' },
  { label: 'Romance', value: 'Romance' },
  { label: 'Betrayal', value: 'Betrayal' },
  { label: 'Magic', value: 'Magic' },
  { label: 'Revenge', value: 'Revenge' },
  { label: 'Thriller', value: 'Thriller' },
  { label: 'Mystery', value: 'Mystery' },
];
const head='Genres';
function Genres_dropdown({ selectedOptions, onSelect }) {
  return (
    <DropdownCheckbox_builder
      head={head}
      options={options}
      selectedOptions={selectedOptions}
      onSelect={onSelect}
    />
  );
}

export default Genres_dropdown;
