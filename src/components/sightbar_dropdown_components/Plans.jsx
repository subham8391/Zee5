import React from 'react'
import SightDropdown from './SightDropdownCreater';
function Plans({onClose}) {
    const sightDropcontent = [
        { id: 1, name: 'Buy Plan', path: '/buyplan' },
        { id: 2, name: 'Have a Prepaid code?', path: '/haveapaidcode' },
       
        
      ];
      const headder='Plans';
      return (
        <>
          <SightDropdown heading={headder} content={sightDropcontent} onClose={onClose} />
        </>
      );
}

export default Plans