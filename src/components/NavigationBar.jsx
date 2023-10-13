
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../auth';
import logo from '../images/zee5-logo-A4464FCB2C-seeklogo.com.png';
import { FaBars, FaCircleUser } from 'react-icons/fa6';
import { FaSearch } from "react-icons/fa";
import { BiSolidCrown } from "react-icons/bi";
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TbLanguageHiragana } from 'react-icons/tb';
import { navbarLinks } from '../ConstentData';
import UserModal from './UserModal';
import SightBarModal from './SightBarModal';
import SearchBar from './SearchBar';
import './navigationdar.css';

const NavigationBar = () => {
  const isAuthenticated = Auth.isAuthenticated();

  const [showGenres, setShowGenres] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSightBarModalOpen, setIsSightBarModalOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleGenresDropdown = () => {
    setShowGenres(!showGenres);
  };

  const closeGenresDropdown = () => {
    setShowGenres(false);
  };

  const openUserModal = () => {
    setIsUserModalOpen(true);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
  };

  // Open SightBarModal
  const openSightBarModal = () => {
    setIsSightBarModalOpen(true);
  };

  // Close SightBarModal
  const closeSightBarModal = () => {
    setIsSightBarModalOpen(false);
  };


  const renderLinks = (links, isSubNavbarLink = false) =>
    links.map((link) => (
      <Link
        to={link.path}
        key={link.path}
        className={`${isSubNavbarLink ? 'sub-navbar-link' : 'navbar-link'} ${location.pathname === link.path ? 'active' : ''}`}
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
  } else if (screenWidth < 1286.4 && screenWidth > 1200) {
    numLinksInNavbar = 3;
    numLinksInMore = 12;
  } else if (screenWidth < 1200) {
    numLinksInNavbar = 15;
    numLinksInMore = 0;

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
              <div className={`nav-link-cons ${screenWidth < 1200 ? 'scrollable' : ''}`}>
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
              {screenWidth < 1200 ? (
                // Render a search button when the screen width is less than 1200
                <button className="search-btn-icon" onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}>
                  <FaSearch />
                </button>
              ) : (
                <SearchBar />
              )}
              <div className="language">
                <TbLanguageHiragana />
              </div>
              <div className="auth-buttons">
                {isAuthenticated ? (
                  <div className='user-btn' onClick={openUserModal}><FaCircleUser /></div>
                ) : (
                  <Link to="/login" className='lin-btn'>Login</Link>
                )}
                <button className='bp-btn'><BiSolidCrown className='dp-btn-icon' /> BUY PLAN</button>
              </div>
              <div className="sightbar" onClick={openSightBarModal}>
                <FaBars />
              </div>
            </div>
          </div>
        </nav>
      )}
      {isUserModalOpen && <UserModal onClose={closeUserModal} />}
      {isSightBarModalOpen && <SightBarModal isOpen={isSightBarModalOpen} onClose={closeSightBarModal} />}
      {isSearchBarOpen && <SearchBar />}
    </>
  );
};

export default NavigationBar;
