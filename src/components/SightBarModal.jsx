import React,{useEffect} from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import UserDropdownSelect from './UserDropdownSelect';
import Explore from './sightbar_dropdown_components/Explore';
const SightBarModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const closeOnOutsideClick = (e) => {
          if (e.target.classList.contains('sight-bar-modal')) {
            onClose();
          
          }
          
        };
    
        window.addEventListener('click', closeOnOutsideClick);
    
        return () => {
          window.removeEventListener('click', closeOnOutsideClick);
        };
      }, [onClose]);
    return (
        <div className={`sight-bar-modal ${isOpen ? 'open' : ''}`}>
               <button className="close-button" onClick={onClose}>
                        <AiFillCloseCircle />
                    </button>
                <div className="sight-bar-modal-content">
                    <h2>Sight Bar Modal</h2>
                    <Link to='/'>Back To Home</Link>
                    <Explore />
                    <UserDropdownSelect />
                    <h2>Explore</h2>
                    <h2>Planes</h2>
                    <h2>Setting</h2>
                    <h2>Refer and Earn and Discount</h2>
                    <h2>Info</h2>
                    
                </div>
          
        </div>
    );
};

export default SightBarModal;