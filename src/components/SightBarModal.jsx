import React, { useEffect } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Explore from './sightbar_dropdown_components/Explore';
import Plans from './sightbar_dropdown_components/Plans';
import Setting from './sightbar_dropdown_components/Setting';
import Info from './sightbar_dropdown_components/Info';
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
  }, [isOpen]);

  const handleCloseModal = () => {
    onClose();
  };


  return (
    <div  className={`sight-bar-modal ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        <AiFillCloseCircle />
      </button>
      <div className="sight-bar-modal-content">

        <div style={{ marginTop: '10px', paddingLeft: '15px' }}><Link onClick={handleCloseModal} style={{ textDecoration: 'none', fontSize: '18px', color: 'white' }} to='/'>Home</Link></div>
        <hr className='tab-item-hr' />
        <Explore onClose={handleCloseModal}/>
        <hr className='tab-item-hr' />
        <Plans onClose={handleCloseModal}/>
        <hr className='tab-item-hr' />
        <Setting onClose={handleCloseModal}/>
        <hr className='tab-item-hr' />
        <div style={{ marginTop: '10px', paddingLeft: '15px' }}><Link onClick={handleCloseModal} style={{ textDecoration: 'none', fontSize: '16px', color: 'white' }} to='/Refer_Earn_Discount'>Refer and Earn and Discount</Link></div>
        <hr className='tab-item-hr' />
        <Info onClose={handleCloseModal}/>
        <hr className='tab-item-hr' />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>Version 4.6.3</div>

      </div>

    </div>
  );
};

export default SightBarModal;