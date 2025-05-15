import React from 'react';
import { useTheme } from '@mui/material';
import PhotoGallery from './PhotoGallery';

// Importuri imagini WebP
import bazooka from '../assets/bazooka.webp';
import croatia2 from '../assets/croatia2.webp';
import sunset from '../assets/sunset.webp';
import bazooka2 from '../assets/bazooka2.webp';
import croatia from '../assets/croatia.webp';
import catedrala from '../assets/catedrala.webp';
import ski from '../assets/ski.webp';
import pasare from '../assets/pasare.webp';
import brasov from '../assets/brasov.webp';
import slovenia from '../assets/slovenia.webp';
import zadar from '../assets/zadar.webp';
import croatia3 from '../assets/croatia3.webp';
import sunset2 from '../assets/sunset2.webp';
import brasov2 from '../assets/brasov2.webp';

const Content = ({ darkMode }) => {
  const theme = useTheme();

  // Lista de imagini cu aspect ratio calculat (opțional)
  const images = [
    { src: bazooka, alt: "Bazooka", aspectRatio: 16/9 },
    { src: croatia2, alt: "Croatia 2", aspectRatio: 4/3 },
    { src: bazooka2, alt: "Bazooka 2", aspectRatio: 16/9 },
    { src: brasov, alt: "Brasov", aspectRatio: 3/2 },
    { src: croatia3, alt: "Croatia 3", aspectRatio: 4/3 },
    { src: brasov2, alt: "Brasov 2", aspectRatio: 3/2 },
    { src: sunset, alt: "Sunset", aspectRatio: 16/9 },
    { src: sunset2, alt: "Sunset 2", aspectRatio: 16/9 },
    { src: croatia, alt: "Croatia", aspectRatio: 4/3 },
    { src: catedrala, alt: "Catedrala", aspectRatio: 3/4 },
    { src: ski, alt: "Ski", aspectRatio: 16/9 },
    { src: slovenia, alt: "Slovenia", aspectRatio: 4/3 },
    { src: zadar, alt: "Zadar", aspectRatio: 16/9 },
    { src: pasare, alt: "Pasăre", aspectRatio: 1/1 }
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
        <PhotoGallery 
          images={images} 
          darkMode={darkMode} 
          skeletonStyle={{
            backgroundColor: darkMode ? '#3a3a3a' : '#f5f5f5',
            borderRadius: '8px'
          }}
        />
      </div>
    </section>
  );
};

export default Content;