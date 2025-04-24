import React from 'react';
import profilePic from '../assets/poza git-modified.png';
import linkedInLogo from '../assets/linkedIn logo.png';
import githubLogo from '../assets/github-logo.png';
import instaLogo from '../assets/insta-logo.png';

const ProfileSection = ({ darkMode }) => {
  return (
    <section id="profile" className={darkMode ? 'dark-mode' : ''}>
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
            onClick={() => window.open('./assets/CV-Florentina-Veronica-Botoaca.pdf')}
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