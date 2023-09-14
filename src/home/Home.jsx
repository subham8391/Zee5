import React from 'react'
import Scrollbar from '../scrollbar/Scrollbar'
import Carousel from '../carousal/Carousal'
import si1 from '../images/H-scroll-1.jpg'
import si2 from '../images/H-scroll-2.jpg'
import si3 from '../images/H-scroll-3.jpg'
import si4 from '../images/H-scroll-4.png'
import si5 from '../images/H-scroll-5.png'
import si6 from '../images/H-scroll-6.png'
import si7 from '../images/H-scroll-7.png'
import './home.css'
function Home() {
  const imageUrls = [si1, si2, si3, si4, si5, si6, si7
    // Add more image URLs as needed
  ];
  return (
    <div className='home-container'>
      {/* slider section */}
      <section className="slider">
        <Scrollbar imageUrls={imageUrls} />
      </section>
      <div className="tranding-nu">
        <h2>Trending Near You</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=2&limit=140" filterType="movie" />
      </div>
      <div className="tranding-nu">
        <h2>Top 10 ZEE5 Original Shows</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=140" filterType="web series" />
      </div>
      <div className="tranding-nut">
        <h2>Latest Bangla Episodes</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=3&limit=100" filterType="tv show" />
      </div>
      <div className="tranding-nut">
        <h2>Latest Hindi Episodes Free</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=4&limit=100" filterType="web series" />
      </div>

      <div className="tranding-nu">
        <h2>Unmissable Movies & Shows</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=5&limit=100" filterType="web series" />
      </div>
      <div className="tranding-nut">
        <h2>Explore In Your Language</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=6&limit=100" filterType="trailer" />
      </div>
      <div className="tranding-nu">
        <h2>Bollywood Blockbusters</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=7&limit=100" filterType="movie" />
      </div>
      <div className="tranding-nut">
        <h2>Aastha Live TV | Watch Free</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=8&limit=100" filterType="video song" />
      </div>

      <div className="tranding-nu">
        <h2>Spicy Webseries Now FREE</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=9&limit=100" filterType="web series" />
      </div>

      <div className="tranding-nu">
        <h2>Popular Free Shows | Bangla</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=10&limit=100" filterType="tv show" />
      </div>

      <div className="tranding-nu">
        <h2>Hidden Gems on ZEE5</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=11&limit=100" filterType="trailer" />
      </div>

      <div className="tranding-nu">
        <h2>World Hits | Free Dubbed Movies</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=12&limit=100" filterType="movie" />
      </div>

      <div className="tranding-nu">
        <h2>South Dubbed Dhamaka</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=13&limit=100" filterType="documentary" />
      </div>

      <div className="tranding-nu">
        <h2>Inspired From Real Life</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=14&limit=100" filterType="short film" />
      </div>

      <div className="tranding-nut">
        <h2>Movies by Decade</h2>
        <Carousel apiEndpoint="https://academics.newtonschool.co/api/v1/ott/show?page=15&limit=100" filterType="movie" />
      </div>

    </div>
  )
}

export default Home