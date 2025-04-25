import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import bazooka from '../assets/bazooka.JPG';
import croatia2 from '../assets/croatia2.jpg';
import sunset from '../assets/sunset.jpg';
import bazooka2 from '../assets/bazooka2.JPG';
import croatia from '../assets/croatia.jpg';
import catedrala from '../assets/catedrala.JPG';
import ski from '../assets/ski.jpg';
import pasare from '../assets/pasare.JPG';
import brasov from '../assets/brasov.jpg';

const Content = ({ darkMode }) => {
  const carousel = useRef(null);

  const handleScroll = (direction) => {
    if (carousel.current) {
      const firstImg = carousel.current.querySelectorAll("img")[0];
      if (firstImg) {
        const firstImgWidth = firstImg.clientWidth + 14;
        carousel.current.scrollLeft += direction === 'left' ? -firstImgWidth : firstImgWidth;
      }
    }
  };

  const images = [
    { src: bazooka, alt: "Bazooka" },
    { src: croatia2, alt: "Croatia 2" },
    { src: sunset, alt: "Sunset" },
    { src: bazooka2, alt: "Bazooka 2" },
    { src: croatia, alt: "Croatia" },
    { src: catedrala, alt: "Catedrala" },
    { src: brasov, alt: "Brasov" },
    { src: ski, alt: "Ski" },
    { src: pasare, alt: "Pasăre" }
  ];

  return (
    <section id="photos" className={darkMode ? 'dark-mode' : ''}>
      <p className="text-p1">Photos Taken</p>
      <h1 className="title">By Me</h1>
      
      <div className="wrapper">
        <button 
          id="left" 
          className="carousel-button"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <FaAngleLeft />
        </button>
        
        <div className="carousel" ref={carousel}>
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              draggable="false" 
              className="carousel-image"
            />
          ))}
        </div>
        
        <button 
          id="right" 
          className="carousel-button"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
};

export default Content;