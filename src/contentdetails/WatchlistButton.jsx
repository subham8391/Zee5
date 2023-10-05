import React, { useState } from 'react';
import { BiListPlus, BiListCheck } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Auth from '../auth';

function WatchlistButton({ id }) {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const navigate = useNavigate(); 
  const handleWatchlistClick = async () => {
    try {
      // Check if the user is authenticated
      if (!Auth.isAuthenticated()) {
        // Navigate to the login page
        navigate('/login');
        return;
      }

      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ott/watchlist/like',
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
            'projectID': 'qkwqr7ns3d9d',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'showId': id,
          }),
        }
      );

      if (response.ok) {
        setIsInWatchlist((prevIsInWatchlist) => !prevIsInWatchlist);
      } else {
        console.error('Error adding/removing from watchlist');
      }
    } catch (error) {
      console.error('Error adding/removing from watchlist', error);
    }
  };

  return (
    <div className='v-ac-btn' onClick={handleWatchlistClick}>
      {isInWatchlist ? <BiListCheck /> : <BiListPlus />} <span>Watchlist</span>
    </div>
  );
}

export default WatchlistButton;
