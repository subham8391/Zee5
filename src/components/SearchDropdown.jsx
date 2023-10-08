import React from 'react';
import Tranding from './Tranding';

const SearchDropdown = ({ recentSearches, trendingTopics, suggestionResults, isFocused, onClearRecentSearches, onQueryClick }) => {
  const isSearchResultsEmpty = suggestionResults.length === 0;
  const isRecentSearchesEmpty = recentSearches.length === 0;
  // const isInputEmpty = isSearchResultsEmpty && isRecentSearchesEmpty;

  return (
    <div className={`search-dropdown ${isFocused ? 'input-focused' : ''}`}>

      {isSearchResultsEmpty ? (
        isRecentSearchesEmpty ? null : (
          <div className="recent-searches">
            <h3>Recent Searches</h3>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index} onClick={() => onQueryClick(search)}>{search}</li>
              ))}
            </ul>
            <button onClick={onClearRecentSearches}>Clear</button>
          </div>
        )
      ) : (
        <div className="search-results">
          <h3>Search Results</h3>
          <ul>
            {suggestionResults.map((result, index) => (
              <li style={{ color: 'white' }} key={index} onClick={() => onQueryClick(result.title)}>{result.title}</li>
            ))}
          </ul>
        </div>
        
      )}

      {isSearchResultsEmpty ? (
        <div className="trending-topics">
          <h3>Top Searches</h3>
          <div>
            <Tranding />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchDropdown;
