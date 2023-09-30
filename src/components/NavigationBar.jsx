import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaBars } from 'react-icons/fa6';
import { BiSolidCrown } from "react-icons/bi";
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TbLanguageHiragana } from 'react-icons/tb';
import { RiCloseLine } from "react-icons/ri";
import { navbarLinks } from '../ConstentData';
import SearchDropdown from './SearchDropdown';
import './navigationdar.css';

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showGenres, setShowGenres] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const scSearchRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (scSearchRef.current && !scSearchRef.current.contains(e.target)) {
        // Click occurred outside of sc-search, close the modal
        setShowDropdown(false);
        setIsInputFocused(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Search query submitted: ${searchQuery}`);

    // Update recent searches (you can store them in local state or elsewhere)
    setRecentSearches([...recentSearches, searchQuery]);

    // Clear the search input
    setSearchQuery('');

    // Close the dropdown
    setShowDropdown(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  const toggleGenresDropdown = () => {
    setShowGenres(!showGenres);
  };

  const closeGenresDropdown = () => {
    setShowGenres(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    // setIsInputFocused(false);
  };

  const handleClearButtonClick = () => {
    setSearchQuery(''); // Clear the input field
  };

  const renderLinks = (links, isSubNavbarLink = false) =>
    links.map((link) => (
      <Link
        to={link.path}
        key={link.path}
        className={`${isSubNavbarLink ? 'sub-navbar-link' : 'navbar-link'} ${location.pathname === link.path ? 'active' : ''
          }`}
      >
        {link.label}
      </Link>
    ));

  let numLinksInNavbar, numLinksInMore;

  if (screenWidth > 1728) {
    numLinksInNavbar = 9;
    numLinksInMore = 6;
  } else if (screenWidth < 1728 && screenWidth > 1286.4) {
    numLinksInNavbar = 5;
    numLinksInMore = 10;
  } else if (screenWidth < 1286.4) {
    numLinksInNavbar = 3;
    numLinksInMore = 12;
  }

  const moreLinks = navbarLinks.slice(numLinksInNavbar);
  const path = location.pathname;
  return (
    <>
      {!(path === '/login' || path === '/signup') && (
        <nav className="navbar">
          <div className="nav-container">
            <div className="con-left">
              <div className="logo">
                <Link to="/">
                  <img className="logo" src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="nav-link-cons">
                <ul className="nav-link">
                  {renderLinks(navbarLinks.slice(0, numLinksInNavbar))}
                </ul>
              </div>
              {moreLinks.length > 0 && (
                <div
                  className="dropdown"
                  onMouseEnter={toggleGenresDropdown}
                  onMouseLeave={closeGenresDropdown}

                >
                  <button className="view-more" active>
                    <BsGrid3X3GapFill />
                  </button>
                  {showGenres && (
                    <ul className="genre-dropdown">
                      <li>{renderLinks(moreLinks, true)}</li>
                    </ul>
                  )}
                </div>
              )}
            </div>
            <div className="con-right">
              <div className="sc-search" ref={scSearchRef}>
                <form
                  onSubmit={handleSearchSubmit}
                  className={`search-bar ${isInputFocused ? 'input-focused' : ''
                    }`}
                >
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
                    isFocused={isInputFocused}
                  />
                )}
              </div>
              <div className="language">
                <TbLanguageHiragana />
              </div>
              <div className="auth-buttons">
                {renderLinks(
                  [
                    { path: '/login', label: 'LogIn', },

                  ],
                  true
                )}
                <button className='bp-btn'><BiSolidCrown className='dp-btn-icon' /> BUY PLAN</button>
              </div>
              <div className="sightbar">
                <FaBars />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
