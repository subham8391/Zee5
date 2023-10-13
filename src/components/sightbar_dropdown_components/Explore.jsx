import React from 'react';
import SightDropdown from './SightDropdownCreater';
function Explore({onClose}) {
 
  const sightDropcontent = [
    { id: 1, name: 'TV Shows', path: '/tvshows' },
    { id: 2, name: 'Movies', path: '/movies' },
    { id: 3, name: 'Web Series', path: '/web-series' },
    { id: 4, name: 'Premium', path: '/premium' },
    { id: 5, name: 'Kids', path: '/kids' },
    { id: 6, name: 'Live TV', path: '/livetv' },
    { id: 7, name: 'Sports', path: '/sports' },
    { id: 8, name: 'Music', path: '/music' },
    { id: 9, name: 'News', path: '/news' },
    { id: 10, name: 'Education', path: '/education' },
    { id: 11, name: 'Rent', path: '/rent' },
    { id: 12, name: 'Video', path: '/video' },
    { id: 13, name: 'Songs', path: '/songs' },
    { id: 14, name: 'Channels', path: '/channels' },
  ];
  const headder='Explore';
  return (
    <>
      <SightDropdown heading={headder} content={sightDropcontent} onClose={onClose}/>
    </>
  );
}

export default Explore;