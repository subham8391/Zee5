import React from 'react'
import SightDropdown from './Sight_Dropdown_Creater';
function Setting() {
    const sightDropcontent = [
        { id: 1, name: 'Reset settings to default', path: '/resetsettings' },

      ];
      const headder='Setting';
      return (
        <>
          <SightDropdown heading={headder} content={sightDropcontent} />
        </>
      );
}

export default Setting