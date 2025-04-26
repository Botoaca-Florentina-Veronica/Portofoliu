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
import croatia3 from '../assets/croatia3.jpg';
import sunset2 from '../assets/sunset2.jpg';
import brasov2 from '../assets/brasov2.jpg';


const Content = ({ darkMode }) => {
  const theme = useTheme();

  const images = [
    { src: bazooka, alt: "Bazooka" },
    { src: croatia2, alt: "Croatia 2" },
    { src: bazooka2, alt: "Bazooka 2" },
    { src: brasov, alt: "Brasov" },
    { src: croatia3, alt: "Croatia 3" },
    { src: brasov2, alt: "Brasov 2" },
    { src: sunset, alt: "Sunset" },
    { src: sunset2, alt: "Sunset 2" },
    { src: croatia, alt: "Croatia" },
    { src: catedrala, alt: "Catedrala" },
    { src: ski, alt: "Ski" },
    { src: slovenia, alt: "Slovenia" },
    { src: zadar, alt: "Zadar" },
    { src: pasare, alt: "Pasăre" }
  ];

  // Configurație Masonry pentru a menține mai multe coloane și pe mobile
  const masonryBreakpoints = {
    default: 3,
    1100: 3, // Menține 3 coloane până la 1100px
    700: 2,   // Trece la 2 coloane sub 700px
  };

  return (
    <section id="photo-gallery" style={{
      padding: '2rem 0.5rem',
      backgroundColor: darkMode ? '#2d2d2d' : 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        padding: '0 0.5rem'
      }}>
        <p style={{
          margin: 0,
          fontSize: '1rem',
          color: darkMode ? '#aaa' : '#666',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>Memories from</p>
        <h1 style={{
          margin: '0.5rem 0 0',
          fontSize: '2rem',
          fontWeight: 700,
          color: darkMode ? 'antiquewhite' : '#222'
        }}>My Gallery</h1>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 10px'
      }}>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="photo-grid"
          columnClassName="photo-grid-column"
          style={{
            display: 'flex',
            marginLeft: '-15px',
            width: 'auto'
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="photo-item" style={{
              marginBottom: '15px',
              paddingLeft: '5px',
              backgroundClip: 'padding-box'
            }}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: darkMode 
                    ? '0 5px 15px rgba(0,0,0,0.3)' 
                    : '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (window.innerWidth > 768) { // Doar pe desktop
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = darkMode 
                      ? '0 8px 25px rgba(0,0,0,0.4)' 
                      : '0 8px 25px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = darkMode 
                      ? '0 5px 15px rgba(0,0,0,0.3)' 
                      : '0 5px 15px rgba(0,0,0,0.1)';
                  }
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Content;