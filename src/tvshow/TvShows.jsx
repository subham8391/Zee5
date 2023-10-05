import React,{useEffect} from 'react'
import './tvshows.css'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import Scrollbar from '../scrollbar/Scrollbar'
import Carousel from '../carousal/Carousal'
import {carouselTvShowData} from '../ConstentData'
import si13 from '../images/H-scroll-13.png'
import si14 from '../images/H-scroll-14.png'
import si15 from '../images/H-scroll-15.png'
import si16 from '../images/H-scroll-16.png'
import si17 from '../images/H-scroll-17.png'
import si6 from '../images/H-scroll-6.png'
import si18 from '../images/H-scroll-18.png'
import './tvshows.css'
const imageUrls = [si13, si14, si15, si16, si17, si6, si18];

function TvShows() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tvshow-container">
      <section className="slider">
        <Scrollbar imageUrls={imageUrls} />
      </section>

      {carouselTvShowData.map((item, index) => (
        <div className="tranding-nu" key={index}>
          <div className="cc-header">
            <h2>{item.heading}</h2>
            {/* A dynamic Link to more */}
            <Link to={`/more/${encodeURIComponent(item.apiEndpoint)}/${item.filterType}/${encodeURIComponent(item.heading)}`} className="m-btn">
              More <FaChevronRight />
            </Link>
          </div>
          <Carousel apiEndpoint={item.apiEndpoint} filterType={item.filterType} />
        </div>
      ))}

    </div>
  );
}

export default TvShows;