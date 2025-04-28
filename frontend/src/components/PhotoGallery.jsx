import React, { useState, useEffect, useCallback } from 'react';
import Masonry from 'react-masonry-css';

const PhotoGallery = ({ images, darkMode }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  // Navigare la imaginea anterioară
  const goToPrev = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setTransitioning(false), 300);
  }, [transitioning, images.length]);

  // Navigare la imaginea următoare
  const goToNext = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setTransitioning(false), 300);
  }, [transitioning, images.length]);

  // Deschide lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Închide lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  // Handler pentru taste
  const handleKeyDown = useCallback((e) => {
    if (!lightboxOpen) return;
    e.preventDefault();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  }, [lightboxOpen, goToPrev, goToNext, closeLightbox]);

  // Adăugare/ștergere event listener pentru taste
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Drag & drop pentru desktop
  const handleMouseDown = (e) => {
    if (window.innerWidth <= 768) return;
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !lightboxOpen || window.innerWidth <= 768) return;
    
    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 50) {
      setIsDragging(false);
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Configurație Masonry
  const masonryBreakpoints = {
    default: 3,
    1100: 3,
    700: 2,
  };
  
  return (
    <>
      {/* Grid-ul Masonry cu imagini */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: darkMode ? 'rgba(45,45,45,0.98)' : 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            opacity: lightboxOpen ? 1 : 0,
            pointerEvents: lightboxOpen ? 'all' : 'none',
            transition: 'opacity 0.3s ease',
            cursor: isDragging ? 'grabbing' : 'default'
          }}
          onClick={closeLightbox}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Buton închidere */}
          <button 
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
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          {/* Navigare între imagini */}
          <div style={{
            position: 'absolute',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 20px',
            boxSizing: 'border-box'
          }}>
            <button 
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px'
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button 
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px'
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>
          
          {/* Imaginea curentă */}
          <img 
            src={images[currentImageIndex].src} 
            alt={images[currentImageIndex].alt} 
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              transform: lightboxOpen ? 'scale(1)' : 'scale(0.9)',
              transition: transitioning ? 'opacity 0.3s ease' : 'transform 0.3s ease, opacity 0.3s ease',
              opacity: transitioning ? 0.7 : 1,
              userSelect: 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PhotoGallery;