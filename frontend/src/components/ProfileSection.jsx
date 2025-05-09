import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import profilePic from '../assets/poza git-modified.png';
import linkedInLogo from '../assets/linkedIn logo.png';
import githubLogo from '../assets/github-logo.png';
import instaLogo from '../assets/insta-logo.png';

gsap.registerPlugin(MotionPathPlugin);

const ProfileSection = ({ darkMode }) => {
  const planeRef = useRef(null);
  const pathRef = useRef(null);
  const [pathData, setPathData] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

const generateLoopPath = () => {
  const w = window.innerWidth;
  const margin = 50; // reducere la 50px ca avionul sa apara imediat in stanga dupa ce iese in dreapta
  const startX = -margin;
  const endX = w + margin;
  const startY = 200;
  const points = [];
  const totalPoints = 1000;
  const waveCount = 2;
  const amplitude = 60;

  for (let i = 0; i <= totalPoints; i++) {
    const t = i / totalPoints;
    const x = startX + (endX - startX) * t;
    const y = startY + Math.sin(t * Math.PI * 2 * waveCount) * amplitude;
    points.push([x, y]);
  }

  let path = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    path += ` L${points[i][0]},${points[i][1]}`;
  }
  return path;
};


  useLayoutEffect(() => {
    const updatePath = () => {
      const newPath = generateLoopPath();
      setPathData(newPath);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, []);

  useLayoutEffect(() => {
    if (!pathData || !planeRef.current || !pathRef.current) return;

    gsap.set(planeRef.current, {
      opacity: 1,
      xPercent: -50,
      yPercent: -50,
    });

    const tween = gsap.to(planeRef.current, {
      duration: 25,
      repeat: -1,
      ease: 'none',
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });

    return () => tween.kill();
  }, [pathData]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <section id="profile" className={darkMode ? 'dark-mode' : ''} style={{ position: 'relative' }}>
      <svg
        style={{
          display: isMobile ? 'none' : undefined,
          position: 'fixed',
          width: '100vw',
          height: '200px',
          top: 0,
          left: 0,
          overflow: 'visible',
          pointerEvents: 'none',
          visibility: 'hidden',
          zIndex: 1000
        }}
      >
        <path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="transparent"
        />
      </svg>

      <div
        ref={planeRef}
        style={{
          display: isMobile ? 'none' : undefined,
          position: 'absolute',
          width: '150px',
          height: '150px',
          opacity: 1,
          zIndex: 15,
          pointerEvents: 'none',
          transformOrigin: 'center center',
          marginLeft: '-75px',
          marginTop: '-75px',
        }}
      >
        <dotlottie-player
          src="https://lottie.host/02c2376a-b63f-4c01-8e92-71c0bc80c662/YBmzfBifVm.lottie"
          background="transparent"
          speed="1"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          loop
          autoplay
        />
      </div>

      <div>
        <img className="pic-container" src={profilePic} alt="Vera-profile pic" />
      </div>
      <div className="text">
        <p className={`text-p1 ${darkMode ? 'dark-text' : ''}`}>Hello, I'm</p>
        <h1 className={`title ${darkMode ? 'dark-text' : ''}`}>Florentina Veronica Boțoacă</h1>
        <p className={`text-p2 ${darkMode ? 'dark-text' : ''}`}>Computer Science Student</p>
        <div className="btn-container">
          <button 
            className={`btn btn-color-2 ${darkMode ? 'dark' : ''}`} 
            onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:EU:be776879-c810-4840-ab91-46655130e2d5')}
          >
            Download CV
          </button>
          <button 
            className={`btn btn-color-1 ${darkMode ? 'dark' : ''}`} 
            onClick={() => document.getElementById('contact').scrollIntoView()}
          >
            Contact info
          </button>
        </div>
        <div id="social-container">
          <img 
            src={linkedInLogo} 
            alt="My LinkedIn profile" 
            className={`icon-linkedIn ${darkMode ? 'dark-icon' : ''}`}
            onClick={() => window.open('https://www.linkedin.com/in/florentina-veronica-bo%C8%9Boac%C4%83-376374260/')} 
          />
          <img 
            src={githubLogo} 
            alt="My GitHub profile" 
            className={`icon ${darkMode ? 'dark-icon' : ''}`}
            onClick={() => window.open('https://github.com/Botoaca-Florentina-Veronica')} 
          />
          <img 
            src={instaLogo} 
            alt="My Instagram profile" 
            className={`icon ${darkMode ? 'dark-icon' : ''}`}
            onClick={() => window.open('https://www.instagram.com/vera.botoaca/')} 
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
