import React from 'react';
import upt from '../assets/upt.jpg'
import cat from '../assets/cat.png'
import pupil from '../assets/pupil.png'
import student from '../assets/student.png'
import arrow from '../assets/down-arrow.png'

const EducationSection = ({ darkMode }) => {
  return (
    <section id="about" className={darkMode ? 'dark-mode' : ''}>
      <p className="text-p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="pic-container-upt">
          <img src={upt} alt="UPT picture" className="upt" />
          <img src={cat} alt="cat at a window" className="cat-sticker" />
        </div>

        <div className="about-details">
          <div className="about-containers">
            <div className="details-container">
              <img src={student} alt="Student logo" className="icon-university" />
              <h3>University</h3>
              <p> 2022 - 2026 <br /> Computer Science-Bachelors Degree<br />Polytechnic University of Timisoara</p>
            </div>
            <div className="details-container">
              <img src={pupil} alt="Pupil logo" className="icon-highschool" />
              <h3>Highschool</h3>
              <p> 2018 - 2022 <br /> Mathematics-informatics profile<br />'Traian' National College<br />Drobeta-Turnu Severin</p>
            </div>
          </div>
          <div className="text"> 
            <p>I am a passionate amateur photographer, artist and computer science student with a keen interest in expanding my knowledge beyond the classroom. 
              Driven by curiosity and ambition, I am committed to mastering web development independently. 
              My dedication to learning is proven in my proactive approach, seeking out online resources, tutorials, and projects to enhance
               my skills. I balance my academic responsibilities with personal projects, constantly challenging myself to grow and innovate. 
               With a blend of theoretical knowledge and practical experience, I am on a path to becoming a well-rounded and proficient developer.</p>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon-arrow"
        onClick={() => document.getElementById('experience').scrollIntoView()} />
    </section>
  )
}

export default EducationSection