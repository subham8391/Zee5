import React from 'react'
import SightDropdown from './SightDropdownCreater';
function Setting({onClose}) {
    const sightDropcontent = [
        { id: 1, name: 'Reset settings to default', path: '/resetsettings' },

      ];
      const headder='Setting';
      return (
        <>
          <SightDropdown heading={headder} content={sightDropcontent} onClose={onClose} />
        </>
      );
}

export default Setting