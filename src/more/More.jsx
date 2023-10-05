import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import './more.css';


function More() {
  const { apiEndpoint, filterType, heading } = useParams();
  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: "get",
          headers: new Headers({
            projectId: "qkwqr7ns3d9d",
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        const filteredResult = result.data.filter(item => item.type === filterType);
        

        setData(filteredResult);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    
  }, [apiEndpoint, filterType]);
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='more-container'>
      
      <div className="more-main">
      <h1 className='more-header'>{heading}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className='more-content'>
          {datas.map((data, index) => (
            <div className="image-cont" key={index}>
              <Link to={`/details/${data.type}/${data._id}`}>
              <img
                className="item"
                src={data.thumbnail}
                alt={`Image ${index + 1}`}
              />
              </Link>
              <div className="details">
                <h5 className='c-name'>{data.title}</h5>
                <div className="a-btn">
                  <button className='wa-btn'>
                  <Link to={`/details/${data.type}/${data._id}`}><FaPlay className='wa-icon' /> Watch</Link>
                  </button>
                  <button className='sa-btn'><PiShareFat className='sa-icon' /> Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
      
    </div>
  );
}

export default More;
