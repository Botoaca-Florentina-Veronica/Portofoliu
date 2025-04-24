import React from 'react';
import phome from '../assets/phone.png'
import email from '../assets/email.png'


const Footer = ({ darkMode }) => {
  return (
    <section id="contact" className={darkMode ? 'dark-mode' : ''}>
      <p className="text-p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info">
        <div className="contact-info-container">
          <img src={email} alt="email icon" className="contact-icon" />
          <p><a href="mailto:veraflorentina01@gmail.com">My email</a></p>
        </div>

        <div className="contact-info-container">
          <img src={phome} alt="phone icon" className="contact-icon" />
          <p>Phone: 0735470025</p>
        </div>
      </div>
    </section>
  )
}

export default Footer


