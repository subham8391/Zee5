import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaBars } from 'react-icons/fa6';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TbLanguageHiragana } from 'react-icons/tb';
import {navbarLinks} from '../ConstentData';
import './navigationdar.css';

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showGenres, setShowGenres] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
 

  useEffect(() => {
    const handleResize = () => {
     
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Search query submitted: ${searchQuery}`);
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
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const renderLinks = (links, isSubNavbarLink = false) =>
    links.map((link) => (
      <Link
        to={link.path}
        key={link.path}
        className={`${isSubNavbarLink ? 'sub-navbar-link' : 'navbar-link'} ${
          location.pathname === link.path ? 'active' : ''
        }`}
      >
        {link.label}
      </Link>
    ));

 
    let numLinksInNavbar, numLinksInMore;

    if (screenWidth>1728 ) {
      numLinksInNavbar = 9;
      numLinksInMore = 7;
    } else if (screenWidth < 1728 && screenWidth> 1286.4) {
      numLinksInNavbar = 5;
      numLinksInMore = 10;
      
    } else if (screenWidth<1286.4) {
      numLinksInNavbar = 3;
      numLinksInMore = 13;
    } 

  const moreLinks = navbarLinks.slice(numLinksInNavbar);
  const path=location.pathname;
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
          {renderLinks(navbarLinks.slice(0, numLinksInNavbar))}
          {moreLinks.length > 0 && (
            <div
              className="dropdown"
              onMouseEnter={toggleGenresDropdown}
              onMouseLeave={closeGenresDropdown}
            >
              <span className="view-more">
                <BsGrid3X3GapFill />
              </span>
              {showGenres && (
                <ul className="genre-dropdown">
                  <li>{renderLinks(moreLinks, true)}</li>
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="con-right">
          <form
            onSubmit={handleSearchSubmit}
            className={`search-bar ${isInputFocused ? 'input-focused' : ''}`}
          >
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            
          </form>
          <div className="language">
            <TbLanguageHiragana />
          </div>
          <div className="auth-buttons">
            {renderLinks(
              [
                { path: '/login', label: 'LogIn' },
                { path: '/signup', label: 'SignUp' },
              ],
              true
            )}
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






