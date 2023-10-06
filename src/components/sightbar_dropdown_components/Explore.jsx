import React from 'react';
import SightDropdown from './Sight_Dropdown_Creater';
function Explore() {
 
  const userDropcontent = [
    { id: 1, name: 'TV Shows', path: '/tvshows' },
    { id: 2, name: 'Movies', path: '/movies' },
    { id: 3, name: 'Web Series', path: '/web-series' },
    { id: 4, name: 'Premium', path: '/premium' },
    { id: 5, name: 'My Rentals', path: '/account/rentals' },
    { id: 6, name: 'My Transactions', path: '/account/transaction' },
    { id: 7, name: 'My Watchlist', path: '/account/watchlist' },
    { id: 8, name: 'My Subscriptions', path: '/account/subscription' },
    { id: 9, name: 'My Rentals', path: '/account/rentals' },
    { id: 10, name: 'My Transactions', path: '/account/transaction' },
    { id: 11, name: 'My Rentals', path: '/account/rentals' },
    { id: 12, name: 'My Transactions', path: '/account/transaction' },
    { id: 13, name: 'My Rentals', path: '/account/rentals' },
    { id: 14, name: 'My Transactions', path: '/account/transaction' },
  ];

  return (
    <>
      <SightDropdown content={userDropcontent} />
    </>
  );
}

export default Explore;