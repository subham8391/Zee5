import React, { useState,useEffect,useRef,useReducer } from 'react'
import './scrollbar.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; 


function Scrollbar({ imageUrls}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imageUrls);
  }, [imageUrls]);

  return (
    <div className="carousel-wrapper">
      <Splide
        options={{
          type: "loop", 
          perPage: 1,
          autoplay: true, 
          interval: 2000, 
          breakpoints: {
           
            768: {
              perPage: 2, 
            },
            576: {
              perPage: 1, 
            },
          },
        }}
      >
        {images.map((imageUrl, index) => (
          <SplideSlide key={index}>
            <img
              className="carousel-item"
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Scrollbar;

