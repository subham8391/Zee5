import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?search={"title":"${query}"}`,
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

  return (
    <div>
      <h2 style={{ color: 'white', }}>Search Results for: {query}</h2>
      <div className="grid">
        {searchResults.map((result) => (
          <div key={result._id} className="grid-item">
            {/* Display each search result item */}
            <h3 style={{ color: 'white', marginTop: '100px' }}>{result.title}</h3>
            {/* Add more details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
