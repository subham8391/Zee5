import React, { useState,useEffect,useRef,useReducer } from 'react'
import './scrollbar.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide CSS


function Carousel({ imageUrls}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imageUrls);
  }, [imageUrls]);

  return (
    <div className="carousel-wrapper">
      <Splide
        options={{
          type: "loop", // Infinite loop
          perPage: 1, // Display 3 images per page
          autoplay: true, // Autoplay
          interval: 2000, // Autoplay interval in milliseconds
          breakpoints: {
            // Responsive breakpoints
            768: {
              perPage: 2, // Display 2 images per page on smaller screens
            },
            576: {
              perPage: 1, // Display 1 image per page on mobile devices
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

export default Carousel;

