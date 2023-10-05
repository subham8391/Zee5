import React, { useState, useEffect } from 'react';
import './watchlistcomponent.css';
function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const fetchEpisodes = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
          'projectID': 'qkwqr7ns3d9d',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const datas=data.data.shows;
      console.log(datas)
      setEpisodes(datas); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching episodes:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEpisodes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
  <div className="episodes-container">
    {episodes.map((item, index) => (
      <div key={index} className="episode-item">
        <img src={item.thumbnail} alt="" className="episode-image" />
        <p>{item.title}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default Episodes;
