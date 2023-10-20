import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter,FaLink} from 'react-icons/fa';
import { GrMail } from "react-icons/gr";

function ShareDropdown({ isOpen, onClose, onLinkClick }) {
    const links = [
        { icon: <FaFacebook />, url: 'https://www.facebook.com/post?text=' },
        { icon: <FaWhatsapp />, url: 'https://wa.me/?text=' },
        { icon: <FaTwitter />, url: 'https://twitter.com/intent/tweet?text=' },
        { icon: <GrMail />, url: 'mailto:' },
        // { icon: <FaLink />, url: 'https://zee5-vcys.vercel.app/' },
    ]
    
      return (
        isOpen && (
          <div onMouseLeave={onClose} className="shate-dropdown-modal">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url+encodeURIComponent('https://zee5-vcys.vercel.app/')} onClick={() => onLinkClick(link.url + encodeURIComponent('https://zee5-vcys.vercel.app/'))}
                target="_blank" >
                  {link.icon}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
        )
      );
}

export default ShareDropdown