import React from 'react'
import SightDropdown from './Sight_Dropdown_Creater';
function Plans() {
    const sightDropcontent = [
        { id: 1, name: 'Buy Plan', path: '/buyplan' },
        { id: 2, name: 'Have a Prepaid code?', path: '/haveapaidcode' },
       
        
      ];
      const headder='Plans';
      return (
        <>
          <SightDropdown heading={headder} content={sightDropcontent} />
        </>
      );
}

export default Plans