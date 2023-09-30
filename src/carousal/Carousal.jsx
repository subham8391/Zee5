import React, { useState, useEffect, useRef } from 'react';
import "./carousal.css";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Carousel({ apiEndpoint, filterType }) {
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const carouselRef = useRef(null);
  const contentRef = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const updateWidth = () => {
    const newWidth = carouselRef.current.offsetWidth;
    setWidth(newWidth);
  };

  const fetchImages = async () => {

    try {
      const response = await fetch(
        apiEndpoint,
        {
          method: "get",
          headers: new Headers({
            projectId: "qkwqr7ns3d9d",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const filteredData = data.data.filter(item => item.type === filterType);
      setImages(filteredData);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };


  const handleNextClick = () => {
    const carousel = carouselRef.current;

    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      carousel.scrollBy({ left: width + 16, behavior: "smooth" });

      if (currentIndex === images.length - 2) {
        nextButton.current.style.display = "none";
      }

      prevButton.current.style.display = "flex";
    }
  };

  const handlePrevClick = () => {
    const carousel = carouselRef.current;

    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      carousel.scrollBy({ left: -(width + 16), behavior: "smooth" });

      if (currentIndex === 1) {
        prevButton.current.style.display = "none";
      }

      nextButton.current.style.display = "flex";
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

  
    fetchImages();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  console.log(images);
  return (
    <div id="wrapper">
      <div id="carousel" ref={carouselRef}>
        <div id="content" ref={contentRef}>
          {images.map((imageUrl, index) => (
            <div className="image-cont" key={index}>
              <Link to={`/details/${imageUrl.type}/${imageUrl._id}`}>
              <img
                className="item"
                src={imageUrl.thumbnail}
                alt={`Image ${index + 1}`}
              />
              </Link>
              <div className="details">
                <h5 className='c-name'>{imageUrl.title}</h5>
                <div className="a-btn">
                  <button>
                  <Link to={`/details/${imageUrl.type}/${imageUrl._id}`}>Watch</Link>
                  </button>
                  <button>Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        id="prev"
        ref={prevButton}
        onClick={handlePrevClick}
        style={{ display: "none" }}
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <button
        id="next"
        ref={nextButton}
        onClick={handleNextClick}
        style={{
          display: images.length === 0 ? "none" : "flex",
        }}
      >
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
}

export default Carousel;