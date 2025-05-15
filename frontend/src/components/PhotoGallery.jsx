import React, { useState, useEffect, useCallback } from 'react';
import Masonry from 'react-masonry-css';

const useLazyLoad = (options = { threshold: 0.1, rootMargin: '200px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

const PhotoGallery = ({ images, darkMode, skeletonStyle }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lightbox handlers (păstrate ca înainte)
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  // Masonry layout
  const masonryBreakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
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
        {images.map((img, index) => {
          const [ref, isVisible] = useLazyLoad();
          return (
            <div 
              key={index}
              ref={ref}
              style={{
                marginBottom: '15px',
                paddingLeft: '15px',
                width: '100%'
              }}
              onClick={() => openLightbox(index)}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: img.aspectRatio || 16/9,
                ...skeletonStyle,
                overflow: 'hidden'
              }}>
                <img
                  src={isVisible ? img.src : ''}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    borderRadius: skeletonStyle.borderRadius
                  }}
                />
              </div>
            </div>
          );
        })}
      </Masonry>

      {/* Lightbox (păstrat ca înainte) */}
      {lightboxOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: darkMode ? 'rgba(45,45,45,0.98)' : 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer'
            }}
          >
            ×
          </button>

          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PhotoGallery;