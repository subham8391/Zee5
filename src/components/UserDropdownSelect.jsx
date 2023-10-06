import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Auth from '../auth'; // Import the Auth object

function UserDropdownSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = Auth.isAuthenticated();
  const navigate = useNavigate();

  const toggleUserDropdown = () => {
    setIsOpen(!isOpen);
  };

  const userDropcontent = [
    { id: 1, name: 'My Watchlist', path: '/account/watchlist' },
    { id: 2, name: 'My Subscriptions', path: '/account/subscription' },
    { id: 3, name: 'My Rentals', path: '/account/rentals' },
    { id: 4, name: 'My Transactions', path: '/account/transaction' },
    
  ];

  const handleOptionClick = (path) => {
    setIsOpen(false);
    navigate(path); // Navigate to the selected option's path
  };

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null; // If not authenticated, don't render the modal dropdown
  }

  return (
    <div className={`Userdropdown ${isOpen ? 'active' : ''}`}>
      <div className="Userdropdown-toggle" onClick={toggleUserDropdown}>
        My Account {isOpen ? <IoChevronUp /> : <IoChevronDown />}
      </div>
      {isOpen && (
        <div className="Userdropdown-content">
          {userDropcontent.map((option) => (
            <div
              key={option.id}
              className="Userdropdown-link"
              onClick={() => {handleOptionClick(option.path)
              }}
            >
              {option.name}
            </div>
          ))}
          {isAuthenticated && (
            <div className="Userdropdown-link" onClick={handleLogout}>
              Log out
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserDropdownSelect;
