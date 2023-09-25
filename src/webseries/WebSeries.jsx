import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import Scrollbar from '../scrollbar/Scrollbar'
import Carousel from '../carousal/Carousal'
import {carouselWebSeriesData} from '../ConstentData'
import si1 from '../images/H-scroll-1.jpg'
import si2 from '../images/H-scroll-2.jpg'
import si3 from '../images/H-scroll-3.jpg'
import si4 from '../images/H-scroll-4.png'
import si5 from '../images/H-scroll-5.png'
import si6 from '../images/H-scroll-6.png'
import si7 from '../images/H-scroll-7.png'
import './webseries.css'

const imageUrls = [si1, si2, si3, si4, si5, si6, si7
    // Add more image URLs as needed
];

function WebSeries() {
  return (
   <div className="webs_container">
    <section className="slider">
        <Scrollbar imageUrls={imageUrls} />
      </section>

      {carouselWebSeriesData.map((item, index) => (
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
  )
}

export default WebSeries