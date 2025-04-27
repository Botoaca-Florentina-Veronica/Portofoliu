import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ProfileSection from './components/ProfileSection'
import EducationSection from './components/EducationSection'
import Experience from './components/Experience'
import Content from './components/Content'
import Footer from './components/Footer'
import LoadingOverlay from './components/LoadingOverlay';
import './mediaQueries.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <LoadingOverlay />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ProfileSection darkMode={darkMode} />
      <EducationSection darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Content darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App