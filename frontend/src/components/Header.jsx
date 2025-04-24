import React from 'react';
import { WbSunny, Brightness3 } from '@mui/icons-material';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h1 className={`navbar-brand ${darkMode ? 'dark-text' : ''}`}>Vera</h1>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="./#about" className={`nav-link ${darkMode ? 'dark' : ''}`}>About</a>
            </li>
            <li className="nav-item">
              <a href="./#experience" className={`nav-link ${darkMode ? 'dark' : ''}`}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="./#contact" className={`nav-link ${darkMode ? 'dark' : ''}`}>Contact</a>
            </li>
          </ul>
        </div>

        <div className="dark-mode-toggle">
          <button 
            onClick={toggleDarkMode}
            className={`dark-mode-toggle-btn ${darkMode ? 'dark' : ''}`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <WbSunny sx={{ fontSize: 30, color: 'white' }} />
            ) : (
              <Brightness3 sx={{ fontSize: 30 }} />
            )}
          </button>
        </div>
      </div>
    </nav> 
  );
};

export default Header;