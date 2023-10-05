import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecommendedContent from '../recommendedContent/RecommendedContent';
import { BsFillCircleFill ,BsFillPlayCircleFill} from "react-icons/bs";
import { FaShare } from "react-icons/fa6";
import WatchlistButton from './WatchlistButton';
import './contentdetails.css';
import ContentDetails_Bottom from '../contentDetails-bottom/ContentDetails_Bottom';

function ContentDetails() {
  const { id, type } = useParams();
  const [detailsUrl, setDetailsUrl] = useState('');
  const [videoKey, setVideoKey] = useState(0);
  
  useEffect(() => {
    const fetchDetailsUrl = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
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
        const detailsData = data.data;
      
        setDetailsUrl(detailsData);
        setVideoKey(prevKey => prevKey + 1);
      } catch (error) {
        console.error("Error fetching video URL", error);
      }
    };

    fetchDetailsUrl();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <div className='vid-container'>
        <div className="v-top">

          {detailsUrl && (
            <>
              <div className='v-cont'>
                <div className="vid-con">
                  <video controls key={videoKey} className='d-vid'>
                    <source src={detailsUrl.video_url} type="video/mp4" />
                  </video>
                </div>
                <div className="vid-det">
                  <h1 className='m-title'>{detailsUrl.title}</h1>
                  <div className="v-tca">
                    <h1><BsFillCircleFill className='g-icon'/> {detailsUrl.type}</h1>
                    <h1><BsFillCircleFill className='g-icon'/> {detailsUrl.createdAt}</h1>
                  </div>
                  <div className="v-genre">
                    <h1 className="v-genre-hed">Genres:</h1>
                    {detailsUrl.keywords.map((keyword, index) => (
                      <h1 key={index} className="gen"><BsFillCircleFill className='g-icon'/> {keyword}</h1>
                    ))}
                  </div>
                  <div className="v-ac-con">
                    <div className='v-ac-btn'><FaShare /> <span>share</span></div>
                    <WatchlistButton id={id} />
                    <div className='v-ac-btn'><BsFillPlayCircleFill /> <span>watch Trailer</span></div>
                  </div>
                  <div className="v-cast">
                    <h1 className='v-cast-hed'>Cast:</h1>
                    {detailsUrl.cast.map((cast, index) => (
                      <h1 key={index} className="gen"><BsFillCircleFill className='g-icon'/> {cast}</h1>
                    ))}
                  </div>
                  <div className="v-dir">
                    <h1 className='v-dir-hed'>Director:</h1>
                    <h1 className='v-dir-na'><BsFillCircleFill className='g-icon'/> {detailsUrl.director}</h1>
                  </div>
                  <div className="v-descrip">
                    <h1 className='v-descrip-hed'>Description:</h1>
                    <h1 className='v-descrip-na'><BsFillCircleFill className='g-icon'/> {detailsUrl.description}</h1>
                  </div>
                </div>
              </div>
              <div className="r-cont">
                <RecommendedContent type={type} />
              </div>
            </>
          )}
        </div>
        <div className="v-bottom">
         <ContentDetails_Bottom />
        </div>

      </div>
    </div>
  );
}

export default ContentDetails;
