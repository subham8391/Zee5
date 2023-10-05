import React, { useState } from 'react';
import Episodes from './watchlistcomponents/Episodes';
import Moviesw from './watchlistcomponents/Moviesw'
import Sportswl from './watchlistcomponents/Sportswl'
import Videoswl from './watchlistcomponents/Videoswl'
function Watchlist() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Episodes', content: <Episodes/> },
    { label: 'Movies', content: <Moviesw /> },
    { label: 'Videos', content: <Videoswl /> },
    { label: 'Sports', content: <Sportswl /> },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='my-sub-tab-acc-section'>
      <div className="sub-tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`sub-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="sub-tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Watchlist;
