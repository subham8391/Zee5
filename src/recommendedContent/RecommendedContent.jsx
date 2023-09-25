import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './recommendedContent.css';

function RecommendedContent({ type }) {
  const [recommendedContent, setRecommendedContent] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRecommendedContent = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show?limit=20&type=${type}`,
          {
            method: "GET",
            headers: new Headers({
              projectId: "qkwqr7ns3d9d",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const recommendedData = data.data;

        setRecommendedContent(recommendedData);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching recommended content", error);
        setLoading(false); 
      }
    };

    fetchRecommendedContent();
  }, [type]);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='re-heading'>Recommended {type} For You</h1>
      <div className="rc-Container">
        {recommendedContent.map((data, index) => (
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
                <button>
                  <Link to={`/details/${data.type}/${data._id}`}>Watch</Link>
                </button>
                <button>Share</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecommendedContent;
