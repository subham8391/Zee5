import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import Cast_dropdown from './search_dropdown_checkbox/Cast_dropdown';
import Contenttype_dropdown from './search_dropdown_checkbox/Contenttype_dropdown';
import Genres_dropdown from './search_dropdown_checkbox/Genres_dropdown';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    cast: [],
    contenttype: [],
    genres: [],
  });
  const [isApplyActive, setIsApplyActive] = useState(false);
  const [isClearAllVisible, setIsClearAllVisible] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?search={"title":"${query}"}&limit=200`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'projectID': 'qkwqr7ns3d9d'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const searchData = await response.json();
      setSearchResults(searchData.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const applyFilters = () => {
    // Build the filter object based on selected options
    const filter = {};
    if (selectedOptions.genres.length > 0) {
      filter.keywords = selectedOptions.genres.join(',');
    }
    if (selectedOptions.cast.length > 0) {
      filter.cast = selectedOptions.cast.join(',');
    }
    if (selectedOptions.contenttype.length > 0) {
      filter.type = selectedOptions.contenttype.join(',');
    }

    // Fetch filtered results based on the filter object
    fetchFilteredResults(filter);
  };

  const fetchFilteredResults = async (filter) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?search=${JSON.stringify(filter)}&limit=200`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'projectID': 'qkwqr7ns3d9d'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const filteredData = await response.json();
      setFilteredResults(filteredData.data);
    } catch (error) {
      console.error('Error fetching filtered results:', error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  useEffect(() => {
    // This useEffect will trigger a new search when the location (URL) changes.
    // You can use this to update the search results when navigating back to the same page.
    const newQuery = new URLSearchParams(location.search).get('q');
    if (newQuery !== query) {
      setSearchResults([]); // Clear the current results while fetching new ones
      fetchSearchResults(); // Fetch new results based on the updated query
    }
  }, [location.search]);

  // Define functions to handle dropdown option selection
  const handleCastSelect = (selectedValues) => {
    setSelectedOptions({ ...selectedOptions, cast: selectedValues });
  };

  const handleGenresSelect = (selectedValues) => {
    setSelectedOptions({ ...selectedOptions, genres: selectedValues });
  };

  const handleContenttypeSelect = (selectedValues) => {
    setSelectedOptions({ ...selectedOptions, contenttype: selectedValues });
  };

  useEffect(() => {
    // Update the Apply button state
    setIsApplyActive(Object.values(selectedOptions).some((options) => options.length > 0));
    // Update the Clear All button visibility
    setIsClearAllVisible(
      Object.values(selectedOptions).some((options) => options.length > 0)
    );
  }, [selectedOptions]);

  return (
    <div className="search-results-container">
      <div className="search-result-section">
        <h4 className='search-q'>Search Results for: {query}</h4>
        <div className="search-result-by-select">
          <Cast_dropdown selectedOptions={selectedOptions.cast} onSelect={handleCastSelect} />
          <Genres_dropdown selectedOptions={selectedOptions.genres} onSelect={handleGenresSelect} />
          <Contenttype_dropdown selectedOptions={selectedOptions.contenttype} onSelect={handleContenttypeSelect} />
          <button className='sfr-btn' disabled={!isApplyActive} onClick={applyFilters}>Apply</button>
          {isClearAllVisible && (
            <button className='sfr-btn' onClick={() =>{setSelectedOptions({ cast: [], contenttype: [], genres: [] });fetchSearchResults(); }}>Clear All</button>
          )}
        </div>
        <div className="search-results-grid">
          {filteredResults.length > 0
            ? filteredResults.map((result) => (
                <div key={result._id} className="search-results-grid-item">
                  {/* Display each filtered result item */}
                  <div className="sr-image">
                    <Link to={`/details/${result.type}/${result._id}`}>
                      <img className='src-img' src={result.thumbnail} alt="" />
                    </Link>
                  </div>
                  <div className="sr-details">
                    <h5 className='sr-title'>{result.title}</h5>
                    <div className="sra-btn">
                      <button className='srwa-btn'>
                        <Link to={`/details/${result.type}/${result._id}`}>
                          <FaPlay className='srwa-icon' /> Watch
                        </Link>
                      </button>
                      <button className='sra-btn'><PiShareFat className='sra-icon' /> Share</button>
                    </div>
                  </div>
                </div>
              ))
            : searchResults.map((result) => (
                <div key={result._id} className="search-results-grid-item">
                  {/* Display each search result item */}
                  <div className="sr-image">
                    <Link to={`/details/${result.type}/${result._id}`}>
                      <img className='src-img' src={result.thumbnail} alt="" />
                    </Link>
                  </div>
                  <div className="sr-details">
                    <h5 className='sr-title'>{result.title}</h5>
                    <div className="sra-btn">
                      <button className='srwa-btn'>
                        <Link to={`/details/${result.type}/${result._id}`}>
                          <FaPlay className='srwa-icon' /> Watch
                        </Link>
                      </button>
                      <button className='sra-btn'><PiShareFat className='sra-icon' /> Share</button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
