import React from 'react';
import checkmark from '../assets/checkmark.png'
import downArrow from '../assets/down-arrow.png'

const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className={darkMode ? 'dark-mode' : ''}>
      <p className="text-p1">Explore my</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>ReactJS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>MUI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>C</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>NodeJS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>Linux</h3>
                  <p>Advanced</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>VScode</h3>
                  <p>Advanced</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="checkmark logo" className="checkmark-icon" />
                <div>
                  <h3>OOP principles<br />(JAVA)</h3>
                  <p>Advanced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src={downArrow} alt="Arrow icon" className="icon-arrow"
        onClick={() => document.getElementById('contact').scrollIntoView()} />
    </section>
  )
}

export default Experience