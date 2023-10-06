import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import './myaccount.css';

function MyAccount() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  // console.log(activeTab,'active') // Use tab names as identifiers
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    setActiveTab(lastSegment)
  }, [location]);
  
  // Data for tabs and their corresponding content
  const tabs = [
    { label: 'Profile', heading: 'My Profile', tabName: 'profile' },
    { label: 'Watchlist', heading: 'My Watchlist', tabName: 'watchlist' },
    { label: 'Subscription', heading: 'My Subscriptions', tabName: 'subscription' },
    { label: 'Rentals', heading: 'My Rentals', tabName: 'rentals' },
    { label: 'Transaction', heading: 'My Transactions', tabName: 'transaction' },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(`/account/${tabName}`); // Change the route when a tab is clicked
  };

  return (
    <div className='my-acc-container'>
      <div className='my-acc-section'>
        <div className='tab-header'>
          {tabs.map((tab) => (
            <div
              key={tab.tabName}
              className={`tab ${activeTab === tab.tabName ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.tabName)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className='tab-content'>
          <h1 className='tab-item-head'>{tabs.find((tab) => tab.tabName === activeTab).heading}</h1>
          <hr className='tab-item-hr' />
          {/* Render the content based on the active tab */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
