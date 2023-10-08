import React, { useState, useEffect, useRef } from 'react';
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import SearchDropdown from './SearchDropdown';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]); //after search display the result
  const [suggestionResults, setsuggestionResults] = useState([]);  // for suggsation when type in search bar
  const scSearchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve recent searches from localStorage
    const storedRecentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedRecentSearches);

    const handleOutsideClick = (e) => {
      if (scSearchRef.current && !scSearchRef.current.contains(e.target)) {
        setShowDropdown(false);
        setIsInputFocused(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSearchChange = async (e) => {
    const inputQuery = e.target.value;
    setSearchQuery(inputQuery);

    if (inputQuery) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }

    if (inputQuery) {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/ott/show?search={"title":"${inputQuery}"}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'projectID': 'qkwqr7ns3d9d' // Replace with your actual project ID
          }
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const searchData = await response.json();
        setsuggestionResults(searchData.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ott/show?search={"title":"${searchQuery}"}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'projectID': 'qkwqr7ns3d9d' // Replace with your actual project ID
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const searchData = await response.json();
      setSearchResults(searchData.data);
      navigate(`/search?q=${searchQuery}`);
     
    } catch (error) {
      console.error('Error fetching search results:', error);
    }

    // Update recent searches and store in localStorage
    const updatedRecentSearches = [...recentSearches, searchQuery];
    setRecentSearches(updatedRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecentSearches));

    setShowDropdown(true);
  };

  const handleClearRecentSearches = () => {
    // Clear recent searches and remove from localStorage
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  const handleClearButtonClick = () => {
    setSearchQuery('');
    setsuggestionResults([]);
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setShowDropdown(true);
  };

 // Function to set the search query when an item is clicked
 const handleQueryClick = (query) => {
  setSearchQuery(query); // Update the search query
  setShowDropdown(false); // Hide the suggestion dropdown
  navigate(`/search?q=${query}`); // Navigate to search results
};
  return (
    <div className="sc-search" ref={scSearchRef}>
      <form onSubmit={handleSearchSubmit} className={`search-bar ${isInputFocused ? 'input-focused' : ''}`}>
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
        />
        {searchQuery.length > 0 && (
          <button className="clear-button" onClick={handleClearButtonClick}>
            <RiCloseLine />
          </button>
        )}
      </form>
      {showDropdown && (
        <SearchDropdown
          recentSearches={recentSearches}
          trendingTopics={trendingTopics}
          suggestionResults={suggestionResults}
          isFocused={isInputFocused}
          onClearRecentSearches={handleClearRecentSearches}
          onQueryClick={handleQueryClick} 
        />
      )}
      
    </div>
  );
};

export default SearchBar;
