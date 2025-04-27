import React, { useState } from 'react';
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

  // Componenta internă PhotoGallery
  const PhotoGallery = ({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      setLightboxOpen(false);
      document.body.style.overflow = 'auto';
    };

    const goToPrev = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const goToNext = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const masonryBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
    };

    return (
      <>
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
            <div 
              key={index} 
              className="photo-item" 
              style={{
                marginBottom: '15px',
                paddingLeft: '5px',
                backgroundClip: 'padding-box'
              }}
              onClick={() => openLightbox(index)}
            >
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
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            </div>
          ))}
        </Masonry>

        {lightboxOpen && (
          <div className={`lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
            <button 
              className="lightbox-close" 
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close lightbox"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                zIndex: 10001
              }}
            >
              &times;
            </button>
            
            <div className="lightbox-nav" style={{
              position: 'absolute',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 20px',
              boxSizing: 'border-box'
            }}>
              <button 
                className="prev" 
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                aria-label="Previous image"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: '10px'
                }}
              >
                &#10094;
              </button>
              <button 
                className="next" 
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next image"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: '10px'
                }}
              >
                &#10095;
              </button>
            </div>
            
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                transform: lightboxOpen ? 'scale(1)' : 'scale(0.9)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
        )}
      </>
    );
  };

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
        <PhotoGallery images={images} />
      </div>
    </section>
  );
};

export default Content;