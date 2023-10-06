import React, { useState, useEffect } from 'react';
import { FaFolderClosed } from "react-icons/fa6";
import './watchlistcomponent.css';
function ContentFetcher({ contentType }) {
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = 'https://academics.newtonschool.co/api/v1/ott/watchlist/like';

        const response = await fetch(url, {
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
        const content = data.data.shows;

        // Filter content based on contentType prop
        const filteredContent = content.filter((item) => item.type === contentType);
        // console.log(filteredContent)
        setContentData(filteredContent);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${contentType}:`, error);
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentType]);

  if (loading || contentData.length === 0) {
    return (<div className='wle-body'>
      <FaFolderClosed className='wle-icon' />
      <h1 className='wle-desc'>Uh-Oh! Nothing to watch</h1>
    </div>
    )
  }


  return (
    <div>
      <div className="watchlist-container">
        {contentData.map((item, index) => (
          <div key={index} className="watchlist-item">
            <div className="wathlist-content-img">
              <img src={item.thumbnail} alt="" className="watchlist-image" />
            </div>

            <div className="wathlist-content-title">
              <p>{item.title}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentFetcher;
