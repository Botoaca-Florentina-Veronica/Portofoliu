import React from 'react';
import { useTheme } from '@mui/material';
import Masonry from 'react-masonry-css';

// Importuri imagini
import bazooka from '../assets/bazooka.JPG';
import croatia2 from '../assets/croatia2.jpg';
import sunset from '../assets/sunset.jpg';
import bazooka2 from '../assets/bazooka2.JPG';
import croatia from '../assets/croatia.jpg';
import catedrala from '../assets/catedrala.JPG';
import ski from '../assets/ski.jpg';
import pasare from '../assets/pasare.JPG';
import brasov from '../assets/brasov.jpg';
import slovenia from '../assets/slovenia.jpg';
import zadar from '../assets/zadar.jpg';

const Content = ({ darkMode }) => {
  const theme = useTheme();

  const images = [
    { src: bazooka, alt: "Bazooka" },
    { src: croatia2, alt: "Croatia 2" },
    { src: sunset, alt: "Sunset" },
    { src: bazooka2, alt: "Bazooka 2" },
    { src: croatia, alt: "Croatia" },
    { src: catedrala, alt: "Catedrala" },
    { src: brasov, alt: "Brasov" },
    { src: ski, alt: "Ski" },
    { src: slovenia, alt: "Slovenia" },
    { src: zadar, alt: "Zadar" },
    { src: pasare, alt: "Pasăre" }
  ];
  // Configurație simplificată Masonry
  const masonryBreakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="photo-gallery" style={{
      padding: '4rem 2rem',
      backgroundColor: darkMode ? '#2d2d2d' : 'white'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        padding: '0 1rem'
      }}>
        <p style={{
          margin: 0,
          fontSize: '1.1rem',
          color: darkMode ? '#aaa' : '#666',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>Memories from</p>
        <h1 style={{
          margin: '0.5rem 0 0',
          fontSize: '2.8rem',
          fontWeight: 700,
          color: darkMode ? 'antiquewhite' : '#222'
        }}>My Gallery</h1>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="photo-grid"
          columnClassName="photo-grid-column"
        >
          {images.map((img, index) => (
            <div key={index} className="photo-item">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="gallery-image"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Content;