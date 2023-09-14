import React from 'react'
import { Link} from 'react-router-dom';
import logo from '../images/logo.png'
import './navigationdar.css';
import { FaBars} from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TbLanguageHiragana } from "react-icons/tb";
import { useState, useEffect } from 'react';
const NavigationBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showGenres, setShowGenres] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false); 
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      // Implement your search logic here
      console.log(`Search query submitted: ${searchQuery}`);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        // Detect Enter key press and trigger search
        handleSearchSubmit(e);
      }
    };
  
    const toggleGenresDropdown = () => {
      setShowGenres(!showGenres);
    };
  
    const closeGenresDropdown = () => {
      setShowGenres(false);
    };
  
    const clearSearchInput = () => {
      setSearchQuery('');
    };
  
    const handleInputFocus = () => {
      setIsInputFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsInputFocused(false);
    };
  
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="con-left">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img className="logo" src={logo} alt="Logo" />
              </Link>
            </div>
  
            <Link to="/" className="navbar-link" >Home</Link>
            <Link to="/tvshows" className="navbar-link">TV Shows</Link>
            <Link to="/movies" className="navbar-link">Movies</Link>
            
  
            {/* View More Dropdown */}
            <div
              className="dropdown"
              onMouseEnter={toggleGenresDropdown}
              onMouseLeave={closeGenresDropdown}
            >
              <span className="view-more"><BsGrid3X3GapFill /></span>
              {showGenres && (
                <div className="genre-dropdown">
                  <Link to="/kids" className="sub-navbar-link">Kids</Link>
                  <Link to="/livetv" className="sub-navbar-link">Live TV</Link>
                  <Link to="/music" className="sub-navbar-link">Music</Link>
                  <Link to="/premium" className="sub-navbar-link">Premium</Link>
                  <Link to="/web-series" className="sub-navbar-link">Web-Series</Link>
                  <Link to="/news" className="sub-navbar-link">News</Link>
                  <Link to="/education" className="sub-navbar-link">Education</Link>
                  <Link to="/sports" className="sub-navbar-link">Sports</Link>
                  <Link to="/rent" className="sub-navbar-link">Rent</Link>
                  <Link to="/video" className="sub-navbar-link">Vedio</Link>
                  <Link to="/songs" className="sub-navbar-link">Songs</Link>
                  <Link to="/channels" className="sub-navbar-link">Channels</Link>
                  {/* Add more genre links here */}
                </div>
              )}
            </div>
          </div>
          <div className="con-right">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className={`search-bar ${isInputFocused ? 'input-focused' : ''}`}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown} // Listen for Enter key press
                onFocus={handleInputFocus} // Handle input focus
                onBlur={handleInputBlur} // Handle input blur
              />
              {searchQuery && (
                <button className='close-btn' type="button" onClick={clearSearchInput}>
                  &#x2715;
                </button>
              )}
            </form>
            <div className="language"><TbLanguageHiragana /></div>
            <div className="auth-buttons">
              <Link to="/signup" className="navbar-link">Sign Up</Link>
              <Link to="/login" className="navbar-link">Log In</Link>
            </div>
            <div className="sightbar"><FaBars /></div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;