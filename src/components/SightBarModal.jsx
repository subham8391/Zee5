import React,{useEffect} from 'react';
import { FaBars } from 'react-icons/fa6';


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
            
                <div className="sight-bar-modal-content">
                    <h2>Sight Bar Modal</h2>
                    {/* Add your modal content here */}
                    <button className="close-button" onClick={onClose}>
                        closr
                    </button>
                </div>
          
        </div>
    );
};

export default SightBarModal;