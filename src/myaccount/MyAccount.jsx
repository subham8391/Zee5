import React, { useState } from 'react';
import './myaccount.css';

function MyAccount() {
  const [activeTab, setActiveTab] = useState(0);

  // Data for tabs and their corresponding content
  const tabs = [
    { label: 'My Profile', content: 'My Profile' },
    { label: 'My Watchlist', content: 'My Watchlist' },
    { label: 'My Subscription', content: 'My Subscriptions' },
    { label: 'My Rentals', content: 'My Rentals' },
    { label: 'My Transaction', content: 'My Transactions' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='my-acc-container'>
      <div className='my-acc-section'>
        <div className='tab-header'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className='tab-content'>
          <div className='tab-item'>
           <h1 className='tab-item-head'>{tabs[activeTab].content}</h1> 
            <hr className='tab-item-hr'/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
