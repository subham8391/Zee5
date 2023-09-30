import React from 'react';
import Tranding from './Tranding';
const SearchDropdown = ({ recentSearches, trendingTopics,isFocused }) => {
    
  return (
    <div  className={`search-dropdown ${
      isFocused ? 'input-focused' : ''
    }`}>
      <div className="recent-searches">
        <h3>Recent Searches</h3>
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
      <div className="trending-topics">
      <h3>Top Searches</h3>
        <div>
        <Tranding />
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;