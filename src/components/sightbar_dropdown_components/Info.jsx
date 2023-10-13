import React from 'react'
import SightDropdown from './SightDropdownCreater';
function Info({onClose}) {
    const sightDropcontent = [
        { id: 1, name: 'About Us', path: '/aboutus' },
        { id: 2, name: 'Help Center', path: '/helpcenter' },
        { id: 3, name: 'Content Redressal Mechanism', path: '/content-redressal-echanism' },
        { id: 4, name: 'Terms of Use', path: '/terms-of-use' },
        { id: 5, name: 'Privacy Policy', path: '/privacypolicy' },
        
      ];
      const headder='Info';
      return (
        <>
          <SightDropdown heading={headder} content={sightDropcontent} onClose={onClose} />
        </>
      );
}

export default Info