import React from 'react'
import SightDropdown from './Sight_Dropdown_Creater';
function Info() {
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
          <SightDropdown heading={headder} content={sightDropcontent} />
        </>
      );
}

export default Info