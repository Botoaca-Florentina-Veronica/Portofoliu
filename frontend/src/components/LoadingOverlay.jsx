import React, { useEffect, useState } from 'react';

const LoadingOverlay = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Numărul de cărămizi poate fi ajustat
  const bricks = Array(5).fill(null);

  return (
    <div className={`loading-overlay ${loaded ? 'loaded' : ''}`}>
      <div className="loader">
        {bricks.map((_, index) => (
          <div key={index} className="brick"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingOverlay;