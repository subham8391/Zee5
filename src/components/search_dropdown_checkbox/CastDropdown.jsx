import React from 'react';
import DropdownCheckboxBuilder from './DropdownCheckboxBuilder';

function CastDropdown({ selectedOptions, onSelect }) {
  const options = [
    { label: 'Ella Wilson', value: 'Ella Wilson' },
    { label: 'Ryan Taylor', value: 'Ryan Taylor' },
    { label: 'John Johnson', value: 'John Johnson' },
    { label: 'Emma Smith', value: 'Emma Smith' },
    { label: 'Michael Miller', value: 'Michael Miller' },
    // Add more options as needed
  ];
  const head='Cast';
  return (
    <DropdownCheckboxBuilder
      head={head}
      options={options}
      selectedOptions={selectedOptions}
      onSelect={onSelect}
    />
  );
}

export default CastDropdown;
