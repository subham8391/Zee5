import React,{useEffect} from 'react'
import './movies.css'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import Scrollbar from '../scrollbar/Scrollbar'
import Carousel from '../carousal/Carousal'
import {carouselMovieData} from '../ConstentData'
import si8 from '../images/H-scroll-8.png'
import si2 from '../images/H-scroll-2.jpg'
import si9 from '../images/H-scroll-9.png'
import si10 from '../images/H-scroll-10.png'
import si11 from '../images/H-scroll-11.png'
import si12 from '../images/H-scroll-12.png'
import si7 from '../images/H-scroll-7.png'
const imageUrls = [si8, si2, si9, si10, si11, si12, si7
  // Add more image URLs as needed
];

function Movies() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      <section className="slider">
        <Scrollbar imageUrls={imageUrls} />
      </section>

      {carouselMovieData.map((item, index) => (
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

export default Movies;