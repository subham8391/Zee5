import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import './sightbar-dropdown.css'

function Sight_Dropdown_Creater({ heading,content }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleSightbarDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (path) => {
      setIsOpen(false);
      navigate(path);
    };
  
    return (
      <div className={`SightbarDropdown ${isOpen ? 'active' : ''}`}>
        <div className="SightbarDropdown-toggle" onClick={toggleSightbarDropdown}>
          {heading} {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {isOpen && (
          <div className="SightbarDropdown-content">
            {content.map((option) => (
              <div
                key={option.id}
                className="SightbarDropdown-link"
                onClick={() => {
                  handleOptionClick(option.path);
                }}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default Sight_Dropdown_Creater